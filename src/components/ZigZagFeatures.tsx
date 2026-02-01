import React from "react";
import { Hand, ArrowLeftRight, Lightbulb, MessageSquare, Layers } from "lucide-react";
import ftDemoVideo from "@/assets/Screen Recording 2026-01-29 143535.mp4";
import ftQuizVideo from "@/assets/ft_quiz.mp4";

// Institutional Chic Container Component
const FeatureVisualContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    {children}
  </div>
);

// Row 1 Visual: Workspace Layout Mock
const WorkspaceVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-gray-50 p-4">
      {/* Main Grid Layout */}
      <div className="w-full h-full grid gap-2" style={{ gridTemplateColumns: '60% 40%' }}>
        {/* Left: Video Window */}
        <div className="border-2 border-black bg-white flex flex-col">
          <div className="border-b-2 border-black px-3 py-2 bg-gray-100">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Video Player</span>
          </div>
          <div className="flex-1 bg-gray-200 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-white">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-gray-300 border-t-2 border-black">
            <div className="h-full w-1/3 bg-black" />
          </div>
        </div>
        
        {/* Right: Stacked Panels */}
        <div className="flex flex-col gap-2">
          {/* Chat Panel */}
          <div className="flex-1 border-2 border-black bg-white flex flex-col">
            <div className="border-b-2 border-black px-3 py-2 bg-gray-100 flex items-center gap-2">
              <MessageSquare className="w-3 h-3" />
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Chat</span>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="w-3/4 h-3 bg-gray-200 rounded" />
              <div className="w-1/2 h-3 bg-gray-200 rounded ml-auto" />
              <div className="w-2/3 h-3 bg-gray-200 rounded" />
            </div>
          </div>
          
          {/* Notes Panel */}
          <div className="flex-1 border-2 border-black bg-white flex flex-col">
            <div className="border-b-2 border-black px-3 py-2 bg-gray-100 flex items-center gap-2">
              <Layers className="w-3 h-3" />
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Notes</span>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="w-full h-2 bg-gray-100 rounded" />
              <div className="w-full h-2 bg-gray-100 rounded" />
              <div className="w-3/4 h-2 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 2 Visual: AI Chat Bubble
const ChatBubbleVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-gray-200 border-2 border-black px-4 py-3 max-w-[80%]">
            <p className="font-mono text-sm text-gray-700">What did they say at 10:45?</p>
          </div>
        </div>
        
        {/* AI Response */}
        <div className="flex justify-start">
          <div className="bg-white border-2 border-black border-l-4 border-l-blue-600 px-4 py-3 max-w-[90%] space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 border border-blue-200 uppercase tracking-widest">Timestamp: 10:45</span>
            </div>
            <p className="font-mono text-sm text-gray-700">
              At this point, the instructor explains the recursive base case...
            </p>
            <div className="w-full h-2 bg-gray-100 rounded" />
            <div className="w-3/4 h-2 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 3 Visual: Draggable Divider
const DividerVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full h-full grid gap-0" style={{ gridTemplateColumns: '55% 4px 1fr' }}>
        {/* Left Panel */}
        <div className="border-2 border-black bg-white flex flex-col">
          <div className="border-b-2 border-black px-3 py-2 bg-gray-100">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Video</span>
          </div>
          <div className="flex-1 bg-gray-200" />
        </div>
        
        {/* Divider */}
        <div className="relative bg-black flex items-center justify-center group cursor-col-resize">
          {/* Cursor Hand Icon */}
          <div className="absolute z-10 bg-white border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Hand className="w-4 h-4 text-black" />
          </div>
          {/* Arrows */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <ArrowLeftRight className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="border-2 border-black border-l-0 bg-white flex flex-col">
          <div className="border-b-2 border-black px-3 py-2 bg-gray-100">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Notes</span>
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="w-full h-2 bg-gray-100 rounded" />
            <div className="w-full h-2 bg-gray-100 rounded" />
            <div className="w-2/3 h-2 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  </FeatureVisualContainer>
);

