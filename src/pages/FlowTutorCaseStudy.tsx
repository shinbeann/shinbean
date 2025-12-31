import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Code, Brain, Layout, Sliders, ChevronRight, Search, Zap, Layers, AlertCircle, Eye, AlertTriangle, BookOpen, MessageSquare, FileText, CheckCircle, GripVertical, Sparkles, Maximize, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import onboardingBefore from "@/assets/flowtutor-onboarding-before.png";
import onboardingAfter from "@/assets/flowtutor-onboarding-after.png";
import pinBefore from "@/assets/flowtutor-pinbefore.png";
import pinAfter from "@/assets/flowtutor-pinafter.png";

// --- COMPONENTS ---

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

// 4. Transformation Showcase (Refinement Section)
const TransformationShowcase = ({ 
  title, 
  beforeVisual, 
  afterVisual, 
  caption,
  delay 
}: { 
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
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-8"
    >
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
      
      {/* Transformation Visual */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
        {/* Before */}
        <div className="relative flex-1 w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden opacity-80">
          <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-neutral-800/80 backdrop-blur-sm border border-neutral-600/50 rounded-md text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
            Before
          </div>
          <div className="aspect-[4/3] flex items-center justify-center p-6">
          {beforeVisual}
        </div>
        </div>

        {/* Arrow Connector - Ghost Button Style */}
        <div className="flex-shrink-0 hidden md:flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-transparent border border-zinc-700 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-zinc-200" />
          </div>
        </div>
        
        {/* Mobile Arrow */}
        <div className="flex md:hidden items-center justify-center py-1">
          <div className="w-9 h-9 rounded-full bg-transparent border border-zinc-700 flex items-center justify-center rotate-90">
            <ArrowRight className="w-4 h-4 text-zinc-200" />
          </div>
        </div>

        {/* After */}
        <div className="relative flex-1 w-full bg-white/5 backdrop-blur-md rounded-xl border border-green-500/30 overflow-hidden shadow-xl shadow-green-500/10">
          <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm border border-green-500/40 rounded-md text-[10px] font-mono text-green-400 uppercase tracking-wider">
            After
          </div>
          <div className="aspect-[4/3] flex items-center justify-center p-6">
          {afterVisual}
        </div>
      </div>
      </div>

      {/* Caption */}
      <div className="pt-6">
        <p className="text-sm text-neutral-300 text-center">{caption}</p>
      </div>
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

// 7. Product Anatomy Section Component
const ProductAnatomySection = () => {
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

        {/* Desktop: Image with built-in annotations */}
        <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            className="flex justify-center"
            >
            <div className="relative rounded-xl shadow-2xl overflow-visible bg-transparent">
                <img
                src="/flowtutor-lines.png"
                  alt="FlowTutor Unified Workspace"
                  className="w-full h-auto"
                style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.image-fallback');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                
                {/* Fallback Placeholder */}
                <div className="image-fallback hidden w-full aspect-video bg-neutral-900/50 flex items-center justify-center border border-white/5">
                  <span className="text-neutral-600 font-mono text-sm">[FlowTutor Screenshot]</span>
              </div>
            </div>
          </motion.div>
                </div>

        {/* Mobile: Image */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl shadow-2xl overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/flowtutor-lines.png"
              alt="FlowTutor Unified Workspace"
              className="w-full h-auto"
            />
          </motion.div>
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
      <section className="relative min-h-screen flex flex-col pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Top Navigation Row */}
            <div className="flex justify-between items-center mb-16 text-sm tracking-widest text-neutral-500 font-mono uppercase">
               <Link to="/" className="hover:text-white transition-colors">← Back</Link>
               <span>FlowTutor • Concept 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-white max-w-4xl">
              The future of AI-powered learning assistance.
            </h1>

            {/* Hero Image */}
            <div className="w-full aspect-[16/9] bg-[#111] rounded-lg overflow-hidden mb-16 border border-white/10">
               <img 
                 src="/FThero.png" 
                 alt="FlowTutor Hero" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Metadata Grid (Inline) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Role</h3>
                <p className="text-sm font-medium text-white">Product Designer</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Timeline</h3>
                <p className="text-sm font-medium text-white">August - September 2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Platform</h3>
                <p className="text-sm font-medium text-white">Web Application</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Tools</h3>
                <p className="text-sm font-medium text-white">Miro, Lovable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHASE 01: UNCOVERING THE DISCONNECT */}
      <section className="py-24 md:py-32 container max-w-7xl mx-auto px-6">
        {/* Hero Section - Split Layout */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Headline */}
            <div>
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs uppercase tracking-widest font-medium text-neutral-400 mb-6">
                  THE CHALLENGE
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
                  Video learning is broken by context switching.
                </h2>
                  </motion.div>
            </div>

            {/* Right: Body */}
            <div>
                      <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-lg text-neutral-400 leading-relaxed">
                  When learning from tutorials, students are forced into a manual cycle of pausing, scrubbing, and jumping timestamps to locate specific steps. This friction creates cognitive overload, causing users to lose their 'flow' and make errors.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* KEY INSIGHTS Label - Grouped with Cards */}
        <div className="mb-6 md:mb-8">
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              KEY INSIGHTS
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Observed 6 diverse users, from university freshmen to parents upskilling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE RESEARCH */}
      <section className="py-24 md:py-32 container max-w-7xl mx-auto px-6 border-t border-white/10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-medium text-neutral-400 mb-4">
            THE RESEARCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Uncovering the friction through observation.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
            Observed 6 diverse users, from university freshmen to parents upskilling.
          </p>
        </motion.div>

        {/* Key Insights Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-lg font-semibold text-white">
            Key Insights
          </p>
        </div>

        {/* Insights Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Poor Navigation */}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-white">Poor Navigation</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Users struggle to locate specific information without text search.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-sm text-neutral-500 italic">
                    "I wish there was a 'Ctrl+F' for videos."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Fragmented Workflow */}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-white">Fragmented Workflow</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Juggling YouTube, ChatGPT, and notes breaks concentration.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-sm text-neutral-500 italic">
                    "Switching tabs constantly is annoying."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Cognitive Overload */}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-white">Cognitive Overload</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Distractions (ads, recommendations) divert attention from learning goals.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-sm text-neutral-500 italic">
                    "Sidetracked by the recommendation feed."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Missing Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <Puzzle className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-white">Missing Context</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Videos often assume prerequisite knowledge, leaving gaps.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-sm text-neutral-500 italic">
                    "They don't explain the first principles."
                  </p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
      </section>

      {/* 3. PAPER TO PIXEL */}
      <section className="py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-neutral-400 mb-6">
              PROTOTYPING AND TESTING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              From paper to pixel.
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
              We conducted a heuristic evaluation with 5 evaluators who interacted with our paper prototype. They identified several usability issues, ranked by severity.
            </p>
          </motion.div>

          {/* Comparison Cards Stack */}
          <div className="space-y-12 md:space-y-16">
            {/* Card 1: Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-purple-400" />
          </div>
                  <h3 className="text-2xl font-bold text-white">Solving Poor Navigation</h3>
        </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  NN/g #4: Consistency
                </span>
      </div>

              {/* Comparison Grid - 50/50 Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-orange-400">Before</h4>
                  <div className="aspect-video bg-neutral-900/50 border border-orange-500/20 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-neutral-500 font-mono text-2xl mb-2">[04:20]</div>
                        <div className="text-xs text-neutral-600">Plain text timestamp</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Timestamps looked like static text, breaking the mental model.
                  </p>
                </div>

                {/* After Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-emerald-400">After</h4>
                  <div className="aspect-video bg-neutral-900/50 border border-emerald-500/20 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="px-5 py-3 bg-purple-600 rounded-lg text-white font-medium flex items-center gap-3 text-sm shadow-lg shadow-purple-500/30">
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                        04:20 Jump to Concept
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Interactive 'Pill Buttons' with clear hover states.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Workflow */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Solving Fragmented Workflow</h3>
                </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  NN/g #2: Match System & Real World
                </span>
              </div>

              {/* Comparison Grid - 50/50 Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-orange-400">Before</h4>
                  <div className="aspect-video bg-neutral-900/50 border border-orange-500/20 rounded-lg overflow-hidden">
                    <img 
                      src={pinBefore} 
                      alt="Paper prototype showing chat interface with overlapping panels" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    'Upload File' input confused users who primarily stream content.
                  </p>
        </div>
        
                {/* After Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-emerald-400">After</h4>
                  <div className="aspect-video bg-neutral-900/50 border border-emerald-500/20 rounded-lg overflow-hidden">
                    <img 
                      src={pinAfter} 
                      alt="FlowTutor chat interface showing timestamped messages with pin functionality" 
                      className="w-full h-full object-cover"
                    />
        </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Simplified 'Paste URL' input to match user behavior.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Clutter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Solving Cognitive Overload</h3>
                </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  NN/g #10: Help & Documentation
                </span>
        </div>

              {/* Comparison Grid - 50/50 Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-orange-400">Before </h4>
                  <div className="aspect-video bg-neutral-900/50 border border-orange-500/20 rounded-lg overflow-hidden">
                    <img 
                      src={onboardingBefore} 
                      alt="Paper prototype showing overlapping pop-up modal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Overlapping panels hid context when chat was pinned.
                  </p>
                </div>

                {/* After Column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-emerald-400">After</h4>
                  <div className="aspect-video bg-neutral-900/50 border border-emerald-500/20 rounded-lg overflow-hidden">
                    <img 
                      src={onboardingAfter} 
                      alt="Unified viewport with clean layout" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Unified 3-column viewport; no overlapping elements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE LAB PIVOT (Validating & Refining) */}
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
