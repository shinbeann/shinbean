import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import StackedCardCarousel from "@/components/StackedCardCarousel";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { ArrowLeft, ArrowRight, Code, Brain, Layout, Sliders, ChevronRight, ChevronDown, ArrowDown, Search, Zap, Layers, AlertCircle, Eye, AlertTriangle, BookOpen, MessageSquare, FileText, CheckCircle, GripVertical, Sparkles, Maximize, Puzzle, XCircle, Lightbulb } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import onboardingBefore from "@/assets/flowtutor-onboarding-before.png";
import onboardingAfter from "@/assets/flowtutor-onboarding-after.png";
import pinBefore from "@/assets/flowtutor-pinbefore.png";
import pinAfter from "@/assets/flowtutor-pinafter.png";
import vpBefore from "@/assets/flowtutor-vpbefore.png";
import vpAfter from "@/assets/flowtutor-vpafter.png";
import ftProblem from "@/assets/ft_problem.png";
import ftLanding from "@/assets/ft_landing.png";
import ftPearson from "@/assets/ft_pearson.png";
import ftMain from "@/assets/ft_main.png";
import ftDemoVideo from "@/assets/Screen Recording 2026-01-29 143535.mp4";
import ftFeature2 from "@/assets/ft_f2.png";
import ftFeature3 from "@/assets/ft_notes.png";
import ftQuizVideo from "@/assets/ft_quiz.mp4";
import ftMapping from "@/assets/ft_mapping.png";
import ftAi from "@/assets/ft_ai.png";
import ftS1 from "@/assets/ft_s1.png";
import ftS2 from "@/assets/ft_s2.png";
import ftS3 from "@/assets/ft_s3.png";
import ZigZagFeatures from "@/components/ZigZagFeatures";

// --- COMPONENTS ---

// 1. Section Container (Standardized Spacing)
interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}

