import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import kidneyQuestLanguagePhone from "@/assets/kidneyquest-language-phone.png";
import kidneyQuestQuizPhone from "@/assets/kidneyquest-quiz-phone.png";
import correctImage from "@/assets/correct.png";
import incorrectImage from "@/assets/incorrect.png";

type KidneyQuestScreen = "quiz" | "success";

const screenVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const KidneyQuestInteractiveDemo = () => {
  const [currentScreen, setCurrentScreen] = useState<KidneyQuestScreen>("quiz");
  const [isShaking, setIsShaking] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showIncorrectModal, setShowIncorrectModal] = useState(false);
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const languageImageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateHeight = () => {
      if (languageImageRef.current) {
        setImageHeight(languageImageRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const triggerShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  const handleMissClick = () => {
    if (currentScreen === "quiz" && !showSuccessModal && !showIncorrectModal) {
      triggerShake();
    }
  };

  const handleAnswerClick = (option: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setClickedButton(option);

    if (option === "B") {
      // Correct answer - show success modal
      setShowSuccessModal(true);
    } else {
      // Wrong answer - shake and show incorrect modal
      triggerShake();
      setShowIncorrectModal(true);
      setTimeout(() => {
        setShowIncorrectModal(false);
        setClickedButton(null);
      }, 2000);
    }
  };

  const handleReplay = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowSuccessModal(false);
    setShowIncorrectModal(false);
    setClickedButton(null);
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
          ref={languageImageRef}
          src={kidneyQuestLanguagePhone}
          alt="KidneyQuest language selection on a mobile phone"
          className="h-auto w-full select-none object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
          onLoad={() => {
            if (languageImageRef.current) {
              setImageHeight(languageImageRef.current.offsetHeight);
            }
          }}
        />
      </div>

      {/* Interactive Quiz / Success phone (uses full-frame quiz image) */}
      <motion.div
        className="relative flex w-[70%] max-w-xs items-center justify-center cursor-pointer"
        animate={isShaking ? { x: [0, -4, 4, -3, 3, 0] } : { x: 0 }}
        transition={isShaking ? { duration: 0.4, ease: "easeInOut" } : undefined}
        onClick={handleMissClick}
        whileHover={{ scale: 1.05 }}
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
                className="w-full select-none object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
                style={imageHeight ? { height: `${imageHeight}px` } : undefined}
              />

              {/* Pulse Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                  <div className="relative flex items-center gap-2">
                    {/* Green ping dot */}
                    <div className="relative">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 w-2 h-2 rounded-full bg-green-500"
                        animate={{
                          scale: [1, 2, 2],
                          opacity: [0.6, 0, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-white">
                      Click Me!
                    </span>
                  </div>
                </motion.div>

              {/* Answer Button A */}
              <motion.button
                type="button"
                onClick={(e) => handleAnswerClick("A", e)}
                className="absolute left-[13%] right-[13%] top-[47%] min-h-[9%] cursor-pointer flex items-center justify-start px-1 sm:px-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70 overflow-visible"
                style={{
                  borderRadius: '14px',
                  border: '2px solid #1A4A5C',
                  background: 'linear-gradient(0deg, #2B6B7F 0%, #4EC1E5 100%)',
                  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
                  color: '#FFF',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={clickedButton === "A" ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-[8px] sm:text-xs md:text-sm leading-tight whitespace-normal break-words text-left">
                  A. Break down food into energy
                </span>
              </motion.button>

              {/* Answer Button B (Correct Answer) */}
              <motion.button
                type="button"
                onClick={(e) => handleAnswerClick("B", e)}
                className="absolute left-[13%] right-[13%] top-[57.5%] min-h-[9%] cursor-pointer flex items-center justify-start px-1 sm:px-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70 overflow-visible"
                style={{
                  borderRadius: '14px',
                  border: '2px solid #1A4A5C',
                  background: 'linear-gradient(0deg, #2B6B7F 0%, #4EC1E5 100%)',
                  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
                  color: '#FFF',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={clickedButton === "B" ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-[8px] sm:text-xs md:text-sm leading-tight whitespace-normal break-words text-left">
                  B. Filter blood, remove waste and excess fluid
                </span>
              </motion.button>

              {/* Answer Button C */}
              <motion.button
                type="button"
                onClick={(e) => handleAnswerClick("C", e)}
                className="absolute left-[13%] right-[13%] top-[68%] min-h-[9%] cursor-pointer flex items-center justify-start px-1 sm:px-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70 overflow-visible"
                style={{
                  borderRadius: '14px',
                  border: '2px solid #1A4A5C',
                  background: 'linear-gradient(0deg, #2B6B7F 0%, #4EC1E5 100%)',
                  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
                  color: '#FFF',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={clickedButton === "C" ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-[8px] sm:text-xs md:text-sm leading-tight whitespace-normal break-words text-left">
                  C. Produce insulin for sugar control
                </span>
              </motion.button>

              {/* Answer Button D */}
              <motion.button
                type="button"
                onClick={(e) => handleAnswerClick("D", e)}
                className="absolute left-[13%] right-[13%] top-[78.5%] min-h-[9%] cursor-pointer flex items-center justify-start px-1 sm:px-4 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/70 overflow-visible"
                style={{
                  borderRadius: '14px',
                  border: '2px solid #1A4A5C',
                  background: 'linear-gradient(0deg, #2B6B7F 0%, #4EC1E5 100%)',
                  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
                  color: '#FFF',
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 400,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={clickedButton === "D" ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-normal whitespace-normal break-words text-left">
                  D. Pump blood like the heart
                </span>
              </motion.button>

              {/* Success Modal - Overlay Card */}
              <AnimatePresence>
                {showSuccessModal && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.img
                      src={correctImage}
                      alt="Correct answer popup"
                      className="w-[65%] max-w-[21.6rem] pointer-events-auto"
                      initial={{ 
                        opacity: 0, 
                        scale: 0.5, 
                        y: -20,
                        filter: "drop-shadow(0 0 0px rgba(74, 222, 128, 0))"
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        filter: "drop-shadow(0 0 20px rgba(74, 222, 128, 0.8)) drop-shadow(0 0 40px rgba(74, 222, 128, 0.5))"
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8, 
                        y: 20,
                        filter: "drop-shadow(0 0 0px rgba(74, 222, 128, 0))"
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.7,
                      }}
                      onClick={handleReplay}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Incorrect Modal - Overlay Card */}
              <AnimatePresence>
                {showIncorrectModal && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.img
                      src={incorrectImage}
                      alt="Incorrect answer popup"
                      className="w-[65%] max-w-[21.6rem] pointer-events-auto"
                      initial={{ 
                        opacity: 0, 
                        scale: 0.5, 
                        y: -20,
                        filter: "drop-shadow(0 0 0px rgba(239, 68, 68, 0))"
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))"
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8, 
                        y: 20,
                        filter: "drop-shadow(0 0 0px rgba(239, 68, 68, 0))"
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.7,
                      }}
                      onClick={handleReplay}
                    />
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
