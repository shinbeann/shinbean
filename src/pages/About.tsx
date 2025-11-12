import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "User Research", "Usability Testing", "Information Architecture",
    "Interaction Design", "Prototyping", "Design Systems",
    "Figma", "Sketch", "HTML/CSS", "React",
    "A/B Testing", "Analytics", "Accessibility (WCAG)"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20 px-4">
        <article className="container max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a Computer Science Undergraduate, drawn to human-centered design, 
              elevating people's stories into data-backed decisions via mixed-methods 
              research and iterative prototyping to ship intuitive, inclusive products.
            </p>
          </header>

          {/* Background */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                With experience spanning product research and design, I've contributed to projects 
                across healthcare, public safety, and education. My path into UX grew from a 
                fascination with making complex tools feel simple and trustworthy.
              </p>
              <p>
                I'm driven by measurable impact. Whether it's reducing task completion time, 
                increasing conversion rates, or improving accessibility scores, I anchor my 
                design decisions in data and user feedback.
              </p>
              <p>
                I work at the intersection of UX and emerging AI Experience (AX). With my recent 
                project exploring how agents interact with secure systems. As AX matures, I'm 
                especially interested in trust, predictability, and making multi-step, cross-system 
                tasks easier for agents so the experience feels simpler and safer for end users.
              </p>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Design Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Research-Driven</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I start with understanding real user needs through interviews, surveys, and 
                  analytics before sketching a single wireframe.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Iterative Process</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Design is never "done." I embrace continuous testing, learning, and refinement 
                  based on user feedback and business metrics.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Accessible by Default</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WCAG compliance isn't an afterthought—it's baked into every design decision 
                  to ensure everyone can use what I build.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Collaborative Mindset</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Great products emerge from cross-functional collaboration. I work closely with 
                  engineers, PMs, and stakeholders throughout the process.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Beyond Work */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Beyond Work</h2>
            <p className="text-foreground/90 leading-relaxed">
              You might catch me reading books (lately <em>Hooked</em> by Nir Eyal), or practising 
              violin as I work towards Grade 8. I am also passionate about cloud architecture and 
              the rise of agentic workflows in AI.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
