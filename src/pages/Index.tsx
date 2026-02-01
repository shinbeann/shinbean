import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { KidneyQuestInteractiveDemo } from "@/components/KidneyQuestInteractiveDemo";
import ftHeroVid from "@/assets/ft_herovid.mp4";

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
        
        <div className="container max-w-6xl mx-auto px-4 pt-24 pb-16 md:pb-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading - Not sticky on mobile */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                <span className="font-bold">FlowTutor</span> — Web · AI / Edtech
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-white">
                Streamlined learning.
              </h2>
              <p className="text-sm md:text-base text-blue-100/70">
                A concept for turning chaotic YouTube tutorials into interactive lessons, allowing learners to ask questions, generate quizzes, and instantly jump to relevant timestamps for more efficient self-directed learning
                zone.
              </p>
              <div className="mt-6 md:mt-8">
                <Link 
                  to="/case-study/flowtutor" 
                  className="group inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 transition-all duration-200"
                >
                  <span className="relative">
                    Read FlowTutor case study
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Story & Media */}
            <div className="w-full md:w-2/3 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]"
              >
                <video
                  src={ftHeroVid}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px', opacity: 0.95 }}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: KIDNEYQUEST - Marigold Yellow Spotlight */}
      <section className="kidneyquest-section relative">
        {/* Yellow Spotlight Effect */}
        <div className="absolute inset-0 kidneyquest-spotlight pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Heading - Not sticky on mobile */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] kidneyquest-text-muted">
                <span className="font-bold">KidneyQuest</span> — AR / Healthcare
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono kidneyquest-text-primary">
                Gamifying health education.
              </h2>
              <p className="text-sm md:text-base kidneyquest-text-secondary leading-relaxed">
                A browser-based AR mini-game for the National Kidney Foundation that
                turns kidney health education into a playful, memorable experience.
              </p>
              <div className="mt-6 md:mt-8">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400/50 cursor-not-allowed">
                  <span className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                    Work in progress
                  </span>
                </span>
              </div>
            </div>

            {/* Story & Media */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl md:rounded-3xl border border-yellow-500/30 bg-black/40 backdrop-blur-sm flex items-center justify-center px-3 py-6 sm:px-4 sm:py-8 md:px-8"
              >
                <KidneyQuestInteractiveDemo />
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3"
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
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Heading - Not sticky on mobile */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                <span className="font-bold">HybridRAG</span> — AI / Mobile
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-neutral-200">
                Intelligence in the dark.
              </h2>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                An offline retrieval-augmented generation system that keeps
                Singapore Police Force officers informed—even in connectivity
                blackspots.
              </p>
              <div className="mt-6 md:mt-8">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 cursor-not-allowed">
                  <span className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700/50 rounded-md">
                    Work in progress
                  </span>
                </span>
              </div>
            </div>

            {/* Story & Media */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
              {/* UI Screenshot with inner border to prevent background bleed */}
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl md:rounded-3xl border border-neutral-800 overflow-hidden bg-neutral-900/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                <img
                  src="/hybridrag-hero.png"
                  alt="HybridRAG mobile application showing SOP search interface with three smartphone screens displaying search, results, and document view"
                  className="w-full h-auto object-contain relative z-10"
                />
              </motion.div>

              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Conflict
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      In basements and alleyways, officers lose connectivity and
                      can&apos;t search legal references during critical moments.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Architecture
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Mobile RAG pipeline using on-device vector search,
                      centroid clustering to compress memory, and Llama.cpp +
                      ObjectBox for fully offline inference.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      UX Detail
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
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
      <FloatingContactButton />
    </div>
  );
};

export default Index;
