import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutMeImage from "/public/aboutme.jpg";
import { motion } from "framer-motion";
import { Code2, Figma } from "lucide-react";

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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                    <img
                      src="/htxlogo.png"
                      alt="HTX logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                    <img
                      src="/nkflogo.png"
                      alt="National Kidney Foundation logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                    <img
                      src="/techcreatelogo.png"
                      alt="TechCreate Group logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">TechCreate Group</p>
                    <p className="text-xs text-muted-foreground">Fullstack Software Engineer</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2025</p>
              </div>

              <div className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/5 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                    <img
                      src="/dbslogo.png"
                      alt="DBS Bank logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">DBS Bank</p>
                    <p className="text-xs text-muted-foreground">QA Tester</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-sm">2024</p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Tech Stack */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <header className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The How</p>
              <h2 className="text-lg md:text-xl font-medium text-foreground">Tech stack</h2>
              <p className="text-sm text-muted-foreground max-w-prose">
                A pragmatic mix of languages and tools I use to move from research insight to production-ready interfaces.
              </p>
            </header>

            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "JavaScript", "HTML", "CSS", "Figma"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/10 px-4 py-2 text-xs font-medium text-muted-foreground"
                >
                  {item === "Figma" ? (
                    <Figma className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  ) : (
                    <Code2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  )}
                  <span className="uppercase tracking-[0.18em]">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
