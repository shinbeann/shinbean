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
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Back Button */}
        <div className="container max-w-5xl mx-auto px-6 mb-8">
          <Button variant="ghost" asChild className="text-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <header className="container max-w-5xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-foreground font-sans">
            {caseStudy.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-accent text-foreground border border-border">
                {tag}
              </Badge>
            ))}
          </div>
          <img 
            src={caseStudy.hero} 
            alt={`${caseStudy.title} hero`}
            className="w-full aspect-[16/9] object-cover rounded-lg opacity-70"
          />
        </header>

        <article className="container max-w-4xl mx-auto px-6 space-y-16 prose prose-slate max-w-none prose-invert">
          {/* Overview */}
          <section className="not-prose bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-semibold mb-8 font-sans text-foreground" style={{letterSpacing: '-0.02em'}}>Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 bg-accent/50 rounded-lg border border-border">
              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 font-sans">Role</h3>
                <p className="text-foreground text-base">
                  {Array.isArray(caseStudy.roles) && caseStudy.roles.length
                    ? caseStudy.roles.join(" · ")
                    : caseStudy.role}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 font-sans">Timeline</h3>
                <p className="text-foreground text-base">{caseStudy.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 font-sans">Client</h3>
                <p className="text-foreground text-base">{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 font-sans">Tools</h3>
                <p className="text-foreground text-base">{caseStudy.tools}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-8 font-serif text-foreground">{caseStudy.overview.context}</p>
            <div>
              <h3 className="font-semibold mb-4 font-sans text-foreground text-xl">Project Goals</h3>
              <ul className="space-y-3">
                {caseStudy.overview.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-success mt-1 font-bold text-lg">→</span>
                    <span className="font-serif text-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problem & Constraints */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-8 font-sans text-foreground border-b border-border pb-4" style={{letterSpacing: '-0.02em'}}>Problem & Constraints</h2>
            <p className="text-lg leading-relaxed mb-8 font-serif text-foreground">{highlightTerms(caseStudy.problem.description, boldTerms)}</p>
            <div className="bg-destructive/10 border-l-4 border-destructive pl-8 py-6 rounded-r-lg">
              <h3 className="font-semibold mb-4 font-sans text-foreground text-xl uppercase tracking-wide text-sm">Key Constraints</h3>
              <ul className="space-y-3">
                {caseStudy.problem.constraints.map((constraint: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive mt-1 font-bold">✕</span>
                    <span className="font-serif text-foreground">{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="not-prose">
            <h2 className="text-3xl font-semibold mb-8 font-sans text-foreground border-b border-border pb-4" style={{letterSpacing: '-0.02em'}}>Process</h2>
            <div className="space-y-10">
              {caseStudy.process.map((phase: any, index: number) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 font-sans text-foreground">{index + 1}. {phase.phase}</h3>
                  <p className="text-foreground mb-6 font-serif text-lg leading-relaxed">{phase.description}</p>
                  {phase.insights.length > 0 && (
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {phase.insights.map((insight: any, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-success mt-1 font-bold">→</span>
                            <span className="font-serif text-foreground">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {phase.pain_points && phase.pain_points.length > 0 && (
                    <div className="mt-6 bg-destructive/10 p-6 rounded-lg border border-destructive/20">
                      <h4 className="text-sm font-semibold mb-4 font-mono uppercase tracking-wider text-foreground">Pain Points</h4>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {phase.pain_points.map((p: string, j: number) => (
                          <li key={j} className="flex items-center justify-center gap-3 bg-background/50 rounded-md px-6 py-5 text-center">
                            <span className="text-destructive font-bold">✕</span>
                            <span className="text-sm font-sans text-foreground">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {phase.design_system && phase.design_system.length > 0 && (
                    <div className="mt-6 bg-success/10 p-6 rounded-lg border border-success/20">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {phase.design_system.map((d: string, k: number) => (
                          <li key={k} className="flex items-start gap-3 bg-background/50 rounded-md p-4">
                            <span className="text-success mt-1 font-bold">✓</span>
                            <span className="text-sm font-serif text-foreground">{d}</span>
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
          <section className="not-prose bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-semibold mb-6 font-sans text-foreground" style={{letterSpacing: '-0.02em'}}>Next Steps</h2>
            <p className="mb-6 text-foreground font-serif text-lg">Post-launch roadmap includes:</p>
            <ul className="space-y-4">
              {caseStudy.nextSteps.shipped.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3 bg-warning/10 p-4 rounded-lg border border-warning/20">
                  <span className="text-warning mt-1 font-bold">→</span>
                  <span className="font-serif text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* CTA */}
        <div className="container max-w-4xl mx-auto px-6 mt-20 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Interested in working together?</h3>
          <Button size="lg" asChild className="rounded-full font-sans">
            <Link to="/contact">→ get in touch</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
