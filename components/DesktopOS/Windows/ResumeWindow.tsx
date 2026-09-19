"use client";

import { FiDownload, FiExternalLink, FiMail, FiPhone, FiMapPin, FiPrinter } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function ResumeWindow() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-full bg-zinc-950/95 text-white overflow-y-auto p-4 sm:p-6 md:p-8">
      {/* Action Toolbar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
        <div>
          <h3 className="font-bold text-white text-sm sm:text-base">Kartik_Mahato_Resume.pdf</h3>
          <p className="text-[11px] text-zinc-400">Full Stack & Mobile Developer • Updated 2026</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <FiPrinter />
            <span>Print</span>
          </button>
          <a
            href="mailto:kartikmahato108@gmail.com?subject=Job%20Opportunity%20-%20Kartik%20Mahato"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
          >
            <FiDownload />
            <span>Request PDF</span>
          </a>
        </div>
      </div>

      {/* Styled Resume Document Sheet */}
      <div className="max-w-3xl mx-auto bg-black border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 shadow-2xl text-xs sm:text-sm">
        {/* Header */}
        <div className="text-center pb-6 border-b border-zinc-800">
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Kartik Mahato
          </h1>
          <p className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-widest mt-1">
            Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-3 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1"><FiPhone /> +91-7667532801</span>
            <span>•</span>
            <span className="flex items-center gap-1"><FiMail /> kartikmahato108@gmail.com</span>
            <span>•</span>
            <span className="flex items-center gap-1"><FiMapPin /> Jharkhand, India</span>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Professional Summary
          </h3>
          <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
            Full Stack Developer with 1+ year of experience building MERN stack web applications
            and 5 React Native apps live on the Google Play Store with 870+ installs. Experienced
            in REST API design, dashboard development, push notifications, and performance optimization
            using React, Next.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            <p><strong className="text-white">Frontend:</strong> React.js, Next.js, Tailwind CSS, shadcn/ui, Framer Motion</p>
            <p><strong className="text-white">Mobile:</strong> React Native, Expo, Push Notifications, Play Store</p>
            <p><strong className="text-white">Backend & DB:</strong> Node.js, Express.js, REST APIs, MongoDB, Supabase</p>
            <p><strong className="text-white">Tools & Cloud:</strong> Git, Postman, Vercel, Hostinger, GoDaddy, VPS</p>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Work Experience
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white text-xs sm:text-sm">Full Stack Developer — Aura Ads</span>
                <span className="text-[11px] text-zinc-400">04/2026 – Current</span>
              </div>
              <p className="text-[11px] text-zinc-400 mb-1.5">Hybrid • MERN Stack & Next.js</p>
              <ul className="list-disc pl-4 text-zinc-300 text-xs space-y-1">
                <li>Building full-stack web applications with React/Next.js frontend and Node.js/MongoDB backend.</li>
                <li>Designing REST APIs, admin panels, and real-time business dashboards.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white text-xs sm:text-sm">Web Developer — Cheers Digitals</span>
                <span className="text-[11px] text-zinc-400">04/2025 – 04/2026</span>
              </div>
              <p className="text-[11px] text-zinc-400 mb-1.5">Remote • Jamshedpur, India</p>
              <ul className="list-disc pl-4 text-zinc-300 text-xs space-y-1">
                <li>Developed responsive web applications with Tailwind CSS, Flexbox, and CSS Grid.</li>
                <li>Integrated REST APIs and engineered fluid animations with Framer Motion.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">
            Live Google Play Store Projects (870+ Installs)
          </h3>
          <div className="space-y-2 text-xs text-zinc-300">
            <p>• <strong className="text-white">Kudmi Matrimony (500+ installs):</strong> Exclusively for the Kudmi Samaj community. Stack: React Native, Expo, Supabase.</p>
            <p>• <strong className="text-white">Jharkhand E-Kalyan Guide (180+ installs):</strong> Scholarship scheme notifications & guidance app. Stack: React Native, Expo, Push Notifications.</p>
            <p>• <strong className="text-white">Save Prompts (97+ installs):</strong> Curated AI prompt gallery with one-tap copying. Stack: React Native, Expo, Supabase.</p>
            <p>• <strong className="text-white">JAC Results 2026 (62+ installs):</strong> Fast result-lookup app for Jharkhand Academic Council exams. Stack: React Native, Expo.</p>
            <p>• <strong className="text-white">Footimes (31+ installs):</strong> Live football score app with real-time match scores. Stack: React Native, Expo, Football API.</p>
          </div>
        </div>

        {/* Education */}
        <div className="pt-2 border-t border-zinc-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-1">
            Education
          </h3>
          <div className="flex justify-between items-baseline text-xs">
            <span className="font-bold text-white">Bachelor of Science: Information Technology (B.Sc IT)</span>
            <span className="text-[11px] text-zinc-400">01/2024</span>
          </div>
          <p className="text-[11px] text-zinc-400">Kolhan University, Jharkhand</p>
        </div>
      </div>
    </div>
  );
}
