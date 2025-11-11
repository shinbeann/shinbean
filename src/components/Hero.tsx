import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        {/* Name & Role */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            UX/UI Designer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Designing intuitive, data-driven digital experiences
          </p>
        </div>

        {/* Bio */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            I craft user-centered solutions that balance business goals with human needs. 
            With 5+ years of experience, I've shipped products used by millions, 
            improving task success rates by 18% and NPS scores by 12 points on average.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="group"
          >
            View Work
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="/contact">Contact</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
