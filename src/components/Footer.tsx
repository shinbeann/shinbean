import { Linkedin, Github, BookOpen } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

interface MagneticLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const MagneticLink = ({ href, label, ariaLabel, children }: MagneticLinkProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-5 py-2.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/70 hover:bg-background hover:text-foreground"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
      <span className="underline-offset-4 decoration-transparent group-hover:decoration-current">
        {label}
      </span>
    </motion.a>
  );
};

const ConfettiBurst = () => {
  const pieces = Array.from({ length: 40 });
  const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-destructive"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {pieces.map((_, index) => {
        const xOffset = (Math.random() - 0.5) * 160;
        const yOffset = -60 - Math.random() * 40;
        const delay = Math.random() * 0.15;
        const duration = 0.6 + Math.random() * 0.3;
        const colorClass = colors[index % colors.length];

        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, y: yOffset, x: xOffset, rotate: 120 + Math.random() * 120 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={`absolute h-1.5 w-1.5 rounded-full ${colorClass}`}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCopyEmail = async () => {
    const email = "gayshinlee@gmail.com";

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setShowConfetti(true);
      window.setTimeout(() => {
        setCopied(false);
        setShowConfetti(false);
      }, 1600);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <footer className="relative px-4 pt-20 pb-12 md:pb-16 min-h-[75vh] md:min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-center">
          {/* Big statement */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <h2 className="font-semibold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
              Let&apos;s Build Something.
            </h2>
            <p className="max-w-md text-sm md:text-base text-foreground/80 leading-relaxed">
              Currently looking for internship or full-time roles where I can contribute to user-centric products. If you are looking for a designer who speaks the language of engineers and advocates for the needs of users, I’d love to chat.
            </p>
          </div>

          {/* Email + socials */}
          <div className="relative space-y-8">
            <div className="relative">
              {showConfetti && <ConfettiBurst />}

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group relative w-full overflow-hidden rounded-3xl border border-border/70 bg-background/90 px-6 py-5 text-left shadow-xl backdrop-blur-md transition-colors hover:border-primary/70 hover:bg-background"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Primary email
                  </p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <span className="font-mono text-2xl md:text-3xl tracking-tight">
                      gayshinlee@gmail.com
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
                      {copied ? "Copied!" : "Click to copy"}
                    </span>
                  </div>
                </div>
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
              <div className="flex flex-wrap gap-4">
                <MagneticLink
                  href="https://www.linkedin.com/in/shin-lee-gay/"
                  label="LinkedIn"
                  ariaLabel="Open LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </MagneticLink>
                <MagneticLink
                  href="https://github.com/"
                  label="GitHub"
                  ariaLabel="Open GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </MagneticLink>
                <MagneticLink
                  href="https://read.cv/"
                  label="Resume"
                  ariaLabel="Open Read.cv profile"
                >
                  <BookOpen className="h-4 w-4" />
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
