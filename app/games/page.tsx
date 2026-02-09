"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"; // Image import karein

const games = [
  {
    title: "Tic Tac Toe",
    desc: "Classic 2-player strategy game with a modern neon twist.",
    href: "/games/tictactoe",
    color: "from-violet-600/40 via-violet-500/10",
    image: "/games/tictactoe.png", // Public folder mein image path rakhein
  },
  {
    title: "Memory Match",
    desc: "Test your brain by matching neon card pairs.",
    href: "/games/memory",
    color: "from-cyan-500/40 via-cyan-400/10",
    image: "/games/memory.png",
  },
  {
    title: "Snake Game",
    desc: "Survival experience in a sleek digital grid.",
    href: "/games/snake",
    color: "from-emerald-500/40 via-emerald-400/10",
    image: "/games/snake.png",
  },
  {
    title: "Flappy Bird",
    desc: "Fly through endless pipes and beat your high score.",
    href: "/games/flappy",
    color: "from-violet-500/40 via-cyan-400/10",
    image: "/games/flappy.png",
  }  
];

function GameCard({ game }: { game: (typeof games)[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Link href={game.href}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        className="group relative h-80 rounded-[2.5rem] border border-white/5 bg-[#0A0A0A] p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:border-white/20"
      >
        {/* --- Background Image Layer --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover opacity-30 grayscale group-hover:scale-110 group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
          {/* Overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
        </div>

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 z-1 bg-gradient-to-br ${game.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
        />

        {/* Subtle Shimmer Line */}
        <div className="absolute -inset-x-20 top-0 h-[2px] z-2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div
          style={{ transform: "translateZ(60px)" }}
          className="relative z-10 h-full flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-black leading-none text-white ">
                {game.title}
              </h2>
              <div className="p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight className="text-violet-400" size={24} />
              </div>
            </div>
            <p className="text-zinc-200 font-medium leading-relaxed text-sm max-w-[90%] drop-shadow-md">
              {game.desc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full group-hover:w-20 transition-all duration-700" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-300 group-hover:text-white transition-colors">
              Play Now
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-6 py-40 selection:bg-violet-500/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-violet-500 text-[10px] font-black uppercase tracking-[0.4em]">
              Playground
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              Mini
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent italic">
                Games.
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
