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
    problem: "Singapore Police Force need a faster, more intuitive, and reliable access to SOPs and references that still works offline.",
    outcome: "-",
    tags: ["RAG", "Android"],
    image: "/htx.png",
    slug: "hybridrag",
    category: "Professional" as const,
  },
  {
    id: 2,
    title: "KidneyQuest",
    roles: ["UX Designer", "UI/UX Designer"],
    problem: "A mobile, interactive experience that minimises staff time and paper is needed to teach the public kidney-health essentials.",
    outcome: "-",
    tags: ["Healthcare", "AR"],
    image: "/kidneyquest.png",
    slug: "kidneyquest",
    category: "Professional" as const,
  },
  {
    id: 3,
    title: "FlowTutor",
    roles: ["UI/UX Designer"],
    problem: "Self-directed learners using YouTube tutorials constantly pause, scrub, and context-switch to find specific steps,causing overload, lost flow, and errors.",
    outcome: "-",
    tags: ["Education", "Web"],
    image: "/FThero.png",
    slug: "flowtutor",
    category: "School" as const,
  },
  {
    id: 5,
    title: "Reimagining CaringBridge",
    roles: ["UX/UI Designer"],
    problem: "CaringBridge’s utilitarian design create a cold, impersonal experience during emotionally sensitive health journeys.",
    outcome: "-",
    tags: ["Healthcare"],
    image: "/CBhero.png",
    slug: "caringbridge",
    category: "Passion" as const,
  },
  {
    id: 4,
    title: "Stratus",
    roles: ["Product Designer"],
    problem: "Existing journaling apps lack discreet privacy controls, effortless entry, and reliable retrieval, reducing journaling consistency.",
    outcome: "-",
    tags: ["UX Research", "Full Stack Software", "Flutter"],
    image: "/placeholder.svg",
    slug: "stratus",
    category: "Passion" as const,
  },
];

const Index = () => {
  const categories = ["All Projects", "Professional", "School", "Passion"];
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <MultilingualHero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Selected Work
            </h2>
          </div>
            
          {/* Filter Chips */}
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Testimonials Strip */}
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            Industry Partners & Clients
            </h3>
            <div className="flex justify-center items-center gap-12 md:gap-20">
              <img 
                src="/htxlogo.png" 
                alt="HTX - Home Team Science & Technology Agency" 
                className="h-16 md:h-20 w-auto transition-all duration-300"
              />
              <img 
                src="/nkflogo.png" 
                alt="National Kidney Foundation" 
                className="h-16 md:h-20 w-auto transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
