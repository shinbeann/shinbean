import { ReactNode } from "react";

export interface ProcessPhase {
  phase: string;
  description: string;
  insights: Array<string | ReactNode>;
  pain_points?: string[];
  design_system?: string[];
}

export interface ResultQuant {
  metric: string;
  before: string;
  after: string;
  change: string;
}

export interface SolutionSection {
  highlights: string[];
  components: string[];
}

export interface ResultsSection {
  quantitative: ResultQuant[];
  qualitative: string[];
}

export interface NextStepsSection {
  shipped: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  roles?: string[]; // prefer this
  role?: string; // kept for backward compatibility
  timeline: string;
  client: string;
  tools: string;
  hero: string;
  overview: {
    context: string;
    goals: string[];
  };
  problem: {
    description: string;
    constraints: string[];
  };
  process: ProcessPhase[];
  solution?: SolutionSection;
  results?: ResultsSection;
  personalVoice?: string;
  finalPrototype?: ReactNode;
  nextSteps: NextStepsSection;
  tags: string[];
}

export type CaseStudyRegistry = Record<string, CaseStudy>;