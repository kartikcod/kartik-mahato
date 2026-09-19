"use client";

import { useState } from "react";
import {
  WALLPAPERS,
  Wallpaper,
  CustomizationSettings,
  DEFAULT_SETTINGS,
} from "../themeData";
import {
  FiImage,
  FiCheck,
  FiSliders,
  FiRotateCcw,
  FiCheckCircle,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

interface SettingsWindowProps {
  settings: CustomizationSettings;
  onUpdateSettings: (newSettings: Partial<CustomizationSettings>) => void;
  onResetSettings: () => void;
}

export default function SettingsWindow({
  settings,
  onUpdateSettings,
  onResetSettings,
}: SettingsWindowProps) {
  const [activeTab, setActiveTab] = useState<"wallpaper" | "appearance" | "dock">("wallpaper");
  const [customUrlInput, setCustomUrlInput] = useState(settings.customWallpaperUrl || "");
  const [saveToast, setSaveToast] = useState(false);

  const triggerSaveToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleSelectWallpaper = (id: string) => {
    onUpdateSettings({ wallpaperId: id, customWallpaperUrl: "" });
    triggerSaveToast();
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      onUpdateSettings({
        wallpaperId: "custom",
        customWallpaperUrl: customUrlInput.trim(),
      });
      triggerSaveToast();
    }
  };

  const accentOptions = [
    { id: "purple", label: "Violet Purple", color: "bg-purple-500", ring: "ring-purple-400" },
    { id: "cyan", label: "Electric Cyan", color: "bg-cyan-400", ring: "ring-cyan-400" },
    { id: "emerald", label: "Emerald Mint", color: "bg-emerald-400", ring: "ring-emerald-400" },
    { id: "amber", label: "Sunset Amber", color: "bg-amber-400", ring: "ring-amber-400" },
    { id: "rose", label: "Crimson Rose", color: "bg-rose-500", ring: "ring-rose-400" },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row bg-zinc-950/90 text-white overflow-hidden text-xs sm:text-sm">
      {/* Settings Sidebar */}
      <div className="w-full md:w-56 bg-zinc-900/60 border-b md:border-b-0 md:border-r border-white/10 p-3 sm:p-4 shrink-0 flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2 mb-2">
            Preferences
          </p>

          <button
            onClick={() => setActiveTab("wallpaper")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left font-medium transition-all ${
              activeTab === "wallpaper"
                ? "bg-violet-600/30 text-white border border-violet-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FiImage className="text-base text-cyan-400" />
            <span>Wallpaper</span>
          </button>

          <button
            onClick={() => setActiveTab("appearance")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left font-medium transition-all ${
              activeTab === "appearance"
                ? "bg-violet-600/30 text-white border border-violet-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <HiSparkles className="text-base text-violet-400" />
            <span>Appearance & Accent</span>
          </button>

          <button
            onClick={() => setActiveTab("dock")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left font-medium transition-all ${
              activeTab === "dock"
                ? "bg-violet-600/30 text-white border border-violet-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FiSliders className="text-base text-emerald-400" />
            <span>Dock & Window Blur</span>
          </button>
        </div>

        {/* Reset & Status */}
        <div className="pt-4 border-t border-zinc-800 space-y-2">
          {saveToast && (
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/20 animate-pulse">
              <FiCheckCircle />
              <span>Settings Saved!</span>
            </div>
          )}

          <button
            onClick={() => {
              onResetSettings();
              setCustomUrlInput("");
              triggerSaveToast();
            }}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] text-zinc-400 hover:text-white transition-colors"
          >
            <FiRotateCcw className="text-xs" />
            <span>Reset to Defaults</span>
          </button>
        </div>
      </div>

      {/* Main Settings Content Area */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
        {/* ================= 1. WALLPAPER TAB ================= */}
        {activeTab === "wallpaper" && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                // Desktop Background
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Choose Wallpaper</h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Select from handcrafted cinematic presets or paste your own custom background URL.
              </p>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {WALLPAPERS.map((wp) => {
                const isSelected =
                  settings.wallpaperId === wp.id && !settings.customWallpaperUrl;
                return (
                  <div
                    key={wp.id}
                    onClick={() => handleSelectWallpaper(wp.id)}
                    className={`group relative rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-[1.02]"
                        : "border-zinc-800 hover:border-zinc-600 hover:scale-[1.01]"
                    }`}
                  >
                    {/* Thumbnail Preview Box */}
                    <div
                      className={`h-24 sm:h-28 w-full bg-gradient-to-br ${wp.thumbnailGradient} relative flex items-center justify-center p-2`}
                    >
                      {/* Ambient mini orbs preview */}
                      <div className="w-12 h-12 rounded-full bg-white/10 blur-xl pointer-events-none" />

                      {isSelected && (
                        <div className="w-7 h-7 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg font-bold text-sm z-10">
                          <FiCheck />
                        </div>
                      )}
                    </div>

                    <div className="p-2.5 bg-zinc-900/90 flex items-center justify-between">
                      <span className="font-bold text-xs text-zinc-200 truncate">
                        {wp.name}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                          Active
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Image URL Option */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
              <h3 className="font-bold text-white text-xs sm:text-sm">
                Use Custom Online Image URL
              </h3>
              <p className="text-xs text-zinc-400">
                Paste any direct image link from Unsplash, Imgur, or web to set as your personal desktop wallpaper.
              </p>

              <form onSubmit={handleApplyCustomUrl} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-90 active:scale-95 transition-all shrink-0"
                >
                  Apply Custom
                </button>
              </form>

              {settings.customWallpaperUrl && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                  <FiCheckCircle /> Custom image wallpaper currently active
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= 2. APPEARANCE TAB ================= */}
        {activeTab === "appearance" && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                // System Accents
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Accent & Theme Colors</h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Customize the signature accent color across dock highlights, buttons, and badges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accentOptions.map((accent) => {
                const isSelected = settings.accentColor === accent.id;
                return (
                  <div
                    key={accent.id}
                    onClick={() => {
                      onUpdateSettings({ accentColor: accent.id as CustomizationSettings["accentColor"] });
                      triggerSaveToast();
                    }}
                    className={`flex items-center justify-between p-4 rounded-2xl bg-zinc-900/60 border cursor-pointer transition-all ${
                      isSelected
                        ? "border-violet-500 bg-violet-600/10 shadow-md"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${accent.color} shadow-sm`} />
                      <span className="font-bold text-xs sm:text-sm text-white">{accent.label}</span>
                    </div>

                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-violet-500 text-white flex items-center justify-center text-xs">
                        <FiCheck />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= 3. DOCK & WINDOW BLUR TAB ================= */}
        {activeTab === "dock" && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                // Interface Physics
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Dock & Glass Effects</h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Configure authentic macOS physics, bottom dock magnification, and glass blur opacity.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              {/* Dock Magnification Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Dock Icon Magnification</h4>
                  <p className="text-xs text-zinc-400">
                    Smoothly scale icons as mouse cursor glides across the bottom dock.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onUpdateSettings({ dockMagnification: !settings.dockMagnification });
                    triggerSaveToast();
                  }}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    settings.dockMagnification ? "bg-violet-600" : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.dockMagnification ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Glass Blur Intensity */}
              <div className="pt-4 border-t border-zinc-800">
                <h4 className="font-bold text-white text-xs sm:text-sm mb-1">
                  Glassmorphism Blur Strength
                </h4>
                <p className="text-xs text-zinc-400 mb-3">
                  Control backdrop blur effect for floating windows, menu bar, and launchpad search.
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {(["high", "medium", "low"] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        onUpdateSettings({ blurLevel: level });
                        triggerSaveToast();
                      }}
                      className={`py-2 px-3 rounded-xl font-bold uppercase text-[11px] tracking-wider transition-all border ${
                        settings.blurLevel === level
                          ? "bg-violet-600 text-white border-violet-500 shadow-md"
                          : "bg-zinc-800/80 text-zinc-400 border-zinc-700 hover:text-white"
                      }`}
                    >
                      {level} Blur
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
