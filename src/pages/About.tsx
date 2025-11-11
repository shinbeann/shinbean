import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "User Research", "Usability Testing", "Information Architecture",
    "Interaction Design", "Prototyping", "Design Systems",
    "Figma", "Adobe XD", "Sketch", "HTML/CSS", "React",
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
              I'm a UX/UI designer who believes great design is invisible—it simply works. 
              My approach combines rigorous research with creative problem-solving to craft 
              experiences that users love and businesses value.
            </p>
          </header>

          {/* Background */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                With over 5 years of experience in product design, I've worked across healthcare, 
                e-commerce, and SaaS platforms. My journey began with a degree in Human-Computer 
                Interaction, where I discovered my passion for making complex systems intuitive.
              </p>
              <p>
                I'm driven by measurable impact. Whether it's reducing task completion time, 
                increasing conversion rates, or improving accessibility scores, I anchor my 
                design decisions in data and user feedback.
              </p>
              <p>
                Currently, I'm focused on designing enterprise tools that empower teams while 
                exploring how AI can enhance—not replace—human decision-making in design processes.
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
              When I'm not designing, you'll find me mentoring aspiring designers, writing about 
              UX on Medium, or exploring local coffee shops with a sketchbook. I'm also passionate 
              about sustainable design practices and how our industry can reduce its environmental 
              impact.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
