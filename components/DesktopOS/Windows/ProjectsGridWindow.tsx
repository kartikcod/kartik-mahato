"use client";

import { projectsData } from "@/components/Projects/projectsData";
import { FaGooglePlay } from "react-icons/fa";
import { FiDownload, FiStar, FiArrowUpRight, FiLayers } from "react-icons/fi";

interface ProjectsGridWindowProps {
  onOpenApp: (appId: string) => void;
}

export default function ProjectsGridWindow({ onOpenApp }: ProjectsGridWindowProps) {
  return (
    <div className="h-full bg-zinc-950/90 text-white overflow-y-auto p-6 md:p-8 space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 rounded-3xl bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-cyan-900/40 border border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-mono mb-2">
            <FaGooglePlay className="text-[10px]" /> Google Play Developer Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Live Production Apps
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1">
            870+ real downloads across 5 published Android applications built with React Native and Supabase.
          </p>
        </div>
      </div>

      {/* Grid of Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenApp(project.id)}
            className="group p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-900/90 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${project.accentColor.from} ${project.accentColor.to} flex items-center justify-center text-white text-2xl font-black shadow-lg shrink-0 group-hover:scale-105 transition-transform`}
              >
                {project.title.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-semibold text-emerald-400 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {project.installs}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-amber-400 flex items-center gap-1 font-semibold">
                  <FiStar /> {project.rating}
                </span>
                <span>•</span>
                <span>{project.techStack[0]}</span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-400 group-hover:translate-x-1 transition-transform">
                <span>Launch</span>
                <FiArrowUpRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
