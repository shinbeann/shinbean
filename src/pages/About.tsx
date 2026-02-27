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
      <Navigation tone="dark" enableSmartHide={false} />

      {/* Floating blue gradient bubbles - behind content */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 65% 55%), hsl(220 58% 30%) 50%, transparent 70%)", top: "5%", left: "10%" }}
          animate={{
            x: [0, 90, -60, 40, -70, 30, 0],
            y: [0, -70, 50, -40, 60, -25, 0],
            scale: [1, 1.18, 0.93, 1.12, 0.88, 1.06, 1],
            opacity: [0.26, 0.43, 0.20, 0.37, 0.23, 0.34, 0.26],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", times: [0, 0.14, 0.28, 0.46, 0.62, 0.82, 1] }}
        />
        <motion.div
          className="absolute w-[320px] h-[320px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 70% 52%), hsl(220 58% 28%) 50%, transparent 70%)", top: "40%", right: "5%" }}
          animate={{
            x: [0, -70, 55, -35, 65, -20, 0],
            y: [0, 60, -75, 45, -55, 30, 0],
            scale: [1, 0.88, 1.14, 0.93, 1.1, 0.92, 1],
            opacity: [0.20, 0.37, 0.17, 0.35, 0.22, 0.31, 0.20],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", times: [0, 0.13, 0.3, 0.47, 0.64, 0.83, 1] }}
        />
        <motion.div
          className="absolute w-[280px] h-[280px] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, hsl(220 62% 50%), hsl(220 55% 26%) 50%, transparent 70%)", bottom: "15%", left: "30%" }}
          animate={{
            x: [0, 65, -45, 30, -55, 20, 0],
            y: [0, -55, 70, -40, 50, -30, 0],
            scale: [1, 1.12, 0.86, 1.08, 0.9, 1.05, 1],
            opacity: [0.23, 0.41, 0.17, 0.36, 0.20, 0.32, 0.23],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.32, 0.5, 0.67, 0.84, 1] }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(220 66% 52%), hsl(220 56% 28%) 50%, transparent 70%)", top: "70%", right: "25%" }}
          animate={{
            x: [0, -55, 70, -40, 60, -25, 0],
            y: [0, 75, -45, 55, -35, 40, 0],
            scale: [1, 1.16, 0.9, 1.1, 0.94, 1.07, 1],
            opacity: [0.17, 0.35, 0.14, 0.31, 0.19, 0.29, 0.17],
          }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.28, 0.46, 0.63, 0.81, 1] }}
        />
      </div>

      <main className="flex-grow pt-24 pb-20 px-4 relative z-[2]">
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
