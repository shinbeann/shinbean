import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
 type ActiveProject = "kidneyquest" | "hybridrag" | "flowtutor";

const projectBackgroundClasses: Record<ActiveProject, string> = {
  kidneyquest: "bg-kidneyquest",
  hybridrag: "bg-hybridrag",
  flowtutor: "bg-flowtutor",
};

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const Index = () => {
  const [activeProject, setActiveProject] = useState<ActiveProject>("kidneyquest");

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-700 ${projectBackgroundClasses[activeProject]}`}
    >
      <Navigation tone={activeProject === "hybridrag" ? "dark" : "light"} enableSmartHide />

      <main className="flex-1 px-4 pb-24">
        <div className="container max-w-6xl mx-auto space-y-32">
          {/* KidneyQuest Section */}
          <motion.section
            id="kidneyquest"
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            onViewportEnter={() => setActiveProject("kidneyquest")}
            viewport={{ amount: 0.4, once: false }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                KidneyQuest · AR / Healthcare
              </p>
              <h2 className="text-3xl md:text-4xl font-mono">
                Gamifying health education.
              </h2>
              <p className="text-sm md:text-base text-foreground/80">
                A browser-based AR mini-game for the National Kidney Foundation that
                turns kidney health education into a playful, memorable experience.
              </p>
              <Link
                to="/case-study/kidneyquest"
                className="story-link text-sm text-muted-foreground"
              >
                View KidneyQuest case study
              </Link>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-[16/10] rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden flex items-center justify-center"
              >
                <div className="w-[70%] max-w-md aspect-[9/16] rounded-[2.5rem] border border-border bg-gradient-to-b from-card to-background shadow-2xl flex items-center justify-center relative">
                  <div className="w-4/5 h-2/5 rounded-2xl border border-accent/40 bg-gradient-to-br from-[hsl(var(--kidneyquest-gold))] to-[hsl(var(--kidneyquest-teal))]" />
                  <span className="absolute bottom-5 text-xs text-muted-foreground">
                    WebAR scanner hero (placeholder)
                  </span>
                </div>
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="grid gap-6 md:grid-cols-3"
              >
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Challenge
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Make kidney health education engaging in busy public spaces
                    without asking people to download an app.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Execution
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Designed a WebAR game flow that guides players through
                    bite-sized trivia, rewards, and subtle behavior nudges.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Visuals
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Organic shapes, soft gradients, and a friendly mascot make
                    kidney health feel approachable instead of clinical.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* HybridRAG Section */}
          <motion.section
            id="hybridrag"
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            onViewportEnter={() => setActiveProject("hybridrag")}
            viewport={{ amount: 0.4, once: false }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                HybridRAG · AI / Mobile
              </p>
              <h2 className="text-3xl md:text-4xl font-mono">
                Intelligence in the dark.
              </h2>
              <p className="text-sm md:text-base text-foreground/80">
                An offline retrieval-augmented generation system that keeps
                Singapore Police Force officers informed—even in connectivity
                blackspots.
              </p>
              <Link
                to="/case-study/hybridrag"
                className="story-link text-sm text-muted-foreground"
              >
                View HybridRAG case study
              </Link>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-[16/10] rounded-3xl border border-border/70 bg-gradient-to-b from-background to-[hsl(var(--hybridrag-deep))] overflow-hidden flex items-center justify-center relative"
              >
                <div className="w-[60%] max-w-md aspect-[9/16] rounded-[2.2rem] border border-border bg-gradient-to-b from-background to-card shadow-[0_0_80px_rgba(0,0,0,0.9)] flex items-center justify-center">
                  <div className="w-4/5 h-2/5 rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/60 to-background flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      0% Connectivity · &lt;2s Latency
                    </span>
                  </div>
                </div>
                <span className="absolute bottom-5 text-xs text-muted-foreground">
                  Samsung device mockup (placeholder)
                </span>
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Conflict
                    </h3>
                    <p className="text-sm text-foreground/80">
                      In basements and alleyways, officers lose connectivity and
                      can&apos;t search legal references during critical moments.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Architecture
                    </h3>
                    <p className="text-sm text-foreground/80">
                      Mobile RAG pipeline using on-device vector search,
                      centroid clustering to compress memory, and Llama.cpp +
                      ObjectBox for fully offline inference.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      UX Detail
                    </h3>
                    <p className="text-sm text-foreground/80">
                      Natural language search surfaces recognisable scenarios
                      instead of cryptic legal codes—optimised for recognition
                      over recall.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* FlowTutor Section */}
          <motion.section
            id="flowtutor"
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            onViewportEnter={() => setActiveProject("flowtutor")}
            viewport={{ amount: 0.4, once: false }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                FlowTutor · EdTech / Web
              </p>
              <h2 className="text-3xl md:text-4xl font-mono">
                Streamlined learning.
              </h2>
              <p className="text-sm md:text-base text-foreground/80">
                A concept for turning chaotic YouTube tutorials into a guided,
                searchable learning flow—so self-directed learners stay in the
                zone.
              </p>
              <Link
                to="/case-study/flowtutor"
                className="story-link text-sm text-muted-foreground"
              >
                View FlowTutor case study
              </Link>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-[16/10] rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden flex items-center justify-center"
              >
                <div className="w-full h-full grid grid-cols-12 gap-4 px-8 py-6">
                  <div className="col-span-8 rounded-2xl border border-border bg-background/60" />
                  <div className="col-span-4 space-y-3">
                    <div className="h-6 rounded-full bg-muted/60" />
                    <div className="h-6 rounded-full bg-muted/40" />
                    <div className="h-6 rounded-full bg-muted/30" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="text-sm text-foreground/80">
                      Learners constantly pause, scrub, and rewatch tutorials,
                      breaking flow and losing where they left off.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Solution
                    </h3>
                    <p className="text-sm text-foreground/80">
                      A structured &ldquo;step timeline&rdquo; that syncs with the video,
                      with bookmarks, checkmarks, and contextual notes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Visuals
                    </h3>
                    <p className="text-sm text-foreground/80">
                      Clean, academic typography and accessible contrast keep
                      the interface calm even when content is dense.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Industry Partners Strip (kept from previous layout) */}
          <section className="pt-12 border-t border-border/60">
            <h3 className="text-2xl font-semibold tracking-tight mb-8 text-center">
              Industry Partners &amp; Clients
            </h3>
            <div className="flex justify-center items-center gap-12 md:gap-20 opacity-90">
              <img
                src="/htxlogo.png"
                alt="HTX - Home Team Science &amp; Technology Agency logo"
                className="h-16 md:h-20 w-auto transition-all duration-300"
              />
              <img
                src="/nkflogo.png"
                alt="National Kidney Foundation logo"
                className="h-16 md:h-20 w-auto transition-all duration-300"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
