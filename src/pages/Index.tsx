import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";

import FloatingContactButton from "@/components/FloatingContactButton";
import Hero from "@/components/Hero";
import { KidneyQuestInteractiveDemo } from "@/components/KidneyQuestInteractiveDemo";
import ftHeroVid from "@/assets/flowtutor/ft_herovid.mp4";
import nestMockup from "@/assets/nest/nest_mockup.png";
import { publicMedia } from "@/lib/publicMedia";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation tone="light" enableSmartHide />

      {/* HERO */}
      <Hero />

      {/* SECTION 1: FLOWTUTOR - Deep Midnight Blue */}
      <section id="flowtutor" className="flowtutor-section relative min-h-screen scroll-mt-20">
        {/* Northern Lights Glow Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="northern-lights-glow" />
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 pt-8 md:pt-16 pb-16 md:pb-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading - Not sticky on mobile */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">
                <span className="font-bold">FlowTutor</span>
              </p>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-300 uppercase">
                Learn smarter with AI powered assistance.
              </h2>
              <p className="text-sm md:text-base text-blue-100/70">
                A concept for turning chaotic YouTube tutorials into interactive lessons, allowing learners to ask questions and generate quizzes for more efficient self-directed learning
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
                className="overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)'
                }}
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
      <section id="kidneyquest" className="kidneyquest-section relative scroll-mt-20">
        {/* Yellow Spotlight Effect */}
        <div className="absolute inset-0 kidneyquest-spotlight pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row md:flex-row-reverse items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Heading - Now on the right side on desktop */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] kidneyquest-text-muted">
                <span className="font-bold">KidneyQuest</span>
              </p>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal kidneyquest-text-primary">
                Gamifying health education.
              </h2>
              <p className="text-sm md:text-base kidneyquest-text-secondary leading-relaxed">
                A browser-based AR mini-game for the National Kidney Foundation that
                turns kidney health education into a playful, memorable experience.
              </p>
              
              <div className="mt-6 md:mt-8">
                <Link 
                  to="/case-study/kidneyquest" 
                  className="group inline-flex items-center gap-2 text-sm font-medium kidneyquest-text-primary hover:opacity-90 transition-all duration-200"
                >
                  <span className="relative">
                    Read KidneyQuest case study
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400/60 group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Demo Card - Now on the left side on desktop */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl md:rounded-3xl border border-yellow-500/30 bg-black/40 backdrop-blur-sm flex items-center justify-center px-3 py-6 sm:px-4 sm:py-8 md:px-8"
              >
                <KidneyQuestInteractiveDemo />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: INTELLIPAL - Monochrome/Tech */}
      <section id="intellipal" className="intellipal-section relative">
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Heading - Not sticky on mobile */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                <span className="font-bold">INTELLIPAL </span>
              </p>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-200">
               Offline AI Assistant for Frontline Police Officers.
              </h2>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                INTELLIPAL is an offline retrieval-augmented generation system that keeps
                Singapore Police Force officers informed, even in connectivity
                blackspots.
              </p>
              
              <div className="mt-6 md:mt-8">
                <Link 
                  to="/case-study/intellipal" 
                  className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-300 transition-all duration-200"
                >
                  <span className="relative">
                    Read INTELLIPAL case study
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-300 group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Story & Media */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full"
              >
                <img
                  src={publicMedia.intellipalHomeMockup}
                  alt="INTELLIPAL SOP Assistance on two phones: suggested SOP questions and chat guidance with likely match and protective equipment details"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: NEST - Teal Blue */}
      <section id="nest" className="relative scroll-mt-20" style={{
        background: "linear-gradient(to bottom, #111111 0%, #1a0a02 25%, #3d1a08 50%, #7a3410 75%, #e66e19 100%)",
      }}>
        <div className="container max-w-6xl mx-auto px-4 py-16 md:py-32 relative z-10">
          <motion.div
            className="min-h-[60vh] md:min-h-[80vh] flex flex-col gap-8 md:gap-16 md:flex-row md:flex-row-reverse items-start"
            {...scrollReveal}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="w-full md:w-1/3 md:sticky md:top-28 self-start space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-300/80">
                <span className="font-bold">NEST</span>
              </p>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-200">
                Your new favorite digital journal.
              </h2>
              <p className="text-sm md:text-base text-orange-100/70 leading-relaxed">
                A thoughtfully designed journaling app that helps you capture and reflect on your daily moments.
              </p>
              
              <div className="mt-6 md:mt-8">
                <Link 
                  to="/case-study/nest" 
                  className="group inline-flex items-center gap-2 text-sm font-medium text-orange-300 hover:text-orange-200 transition-all duration-200"
                >
                  <span className="relative">
                    Read NEST case study
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-200 group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Media - NEST mockup */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-10">
              <motion.div
                {...scrollReveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl md:rounded-3xl border border-orange-400/30 overflow-hidden bg-black/40 backdrop-blur-sm"
              >
                <img
                  src={nestMockup}
                  alt="NEST journaling app mockup showing two mobile screens: Choose your spaces onboarding and journal feed with entries"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactButton />

      <footer className="border-t border-border/60 py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          Gay Shin Lee © 2026 All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
