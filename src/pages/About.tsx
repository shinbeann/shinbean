import Navigation from "@/components/Navigation";
import aboutMeImage from "/public/aboutme.jpg";
import meBookImage from "@/assets/me-book.jpg";
import meViolinImage from "@/assets/me-violin.jpg";
import meSkiImage from "@/assets/me-ski.jpg";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const sectionVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Subtle glowing blue gradient bubbles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 55% 45%), hsl(220 50% 22%) 50%, transparent 70%)", top: "5%", left: "10%" }}
          animate={{
            x: [0, 60, -40, 20, -30, 0],
            y: [0, -50, 30, -20, 40, 0],
            scale: [1, 1.15, 0.95, 1.1, 0.9, 1],
            opacity: [0.18, 0.30, 0.14, 0.26, 0.16, 0.18],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 60% 42%), hsl(220 50% 20%) 50%, transparent 70%)", top: "40%", right: "5%" }}
          animate={{
            x: [0, -50, 35, -20, 45, 0],
            y: [0, 40, -55, 25, -35, 0],
            scale: [1, 0.9, 1.12, 0.95, 1.05, 1],
            opacity: [0.14, 0.26, 0.12, 0.24, 0.15, 0.14],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, hsl(220 52% 40%), hsl(220 48% 18%) 50%, transparent 70%)", bottom: "15%", left: "30%" }}
          animate={{
            x: [0, 45, -30, 15, -40, 0],
            y: [0, -35, 50, -25, 30, 0],
            scale: [1, 1.1, 0.88, 1.06, 0.92, 1],
            opacity: [0.16, 0.28, 0.12, 0.25, 0.14, 0.16],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 56% 43%), hsl(220 50% 21%) 50%, transparent 70%)", top: "70%", right: "25%" }}
          animate={{
            x: [0, -35, 50, -25, 40, 0],
            y: [0, 55, -30, 40, -20, 0],
            scale: [1, 1.14, 0.92, 1.08, 0.96, 1],
            opacity: [0.12, 0.24, 0.10, 0.22, 0.13, 0.12],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navigation tone="dark" enableSmartHide={false} />

      <main className="flex-grow pt-24 pb-20 px-4 relative z-10">
        <article className="container mx-auto max-w-5xl space-y-16">
          {/* Section 1: Bio / Hook */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,0.9fr)] items-start"
          >
            <header className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Gay Shin Lee
              </h1>
              <p className="text-white text-lg md:text-xl">
                UX/UI Designer
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-prose leading-relaxed">
                My initial interest in AI evolved into a fascination with how humans actually interact with them.
                This shifted my passion from pure development to User Experience, specifically within
                <strong> Agentic Experience (AX)</strong>.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-prose leading-relaxed">
                Beyond that, I love refining little details that matter to make sure people actually use, value and perhaps even fall in love with digital products.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-prose leading-relaxed">
                <strong>Actively looking for full-time product design or UX/UI design roles starting June 2026.</strong>
              </p>
              <div className="flex items-center gap-4 pt-0">
                <a
                  href="mailto:gayshinlee@gmail.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/gayshinlee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/gayshinlee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="/GAYSHINLEE_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-5 w-5" />
                </a>
              </div>
            </header>

            <div className="flex justify-center md:justify-end">
              <div className="relative aspect-[4/5] w-[90%] max-w-xs overflow-hidden bg-muted/20">
                <img
                  src={aboutMeImage}
                  alt="Portrait of Gay Shin Lee"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 2: Experience */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg font-semibold text-foreground">
              Work
            </p>
            {/* Timeline: horizontal row of cards with line segments between them */}
            <div className="overflow-x-auto pb-2">
              <div className="relative flex flex-row items-stretch gap-4 md:gap-0 min-w-max md:min-w-0">
                {[
                  {
                    company: "HTX (Home Team Science and Technology Agency)",
                    role: "UI/UX Lead",
                    year: "2025",
                  },
                  {
                    company: "National Kidney Foundation (NKF)",
                    role: "UI/UX Lead",
                    year: "2025",
                  },
                  {
                    company: "TechCreate Group",
                    role: "Fullstack Software Engineer",
                    year: "2025",
                  },
                  {
                    company: "DBS Bank",
                    role: "QA Tester",
                    year: "2024",
                  },
                ].map((item, index) => (
                  <div key={item.company} className="contents">
                    <div className="relative flex flex-1 flex-col rounded-xl bg-[#1A1A1A] p-4 min-w-[200px] md:min-w-0 transition-all duration-300 hover:-translate-y-1 hover:bg-[#222222] hover:shadow-lg cursor-pointer">
                      <p className="text-xs text-muted-foreground text-right mb-1">
                        {item.year}
                      </p>
                      <p className="font-bold text-foreground text-sm leading-tight">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.role}
                      </p>
                    </div>
                    {index < 3 && (
                      <div
                        className="hidden md:flex flex-shrink-0 w-4 md:w-6 items-center"
                        aria-hidden
                      >
                        <div className="w-full h-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 3: Beyond work */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg font-semibold text-foreground">
              Beyond work
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-[40%] space-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={meBookImage}
                    alt="Books and matcha"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  I really do like books and matcha
                </p>
              </div>
              <div className="w-full md:w-[40%] space-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={meViolinImage}
                    alt="National day performance"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  2024 National Day performance for Minister Maliki Osman @ Siglap CC
                </p>
              </div>
              <div className="w-full md:w-[40%] space-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={meSkiImage}
                    alt="Trying new things"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  Trying new things!!!
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Skills - Spec Sheet Style */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg font-semibold text-foreground">
              Skills & Tools
            </p>
            
            <div className="space-y-0">
              {/* Design Row */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 md:py-8 border-b border-white/10">
              <div className="w-full md:w-32 flex-shrink-0">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Design
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Figma · Figma Make · Lovable · Sketch · InVision Studio
                </p>
              </div>
            </div>

            {/* Research Row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 md:py-8 border-b border-white/10">
              <div className="w-full md:w-32 flex-shrink-0">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Research
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Field Studies · Contextual Inquiry · A/B Testing · Surveys · Questionnaires · Heuristic Evaluation · Cognitive Walkthrough
                </p>
              </div>
            </div>

            {/* Development Row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 md:py-8 border-b border-white/10">
              <div className="w-full md:w-32 flex-shrink-0">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Development
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Java · HTML/CSS/JS · React.js · Python
                </p>
              </div>
            </div>
            </div>
          </motion.section>
        </article>
      </main>

      <footer className="border-t border-border/60 py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          Gay Shin Lee © 2026 All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default About;
