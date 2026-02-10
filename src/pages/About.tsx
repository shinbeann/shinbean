import Navigation from "@/components/Navigation";
import aboutMeImage from "/public/aboutme.jpg";
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
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation tone="dark" enableSmartHide={false} />

      <main className="flex-grow pt-24 pb-20 px-4">
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
              <div className="flex items-center gap-4">
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
              <div className="relative aspect-[4/5] w-[70%] max-w-xs overflow-hidden bg-muted/20">
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
              Recent roles
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
                    <div className="relative flex flex-1 flex-col rounded-xl border border-border bg-muted/5 p-4 min-w-[200px] md:min-w-0">
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

          {/* Section 3: The How - Skills */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <header className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Skills & Tools</h2>
            </header>

            <div className="grid grid-cols-3 gap-x-8 gap-y-1">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Design</h3>
              <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Research</h3>
              <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Development</h3>

              {(() => {
                const design = ["Figma", "Figma Make", "Lovable", "Sketch", "InVision Studio"];
                const research = ["Field Studies", "Contextual Inquiry", "A/B Testing", "Surveys", "Questionnaires", "Heuristic Evaluation", "Cognitive Walkthrough"];
                const development = ["Java", "HTML/CSS/JS", "React.js", "Python"];
                const maxRows = Math.max(design.length, research.length, development.length);
                const rows = [];
                for (let i = 0; i < maxRows; i++) {
                  rows.push(
                    <span key={`d-${i}`} className="text-xs text-muted-foreground py-0.5">
                      {design[i] ?? ""}
                    </span>,
                    <span key={`r-${i}`} className="text-xs text-muted-foreground py-0.5">
                      {research[i] ?? ""}
                    </span>,
                    <span key={`dev-${i}`} className="text-xs text-muted-foreground py-0.5">
                      {development[i] ?? ""}
                    </span>
                  );
                }
                return rows;
              })()}
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
