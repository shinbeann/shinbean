import { CaseStudyRegistry } from "@/types/caseStudy";
import hybridrag from "./hybridrag.tsx";
import kidneyquest from "./kidneyquest.tsx";

const caseStudies: CaseStudyRegistry = {
  [hybridrag.slug]: hybridrag,
  [kidneyquest.slug]: kidneyquest,
};

export default caseStudies;