const SectionContainer = ({ id, children, className = "", hasBorder = false }: SectionContainerProps) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 ${className}`}
    >
      {hasBorder && (
        <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
      )}
      <div className="flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
};

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
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight max-w-[85%] md:max-w-[80%] break-words">{title}</h3>
          {Icon && <Icon className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 transition-colors mt-1" />}
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed break-words">{body}</p>
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
      <div className="absolute top-0 right-0 text-6xl md:text-[120px] font-bold text-white/5 leading-none select-none pointer-events-none">
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
        <p className="text-neutral-400 text-sm leading-relaxed break-words">{description}</p>
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
  title,
  problem, 
  solution, 
  icon: Icon, 
  delay 
}: { 
  title: string,
  problem: string, 
  solution: string, 
  icon: React.ElementType, 
  delay: number 
}) => {
  // Extract bold text from solution (text between **)
  const solutionParts = solution.split(/(\*\*.*?\*\*)/g);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="p-5 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex flex-col h-full"
    >
      <div className="flex flex-col h-full">
        {/* Top Section: Header + Problem */}
        <div className="flex-none flex flex-col">
          <div className="mb-4 md:mb-6 min-h-[3.5rem] flex items-end pb-2">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
          </div>
          
          <div className="h-[5.5rem]">
            <p className="text-neutral-400 text-sm leading-relaxed break-words">{problem}</p>
          </div>
        </div>
        
        {/* Bridge Component */}
        <div className="flex-shrink-0 flex items-center justify-between gap-4 py-4 my-2">
          {/* Left Line */}
          <div className="h-[1px] flex-1 bg-white/5"></div>
          
          {/* The Bridge Badge */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-[#0A0A0A] shadow-sm z-10">
            <ArrowDown className="w-3.5 h-3.5 text-purple-400" style={{ strokeWidth: 3 }} />
          </div>
          
          {/* Right Line */}
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>
        
        {/* Bottom Section: Solution */}
        <div className="flex-1 flex flex-col justify-start">
          <p className="text-white font-medium text-sm leading-relaxed">
            {solutionParts.map((part, index) => {
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

// 7. Narrative Bridge Component
const NarrativeBridge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center py-12 relative"
    >
      {/* Top Line - Gradient */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[1px] bg-gradient-to-b from-transparent via-white/20 to-white/20 mb-4"
      />

      {/* Bridge Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-neutral-400 text-s font-medium text-center max-w-md bg-[#050505] px-4 z-10"
      >
        To prove efficacy, we compared the post-task quiz scores of both groups (n=40).
      </motion.div>

      {/* Bottom Line with Arrow */}
      <div className="flex flex-col items-center mt-4">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-[1px] bg-white/20 mb-2"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white/40"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// 8. Results Visualization Card
const ResultsVisualizationCard = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, amount: 0.6 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        {/* Left Side - The Narrative (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
            Impact
          </p>
          <div className="space-y-2">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none">
              25%
            </div>
            <p className="text-lg text-neutral-400">
              Increase in Conceptual Retention (p &lt; 0.05)
            </p>
          </div>
        </div>

        {/* Right Side - The Visualization (8 cols) */}
        <div className="md:col-span-8">
          {/* Chart Title */}
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Conceptual Retention Quiz Scores
          </h3>

          {/* Chart + Axis */}
          <div className="relative pl-0 md:pl-12">
            {/* Y-axis Labels (does not affect layout) */}
            <div className="hidden md:flex absolute left-0 top-0 h-80 flex-col justify-between text-xs text-neutral-500 font-medium">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>
            </div>

            {/* Y-axis Title */}
            <div className="hidden md:block absolute -left-8 top-40 -translate-y-1/2 -rotate-90 text-xs text-neutral-400 font-medium whitespace-nowrap">
              Average Quiz Score (%)
            </div>

            {/* Anchor Container (0–100%) */}
            <div className="relative">
              <div
                ref={chartRef}
                className="relative h-80 flex items-end justify-center gap-12 border-b border-white/10"
              >
                {/* Grid Lines (absolute overlay, behind bars) */}
                <div className="absolute inset-0 z-0 flex flex-col justify-between pointer-events-none">
                  <div className="h-px bg-white/5" />
                  <div className="h-px bg-white/5" />
                  <div className="h-px bg-white/5" />
                  <div className="h-px bg-white/5" />
                  <div className="h-px bg-white/5" />
                  <div className="h-px bg-white/5" />
                </div>

                {/* Bars (anchored to baseline) */}
                <div className="relative z-10 h-full flex flex-col justify-end items-center">
                  <div
                    className={[
                      "w-24 md:w-32 bg-neutral-800 rounded-t-xl relative",
                      "transition-all duration-1000 ease-out",
                      chartInView ? "h-[68%]" : "h-0",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute -top-8 left-1/2 -translate-x-1/2",
                        "text-white font-medium text-xs whitespace-nowrap",
                        "transition-all duration-500 ease-out",
                        chartInView ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-1",
                      ].join(" ")}
                    >
                      68%
                    </div>
                  </div>
                  <div
                    className={[
                      "sr-only",
                    ].join(" ")}
                  >
                    68%
                  </div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end items-center">
                  <div
                    className={[
                      "w-24 md:w-32 bg-purple-500 rounded-t-xl relative",
                      "shadow-[0_0_40px_rgba(168,85,247,0.3)]",
                      "transition-all duration-1000 ease-out delay-200",
                      chartInView ? "h-[85%]" : "h-0",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute -top-8 left-1/2 -translate-x-1/2",
                        "text-white font-medium text-xs whitespace-nowrap",
                        "transition-all duration-500 ease-out delay-200",
                        chartInView ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-1",
                      ].join(" ")}
                    >
                      85%
                    </div>
                  </div>
                  <div
                    className={[
                      "sr-only",
                    ].join(" ")}
                  >
                    85%
                  </div>
                </div>

                {/* (+25% Lift annotation removed) */}
              </div>

              {/* X-axis Labels (below baseline; do not affect bar heights) */}
              <div className="mt-4 flex justify-center gap-12">
                <p className="w-24 md:w-32 text-neutral-500 text-sm text-center font-medium">
                  YouTube Baseline
                </p>
                <p className="w-24 md:w-32 text-purple-300 text-sm text-center font-bold">
                  FlowTutor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 8. Validation Methodology Bar
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
  delay,
  image
}: { 
  title: string, 
  description: string, 
  isExperimental?: boolean,
  delay: number,
  image?: string
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
        <p className="text-neutral-400 text-sm leading-relaxed break-words">{description}</p>
        {/* Visual */}
        {image ? (
          <div className="mt-6 aspect-video bg-neutral-900/50 border border-white/5 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mt-6 aspect-video bg-neutral-900/50 border border-white/5 flex items-center justify-center">
            <span className="text-neutral-600 font-mono text-sm">
              {isExperimental ? "[FlowTutor UI]" : "[YouTube Screenshot]"}
            </span>
          </div>
        )}
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
        className="relative w-full aspect-[16/9] bg-[#111] rounded-lg overflow-hidden cursor-col-resize select-none group touch-none"
        style={{
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)'
        }}
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
          <div className="absolute inset-0 w-full max-w-full flex items-center justify-center overflow-hidden">
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
      <p className="text-neutral-500 text-sm max-w-full md:max-w-[250px] leading-relaxed break-words">{sublabel}</p>
    </div>
  );
};

// 7. Product Anatomy Section Component
const ProductAnatomySection = () => {
  return null;
};

// Competitor Analysis Component - 3 Column Layout
const CompetitorAnalysis = () => {
  const competitors = [
    {
      name: "Pearson",
      image: "/pearson-logo.png",
      pros: [
        "Structured course format with clear learning paths.",
        "Certificates from accredited universities.",
        "High-quality production value."
      ],
      cons: [
        "Limited AI assistance during learning.",
        "Fixed pacing doesn't adapt to individual speed.",
        "No real-time Q&A support."
      ]
    },
    {
      name: "Udemy / Khan Academy",
      image: "/udemy-khan-logo.png",
      pros: [
        "Free access to quality educational content.",
        "Practice exercises with instant feedback.",
        "Gamified learning with achievement system."
      ],
      cons: [
        "Lacks personalized AI tutor support.",
        "Limited to specific subject domains.",
        "No collaborative note-taking features."
      ]
    },
    {
      name: "YouTube",
      image: "/youtube-logo.png",
      pros: [
        "Wide variety of topics and instructors.",
        "Affordable pricing with frequent sales.",
        "Lifetime access to purchased courses."
      ],
      cons: [
        "Quality varies significantly by instructor.",
        "No integrated AI assistance.",
        "Passive video consumption model."
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-stretch">
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            {/* Logo/Image */}
            <div className="aspect-[4/3] flex items-center justify-center mb-6 flex-shrink-0">
              <img
                src={competitor.image}
                alt={competitor.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Pros */}
            <div className="space-y-3 mb-6 flex-grow">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Pros:
              </h4>
              <ul className="space-y-2 list-none">
                {competitor.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pro}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="space-y-3 flex-shrink-0 mt-auto">
              <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                Cons:
              </h4>
              <ul className="space-y-2 list-none">
                {competitor.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {con}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Competitor Analysis Section with Collapsible Toggle
const CompetitorAnalysisSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Toggle Button - Pill style matching nav */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isExpanded ? "Hide detailed analysis" : "See detailed analysis"}
      </motion.button>

      {/* Collapsible Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8">
              <CompetitorAnalysis />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Table of Contents for the layout
const flowTutorToc = [
  { 
    id: "problem", 
    label: "Overview",
    children: [
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "impact", label: "Impact" }
    ]
  },
  {
    id: "Research",
    label: "Research",
    children: [
      { id: "market-research", label: "Market research" },
      { id: "affinity-mapping", label: "Affinity mapping" },
    ],
  },
  {
    id: "prototyping",
    label: "Prototyping",
    children: [
      { id: "heuristic-evaluation", label: "Heuristic evaluation" },
      { id: "within-subjects-counterbalanced", label: "Within-Subjects Counterbalanced" },
      { id: "between-subjects-ab-test", label: "Between-Subjects A/B Test" },
    ],
  },
  { id: "reflection", label: "Reflection" },
];

const FlowTutorHero = () => (
  <section className="relative w-full pt-24 md:pt-36 pb-16 md:pb-24 overflow-x-hidden">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 min-w-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-purple-400"
      >
        FlowTutor.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed w-full break-words mt-10"
      >
        Students learning on YouTube are often forced to toggle between videos, notes, and AI tools. This constant context switching increases cognitive load and slows down learning.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-neutral-400 text-lg md:text-xl leading-relaxed w-full break-words mt-4"
      >
        FlowTutor introduces a split-learning interface that integrates video and hands-on practice in a single workspace, reducing interaction friction and enabling more continuous learning.
      </motion.p>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-white/10 mt-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-[repeat(4,1fr)] gap-y-8 gap-x-8 min-w-0 mt-4"
      >
        {[
          { label: "ROLE", value: "Product Designer" },
          { label: "TIMELINE", value: "August – September 2025" },
          { label: "TEAM", value: "6 Members" },
          { label: "TOOLS", value: "Miro, Lovable" },
        ].map((item) => (
          <div key={item.label} className="space-y-1.5 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-500">{item.label}</p>
            <p className="text-sm text-white font-medium break-words">{item.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="border-white/10 mt-4"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="space-y-4 min-w-0 mt-10"
      >
        <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-500">Key Contributions</p>
        <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed list-disc list-outside pl-5 break-words">
          <li>Advocated for and led user interviews with 6 diverse users to identify 4 critical pain points.</li>
          <li>Led a brainstorming session to ideate potential solutions based on pain points and heuristics.</li>
          <li>Optimised interaction design by aligning inputs and actions with user intent to improve usability.</li>
          <li>Designed a 3-state uncertainty model (directly relevant / related but unmentioned / out-of-scope) with distinct UI feedback for each state.</li>
        </ul>
      </motion.div>
    </div>

    {/* Purple impact banner */}
    <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-b border-purple-500/30 bg-purple-500/[0.06] py-12 md:py-16 mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {[
          { stat: "+25%", desc: "Quiz score improvement over fragmented workflow baseline" },
          { stat: "60%", desc: "Reduction in context-switching between tools" },
          { stat: "50%", desc: "Faster information retrieval vs. tab-switching baseline" },
        ].map((item, i) => (
          <div
            key={item.stat}
            className={`flex flex-col items-center text-center ${i < 2 ? "md:border-r md:border-purple-500/20" : ""}`}
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-400">{item.stat}</p>
            <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-[240px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FlowTutorCaseStudy = () => {
  return (
    <CaseStudyLayout
      tableOfContents={flowTutorToc}
      theme="dark"
      showSidebarsAfter="problem"
      showContactSection={false}
      hero={<div className="text-white selection:bg-purple-500/30 font-sans"><FlowTutorHero /></div>}
    >
      <div className="text-white selection:bg-purple-500/30 font-sans overflow-x-hidden min-w-0">
        {/* 1. THE PROBLEM - This is the section that triggers sidebars */}
        <section id="problem" className="relative flex flex-col pt-24 md:pt-32 pb-20 scroll-mt-20 md:scroll-mt-24">
          {/* Problem Section Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Constrained Text Container */}
            <div className="w-full max-w-4xl space-y-6 text-left">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-500">
                PROBLEM
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                The Split-Attention Effect.
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                When users are forced to toggle between multiple windows to complete a single task, cognitive load spikes. It creates a disjointed experience where the user loses context every time they look away. This "tab fatigue" results in higher error rates and lower user satisfaction.
              </p>
            </div>

            {/* Question centered in spacer between text and image */}
            <div className="w-full max-w-4xl h-24 md:h-32 flex items-center justify-center">
              <p className="text-sm md:text-base uppercase tracking-widest font-bold text-purple-400 text-center">
                IS THIS WHAT YOUR SCREEN LOOKS LIKE?
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-4xl space-y-4">
              <div className="w-full rounded-xl overflow-hidden border border-white/10">
                <img
                  src={ftProblem}
                  alt="A typical study session: 15 tabs open, disjointed notes, and fragmented attention"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-neutral-500 italic text-center">
                A typical study session: 15 tabs open, disjointed notes, and fragmented attention.
              </p>
              
              {/* Body Text Below Image */}
              <div className="w-full max-w-4xl pt-12 md:pt-16 space-y-4 text-neutral-400 text-lg md:text-xl leading-relaxed" style={{ lineHeight: '1.7' }}>
                <p>
                  We sat down with 6 diverse users, from university freshmen to parents upskilling. My focus was simple: identify the exact moments where frustration spikes and focus breaks.
                </p>
                <p>
                  <strong className="font-bold text-white">The struggle was universal.</strong>
                </p>
                <p>
                  Despite their different goals, they all faced the same barriers. The study revealed four critical friction points that turn active learning into passive frustration.
                </p>
              </div>

              {/* Insights Grid - 2x2 */}
              <div className="w-full max-w-4xl pt-6 md:pt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {/* Card 1: Poor Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">Poor Navigation</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                      Users struggle to locate specific information without text search.
                    </p>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs md:text-sm text-neutral-500 italic">
                        "I wish there was a Ctrl+F for videos."
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Fragmented Workflow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">Fragmented Workflow</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                      Juggling YouTube, ChatGPT, and notes breaks concentration.
                    </p>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs md:text-sm text-neutral-500 italic">
                        "Switching tabs constantly is annoying."
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Cognitive Overload */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">Cognitive Overload</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                      Distractions (ads, recommendations) divert attention from learning goals.
                    </p>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs md:text-sm text-neutral-500 italic">
                        "Sidetracked by the recommendation feed."
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Missing Context */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6"
                >
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">Missing Context</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                      Videos often assume prerequisite knowledge, leaving gaps.
                    </p>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs md:text-sm text-neutral-500 italic">
                        "They don't explain the first principles."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How Might We Transition Section */}
        <section className="relative pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="relative z-10 flex flex-col items-center justify-center px-6">
            {/* Background Layer - Giant Question Mark */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <span 
                className="text-[240px] md:text-[320px] font-serif font-bold select-none"
                style={{ 
                  color: 'rgba(139, 92, 246, 0.15)',
                  lineHeight: 1,
                  textShadow: '0 0 2px rgba(139, 92, 246, 0.2)'
                }}
              >
                ?
              </span>
            </div>
            
            {/* Foreground Layer - Text */}
            <div 
              className="relative z-10 max-w-4xl text-center"
              style={{ zIndex: 1 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                HOW CAN WE BRING ORDER TO THE CHAOS OF SELF-DIRECTED LEARNING?
              </h2>
            </div>
          </div>
        </section>

        {/* 2. PROJECT OVERVIEW */}
        <SectionContainer id="overview">
          {/* Solution Subsection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
            id="solution"
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                SOLUTION
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                FlowTutor.
              </h2>
              <div className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                <p>
                A web app that brings video, AI guidance, and note-taking into one unified workspace, removing tab-switching and supporting uninterrupted learning.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Zig-Zag Features Section */}
          <ZigZagFeatures />

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl pt-12 md:pt-16"
            id="impact"
          >
            <div className="scroll-mt-20 md:scroll-mt-24 flex flex-col gap-6">
              <p className="text-lg font-semibold text-white">
                Impact
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Stat 1 */}
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">25%</span>
                    <span className="text-lg font-semibold text-white">Higher Retention</span>
                  </div>
                  <p className="text-sm text-neutral-400">vs. YouTube Baseline (p&lt;0.05)</p>
                </div>

                {/* Stat 2 */}
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">60%</span>
                    <span className="text-lg font-semibold text-white">Less Context Switching</span>
                  </div>
                  <p className="text-sm text-neutral-400">Hypothesis Validated</p>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionContainer>

        {/* 3. RESEARCH (Discovery) */}
        <SectionContainer id="Research" hasBorder={true}>
          {/* Market research */}
          <motion.div
            id="market-research"
            className="scroll-mt-20 md:scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                RESEARCH
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                The Market Opportunity.
              </h2>
              <div className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                <p>
                  The global e-learning market is forecast to reach almost USD 400 billion in 2026, up from USD 198 billion in 2019.
                </p>
                <p className="mt-4">
                  Despite this massive growth, there is still space for e-learning platforms to mature.
                </p>
              </div>
            </div>
          </motion.div>

          {/* See detailed analysis */}
          <CompetitorAnalysisSection />

          {/* Affinity Mapping */}
          <motion.div
            id="affinity-mapping"
            className="scroll-mt-20 md:scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg font-semibold text-white">
                Affinity Mapping
              </p>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                Led a brainstorming session to ideate on potential solutions relating to core pain points identified in the user interviews.
              </p>
              <figure>
                <img
                  src={ftMapping}
                  alt="Affinity map organizing pain points, must-have and nice-to-have features, and design heuristics from user research"
                  className="w-full border border-white/10 object-cover"
                />
                <figcaption className="mt-2 text-sm text-neutral-500 text-center">
                  Led a brainstorming session with 5 other members
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </SectionContainer>

        {/* 3. PAPER TO PIXEL */}
        <section id="prototyping" className="relative py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 -mx-4 md:-mx-6 px-4 md:px-6 overflow-hidden">
          <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
          <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-400">
                PROTOTYPING AND TESTING
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Solving for "Alt-Tab Fatigue".
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                To reduce tab switching, I explored multiple layout architectures that integrate video, transcript, and AI interaction within a single interface.
              </p>
            </div>

            {/* Layout Comparison Section */}
            <div className="flex flex-col gap-4 mt-12">
              {/* Layout 2 Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img 
                    src="/layout2.png" 
                    alt="Layout 2 - Video on top, Transcript and AI Chatbot below" 
                    className="w-full border border-white/10 opacity-60"
                  />
                  <p className="mt-2 text-xs text-neutral-500 tracking-widest text-center">
                    Layout 1: Video Top, Tools Below
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-400 text-sm font-medium mb-2">Pros</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Strong visual focus on video</li>
                      <li>• Clear content hierarchy</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-medium mb-2">Cons</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Introduces vertical friction</li>
                      <li>• Forces users to scroll between watching and interacting</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Layout 3 Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img 
                    src="/layout3.png" 
                    alt="Layout 3 - Video left, AI Chatbot and Transcript stacked right" 
                    className="w-full border border-white/10 opacity-60"
                  />
                  <p className="mt-2 text-xs text-neutral-500 tracking-widest text-center">
                    Layout 2: Video Left, Tools Stacked Right
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-400 text-sm font-medium mb-2">Pros</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Keeps video consistently visible</li>
                      <li>• etherGroups interaction tools together</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-medium mb-2">Cons</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Breaks expected learning flow</li>
                      <li>• Vertical scrolling for tools</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Gap to show Layout 1 is the chosen one (Gestalt principle) */}
              <div className="h-8" />
              
              {/* Layout 1 Row - Chosen */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img 
                    src="/layout1.png" 
                    alt="Layout 1 - Video and Transcript stacked left, AI Chatbot right" 
                    className="w-full shadow-xl"
                  />
                  <p className="mt-2 text-xs text-neutral-500 tracking-widest text-center">
                    Layout 3: Video + Transcript Left, Chat Right (Final)
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-400 text-sm font-medium mb-2">Pros</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Aligns with natural learning behavior (watch → read → act)w</li>
                      <li>• Chat always accessible</li>
                      <li>• Enables immediate interaction without navigation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm font-medium mb-2">Cons</p>
                    <ul className="text-neutral-400 text-sm space-y-1">
                      <li>• Smaller video viewport</li>
                      <li>• Fixed panel widths</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Explanation text */}
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mt-8">
                While Layout 1 offered better immersion and Layout 2 centralised the tools,{" "}
                <span className="font-bold text-purple-400">Layout 3</span> was the only architecture that{" "}
                <span className="font-bold text-purple-400">aligns with how users naturally learn.</span>
              </p>
            </div>
            
            <div id="heuristic-evaluation" className="flex flex-col gap-4 mt-16 scroll-mt-20 md:scroll-mt-24">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                From paper to pixel.
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                A heuristic evaluation with 5 users surfaced key usability issues.
              </p>
            </div>

            {/* Before/After Comparison — two proximity groups (onboarding vs pin); mt-12 matches layout intro → visuals */}
            <div className="mt-12">
            {/* Group 1: onboarding visuals + rationale (tight vertical rhythm) */}
            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Column A: Before */}
                <div className="flex flex-col gap-4 items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-500 uppercase tracking-wider text-center">
                    Before
                  </h3>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={onboardingBefore}
                      alt="Paper prototype showing Upload File interaction"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 italic text-center">Upload file interaction</p>
                </div>

                {/* Column B: After */}
                <div className="flex flex-col gap-4 items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-500 uppercase tracking-wider text-center">
                    After
                  </h3>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={onboardingAfter}
                      alt="FlowTutor interface with Paste URL input"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 italic text-center">Paste video URL</p>
                </div>
              </div>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
               3/5 users encountered friction with the file upload flow, citing unclear requirements and unnecessary steps.
              </p>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
               Switching to URL input simplified the interaction and better aligned with user expectations.
              </p>
            </div>

            {/* Group 2: pin visuals + rationale — separated from group 1 for distinct chunking */}
            <div className="mt-14 md:mt-20 space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Column A: Before */}
                <div className="flex flex-col gap-4 items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-500 uppercase tracking-wider text-center">
                    Before
                  </h3>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={pinBefore}
                      alt="Chat interface without pin feature"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 italic text-center">Pin action at the top of chat response</p>
                </div>

                {/* Column B: After */}
                <div className="flex flex-col gap-4 items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-500 uppercase tracking-wider text-center">
                    After
                  </h3>
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={pinAfter}
                      alt="Chat interface with pin feature"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 italic text-center">
                    Pin action at the bottom of chat response
                  </p>
                </div>
              </div>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
               2/5 users overlooked the initial pin feature. 
              </p>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Relocating the pin action below each message aligns it with the user’s reading flow, improving discoverability and reducing interaction effort.
              </p>
            </div>
            </div>
          </motion.div>

            {/* What if… (keep headline vertically centered: match gap-12 above & below) */}
            <div className="mt-4 flex flex-col gap-12">
              <div className="w-full max-w-4xl flex justify-center">
                <p className="text-sm md:text-base uppercase tracking-widest font-bold text-purple-400 text-center">
                  What if the best AI tutor sometimes refuses to answer?
                </p>
              </div>
              <div className="text-neutral-400 text-lg md:text-xl leading-relaxed space-y-4">
                <p>
                  In an age where AI is trained to be maximally helpful, FlowTutor&apos;s AI tutor sometimes says no.
                </p>
                <p>
                  When AI tutors mix in-scope and out-of-scope content, students cannot reliably distinguish what the tutorial taught versus what the AI added. To prevent this, i designed three distinct interaction states:
                </p>
              </div>
              {/* Interactive States Diagram */}
              <div className="w-full">
                {/* Desktop Layout */}
                <div className="hidden lg:block relative w-full" style={{ minHeight: '950px' }}>
                  {/* Circle 1: User asks a question */}
                  <div 
                    className="absolute z-10 w-36 h-36 rounded-full bg-neutral-700/80 border-2 border-neutral-500/60 flex items-center justify-center text-center px-3"
                    style={{ top: '392px', left: '20px' }}
                    role="img"
                    aria-label="Step 1: User asks a question"
                  >
                    <span className="text-white text-sm font-medium leading-tight">User asks a<br />question...</span>
                  </div>

                  {/* Circle 2: User query analysis - same size as Circle 1, at intersection of vertical trunk */}
                  <div 
                    className="absolute z-10 w-36 h-36 rounded-full bg-neutral-700/80 border-2 border-neutral-500/60 flex items-center justify-center text-center px-3"
                    style={{ top: '392px', left: '240px' }}
                    role="img"
                    aria-label="Step 2: User query analysis"
                  >
                    <span className="text-white text-sm font-medium leading-tight">User query<br />analysis</span>
                  </div>

                  {/* SVG Connectors - WCAG AA compliant, orthogonal lines only */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                    aria-hidden="true"
                    style={{ minHeight: '950px' }}
                  >
                    {/* Line: Circle 1 → Circle 2 (horizontal) */}
                    <line 
                      x1="164" y1="460" 
                      x2="240" y2="460" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />

                    {/* Vertical trunk top: S1 → Circle 2 top edge */}
                    <line 
                      x1="312" y1="140" 
                      x2="312" y2="392" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />
                    {/* Vertical trunk bottom: Circle 2 bottom edge → S3 */}
                    <line 
                      x1="312" y1="528" 
                      x2="312" y2="780" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />

                    {/* Horizontal branches → image column (450 + badge 36 + gap-12 ≈ 498; extend to meet frame) */}
                    <line 
                      x1="312" y1="140" 
                      x2="502" y2="140" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />
                    <line 
                      x1="384" y1="460" 
                      x2="502" y2="460" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />
                    <line 
                      x1="312" y1="780" 
                      x2="502" y2="780" 
                      stroke="rgba(163,163,163,0.7)" 
                      strokeWidth="2" 
                    />
                  </svg>

                  {/* Three state containers: flex column for consistent spacing */}
                  <div className="absolute flex flex-col gap-8" style={{ top: '20px', left: '450px', right: '0' }}>
                    {/* S1: Directly Relevant */}
                    <div className="flex gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S1
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS1} alt="S1: FlowTutor responding to a directly relevant question about transformers" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks a DIRECTLY RELEVANT question
                        </p>
                      </div>
                    </div>

                    {/* S2: Related But Not Mentioned */}
                    <div className="flex gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S2
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS2} alt="S2: FlowTutor detecting an off-topic question and redirecting" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks a RELATED BUT NOT MENTIONED question
                        </p>
                      </div>
                    </div>

                    {/* S3: Irrelevant */}
                    <div className="flex gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S3
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS3} alt="S3: FlowTutor handling an irrelevant question by saving it for later research" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks an IRRELEVANT question
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - stacked vertically with visible connectors */}
                <div className="flex lg:hidden flex-col items-center gap-4">
                  {/* Circle 1 */}
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-neutral-700/80 border-2 border-neutral-500/60 flex items-center justify-center text-center px-3" role="img" aria-label="Step 1: User asks a question">
                    <span className="text-white text-sm font-medium leading-tight">User asks a<br />question...</span>
                  </div>

                  {/* Vertical connector */}
                  <div className="w-0.5 h-10 bg-neutral-400/70" aria-hidden="true" />

                  {/* Circle 2 */}
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-neutral-700/80 border-2 border-neutral-500/60 flex items-center justify-center text-center px-3" role="img" aria-label="Step 2: User query analysis">
                    <span className="text-white text-sm font-medium leading-tight">User query<br />analysis</span>
                  </div>

                  {/* Branch indicator */}
                  <div className="w-0.5 h-8 bg-neutral-400/70" aria-hidden="true" />

                  {/* S1, S2, S3 with consistent spacing */}
                  <div className="flex flex-col gap-8 w-full">
                    <div className="flex w-full gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S1
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS1} alt="S1: FlowTutor responding to a directly relevant question" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks a DIRECTLY RELEVANT question
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S2
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS2} alt="S2: FlowTutor detecting an off-topic question" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks a RELATED BUT NOT MENTIONED question
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full gap-3 items-start">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-purple-500/40 bg-purple-500/10 text-[11px] font-bold tracking-wider text-purple-400"
                        aria-hidden="true"
                      >
                        S3
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="border border-purple-500/30 overflow-hidden">
                          <img src={ftS3} alt="S3: FlowTutor handling an irrelevant question" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-sm text-neutral-500 italic text-center mt-2">
                          User asks an IRRELEVANT question
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>

        {/* 4. THE LAB PIVOT (Validating & Refining) */}
        <section id="lab-pivot" className="relative py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 -mx-4 md:-mx-6 px-4 md:px-6 overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-8">
                <motion.div
                  id="within-subjects-counterbalanced"
                  className="scroll-mt-20 md:scroll-mt-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">The Lab Pivot.</h2>
                    <div className="text-neutral-400 text-lg md:text-xl max-w-prose" style={{ lineHeight: '1.7' }}>
                      <p>
                        With a functioning prototype, we moved from identifying usability issues to measuring impact.
                      </p>
                      <div className="border-l-2 border-purple-500/30 pl-6 mt-4">
                        <p className="text-lg md:text-xl font-semibold text-white mb-4">
                          Three Core Hypotheses:
                        </p>
                        <ul className="space-y-1 list-none">
                          <li className="text-neutral-400">H1 (Efficiency): Users will locate information at least 50% faster with FlowTutor.</li>
                          <li className="text-neutral-400">H2 (Cognitive Load): Context switching will be reduced by at least 60%.</li>
                          <li className="text-neutral-400">H3 (Retention): Users will score at least 20% higher on a recall quiz.</li>
                        </ul>
                      </div>
                      <p className="mt-4">
                        While our quantitative data supported our hypotheses (H1-H3), the qualitative feedback forced three architectural changes.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Methodology Bar */}
                <MethodologyBar />

                {/* Insights Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  <InsightCard
                    title="Layout Flexibility"
                    problem="Fixed panels felt restrictive. Users struggled to focus on video or notes when they couldn't control the viewport size."
                    solution="Implemented a **Draggable Divider**, allowing users to dynamically resize their workspace."
                    icon={GripVertical}
                    delay={0}
                  />
                  <InsightCard
                    title="Conversational Depth"
                    problem="Preset AI prompts were helpful but too rigid. Users wanted to ask complex, open-ended follow-up questions."
                    solution="Integrated a **Live LLM API**, enabling fully dynamic, context-aware conversation."
                    icon={Sparkles}
                    delay={0.1}
                  />
                  <InsightCard
                    title="Screen Real Estate"
                    problem="The sticky navigation bar consumed 15% of the vertical view on smaller laptops, crowding the content."
                    solution="Redesigned the chrome to be **Non-Sticky** and reduced padding by 20% to maximize the learning view."
                    icon={Maximize}
                    delay={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE SOLUTION (Product Anatomy Diagram) */}
        <div id="product-anatomy" className="scroll-mt-20 md:scroll-mt-24">
          <ProductAnatomySection />
        </div>

        {/* 7. THE VALIDATION (Iteration 3: Web Experiment) */}
        <section id="validation" className="relative py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 -mx-4 md:-mx-6 px-4 md:px-6 overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-8">
                <motion.div
                  id="between-subjects-ab-test"
                  className="scroll-mt-20 md:scroll-mt-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Measuring Efficacy.</h2>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-prose" style={{ lineHeight: '1.7' }}>
                      Moving beyond usability, we rigorously tested our central claim: does an integrated interface lead to better learning outcomes?
                    </p>
                  </div>
                </motion.div>

                {/* Methodology Bar */}
                <ValidationMethodologyBar />

                {/* A/B Conditions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ABConditionCard
                    title="Baseline: Fragmented Workflow"
                    description="YouTube + External Notepad (Alt-Tab required)."
                    isExperimental={false}
                    delay={0}
                    image="/flowtutor-baseline.png"
                  />
                  <ABConditionCard
                    title="FlowTutor: Integrated Workflow"
                    description="Unified Viewport (Video + Chat + Notes)."
                    isExperimental={true}
                    delay={0.1}
                    image="/flowtutor-experiment.png"
                  />
                </div>

                {/* Narrative Bridge */}
                <NarrativeBridge />

                {/* Results Visualization */}
                <ResultsVisualizationCard />
              </div>
            </div>
          </div>
        </section>

        {/* 8. REFLECTION */}
        <section id="reflection" className="relative py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 -mx-4 md:-mx-6 px-4 md:px-6 overflow-hidden">
          <div className="w-[30%] max-w-[270px] h-px bg-white/10 mx-auto mb-16 md:mb-24" />
          <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-400 text-center">
                REFLECTION
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center">Designing for AI Uncertainty.</h2>
              <div className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                <p>
                  Due to the 4-week timeline, the current iteration of{" "}
                  <span className="font-bold text-purple-400">FlowTutor assumes the AI is always correct</span>{" "}
                  and the{" "}
                  <span className="font-bold text-purple-400">video context is always sufficient</span>. But in a real-world deployment, LLMs hallucinate and sometimes fail to retrieve context.
                </p>
                <p className="mt-4">
                  If I had more time, I would{" "}
                  <span className="font-bold text-purple-400">implement Minimum Context Guardrails</span>. If video transcripts are too sparse, the system should disable the Quizlet and pivot to a &lsquo;Visual Summary&rsquo; instead. This prevents the &lsquo;garbage-in, garbage-out&rsquo; problem.
                </p>
                <div className="my-16 md:my-24 w-[30%] max-w-[270px] h-px bg-white/10 mx-auto" />
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                  Yayy thank you for reading till the end ;))) If you have feedback regarding my design or thought process, I&apos;d love to hear from you! 
                </p>
              </div>
            </div>
          </motion.div>
          </div>
          </div>
        </div>
      </section>
        
      </div>
    </CaseStudyLayout>
  );
};

export default FlowTutorCaseStudy;
