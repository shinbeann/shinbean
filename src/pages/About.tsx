import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutMeImage from "/public/aboutme.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Atom, Code2, Figma, Cpu, Smartphone, Framer } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const containerVariants: any = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren" as const,
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const formatSingaporeTime = () => {
  return new Date().toLocaleTimeString("en-SG", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const About = () => {
  const [sgTime, setSgTime] = useState<string>(formatSingaporeTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSgTime(formatSingaporeTime());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation tone="dark" enableSmartHide={false} />

      <main className="flex-grow pt-24 pb-20 px-4">
        <article className="container mx-auto max-w-6xl space-y-10">
          {/* Page intro (SEO-friendly H1) */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About · Profile</p>
            <h1 className="text-xl md:text-2xl font-medium text-foreground">Shinbean — CS × Design</h1>
            <p className="text-sm text-muted-foreground max-w-xl">
              Blending computer science, interface design, and research to shape AI-native products that still feel deeply
              human.
            </p>
          </header>

          {/* Bento grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3 auto-rows-[minmax(0,1fr)]"
          >
            {/* Card 1: Portrait */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/10 lg:row-span-2 min-h-[320px] md:min-h-[420px]"
            >
              <img
                src={aboutMeImage}
                alt="Portrait of Shinbean"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Shinbean</p>
                  <p className="text-sm font-medium text-foreground">CS + Design</p>
                </div>
                <span className="rounded-full bg-background/60 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground border border-border/60">
                  Portfolio 2025
                </span>
              </div>
            </motion.div>

            {/* Card 2: Manifesto */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-border/70 bg-muted/10 p-6 md:p-8 lg:col-span-2 flex items-center"
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight max-w-3xl">
                Bridging the gap between{" "}
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
                  Computer Science
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                  Human Empathy
                </span>
                .
              </p>
            </motion.div>

            {/* Card 3: Toolkit */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-border/70 bg-muted/10 p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Toolkit</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Tools shape thinking. These are the ones I reach for when designing and shipping AI-native products.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <TechIcon label="React">
                  <Atom className="h-6 w-6" />
                </TechIcon>
                <TechIcon label="Python">
                  <Code2 className="h-6 w-6" />
                </TechIcon>
                <TechIcon label="Figma">
                  <Figma className="h-6 w-6" />
                </TechIcon>
                <TechIcon label="Llama.cpp">
                  <Cpu className="h-6 w-6" />
                </TechIcon>
                <TechIcon label="Android">
                  <Smartphone className="h-6 w-6" />
                </TechIcon>
                <TechIcon label="Framer Motion">
                  <Framer className="h-6 w-6" />
                </TechIcon>
              </div>
            </motion.div>

            {/* Card 4: Origin */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background/80 to-muted/40 p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Origin</p>
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-[hsl(var(--primary)/0.2)] via-background to-[hsl(var(--accent)/0.2)] p-4">
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-border/40" />
                  <div className="absolute left-6 top-6 h-6 w-6 rounded-full bg-primary/60 shadow-[0_0_30px_rgba(0,0,0,0.6)]" />
                  <p className="relative text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
                    Singapore — mini map
                  </p>
                  <p className="relative mt-8 text-sm font-medium text-foreground">Based in Singapore.</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Local time</p>
                  <p className="text-sm font-medium text-foreground">SGT {sgTime}</p>
                </div>
                <span className="rounded-full border border-border/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  GMT+8
                </span>
              </div>
            </motion.div>

            {/* Card 5: Story */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl border border-border/70 bg-muted/10 p-6 lg:col-span-2 flex flex-col"
            >
              <div className="mb-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Story</p>
                <p className="text-sm font-medium text-foreground">How I like to work.</p>
              </div>

              <div className="max-h-56 overflow-y-auto pr-1 text-sm text-muted-foreground space-y-4 leading-relaxed max-w-[60ch]">
                <p>
                  I elevate people&apos;s stories into data-backed decisions. I care about how real teams work, what friction
                  they feel, and how products can remove cognitive overhead instead of adding to it.
                </p>
                <p>
                  Through mixed-methods research and iterative prototyping, I turn ambiguous problem spaces into concrete,
                  testable flows. I prize clarity over cleverness, and design artifacts that help stakeholders make better
                  choices together.
                </p>
                <p>
                  My happiest projects sit at the intersection of AI, product, and research—where the goal is to ship
                  intuitive, inclusive experiences that still respect the messy, human context they live in.
                </p>
              </div>
            </motion.div>
          </motion.section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

interface TechIconProps {
  label: string;
  children: React.ReactNode;
}

const TechIcon = ({ label, children }: TechIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-muted-foreground transition-colors hover:border-primary/70 hover:text-foreground"
          aria-label={label}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs font-medium">
        {label}
      </TooltipContent>
    </Tooltip>
  );
};

export default About;
