import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import caseStudies from "@/case-studies";
import CaseStudyLayout from "@/components/CaseStudyLayout";

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

  // Table of Contents items
  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "process", label: "Process" },
    ...(caseStudy?.results ? [{ id: "results", label: "Results & Impact" }] : []),
    ...(caseStudy?.personalVoice ? [{ id: "reflection", label: "Final Thoughts" }] : []),
    { id: "next-steps", label: "Next Steps" },
  ];

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
      <ScrollProgressBar />
      
      <CaseStudyLayout tableOfContents={tableOfContents}>
        {/* Hero */}
        <header id="hero" className="mb-16">
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

        <article className="space-y-16 prose prose-slate max-w-none prose-invert">
          {/* Overview */}
          <section id="overview" className="not-prose bg-card p-8 rounded-lg border border-border scroll-mt-24">
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
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-foreground mt-1 font-bold text-lg">→</span>
                    <span className="font-serif text-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="not-prose scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-8 font-sans text-foreground border-b border-border pb-4" style={{letterSpacing: '-0.02em'}}>Problem</h2>
            <p className="text-lg leading-relaxed font-serif text-foreground">{highlightTerms(caseStudy.problem.description, boldTerms)}</p>
            
            {/* Constraints (only show if they exist) */}
            {caseStudy.problem.constraints && caseStudy.problem.constraints.length > 0 && (
              <div className="mt-8 p-6 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Key Constraints</h3>
                <ul className="space-y-2">
                  {caseStudy.problem.constraints.map((constraint: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive mt-1">▸</span>
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Process */}
          <section id="process" className="not-prose scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-12 font-sans text-foreground border-b border-border pb-4" style={{letterSpacing: '-0.02em'}}>Process</h2>
            <div className="space-y-20">
              {caseStudy.process.map((phase: any, index: number) => {
                // Check if this phase is image-only (no text content)
                const isImageOnly = !phase.phase && !phase.description && phase.insights.every((i: any) => typeof i !== 'string');
                
                if (isImageOnly) {
                  return (
                    <div key={index} className="space-y-6">
                      {phase.insights.map((insight: any, i: number) => (
                        <div key={i} className="w-full">
                          {insight}
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <div key={index} className="space-y-8 border-l-2 border-border pl-8">
                    {phase.phase && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold font-sans text-foreground tracking-tight">
                          {index + 1}. {phase.phase}
                        </h3>
                        {phase.description && (
                          <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                            {phase.description}
                          </p>
                        )}
                      </div>
                    )}
                    
                    {phase.insights.length > 0 && (
                      <div className="space-y-1">
                        {phase.insights.map((insight: any, i: number) => {
                          // Check if insight is a React element (image)
                          if (typeof insight !== 'string') {
                            // Check if it's a design system image by looking at alt text
                            const isDesignSystem = insight.props?.alt?.toLowerCase().includes('design system');
                            return (
                              <div key={i} className={`${isDesignSystem ? 'w-4/5 mx-auto' : 'w-full'} overflow-hidden`}>
                                {insight}
                              </div>
                            );
                          }
                          // Text insight (check if it's a link)
                          const isLink = insight.startsWith('http') || insight.includes('.com');
                          return (
                            <div key={i} className="flex items-start gap-4">
                              <span className="text-foreground mt-1 font-bold flex-shrink-0">→</span>
                              {isLink ? (
                                <a href={insight} target="_blank" rel="noopener noreferrer" className="font-serif text-foreground text-lg leading-relaxed underline hover:text-primary">
                                  {insight}
                                </a>
                              ) : (
                                <span className="font-serif text-foreground text-lg leading-relaxed">{insight}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {phase.pain_points && phase.pain_points.length > 0 && (
                      <div className="mt-8 p-6 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Pain Points</h3>
                        <ul className="space-y-2">
                          {phase.pain_points.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className="text-destructive mt-1">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.design_system && phase.design_system.length > 0 && (
                      <div className="bg-success/10 p-8 rounded-lg border border-success/20">
                        <ul className="grid gap-4 sm:grid-cols-2">
                          {phase.design_system.map((d: string, k: number) => (
                            <li key={k} className="flex items-start gap-3 bg-background/50 rounded-md p-4">
                              <span className="text-success mt-1 font-bold flex-shrink-0">✓</span>
                              <span className="text-sm font-sans text-foreground">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Results & Impact */}
          {caseStudy.results && (
            <section id="results" className="not-prose scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-8 font-sans text-foreground border-b border-border pb-4" style={{letterSpacing: '-0.02em'}}>Results & Impact</h2>
              
              {caseStudy.results.quantitative && caseStudy.results.quantitative.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6 font-sans text-foreground">Quantitative Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.results.quantitative.map((result: any, index: number) => (
                      <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                        <p className="text-sm text-muted-foreground mb-2 font-sans">{result.metric}</p>
                        <p className="text-3xl font-bold text-primary mb-1">{result.after}</p>
                        <p className="text-sm text-success font-semibold">{result.change}</p>
                        {result.before !== "N/A" && (
                          <p className="text-xs text-muted-foreground mt-2">from {result.before}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.results.qualitative && caseStudy.results.qualitative.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6 font-sans text-foreground">Qualitative Impact</h3>
                  <ul className="space-y-4">
                    {caseStudy.results.qualitative.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-4 bg-accent/30 p-4 rounded-lg">
                        <span className="text-primary mt-1 font-bold">✓</span>
                        <span className="font-serif text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Final Thoughts */}
          {caseStudy.personalVoice && (
            <section id="reflection" className="not-prose py-8 scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-6 font-sans text-foreground" style={{letterSpacing: '-0.02em'}}>Final Thoughts</h2>
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg leading-relaxed font-serif text-foreground italic whitespace-pre-line">
                  {caseStudy.personalVoice}
                </p>
              </blockquote>
            </section>
          )}

          {/* Final Prototype */}
          {caseStudy.finalPrototype && (
            <section className="not-prose">
              <div className="w-full flex justify-center">
                {caseStudy.finalPrototype}
              </div>
            </section>
          )}

          {/* Next Steps */}
          <section id="next-steps" className="not-prose bg-card p-8 rounded-lg border border-border scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6 font-sans text-foreground" style={{letterSpacing: '-0.02em'}}>Next Steps</h2>
            <ul className="space-y-4">
              {caseStudy.nextSteps.shipped.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-foreground mt-1 font-bold">→</span>
                  <span className="font-serif text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Project Navigation */}
        <div className="mt-20">
          <div className="flex items-center justify-between gap-4 pb-12">
            {(() => {
              const allSlugs = Object.keys(caseStudies);
              const currentIndex = allSlugs.indexOf(slug || '');
              const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
              const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

              return (
                <>
                  <Button 
                    variant="ghost" 
                    asChild 
                    className={`text-foreground hover:text-foreground ${!prevSlug ? 'invisible' : ''}`}
                  >
                    {prevSlug ? (
                      <Link to={`/case-study/${prevSlug}`} onClick={() => window.scrollTo(0, 0)}>
                        ← Previous Project
                      </Link>
                    ) : (
                      <span>← Previous Project</span>
                    )}
                  </Button>
                  
                  <Button variant="outline" asChild className="text-foreground border-border hover:bg-accent">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Back to Home</Link>
                  </Button>

                  <Button 
                    variant="ghost" 
                    asChild 
                    className={`text-foreground hover:text-foreground ${!nextSlug ? 'invisible' : ''}`}
                  >
                    {nextSlug ? (
                      <Link to={`/case-study/${nextSlug}`} onClick={() => window.scrollTo(0, 0)}>
                        Next Project →
                      </Link>
                    ) : (
                      <span>Next Project →</span>
                    )}
                  </Button>
                </>
              );
            })()}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-12 border-t border-border text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Interested in working together?</h3>
          <Button size="lg" asChild className="rounded-full font-sans">
            <a href="mailto:hello@shinbean.studio">Email hello@shinbean.studio</a>
          </Button>
        </div>
      </CaseStudyLayout>

      <Footer />
    </div>
  );
};

export default CaseStudy;
