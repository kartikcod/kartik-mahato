"use client";

import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function ExperienceWindow() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Aura Ads",
      period: "04/2026 – Current",
      type: "Hybrid",
      badge: "Current Role",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      description:
        "Building scalable full-stack web applications using React.js and Next.js on the frontend with Node.js, Express.js, and MongoDB on the backend.",
      bullets: [
        "Designing and integrating REST APIs to connect frontend interfaces with backend microservices & databases.",
        "Developing internal dashboards, admin panels, and client-facing tools with modular, reusable components.",
        "Handling database design, indexing, and data modeling in MongoDB to support high-throughput features.",
        "Collaborating across teams from initial planning and sprint architecture through production deployment.",
        "Deploying and maintaining full-stack applications with optimal uptime, error tracking, and performance.",
      ],
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Dashboards"],
    },
    {
      role: "Web Developer",
      company: "Cheers Digitals",
      period: "04/2025 – 04/2026",
      type: "Remote • Jamshedpur, India",
      badge: "1 Year",
      badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      description:
        "Developed responsive web applications and landing pages using React and Next.js with reusable component-based architecture and fluid Framer Motion animations.",
      bullets: [
        "Built responsive layouts using Tailwind CSS, Flexbox, and CSS Grid for seamless cross-device compatibility.",
        "Integrated third-party REST APIs and managed complex state using React Hooks and Context API.",
        "Created smooth animations, page transitions, and interactive UI micro-interactions using Framer Motion.",
        "Optimized web performance through lazy loading, code splitting, asset optimization, and Next.js SEO best practices.",
        "Deployed and managed client frontend applications on Hostinger, GoDaddy, and VPS environments.",
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "REST APIs", "Hostinger", "SEO"],
    },
  ];

  return (
    <div className="h-full bg-zinc-950/90 text-white overflow-y-auto p-6 md:p-8 space-y-8">
      <div>
        <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
          // Career Timeline
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
          Work Experience
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Proven track record in building commercial web applications and delivering production code.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10">
            {/* Timeline Dot */}
            <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 border-2 border-zinc-950 shadow-md shadow-violet-500/50" />

            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className={`px-2.5 py-1 rounded-full font-semibold border ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <FiCalendar /> {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <FiCheckCircle className="text-violet-400 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
