"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  /* ========= SCROLL PARALLAX (Disabled/reduced on mobile via clamp) ========= */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 25, stiffness: 100 };
  const yBackText = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -80]),
    springConfig
  );
  const yImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    springConfig
  );
  const yFrontText = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -50]),
    springConfig
  );

  /* ========= ANIMATION VARIANTS ========= */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const textRevealVariants: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center bg-[#F8F8F7] text-zinc-950 overflow-hidden pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12 selection:bg-black selection:text-white"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ===== 1. TOP BAR / INTRO ===== */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-xl mx-auto space-y-3 sm:space-y-4">
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="inline-flex mt-10">
          <div className="group relative flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-md shadow-xs cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-700">
              Available for Projects
            </span>
            <Sparkles className="w-3 h-3 text-zinc-400 group-hover:text-amber-500 transition-colors" />
          </div>
        </motion.div>

        {/* Intro Subtitle */}
        <div className="overflow-hidden px-2">
          <motion.p
            variants={itemVariants}
            className="text-zinc-600 text-xs sm:text-base md:text-lg font-normal tracking-tight leading-relaxed"
          >
            <motion.span
              animate={{ rotate: [0, -14, 14, -10, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="inline-block mr-1 origin-bottom-right"
            >
              👋
            </motion.span>
            Hey, I&apos;m{" "}
            <span className="font-semibold text-zinc-950 relative inline-block">
              Kartik Mahato
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-zinc-950 origin-left"
              />
            </span>
            — craft-focused Designer & Creative Technologist.
          </motion.p>
        </div>
      </div>

      {/* ===== 2. HERO CENTER: INTERLOCKED TYPOGRAPHY & IMAGE ===== */}
      <div className="relative w-full max-w-6xl flex flex-col items-center justify-center my-auto py-4 sm:py-8">
        
        {/* Layer 1: Background Big Heading */}
        <div className="overflow-hidden select-none">
          <motion.h1
            variants={textRevealVariants}
            style={{ y: yBackText }}
            className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] font-black uppercase tracking-tighter leading-[0.88] text-zinc-900 text-center"
          >
            Creative
          </motion.h1>
        </div>

        {/* Layer 2: Main Subject Cutout */}
        <motion.div
          variants={itemVariants}
          style={{ y: yImage }}
          className="relative z-20 -mt-[14vw] sm:-mt-[11vw] md:-mt-[9vw] w-[65vw] sm:w-[46vw] md:w-[32vw] lg:w-[24vw] max-w-[340px] aspect-[4/5] pointer-events-auto"
        >
          <div className="relative w-full h-full group">
            <Image
              src="/kartik.png"
              alt="Kartik Mahato"
              fill
              priority
              sizes="(max-width: 640px) 65vw, (max-width: 768px) 46vw, (max-width: 1024px) 32vw, 340px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>

          {/* Floating CTAs - Responsively stacked on mobile */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-10 sm:-bottom-6 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 z-40 w-full px-4 justify-center"
          >
            <a
              href="#work"
              className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-md"
            >
              <span>Selected Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-white/90 backdrop-blur-md border border-black/15 text-black text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black hover:text-white transition-all active:scale-95 shadow-xs"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Layer 3: Intersecting Foreground Line */}
        <div className="overflow-hidden select-none -mt-[9vw] sm:-mt-[7vw] md:-mt-[5vw] z-30 pointer-events-none">
          <motion.h2
            variants={textRevealVariants}
            style={{ y: yFrontText }}
            className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-zinc-950 to-zinc-700 text-center"
          >
            Developer
          </motion.h2>
        </div>
      </div>

      {/* ===== 3. FOOTER META BAR ===== */}
      <motion.div
        variants={itemVariants}
        className="relative z-30 w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-black/10 pt-4 sm:pt-5 text-center text-[10px] sm:text-xs text-zinc-500 font-mono tracking-tight"
      >
        <div className="flex items-center gap-3 sm:gap-6 justify-center">
          <span>BASED IN INDIA</span>
          <span>•</span>
          <span>AVAILABLE WORLDWIDE</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-sans font-semibold text-zinc-800 uppercase tracking-widest text-[10px] sm:text-[11px]">
          <span>React / Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Motion Systems</span>
        </div>
      </motion.div>
    </motion.section>
  );
}