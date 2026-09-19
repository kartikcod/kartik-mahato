"use client";

import { projectsData, Project } from "@/components/Projects/projectsData";
import { FaGooglePlay } from "react-icons/fa";
import { FiDownload, FiStar, FiArrowUpRight, FiCheckCircle, FiSmartphone, FiShare2 } from "react-icons/fi";

interface ProjectAppWindowProps {
  projectId: string;
}

export default function ProjectAppWindow({ projectId }: ProjectAppWindowProps) {
  const project = projectsData.find((p) => p.id === projectId) || projectsData[0];

  return (
    <div className="h-full bg-zinc-950/90 text-white overflow-y-auto p-6 md:p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: App Store Style Info */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Row */}
          <div className="flex items-start gap-4">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr ${project.accentColor.from} ${project.accentColor.to} flex items-center justify-center text-white text-3xl font-black shadow-xl shrink-0 border border-white/20`}
            >
              {project.title.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-black text-white truncate">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                {project.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-amber-300 font-bold">
                  <FiStar /> {project.rating || "4.8 ★"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <FiDownload /> {project.installs || "Live App"}
                </span>
                <span>•</span>
                <span className="text-zinc-500">Android</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center">
            {project.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="px-2">
                <p className="text-[10px] uppercase font-bold text-zinc-500">{feat.label}</p>
                <p className="text-xs font-bold text-zinc-200 truncate mt-0.5">{feat.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              About This Application
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Key Capabilities
            </h4>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95`}
              >
                <FaGooglePlay className="text-sm" />
                <span>View on Google Play</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            )}

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(project.title);
                  alert(`Copied ${project.title} name to clipboard!`);
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all"
            >
              <FiShare2 />
              <span>Share App</span>
            </button>
          </div>
        </div>

        {/* Right Column: Simulated Mobile Screen Device */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[260px] aspect-[9/18.5] rounded-[38px] p-2.5 bg-zinc-900 border-[3px] border-zinc-700 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Dynamic island notch */}
            <div className="w-20 h-3.5 bg-black rounded-full mx-auto my-1 flex items-center justify-end px-2 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Screen Content */}
            <div className="relative flex-1 rounded-[28px] bg-gradient-to-b from-zinc-950 via-zinc-900 to-black p-3.5 flex flex-col justify-between border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between text-[9px] text-zinc-400 font-mono">
                <span>9:41 AM</span>
                <span className="flex items-center gap-1">
                  <FiSmartphone className="text-xs" /> 100%
                </span>
              </div>

              {/* App banner in mockup */}
              <div className="my-auto space-y-3 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto bg-gradient-to-tr ${project.accentColor.from} ${project.accentColor.to} flex items-center justify-center text-white text-2xl font-black shadow-lg`}
                >
                  {project.title.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{project.title}</p>
                  <p className="text-[10px] text-zinc-400 truncate">{project.subtitle}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-left space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">Total Installs</span>
                    <span className="text-emerald-400 font-bold">{project.installs}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">Store Rating</span>
                    <span className="text-amber-400 font-bold">{project.rating}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">Status</span>
                    <span className="text-cyan-400 font-bold">Verified Live</span>
                  </div>
                </div>
              </div>

              {/* In-device download button */}
              <div className="pt-2">
                <div
                  className={`w-full py-2 rounded-xl bg-gradient-to-r ${project.accentColor.from} ${project.accentColor.to} text-center text-white text-[10px] font-bold shadow-md flex items-center justify-center gap-1.5`}
                >
                  <FaGooglePlay className="text-xs" />
                  <span>Installed ({project.installs})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
