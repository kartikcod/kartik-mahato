"use client";

import { motion } from "framer-motion";
import { Project } from "./projectsData";
import { FiDownload, FiStar, FiArrowUpRight, FiCheckCircle, FiSmartphone, FiMonitor } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isMobileApp = project.category === "mobile";

  return (
    <div
      className={`relative w-full rounded-3xl bg-zinc-950/90 border ${project.accentColor.border} p-6 sm:p-8 md:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden`}
      style={{
        boxShadow: `0 20px 60px -15px ${project.accentColor.glow}, 0 0 0 1px rgba(255,255,255,0.06)`,
      }}
    >
      {/* Background Ambient Glow */}
      <div
        className={`absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${project.accentColor.from} ${project.accentColor.to} opacity-15 blur-[100px] pointer-events-none`}
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Info */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500">
                0{index + 1} //
              </span>

              {project.installs && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                  <FiDownload className="text-xs" />
                  {project.installs}
                </span>
              )}

              {project.rating && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <FiStar className="text-xs" />
                  {project.rating}
                </span>
              )}

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-zinc-300 border border-white/10">
                {isMobileApp ? (
                  <>
                    <FaGooglePlay className="text-[10px] text-cyan-400" />
                    Google Play
                  </>
                ) : (
                  <>
                    <FiMonitor className="text-xs text-violet-400" />
                    Web Platform
                  </>
                )}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className={`text-sm sm:text-base font-semibold bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} bg-clip-text text-transparent mt-1 mb-4`}>
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights Bullet Points */}
            <div className="space-y-2.5 mb-6">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <FiCheckCircle className="text-violet-400 mt-0.5 shrink-0 text-sm" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-violet-500/50 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-900">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} shadow-lg hover:shadow-cyan-500/20 transition-all`}
              >
                <span>{isMobileApp ? "Get on Play Store" : "Explore Project"}</span>
                <FiArrowUpRight className="text-base" />
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <span>Source Code</span>
                <FiArrowUpRight className="text-sm" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Device / Interactive Mockup Preview */}
        <div className="lg:col-span-5 flex items-center justify-center">
          {project.mockupType === "mobile" ? (
            /* Modern Realistic Mobile Device Mockup */
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/18.5] rounded-[42px] p-3 bg-zinc-900/90 border-[3px] border-zinc-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Phone Dynamic Island / Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 h-2 rounded-full bg-violet-500/60 animate-pulse" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="relative w-full h-full rounded-[32px] bg-gradient-to-b from-zinc-950 via-zinc-900 to-black p-4 flex flex-col justify-between overflow-hidden border border-white/5">
                {/* Screen Header Bar */}
                <div className="pt-5 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <FiSmartphone className="text-xs" />
                    <span>5G</span>
                  </div>
                </div>

                {/* In-App Interactive Simulation Content */}
                <div className="my-auto space-y-3">
                  {/* App Icon & Header inside mockup */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${project.accentColor.from} ${project.accentColor.to} flex items-center justify-center text-white font-black text-sm shadow-md`}>
                      {project.title.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">
                        {project.title}
                      </p>
                      <p className="text-[10px] text-emerald-400 font-medium">
                        {project.status}
                      </p>
                    </div>
                  </div>

                  {/* Feature Stats Grid in Mockup */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feat, fi) => (
                      <div
                        key={fi}
                        className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-left"
                      >
                        <p className="text-[9px] uppercase tracking-wider text-zinc-500">
                          {feat.label}
                        </p>
                        <p className="text-[11px] font-bold text-zinc-200 truncate mt-0.5">
                          {feat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Simulated App Action Card */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.08] border border-white/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-medium text-zinc-400">Rating & Reviews</span>
                      <span className="text-[10px] font-bold text-amber-400">{project.rating || "5.0 ★"}</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} w-[92%] rounded-full`} />
                    </div>
                  </div>
                </div>

                {/* Bottom App Store Button Simulator */}
                <div className="pb-1">
                  <div className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} text-center text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md`}>
                    <FaGooglePlay className="text-xs" />
                    <span>Installed • {project.installs || "Active"}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Modern Realistic Desktop Dashboard Mockup */
            <div className="relative w-full max-w-[420px] aspect-[16/10] rounded-2xl bg-zinc-900/90 border border-zinc-700/80 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Window controls bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span>enterprise-dashboard.app</span>
                <span className="text-xs text-violet-400">● LIVE</span>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="pt-3 space-y-3 h-[calc(100%-25px)] flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    <p className="text-[8px] text-zinc-400 uppercase">Requests</p>
                    <p className="text-xs font-bold text-white mt-0.5">142.8k</p>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    <p className="text-[8px] text-zinc-400 uppercase">Latency</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">24ms</p>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                    <p className="text-[8px] text-zinc-400 uppercase">Uptime</p>
                    <p className="text-xs font-bold text-cyan-400 mt-0.5">99.98%</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">MERN Microservices</span>
                    <span className="text-violet-400 font-mono">200 OK</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-zinc-400 px-1">
                  <span>MongoDB Atlas + REST API</span>
                  <span className="text-emerald-400 font-bold">Synchronized</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
