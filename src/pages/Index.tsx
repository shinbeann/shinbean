import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { KidneyQuestInteractiveDemo } from "@/components/KidneyQuestInteractiveDemo";
import { BentoGrid } from "@/components/BentoGrid";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation tone="light" enableSmartHide />

      {/* SECTION 1: FLOWTUTOR - Deep Midnight Blue */}
      <section className="flowtutor-section relative min-h-screen">
        {/* Northern Lights Glow Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="northern-lights-glow" />
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 pt-24 pb-32 relative z-10">
          <motion.div
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                <span className="font-bold">FlowTutor</span> — Web · AI / Edtech
              </p>
              <h2 className="text-3xl md:text-4xl font-mono text-white">
                Streamlined learning.
              </h2>
              <p className="text-sm md:text-base text-blue-100/70">
                A concept for turning chaotic YouTube tutorials into a guided,
                searchable learning flow—so self-directed learners stay in the
                zone.
              </p>
              <div className="space-y-6 mt-6">
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/60">
                    Challenge
                  </h3>
                  <p className="text-sm text-blue-100/70">
                    Learners constantly pause, scrub, and rewatch tutorials,
                    breaking flow and losing where they left off.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/60">
                    Solution
                  </h3>
                  <p className="text-sm text-blue-100/70">
                    A structured &ldquo;step timeline&rdquo; that syncs with the video,
                    with bookmarks, checkmarks, and contextual notes.
                  </p>
                </div>
              </div>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl overflow-hidden"
              >
                <BentoGrid />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: KIDNEYQUEST - Marigold Yellow Spotlight */}
      <section className="kidneyquest-section relative">
        {/* Yellow Spotlight Effect */}
        <div className="absolute inset-0 kidneyquest-spotlight pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 py-32 relative z-10">
          <motion.div
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] kidneyquest-text-muted">
                <span className="font-bold">KidneyQuest</span> — AR / Healthcare
              </p>
              <h2 className="text-3xl md:text-4xl font-mono kidneyquest-text-primary">
                Gamifying health education.
              </h2>
              <p className="text-sm md:text-base kidneyquest-text-secondary">
                A browser-based AR mini-game for the National Kidney Foundation that
                turns kidney health education into a playful, memorable experience.
              </p>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-3xl border border-yellow-500/30 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 py-8 md:px-8"
              >
                <KidneyQuestInteractiveDemo />
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="grid gap-6 md:grid-cols-3"
              >
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] kidneyquest-text-muted">
                    Challenge
                  </h3>
                  <p className="text-sm kidneyquest-text-secondary">
                    Make kidney health education engaging in busy public spaces
                    without asking people to download an app.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] kidneyquest-text-muted">
                    Execution
                  </h3>
                  <p className="text-sm kidneyquest-text-secondary">
                    Designed a WebAR game flow that guides players through
                    bite-sized trivia, rewards, and subtle behavior nudges.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] kidneyquest-text-muted">
                    Visuals
                  </h3>
                  <p className="text-sm kidneyquest-text-secondary">
                    Organic shapes, soft gradients, and a friendly mascot make
                    kidney health feel approachable instead of clinical.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: HYBRIDRAG - Monochrome/Tech */}
      <section className="hybridrag-section relative">
        <div className="container max-w-6xl mx-auto px-4 py-32 relative z-10">
          <motion.div
            className="min-h-[80vh] flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Sticky Heading */}
            <div className="md:w-1/3 sticky top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                <span className="font-bold">HybridRAG</span> — AI / Mobile
              </p>
              <h2 className="text-3xl md:text-4xl font-mono text-neutral-200">
                Intelligence in the dark.
              </h2>
              <p className="text-sm md:text-base text-neutral-400">
                An offline retrieval-augmented generation system that keeps
                Singapore Police Force officers informed—even in connectivity
                blackspots.
              </p>
            </div>

            {/* Story & Media */}
            <div className="md:w-2/3 space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-3xl border border-neutral-800 overflow-hidden"
              >
                <img
                  src="/hybridrag-hero.png"
                  alt="HybridRAG mobile application showing SOP search interface with three smartphone screens displaying search, results, and document view"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                      Conflict
                    </h3>
                    <p className="text-sm text-neutral-400">
                      In basements and alleyways, officers lose connectivity and
                      can&apos;t search legal references during critical moments.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                      Architecture
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Mobile RAG pipeline using on-device vector search,
                      centroid clustering to compress memory, and Llama.cpp +
                      ObjectBox for fully offline inference.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                      UX Detail
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Natural language search surfaces recognisable scenarios
                      instead of cryptic legal codes—optimised for recognition
                      over recall.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
