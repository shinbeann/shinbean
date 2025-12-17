import { motion } from "framer-motion";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FlowTutorHero } from "@/components/FlowTutorHero";
import { ProjectBentoCard } from "@/components/ProjectBentoCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation tone="dark" enableSmartHide />

      <main className="flex-1">
        {/* Section 1: FlowTutor Hero - Flagship Project */}
        <FlowTutorHero />

        {/* Generous breathing room - Korean UI trait */}
        <div className="h-24 md:h-32" />

        {/* Section 2: Secondary Bento Grid */}
        <section className="px-4 sm:px-6 pb-24 md:pb-32">
          <div className="container max-w-6xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                More Projects
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Featured Work
              </h2>
            </motion.div>

            {/* 2-Column Bento Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Card: HybridRAG */}
              <ProjectBentoCard
                slug="hybridrag"
                tag="GovTech / System Design"
                title="HybridRAG"
                description="Offline-first information retrieval for the Singapore Police Force."
                image="/hybridrag-hero.png"
                imageAlt="HybridRAG mobile application showing SOP search interface with three smartphone screens displaying search, results, and document view"
              />

              {/* Right Card: KidneyQuest */}
              <ProjectBentoCard
                slug="kidneyquest"
                tag="Gamification / 3D Experience"
                title="KidneyQuest"
                description="A VR educational journey for the NKF."
                image="/kidneyquest.png"
                imageAlt="KidneyQuest AR game interface showcasing the colorful 3D kidney character and quiz interface"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
