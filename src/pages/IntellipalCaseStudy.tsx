import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import intellipalHeroImg from "@/assets/intellipal/intellipal-hero.png";
import intellipalSolution1 from "@/assets/intellipal/IN_solution1.png";
import intellipalSolution2 from "@/assets/intellipal/IN_solution2.png";
import intellipalHifi1 from "@/assets/intellipal/IN_hifi1.png";
import intellipalHifi2 from "@/assets/intellipal/IN_hifi2.png";
import intellipalWireframe from "@/assets/intellipal/IN_wireframe.png";
import { caseStudyEditorialBodyClass } from "@/design-system";

const intellipalToc = [
  {
    id: "problem",
    label: "Overview",
    children: [
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
    ],
  },
  { id: "system", label: "Prototyping" },
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
        When decisions cannot wait but information does, frontline police officers are forced to guess.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-700 w-full break-words mt-4 ${caseStudyEditorialBodyClass}`}
      >
        INTELLIPAL removes that uncertainty, even in offline environments.
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
          { label: "TOOLS", value: "Figma, Android Studio" },
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
          <li>Interaction design & prototyping</li>
          <li>Usability testing & iteration</li>
          <li>Frontend development & integration</li>
        </ul>
      </motion.div>
    </div>

    <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-b border-[#003087]/30 bg-[#003087]/[0.06] py-12 md:py-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "Offline", desc: "Core retrieval and answering without network dependency" },
          { stat: "Instant", desc: "Dense + sparse search to balance recall and precision on SOP text" },
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
                <p>During field operations, officers frequently encounter:</p>
                <ul className="list-disc list-outside pl-6 space-y-1">
                  <li>Legal classification that falls into a grey area</li>
                  <li>SOPs that are impossible to search under time pressure</li>
                  <li>Connectivity that is unreliable or completely unavailable</li>
                </ul>
                <p>Instead of acting immediately, officers call supervisors, search static documents, or rely on memory. This creates delays, inconsistency, and legal risk.</p>
                <p>I conducted semi-structured interviews with five GRF officers to uncover officer's behaviours and pain points.</p>
              </div>
            </div>


          </motion.div>
        </section>

        <div className="max-w-3xl mx-auto mt-8 md:mt-6 mb-20 md:mb-24 text-center">
          <p className="font-serif text-[18px] md:text-[24px] leading-[1.6] text-black">
            &quot;When you&apos;re on the ground,{" "}
            <span className="font-bold text-red-600">things happen very fast</span>. Sometimes you&apos;re
            not even sure which offence it falls under, and there&apos;s{" "}
            <span className="font-bold text-red-600">
              no time to scroll through documents or find signal
            </span>
            .&quot;
          </p>
          <p className="mt-4 text-sm md:text-base text-neutral-600 text-center">
            — GRF Officer, Tanglin Division
          </p>
        </div>

        <div className="w-full max-w-4xl mt-16 md:mt-20 mb-20 md:mb-24">
          <p className={`text-neutral-700 ${caseStudyEditorialBodyClass}`}>
            I was surprised that the issues we found were common across officers. Connectivity often fails in basements and enclosed spaces, cutting off access to information and communication with the ops room. At the same time, routine knowledge and SOPs are more likely to be forgotten than complex procedures.
          </p>
          <p className={`mt-8 md:mt-10 text-neutral-700 ${caseStudyEditorialBodyClass}`}>
            In such a high-risk environment, how can officers be expected to operate when systems tend to break down?</p>
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
            <div className="w-full max-w-3xl mx-auto pt-4">
              <img
                src={intellipalSolution1}
                alt="INTELLIPAL solution interface"
                className="w-full h-auto object-contain"
              />
              <img
                src={intellipalSolution2}
                alt="INTELLIPAL solution interface follow-up"
                className="w-full h-auto object-contain mt-6"
              />
            </div>
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
            <p className="text-xs uppercase tracking-widest font-medium text-[#003087]">PROTOTYPING</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              I got it wrong.
            </h2>
            <div className={`text-neutral-700 space-y-7 ${caseStudyEditorialBodyClass}`}>
              <p>
                I started by designing a familiar search interface. I benchmarked patterns from systems like Singapore Statutes Online (SSO), Google, and ChatGPT to match their existing mental models.
             </p>
             <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 w-full max-w-3xl">
               <img
                 src={intellipalWireframe}
                 alt="INTELLIPAL wireframe concept"
                 className="w-full h-auto object-contain"
               />
             </div>
              <p>
                During testing, officers preferred simple input over structured filters, and result formats that showed information without forcing a decision.
              </p>
              <p>
                But A/B testing only validates what you put in front of users. It doesn't reveal what's
                missing. By giving predefined options, I was narrowing behaviour instead of discovering
                it.
              </p>
            </div>
            <h2 className="pt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              <span>The moment it </span>
              <span className="inline-block rotate-12 translate-y-2">broke.</span>
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-700`}>
              When we moved to high-fidelity testing, officers defaulted to typing short keywords (2-3 words) instead of natural-language queries. Even
              with microcopy encouraging full questions, behaviour didn't change.
            </p>
            <div className="w-full max-w-3xl">
              <img
                src={intellipalHifi1}
                alt="INTELLIPAL high-fidelity prototype"
                className="w-[70%] h-auto object-contain mx-auto"
              />
              <p className="mt-3 text-center text-sm text-neutral-500">Search Engine Interface</p>
            </div>
            <div className={`${caseStudyEditorialBodyClass} text-neutral-700 space-y-6`}>
              <p>
                After a pivotal usability test, I shifted INTELLIPAL from a search interface to a
                conversational one. I noticed officers naturally asked follow-up questions, treating the
                system more like a dialogue than a one-off query.
              </p>
              <p>This led to the introduction of a multi-query feature.</p>
            </div>
            <div className="w-full max-w-3xl">
              <img
                src={intellipalHifi2}
                alt="INTELLIPAL conversational interface"
                className="w-[70%] h-auto object-contain mx-auto"
              />
              <p className="mt-3 text-center text-sm text-neutral-500">Conversational Interface</p>
            </div>
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
              Final Thoughts.
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-700`}>
            Ideally, this project would have involved field observation and in-context usability testing with active SPF officers. That wasn’t possible due to operational constraints. Instead, we worked with university students who had prior or ongoing experience in the police force, using them as proxies to approximate real workflows and decision contexts.
            It wasn't the most ideal scenario, but it was the best we could do with the resources we had.
            </p>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default IntellipalCaseStudy;
