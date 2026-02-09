"use client";

import { useState } from "react";

const emojis = ["🎮","🚀","🔥","💎","⚡","🌟"];

function shuffle() {
  return [...emojis, ...emojis]
    .sort(() => Math.random() - 0.5)
    .map((e, i) => ({ id: i, emoji: e, flipped: false, matched: false }));
}

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffle());
  const [selected, setSelected] = useState<number[]>([]);

  function handleClick(i: number) {
    if (selected.length === 2 || cards[i].flipped) return;

    const newCards = [...cards];
    newCards[i].flipped = true;

    const newSelected = [...selected, i];
    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [a, b] = newSelected;

      if (newCards[a].emoji === newCards[b].emoji) {
        newCards[a].matched = true;
        newCards[b].matched = true;
        setSelected([]);
      } else {
        setTimeout(() => {
          newCards[a].flipped = false;
          newCards[b].flipped = false;
          setCards([...newCards]);
          setSelected([]);
        }, 800);
      }
    }
  }

  function reset() {
    setCards(shuffle());
    setSelected([]);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-black mb-8">Memory Match</h1>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, i) => (
          <button
            key={card.id}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-white/5 border border-white/10 rounded-xl text-2xl"
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </button>
        ))}
      </div>
      <button
        onClick={reset}
        className="mt-6 px-6 py-2 rounded-full bg-violet-500 font-bold hover:bg-violet-600"
      >
        Restart
      </button>
    </main>
  );
}
