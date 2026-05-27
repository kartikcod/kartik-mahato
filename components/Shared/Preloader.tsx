"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const words: string[] = ["Hello", "Namaste","Johar", "Welcome", "Kartik Mahato"];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState<number>(0);
  const [isTextDone, setIsTextDone] = useState<boolean>(false);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 900); // Speed of text switching
      return () => clearTimeout(timer);
    } else {
      // Pause on "Kartik Mahato" briefly before triggering the puzzle drop
      const timer = setTimeout(() => {
        setIsTextDone(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const puzzleVariants: Variants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: i % 2 === 0 ? "-100%" : "100%", // Alternating directions
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1], // Smooth cinematic easing
        delay: i * 0.06, // Creates the staggered "puzzle split" look
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* STAGE 1: Word Cycle */}
      {!isTextDone && (
        <div className="absolute z-10 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-4xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      )}

      {/* STAGE 2: Puzzle Swipe Transitions */}
      {isTextDone && (
        <div className="absolute inset-0 grid grid-cols-6 h-full w-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={puzzleVariants}
              initial="initial"
              animate="animate"
              onAnimationComplete={() => {
                // When the 6th block (index 5) finishes moving, open the website
                if (i === 5) {
                  onComplete();
                }
              }}
              className="bg-neutral-900 h-full w-full border-x border-neutral-800/10"
            />
          ))}
        </div>
      )}
    </div>
  );
}