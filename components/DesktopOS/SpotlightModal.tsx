"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { APPS } from "./appsData";
import { AppConfig, AppId } from "./types";
import { FiSearch, FiArrowRight, FiCommand, FiX } from "react-icons/fi";

interface SpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectApp: (id: AppId) => void;
}

export default function SpotlightModal({
  isOpen,
  onClose,
  onSelectApp,
}: SpotlightModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredApps = APPS.filter(
    (app) =>
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredApps.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? (filteredApps.length || 1) - 1 : prev - 1
      );
    } else if (e.key === "Enter" && filteredApps[selectedIndex]) {
      e.preventDefault();
      onSelectApp(filteredApps[selectedIndex].id);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Spotlight Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl rounded-2xl bg-zinc-950/90 border border-white/20 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <FiSearch className="text-zinc-400 text-lg" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search apps, projects, skills, or experience..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm sm:text-base placeholder-zinc-500"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-zinc-400 hover:text-white"
              >
                <FiX />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filteredApps.length > 0 ? (
                filteredApps.map((app, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={app.id}
                      onClick={() => {
                        onSelectApp(app.id);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? "bg-violet-600/30 border border-violet-500/30 text-white"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`relative w-10 h-10 rounded-xl bg-gradient-to-tr ${app.iconGradient} flex items-center justify-center text-white text-base shadow-md shrink-0 overflow-hidden`}
                        >
                          {app.imageIcon ? (
                            <Image
                              src={app.imageIcon}
                              alt={app.name}
                              fill
                              sizes="40px"
                              className="object-cover rounded-xl"
                            />
                          ) : (
                            app.icon
                          )}
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-sm text-white truncate">
                            {app.name}
                          </p>
                          <p className="text-xs text-zinc-400 truncate">
                            {app.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        {app.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-cyan-300">
                            {app.badge}
                          </span>
                        )}
                        <FiArrowRight
                          className={`text-sm transition-transform ${
                            isSelected ? "translate-x-1 text-cyan-400" : "text-zinc-600"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-zinc-500 text-xs">
                  No matching apps or projects found.
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2 bg-zinc-900/50 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span>Use ↑↓ to navigate</span>
              <span>ESC to cancel • ENTER to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
