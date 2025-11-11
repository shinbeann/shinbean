import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Mock case study data - replace with real data/API
const caseStudies: Record<string, any> = {
  "healthcare-platform": {
    title: "Healthcare Platform Redesign",
    role: "Lead Product Designer",
    timeline: "6 months (Jan - Jun 2023)",
    team: "1 PM, 2 Engineers, 1 Designer (me)",
    tools: "Figma, Maze, Google Analytics, Optimal Workshop",
    hero: "/placeholder.svg",
    
    overview: {
      context: "A regional healthcare provider needed to modernize their patient portal, which was causing frustration and high drop-off rates during critical tasks like appointment booking.",
      goals: [
        "Reduce appointment booking time by 50%",
        "Increase completion rate to 80%+",
        "Improve mobile experience (60% of traffic)"
      ]
    },
    
    problem: {
      description: "Users faced a confusing 7-step booking process with redundant information requests and unclear navigation. Analytics showed 40% drop-off at step 3, and support tickets about booking issues increased 25% month-over-month.",
      constraints: [
        "Must integrate with legacy EMR system",
        "HIPAA compliance requirements",
        "Limited engineering resources (2 devs)",
        "6-month hard deadline for regulatory compliance"
      ]
    },
    
    process: [
      {
        phase: "Research",
        description: "Conducted 12 user interviews, analyzed 3 months of analytics data, and performed competitive analysis of 8 healthcare portals.",
        insights: [
          "Users wanted to see available times immediately",
          "Insurance verification caused most confusion",
          "Mobile users abandoned at higher rates (52%)"
        ]
      },
      {
        phase: "Synthesis",
        description: "Created user journey maps, identified 5 key pain points, and prioritized based on impact vs. effort matrix.",
        insights: [
          "Navigation structure was the #1 issue",
          "Insurance fields could be optional with smart defaults",
          "Desktop and mobile needed different approaches"
        ]
      },
      {
        phase: "Strategy",
        description: "Developed new IA collapsing 7 steps to 3, designed progressive disclosure pattern for optional fields, and mobile-first responsive strategy.",
        insights: []
      },
      {
        phase: "Design & Test",
        description: "Built prototypes in Figma, ran 3 rounds of usability testing with 5 participants each, and iterated based on feedback.",
        insights: [
          "Round 1: 60% task success (baseline: 40%)",
          "Round 2: 75% task success after nav changes",
          "Round 3: 87% task success after field optimization"
        ]
      }
    ],
    
    solution: {
      highlights: [
        "Collapsed 7-step flow to 3 clear stages: Select → Confirm → Done",
        "Introduced real-time slot availability calendar (no more back-and-forth)",
        "Implemented smart defaults for returning users (80% of users)",
        "Created mobile-optimized date picker (reduced input errors by 34%)",
        "Added progress indicator and ability to save/resume booking"
      ],
      components: [
        "Date picker component with accessibility enhancements",
        "Smart form system with conditional fields",
        "Responsive layout system for mobile-first approach"
      ]
    },
    
    results: {
      quantitative: [
        { metric: "Booking completion rate", before: "60%", after: "87%", change: "+27%" },
        { metric: "Average booking time", before: "8.5 min", after: "3.2 min", change: "-62%" },
        { metric: "Mobile completion rate", before: "48%", after: "84%", change: "+36%" },
        { metric: "Support tickets", before: "~180/month", after: "~45/month", change: "-75%" }
      ],
      qualitative: [
        "NPS score increased from 32 to 61",
        "Patient satisfaction rating: 4.6/5 (up from 2.8/5)",
        '"Finally feels like a modern healthcare experience" - user feedback'
      ]
    },
    
    personalVoice: "This project taught me the importance of balancing user needs with technical constraints. The biggest challenge was convincing stakeholders that removing fields (insurance verification) would actually improve data quality—turned out, optional fields with smart defaults had 95% completion vs. 60% for required fields. I also learned to design for the 'happy path' first, then layer in edge cases, rather than trying to accommodate everything upfront.",
    
    nextSteps: {
      shipped: [
        "A/B test appointment reminders (SMS vs. email vs. both)",
        "Expand to prescription refills and test results",
        "Integration with Apple Health / Google Fit"
      ]
    },
    
    tags: ["Healthcare", "Mobile-First", "User Research", "IA", "Usability Testing"]
  }
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudies[slug] : null;

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

        <article className="container max-w-4xl mx-auto px-4 space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-muted rounded-lg">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Role</h3>
                <p className="text-foreground">{caseStudy.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Timeline</h3>
                <p className="text-foreground">{caseStudy.timeline}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Team</h3>
                <p className="text-foreground">{caseStudy.team}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Tools</h3>
                <p className="text-foreground">{caseStudy.tools}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-6">{caseStudy.overview.context}</p>
            <div>
              <h3 className="font-semibold mb-3">Project Goals</h3>
              <ul className="space-y-2">
                {caseStudy.overview.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Problem & Constraints */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Problem & Constraints</h2>
            <p className="text-lg leading-relaxed mb-6">{caseStudy.problem.description}</p>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold mb-3">Key Constraints</h3>
              <ul className="space-y-2 text-muted-foreground">
                {caseStudy.problem.constraints.map((constraint: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Process</h2>
            <div className="space-y-8">
              {caseStudy.process.map((phase: any, index: number) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h3 className="text-xl font-semibold mb-3">{phase.phase}</h3>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  {phase.insights.length > 0 && (
                    <ul className="space-y-1">
                      {phase.insights.map((insight: string, i: number) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Solution Highlights */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Solution Highlights</h2>
            <ul className="space-y-4 mb-8">
              {caseStudy.solution.highlights.map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Key Components Designed</h3>
              <ul className="space-y-2">
                {caseStudy.solution.components.map((component: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground">• {component}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="bg-primary/5 -mx-4 px-4 md:-mx-8 md:px-8 py-12 rounded-lg">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">Results & Impact</h2>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Quantitative Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.quantitative.map((result: any, index: number) => (
                  <div key={index} className="bg-background p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">{result.metric}</p>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm line-through text-muted-foreground">{result.before}</span>
                      <span className="text-2xl font-semibold text-primary">{result.after}</span>
                      <span className="text-sm font-medium text-primary">{result.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Qualitative Outcomes</h3>
              <ul className="space-y-2">
                {caseStudy.results.qualitative.map((result: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Personal Voice */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">What I Learned</h2>
            <div className="border-l-4 border-primary pl-6 italic text-lg leading-relaxed">
              {caseStudy.personalVoice}
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">Next Steps</h2>
            <p className="mb-4 text-muted-foreground">Post-launch roadmap includes:</p>
            <ul className="space-y-2">
              {caseStudy.nextSteps.shipped.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>{step}</span>
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
