"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ScrollingCircle = () => {
  const { scrollYProgress } = useScroll();
  
  // Maps scroll to 2 full rotations (720 degrees)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const text = " • WEB DESIGNER • WEB DEVELOPER • ";

  return (
    /* RESPONSIVE SIZING:
       Mobile: w-28 h-28, bottom-5 right-5
       Desktop (md): w-44 h-44, bottom-10 right-10
    */
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-28 h-28 md:w-44 md:h-44 group">
      
      {/* 1. ROTATING SVG LAYER */}
      <motion.div style={{ rotate }} className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            {/* GRADIENT MATCHING YOUR IMAGE */}
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
            </linearGradient>

            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          
          {/* OUTER BORDER LINE (Subtle Gradient) */}
          <circle 
            cx="50" cy="50" r="48" 
            stroke="url(#brandGradient)" 
            fill="transparent" 
            strokeWidth="1"
            className="opacity-30"
          />

          {/* SPINNING TEXT (Full Gradient) */}
          <text className="font-bold uppercase text-[9px] tracking-[0.22em] md:text-[10px]">
            <textPath xlinkHref="#circlePath" fill="url(#brandGradient)">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* 2. CENTER BUTTON WITH GRADIENT BORDER */}
      {/* The 'p-[2px]' creates the border thickness */}
      <Link 
        href="/contact" 
        className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95 p-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
      >
        {/* Inner Black Circle */}
        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest">
            Hire
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ScrollingCircle;