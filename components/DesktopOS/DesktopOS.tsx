"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { AppId, WindowState } from "./types";
import { APPS } from "./appsData";
import {
  WALLPAPERS,
  CustomizationSettings,
  DEFAULT_SETTINGS,
} from "./themeData";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import LaunchpadGrid from "./LaunchpadGrid";
import WindowFrame from "./WindowFrame";
import SpotlightModal from "./SpotlightModal";

// Windows
import AboutWindow from "./Windows/AboutWindow";
import ProjectAppWindow from "./Windows/ProjectAppWindow";
import TerminalWindow from "./Windows/TerminalWindow";
import ExperienceWindow from "./Windows/ExperienceWindow";
import ResumeWindow from "./Windows/ResumeWindow";
import ContactWindow from "./Windows/ContactWindow";
import ProjectsGridWindow from "./Windows/ProjectsGridWindow";
import SettingsWindow from "./Windows/SettingsWindow";

export default function DesktopOS() {
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [topZ, setTopZ] = useState(20);
  const [activeWindowId, setActiveWindowId] = useState<AppId | null>(null);

  // Customization Settings with LocalStorage persistence
  const [settings, setSettings] = useState<CustomizationSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kartik_os_settings");
      if (saved) {
        setSettings((prev) => ({ ...prev, ...JSON.parse(saved) }));
      }
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
  }, []);

  const updateSettings = (newSettings: Partial<CustomizationSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem("kartik_os_settings", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save settings:", e);
      }
      return updated;
    });
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem("kartik_os_settings");
    } catch (e) {
      console.error("Failed to reset settings:", e);
    }
  };

  // Initialize window states for all apps
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(() => {
    const initial: Partial<Record<AppId, WindowState>> = {};
    APPS.forEach((app) => {
      initial[app.id] = {
        id: app.id,
        title: app.name,
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        zIndex: 10,
        size: {
          width: app.defaultWidth || 760,
          height: app.defaultHeight || 540,
        },
      };
    });
    return initial as Record<AppId, WindowState>;
  });

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openApp = (id: AppId) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((curr) => ({
        ...curr,
        [id]: {
          ...curr[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      }));
      return nextZ;
    });
    setActiveWindowId(id);
  };

  const closeWindow = (id: AppId) => {
    setWindows((curr) => ({
      ...curr,
      [id]: {
        ...curr[id],
        closingType: "close",
        isOpen: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: AppId) => {
    setWindows((curr) => ({
      ...curr,
      [id]: {
        ...curr[id],
        closingType: "minimize",
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const maximizeWindow = (id: AppId) => {
    setWindows((curr) => ({
      ...curr,
      [id]: {
        ...curr[id],
        isMaximized: !curr[id].isMaximized,
      },
    }));
  };

  const focusWindow = (id: AppId) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setWindows((curr) => ({
        ...curr,
        [id]: {
          ...curr[id],
          zIndex: nextZ,
        },
      }));
      return nextZ;
    });
    setActiveWindowId(id);
  };

  const toggleMinimize = (id: AppId) => {
    const win = windows[id];
    if (!win || !win.isOpen) {
      openApp(id);
    } else if (win.isMinimized) {
      openApp(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  // Open App IDs for Dock indicator dots
  const openAppIds = Object.values(windows)
    .filter((w) => w.isOpen && !w.isMinimized)
    .map((w) => w.id);

  const activeAppConfig = activeWindowId
    ? APPS.find((a) => a.id === activeWindowId)
    : undefined;

  // Active Wallpaper Preset
  const currentWallpaper =
    WALLPAPERS.find((w) => w.id === settings.wallpaperId) || WALLPAPERS[0];

  return (
    <div className="relative w-full min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans select-none">
      {/* Dynamic Customizable Wallpaper */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {settings.customWallpaperUrl ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${settings.customWallpaperUrl})` }}
          >
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>
        ) : (
          <>
            {/* Gradient Base */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${currentWallpaper.backgroundClass} transition-colors duration-700`}
            />

            {/* Ambient Light Orbs with Theme Glow */}
            {currentWallpaper.orbs.map((orb, i) => (
              <div
                key={i}
                className={`absolute rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${orb.color} ${orb.position} ${orb.size}`}
              />
            ))}
          </>
        )}

        {/* Film grain texture */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Top Menu Bar */}
      <MenuBar
        onOpenSpotlight={() => setSpotlightOpen(true)}
        activeAppTitle={activeAppConfig ? activeAppConfig.name : "Launchpad"}
        onOpenApp={(id) => openApp(id as AppId)}
      />

      {/* Main Launchpad Grid */}
      <main className="relative z-10 pt-10 min-h-screen flex flex-col justify-center">
        <LaunchpadGrid
          onOpenApp={openApp}
          onOpenSpotlight={() => setSpotlightOpen(true)}
        />
      </main>

      {/* Floating Draggable Windows with macOS Genie & Scale Animations */}
      <AnimatePresence>
        {Object.values(windows).map((win) => {
          if (!win.isOpen || win.isMinimized) return null;

          let content: React.ReactNode = null;

          if (win.id === "finder") {
            content = <AboutWindow />;
          } else if (win.id === "appstore") {
            content = <ProjectsGridWindow onOpenApp={(appId) => openApp(appId as AppId)} />;
          } else if (win.id === "terminal") {
            content = <TerminalWindow />;
          } else if (win.id === "experience") {
            content = <ExperienceWindow />;
          } else if (win.id === "resume") {
            content = <ResumeWindow />;
          } else if (win.id === "contact") {
            content = <ContactWindow />;
          } else if (win.id === "settings") {
            content = (
              <SettingsWindow
                settings={settings}
                onUpdateSettings={updateSettings}
                onResetSettings={resetSettings}
              />
            );
          } else if (
            [
              "kudmi-matrimony",
              "jharkhand-ekalyan",
              "save-prompts",
              "jac-results",
              "footimes",
            ].includes(win.id)
          ) {
            content = <ProjectAppWindow projectId={win.id} />;
          } else if (win.id.startsWith("game-")) {
            const gameApp = APPS.find((a) => a.id === win.id);
            const gamePath = gameApp?.gameUrl || `/games/${win.id.replace("game-", "")}`;
            content = (
              <div className="w-full h-full flex flex-col bg-black overflow-hidden select-none">
                {/* Game Window Header Bar */}
                <div className="h-9 px-3 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between text-xs text-zinc-400 select-none shrink-0">
                  <div className="flex items-center gap-2 font-medium text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{gameApp?.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 uppercase font-mono">
                      {gameApp?.badge || "Arcade"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const iframe = document.getElementById(`iframe-${win.id}`) as HTMLIFrameElement;
                        if (iframe) {
                          iframe.src = iframe.src;
                        }
                      }}
                      className="hover:text-white transition-colors text-[11px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                      title="Restart Game"
                    >
                      ↺ Restart
                    </button>
                    <a
                      href={gamePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors text-[11px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1"
                    >
                      Fullscreen ↗
                    </a>
                  </div>
                </div>
                {/* Interactive Play Canvas Area */}
                <div className="flex-1 w-full h-full relative bg-black">
                  <iframe
                    id={`iframe-${win.id}`}
                    src={gamePath}
                    className="w-full h-full border-none"
                    title={gameApp?.name}
                  />
                </div>
              </div>
            );
          } else if (win.id === "games" || win.id === "safari") {
            content = (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <p className="text-xl font-bold text-white">Launching External Route...</p>
                <p className="text-xs text-zinc-400 max-w-sm">
                  Click below to navigate directly to the {win.title} page.
                </p>
                <a
                  href={win.id === "games" ? "/games" : "/project"}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Go to {win.title}
                </a>
              </div>
            );
          }

          return (
            <WindowFrame
              key={win.id}
              windowState={win}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onMaximize={maximizeWindow}
              onFocus={focusWindow}
            >
              {content}
            </WindowFrame>
          );
        })}
      </AnimatePresence>

      {/* Animated Bottom Dock */}
      <Dock
        openAppIds={openAppIds}
        onOpenApp={openApp}
        onToggleMinimize={toggleMinimize}
        magnificationEnabled={settings.dockMagnification}
      />

      {/* ⌘K Spotlight Command Palette */}
      <SpotlightModal
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        onSelectApp={openApp}
      />
    </div>
  );
}
