"use client";

import { useState } from "react";

type Player = "X" | "O" | null;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(i: number) {
    if (board[i] || winner) return;

    const next = [...board];
    next[i] = isXTurn ? "X" : "O";

    setBoard(next);
    setIsXTurn(!isXTurn);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-4xl font-black mb-6">Tic Tac Toe</h1>

      <p className="mb-4 text-zinc-400">
        {winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-24 h-24 text-3xl font-bold bg-white/5 border border-white/10 rounded-xl hover:bg-white/10"
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={reset}
        className="mt-6 px-6 py-2 rounded-full bg-violet-500 font-bold"
      >
        Restart
      </button>
    </main>
  );
}

function calculateWinner(board: Player[]): Player {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
