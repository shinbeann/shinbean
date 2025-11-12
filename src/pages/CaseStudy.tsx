import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudies from "@/case-studies";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudies[slug] : null;

  // Highlight specific phrases in problem description
  const boldTerms = [
    "slow",
    "keyword-dependent",
    "inaccessible without stable connectivity",
    "rely on supervisors",
    "faster",
    "reliable access even under poor connectivity",
    "natural language search",
    "decentralised decisions"
  ];

  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlightTerms = (text: string, terms: string[]) => {
    const pattern = terms.map(escapeRegExp).sort((a, b) => b.length - a.length).join("|");
    const regex = new RegExp(`(${pattern})`, "gi");
    const lowerSet = new Set(terms.map(t => t.toLowerCase()));
    return text.split(regex).map((part, i) =>
      lowerSet.has(part.toLowerCase()) ? (
        <strong key={i} className="font-semibold">{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Back Button */}
        <div className="container max-w-5xl mx-auto px-4 mb-8">
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <header className="container max-w-5xl mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {caseStudy.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <img 
            src={caseStudy.hero} 
            alt={`${caseStudy.title} hero`}
            className="w-full aspect-[16/9] object-cover rounded-lg"
          />
        </header>

        <article className="container max-w-4xl mx-auto px-4 space-y-16 prose prose-slate max-w-none">
          {/* Overview */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-6 font-sans" style={{letterSpacing: '-0.02em'}}>Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-muted rounded-lg">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Role</h3>
                <p className="text-foreground">
                  {Array.isArray(caseStudy.roles) && caseStudy.roles.length
                    ? caseStudy.roles.join(" · ")
                    : caseStudy.role}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Timeline</h3>
                <p className="text-foreground">{caseStudy.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Client</h3>
                <p className="text-foreground">{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Tools</h3>
                <p className="text-foreground">{caseStudy.tools}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6 font-serif">{caseStudy.overview.context}</p>
            <div>
              <h3 className="font-semibold mb-3 font-sans">Project Goals</h3>
              <ul className="space-y-2">
                {caseStudy.overview.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-serif">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problem & Constraints */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-6 font-sans" style={{letterSpacing: '-0.02em'}}>Problem & Constraints</h2>
            <p className="text-lg leading-relaxed mb-6 font-serif">{highlightTerms(caseStudy.problem.description, boldTerms)}</p>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-3 font-sans">Key Constraints</h3>
              <ul className="space-y-2 text-muted-foreground">
                {caseStudy.problem.constraints.map((constraint: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-serif">{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-6 font-sans" style={{letterSpacing: '-0.02em'}}>Process</h2>
            <div className="space-y-8">
              {caseStudy.process.map((phase: any, index: number) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-semibold mb-3 font-sans">{phase.phase}</h3>
                  <p className="text-muted-foreground mb-4 font-serif">{phase.description}</p>
                  {phase.insights.length > 0 && (
                    <ul className="space-y-1">
                      {phase.insights.map((insight: any, i: number) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span className="font-serif">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {phase.pain_points && phase.pain_points.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 font-sans">Pain points</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {phase.pain_points.map((p: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 bg-muted rounded-md p-3">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm font-serif">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {phase.design_system && phase.design_system.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2 font-sans">Design System</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {phase.design_system.map((d: string, k: number) => (
                          <li key={k} className="flex items-start gap-2 bg-muted rounded-md p-3">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm font-serif">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Solution Highlights */}
          {/* kept commented out by request */}

          {/* Results & Impact */}
          {/* kept commented out by request */}

          {/* Next Steps */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-6 font-sans" style={{letterSpacing: '-0.02em'}}>Next Steps</h2>
            <p className="mb-4 text-muted-foreground font-serif">Post-launch roadmap includes:</p>
            <ul className="space-y-2">
              {caseStudy.nextSteps.shipped.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="font-serif">{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* CTA */}
        <div className="container max-w-4xl mx-auto px-4 mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
          <Button size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
