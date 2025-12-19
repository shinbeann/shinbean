import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Code, Brain, Layout, Sliders, ChevronRight, Search, Zap, Layers, AlertCircle, Eye, AlertTriangle, BookOpen, MessageSquare, FileText, CheckCircle, GripVertical, Sparkles, Maximize } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// --- COMPONENTS ---

// 1. Metadata Grid (Sticky Bottom Bar Style)
const MetadataBar = () => (
  <div className="w-full border-t border-white/10 bg-[#050505]/80 backdrop-blur-md sticky bottom-0 z-10">
    <div className="container max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Role</h3>
          <p className="text-sm font-medium text-white">Product Designer & Researcher</p>
        </div>
        <div className="space-y-1">
          <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Timeline</h3>
          <p className="text-sm font-medium text-white">3 Months (Iterative)</p>
        </div>
        <div className="space-y-1">
          <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Tools</h3>
          <p className="text-sm font-medium text-white">Figma, React, OpenAI API</p>
        </div>
        <div className="space-y-1">
          <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Team</h3>
          <p className="text-sm font-medium text-white">Solo Project</p>
        </div>
      </div>
    </div>
  </div>
);

// 2. Bento Card (Problem Section)
const BentoCard = ({ title, body, evidence, delay, icon: Icon }: { title: string, body: string, evidence: string, delay: number, icon?: React.ElementType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-8 h-full bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex flex-col justify-between group"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between min-h-[3.5rem]">
          <h3 className="text-xl font-bold text-white tracking-tight leading-tight max-w-[80%]">{title}</h3>
          {Icon && <Icon className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 transition-colors mt-1" />}
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-xs text-neutral-500 font-mono">"{evidence}"</p>
      </div>
    </motion.div>
  );
};

// 3. Heuristic Card (Discovery Section)
const HeuristicCard = ({ 
  number, 
  severity, 
  heuristic, 
  issue, 
  description, 
  delay 
}: { 
  number: string,
  severity: string, 
  heuristic: string, 
  issue: string, 
  description: string, 
  delay: number 
}) => {
  const isSeverity3 = severity === "Severity 3";
  const severityColor = isSeverity3 ? "text-orange-400" : "text-yellow-400";
  const severityBg = isSeverity3 ? "bg-orange-500/20 border-orange-500/30" : "bg-yellow-500/20 border-yellow-500/30";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors overflow-hidden"
    >
      {/* Background Number */}
      <div className="absolute top-0 right-0 text-[120px] font-bold text-white/5 leading-none select-none pointer-events-none">
        {number}
      </div>
      
      <div className="relative space-y-4">
        {/* Severity Badge */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-mono ${severityColor} uppercase tracking-wider px-2 py-1 rounded border ${severityBg}`}>
            {severity}
          </span>
        </div>
        
        {/* Heuristic */}
        <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">{heuristic}</p>
        
        {/* Issue Title */}
        <h3 className="text-xl font-bold text-white tracking-tight">{issue}</h3>
        
        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// 4. Comparison Card (Refinement Section)
const ComparisonCard = ({ title, beforeVisual, afterVisual, caption, delay }: { 
  title: string, 
  beforeVisual: React.ReactNode, 
  afterVisual: React.ReactNode, 
  caption: string,
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
    >
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      <div className="grid grid-rows-2 gap-4">
        <div className="relative bg-neutral-900/50 rounded-lg border border-red-500/20 p-6 flex items-center justify-center min-h-[200px]">
          <div className="absolute top-3 left-3 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[10px] font-mono text-red-400 uppercase tracking-wider">
            Before
          </div>
          {beforeVisual}
        </div>
        <div className="relative bg-neutral-900/50 rounded-lg border border-green-500/20 p-6 flex items-center justify-center min-h-[200px]">
          <div className="absolute top-3 left-3 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-[10px] font-mono text-green-400 uppercase tracking-wider">
            After
          </div>
          {afterVisual}
        </div>
      </div>
      <p className="text-xs text-neutral-500 font-mono text-center">{caption}</p>
    </motion.div>
  );
};

// 5. Methodology Bar (Lab Pivot Section)
const MethodologyBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-1">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Design</p>
          <p className="text-sm font-medium text-white">Within-Subjects Counterbalanced</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Sample</p>
          <p className="text-sm font-medium text-white">12 University Students</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Control</p>
          <p className="text-sm font-medium text-white">vs. Standard YouTube Workflow</p>
        </div>
      </div>
    </motion.div>
  );
};

// 6. Insight Card (Lab Pivot Section)
const InsightCard = ({ 
  insight, 
  evolution, 
  icon: Icon, 
  delay 
}: { 
  insight: string, 
  evolution: string, 
  icon: React.ElementType, 
  delay: number 
}) => {
  // Extract bold text from evolution (text between **)
  const evolutionParts = evolution.split(/(\*\*.*?\*\*)/g);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
    >
      <div className="space-y-6">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        
        {/* Insight */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Insight</p>
          <p className="text-neutral-400 text-sm leading-relaxed">{insight}</p>
        </div>
        
        {/* Arrow Separator */}
        <div className="flex items-center gap-2 py-2">
          <div className="flex-1 h-px bg-white/10" />
          <ArrowRight className="w-4 h-4 text-purple-400" />
          <div className="flex-1 h-px bg-white/10" />
        </div>
        
        {/* Evolution */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">Evolution</p>
          <p className="text-white text-sm leading-relaxed">
            {evolutionParts.map((part, index) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                const boldText = part.slice(2, -2);
                return <span key={index} className="font-bold text-purple-400">{boldText}</span>;
              }
              return <span key={index}>{part}</span>;
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// 7. Validation Methodology Bar
const ValidationMethodologyBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="space-y-2 pr-0 md:pr-6">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Design</p>
          <p className="text-sm font-medium text-white">Between-Subjects A/B Test</p>
          <p className="text-xs text-neutral-500">Eliminates carryover effects.</p>
        </div>
        <div className="space-y-2 pt-6 md:pt-0 px-0 md:px-6">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Participants</p>
          <p className="text-sm font-medium text-white">n=40 University Students</p>
          <p className="text-xs text-neutral-500">Randomly assigned (20/group).</p>
        </div>
        <div className="space-y-2 pt-6 md:pt-0 pl-0 md:pl-6">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Dependent Variable</p>
          <p className="text-sm font-medium text-white">Conceptual Retention</p>
          <p className="text-xs text-neutral-500">Measured via closed-book quiz.</p>
        </div>
      </div>
    </motion.div>
  );
};

// 8. A/B Condition Card
const ABConditionCard = ({ 
  title, 
  description, 
  isExperimental = false,
  delay 
}: { 
  title: string, 
  description: string, 
  isExperimental?: boolean,
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`p-8 bg-white/5 border rounded-xl ${
        isExperimental 
          ? "border-purple-500/30 bg-white/10" 
          : "border-white/10"
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          {isExperimental && (
            <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              Experimental
            </span>
          )}
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        {/* Visual Placeholder */}
        <div className="mt-6 aspect-video bg-neutral-900/50 rounded-lg border border-white/5 flex items-center justify-center">
          <span className="text-neutral-600 font-mono text-sm">
            {isExperimental ? "[FlowTutor UI]" : "[YouTube Screenshot]"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// 9. Feature Reveal (Solution Section)
const FeatureReveal = ({ title, description, isActive }: { title: string, description: string, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isActive ? 1 : 0.4, x: isActive ? 0 : -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`p-8 rounded-xl border transition-all ${
        isActive 
          ? "bg-white/10 border-purple-500/30" 
          : "bg-white/5 border-white/10"
      }`}
    >
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// 4. Comparison Slider (Reused)
const ComparisonSlider = ({ beforeLabel, afterLabel, beforeImage, afterImage, caption }: { 
  beforeLabel: string, afterLabel: string, beforeImage: React.ReactNode, afterImage: React.ReactNode, caption: string 
}) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderValue((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderValue((x / rect.width) * 100);
  }

  return (
    <div className="space-y-6">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] bg-[#111] rounded-lg overflow-hidden cursor-col-resize border border-white/10 select-none group touch-none"
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {afterImage}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-wider">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 bg-[#0A0A0A] border-r border-white/20 pointer-events-none"
          style={{ width: `${sliderValue}%` }}
        >
          <div className="absolute inset-0 w-[100vw] max-w-none flex items-center justify-center">
             {/* Centering hack */}
             <div className="w-full h-full flex items-center justify-center transform translate-x-0">
                {beforeImage}
             </div>
          </div>
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-wider">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-px bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 pointer-events-none"
          style={{ left: `${sliderValue}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-xl">
            <Sliders className="w-4 h-4" />
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-500 font-mono text-center">{caption}</p>
    </div>
  );
};

// 6. Animated Stat Item (Proof Section)
const AnimatedStatItem = ({ 
  value, 
  label, 
  sublabel, 
  color = "text-white",
  size = "normal"
}: { 
  value: string, 
  label: string, 
  sublabel: string,
  color?: string,
  size?: "normal" | "large"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  // Check if value contains "vs" for special formatting
  const hasComparison = value.includes(" vs ");
  const [mainValue, comparisonValue] = hasComparison ? value.split(" vs ") : [value, ""];

  // Check if value starts with "+" for prefix handling
  const hasPlusPrefix = mainValue.startsWith("+");
  const cleanMainValue = hasPlusPrefix ? mainValue.slice(1) : mainValue;

  // Parse numeric value if it's a number
  const numericMatch = cleanMainValue.match(/(\d+\.?\d*)(.*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";
  const isNumeric = numericMatch !== null && numericValue > 0;

  useEffect(() => {
    if (isInView && isNumeric) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(mainValue);
          clearInterval(timer);
        } else {
          const prefix = hasPlusPrefix ? "+" : "";
          setDisplayValue(prefix + current.toFixed(suffix === "%" ? 0 : 1) + suffix);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    } else if (isInView && !isNumeric) {
      setDisplayValue(mainValue);
    }
  }, [isInView, numericValue, mainValue, suffix, isNumeric, hasPlusPrefix]);

  const textSize = size === "large" 
    ? "text-6xl md:text-7xl lg:text-8xl" 
    : "text-5xl md:text-6xl";

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-baseline gap-2">
        <div className={`${textSize} font-bold ${color} tracking-tighter leading-none`}>
          {displayValue}
        </div>
        {hasComparison && (
          <span className="text-xl md:text-2xl text-neutral-500 font-medium">
            vs {comparisonValue}
          </span>
        )}
      </div>
      <div className="text-purple-400 font-semibold uppercase tracking-wider text-xs">{label}</div>
      <p className="text-neutral-500 text-sm max-w-[250px] leading-relaxed">{sublabel}</p>
    </div>
  );
};

// 7. Floating Annotation Component (Postman Style)
const FloatingAnnotation = ({ 
  title, 
  description, 
  side, 
  textTop, 
  imageTop,
  imageLeft,
  delay,
  onHover
}: { 
  title: string, 
  description: string, 
  side: "left" | "right",
  textTop: string, // Vertical position of text label
  imageTop: string, // Top position on image (0-100%)
  imageLeft: string, // Left position on image (0-100%)
  delay: number,
  onHover: (target: string | null) => void
}) => {
  const annotationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(annotationRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Text Label with Dark Glass Backing */}
      <motion.div
        ref={annotationRef}
        initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        onMouseEnter={() => onHover(title.toLowerCase().replace(/\s+/g, '-'))}
        onMouseLeave={() => onHover(null)}
        className={`absolute z-20 w-64 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl hidden lg:block group hover:bg-black/90 hover:border-purple-500/30 transition-all`}
        style={{ 
          top: textTop,
          [side === "left" ? "left" : "right"]: "-280px", // Position well outside image boundaries
          transform: "translateY(-50%)",
          maxHeight: "160px"
        }}
      >
        <div className={`${side === "left" ? "text-right" : "text-left"}`}>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

// 8. Product Anatomy Section Component (Static Image with Baked Lines)
const ProductAnatomySection = () => {
  const leftFeatures = [
    {
      title: "Unified Viewport",
      description: "Combines video player, notes, and AI chat in a single view.",
      top: "10%"
    },
    {
      title: "Flexible Layout",
      description: "Draggable divider to resize the Video vs. Chat width.",
      top: "42%"
    },
    {
      title: "Smart Notes",
      description: "Rich text editor with timestamp tagging located directly under the video.",
      top: "70%"
    }
  ];

  const rightFeatures = [
    {
      title: "Retention Tools",
      description: "Pin important AI responses to build a study guide.",
      top: "5%"
    },
    {
      title: "Interactive Chat",
      description: "Clickable timestamps instantly sync the video to the explanation.",
      top: "45%"
    },
    {
      title: "Live LLM Integration",
      description: "Ask context-aware questions based strictly on the video transcript.",
      top: "88%"
    }
  ];

  return (
    <section className="py-32 bg-[#080808]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">The Unified Workspace.</h2>
        </motion.div>

        {/* Desktop: Static Image with Floating Text */}
        <div className="relative w-full max-w-7xl mx-auto hidden lg:block">
          {/* Central Image with Baked Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/flowtutor-lines.png"
              alt="FlowTutor Unified Workspace with Annotations"
              className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/flowtutor.png";
              }}
            />

            {/* Left-Side Text Container */}
            <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none">
              {leftFeatures.map((feature, index) => (
                <motion.div
                  key={`left-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="absolute pointer-events-auto"
                  style={{ top: feature.top, transform: 'translateY(-50%)' }}
                >
                  <div className="max-w-[200px] ml-4 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-right">
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right-Side Text Container */}
            <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none">
              {rightFeatures.map((feature, index) => (
                <motion.div
                  key={`right-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="absolute pointer-events-auto"
                  style={{ top: feature.top, transform: 'translateY(-50%)' }}
                >
                  <div className="max-w-[200px] mr-4 ml-auto p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-left">
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet: Stacked Layout */}
        <div className="lg:hidden space-y-8">
          {/* Image First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/flowtutor-lines.png"
              alt="FlowTutor Unified Workspace"
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/flowtutor.png";
              }}
            />
          </motion.div>

          {/* Feature List Below Image */}
          <div className="space-y-6">
            {[...leftFeatures, ...rightFeatures].map((feature, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PAGE ---

const FlowTutorCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Navigation tone="dark" />

      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col justify-center pt-20">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold tracking-tighter leading-[0.9] mb-8">
              FlowTutor<span className="text-purple-500">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-2xl font-light leading-relaxed">
              Turning chaotic YouTube tutorials into interactive, queryable learning experiences.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 w-full">
           <MetadataBar />
        </div>
      </section>

      {/* 2. THE PROBLEM (4-Column Grid) */}
      <section className="py-32 container max-w-7xl mx-auto px-6">
        <div className="mb-16 border-b border-white/10 pb-8">
          <span className="text-xs font-mono text-purple-400 mr-4">01</span>
          <h2 className="text-4xl font-bold inline-block tracking-tight">The Problem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard 
            title="Poor Navigation"
            icon={Search}
            body="Users struggle to locate specific information in long videos."
            evidence="Participant 4 wished for a 'Ctrl+F' function to search video content."
            delay={0}
          />
          <BentoCard 
            title="Fragmented Workflow"
            icon={Layers}
            body="Juggling YouTube, ChatGPT, and Notes breaks concentration."
            evidence="Participant 5 found constant tab-switching 'annoying'."
            delay={0.1}
          />
          <BentoCard 
            title="Cognitive Overload"
            icon={Zap}
            body="The interface presents too many distractions (ads, feeds)."
            evidence="Participant 2 was sidetracked by the recommendation feed."
            delay={0.2}
          />
          <BentoCard 
            title="Missing Context"
            icon={AlertCircle}
            body="Videos often assume prerequisite knowledge."
            evidence="Participant 3 noted videos 'don't explain first principles'."
            delay={0.3}
          />
        </div>
      </section>

      {/* 3. THE DISCOVERY (Heuristic Analysis) */}
      <section className="py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Identifying the Friction.</h2>
            <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
              Before building, we analyzed existing workflows against NN/g Usability Heuristics. We uncovered critical gaps in system status and user control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HeuristicCard
              number="01"
              severity="Severity 3"
              heuristic="NN/g #10: Help and documentation"
              issue="Overlapping Q&A Panels"
              description="When AI responses were pinned, users lost the context of the original question, causing confusion."
              delay={0}
            />
            <HeuristicCard
              number="02"
              severity="Severity 2"
              heuristic="NN/g #6: Recognition rather than recall"
              issue="Pin Feature Misinterpretation"
              description="Users mistook the pin icon for a 'close' or 'save' button due to unclear iconography and placement."
              delay={0.1}
            />
            <HeuristicCard
              number="03"
              severity="Severity 2"
              heuristic="NN/g #4: Consistency and standards"
              issue="Timestamp Interaction Not Obvious"
              description="Users did not realize that timestamps in chatbot responses were clickable and linked to video playback."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 4. THE REFINEMENT (Lab Study & Fixes) */}
      <section className="py-32 container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Refining through Observation.</h2>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            Early lab tests revealed that clear signifiers were missing. We pivoted to align the UI with mental models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ComparisonCard
            title="Fixing Heuristic #6"
            beforeVisual={
              <div className="text-neutral-500 font-mono text-lg">[04:20]</div>
            }
            afterVisual={
              <div className="px-4 py-2 bg-purple-600 rounded-lg text-white font-medium flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-white rounded-full" />
                04:20 Jump to Concept
              </div>
            }
            caption="Transformed static timestamps into interactive jump-links."
            delay={0}
          />
          <ComparisonCard
            title="Simplifying Onboarding"
            beforeVisual={
              <div className="border-2 border-dashed border-neutral-600 rounded-xl p-8 text-center w-full">
                <div className="text-neutral-500 font-mono text-sm mb-2">Drag & Drop File</div>
                <div className="text-neutral-600 text-xs">or click to browse</div>
              </div>
            }
            afterVisual={
              <div className="w-full max-w-sm p-2 bg-black border border-white/20 rounded-lg flex gap-2">
                <div className="flex-1 bg-neutral-900 rounded px-3 py-2 text-neutral-500 font-mono text-sm">
                  paste youtube link...
                </div>
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </div>
            }
            caption="Removed file-picker friction for a URL-first workflow."
            delay={0.1}
          />
        </div>
      </section>

      {/* 5. THE LAB PIVOT (Validating & Refining) */}
      <section className="py-32 container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">The Lab Pivot: From Hypothesis to Polish.</h2>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            We moved from identifying usability issues to measuring impact. While our quantitative data supported our efficiency hypotheses (H1-H3), the qualitative feedback forced three critical architectural changes.
          </p>
        </motion.div>

        {/* Methodology Bar */}
        <div className="mb-16">
          <MethodologyBar />
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InsightCard
            insight="Users found fixed panels restrictive. They needed to focus on the video or notes at different times."
            evolution="Implemented a **Draggable Divider**, allowing users to resize the viewport dynamically."
            icon={GripVertical}
            delay={0}
          />
          <InsightCard
            insight="Preset AI prompts were helpful but too limiting. Users wanted to ask open-ended follow-up questions."
            evolution="Replaced static responses with a **Live ChatGPT LLM API** integration for context-aware conversation."
            icon={Sparkles}
            delay={0.1}
          />
          <InsightCard
            insight="The sticky navigation bar consumed valuable screen real estate on smaller laptop screens."
            evolution="Redesigned the chrome to be **Non-Sticky** and reduced padding by 20% for a cleaner viewing experience."
            icon={Maximize}
            delay={0.2}
          />
        </div>
      </section>

      {/* 6. THE SOLUTION (Product Anatomy Diagram) */}
      <ProductAnatomySection />

      {/* 7. THE VALIDATION (Iteration 3: Web Experiment) */}
      <section className="py-32 container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Iteration 3: Measuring Efficacy.</h2>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            Moving beyond usability, we rigorously tested our central claim: does an integrated interface lead to better learning outcomes?
          </p>
        </motion.div>

        {/* Methodology Bar */}
        <div className="mb-16">
          <ValidationMethodologyBar />
        </div>

        {/* A/B Conditions */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ABConditionCard
              title="Baseline: Fragmented Workflow"
              description="YouTube + External Notepad (Alt-Tab required)."
              isExperimental={false}
              delay={0}
            />
            <ABConditionCard
              title="FlowTutor: Integrated Workflow"
              description="Unified Viewport (Video + Chat + Notes)."
              isExperimental={true}
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* 8. THE PROOF (Web Study & Impact) */}
      <section className="py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Validated Impact.</h2>
            <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
              To prove efficacy, we conducted a between-subjects study (n=40) comparing FlowTutor against a YouTube control group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedStatItem
              value="25%"
              label="Lift in Retention"
              sublabel="Higher retention vs YouTube Baseline"
              color="text-white"
            />
            <AnimatedStatItem
              value="p<0.05"
              label="Statistically Significant"
              sublabel="Confirmed via t-test"
              color="text-green-400"
            />
            <AnimatedStatItem
              value="85% vs 68%"
              label="Mastery Score Gap"
              sublabel="FlowTutor vs Control"
              color="text-blue-400"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlowTutorCaseStudy;
