"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-6xl mx-auto w-full">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-violet-400 font-mono text-sm mb-6"
          >
            // About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            Crafting digital  
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              experiences with motion.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-lg md:text-2xl text-zinc-300 leading-relaxed"
          >
            I’m a creative frontend developer focused on building
            **high-performance, visually immersive web experiences**.
            My work blends **design precision, motion systems, and
            scalable architecture** to create interfaces that feel
            smooth, modern, and meaningful.
          </motion.p>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-3xl md:text-5xl font-bold mb-16"
          >
            Core Expertise
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Next.js & React Architecture",
              "Motion Animations",
              "Tailwind & Design Systems",
              "Node.js Backend Logic",
              "Performance Optimization",
              "Modern UI/UX Thinking",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                className="rounded-2xl border border-white/10 bg-white/5
                           backdrop-blur-lg p-6 text-zinc-300
                           hover:border-violet-500/40 hover:bg-white/10
                           transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            Let’s create something  
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              extraordinary.
            </span>
          </motion.h3>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block relative overflow-hidden px-10 py-4 rounded-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <Link href="/contact" className="relative text-sm font-bold uppercase tracking-wider text-white">
              Start a Project
            </Link>
          </motion.a>
        </div>
      </section>

    </main>
  );
}
