"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const words = [
    "Hello",
    "Namaste",
    "नमस्ते",
    "Welcome",
    "स्वागत",
    "Portfolio",
    "Kartik Mahato",
  ];

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    if (index === words.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 200,
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
    },
  };

  return (
    <motion.div
      initial={{ top: 0 }}
      exit={{
        top: "-100vh",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute z-10 flex items-center text-white text-5xl font-black tracking-tighter"
          >
            <span className="mr-3 block h-3 w-3 rounded-full bg-white animate-pulse" />
            {words[index]}
          </motion.p>

          {/* SVG for Curve Transition */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-[#141414]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
