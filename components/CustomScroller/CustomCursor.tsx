"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [hoverType, setHoverType] = useState<string | null>(null);
  
  // 1. Mouse Position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Awwwards Physics: High damping for that "liquid" feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
    
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>

      {/* Main Cursor Circle */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-14 h-14 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverType ? 4.5 : 1,
        }}
      >
        {/* Text inside the cursor - Only shows on hover */}
        <AnimatePresence>
          {hoverType && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[3px] font-bold text-black tracking-tighter"
            >
              {hoverType}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subtle Outer Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-14 h-14 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverType ? 0.5 : 1,
          opacity: hoverType ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;