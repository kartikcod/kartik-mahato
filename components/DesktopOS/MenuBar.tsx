"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiWifi, FiBatteryCharging, FiSearch, FiVolume2, FiCommand, FiSettings } from "react-icons/fi";
import { FaApple } from "react-icons/fa";

interface MenuBarProps {
  onOpenSpotlight: () => void;
  activeAppTitle?: string;
  onOpenApp: (id: string) => void;
}

export default function MenuBar({
  onOpenSpotlight,
  activeAppTitle = "Launchpad",
  onOpenApp,
}: MenuBarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }) +
          " " +
          now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-7 bg-zinc-950/70 border-b border-white/10 backdrop-blur-xl z-[100] px-4 flex items-center justify-between text-xs text-white select-none">
      {/* Left items */}
      <div className="flex items-center gap-4">
        {/* Apple / Dev Logo & Profile Avatar */}
        <div
          onClick={() => onOpenApp("finder")}
          className="flex items-center gap-2 cursor-pointer text-zinc-200 hover:text-white group"
          title="Kartik Mahato Profile"
        >
          <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white/30 shadow-sm shrink-0">
            <Image
              src="/kartik_profile.png"
              alt="Kartik"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold tracking-tight text-white">Kartik OS</span>
        </div>

        {/* Current Active Context */}
        <span className="font-semibold text-zinc-300 hidden sm:inline-block">
          {activeAppTitle}
        </span>

        {/* Quick Menu Shortcuts */}
        <div className="hidden md:flex items-center gap-3 text-zinc-400 text-[11px]">
          <button onClick={() => onOpenApp("finder")} className="hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => onOpenApp("appstore")} className="hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => onOpenApp("terminal")} className="hover:text-white transition-colors">
            Skills
          </button>
          <button onClick={() => onOpenApp("experience")} className="hover:text-white transition-colors">
            Experience
          </button>
          <button onClick={() => onOpenApp("contact")} className="hover:text-white transition-colors">
            Contact
          </button>
          <button
            onClick={() => onOpenApp("settings")}
            className="hover:text-cyan-400 text-zinc-300 transition-colors flex items-center gap-1"
          >
            <span>Customize</span>
          </button>
        </div>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-3 text-zinc-300">
        {/* ⌘K Spotlight Trigger Button */}
        <button
          onClick={onOpenSpotlight}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/15 text-[11px] text-zinc-300 hover:text-white transition-all border border-white/10 shadow-sm"
        >
          <FiSearch className="text-xs" />
          <span className="hidden sm:inline">Search</span>
          <span className="font-mono text-[9px] bg-black/40 px-1 py-0.2 rounded border border-white/10">⌘K</span>
        </button>

        {/* Settings Icon */}
        <button
          onClick={() => onOpenApp("settings")}
          className="p-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
          title="Change Wallpaper & Theme Settings"
        >
          <FiSettings className="text-xs" />
        </button>

        {/* Status icons */}
        <div className="hidden sm:flex items-center gap-2.5 text-zinc-400 text-xs">
          <FiVolume2 className="hover:text-white cursor-pointer" />
          <FiWifi className="hover:text-white cursor-pointer" />
          <FiBatteryCharging className="hover:text-emerald-400" />
        </div>

        {/* Clock */}
        <span className="font-medium text-[11px] text-zinc-200 font-mono">
          {time || "Kartik OS"}
        </span>
      </div>
    </header>
  );
}
