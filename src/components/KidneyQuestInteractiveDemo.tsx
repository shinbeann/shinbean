import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import kidneyQuestLanguagePhone from "@/assets/kidneyquest-language-phone.png";
import kidneyQuestQuizPhone from "@/assets/kidneyquest-quiz-phone.png";

type KidneyQuestScreen = "quiz" | "success";

const screenVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const KidneyQuestInteractiveDemo = () => {
  const [currentScreen, setCurrentScreen] = useState<KidneyQuestScreen>("quiz");
  const [isShaking, setIsShaking] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const triggerShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  const handleMissClick = () => {
    if (currentScreen === "quiz") {
      triggerShake();
    }
  };

  const handleCorrectAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowSuccessOverlay(true);
    setTimeout(() => {
      setShowSuccessOverlay(false);
      setCurrentScreen("success");
    }, 700);
  };

  const handleReplay = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setCurrentScreen("quiz");
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-6 sm:flex-row">
      {/* Static Language screen phone (full-frame image) */}
      <div
        className="relative flex w-[70%] max-w-xs items-center justify-center"
        aria-label="KidneyQuest language selection screen"
      >
        <img
          src={kidneyQuestLanguagePhone}
          alt="KidneyQuest language selection on a mobile phone"
          className="h-auto w-full select-none object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
        />
      </div>

      {/* Interactive Quiz / Success phone (uses full-frame quiz image) */}
      <motion.div
        className="relative flex w-[70%] max-w-xs items-center justify-center"
        animate={isShaking ? { x: [0, -4, 4, -3, 3, 0] } : { x: 0 }}
        transition={isShaking ? { duration: 0.4, ease: "easeInOut" } : undefined}
        onClick={handleMissClick}
        aria-label="Interactive KidneyQuest quiz demo"
      >
        <AnimatePresence mode="wait">
          {currentScreen === "quiz" && (
            <motion.div
              key="quiz"
              variants={screenVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full"
            >
              <img
                src={kidneyQuestQuizPhone}
                alt="KidneyQuest quiz question on a mobile phone"
                className="h-auto w-full select-none object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
              />

              {/* Correct answer hotspot (Option B) */}
              <button
                type="button"
                data-hotspot
                onClick={handleCorrectAnswer}
                className="hover-scale absolute left-[13%] right-[13%] top-[56%] h-[9%] cursor-pointer rounded-xl bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70"
                aria-label="Select correct answer"
              />

              {/* Optional success overlay before transitioning */}
              <AnimatePresence>
                {showSuccessOverlay && (
                  <motion.div
                    key="success-overlay"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/60"
                  >
                    <div className="flex flex-col items-center gap-2 rounded-2xl bg-card px-6 py-4 shadow-lg">
                      <CheckCircle2 className="h-8 w-8 text-success" />
                      <p className="text-sm font-medium text-foreground">
                        Nice! That&apos;s correct.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {currentScreen === "success" && (
            <motion.div
              key="success"
              variants={screenVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full"
            >
              <div className="relative w-full">
                <img
                  src="/kidneyquest-success.png"
                  alt="KidneyQuest success screen showing restored healthy kidney illustration"
                  className="h-auto w-full select-none object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
                />

                {/* Replay button overlay */}
                <button
                  type="button"
                  data-hotspot
                  onClick={handleReplay}
                  className="hover-scale absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  Replay demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
