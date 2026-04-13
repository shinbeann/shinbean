import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import kqInflatable from "@/assets/kidneyquest/kq_inflatable.jpg";
import kqLanguage from "@/assets/kidneyquest/kq_language.png";
import kqIntro from "@/assets/kidneyquest/kq_intro.png";
import kqQuiz from "@/assets/kidneyquest/kq_quiz.mp4";
import kqResult from "@/assets/kidneyquest/kq_result.png";
import kqAr from "@/assets/kidneyquest/kq_ar.mp4";
import kqBrainstorm from "@/assets/kidneyquest/kq_brainstorm.png";
import kqAffinitymap from "@/assets/kidneyquest/kq_affinitymap.png";
import kqIter from "@/assets/kidneyquest/kq_iter.jpg";
import kqTeam1 from "@/assets/kidneyquest/kq_team1.jpg";
import kqTeam2 from "@/assets/kidneyquest/kq_team2.jpg";


const KidneyQuestHero = () => (
  <section className="relative w-full pt-24 md:pt-36 overflow-x-hidden bg-[#050505]">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 min-w-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FFD700]"
      >
        KidneyQuest.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed w-full break-words mt-10"
      >
        NKF's kidney inflatable drew crowds but left visitors with a brochure they'd never read. We created KidneyQuest to turn kidney health education into a playful, memorable AR experience to replace paper handouts with a <span className="text-[#FFD700]">3-minute, self-directed mini-game.</span>
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
          { label: "ROLE", value: "UI/UX Designer" },
          { label: "TIMELINE", value: "September – December 2025" },
          { label: "CLIENT", value: "National Kidney Foundation (NKF)" },
          { label: "TOOLS", value: "Figma, Figma Make, Nano Banana, 8th Wall, Miro" },
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
          <li>Led user research with 3 participant interviews and a 61-response survey to understand visitor behavior at public exhibits.</li>
          <li>Conducted affinity mapping and synthesis sessions to identify patterns in content preferences and engagement barriers.</li>
          <li>Facilitated Crazy 8s ideation workshops to rapidly explore game concepts and converge on the AR mini-game direction.</li>
          <li>Adapted NKF's design system for mobile-first, multilingual delivery across 4 languages.</li>
        </ul>
      </motion.div>
    </div>

    {/* Yellow impact banner */}
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#E5A500] py-12 md:py-16 mt-10 md:mt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "3×", desc: "Knowledge retention vs. brochure baseline" },
          { stat: "40%", desc: "Less staff time on manual explanation" },
          { stat: "4", desc: "Languages" },
        ].map((item, i) => (
          <div
            key={item.stat}
            className={`flex flex-col items-center text-center ${i < 2 ? "md:border-r md:border-black/15" : ""}`}
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">{item.stat}</p>
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

const ArVideo = ({ src }: { src: string }) => {
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
    <div ref={wrapperRef} className="min-w-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        muted
        loop
        className="w-full h-full object-cover"
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
  { id: "reflection", label: "Reflection" },
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
      <div className="text-white selection:bg-amber-500/30 font-sans overflow-x-hidden min-w-0 bg-[#050505]">
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
                It is visually impressive. It draws a crowd. But it had a <span className="text-[#FFD700] font-semibold">fundamental flaw.</span>
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
                  className="w-full max-w-md flex flex-col"
                >
                  <div className="overflow-hidden border border-white/10">
                    <img
                      src={kqInflatable}
                      alt="National Kidney Foundation's massive inflatable kidney exhibit at a public roadshow, showing healthy and diseased kidney models"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 italic text-center mt-2">
                    NKF Inflatable Kidney exhibit
                  </p>
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
                    text: "Visitors spent <2 minutes at the exhibit, and left with mininmal engagement with the educational panels.",
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
                    <span className="text-2xl md:text-3xl font-bold tracking-tight leading-none text-[#FFD700]">0{i + 1}</span>
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
                className="mb-12 md:mb-16 text-center"
              >
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed tracking-tight">
                  How might we create a{" "}
                  <span className="font-bold text-[#FFD700]">sustainable, cost-effective interaction</span>{" "}
                  that ensures participants walk away with{" "}
                  <span className="font-bold text-[#FFD700]">3 key kidney health takeaways in under 3 minutes, without printed brochures?</span>{" "}
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
                  We designed KidneyQuest, a webAR game that transforms passive exhibit viewing into an active, time-bound interaction designed to deliver 3 key health takeaways within 3 minutes.
                </p>
                <p>
                  Scan → choose language → play → learn → AR reward. 3 minutes. 4 languages. Zero install.
                </p>
                <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(5,minmax(0,1fr))] items-stretch gap-4 max-w-6xl w-full">
                  <div className="min-w-0 w-full overflow-hidden">
                    <img
                      src={kqLanguage}
                      alt="KidneyQuest language selection screen showing English, Chinese, Malay, and Tamil options with Read Aloud button"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="min-w-0 w-full h-full overflow-hidden">
                    <img
                      src={kqIntro}
                      alt="KidneyQuest welcome screen showing How to play instructions and START button"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ArVideo src={kqQuiz} />
                  <div className="min-w-0 w-full overflow-hidden">
                    <img
                      src={kqResult}
                      alt="KidneyQuest results screen showing You restored the kidney, 3 facts learned, and Get Your Personal Risk Card button"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <ArVideo src={kqAr} />
                </div>

                <div id="research" className="pt-16 md:pt-24 scroll-mt-20 md:scroll-mt-24">
                  <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">RESEARCH</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                      Public Engagement with Exhibits.
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                      To understand why visitors don&apos;t engage with public exhibits, we conducted a survey (N=61) and observed behaviors at similar roadshows.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {[
                        {
                          metric: "78%",
                          title: "Engage in < 2 Minutes",
                          description:
                            "Interface must deliver value within the first 30–60 seconds.",
                        },
                        {
                          metric: "Top 2",
                          title: "'Boring' & 'No time'",
                          description:
                            "Experience must be:\n- Visually engaging\n- Minimal onboarding and immediate interaction",
                        },
                        {
                          metric: "65%",
                          title: "Want 'Phygital' Play",
                          description:
                            "The solution must bridge physical and digital seamlessly.",
                        },
                      ].map((card, i) => (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="flex flex-col gap-3 p-6 bg-white/5 border border-white/10 rounded-xl"
                        >
                          <p className="text-3xl md:text-4xl font-bold text-[#FFD700]">{card.metric}</p>
                          <h3 className="text-lg font-bold text-white">{card.title}</h3>
                          {/* Bridge: same pattern as FlowTutor Lab Pivot insight cards */}
                          <div
                            className="flex-shrink-0 flex items-center justify-between gap-3 py-3 my-1"
                            aria-hidden="true"
                          >
                            <div className="h-px flex-1 bg-white/5 min-w-[1rem]" />
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-[#0A0A0A] shadow-sm z-10 shrink-0">
                              <ArrowDown className="w-3.5 h-3.5 text-[#FFD700]" style={{ strokeWidth: 3 }} />
                            </div>
                            <div className="h-px flex-1 bg-white/5 min-w-[1rem]" />
                          </div>
                          <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                            {card.description}
                          </p>
                        </motion.div>
                      ))}
                  </div>


                  <div className="mt-16 space-y-4">
                    <p className="text-lg font-semibold text-white">Guided Group Brainstorming</p>
                    <div className="flex flex-col md:flex-row md:items-stretch gap-4">
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="overflow-hidden border border-white/10">
                          <img
                            src={kqAffinitymap}
                            alt="Affinity map of pain points, must-have features, and nice-to-have features for KidneyQuest"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          Modified MoSCoW prioritisation
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="overflow-hidden border border-white/10">
                          <img
                            src={kqBrainstorm}
                            alt="Mind map of brainstorm ideas for KidneyQuest including AR game, escape room, physical mini games, and virtual photobooth concepts"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          Group brainstorming
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Design Decision 01 */}
                  <div className="mt-16 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-neutral-700/60 leading-none">01</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Access Model</h3>
                          <p className="text-neutral-400 mt-1">How should users access the experience with zero friction?</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                            <span className="text-neutral-500">✕</span> REJECTED
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">Native App</h4>
                          <p className="text-neutral-400 leading-relaxed">Best AR performance, but 100% of interviewees refused to download a new app at a public event.</p>
                        </div>
                        <div className="border border-[#E5A500]/60 rounded-xl p-6 bg-[#E5A500]/[0.04]">
                          <p className="text-xs uppercase tracking-widest text-[#E5A500] mb-3 flex items-center gap-1.5">
                            <span>✓</span> CHOSEN
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">WebAR via QR (8th Wall)</h4>
                          <p className="text-neutral-400 leading-relaxed">- Scan → play in under 5 seconds. No installation required. </p>
                          <p className="text-neutral-400 leading-relaxed">- Preserves the phygital interaction 65% of users wanted.</p>
                        </div>
                      </div>
                  </div>

                  {/* Design Decision 02 */}
                  <div className="mt-16 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-neutral-700/60 leading-none">02</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Content Delivery</h3>
                          <p className="text-neutral-400 mt-1">How should health information be delivered inside the game?</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                            <span className="text-neutral-500">✕</span> REJECTED
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">Mascot-Led Tutorial</h4>
                          <p className="text-neutral-400 leading-relaxed">3 of 4 usability testers spent &gt;60s understanding the narrative before reaching any health content.</p>
                        </div>
                        <div className="border border-[#E5A500]/60 rounded-xl p-6 bg-[#E5A500]/[0.04]">
                          <p className="text-xs uppercase tracking-widest text-[#E5A500] mb-3 flex items-center gap-1.5">
                            <span>✓</span> CHOSEN
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">Direct Trivia + Visual Feedback</h4>
                          <p className="text-neutral-400 leading-relaxed">Question → wrong answer surfaces a health fact. No narrative scaffolding. Playable within 10 seconds of launch.</p>
                        </div>
                      </div>
                  </div>

                  {/* Design Decision 03 */}
                  <div className="mt-16 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-neutral-700/60 leading-none">03</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Language</h3>
                          <p className="text-neutral-400 mt-1">How should we support a multilingual audience?</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                            <span className="text-neutral-500">✕</span> REJECTED
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">Auto-detect device language</h4>
                          <p className="text-neutral-400 leading-relaxed">Phone language settings did not match users' preferred reading language.</p>
                        </div>
                        <div className="border border-[#E5A500]/60 rounded-xl p-6 bg-[#E5A500]/[0.04]">
                          <p className="text-xs uppercase tracking-widest text-[#E5A500] mb-3 flex items-center gap-1.5">
                            <span>✓</span> CHOSEN
                          </p>
                          <h4 className="text-lg font-semibold text-white mb-2">First-screen language picker</h4>
                          <p className="text-neutral-400 leading-relaxed">One-tap selection EN / ES / 中文 / தமிழ்</p>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl pt-8 md:pt-4">
                        Across all decisions, we{" "}
                        <span className="font-bold text-[#FFD700]">prioritised minimising friction</span>
                        {" "}and{" "}
                        <span className="font-bold text-[#FFD700]">delivering value within seconds.</span>
                      </p>
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
                          As a team of non-designers, our initial instinct was to design cute mascot and themes. But early stakeholder feedback and usability testing revealed{" "}
                          <span className="font-bold text-[#FFD700]">visual noise, cognitive overload and heuristic issues</span>.
                        </p>
                        <img
                          src={kqIter}
                          alt="Early to final KidneyQuest language screen iterations from Flow Guardians to simplified layout"
                          className="w-full h-auto object-cover mt-6"
                        />

                        <div
                          className="w-full overflow-x-auto"
                          style={{
                            ["--accent" as never]: "hsl(var(--kidneyquest-gold))",
                            ["--accent-bg" as never]: "hsl(var(--kidneyquest-gold) / 0.08)",
                            ["--surface" as never]: "hsl(var(--card))",
                            ["--border" as never]: "hsl(var(--border))",
                            ["--muted" as never]: "hsl(var(--muted-foreground))",
                            ["--text" as never]: "hsl(var(--foreground))",
                          }}
                        >
                          <table className="w-full border-collapse text-[13px] my-7">
                            <thead>
                              <tr>
                                {[
                                  "NAME",
                                  "CORE PROBLEM",
                                  "WHY REJECTED / WHY SHIPPED",
                                ].map((h) => (
                                  <th
                                    key={h}
                                    className="text-xs uppercase tracking-widest font-medium text-left"
                                    style={{
                                      color: "var(--accent)",
                                      background: "var(--surface)",
                                      borderBottom: "1px solid var(--border)",
                                      padding: "10px 14px",
                                    }}
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                {
                                  v: "01",
                                  name: "Flow Guardians",
                                  core: "Narrative-first, fiction before function",
                                  why:
                                    "Users spent 60s decoding game lore before reaching health content, violates progressive disclosure, cognitive cost before value delivery.",
                                },
                                {
                                  v: "02",
                                  name: "Mascot + Language Select",
                                  core: "Mascot overlaps primary action",
                                  why:
                                    "Character visual weight competes directly with language buttons; no dominant element. Decoration blocking interaction is noise.",
                                },
                                {
                                  v: "03",
                                  name: "Clean Grid",
                                  core: "Ambiguous READ ALOUD toggle state",
                                  why:
                                    "Toggle showed ON visually while labelled OFF: violates Heuristic #1 (visibility of system status). Logo consumed 35% of screen before the task.",
                                },
                              ].map((row) => (
                                <tr key={row.v}>
                                  <td
                                    style={{
                                      padding: "14px",
                                      borderBottom: "1px solid var(--border)",
                                      color: "var(--muted)",
                                      verticalAlign: "top",
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                                      {row.v}
                                    </span>
                                    <span
                                      className="block font-semibold"
                                      style={{
                                        color: "var(--text)",
                                        marginBottom: 4,
                                      }}
                                    >
                                      {row.name}
                                    </span>
                                  </td>
                                  <td
                                    style={{
                                      padding: "14px",
                                      borderBottom: "1px solid var(--border)",
                                      color: "var(--muted)",
                                      verticalAlign: "top",
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    {row.core}
                                  </td>
                                  <td
                                    style={{
                                      padding: "14px",
                                      borderBottom: "1px solid var(--border)",
                                      color: "var(--muted)",
                                      verticalAlign: "top",
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    {row.why}
                                  </td>
                                </tr>
                              ))}

                              {/* Shipped row */}
                              <tr
                                style={{
                                  background: "var(--accent-bg)",
                                  boxShadow: "inset 0 0 0 1px var(--accent)",
                                }}
                              >
                                <td
                                  style={{
                                    padding: "14px",
                                    borderBottom: "none",
                                    color: "var(--muted)",
                                    verticalAlign: "top",
                                    lineHeight: 1.55,
                                  }}
                                >
                                  <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                                    04
                                  </span>
                                  <span
                                    className="block font-semibold"
                                    style={{
                                      color: "var(--text)",
                                      marginBottom: 4,
                                    }}
                                  >
                                    KidneyQuest (Shipped)
                                  </span>
                                </td>
                                <td
                                  style={{
                                    padding: "14px",
                                    borderBottom: "none",
                                    color: "var(--muted)",
                                    verticalAlign: "top",
                                    lineHeight: 1.55,
                                  }}
                                >
                                  —
                                </td>
                                <td
                                  style={{
                                    padding: "14px",
                                    borderBottom: "none",
                                    color: "var(--muted)",
                                    verticalAlign: "top",
                                    lineHeight: 1.55,
                                  }}
                                >
                                  <div>
                                    Single visual hierarchy. Two typographic voices. White background survives outdoor ambient light. READ ALOUD correctly subordinated. Gestalt closure on 2×2 language grid.
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Reflection section — same spacing as Prototyping (pt, divider, content) */}
                        <div id="reflection" className="pt-16 md:pt-24 scroll-mt-20 md:scroll-mt-24">
                          <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
                          <div className="space-y-4">
                            <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                              Reflection
                            </p>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                            Constraints, constraints, constraints.
                          </h3>
                          <div className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-4">
                            <p>
                              Tight timeline and technical constraints forced a discipline we should have started with: testing assumptions before committing to features. Early in the project, the team had a long list of interactions we wanted to build: photobooth, mascot animations. But due to the technical difficulties we faced, deadlines were pushed back and features had to be cut.
                            </p>
                            <p>
                              If I were to redo this project, I would run a mock setup to test the feasbility of our project, before committing to a solution.
                            </p>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white pt-8">
                            Thank you!
                          </h3>
                          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                            Thank you to my teammates for pulling the long-nighters together and for sharing their valuable insight. Special thanks to Azfar and Sahitya for teaching me how to play foosball.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <img
                              src={kqTeam1}
                              alt="KidneyQuest team"
                              className="w-full h-auto object-cover"
                            />
                            <img
                              src={kqTeam2}
                              alt="KidneyQuest team"
                              className="w-full h-auto object-cover"
                            />
                          </div>
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
