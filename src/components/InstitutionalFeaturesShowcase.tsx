import React from "react";
import { motion } from "framer-motion";
import { GripVertical, Lightbulb, MessageSquare, Sparkles, Video, FileText } from "lucide-react";

// Design tokens for Institutional Chic theme
const THEME = {
  bg: "#FAFAFA",
  cardBg: "#FFFFFF",
  text: "#111111",
  textMuted: "#666666",
  border: "#111111",
  accent: "#2563EB",
  successBg: "#F0FDF4",
  successBorder: "#16A34A",
};

// Feature Row Component with Zig-Zag Layout
interface FeatureRowProps {
  number: string;
  label: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  isReversed?: boolean;
  delay?: number;
}

const FeatureRow = ({ number, label, headline, body, visual, isReversed = false, delay = 0 }: FeatureRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className={`grid grid-cols-1 lg:grid-cols-10 border border-[#111] ${isReversed ? '' : ''}`}
      style={{ backgroundColor: THEME.cardBg }}
    >
      {/* Text Side - 40% */}
      <div 
        className={`lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center border-[#111] ${
          isReversed ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'
        }`}
      >
        {/* Label */}
        <p 
          className="font-mono text-xs uppercase tracking-wider mb-4"
          style={{ color: THEME.textMuted }}
        >
          {number} — {label}
        </p>
        
        {/* Headline */}
        <h3 
          className="text-2xl lg:text-3xl font-bold tracking-tight mb-4"
          style={{ color: THEME.text, letterSpacing: '-0.02em' }}
        >
          {headline}
        </h3>
        
        {/* Body */}
        <p 
          className="text-base leading-relaxed"
          style={{ color: THEME.textMuted }}
        >
          {body}
        </p>
      </div>
      
      {/* Visual Side - 60% */}
      <div 
        className={`lg:col-span-6 p-8 lg:p-12 flex items-center justify-center ${
          isReversed ? 'lg:order-1' : 'lg:order-2'
        }`}
        style={{ backgroundColor: THEME.bg }}
      >
        <motion.div
          whileHover={{ 
            y: -4, 
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' 
          }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {visual}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mock UI: Unified Viewport (3-column layout)
const UnifiedViewportMock = () => {
  return (
    <div 
      className="w-full border border-[#111] relative overflow-hidden"
      style={{ backgroundColor: THEME.cardBg }}
    >
      {/* Floating Badge */}
      <div 
        className="absolute top-4 right-4 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-[#111] z-10"
        style={{ backgroundColor: THEME.accent, color: '#FFFFFF' }}
      >
        Unified Viewport
      </div>
      
      {/* 3-Column Grid */}
      <div className="grid grid-cols-3 min-h-[280px]">
        {/* Video Player Area */}
        <div className="border-r border-[#111] p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Video className="w-4 h-4" style={{ color: THEME.text }} />
            <span className="font-mono text-xs uppercase" style={{ color: THEME.textMuted }}>Video</span>
          </div>
          <div 
            className="flex-1 border border-[#111] flex items-center justify-center"
            style={{ backgroundColor: '#E5E5E5' }}
          >
            <div className="w-0 h-0 border-l-[20px] border-l-[#111] border-y-[12px] border-y-transparent ml-2" />
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-2 border border-[#111] overflow-hidden">
            <div className="h-full w-2/3" style={{ backgroundColor: THEME.accent }} />
          </div>
        </div>
        
        {/* Chat Panel */}
        <div className="border-r border-[#111] p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4" style={{ color: THEME.text }} />
            <span className="font-mono text-xs uppercase" style={{ color: THEME.textMuted }}>Chat</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            {/* User message */}
            <div className="self-end px-3 py-2 border border-[#111] text-xs max-w-[90%]" style={{ backgroundColor: '#F5F5F5' }}>
              How does this work?
            </div>
            {/* AI message */}
            <div className="self-start px-3 py-2 border border-[#111] text-xs max-w-[90%]" style={{ backgroundColor: THEME.cardBg }}>
              Based on the video...
            </div>
          </div>
        </div>
        
        {/* Notes Panel */}
        <div className="p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4" style={{ color: THEME.text }} />
            <span className="font-mono text-xs uppercase" style={{ color: THEME.textMuted }}>Notes</span>
          </div>
          <div className="flex-1 border border-[#111] p-3 text-xs leading-relaxed" style={{ color: THEME.textMuted }}>
            <div className="border-b border-dashed border-[#CCC] pb-2 mb-2">Key concept #1...</div>
            <div className="border-b border-dashed border-[#CCC] pb-2 mb-2">Important point...</div>
            <div>Summary notes...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock UI: Context-Aware AI (Chat interface zoom)
const ContextAwareAIMock = () => {
  return (
    <div 
      className="w-full border border-[#111] p-6"
      style={{ backgroundColor: THEME.cardBg }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4" style={{ color: THEME.accent }} />
        <span className="font-mono text-xs uppercase tracking-wider" style={{ color: THEME.textMuted }}>
          AI Response
        </span>
      </div>
      
      <div className="space-y-4">
        {/* Question bubble */}
        <div 
          className="border border-[#111] px-4 py-3 text-sm max-w-[80%] ml-auto"
          style={{ backgroundColor: '#F5F5F5', color: THEME.text }}
        >
          What's the main argument at 3:42?
        </div>
        
        {/* Answer bubble - highlighted */}
        <div 
          className="border-2 px-4 py-3 text-sm max-w-[80%]"
          style={{ 
            backgroundColor: THEME.successBg, 
            borderColor: THEME.successBorder,
            color: THEME.text 
          }}
        >
          <p className="mb-2">
            <span className="font-bold">At 3:42</span>, the speaker argues that cognitive load theory suggests...
          </p>
          <div 
            className="text-xs font-mono pt-2 border-t border-dashed"
            style={{ borderColor: THEME.successBorder, color: THEME.successBorder }}
          >
            ✓ Sourced from video transcript
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock UI: Ergonomics & Active Recall (Bento-style split)
const ErgonomicsRecallMock = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Box A: Draggable Divider */}
      <div 
        className="border border-[#111] p-5 flex flex-col"
        style={{ backgroundColor: THEME.cardBg }}
      >
        <span className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: THEME.textMuted }}>
          Custom Focus
        </span>
        <div className="flex-1 flex items-center justify-center relative min-h-[140px]">
          {/* Left panel indicator */}
          <div className="absolute left-2 top-2 bottom-2 w-1/3 border border-dashed border-[#CCC]" />
          
          {/* Divider with cursor */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-20 w-px" style={{ backgroundColor: THEME.text }} />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 border border-[#111] flex items-center justify-center cursor-ew-resize"
              style={{ backgroundColor: THEME.cardBg }}
            >
              <GripVertical className="w-4 h-4" style={{ color: THEME.text }} />
            </div>
          </div>
          
          {/* Right panel indicator */}
          <div className="absolute right-2 top-2 bottom-2 w-1/2 border border-dashed border-[#CCC]" />
        </div>
        <p className="text-xs mt-3 text-center" style={{ color: THEME.textMuted }}>
          Drag to resize panels
        </p>
      </div>
      
      {/* Box B: Quiz Modal Trigger */}
      <div 
        className="border border-[#111] p-5 flex flex-col"
        style={{ backgroundColor: THEME.cardBg }}
      >
        <span className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: THEME.textMuted }}>
          Pop Quiz Engine
        </span>
        <div className="flex-1 flex items-center justify-center relative min-h-[140px]">
          {/* Lightbulb button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 border-2 flex items-center justify-center transition-colors hover:bg-[#111] hover:text-white group"
            style={{ 
              borderColor: THEME.text, 
              backgroundColor: THEME.cardBg,
              color: THEME.text
            }}
          >
            <Lightbulb className="w-6 h-6 group-hover:text-white" />
          </motion.button>
          
          {/* Modal hint overlay */}
          <div 
            className="absolute top-0 right-0 border border-[#111] px-2 py-1 text-xs font-mono"
            style={{ backgroundColor: THEME.bg, color: THEME.textMuted }}
          >
            Quiz Modal →
          </div>
        </div>
        <p className="text-xs mt-3 text-center" style={{ color: THEME.textMuted }}>
          Test retention in-flow
        </p>
      </div>
    </div>
  );
};

// Main Component
const InstitutionalFeaturesShowcase = () => {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: THEME.bg }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-6 lg:px-0"
        >
          <p 
            className="font-mono text-xs uppercase tracking-wider mb-4"
            style={{ color: THEME.textMuted }}
          >
            Feature Breakdown
          </p>
          <h2 
            className="text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: THEME.text, letterSpacing: '-0.02em' }}
          >
            Designed for Deep Work.
          </h2>
        </motion.div>
        
        {/* Feature Rows - Zig-Zag Layout */}
        <div className="flex flex-col">
          {/* Row 1: Text Left, Visual Right */}
          <FeatureRow
            number="01"
            label="THE WORKSPACE"
            headline="Browsing Without Clutter."
            body="A single pane of glass. No more tab switching. Video, chat, and notes coexist in one rigorous grid, eliminating the 'Split-Attention Effect'."
            visual={<UnifiedViewportMock />}
            isReversed={false}
            delay={0}
          />
          
          {/* Row 2: Visual Left, Text Right */}
          <FeatureRow
            number="02"
            label="INTELLIGENCE"
            headline="Instantly Find the Best."
            body="Context-aware AI analyzes the transcript in real-time. It suggests answers based only on the video content, preventing hallucinations."
            visual={<ContextAwareAIMock />}
            isReversed={true}
            delay={0.1}
          />
          
          {/* Row 3: Text Left, Visual Right */}
          <FeatureRow
            number="03"
            label="CONTROL & RECALL"
            headline="You Are in Control."
            body="Draggable dividers allow for custom focus modes. Includes a hidden 'Pop Quiz' engine that tests retention without leaving the flow."
            visual={<ErgonomicsRecallMock />}
            isReversed={false}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default InstitutionalFeaturesShowcase;
