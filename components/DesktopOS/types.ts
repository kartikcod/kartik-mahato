import React from "react";

export type AppId =
  | "finder"
  | "appstore"
  | "terminal"
  | "experience"
  | "resume"
  | "contact"
  | "games"
  | "safari"
  | "settings"
  | "kudmi-matrimony"
  | "jharkhand-ekalyan"
  | "save-prompts"
  | "jac-results"
  | "footimes"
  | "game-flappy"
  | "game-snake"
  | "game-memory"
  | "game-tictactoe";

export interface AppConfig {
  id: AppId;
  name: string;
  category: "core" | "project" | "utility" | "game";
  iconGradient: string;
  icon: React.ReactNode;
  imageIcon?: string;
  gameUrl?: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  defaultWidth?: number;
  defaultHeight?: number;
  projectId?: string;
}

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  closingType?: "close" | "minimize";
  position?: { x: number; y: number };
  size?: { width: number; height: number };
}
