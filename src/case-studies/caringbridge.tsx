import { CaseStudy } from "@/types/caseStudy";

const caringbridge: CaseStudy = {
  slug: "caringbridge",
  title: "Reimagining CaringBridge",
  roles: ["UX Designer", "UI Designer"],
  timeline: "2 months (Nov – Dec 2024)",
  client: "CaringBridge (Conceptual Redesign)",
  tools: "Figma, Adobe Illustrator",
  hero: "/CBhero.png",
  overview: {
    context:
      "CaringBridge helps families share health updates during difficult times. While functional, its utilitarian design feels cold for users navigating emotionally sensitive health journeys. This project reimagines how visual design can foster warmth, trust, and community.",
    goals: [
      "Honour the emotional weight of health updates through empathetic UI",
      "Improve mobile readability and navigation for stressed users",
      "Strengthen visual hierarchy to foreground key actions",
      "Balance warm aesthetics with trustworthiness and accessibility"
    ]
  },
  problem: {
    description:
      "CaringBridge's no-frills layout provides basic functionality but neglects the emotional context users bring. Visitors struggle to find key details quickly; authors face dense form fields that feel clinical. The platform must feel like a supportive space, not a data-entry tool.",
    constraints: [
      "Must work on mobile and desktop with equal usability",
      "Maintain WCAG AA contrast despite warmer tones",
      "Retain brand recognition (can't overhaul identity entirely)",
      "Keep the core flow simple for stressed, low-bandwidth users"
    ]
  },
  process: [
    {
      phase: "Understanding Users",
      description:
        "Identified two primary user groups with distinct needs and stress levels.",
      insights: [
        "Primary: Journal Authors – Parents and caregivers creating and updating patient journals under high stress",
        "Secondary: Visitors/Supporters – Friends and family reading updates and leaving supportive messages",
        "Both groups value simplicity and emotional resonance during vulnerable moments"
      ]
    },
    {
      phase: "Research & Analysis",
      description:
        "Conducted heuristic review of 3 existing CaringBridge journals to identify usability and emotional design gaps.",
      insights: [
        "Dense text blocks with minimal breathing room created cognitive overload",
        "Key actions (donate, comment) were buried in cluttered layouts",
        "Clinical 'post update' form lacked emotional context and warmth"
      ],
      pain_points: [
        "Information overload",
        "Low visual hierarchy",
        "Neglected emotional context",
        "Inaccessible color contrast"
      ]
    },
    {
      phase: "Ideation",
      description:
        "Explored three distinct visual directions to balance warmth, trust, and accessibility.",
      insights: [
        "Cozy & Warm: Soft gradients, warm tones, rounded corners to create emotional comfort",
        "Clean & Clinical: Minimalist, high contrast, medical feel for trustworthiness",
        "Playful & Cheerful: Bright colors, friendly illustrations to lift spirits",
        "Selected the Cozy & Warm direction for its balance of empathy and professionalism"
      ]
    },
    {
      phase: "Design Solutions",
      description:
        "Redesigned key screens to improve hierarchy, reduce cognitive load, and infuse warmth throughout the experience.",
      insights: [
        "Enhanced visual hierarchy by increasing spacing and using typographic scale",
        "Introduced warmer color palette while maintaining WCAG AA contrast ratios",
        "Simplified forms with contextual help text and friendly microcopy",
        "Added clear CTAs with improved affordance through color and positioning",
        "Designed for mobile-first to support users in hospital waiting rooms"
      ]
    }
  ],
  personalVoice:
    "This project taught me that design isn't just about solving functional problems—it's about honoring the human experience behind every interaction. When people are navigating their most vulnerable moments, every color choice, every word, every bit of whitespace matters. It's a privilege to design for empathy.",
  nextSteps: {
    shipped: [
      "Present redesign to stakeholders and collect feedback",
      "Test with 5-7 users on mobile and desktop devices",
      "Refine designs based on usability insights",
      "Prepare dev-ready Figma specs and component library"
    ]
  },
  tags: ["Healthcare", "UI/UX", "Emotional Design"]
};

export default caringbridge;
