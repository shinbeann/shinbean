import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CaseStudyLayout from "@/components/CaseStudyLayout";

/**
 * Fallback for /case-study/:slug when no dedicated case study page exists.
 * FlowTutor and KidneyQuest use custom pages (FlowTutorCaseStudy, KidneyQuestCaseStudy).
 * HybridRAG and NEST will get dedicated pages in the same format when ready.
 */
const CaseStudy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CaseStudyLayout tableOfContents={[]} showContactSection={false}>
        <div className="pt-24 min-h-[50vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Case study not found
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            View{" "}
            <Link to="/case-study/flowtutor" className="text-foreground underline hover:no-underline">
              FlowTutor
            </Link>{" "}
            or{" "}
            <Link to="/case-study/kidneyquest" className="text-foreground underline hover:no-underline">
              KidneyQuest
            </Link>{" "}
            case studies.
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </CaseStudyLayout>
    </div>
  );
};

export default CaseStudy;