// Row 4 Visual: Quiz Modal
const QuizModalVisual = () => (
  <FeatureVisualContainer>
    <div className="aspect-[16/10] bg-gray-50 relative overflow-hidden">
      {/* Background (faded) */}
      <div className="absolute inset-0 opacity-30 p-4">
        <div className="w-full h-full border-2 border-gray-300 bg-white" />
      </div>
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-4/5 max-w-sm bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Modal Header */}
          <div className="border-b-2 border-black px-4 py-3 bg-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-black" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Pop Quiz</span>
            </div>
            <span className="font-mono text-xs text-gray-500">1 of 3</span>
          </div>
          
          {/* Modal Content */}
          <div className="p-4 space-y-4">
            <p className="font-sans text-sm text-gray-700">What is the time complexity of binary search?</p>
            
            {/* Options */}
            <div className="space-y-2">
              <div className="border-2 border-black px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                <span className="font-mono text-sm">A) O(n)</span>
              </div>
              <div className="border-2 border-black px-3 py-2 bg-black text-white">
                <span className="font-mono text-sm">B) O(log n)</span>
              </div>
              <div className="border-2 border-black px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                <span className="font-mono text-sm">C) O(n²)</span>
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
  <div className="py-16 md:py-24">
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      {/* Text Column */}
      <div className={`space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">{label}</p>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{headline}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{body}</p>
      </div>
      
      {/* Visual Column */}
      <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
        {visual}
      </div>
    </div>
  </div>
);

// CTA Footer Component
const CTAFooter = () => (
  <div className="border-t-2 border-b-2 border-black py-16 md:py-24 mt-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left: Headline */}
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
          Enough thinking.
        </h2>
        <p className="text-xl text-gray-500">Let's start building.</p>
      </div>
      
      {/* Right: Contact Table */}
      <div className="border-2 border-black bg-white">
        <a 
          href="mailto:gayshinlee@gmail.com" 
          className="flex items-center justify-between px-4 py-3 border-b-2 border-black hover:bg-gray-100 transition-colors"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-gray-500">Email</span>
          <span className="text-black font-medium">gayshinlee@gmail.com</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/gayshin/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 border-b-2 border-black hover:bg-gray-100 transition-colors"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-gray-500">LinkedIn</span>
          <span className="text-black font-medium">in/gayshin</span>
        </a>
        <a 
          href="/GAYSHINLEE_resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-gray-500">Resume</span>
          <span className="text-black font-medium">Download PDF</span>
        </a>
      </div>
    </div>
  </div>
);

// Main Component
const ZigZagFeatures = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-black">
      {/* Row 1: The Foundation */}
      <FeatureRow
        label="01 — THE WORKSPACE"
        headline="A Single Pane of Glass."
        body="No more tab switching. Everything you need—video, notes, and AI assistance—lives in one unified interface. Your focus stays intact."
        visual={<WorkspaceVisual />}
        isReversed={false}
      />
      
      {/* Row 2: The Intelligence */}
      <FeatureRow
        label="02 — ASSISTANCE"
        headline="Context-Aware AI Chatbot."
        body="The AI detects confusion by analyzing your pauses and rewinds. When you're stuck at 10:45, it doesn't just answer—it references that exact moment in the transcript."
        visual={<ChatBubbleVisual />}
        isReversed={true}
      />
      
      {/* Row 3: The Control */}
      <FeatureRow
        label="03 — ERGONOMICS"
        headline="Ergonomic Control."
        body="Draggable divider for custom focus. Need more space for notes? Drag the divider. Want to zoom into the video? Adjust it. The interface adapts to your workflow."
        visual={<DividerVisual />}
        isReversed={false}
      />
      
      {/* Row 4: The Retention */}
      <FeatureRow
        label="04 — MASTERY"
        headline="Active Recall."
        body="Click the lightbulb to test your knowledge. Instant quizzes pulled from the transcript ensure you're not just watching—you're learning."
        visual={<QuizModalVisual />}
        isReversed={true}
      />
      
      {/* CTA Footer */}
      <CTAFooter />
    </div>
  );
};

export default ZigZagFeatures;
