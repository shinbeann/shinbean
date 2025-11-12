import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock project data - replace with real data
const projects = [
  {
    id: 1,
    title: "Healthcare Platform Redesign",
    role: "Lead Product Designer",
    problem: "Complex navigation caused 40% drop-off during appointment booking",
    outcome: "Reduced booking time by 60%, increased completion rate to 87%",
    tags: ["Healthcare", "Mobile", "User Research", "IA"],
    image: "/placeholder.svg",
    slug: "healthcare-platform",
    category: "Professional" as const,
  },
  {
    id: 2,
    title: "E-Commerce Checkout Flow",
    role: "UX Designer",
    problem: "High cart abandonment due to 5-step checkout process",
    outcome: "18% increase in conversion, reduced checkout to 3 steps",
    tags: ["E-Commerce", "Conversion", "A/B Testing"],
    image: "/placeholder.svg",
    slug: "ecommerce-checkout",
    category: "Professional" as const,
  },
  {
    id: 3,
    title: "University Course Registration",
    role: "UX/UI Designer",
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
    role: "Product Designer",
    problem: "Existing apps lacked visual insight into spending patterns",
    outcome: "Featured on Product Hunt, 1000+ early adopters",
    tags: ["Fintech", "Data Viz", "Mobile"],
    image: "/placeholder.svg",
    slug: "finance-tracker",
    category: "Passion" as const,
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : selectedCategory === "work"
    ? projects.filter(p => p.category.toLowerCase() === "professional" || p.category.toLowerCase() === "school")
    : projects.filter(p => p.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Selected Work
            </h2>
            
            {/* Filter Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-background">
                <TabsTrigger 
                  value="all"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="work"
                  onClick={() => setSelectedCategory("work")}
                >
                  Work
                </TabsTrigger>
                <TabsTrigger 
                  value="passion"
                  onClick={() => setSelectedCategory("passion")}
                >
                  Passion
                </TabsTrigger>
              </TabsList>
            </Tabs>
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
