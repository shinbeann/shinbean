import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IterationCard {
  id: number;
  title: string;
  heuristic: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeDescription: string;
  afterDescription: string;
}

interface StackedCardCarouselProps {
  cards: IterationCard[];
}

const StackedCardCarousel: React.FC<StackedCardCarouselProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Card Stack Container - centered horizontally */}
      <div className="relative h-[600px] md:h-[500px] flex justify-center">
        {cards.map((card, index) => {
          // Calculate relative position from active card
          const relativePos = index - activeIndex;
          
          // Determine card state
          const isActive = relativePos === 0;
          const isStacked = relativePos > 0 && relativePos <= 2;
          const isPast = relativePos < 0;
          
          // Stacking values per spec
          const getStackValues = () => {
            if (isActive) return { zIndex: 30, scale: 1, yOffset: 0 };
            if (relativePos === 1) return { zIndex: 20, scale: 0.98, yOffset: 20 };
            if (relativePos === 2) return { zIndex: 10, scale: 0.96, yOffset: 40 };
            return { zIndex: 0, scale: 0.94, yOffset: 60 };
          };
          
          const { zIndex, scale, yOffset } = getStackValues();
          const opacity = isPast ? 0 : (isActive || isStacked) ? 1 : 0;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                y: yOffset,
                scale: scale,
                opacity: opacity,
                x: isPast ? -50 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ 
                zIndex: zIndex,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
              className="absolute top-0 left-0 right-0 w-full max-w-full md:max-w-5xl mx-auto px-4 md:px-0"
            >
              {/* Fixed height card with flex layout */}
              <div
                className={`
                  h-[600px] md:h-[500px] flex flex-col
                  bg-[#0A0A0A] border rounded-2xl overflow-hidden
                  transition-all duration-500 ease-out
                  shadow-xl
                  ${isActive 
                    ? "border-purple-500/40 shadow-purple-500/20" 
                    : "border-white/10 shadow-black/40"
                  }
                `}
              >
                {/* Card Header - fixed height */}
                <div className="flex-shrink-0 p-6 md:p-8 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">
                        {card.id}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                    </div>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-wider w-fit">
                      {card.heuristic}
                    </span>
                  </div>
                </div>

                {/* Image Section with Captions */}
                <div className="flex-grow px-6 md:px-8 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before Column */}
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium text-orange-400 mb-2 flex-shrink-0">Before</h4>
                      <div className="aspect-video bg-neutral-900/50 border border-orange-500/20 rounded-lg overflow-hidden mb-2">
                        <img
                          src={card.beforeImage}
                          alt={card.beforeAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed flex-shrink-0 break-words">
                        {card.beforeDescription}
                      </p>
                    </div>

                    {/* After Column */}
                    <div className="flex flex-col">
                      <h4 className="text-sm font-medium text-emerald-400 mb-2 flex-shrink-0">After</h4>
                      <div className="aspect-video bg-neutral-900/50 border border-emerald-500/20 rounded-lg overflow-hidden mb-2">
                        <img
                          src={card.afterImage}
                          alt={card.afterAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed flex-shrink-0 break-words">
                        {card.afterDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-16">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`
            w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200
            ${activeIndex === 0
              ? "border-white/10 text-neutral-600 cursor-not-allowed"
              : "border-zinc-700 text-zinc-200 hover:border-purple-500/50 hover:text-purple-400"
            }
          `}
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${index === activeIndex
                  ? "bg-purple-500 w-8"
                  : "bg-white/20 hover:bg-white/40"
                }
              `}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 border-zinc-700 text-zinc-200 hover:border-purple-500/50 hover:text-purple-400"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Card Counter */}
      <p className="text-center text-sm text-neutral-500 mt-4 font-mono">
        {activeIndex + 1} / {cards.length}
      </p>
    </div>
  );
};

export default StackedCardCarousel;
