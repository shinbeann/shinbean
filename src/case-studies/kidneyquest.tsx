import { CaseStudy } from "@/types/caseStudy";

const kidneyquest: CaseStudy = {
  slug: "kidneyquest",
  title: "KidneyQuest – Patient Education & Triage",
  roles: ["UX Designer", "UI Designer"],
  timeline: "12 weeks (Jan 2025 – Mar 2025)",
  client: "University Capstone",
  tools: "Figma, FigJam",
  hero: "/placeholder.svg",
  overview: {
    context:
      "Helping CKD patients and caregivers understand treatment options and next steps through a guided, plain-language experience.",
    goals: [
      "Reduce time to find relevant guidance to under 30 seconds",
      "Improve confidence in next steps (self-reported ≥ 4/5)",
      "Design for accessibility and mobile-first use",
    ],
  },
  problem: {
    description:
      "Patients struggle to find actionable, trustworthy information in a stressful moment. Resources are scattered, medical jargon is dense, and information architecture is not optimised for task-based navigation.",
    constraints: [
      "Medical language must be simplified without loss of meaning",
      "Mobile-first with offline-friendly reading",
      "Scope limited to education and triage guidance (no PHI)",
    ],
  },
  process: [
    {
      phase: "Empathise",
      description:
        "Spoke with 3 patients and 2 clinicians; mapped decision points and common misconceptions.",
      insights: [
        "Patients need reassurance before details",
        "Caregivers act as information gatekeepers",
      ],
      pain_points: [
        "Dense jargon blocks comprehension",
        "Too many links, not enough guidance",
        "Hard to skim on small screens",
        "Unclear ‘what do I do now?’",
      ],
    },
    {
      phase: "Synthesise",
      description: "Framed tasks around top questions and designed a minimal IA.",
      insights: [
        "Group by task (‘Decide’, ‘Prepare’, ‘Ask your doctor’) vs. body systems",
        "Use progressive disclosure to lower cognitive load",
      ],
    },
    {
      phase: "Prototype Solutions (Ongoing)",
      description:
        "Low-fi flows tested remotely; iterated copy and CTA placement based on usability findings.",
      insights: [
        "Primary CTA at top and bottom improved completion",
        "Chunked content (cards) outperformed long paragraphs",
      ],
      design_system: [
        "Type scale with ≥16px base and 1.25 ratio",
        "Cards, Steppers, Callouts, Link Buttons",
        "High contrast color tokens and focus states",
      ],
    },
  ],
  nextSteps: {
    shipped: [
      "Hi-fi prototype with annotated copy",
      "Content audit for readability (grade 7–8)",
      "Second round of moderated tests",
    ],
  },
  tags: ["Healthcare", "Accessibility", "Usability Testing"],
};

export default kidneyquest;