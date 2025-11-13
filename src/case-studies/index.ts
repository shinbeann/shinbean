import { CaseStudyRegistry } from "@/types/caseStudy";
import hybridrag from "./hybridrag.tsx";
import kidneyquest from "./kidneyquest.tsx";
import caringbridge from "./caringbridge.tsx";
import flowtutor from "./flowtutor.tsx";

const caseStudies: CaseStudyRegistry = {
  [hybridrag.slug]: hybridrag,
  [kidneyquest.slug]: kidneyquest,
  [caringbridge.slug]: caringbridge,
  [flowtutor.slug]: flowtutor,
};

export default caseStudies;