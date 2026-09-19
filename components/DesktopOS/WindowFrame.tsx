"use client";

import { motion } from "framer-motion";
import { WindowState } from "./types";
import { FiMinus, FiSquare, FiX, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { APPS } from "./appsData";

interface WindowFrameProps {
  windowState: WindowState;
  onClose: (id: WindowState["id"]) => void;
  onMinimize: (id: WindowState["id"]) => void;
  onMaximize: (id: WindowState["id"]) => void;
  onFocus: (id: WindowState["id"]) => void;
  children: React.ReactNode;
}

export default function WindowFrame({
  windowState,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}: WindowFrameProps) {
  const isMaximized = windowState.isMaximized;
  const appConfig = APPS.find((a) => a.id === windowState.id);
  const isMinimizing = windowState.closingType === "minimize";

  // Determine if there is a direct standalone page route
  let pageRoute: string | null = null;
  if (windowState.id === "finder") pageRoute = "/about";
  else if (windowState.id === "appstore") pageRoute = "/project";
  else if (windowState.id === "contact") pageRoute = "/contact";
  else if (windowState.id === "games") pageRoute = "/games";

  return (
    <div className="fixed inset-0 z-[120] pointer-events-none flex items-center justify-center p-3 sm:p-6">
      <motion.div
        drag={!isMaximized}
        dragMomentum={false}
        dragElastic={0.05}
        onMouseDown={() => onFocus(windowState.id)}
        initial={{
          opacity: 0,
          scale: windowState.closingType === "minimize" ? 0.2 : 0.88,
          y: windowState.closingType === "minimize" ? 380 : 35,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 360,
            damping: 28,
          },
        }}
        exit={{
          opacity: 0,
          scale: isMinimizing ? 0.15 : 0.82,
          y: isMinimizing ? 430 : -25,
          filter: isMinimizing ? "blur(6px)" : "blur(12px)",
          transition: {
            duration: isMinimizing ? 0.38 : 0.22,
            ease: isMinimizing ? [0.32, 0.72, 0, 1] : [0.16, 1, 0.3, 1],
          },
        }}
        style={{
          zIndex: 100 + windowState.zIndex,
          width: isMaximized
            ? "100vw"
            : `min(94vw, ${windowState.size?.width || 780}px)`,
          height: isMaximized
            ? "calc(100vh - 32px)"
            : `min(82vh, ${windowState.size?.height || 540}px)`,
        }}
        className={`pointer-events-auto relative flex flex-col rounded-2xl bg-zinc-950/95 border border-white/15 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden ${
          isMaximized ? "fixed inset-0 top-[28px] rounded-none" : ""
        }`}
      >
        {/* macOS Window Title Bar */}
        <div
          className="h-10 px-4 bg-zinc-900/95 border-b border-white/10 flex items-center justify-between select-none cursor-grab active:cursor-grabbing shrink-0"
          onDoubleClick={() => onMaximize(windowState.id)}
        >
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2 group/traffic">
            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(windowState.id);
              }}
              className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-black opacity-90 hover:opacity-100 transition-opacity"
              title="Close"
            >
              <FiX className="text-[8px] opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
            </button>

            {/* Minimize */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(windowState.id);
              }}
              className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-black opacity-90 hover:opacity-100 transition-opacity"
              title="Minimize"
            >
              <FiMinus className="text-[8px] opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
            </button>

            {/* Maximize */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMaximize(windowState.id);
              }}
              className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-black opacity-90 hover:opacity-100 transition-opacity"
              title="Expand / Fullscreen"
            >
              <FiSquare className="text-[7px] opacity-0 group-hover/traffic:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Title & Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 truncate max-w-[200px] sm:max-w-[340px]">
            <span>{windowState.title}</span>
            {appConfig?.badge && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-cyan-300">
                {appConfig.badge}
              </span>
            )}
          </div>

          {/* Right Action: Open as Full Page Link (if route exists) */}
          <div className="flex items-center gap-2">
            {pageRoute && (
              <Link
                href={pageRoute}
                className="flex items-center gap-1 text-[10px] font-semibold text-cyan-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 transition-colors"
                title={`Open full ${pageRoute} page`}
              >
                <span className="hidden sm:inline">Open Full Page</span>
                <FiExternalLink />
              </Link>
            )}
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
              macOS
            </span>
          </div>
        </div>

        {/* Window Body */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
