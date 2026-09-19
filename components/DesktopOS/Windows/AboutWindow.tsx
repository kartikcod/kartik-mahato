"use client";

import Image from "next/image";
import { FiDownload, FiMapPin, FiMail, FiPhone, FiAward, FiCode, FiSmartphone, FiCpu } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function AboutWindow() {
  return (
    <div className="h-full flex flex-col md:flex-row bg-zinc-950/80 text-white overflow-hidden text-sm">
      {/* Finder Left Sidebar */}
      <div className="w-full md:w-56 bg-zinc-900/50 border-b md:border-b-0 md:border-r border-white/10 p-4 shrink-0 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-md">
              <Image
                src="/kartik_profile.png"
                alt="Kartik Mahato"
                fill
                priority
                className="object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
            <div>
              <h4 className="font-bold text-white leading-tight">Kartik Mahato</h4>
              <p className="text-[11px] text-zinc-400">Full Stack & Mobile</p>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-2 px-2">
              Identity
            </p>
            <div className="px-2 py-1.5 rounded-lg bg-violet-600/20 text-violet-300 font-medium flex items-center gap-2">
              <FiMapPin className="text-violet-400" />
              <span>Jharkhand, India</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white flex items-center gap-2">
              <FaGraduationCap className="text-cyan-400" />
              <span>B.Sc IT (01/2024)</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white flex items-center gap-2">
              <FiPhone className="text-emerald-400" />
              <span>+91-7667532801</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white flex items-center gap-2 truncate">
              <FiMail className="text-pink-400" />
              <span className="truncate">kartikmahato108@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800 hidden md:block">
          <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-1.5">
            Languages
          </p>
          <div className="flex flex-wrap gap-1 text-[11px] text-zinc-400">
            <span className="px-1.5 py-0.5 rounded bg-zinc-800">Hindi</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800">English</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800">Bangla</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800">Adivasi</span>
          </div>
        </div>
      </div>

      {/* Main View */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
            // Professional Summary
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-1 mb-3">
            Full Stack & React Native Developer
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            Full Stack Developer with 1+ year of professional experience building MERN stack
            web applications and <span className="text-cyan-400 font-semibold">5 production React Native apps live on the Google Play Store with 870+ installs</span>.
            Skilled in REST API design, scalable MongoDB schemas, dashboard development, push notifications,
            and high-performance UI motion.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center">
            <p className="text-2xl font-black text-white">870+</p>
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5">App Installs</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center">
            <p className="text-2xl font-black text-cyan-400">5</p>
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5">Play Store Apps</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center">
            <p className="text-2xl font-black text-violet-400">1+ Yr</p>
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5">Experience</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center">
            <p className="text-2xl font-black text-emerald-400">100%</p>
            <p className="text-[10px] uppercase tracking-wider text-zinc-400 mt-0.5">Client Rating</p>
          </div>
        </div>

        {/* Education & Background */}
        <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-zinc-300 font-bold">
            <FaGraduationCap className="text-violet-400 text-lg" />
            <span>Bachelor of Science: Information Technology (B.Sc IT)</span>
          </div>
          <p className="text-xs text-zinc-400">
            Kolhan University, Jharkhand • Graduated 01/2024
          </p>
          <p className="text-xs text-zinc-500">
            Coursework in Software Engineering, Database Systems, Web Architectures, and Object-Oriented Programming.
          </p>
        </div>

        {/* Quick Capabilities */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Core Specializations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FiSmartphone className="text-cyan-400 shrink-0" />
              <span>React Native, Expo & Google Play Store Publishing</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FiCode className="text-violet-400 shrink-0" />
              <span>Next.js, React, Tailwind & Framer Motion</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FiCpu className="text-emerald-400 shrink-0" />
              <span>Node.js, Express.js, REST APIs & Microservices</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <FiAward className="text-amber-400 shrink-0" />
              <span>MongoDB, Supabase, Firebase Cloud Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
