import { CaseStudy } from "@/types/caseStudy";

const hybridrag: CaseStudy = {
  slug: "hybridrag",
  title: "Hybrid RAG for Singapore Police Force",
  roles: ["Product Designer"],
  timeline: "9 months (Sep 2025 - May 2026)",
  client: "HTX (Home Team Science & Technology Agency)",
  tools: "Figma",
  hero: "/htxhero.png",
  overview: {
    context:
      "To develop a  hybrid, offline-first RAG assistant that gives Singapore Police Force (SPF) ground response officers fast, arrestability-aware guidance (Penal Code, SOPs, quick-reference playbooks) that still works in connectivity blackspots.",
    goals: [
      "-≥50% on-scene lookup (time to first relevant extract and rationale)",
      "100% successful guidance completion in offline conditions",
      "One-hand, mobile-first, optimised for standard-issue Android devices",
    ],
  },
  problem: {
    description:
      "Existing information retrieval solutions hinder operational efficiency within the SPF. Ground Response Force officers currently face inefficient and time-consuming procedures when accessing Standard Operating Procedures (SOPs) or reference materials. The existing knowledge base is slow, keyword-dependent, and often inaccessible without stable connectivity, forcing officers to rely on supervisors for clarification. There is a clear need to provide officers with faster, more intuitive, and reliable access even under poor connectivity to important information. A system that enables natural language search and empowers officers to make decentralised decisions, would significantly enhance frontline decision-making and operational responsiveness. ",
    constraints: [
      "Must operate offline with on-device retrieval",
      "Sensitive content controls",
      "Android hardware",
      "Strict scope alignment with HTX/SPF review cadence and security sign-offs",
    ],
  },
  process: [
    {
      phase: "Empathise",
      description:
        "Conducted 4 user interviews + 10 SPF ground response officers survey, translated into a user persona",
      insights: [
        "Completed CITI Social & Behavioral research training to ensure ethical study design and data handling.",
        <img src="/Capstone Persona.png" alt="Capstone Persona" className="rounded-lg shadow-md mx-auto"/>,
      ],
      pain_points: [
        "Connectivity blackspots break coordination and lookups",
        "‘Grey area’ legal classification raises hesitation",
        "Recall gaps across penal codes/protocols",
        "Harsh field ergonomics (rain, gloves, glare, one-hand use)",
        "Reliance on seniors for ad-hoc answers",
        "Slow legacy lookups and non-searchable ‘logbook’",
      ],
    },
    {
      phase: "Synthesise",
      description: "Prioritised features based on MoSCoW matrix.",
      insights: [
        "Connectivity blackspots and legal ambiguity are Must-solve problems",
        "UI must be Kindle-like (fast, low-clutter), optimised for one-hand use",
      ],
    },
    {
      phase: "Competitive Audit",
      description: "Quick market/adjacent research used for inspiration.",
      insights: [
        "SPF Police regulations document",
        "Hong Kong Police Chatbot",
        "Standard Operating Procedure search app (Behance)",
      ],
    },
    {
      phase: "Prototype Solutions (Ongoing)",
      description:
        "Iteration of Lo-Fi prototypes in Figma, and creation of Design System",
      insights: [
        <img src="/designsystem.png" alt="Design System" className="w-[90%] rounded-lg shadow-md mx-auto" />,
      ],
    },
  ],
  solution: {
    highlights: [
      "Collapsed 7-step flow to 3 clear stages: Select → Confirm → Done",
      "Introduced real-time slot availability calendar (no more back-and-forth)",
      "Implemented smart defaults for returning users (80% of users)",
      "Created mobile-optimized date picker (reduced input errors by 34%)",
      "Added progress indicator and ability to save/resume booking",
    ],
    components: [
      "Date picker component with accessibility enhancements",
      "Smart form system with conditional fields",
      "Responsive layout system for mobile-first approach",
    ],
  },
  results: {
    quantitative: [
      { metric: "Booking completion rate", before: "60%", after: "87%", change: "+27%" },
      { metric: "Average booking time", before: "8.5 min", after: "3.2 min", change: "-62%" },
      { metric: "Mobile completion rate", before: "48%", after: "84%", change: "+36%" },
    ],
    qualitative: [
      "NPS score increased from 32 to 61",
      "Patient satisfaction rating: 4.6/5 (up from 2.8/5)",
      '"Finally feels like a modern healthcare experience" - user feedback',
    ],
  },
  personalVoice:
    "The biggest challenge I faced was recruiting active SPF personnel for my initial user research, due to access and operational constraints. To work around this, I spoke to ex-SPF officers from my university, using them as subject-matter proxies to surface real incident workflows, pain points, and mental models." + 
    "While I treated their input as provisional rather than definitive, these conversations helped me quickly build a rough picture of SPF ground operations and shape my early assumptions.\n\nFrom this, I realised that good UX research is not blocked by constraints, but adapts creatively while staying honest about its limitations.",
  nextSteps: {
    shipped: [
      "Hi-Fi prototypes for usability testing",
      "Develop a concrete A/B test plan, and the success metrics",
      "A/B test appointment reminders (to HTX via email)",
      "Iterate prototype based on feedback",
    ],
  },
  tags: [
    "User Research",
    "Contextual Inquiry",
    "MoSCoW",
    "Cognitive Walkthrough",
    "Usability Testing",
    "RAG",
    "Android",
  ],
};

export default hybridrag;