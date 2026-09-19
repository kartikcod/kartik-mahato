"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { projectsData, Project } from "./projectsData";
import ProjectCard from "./ProjectCard";
import { FiArrowRight, FiSmartphone, FiLayers, FiDownload } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

interface CardWrapperProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  totalCards: number;
}

function AnimatedCardItem({
  project,
  index,
  progress,
  range,
  targetScale,
  totalCards,
}: CardWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform scale from 1 down to targetScale as user scrolls past this card
  const scale = useTransform(progress, range, [1, targetScale]);

  // Subtle opacity reduction for cards underneath
  const opacity = useTransform(
    progress,
    [range[0], range[1]],
    [1, index === totalCards - 1 ? 1 : 0.85]
  );

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 flex items-center justify-center mb-10 sm:mb-14 md:mb-16"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(10% + ${index * 20}px)`,
        }}
        className="w-full relative origin-top"
      >
        <ProjectCard project={project} index={index} />
      </motion.div>
    </div>
  );
}

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax background text
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-[#030303] text-white pt-24 sm:pt-32 pb-32 sm:pb-40 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2.5 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Featured Portfolio
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
              >
                Selected{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  Works & Apps
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed"
              >
                From 5 production apps live on Google Play with 870+ real installs
                to enterprise MERN dashboards. Scroll through to see each project unfold.
              </motion.p>
            </div>

            {/* Metrics Pills on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap md:flex-col gap-3 shrink-0"
            >
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <FaGooglePlay className="text-cyan-400 text-lg" />
                <div>
                  <p className="text-xs font-bold text-white">870+ Total Installs</p>
                  <p className="text-[10px] text-zinc-400">Live on Google Play Store</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <FiLayers className="text-violet-400 text-lg" />
                <div>
                  <p className="text-xs font-bold text-white">Full-Stack & Mobile</p>
                  <p className="text-[10px] text-zinc-400">React Native • Next.js • MERN</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
