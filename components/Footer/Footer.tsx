"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Reveal animations
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/kartikcod" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kartik-react-developer/" },
    { name: "Twitter", url: "https://x.com/kartikmahato_01" },
    { name: "Instagram", url: "https://www.instagram.com/coderr_kartik/" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#050505] text-white overflow-hidden"
    >
      {/* 1. ULTRA-LARGE BACKGROUND MARQUEE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none pt-10">
        <motion.h2 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black uppercase tracking-tighter whitespace-nowrap leading-none"
        >
          KARTIK MAHATO — KARTIK MAHATO — KARTIK MAHATO —
        </motion.h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-40 pb-12">
        {/* 2. MAIN GRID */}
        <motion.div style={{ y, opacity }} className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h3 className="text-4xl font-bold mb-6 tracking-tight">
              Let's craft <br /> 
              <span className="text-zinc-500 italic font-serif">the future.</span>
            </h3>
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-white/5 w-fit px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Available for freelance</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase text-zinc-600 font-bold mb-6 tracking-widest">Navigation</p>
              <ul className="space-y-4">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a href="#" whileHover={{ x: 5 }} className="text-zinc-400 hover:text-white transition-colors">{item}</motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-xs uppercase text-zinc-600 font-bold mb-6 tracking-widest">Socials</p>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.url} 
                      whileHover={{ x: 5 }} 
                      className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                    >
                      {link.name} <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase text-zinc-600 font-bold mb-6 tracking-widest">Say Hello</p>
              <a href="mailto:kartikmahato108@gmail.com" className="text-lg hover:text-violet-400 transition-colors break-words">
                kartikmahato108@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. FINAL BOTTOM BAR */}
        <div className="border-t border-zinc-900 pt-12 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Designed by Kartik Mahato
          </div>
        </div>
      </div>

      {/* 4. MASKED GRADIENT (Subtle Glow) */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
}