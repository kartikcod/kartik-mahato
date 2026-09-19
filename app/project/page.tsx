"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projectsData, Project } from "@/components/Projects/projectsData";
import ProjectCard from "@/components/Projects/ProjectCard";
import { FaGooglePlay } from "react-icons/fa";
import { FiSmartphone, FiMonitor, FiLayers, FiDownload, FiStar } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-32 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* ================= HERO HEADER ================= */}
        <section className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            // Complete Project Showcase
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]"
          >
            Apps & Systems{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Built to Scale.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
            className="mt-6 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            A curated showcase of production React Native mobile applications
            live on the Google Play Store with 870+ installs, alongside enterprise
            full-stack MERN & Next.js systems.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: "Total App Installs", value: "870+", icon: <FiDownload className="text-emerald-400" /> },
              { label: "Google Play Apps", value: "5 Live", icon: <FaGooglePlay className="text-cyan-400" /> },
              { label: "Full Stack Exp.", value: "1+ Years", icon: <FiLayers className="text-violet-400" /> },
              { label: "Avg User Rating", value: "4.7 ★", icon: <FiStar className="text-amber-400" /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md flex flex-col items-center text-center"
              >
                <div className="text-lg mb-1">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ================= FILTER TABS ================= */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner">
            {[
              { id: "all", label: "All Projects", count: projectsData.length },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-400"
                        }`}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PROJECTS LIST ================= */}
        <motion.div layout className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}
        <section className="mt-28 p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Have a mobile app or web idea you want to launch?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              I can help take your vision from UI design all the way to Google Play Store deployment and production cloud infrastructure.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="px-8 py-3.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm uppercase tracking-wider font-bold transition-all border border-zinc-700"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
