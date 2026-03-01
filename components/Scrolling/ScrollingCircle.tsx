"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ScrollingCircle = () => {
  const { scrollYProgress } = useScroll();
  // Maps scroll to 2 full rotations (720 degrees)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const text = " • WEB DESIGNER • WEB DEVELOPER ";

  return (
    <div className="fixed bottom-10 right-10 z-50 flex items-center justify-center w-36 h-36 md:w-44 md:h-44 group">
      <motion.div style={{ rotate }} className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            {/* 1. THE GRADIENT DEFINITION */}
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
            </linearGradient>

            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          
          {/* GRADIENT BORDERS */}
          <circle 
            cx="50" cy="50" r="48" 
            stroke="url(#brandGradient)" 
            fill="transparent" 
            strokeWidth="1.5"
            className="opacity-40"
          />
          <circle 
            cx="50" cy="50" r="28" 
            stroke="url(#brandGradient)" 
            fill="transparent" 
            strokeWidth="1"
            className="opacity-30"
          />

          {/* GRADIENT TEXT */}
          <text className="font-bold uppercase text-[9px] tracking-[0.25em]">
            <textPath xlinkHref="#circlePath" fill="url(#brandGradient)">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Circle with matching Gradient Background */}
      <Link
        href="/contact" 
        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-purple-500 to-cyan-400"
      >
        <span className="text-white text-[10px] font-black uppercase tracking-widest">
          Hire
        </span>
      </Link>
    </div>
  );
};

export default ScrollingCircle;