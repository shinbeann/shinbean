import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import intellipalHeroImg from "@/assets/intellipal/intellipal-hero.png";

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
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-sky-400"
      >
        INTELLIPAL.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed w-full break-words mt-10"
      >
        Officers in the field need accurate standard operating procedures fast—but connectivity is not guaranteed. Paper binders are heavy to update; cloud-only assistants fail in dead zones.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed w-full break-words mt-4"
      >
        INTELLIPAL is an offline-first retrieval-augmented generation system for SOP retrieval: dense + sparse search over local corpora, with grounded answers so teams stay informed even in connectivity blackspots.
      </motion.p>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-white/10 mt-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-[repeat(4,1fr)] gap-y-8 gap-x-8 min-w-0 mt-4"
      >
        {[
          { label: "ROLE", value: "UX/UI Designer" },
          { label: "TIMELINE", value: "2024 – Present" },
          { label: "ORGANIZATION", value: "HTX (Home Team Science & Technology Agency)" },
          { label: "TOOLS", value: "Figma, Python, vector DB, on-device inference" },
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
        className="border-white/10 mt-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="space-y-4 min-w-0 mt-10"
      >
        <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-500">My contributions</p>
        <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed list-disc list-outside pl-5 break-words">
          <li>Designed mobile search and result flows for low-friction SOP lookup under time pressure.</li>
          <li>Partnered with engineering on dual-mode retrieval UX: when to show citations, confidence, and fallbacks.</li>
          <li>Defined offline-first interaction patterns: sync states, stale indicators, and explicit grounding in source excerpts.</li>
          <li>Stress-tested layouts and typography for readability in bright outdoor and low-light patrol contexts.</li>
        </ul>
      </motion.div>
    </div>

    <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-b border-sky-500/30 bg-sky-500/[0.06] py-12 md:py-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "Offline", desc: "Core retrieval and answering without network dependency" },
          { stat: "Dual", desc: "Dense + sparse search to balance recall and precision on SOP text" },
          { stat: "Grounded", desc: "Answers tied to retrieved passages—not unconstrained generation" },
        ].map((item, i) => (
          <div
            key={item.stat}
            className={`flex flex-col items-center text-center ${i < 2 ? "md:border-r md:border-sky-500/20" : ""}`}
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sky-400">{item.stat}</p>
            <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-[240px]">{item.desc}</p>
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
      theme="dark"
      showSidebarsAfter="problem"
      showContactSection={false}
      hero={
        <div className="text-white selection:bg-sky-500/30 font-sans bg-[#050505]">
          <IntellipalHero />
        </div>
      }
    >
      <div className="text-white selection:bg-sky-500/30 font-sans overflow-x-hidden min-w-0 bg-[#050505]">
        <section id="problem" className="relative flex flex-col pt-24 md:pt-32 pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-full max-w-4xl space-y-6 text-left">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">PROBLEM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                SOPs without signal.
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                Field teams rely on procedures that change often. When the network drops, generic AI chat is useless—and wrong answers are unacceptable. The product had to feel as dependable as a printed manual, with the speed of search.
              </p>
            </div>

            <div className="w-full max-w-4xl mt-12 rounded-xl overflow-hidden border border-white/10">
              <img
                src={intellipalHeroImg}
                alt="INTELLIPAL mobile application showing SOP search across multiple screens"
                className="w-full h-auto object-contain bg-neutral-900/80"
              />
            </div>
            <p className="text-sm text-neutral-500 italic text-center mt-3 max-w-4xl">
              Mobile flows for query, ranked results, and grounded document view.
            </p>
          </motion.div>
        </section>

        <section id="solution" className="relative pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">SOLUTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              INTELLIPAL on device.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              The interface exposes a simple question: what does the officer need right now? Behind that, INTELLIPAL combines lexical and semantic retrieval over an offline corpus, then surfaces citations so every answer can be verified against policy text.
            </p>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              UX focus areas included scannable result cards, excerpt previews, and clear boundaries when the model should say &quot;not in corpus&quot; instead of guessing.
            </p>
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
            <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">IMPACT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Trust in the field.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
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
            <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">SYSTEM</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              How the pieces fit.
            </h2>
            <ul className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-4 list-disc list-outside pl-5">
              <li>
                <span className="text-white font-medium">Ingestion &amp; chunking</span> — policy documents are split for retrieval with metadata preserved for display in the UI.
              </li>
              <li>
                <span className="text-white font-medium">Combined search</span> — keyword-style and embedding-based retrieval are fused so neither misses critical terminology nor paraphrases.
              </li>
              <li>
                <span className="text-white font-medium">Generation</span> — responses are constrained to retrieved context; the UI highlights the supporting spans officers should read.
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
            <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">REFLECTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Designing for accountability.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Consumer chat patterns break down when stakes are high. The most valuable design work here was not the splashy model demo—it was clarity: what we know from the corpus, what we do not, and how to get to the primary source in one or two taps.
            </p>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default IntellipalCaseStudy;
