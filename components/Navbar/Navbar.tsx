"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Games", href: "/games" },
  { name: "Contact", href: "/contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 120], [0.6, 1]);
  const navScale = useTransform(scrollY, [0, 120], [0.98, 1]);

  /* close mobile menu on route change */
  useEffect(() => setIsMenuOpen(false), [pathname]);

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
            backgroundColor: scrolled
              ? "rgba(0, 0, 0, 0.75) "
              : "rgba(0, 0, 0)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(10px)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(67, 79, 250, 0.25)"
              : "0 0 0 rgba(0,0,0,0)",
            border: scrolled
              ? "2px solid rgba(198, 202, 255, 0.25)"
              : " 0px solid rgba(198, 202, 255, 0.25)",
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="max-w-[1050px] mx-auto flex items-center justify-between px-5 md:px-7 py-2.5 rounded-full"
        >
          {/* ========= LOGO ========= */}
          <Link href="/" className="group flex items-center gap-3 outline-none">
            {/* Animated Logo Container */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Professional Easing className="relative w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-cyan-500/40 transition-shadow duration-500"
            >
              <div className="relative w-15 h-10">
                <Image
                  draggable="false"
                  src="/header_logo.png"
                  alt="Dev Kartik Logo"
                  fill
                  className="object-contain brightness-0  invert" // Logo ko white banane ke liye
                />
              </div>
            </motion.div>
          </Link>

          {/* ========= DESKTOP LINKS ========= */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                >
                  <Link href={item.href} className="relative group px-6 py-2.5">
                    <motion.span
                      whileHover={{ y: -2 }}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.span>

                    {/* underline glow */}
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-1 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ========= CTA + MOBILE ========= */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link href="/contact" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative group overflow-hidden px-6 py-3 rounded-full"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative text-sm font-bold text-white uppercase tracking-wider">
                  Let’s Talk
                </span>
              </motion.div>
            </Link>

            {/* MOBILE BUTTON */}
            <motion.button
              aria-label="Toggle menu"
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
                    <Link href={item.href}>
                      <motion.span
                        whileHover={{ x: 12 }}
                        className="text-4xl font-black text-white"
                      >
                        {item.name}
                      </motion.span>
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
