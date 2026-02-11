import { motion } from "framer-motion";

const letterVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.04,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Hero = () => {
  const name = "Gay Shin Lee";

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, hsl(0 0% 7%) 0%, hsl(0 0% 7%) 50%, #0d1526 100%)",
      }}
    >
      {/* Subtle blue-yellow radial glow in top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, hsla(220, 60%, 45%, 0.15) 0%, hsla(45, 80%, 55%, 0.08) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl w-full relative z-10 space-y-8">
        {/* Name - staggered letter animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none overflow-hidden">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground tracking-wide"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          UX/UI Designer
        </motion.p>

        {/* Body text */}
        <motion.div
          className="max-w-xl space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            I love improving digital experiences.
          </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Welcome to my small corner of web.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-foreground/10 max-w-xl"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        />

        {/* Experience */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Experience
          </p>
          <div className="space-y-1">
            <p className="text-sm text-foreground/70">
              FlowTutor (Aug – Sept 2025)
            </p>
            <p className="text-sm text-muted-foreground">
              … (Other roles)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
