"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-violet-400 font-mono text-sm mb-6"
        >
          // Projects
        </motion.p>

        {/* Big heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
        >
          Projects are  
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            coming soon.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          className="mt-6 text-zinc-400 leading-relaxed"
        >
          I’m currently preparing detailed case studies of my recent work.  
          Stay tuned — exciting projects will be published here very soon.
        </motion.p>

        {/* Back to home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          className="mt-10"
        >
          <Link
            href="/"
            className="inline-block relative overflow-hidden px-8 py-3 rounded-full group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:scale-110 transition" />
            <span className="relative text-sm font-bold uppercase tracking-wider text-white">
              Back to Home
            </span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
