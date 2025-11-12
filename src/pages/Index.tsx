import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MultilingualHero from "@/components/MultilingualHero";
import ProjectCard from "@/components/ProjectCard";


const projects = [
  {
    id: 1,
    title: "Hybrid RAG",
    roles: ["Lead UX Researcher"],
    problem: "SPF need a faster, more intuitive, and reliable access to SOPs and references that still works offline.",
    outcome: "-",
    tags: ["UX Research", "RAG", "Android"],
    image: "/htx.png",
    slug: "hybridrag",
    category: "Professional" as const,
  },
  {
    id: 2,
    title: "KidneyQuest",
    roles: ["UX Designer", "UI/UX Designer"],
    problem: "High cart abandonment due to 5-step checkout process",
    outcome: "18% increase in conversion, reduced checkout to 3 steps",
    tags: ["E-Commerce", "Conversion", "A/B Testing"],
    image: "/placeholder.svg",
    slug: "kidneyquest",
    category: "Professional" as const,
  },
  {
    id: 3,
    title: "University Course Registration",
    roles: ["UX/UI Designer"],
    problem: "Students struggled to find and register for courses efficiently",
    outcome: "95% task success rate, 4.8/5 satisfaction score",
    tags: ["Education", "Web", "Usability Testing"],
    image: "/placeholder.svg",
    slug: "course-registration",
    category: "School" as const,
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    roles: ["Product Designer"],
    problem: "Existing apps lacked visual insight into spending patterns",
    outcome: "Featured on Product Hunt, 1000+ early adopters",
    tags: ["Fintech", "Data Viz", "Mobile"],
    image: "/placeholder.svg",
    slug: "finance-tracker",
    category: "Passion" as const,
  },
];

const Index = () => {
  const categories = ["All Projects", "Work", "Passion"];
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : selectedCategory === "Work"
    ? projects.filter(p => p.category === "Professional" || p.category === "School")
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <MultilingualHero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Selected Work
            </h2>
          </div>
            
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground'
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Testimonials Strip */}
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-2xl font-semibold tracking-tight mb-8 text-center">
              Impact & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <p className="text-3xl font-semibold text-primary">+18%</p>
                <p className="text-sm text-muted-foreground">Average task success improvement</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-3xl font-semibold text-primary">NPS +12</p>
                <p className="text-sm text-muted-foreground">Net Promoter Score increase</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-3xl font-semibold text-primary">5/5</p>
                <p className="text-sm text-muted-foreground">Usability test satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
