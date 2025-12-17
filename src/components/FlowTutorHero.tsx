import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FlowTutorHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Matte black background with subtle gradient */}
      <div className="absolute inset-0 bg-hero-matte" />
      
      {/* Glassmorphism accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Featured Research
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Streamlined Learning.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Reducing cognitive load in video-based learning through an AI-integrated workspace.
              </p>
            </div>

            {/* Metrics Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <div className="px-4 py-2.5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-border/60 transition-colors">
                <p className="text-2xl font-bold text-foreground">25%</p>
                <p className="text-xs text-muted-foreground">Higher Retention</p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-border/60 transition-colors">
                <p className="text-2xl font-bold text-foreground">n=40</p>
                <p className="text-xs text-muted-foreground">Users Validated</p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-border/60 transition-colors">
                <p className="text-2xl font-bold text-success">p&lt;0.05</p>
                <p className="text-xs text-muted-foreground">Statistical Significance</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/case-study/flowtutor"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:gap-4"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow effect behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-glow/10 to-primary/5 rounded-3xl blur-2xl" />
            
            {/* Main mockup container */}
            <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm shadow-2xl">
              <img
                src="/FThero.png"
                alt="FlowTutor dashboard showing streamlined learning interface with chapter navigation, progress tracking, and AI-powered features"
                className="w-full h-auto"
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
