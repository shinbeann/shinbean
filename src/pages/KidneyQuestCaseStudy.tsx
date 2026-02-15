import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";


const KidneyQuestHero = () => (
  <section className="relative w-full pt-24 md:pt-36 pb-16 md:pb-24 overflow-x-hidden bg-black">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 space-y-10 min-w-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FFD700]"
      >
        KidneyQuest
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl break-words"
      >
        At public events, dense brochures and static displays are ignored under time pressure. We created KidneyQuest to turn kidney health education into a playful, memorable AR experience—replacing paper handouts with a 3-minute, self-directed mini-game.
      </motion.p>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-white/10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 min-w-0"
      >
        {[
          { label: "ROLE", value: "UI/UX Designer" },
          { label: "TIMELINE", value: "4 months (Sept – Dec 2025)" },
          { label: "CLIENT", value: "National Kidney Foundation (NKF)" },
          { label: "TOOLS", value: "Figma, Figma Make, Miro" },
        ].map((item) => (
          <div key={item.label} className="space-y-1.5 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-500">{item.label}</p>
            <p className="text-sm text-white font-medium break-words">{item.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="border-white/10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="space-y-4 min-w-0"
      >
        <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-neutral-500">Key Contributions</p>
        <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed list-disc list-outside pl-5 break-words">
          <li>Led user research with 3 participant interviews and a 61-response survey to understand visitor behavior at public exhibits.</li>
          <li>Conducted affinity mapping and synthesis sessions to identify patterns in content preferences and engagement barriers.</li>
          <li>Facilitated Crazy 8s ideation workshops to rapidly explore game concepts and converge on the AR mini-game direction.</li>
          <li>Designed low-fidelity prototypes and user flows, and adapted NKF design system for mobile-first, multilingual delivery.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

const KidneyQuestCaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={[]}
      theme="dark"
      hideTableOfContents
      showContactSection={false}
      hero={<div className="text-white selection:bg-amber-500/30 font-sans"><KidneyQuestHero /></div>}
    >
      <div className="min-h-[40vh]" />
      
    </CaseStudyLayout>
  );
};

export default KidneyQuestCaseStudy;
