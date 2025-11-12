import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const GREETINGS = [
  { language: "English", text: "Hello" },
  { language: "中文", text: "你好" },
  { language: "Malay", text: "Hai" },
  { language: "தமிழ்", text: "வணக்கம்" },
  { language: "한국어", text: "안녕하세요" },
  { language: "日本語", text: "こんにちは" },
];

const MultilingualHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!isAutoRotating || prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, prefersReducedMotion]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLanguageSelect = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-6 pt-32">
      <div className="container max-w-3xl mx-auto space-y-12">
        {/* Multilingual Greeting */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-normal text-foreground transition-all duration-500 leading-tight">
            {GREETINGS[currentIndex].text.toLowerCase()}.
            <br />
            i'm
            <br />
            Shin Lee.
          </h1>
          
          {/* Language Chips - User Control */}
          <div className="flex flex-wrap items-center gap-2">
            {GREETINGS.map((greeting, index) => (
              <button
                key={greeting.language}
                onClick={() => handleLanguageSelect(index)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground'
                }`}
                aria-label={`Switch to ${greeting.language}`}
                aria-pressed={index === currentIndex}
              >
                {greeting.language}
              </button>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-2xl">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-sans">
            I'm a computer science undergraduate, drawn to human-centered design, 
            elevating people's stories into data-backed decisions via mixed-methods 
            research and iterative prototyping to ship intuitive, inclusive products.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="group bg-foreground hover:bg-foreground/90 text-background"
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
        <div className="pt-12 flex justify-center animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultilingualHero;
