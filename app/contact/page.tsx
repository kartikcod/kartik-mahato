"use client";

import { useState } from "react"; // Added for form handling
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  // Local state for inputs
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent! (UI remains intact)");
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-32 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ========= LEFT CONTENT (Original) ========= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-violet-400 font-mono text-sm mb-4">
            // Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Let’s build  
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              something great.
            </span>
          </h1>

          <p className="text-zinc-400 max-w-md leading-relaxed">
            I’m available for freelance projects, collaborations,
            or full-time opportunities.  
            If you have an idea — let’s talk.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail size={18} /> kartikmahato108@gmail.com
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Phone size={18} /> +91 7667532xxx
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: <Github size={18} />, href: "https://github.com/kartikcod" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/kartik-react-developer/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ========= RIGHT FORM (UI Unchanged) ========= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">
              Start a project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                required
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 transition"
              />

              <input
                required
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 transition"
              />

              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="relative w-full overflow-hidden rounded-xl py-3 text-sm font-bold uppercase tracking-wider"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500" />
                <span className="relative text-white">
                  Send Message
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}