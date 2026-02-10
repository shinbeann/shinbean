import { CaseStudyRegistry } from "@/types/caseStudy";
import hybridrag from "./hybridrag.tsx";
import kidneyquest from "./kidneyquest.tsx";
import flowtutor from "./flowtutor.tsx";

const caseStudies: CaseStudyRegistry = {
  [hybridrag.slug]: hybridrag,
  [kidneyquest.slug]: kidneyquest,
  [flowtutor.slug]: flowtutor,
};

export default caseStudies;