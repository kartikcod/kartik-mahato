"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

const GRID_SIZE = 20;
const TILE = 20;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);

  /* ================= GAME LOOP ================= */

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = {
          x: prev[0].x + dir.x,
          y: prev[0].y + dir.y,
        };

        /* collision with wall */
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= GRID_SIZE ||
          head.y >= GRID_SIZE
        ) {
          setRunning(false);
          return prev;
        }

        /* collision with self */
        if (prev.some((p) => p.x === head.x && p.y === head.y)) {
          setRunning(false);
          return prev;
        }

        const newSnake = [head, ...prev];

        /* eat food */
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood({
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [dir, food, running]);

  /* ================= DRAW ================= */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* draw snake */
    ctx.fillStyle = "#8b5cf6";
    snake.forEach((p) => {
      ctx.fillRect(p.x * TILE, p.y * TILE, TILE - 2, TILE - 2);
    });

    /* draw food */
    ctx.fillStyle = "#22c55e";
    ctx.fillRect(food.x * TILE, food.y * TILE, TILE - 2, TILE - 2);
  }, [snake, food]);

  /* ================= CONTROLS ================= */

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp" && dir.y !== 1) setDir({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && dir.y !== -1) setDir({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && dir.x !== 1) setDir({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && dir.x !== -1) setDir({ x: 1, y: 0 });
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir]);

  /* ================= RESET ================= */

  function reset() {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDir({ x: 1, y: 0 });
    setScore(0);
    setRunning(true);
  }

  /* ================= UI ================= */

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-black mb-4">Snake Game</h1>

      <p className="text-zinc-400 mb-4">Score: {score}</p>

      {!running && (
        <p className="text-red-500 mb-4 font-bold">Game Over</p>
      )}

      <canvas
        ref={canvasRef}
        width={GRID_SIZE * TILE}
        height={GRID_SIZE * TILE}
        className="border border-white/10 rounded-lg"
      />

      <button
        onClick={reset}
        className="mt-6 px-6 py-2 rounded-full bg-violet-500 font-bold hover:bg-violet-600"
      >
        Restart
      </button>

      <p className="mt-6 text-xs text-zinc-500">
        Use arrow keys to move
      </p>
    </main>
  );
}
