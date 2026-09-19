import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Arcade Games Hub | Interactive Mini-Games by Kartik Mahato",
  description:
    "Play retro mini-games including Snake Game, Flappy Bird, Memory Match, and Tic Tac Toe built with React, Canvas, and Framer Motion by Kartik Mahato.",
  keywords: [
    "Arcade Games",
    "Flappy Bird React",
    "Snake Game Canvas",
    "Memory Match Game",
    "Tic Tac Toe React",
    "Web Games by Kartik Mahato",
  ],
  alternates: {
    canonical: "/games",
  },
  openGraph: {
    title: "Arcade Games Hub | Interactive Mini-Games by Kartik Mahato",
    description:
      "Play playable retro games built directly in React and HTML5 Canvas by Kartik Mahato.",
    url: "/games",
  },
};

export default function GamesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
