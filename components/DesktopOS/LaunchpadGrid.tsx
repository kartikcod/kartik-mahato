"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { APPS } from "./appsData";
import { AppConfig, AppId } from "./types";
import { FiSearch } from "react-icons/fi";

interface LaunchpadGridProps {
  onOpenApp: (id: AppId) => void;
  onOpenSpotlight: () => void;
}

// Single uniform app icon component - Every icon looks identical in style, shape, and size
function AppGridItem({
  app,
  index,
  onOpenApp,
}: {
  app: AppConfig;
  index: number;
  onOpenApp: (id: AppId) => void;
}) {
  return (
    <motion.div
      layout
      role="button"
      tabIndex={0}
      aria-label={`Open ${app.name}`}
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.35, delay: index * 0.025 }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => onOpenApp(app.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenApp(app.id);
        }
      }}
      className="flex flex-col items-center cursor-pointer group w-20 sm:w-24 text-center select-none outline-none focus:scale-105"
    >
      {/* Uniform macOS Squircle App Icon Container */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[22px] sm:rounded-[26px] bg-gradient-to-tr shadow-[0_10px_25px_rgba(0,0,0,0.5)] p-0.5 overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.7)] group-hover:border-white/40">
        <div
          className={`w-full h-full rounded-[20px] sm:rounded-[24px] bg-gradient-to-tr ${app.iconGradient} flex items-center justify-center relative border border-white/25 overflow-hidden`}
        >
          {/* Glass specular sheen reflection - same for all icons */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/25 pointer-events-none rounded-[20px] sm:rounded-[24px]" />

          {/* Centered App Glyph Icon - Same type across all apps */}
          <div className="scale-90 sm:scale-100 flex items-center justify-center text-white drop-shadow-md z-10">
            {app.icon}
          </div>
        </div>

        {/* Badge if any */}
        {app.badge && (
          <div
            className={`absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tighter shadow-md z-20 border border-white/30 ${app.badgeColor || "bg-violet-500 text-white"
              }`}
          >
            {app.badge}
          </div>
        )}
      </div>

      {/* Uniform Title Underneath */}
      <span className="mt-2.5 text-xs sm:text-[13px] font-medium text-zinc-200 group-hover:text-white drop-shadow-md truncate max-w-full px-1">
        {app.name}
      </span>
    </motion.div>
  );
}

export default function LaunchpadGrid({
  onOpenApp,
  onOpenSpotlight,
}: LaunchpadGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "project" | "game" | "core">("all");
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Live clock tick
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter out legacy generic launcher items
  const allApps = APPS.filter((a) => a.id !== "games" && a.id !== "safari");

  // Displayed apps based on selected tab
  const displayedApps = activeFilter === "all"
    ? allApps
    : allApps.filter((a) => a.category === activeFilter);

  const filterTabs: { key: "all" | "project" | "game" | "core"; label: string; count: number }[] = [
    { key: "all", label: "All Apps", count: allApps.length },
    { key: "project", label: "Play Store", count: allApps.filter((a) => a.category === "project").length },
    { key: "game", label: "Arcade Games", count: allApps.filter((a) => a.category === "game").length },
    { key: "core", label: "System & Bio", count: allApps.filter((a) => a.category === "core" || a.category === "utility").length },
  ];

  // Clock format strings
  const timeString = currentTime
    ? currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
    : "--:--";
  const secondsString = currentTime
    ? currentTime.getSeconds().toString().padStart(2, "0")
    : "00";
  const dateString = currentTime
    ? currentTime.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" })
    : "Loading...";

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-28 flex flex-col items-center select-none">
      {/* ================= LEFT TOP: ONLY IMAGE (Big Screen Devices Only) ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden xl:flex flex-col items-center fixed left-8 2xl:left-14 top-16 2xl:top-20 z-20 select-none group"
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => onOpenApp("finder")}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenApp("finder")}
          className="relative w-28 h-28 2xl:w-36 2xl:h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500 hover:scale-105 hover:border-violet-400/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] active:scale-95 outline-none"
          title="Click to open About Me / Bio"
        >
          <Image
            src="/kartik_profile.png"
            alt="Kartik Mahato"
            fill
            priority
            sizes="(max-width: 1536px) 112px, 144px"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Subtle gloss sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/35 pointer-events-none" />

          {/* Hover prompt */}
          <div className="absolute inset-0 bg-violet-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs backdrop-blur-[2px]">
            <span>Open Bio ↗</span>
          </div>

          {/* Active online indicator pulse dot */}
          <span className="absolute bottom-2.5 right-2.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-md animate-pulse" />
        </div>

        <span className="mt-2 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
          Kartik Mahato
        </span>
      </motion.div>

      {/* ================= RIGHT SIDE: BIG SIZE WATCH / CLOCK (Big Screen Devices Only) ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden xl:flex flex-col items-center justify-center fixed right-8 2xl:right-14 top-16 2xl:top-20 z-20 p-5 2xl:p-6 rounded-3xl border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] select-none hover:border-white/30 transition-all group"
      >
        {/* Big Watch Display */}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl 2xl:text-5xl font-black text-white tracking-tight font-mono drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            {timeString}
          </span>
          <span className="text-xs 2xl:text-sm font-bold text-cyan-400 font-mono">
            {secondsString}s
          </span>
        </div>

        {/* Date */}
        <div className="mt-2 text-xs 2xl:text-sm font-medium text-zinc-300 tracking-wide">
          {dateString}
        </div>

      </motion.div>

      {/* Search Bar (macOS Launchpad style) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onOpenSpotlight}
        className="w-full max-w-sm mb-5 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-xl flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition-all shadow-lg group"
      >
        <FiSearch className="text-zinc-400 group-hover:text-white transition-colors text-sm" />
        <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-200">
          Search apps, games, skills, or press ⌘K...
        </span>
        <span className="ml-auto font-mono text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-white/10 text-zinc-400">
          ⌘K
        </span>
      </motion.div>

      {/* Category Filter Pills (Unified Row & Column Control) */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${isActive
                ? "bg-white text-zinc-950 shadow-md scale-100"
                : "text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-zinc-950/15 text-zinc-950" : "bg-white/10 text-zinc-400"
                  }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Unified Column & Row Grid - All Apps perfectly aligned row-wise and column-wise */}
      <motion.div
        layout
        className="w-full flex justify-center"
      >
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-y-8 sm:gap-y-10 gap-x-3 sm:gap-x-6 justify-items-center max-w-5xl">
          <AnimatePresence mode="popLayout">
            {displayedApps.map((app, index) => (
              <AppGridItem
                key={app.id}
                app={app}
                index={index}
                onOpenApp={onOpenApp}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
