import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const BUBBLE_CONFIGS = [
  { radius: 180, color: "hsl(220, 65%, 55%)", opacity: 0.30 },
  { radius: 150, color: "hsl(220, 70%, 52%)", opacity: 0.25 },
  { radius: 130, color: "hsl(220, 62%, 50%)", opacity: 0.28 },
  { radius: 160, color: "hsl(220, 66%, 52%)", opacity: 0.22 },
];

const FloatingBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize bubbles with random positions and slow velocities
    bubblesRef.current = BUBBLE_CONFIGS.map((cfg) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: cfg.radius,
      color: cfg.color,
      opacity: cfg.opacity,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bubbles = bubblesRef.current;

      // Update positions
      for (const b of bubbles) {
        b.x += b.vx;
        b.y += b.vy;

        // Soft wall bounce
        if (b.x - b.radius < 0) { b.vx = Math.abs(b.vx) * 0.95; b.x = b.radius; }
        if (b.x + b.radius > canvas.width) { b.vx = -Math.abs(b.vx) * 0.95; b.x = canvas.width - b.radius; }
        if (b.y - b.radius < 0) { b.vy = Math.abs(b.vy) * 0.95; b.y = b.radius; }
        if (b.y + b.radius > canvas.height) { b.vy = -Math.abs(b.vy) * 0.95; b.y = canvas.height - b.radius; }

        // Maintain minimum speed for continuous motion
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        const minSpeed = 0.3;
        const maxSpeed = 1.0;
        if (speed < minSpeed) {
          const scale = minSpeed / Math.max(speed, 0.01);
          b.vx *= scale;
          b.vy *= scale;
        }
        if (speed > maxSpeed) {
          const scale = maxSpeed / speed;
          b.vx *= scale;
          b.vy *= scale;
        }
      }

      // Collision detection & elastic bounce
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const a = bubbles[i];
          const b = bubbles[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius;

          if (dist < minDist && dist > 0) {
            // Normalize collision vector
            const nx = dx / dist;
            const ny = dy / dist;

            // Relative velocity along collision normal
            const dvx = a.vx - b.vx;
            const dvy = a.vy - b.vy;
            const dvn = dvx * nx + dvy * ny;

            // Only resolve if approaching
            if (dvn > 0) {
              // Elastic collision response (equal mass)
              a.vx -= dvn * nx * 0.8;
              a.vy -= dvn * ny * 0.8;
              b.vx += dvn * nx * 0.8;
              b.vy += dvn * ny * 0.8;
            }

            // Separate overlapping bubbles
            const overlap = (minDist - dist) / 2;
            a.x -= overlap * nx;
            a.y -= overlap * ny;
            b.x += overlap * nx;
            b.y += overlap * ny;
          }
        }
      }

      // Render bubbles with radial gradient glow
      for (const b of bubbles) {
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gradient.addColorStop(0, b.color.replace(")", ` / ${b.opacity})`).replace("hsl(", "hsl("));
        gradient.addColorStop(0.5, b.color.replace(")", ` / ${b.opacity * 0.5})`).replace("hsl(", "hsl("));
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
      style={{ filter: "blur(40px)" }}
    />
  );
};

export default FloatingBubbles;
