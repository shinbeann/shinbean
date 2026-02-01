import React from "react";
import { Hand, ArrowLeftRight, Lightbulb, MessageSquare, Layers } from "lucide-react";
import ftDemoVideo from "@/assets/Screen Recording 2026-01-29 143535.mp4";

// Dark Theme Container Component
const FeatureVisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-white/10 bg-white/5 overflow-hidden shadow-2xl">
    {children}
  </div>
);

// Row 1 Visual: Video Demo
const WorkspaceVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-neutral-900/50">
      <video
        src={ftDemoVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </FeatureVisualContainer>
);

// Row 2 Visual: AI Chat Bubble
const ChatBubbleVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-neutral-900/50 p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 max-w-[80%]">
            <p className="text-sm text-neutral-300">What did they say at 10:45?</p>
          </div>
        </div>
        
        {/* AI Response */}
        <div className="flex justify-start">
          <div className="bg-white/5 border border-white/10 border-l-4 border-l-purple-500 rounded-lg px-4 py-3 max-w-[90%] space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30 uppercase tracking-widest">Timestamp: 10:45</span>
            </div>
            <p className="text-sm text-neutral-300">
              At this point, the instructor explains the recursive base case...
            </p>
            <div className="w-full h-1.5 bg-white/5 rounded" />
            <div className="w-3/4 h-1.5 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 3 Visual: Draggable Divider
const DividerVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-neutral-900/50 p-4 flex items-center justify-center">
      <div className="w-full h-full flex">
        {/* Left Panel */}
        <div className="flex-1 border border-white/10 bg-neutral-800/50 rounded-l-lg flex flex-col overflow-hidden">
          <div className="border-b border-white/10 px-3 py-2 bg-neutral-800">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Video</span>
          </div>
          <div className="flex-1 bg-neutral-900/50" />
        </div>
        
        {/* Divider */}
        <div className="relative w-1 bg-purple-500 flex items-center justify-center cursor-col-resize">
          {/* Cursor Hand Icon */}
          <div className="absolute z-10 bg-neutral-800 border border-purple-500/50 rounded-lg p-1.5 shadow-lg shadow-purple-500/20">
            <Hand className="w-4 h-4 text-purple-400" />
          </div>
          {/* Arrows */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <ArrowLeftRight className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="flex-1 border border-white/10 border-l-0 bg-neutral-800/50 rounded-r-lg flex flex-col overflow-hidden">
          <div className="border-b border-white/10 px-3 py-2 bg-neutral-800">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Notes</span>
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="w-full h-1.5 bg-white/5 rounded" />
            <div className="w-full h-1.5 bg-white/5 rounded" />
            <div className="w-2/3 h-1.5 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 4 Visual: Quiz Modal
const QuizModalVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-neutral-900/50 relative overflow-hidden">
      {/* Background (faded) */}
      <div className="absolute inset-0 opacity-30 p-4">
        <div className="w-full h-full border border-white/5 bg-neutral-800/30 rounded-lg" />
      </div>
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-4/5 max-w-sm bg-neutral-900 border border-white/10 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden">
          {/* Modal Header */}
          <div className="border-b border-white/10 px-4 py-3 bg-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-purple-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-white font-medium">Pop Quiz</span>
            </div>
            <span className="font-mono text-xs text-neutral-500">1 of 3</span>
          </div>
          
          {/* Modal Content */}
          <div className="p-4 space-y-4">
            <p className="text-sm text-neutral-300">What is the time complexity of binary search?</p>
            
            {/* Options */}
            <div className="space-y-2">
              <div className="border border-white/10 rounded-lg px-3 py-2 hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-sm text-neutral-400">A) O(n)</span>
              </div>
              <div className="border border-purple-500 bg-purple-500/20 rounded-lg px-3 py-2">
                <span className="text-sm text-purple-300 font-medium">B) O(log n)</span>
              </div>
              <div className="border border-white/10 rounded-lg px-3 py-2 hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-sm text-neutral-400">C) O(n²)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Feature Row Component
interface FeatureRowProps {
  label: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  isReversed?: boolean;
}

const FeatureRow = ({ label, headline, body, visual, isReversed = false }: FeatureRowProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
    {/* Text Column */}
    <div className={`space-y-3 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
      <p className="font-mono text-xs tracking-widest text-purple-400 uppercase">{label}</p>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">{headline}</h3>
      <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{body}</p>
    </div>
    
    {/* Visual Column */}
    <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
      {visual}
    </div>
  </div>
);

// Main Component
const ZigZagFeatures = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-12 md:gap-16">
      {/* Row 1: The Foundation */}
      <FeatureRow
        label="01 — THE WORKSPACE"
        headline="A Single Pane of Glass."
        body="Video, notes, and AI assistance in one unified interface."
        visual={<WorkspaceVisual />}
        isReversed={false}
      />
      
      {/* Row 2: The Intelligence */}
      <FeatureRow
        label="02 — ASSISTANCE"
        headline="Context-Aware AI Chatbot."
        body="Ask questions and get answers that reference the exact timestamp."
        visual={<ChatBubbleVisual />}
        isReversed={true}
      />
      
      {/* Row 3: The Control */}
      <FeatureRow
        label="03 — ERGONOMICS"
        headline="Ergonomic Control."
        body="Draggable dividers let you customize your workspace on the fly."
        visual={<DividerVisual />}
        isReversed={false}
      />
      
      {/* Row 4: The Retention */}
      <FeatureRow
        label="04 — MASTERY"
        headline="Active Recall."
        body="Instant quizzes from the transcript reinforce what you learn."
        visual={<QuizModalVisual />}
        isReversed={true}
      />
    </div>
  );
};

export default ZigZagFeatures;
