import { CaseStudy } from "@/types/caseStudy";

const kidneyquest: CaseStudy = {
  slug: "kidneyquest",
  title: "KidneyQuest",
  roles: ["UX Designer", "UI Designer"],
  timeline: "4 months (Sept – Dec 2025)",
  client: "The National Kidney Foundation (NKF)",
  tools: "Figma, Figma Make, Miro",
  hero: "/kidneyquest.png",
  overview: {
    context:
      "A mobile web AR mini-game for NKF’s inflatable kidney exhibit. Visitors scan a QR, answer fast questions, earn Orbs, and toss them to clear toxins—replacing paper handouts with a 3-minute, self-directed experience.",
    goals: [
      "−50% printed brochures/worksheets at events",
      "≥80% positive ease/engagement feedback",
      "≥3 key takeaways recalled in ≤3 minutes",
      "Mobile-first, multilingual, offline-friendly"
    ]
  },
  problem: {
    description:
      "At public events, dense brochures and static displays are ignored under time pressure. Recall is low and paper is unsustainable. We need a fast, accessible way to deliver kidney-health essentials without adding staff load.",
    constraints: []
    },
  process: [
    {
      phase: "Empathise",
      description:
        "Interviewed 3 participants + 61-response survey to understand what draws people to public exhibits and why they walk past.",
      insights: [],
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
        <img src="/affinitymapping.png" alt="Affinity Mapping" className="w-[70%] rounded-lg h-auto mx-auto" />,
        "One concept per screen improved comprehension and speed",
        "Visible progress + countdown increased focus within 3-minute cap",
        "Neutral, gain-framed feedback reduced anxiety vs. 'pass/fail'",
      ]
    },
    {
      phase: "Ideation",
      description:
        "Led group brainstorming sessions using Crazy 8s to rapidly explore diverse solutions and converge on the most promising concepts.",
      insights: [
        <img src="/ideation.png" alt="Ideation sketches showing various game concepts" className="w-[70%] rounded-lg h-auto mx-auto" />
      ]
    },
    {
      phase: "Prototype Solutions",
      description:
        "Developed low-fidelity prototypes and mapped the complete user journey from QR scan to completion.",
      insights: [
        <img src="/userflow.png" alt="User flow diagram" className="w-[80%] rounded-lg mx-auto" />,
        <img src="/NKFds.png" alt="NKF Design System" className="w-full rounded-lg mx-auto" />,
        "Adapted typography and colour palette from NKF guidelines for brand consistency",
      ]
    },
  ],
  personalVoice: "We set an ambitious bar for KidneyQuest, but when we moved from sketches to implementation, we realised that we had technical limitations which greatly hindered the project timeline and progress. We failed to realise that AR was the riskiest part of the concept. \n\nWhat I would change next time:\n\n- Prototype the riskiest assumption first and validate feasibility early\n- Periodic checkpoints with pass/fail criteria",
  results: {
    quantitative: [
      { metric: "Paper waste reduction", before: "100%", after: "50%", change: "-50%" },
      { metric: "Engagement rate", before: "N/A", after: "80%", change: "+87%" },
      { metric: "Average completion time", before: "N/A", after: "3 min", change: "2.48 min" },
    ],
    qualitative: [
      "Visitors reported the experience was engaging and educational",
      "NKF staff noted reduced setup time and material costs",
      "Positive feedback on the interactive AR elements and game mechanics",
    ],
  },
  finalPrototype: <img src="/NKFhifi.png" alt="High-fidelity prototype screens" className="w-[70%] h-auto mx-auto" />,
  nextSteps: {
    shipped: [
      "Second round of iterations based on feedback",
    ],
  },
  tags: ["Healthcare", "Accessibility", "Usability Testing"],
};

export default kidneyquest;