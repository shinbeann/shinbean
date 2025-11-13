import { CaseStudy } from "@/types/caseStudy";

const flowtutor: CaseStudy = {
  slug: "flowtutor",
  title: "FlowTutor",
  roles: ["UX Researcher", "UI Designer"],
  timeline: "4 months (Sep – Dec 2025)",
  client: "Academic Project",
  tools: "Figma, Miro, UserTesting",
  hero: "/placeholder.svg",
  overview: {
    context:
      "FlowTutor is a browser extension designed to enhance the YouTube learning experience. By providing intelligent chapter navigation, progress tracking, and interactive features, it helps learners stay focused and retain information better while watching educational content.",
    goals: [
      "Reduce context-switching and cognitive overload during tutorial viewing",
      "Improve content retention through structured navigation",
      "Maintain flow state by minimizing unnecessary pauses and scrubbing",
      "Provide progress tracking to motivate completion"
    ]
  },
  problem: {
    description:
      "Self-directed learners using YouTube tutorials constantly pause, scrub, and context-switch to find specific steps, causing cognitive overload, lost flow, and increased errors. The lack of structure in video tutorials makes it difficult to navigate, track progress, and retain information effectively.",
    constraints: [
      "Must work as a browser extension without requiring YouTube Premium",
      "Cannot interfere with YouTube's native video player controls",
      "Must be lightweight and performant to avoid lag",
      "Needs to work across different video lengths and tutorial formats",
      "Must respect YouTube's API rate limits and terms of service"
    ]
  },
  process: [
    {
      phase: "Research & Discovery",
      description:
        "Conducted interviews with 8 self-directed learners and analyzed their YouTube learning behaviors to identify pain points.",
      insights: [
        "Learners spend 40% of tutorial time pausing and scrubbing to find specific sections",
        "Most users take handwritten or digital notes separately, creating context-switching",
        "Lack of visual progress indicators makes it hard to gauge completion",
        "Users frequently lose their place when interrupted or switching between videos"
      ],
      pain_points: [
        "Constant pausing and scrubbing disrupts flow state",
        "Difficulty finding and returning to specific sections",
        "No built-in way to track progress across multiple sessions",
        "Taking notes requires switching between windows or devices"
      ]
    },
    {
      phase: "Competitive Analysis",
      description:
        "Evaluated existing solutions including video players, note-taking apps, and browser extensions to identify gaps and opportunities.",
      insights: [
        "Most extensions focus on speed control or ad-blocking, not learning enhancement",
        "Separate note-taking apps require context-switching and manual timestamping",
        "No existing solution combines chapter navigation with progress tracking",
        "Opportunity to integrate features directly into the viewing experience"
      ]
    },
    {
      phase: "Ideation & Prototyping",
      description:
        "Created low-fidelity wireframes and prototypes to explore different interaction patterns for chapter navigation and note-taking.",
      insights: [
        "Side panel design keeps tutorial content front and center",
        "Chapter-based navigation with timestamps provides clear structure",
        "Persistent progress indicators motivate completion",
        "Inline note-taking with automatic timestamps reduces friction"
      ]
    },
    {
      phase: "Usability Testing",
      description:
        "Tested prototypes with 7 participants completing coding tutorials using FlowTutor versus standard YouTube interface.",
      insights: [
        "85% task completion rate with FlowTutor vs. 60% with standard YouTube",
        "Average time to find specific sections reduced by 65%",
        "Participants reported feeling more organized and less overwhelmed",
        "Note-taking feature adoption exceeded expectations at 90% usage rate"
      ]
    }
  ],
  personalVoice:
    "Working on FlowTutor reminded me that the best tools are the ones that disappear—they enhance the experience without demanding attention. Every feature needed to earn its place by genuinely making learning easier, not just adding functionality for its own sake.",
  nextSteps: {
    shipped: [
      "Launch beta version for Chrome Web Store",
      "Conduct longitudinal study to measure retention impact over time",
      "Add support for Firefox and Edge browsers",
      "Explore AI-powered chapter detection for videos without timestamps"
    ]
  },
  tags: ["Education", "Browser Extension", "UX Research"]
};

export default flowtutor;
