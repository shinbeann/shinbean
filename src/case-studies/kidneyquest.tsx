import { CaseStudy } from "@/types/caseStudy";

const kidneyquest: CaseStudy = {
  slug: "kidneyquest",
  title: "KidneyQuest",
  roles: ["UX Designer", "UI Designer"],
  timeline: "4 months (Sept – Dec 2025)",
  client: "The National Kidney Foundation (NKF)",
  tools: "Figma, Figma Make",
  hero: "/kidneyquest.png",
  overview: {
    context:
      "Designing a mobile web AR mini-game to complement NKF's inflatable kidney exhibit. Visitors scan a QR, answer quick questions, earn Orbs, and toss them to clear toxins. This replaces the need for paper handouts with a fun, self-directed experience.",
    goals: [
      "Cut printed brochures/worksheets by ≥50% at events",
      "Achieve ≥80% positive ease/engagement feedback",
      "Ensure ≥3 key takeaways recalled within a ≤3-minute session",
      "Mobile-first, multilingual, offline-friendly"
    ]
  },
  problem: {
    description:
      "Event-goers encounter dense brochures and static displays that are easy to ignore under time pressure. Content recall is low, queues are dynamic, and paper materials are unsustainable. We need a fast, accessible, and engaging way to deliver kidney-health essentials without increasing manpower.",
    constraints: [
      "Total playtime target ≤3 minutes (queue-safe)",
      "PDPA-safe: on-device processing by default, no PII required",
      "Mobile web/PWA; must work with spotty connectivity (offline fallback)",
      "Camera permissions optional with non-camera path",
      "Operable on common smartphones at public venues, minimal set-up for staff"
    ]
  },
  process: [
    {
      phase: "Empathise",
      description:
        "Interviewed 3 participants and ran a survey with 61 respondents to understand what draws people to public exhibits and why they walk past.",
      insights: [
        "Stopping power depends on clarity at first glance and interactivity",
        "Visitors are often in a rush, most will give 2–5 minutes maximum",
        "Giveaways/freebies motivate attention but content must be relatable",
        "Simple, game-like tasks beat long reading on small screens"
      ],
      pain_points: [
        "Looks boring/irrelevant or unclear purpose on first look",
        "Little time, crowded venues, attention is fragmented",
        "Dense text/jargon causing low retention",
        "Paper handouts are often discarded and unsustainable"
      ]
    },
    {
      phase: "Synthesise",
      description:
        "Affinity mapping of interview and survey data revealed patterns in visitor behavior and content preferences.",
      insights: [
        <img src="/affinitymapping.png" alt="Affinity Mapping" className="w-full h-auto" />,
        "One concept per screen improved comprehension and speed",
        "Visible progress + countdown increased focus within 3-minute cap",
        "Neutral, gain-framed feedback reduced anxiety vs. 'pass/fail'",
        "Optional 30-second risk micro-screener bridges to screening action"
      ]
    },
    {
      phase: "Ideation",
      description:
        "Led group brainstorming sessions, and used Crazy 8s methodology to rapidly explore diverse wireframing.",
      insights: [
        <img src="/ideation.png" alt="Ideation sketches showing various game concepts" className="w-full h-auto" />
      ]
    },
    {
      phase: "Prototype Solutions",
      description:
        "Developed low-fidelity prototypes and mapped the complete user journey from QR scan to completion.",
      insights: [
        <img src="/userflow.png" alt="User flow diagram" className="w-full h-auto" />,
        "Design System was adapted from NKF existing guidelines to ensure brand consistency",
        <img src="/designsystem.png" alt="NKF Design System components" className="w-full h-auto" />
      ]
    },
  ],
  personalVoice: "This project taught me the value of designing within real-world constraints—short attention spans, crowded venues, and minimal setup time. Balancing engagement with education required constant iteration and user testing. I learned to prioritize clarity and speed without sacrificing impact, and to design for accessibility from the start rather than as an afterthought.",
  finalPrototype: <img src="/NKFhifi.png" alt="High-fidelity prototype screens" className="w-[70%] h-auto mx-auto" />,
  nextSteps: {
    shipped: [
      "Usability test approval from NKF",
      "Conduct usability test with 5-7 participants",
      "Second round of iterations based on feedback",
    ],
  },
  tags: ["Healthcare", "Accessibility", "Usability Testing"],
};

export default kidneyquest;