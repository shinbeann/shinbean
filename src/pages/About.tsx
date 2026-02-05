import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutMeImage from "/public/aboutme.jpg";
import { motion } from "framer-motion";

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
            className="grid gap-8 md:grid-cols-[minmax(0,0.9fr),minmax(0,1.4fr)] items-start"
          >
            <div className="flex justify-center md:justify-start">
              <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
                <img
                  src={aboutMeImage}
                  alt="Portrait of Shinbean"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <header className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Profile
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
                Gay Shin Lee
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-prose leading-relaxed">
                My initial interest in AI evolved into a fascination with how humans actually interact with them.
                This shifted my passion from pure development to User Experience, specifically within
                <strong> Agentic Experience (AX)</strong>.
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-prose leading-relaxed">
                These days, instead of just designing static screens, I am interested in designing relationships
                between humans and autonomous systems. I work on bridging the gap between algorithmic capabilities
                and human intent, ensuring that AI agents are not only helpful, but also transparent and
                trustworthy rather than just black-box tools.
              </p>
            </header>
          </motion.section>

          {/* Section 2: Experience */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <header className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience</p>
              <h2 className="text-lg md:text-xl font-medium text-foreground">Recent roles</h2>
            </header>

            <div className="space-y-3">
              <div className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/5 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">
                      HTX (Home Team Science and Technology Agency)
                    </p>
                    <p className="text-xs text-muted-foreground">UI/UX Lead</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2025</p>
              </div>

              <div className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/5 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">
                      National Kidney Foundation (NKF)
                    </p>
                    <p className="text-xs text-muted-foreground">UI/UX Lead</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2025</p>
              </div>

              <div className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/5 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">TechCreate Group</p>
                    <p className="text-xs text-muted-foreground">Fullstack Software Engineer</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2025</p>
              </div>

              <div className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/5 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">DBS Bank</p>
                    <p className="text-xs text-muted-foreground">QA Tester</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2024</p>
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
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The How</p>
              <h2 className="text-lg md:text-xl font-medium text-foreground">Skills & Tools</h2>
            </header>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Design */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Figma Make", "Lovable", "Sketch", "InVision Studio"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-muted/10 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Research</h3>
                <div className="flex flex-wrap gap-2">
                  {["Field Studies", "Contextual Inquiry", "A/B Testing", "Surveys", "Questionnaires", "Heuristic Evaluation", "Cognitive Walkthrough"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-muted/10 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "HTML/CSS/JS", "React.js", "Python"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-muted/10 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
