"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiCopy, FiCheck, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

export default function ContactWindow() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const email = "kartikmahato108@gmail.com";

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject || `Project Inquiry from ${name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `From: ${name}\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="h-full bg-zinc-950/90 text-white overflow-y-auto p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            // Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Let's Build Something Great
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Available for freelance projects, mobile app engineering, and full-time opportunities.
          </p>
        </div>

        {/* Contact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0">
                <FiMail className="text-lg" />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-zinc-400 uppercase font-bold">Email Address</p>
                <p className="text-xs font-medium text-white truncate">{email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors ml-2 shrink-0"
              title="Copy Email"
            >
              {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0">
              <FiPhone className="text-lg" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-bold">Direct Phone</p>
              <p className="text-xs font-medium text-white">+91-7667532801</p>
            </div>
          </div>
        </div>

        {/* Message Composer Form */}
        <form onSubmit={handleSendMessage} className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase font-bold text-zinc-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase font-bold text-zinc-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Mobile App / Web Inquiry"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase font-bold text-zinc-400 mb-1.5">
              Message Details
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project scope, target deadline, or technical needs..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white text-xs uppercase font-bold tracking-wider shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <FiSend />
            <span>Send Direct Message</span>
          </button>
        </form>

        {/* Social Network Links */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://github.com/kartikcod"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center gap-2 transition-all"
          >
            <FiGithub className="text-sm" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kartik-react-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center gap-2 transition-all"
          >
            <FiLinkedin className="text-sm text-cyan-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/kartikmahato_01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center gap-2 transition-all"
          >
            <FiTwitter className="text-sm" />
            <span>Twitter / X</span>
          </a>
          <a
            href="https://www.instagram.com/coderr_kartik/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-pink-400 hover:border-pink-500/40 flex items-center gap-2 transition-all"
          >
            <FiInstagram className="text-sm text-pink-400" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
