import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CaseStudyLayout from "@/components/CaseStudyLayout";

/**
 * Fallback for /case-study/:slug when no dedicated case study page exists.
 * FlowTutor, KidneyQuest, and INTELLIPAL use dedicated pages.
 * NEST and unknown slugs fall through to this placeholder until a page exists.
 */
const CaseStudy = () => {
  const { slug } = useParams();

  if (slug === "nest") {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#E07020" }}>
        <CaseStudyLayout
          tableOfContents={[]}
          showContactSection={false}
          hideTableOfContents
          rootClassName="bg-transparent"
        >
          <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-6">
            <p className="text-white text-3xl md:text-5xl font-semibold">NEST is beta phase</p>
            <p className="text-white text-xl md:text-2xl mt-6">try it here!</p>
            <a
              href="https://nest-journal.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-base md:text-lg mt-4 underline underline-offset-4 hover:opacity-90"
            >
              https://nest-journal.vercel.app/
            </a>
            <p className="text-white/90 text-sm md:text-base mt-10">
              <Link to="/case-study/intellipal" className="underline underline-offset-4 hover:opacity-90">
                INTELLIPAL
              </Link>{" "}
              /{" "}
              <Link to="/case-study/flowtutor" className="underline underline-offset-4 hover:opacity-90">
                FlowTutor
              </Link>{" "}
              /{" "}
              <Link to="/case-study/kidneyquest" className="underline underline-offset-4 hover:opacity-90">
                KidneyQuest
              </Link>{" "}
              /{" "}
              <Link to="/case-study/nest" className="underline underline-offset-4 hover:opacity-90">
                NEST
              </Link>
            </p>
          </div>
        </CaseStudyLayout>
      </div>
    );
  }

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
