"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/kartikcod", icon: "→" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kartik-react-developer/", icon: "→" },
    { name: "Twitter", url: "https://x.com/kartikmahato_01", icon: "→" },
    { name: "Instagram", url: "https://www.instagram.com/coderr_kartik/", icon: "→" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/project" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white overflow-hidden "
    >
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <motion.h2
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="text-[10vw] font-black uppercase whitespace-nowrap"
        >
          KARTIK MAHATO 
        </motion.h2>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Footer Content */}
        <motion.div
          style={{ y, opacity }}
          className="py-20 md:py-32">

          {/* Middle Section - Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 border-t border-b border-zinc-800 py-16">
            {/* Column 1 - About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Kartik Mahato
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                A creative developer and designer crafting exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for freelance
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 5, color: "#a78bfa" }}
                      className="text-zinc-300 hover:text-violet-400 transition-colors inline-block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-400">
                Follow Me
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 5 }}
                      className="text-zinc-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {link.icon}
                      </motion.span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-400">
                Get In Touch
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <motion.a
                    href="mailto:kartik@example.com"
                    whileHover={{ x: 5, color: "#a78bfa" }}
                    className="text-zinc-300 hover:text-violet-400 transition-all inline-block"
                  >
                    kartikmahato108@gmail.com
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ x: 5, color: "#a78bfa" }}
                    className="text-zinc-300 hover:text-violet-400 transition-all inline-block"
                  >
                    +91 7667532xxx
                  </motion.a>
                </li>
                <li className="text-zinc-400">
                  Based in India
                  <br />
                  Working Worldwide
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500"
          >
            <div className="flex flex-wrap items-center gap-6">
              <motion.p whileHover={{ color: "#a78bfa" }} className="transition-colors">
                © {new Date().getFullYear()} Kartik Mahato. All rights reserved.
              </motion.p>
              <div className="flex gap-6">
                <motion.a
                  href="#"
                  whileHover={{ color: "#a78bfa", y: -2 }}
                  className="hover:text-violet-400 transition-all"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: "#a78bfa", y: -2 }}
                  className="hover:text-violet-400 transition-all"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span>Designed & Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ♥
              </motion.span>
              <span>by Kartik</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
      />
    </footer>
  );
}
