import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import intellipalHeroImg from "@/assets/intellipal/intellipal-hero.png";
import intellipalMockup1 from "@/assets/intellipal/IN_mockup1.png";
import intellipalMockup2 from "@/assets/intellipal/IN_mockup2.png";
import { caseStudyEditorialBodyClass } from "@/design-system";

const intellipalToc = [
  {
    id: "problem",
    label: "Overview",
    children: [
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "impact", label: "Impact" },
    ],
  },
  { id: "system", label: "System" },
  { id: "reflection", label: "Reflection" },
];

const IntellipalHero = () => (
  <section className="relative w-full pt-24 md:pt-36 pb-16 md:pb-24 overflow-x-hidden">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 min-w-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#003087]"
      >
        INTELLIPAL.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-700 w-full break-words mt-10 ${caseStudyEditorialBodyClass}`}
      >
        Frontline police officers make high-stakes decisions in seconds, often often in environments with no internet, incomplete information, and legal ambiguity.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-700 w-full break-words mt-4 ${caseStudyEditorialBodyClass}`}
      >
        INTELLIPAL is an offline-first AI assistant that helps officers retrieve and apply Standard Operating Procedures (SOPs) through natural language, directly on their mobile devices.
      </motion.p>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-neutral-200 mt-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-[repeat(4,1fr)] gap-y-8 gap-x-8 min-w-0 mt-4"
      >
        {[
          { label: "ROLE", value: "UX/UI Designer" },
          { label: "TIMELINE", value: "Sept 2025 – Apr 2026" },
          { label: "ORGANIZATION", value: "HTX (Home Team Science & Technology Agency)" },
          { label: "TOOLS", value: "Figma, Python, vector DB, on-device inference" },
        ].map((item) => (
          <div key={item.label} className="space-y-1.5 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#003087]">{item.label}</p>
            <p className="text-sm text-neutral-900 font-medium break-words">{item.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="border-neutral-200 mt-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="space-y-4 min-w-0 mt-10"
      >
        <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-500">My role</p>
        <ul className="space-y-3 text-neutral-700 text-sm md:text-base leading-relaxed list-disc list-outside pl-5 break-words">
          <li>UX research & synthesis</li>
          <li>nteraction design & prototyping</li>
          <li>Usability testing & iteration</li>
          <li>Frontend development & integration</li>
        </ul>
      </motion.div>
    </div>

    <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-b border-[#003087]/30 bg-[#003087]/[0.06] py-12 md:py-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "Offline", desc: "Core retrieval and answering without network dependency" },
          { stat: "Dual", desc: "Dense + sparse search to balance recall and precision on SOP text" },
          { stat: "Grounded", desc: "Answers tied to retrieved passages—not unconstrained generation" },
        ].map((item, i) => (
          <div
            key={item.stat}
            className={`flex flex-col items-center text-center ${i < 2 ? "md:border-r md:border-[#003087]/20" : ""}`}
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#003087]">{item.stat}</p>
            <p className="text-sm md:text-base text-neutral-700 mt-2 max-w-[240px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IntellipalCaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={intellipalToc}
      navTone="light"
      rootClassName="bg-white"
      showSidebarsAfter="problem"
      showContactSection={false}
      hero={
        <div className="text-neutral-900 selection:bg-[#003087]/20 font-sans bg-white">
          <IntellipalHero />
        </div>
      }
    >
      <div className="text-neutral-900 selection:bg-[#003087]/20 font-sans overflow-x-hidden min-w-0 bg-white">
        <section id="problem" className="relative flex flex-col pt-24 md:pt-32 pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-full max-w-4xl space-y-6 text-left">
              <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">PROBLEM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
                SOPs without signal.
              </h2>
              <div className={`text-neutral-700 space-y-7 ${caseStudyEditorialBodyClass}`}>
                <p>During field operations, officers frequently encounter situations where:</p>
                <ul className="list-disc list-outside pl-6 space-y-1">
                  <li>The correct legal classification is unclear</li>
                  <li>SOPs are difficult to search under time pressure</li>
                  <li>Connectivity is unreliable or unavailable</li>
                </ul>
                <p>Instead of acting immediately, officers:</p>
                <ul className="list-disc list-outside pl-6 space-y-1">
                  <li>Call supervisors</li>
                  <li>Search static documents</li>
                  <li>Or rely on memory</li>
                </ul>
                <p>This creates delays, inconsistency, and risk.</p>
              </div>
            </div>


          </motion.div>
        </section>

        <div className="max-w-3xl mx-auto mt-12 md:mt-10 mb-20 md:mb-24 text-center">
          <p className="font-serif text-[18px] md:text-[24px] leading-[1.6] text-black">
            &quot;When you&apos;re on the ground,{" "}
            <span className="font-bold text-red-600">things happen very fast</span>. Sometimes you&apos;re
            not even sure which offence it falls under, and there&apos;s{" "}
            <span className="font-bold text-red-600">
              no time to scroll through documents or find signal
            </span>
            .&quot;
          </p>
        </div>

        <section id="solution" className="relative pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">SOLUTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              INTELLIPAL.
            </h2>
            <div className={`text-neutral-700 space-y-7 ${caseStudyEditorialBodyClass}`}>
              <p className="font-semibold text-neutral-900">
                An offline-first assistant for fast, reliable decision-making
              </p>
              <p>
                Instead of searching through documents or calling supervisors, frontline officers can simply
                ask a question in natural language and receive:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1">
                <li>Clear guidance on what to do</li>
                <li>Relevant SOP references for verification</li>
                <li>A confidence signal to calibrate trust</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-5 md:gap-y-0 md:max-w-[620px] mx-auto pt-4">
              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 w-full max-w-[min(320px,100%)] mx-auto md:max-w-[300px] md:justify-self-end">
                <img
                  src={intellipalMockup1}
                  alt="INTELLIPAL solution mockup 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 w-full max-w-[min(320px,100%)] mx-auto md:max-w-[300px] md:justify-self-start">
                <img
                  src={intellipalMockup2}
                  alt="INTELLIPAL solution mockup 2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="impact" className="relative pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">IMPACT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Trust in the field.
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-700`}>
              Grounding and offline operation directly support operational trust: officers can act on answers that trace back to authoritative SOP passages, even where connectivity is unreliable. Detailed metrics are under partner review; this page summarizes the design and system intent.
            </p>
          </motion.div>
        </section>

        <section id="system" className="relative pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">SYSTEM</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              How the pieces fit.
            </h2>
            <ul className={`text-neutral-700 space-y-4 list-disc list-outside pl-5 ${caseStudyEditorialBodyClass}`}>
              <li>
                <span className="text-neutral-900 font-medium">Ingestion &amp; chunking</span> — policy documents are split for retrieval with metadata preserved for display in the UI.
              </li>
              <li>
                <span className="text-neutral-900 font-medium">Combined search</span> — keyword-style and embedding-based retrieval are fused so neither misses critical terminology nor paraphrases.
              </li>
              <li>
                <span className="text-neutral-900 font-medium">Generation</span> — responses are constrained to retrieved context; the UI highlights the supporting spans officers should read.
              </li>
            </ul>
          </motion.div>
        </section>

        <section id="reflection" className="relative pb-32 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">REFLECTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Designing for accountability.
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-700`}>
              Consumer chat patterns break down when stakes are high. The most valuable design work here was not the splashy model demo—it was clarity: what we know from the corpus, what we do not, and how to get to the primary source in one or two taps.
            </p>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default IntellipalCaseStudy;
