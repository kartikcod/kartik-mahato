"use client";

import { useEffect, useRef, useState } from "react";

type Pipe = { x: number; gapY: number };

const WIDTH = 400;
const HEIGHT = 600;

const GRAVITY = 0.5;
const JUMP = -8;
const PIPE_WIDTH = 60;
const GAP = 150;
const SPEED = 2.5;

export default function FlappyBird() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [birdY, setBirdY] = useState(HEIGHT / 2);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState<Pipe[]>([{ x: WIDTH, gapY: 250 }]);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(true);

  /* ================= GAME LOOP ================= */

  useEffect(() => {
    if (!running) return;

    const loop = setInterval(() => {
      setVelocity((v) => v + GRAVITY);
      setBirdY((y) => y + velocity);

      setPipes((prev) => {
        let newPipes = prev.map((p) => ({ ...p, x: p.x - SPEED }));

        /* new pipe spawn */
        if (newPipes[newPipes.length - 1].x < WIDTH - 200) {
          newPipes.push({
            x: WIDTH,
            gapY: 120 + Math.random() * (HEIGHT - 240),
          });
        }

        /* remove offscreen */
        if (newPipes[0].x < -PIPE_WIDTH) {
          newPipes.shift();
          setScore((s) => s + 1);
        }

        return newPipes;
      });

      /* ground or ceiling collision */
      if (birdY < 0 || birdY > HEIGHT) setRunning(false);

      /* pipe collision */
      pipes.forEach((p) => {
        const inPipeX = 80 > p.x && 80 < p.x + PIPE_WIDTH;
        const hitTop = birdY < p.gapY - GAP / 2;
        const hitBottom = birdY > p.gapY + GAP / 2;

        if (inPipeX && (hitTop || hitBottom)) setRunning(false);
      });
    }, 16);

    return () => clearInterval(loop);
  }, [velocity, pipes, birdY, running]);

  /* ================= DRAW ================= */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* background */
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    /* bird */
    ctx.fillStyle = "#8b5cf6";
    ctx.beginPath();
    ctx.arc(80, birdY, 12, 0, Math.PI * 2);
    ctx.fill();

    /* pipes */
    ctx.fillStyle = "#22c55e";
    pipes.forEach((p) => {
      ctx.fillRect(p.x, 0, PIPE_WIDTH, p.gapY - GAP / 2);
      ctx.fillRect(
        p.x,
        p.gapY + GAP / 2,
        PIPE_WIDTH,
        HEIGHT - p.gapY
      );
    });

    /* score */
    ctx.fillStyle = "#fff";
    ctx.font = "24px sans-serif";
    ctx.fillText(`Score: ${score}`, 20, 40);
  }, [birdY, pipes, score]);

  /* ================= CONTROLS ================= */

  useEffect(() => {
    function jump() {
      if (!running) return;
      setVelocity(JUMP);
    }

    window.addEventListener("keydown", jump);
    window.addEventListener("click", jump);

    return () => {
      window.removeEventListener("keydown", jump);
      window.removeEventListener("click", jump);
    };
  }, [running]);

  /* ================= RESET ================= */

  function reset() {
    setBirdY(HEIGHT / 2);
    setVelocity(0);
    setPipes([{ x: WIDTH, gapY: 250 }]);
    setScore(0);
    setRunning(true);
  }

  /* ================= UI ================= */

  return (
    <main className="min-h-screen bg-black text-white flex flex-col my-14 items-center justify-center">

      <h1 className="text-4xl font-black mb-4">Flappy Bird</h1>

      {!running && (
        <p className="text-red-500 mb-4 font-bold">
          Game Over — Score: {score}
        </p>
      )}

      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        className="border border-white/10 rounded-lg"
      />

      <button
        onClick={reset}
        className="mt-6 px-6 py-2 rounded-full bg-violet-500 font-bold hover:bg-violet-600"
      >
        Restart
      </button>

      <p className="mt-4 text-xs text-zinc-500">
        Press any key or click to jump
      </p>
    </main>
  );
}
