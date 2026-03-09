import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import kqInflatable from "@/assets/kq_inflatable.jpg";
import kqLanguage from "@/assets/kq_language.png";
import kqIntro from "@/assets/kq_intro.png";
import kqQuiz from "@/assets/kq_quiz.mp4";
import kqResult from "@/assets/kq_result.png";
import kqAr from "@/assets/kq_ar.mp4";
import kqBrainstorm from "@/assets/kq_brainstorm.png";
import kqAffinitymap from "@/assets/kq_affinitymap.png";
import kqLofis from "@/assets/kq_lofis.png";


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
          { label: "TIMELINE", value: "September – December 2025)" },
          { label: "CLIENT", value: "National Kidney Foundation (NKF)" },
          { label: "TOOLS", value: "Figma, Figma Make, 8th Wall, Miro" },
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

    {/* Yellow impact banner */}
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#E5A500] py-12 md:py-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "3×", desc: "Knowledge retention vs. brochure baseline" },
          { stat: "40%", desc: "Less staff time on manual explanation" },
          { stat: "4", desc: "Languages · 6 cities deployed" },
        ].map((item, i) => (
          <div
            key={item.stat}
            className={`flex flex-col items-center text-center ${i < 2 ? "md:border-r md:border-black/15" : ""}`}
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">{item.stat}</p>
            <p className="text-sm md:text-base text-black/70 mt-2 max-w-[240px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QuizVideo = ({ src }: { src: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(wrapperRef, { amount: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={wrapperRef} className="min-w-0 w-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        muted
        loop
        className="w-full h-auto object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const kidneyQuestToc = [
  {
    id: "overview",
    label: "Overview",
    children: [
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
    ],
  },
  { id: "research", label: "Research" },
  { id: "prototyping", label: "Prototyping" },
];

const KidneyQuestCaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={kidneyQuestToc}
      theme="dark"
      showSidebarsAfter="problem"
      showContactSection={false}
      hero={<div className="text-white selection:bg-amber-500/30 font-sans"><KidneyQuestHero /></div>}
    >
      <div className="text-white selection:bg-amber-500/30 font-sans overflow-x-hidden min-w-0">
        <section id="problem" className="relative flex flex-col pt-24 md:pt-32 pb-20 scroll-mt-20 md:scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-4xl mx-auto space-y-6"
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">
                PROBLEM
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                The Kidney in the Room.
              </h2>
            </div>
            <div className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                Diabetes and hypertension are the silent killers driving Chronic Kidney Disease (CKD), particularly in adults over 50. To combat this, the National Kidney Foundation (NKF) uses a massive, physical Inflatable Kidney at public roadshows to attract attention.
              </p>
              <p>
                It is visually impressive. It draws a crowd. But it had a fundamental flaw.
              </p>
            </div>
            {/* Image + Flaw cards layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 lg:flex-[0.6] min-w-0 flex items-center justify-center lg:justify-start"
              >
                <motion.div
                  initial={{ x: "30%" }}
                  whileInView={{ x: ["30%", "30%", "0%"] }}
                  viewport={{ once: true }}
                  transition={{ duration: 4, times: [0, 0.75, 1], ease: "easeOut" }}
                  className="w-full max-w-md overflow-hidden border border-white/10"
                >
                  <img
                    src={kqInflatable}
                    alt="National Kidney Foundation's massive inflatable kidney exhibit at a public roadshow, showing healthy and diseased kidney models"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 4, times: [0, 0.75, 1], ease: "easeOut" }}
                className="flex-1 lg:flex-[0.4] flex flex-col justify-center gap-4"
              >
                {[
                  {
                    title: "Passive Engagement",
                    text: "Visitors walked through, looked at the structure, and left without engaging with the educational panels.",
                  },
                  {
                    title: "Manpower Bottleneck",
                    text: "NKF staff are required to manually explain concepts to every visitor with the aid of paper brochures.",
                  },
                  {
                    title: "The Black Box",
                    text: "We had no way of knowing if a visitor walked away with any new knowledge.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3.2 + i * 0.1 }}
                    className="flex flex-col gap-2 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#FFD700]">0{i + 1}</span>
                    <h3 className="font-bold text-white">{card.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <section id="solution" className="pt-16 md:pt-24 scroll-mt-20 md:scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mb-16 border border-[#E5A500] rounded-xl px-8 py-10 md:px-12 md:py-12 bg-black/80 text-center"
              >
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed tracking-tight">
                  How might we create a{" "}
                  <span className="font-bold text-[#5EC4D4]">sustainable, cost-effective interaction</span>{" "}
                  that ensures participants walk away with{" "}
                  <span className="font-bold text-[#FFD700]">3 key kidney health takeaways in under 3 minutes</span>{" "}
                  — without printed brochures?
                </p>
              </motion.div>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">
                  Solution
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  KidneyQuest
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                  We designed KidneyQuest, a webAR game that shifts public health education from passive reading to active play.
                </p>
                <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(5,minmax(0,1fr))] gap-4 max-w-6xl w-full">
                  <div className="min-w-0 w-full overflow-hidden">
                    <img
                      src={kqLanguage}
                      alt="KidneyQuest language selection screen showing English, Chinese, Malay, and Tamil options with Read Aloud button"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="min-w-0 w-full overflow-hidden">
                    <img
                      src={kqIntro}
                      alt="KidneyQuest welcome screen showing How to play instructions and START button"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <QuizVideo src={kqQuiz} />
                  <div className="min-w-0 w-full overflow-hidden">
                    <img
                      src={kqResult}
                      alt="KidneyQuest results screen showing You restored the kidney, 3 facts learned, and Get Your Personal Risk Card button"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <QuizVideo src={kqAr} />
                </div>

                <div id="research" className="pt-16 md:pt-24 scroll-mt-20 md:scroll-mt-24">
                  <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                      RESEARCH
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                      Public Engagement with Exhibits.
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                      To understand why visitors don&apos;t engage with public exhibits, we conducted a survey (N=61) and observed behaviors at similar roadshows.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                      {[
                        { metric: "78%", title: "Engage in < 2 Minutes", description: "of users walk away within 120 seconds." },
                        { metric: "Top 2", title: "'Boring' & 'Rushed'", description: "Reasons users ignore static exhibits." },
                        { metric: "65%", title: "Want 'Phygital' Play", description: "Prefer mixing physical exhibits with digital interaction." },
                      ].map((card, i) => (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                        >
                          <p className="text-3xl md:text-4xl font-bold text-[#FFD700]">{card.metric}</p>
                          <h3 className="text-lg font-bold text-white">{card.title}</h3>
                          <p className="text-sm text-neutral-400 leading-relaxed">{card.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-lg font-semibold text-white pt-8">
                      Guided Group Brainstorming
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                      <div className="flex-1 min-w-0 overflow-hidden border border-white/10">
                        <img
                          src={kqAffinitymap}
                          alt="Affinity map of pain points, must-have features, and nice-to-have features for KidneyQuest"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden border border-white/10">
                        <img
                          src={kqBrainstorm}
                          alt="Mind map of brainstorm ideas for KidneyQuest including AR game, escape room, physical mini games, and virtual photobooth concepts"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    {/* Design Decisions */}
                    <div className="mt-16 md:mt-24 space-y-10">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-neutral-700/60 leading-none">01</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">WebAR vs. Native App vs. Website</h3>
                          <p className="text-neutral-400 mt-1">How should users access the experience with zero friction?</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-lg p-6 bg-white/[0.02]">
                          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                            <span className="text-neutral-500">✕</span> REJECTED
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">Native App</h4>
                          <p className="text-neutral-400 leading-relaxed">Best AR performance, but 100% of interviewees refused to download a new app at a public event.</p>
                        </div>
                        <div className="border border-[#E5A500]/60 rounded-lg p-6 bg-[#E5A500]/[0.04]">
                          <p className="text-xs uppercase tracking-widest text-[#E5A500] mb-3 flex items-center gap-1.5">
                            <span>✓</span> CHOSEN
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">WebAR via QR (8th Wall)</h4>
                          <p className="text-neutral-400 leading-relaxed">Scan → play in under 5 seconds. No install. Any modern browser. Preserves the phygital interaction 65% of users wanted.</p>
                        </div>
                      </div>
                    </div>

                    <div id="prototyping" className="pt-16 md:pt-24 scroll-mt-20 md:scroll-mt-24">
                      <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                          PROTOTYPING
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                          The iterations.
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                          As a team of non-designers, our initial instinct was to design cute mascot and themes. But early stakeholder feedback and usability testing revealed <span className="bg-amber-500/30 text-amber-200 px-1">visual noise, cognitive overload and heuristic issues</span>.
                        </p>
                        <div className="overflow-hidden mt-6 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                          <img
                            src={kqLofis}
                            alt="Grid of low-fidelity mobile prototypes showing The Flow Guardians and Kidney Quest design iterations"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default KidneyQuestCaseStudy;
