"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Contact", href: "/contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  /* scroll-reactive glass */
  const navOpacity = useTransform(scrollY, [0, 120], [0.6, 1]);
  const navScale = useTransform(scrollY, [0, 120], [0.98, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ opacity: navOpacity, scale: navScale }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 lg:px-20 py-6"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.25)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(10px)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(0,0,0,0.25)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-8 py-4 rounded-full border border-white/10"
        >
          {/* ========= LOGO ========= */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-black text-lg">K</span>
            </motion.div>

            <motion.span
              whileHover={{ letterSpacing: "0.06em" }}
              className="text-white font-black text-xl tracking-tight hidden sm:block"
            >
              Kartik
            </motion.span>
          </Link>

          {/* ========= DESKTOP LINKS ========= */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-2.5 text-sm font-medium text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* magnetic glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ========= CTA + MOBILE ========= */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:block relative group overflow-hidden px-6 py-3 rounded-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.3 }}
              />
              <Link
                href="/contact"
                className="relative text-sm font-bold text-white uppercase tracking-wider"
              >
                Let’s Talk
              </Link>
            </motion.a>

            {/* MOBILE BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              {["top", "mid", "bot"].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    rotate:
                      isMenuOpen && i === 0
                        ? 45
                        : isMenuOpen && i === 2
                          ? -45
                          : 0,
                    y:
                      isMenuOpen && i === 0
                        ? 6
                        : isMenuOpen && i === 2
                          ? -6
                          : 0,
                    opacity: isMenuOpen && i === 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-white rounded-full"
                />
              ))}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-zinc-950 border-l border-white/10 z-[95] p-8"
            >
              <nav className="space-y-6 mt-28">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, ease: EASE }}
                  >
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.div
                        whileHover={{ x: 12 }}
                        className="text-4xl font-black text-white"
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
