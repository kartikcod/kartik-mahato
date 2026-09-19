"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { AppConfig, AppId } from "./types";
import { APPS } from "./appsData";

interface DockProps {
  openAppIds: AppId[];
  onOpenApp: (id: AppId) => void;
  onToggleMinimize: (id: AppId) => void;
  magnificationEnabled?: boolean;
}

interface DockIconProps {
  app: AppConfig;
  mouseX: MotionValue<number>;
  isOpen: boolean;
  onClick: () => void;
  magnificationEnabled?: boolean;
}

function DockIcon({ app, mouseX, isOpen, onClick, magnificationEnabled = true }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Calculate distance from cursor to icon center
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale from 1 to 1.45 based on distance if enabled, else fixed width
  const widthSync = useTransform(
    distance,
    [-120, 0, 120],
    magnificationEnabled ? [44, 66, 44] : [44, 44, 44]
  );
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 12 });

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative flex flex-col items-center justify-end group cursor-pointer"
    >
      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: -8, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -top-7 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-white/15 text-[11px] font-medium text-white shadow-xl whitespace-nowrap z-50 pointer-events-none"
        >
          {app.name}
        </motion.div>
      )}

      {/* Squircle Icon */}
      <motion.div
        style={{ width, height: width }}
        whileTap={{ scale: 0.88 }}
        className={`relative rounded-2xl bg-gradient-to-tr ${app.iconGradient} flex items-center justify-center shadow-lg border border-white/20 p-2 overflow-hidden`}
      >
        {app.imageIcon ? (
          <Image
            src={app.imageIcon}
            alt={app.name}
            fill
            sizes="64px"
            className="object-cover rounded-2xl"
          />
        ) : (
          <>
            {/* Gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/20 pointer-events-none" />

            <div className="scale-75 sm:scale-90 flex items-center justify-center text-white">
              {app.icon}
            </div>
          </>
        )}
      </motion.div>

      {/* Running App Indicator Dot */}
      <div className="h-1.5 flex items-center justify-center mt-1">
        {isOpen && (
          <motion.div
            layoutId={`dot-${app.id}`}
            className="w-1.5 h-1.5 rounded-full bg-white shadow-sm"
          />
        )}
      </div>
    </div>
  );
}

export default function Dock({
  openAppIds,
  onOpenApp,
  onToggleMinimize,
  magnificationEnabled = true,
}: DockProps) {
  const mouseX = useMotionValue<number>(Infinity);

  // Selected core dock apps
  const dockApps = APPS.filter(
    (app) =>
      [
        "finder",
        "appstore",
        "kudmi-matrimony",
        "save-prompts",
        "terminal",
        "experience",
        "resume",
        "contact",
        "settings",
      ].includes(app.id)
  );

  return (
    <nav aria-label="Desktop Dock" className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[90] max-w-[96vw]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex items-end gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-[26px] bg-zinc-950/60 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-x-auto no-scrollbar"
      >
        {dockApps.map((app) => (
          <DockIcon
            key={app.id}
            app={app}
            mouseX={mouseX}
            isOpen={openAppIds.includes(app.id)}
            magnificationEnabled={magnificationEnabled}
            onClick={() => {
              if (openAppIds.includes(app.id)) {
                onToggleMinimize(app.id);
              } else {
                onOpenApp(app.id);
              }
            }}
          />
        ))}
      </motion.div>
    </nav>
  );
}
