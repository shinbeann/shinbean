import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import intellipalHero from "@/assets/intellipal/IN_hero.png";
import intellipalSolution1 from "@/assets/intellipal/IN_solution1.png";
import intellipalSolution2 from "@/assets/intellipal/IN_solution2.png";
import intellipalHifi1 from "@/assets/intellipal/IN_hifi1.png";
import intellipalHifi2 from "@/assets/intellipal/IN_hifi2.png";
import intellipalThoughts from "@/assets/intellipal/IN_thoughts.jpg";
import intellipalWireframe from "@/assets/intellipal/IN_wireframe.png";
import { cn } from "@/lib/utils";
import { CaseStudyHeroMetadata } from "@/components/CaseStudyHeroMetadata";
import {
  caseStudyEditorialBodyClass,
  caseStudyHeroShellClass,
  caseStudySectionLabelClass,
  heroHeadlineClass,
  pageHorizontalPaddingClass,
  scrollAnchorClass,
} from "@/design-system";

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
  <section className={caseStudyHeroShellClass}>
    <div className={cn("w-full max-w-6xl mx-auto min-w-0", pageHorizontalPaddingClass)}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(heroHeadlineClass, "text-intellipal-accent")}
      >
        INTELLIPAL.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-200 w-full break-words mt-10 ${caseStudyEditorialBodyClass}`}
      >
        When decisions cannot wait but information does, frontline police officers are forced to guess.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`text-neutral-200 w-full break-words mt-4 ${caseStudyEditorialBodyClass}`}
      >
        INTELLIPAL removes that uncertainty, even in offline environments.
      </motion.p>

      <CaseStudyHeroMetadata
        role="UX/UI Designer"
        contributions={[
          "UX Research & Synthesis",
          "Interaction Design & Prototyping",
          "Usability Testing & Iteration",
          "Frontend Development & Integration",
        ]}
        team="5 Software Engineers"
        timeline="Sept 2025 – Apr 2026"
        organization="HTX (Home Team Science & Technology Agency)"
        tools="Figma, Android Studio"
        labelClassName="text-intellipal-accent"
        valueClassName="text-neutral-100"
      />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55 }}
      className={cn("w-full max-w-7xl mx-auto mt-16 md:mt-24", pageHorizontalPaddingClass)}
    >
      <img
        src={intellipalHero}
        alt="INTELLIPAL app on two smartphones showing SOP search prompts and riot control guidance"
        className="w-full h-auto object-contain mx-auto"
      />
    </motion.div>
  </section>
);

const IntellipalCaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={intellipalToc}
      theme="dark"
      navTone="dark"
      showSidebarsAfter="problem"
      hero={
        <div className="selection:bg-intellipal-accent/30 font-sans">
          <IntellipalHero />
        </div>
      }
    >
      <div className="selection:bg-intellipal-accent/30 font-sans overflow-x-hidden min-w-0">
        <section id="problem" className={cn("relative flex flex-col pt-24 md:pt-32 pb-20", scrollAnchorClass)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-full max-w-4xl space-y-6 text-left">
              <p className={cn(caseStudySectionLabelClass, "text-intellipal-accent")}>PROBLEM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
                SOPs without signal.
              </h2>
              <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
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
          <p className="font-serif text-[18px] md:text-[24px] leading-[1.6] text-neutral-100">
            &quot;When you&apos;re on the ground,{" "}
            <span className="font-bold text-red-400">things happen very fast</span>. Sometimes you&apos;re
            not even sure which offence it falls under, and there&apos;s{" "}
            <span className="font-bold text-red-400">
              no time to scroll through documents or find signal
            </span>
            .&quot;
          </p>
          <p className="mt-4 text-sm md:text-base text-neutral-400 text-center">
            — GRF Officer, Tanglin Division
          </p>
        </div>

        <div className="w-full max-w-4xl mt-16 md:mt-20 mb-20 md:mb-24">
          <p className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
            I was surprised that the issues we found were common across officers. Connectivity often fails in basements and enclosed spaces, cutting off access to information and communication with the ops room. At the same time, routine knowledge and SOPs are more likely to be forgotten than complex procedures.
          </p>
          <p className={`mt-8 md:mt-10 text-neutral-200 ${caseStudyEditorialBodyClass}`}>
            In such a high-risk environment, how can officers be expected to operate when systems tend to break down?</p>
        </div>

        <section id="solution" className={cn("relative pb-20", scrollAnchorClass)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className={cn(caseStudySectionLabelClass, "text-intellipal-accent")}>SOLUTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
              INTELLIPAL.
            </h2>
            <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
              <p className="font-semibold text-neutral-100">
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

        <section id="system" className={cn("relative pb-20", scrollAnchorClass)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className={cn(caseStudySectionLabelClass, "text-intellipal-accent")}>PROTOTYPING</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
              I got it wrong.
            </h2>
            <div className={`text-neutral-200 ${caseStudyEditorialBodyClass}`}>
              <p>
                I started by designing a familiar search interface. I benchmarked patterns from systems like Singapore Statutes Online (SSO), Google, and ChatGPT to match their existing mental models.
             </p>
             <div className=" overflow-hidden border border-white/10 bg-white/5 w-full max-w-3xl">
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
            <h2 className="pt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
              <span>The moment it </span>
              <span className="inline-block rotate-12 translate-y-2">broke.</span>
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-200`}>
              When we moved to high-fidelity testing, officers defaulted to typing short keywords (2-3 words) instead of natural-language queries. Even
              with microcopy encouraging full questions, behaviour didn't change.
            </p>
            <div className="w-full max-w-3xl">
              <img
                src={intellipalHifi1}
                alt="INTELLIPAL high-fidelity prototype"
                className="w-[70%] h-auto object-contain mx-auto"
              />
              <p className="mt-3 text-center text-sm text-neutral-400">Search Engine Interface</p>
            </div>
            <div className={`${caseStudyEditorialBodyClass} text-neutral-200 space-y-6`}>
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
              <p className="mt-3 text-center text-sm text-neutral-400">Conversational Interface</p>
            </div>
          </motion.div>
        </section>

        <section id="reflection" className="relative pb-32 scrollAnchorClass">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl space-y-6"
          >
            <p className={cn(caseStudySectionLabelClass, "text-intellipal-accent")}>REFLECTION</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100 leading-tight">
              Final Thoughts.
            </h2>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-200`}>
            Ideally, this project would have involved field observation and in-context usability testing with active SPF officers. That wasn’t possible due to operational constraints. Instead, we worked with university students who had prior or ongoing experience in the police force, using them as proxies to approximate real workflows and decision contexts.
            It wasn't the most ideal scenario, but it was the best we could do with the resources we had.
            </p>
            <p className={`${caseStudyEditorialBodyClass} text-neutral-200`}>
              P.S. I had the opportunity to share this project with David Neo. I was very nervous!
            </p>
            <div className="max-w-3xl mx-auto">
              <img
                src={intellipalThoughts}
                alt="David Neo, Prof Phoon Kok Kwang, and the author reviewing the INTELLIPAL prototype on a smartphone"
                className="w-[50%] h-[50%] object-contain mx-auto"
              />
              <p className="mt-3 text-center text-sm text-neutral-400">
                David Neo, Prof Phoon Kok Kwang and I
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default IntellipalCaseStudy;
