export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "web" | "fullstack";
  installs?: string;
  rating?: string;
  status: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: {
    from: string;
    to: string;
    border: string;
    glow: string;
  };
  mockupType: "mobile" | "desktop";
  features: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    id: "kudmi-matrimony",
    title: "Kudmi Matrimony",
    subtitle: "Community Matrimony App for Kudmi Samaj",
    category: "mobile",
    installs: "500+ Installs",
    rating: "4.8 ★",
    status: "Live on Play Store",
    description:
      "A dedicated matrimony mobile application designed exclusively for the Kudmi Samaj community, enabling members to find compatible life partners with verified profiles, intelligent filtering, and secure matchmaking.",
    highlights: [
      "500+ real active community members onboarded",
      "Secure authentication & real-time profile management with Supabase",
      "Advanced filtering by sub-caste, education, profession & location",
      "Expressive UI with smooth interactions and instant chat readiness",
    ],
    techStack: ["React Native", "Expo", "Supabase", "Tailwind CSS", "Play Store"],
    liveUrl: "https://play.google.com/store/apps",
    accentColor: {
      from: "from-rose-500",
      to: "to-violet-600",
      border: "border-rose-500/30",
      glow: "rgba(244, 63, 94, 0.25)",
    },
    mockupType: "mobile",
    features: [
      { label: "Community", value: "Kudmi Samaj" },
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Downloads", value: "500+ Installs" },
      { label: "Architecture", value: "Expo + Supabase" },
    ],
  },
  {
    id: "jharkhand-ekalyan",
    title: "Jharkhand E-Kalyan Guide",
    subtitle: "Welfare & Scholarship Information Portal",
    category: "mobile",
    installs: "180+ Installs",
    rating: "4.6 ★",
    status: "Live on Play Store",
    description:
      "A high-utility welfare information mobile app providing timely notifications, step-by-step application guidance, eligibility verification, and status tracking for students applying for Jharkhand state government scholarships.",
    highlights: [
      "180+ student downloads across Jharkhand districts",
      "Automated push notifications for critical deadline alerts & status changes",
      "Offline cached guidance documents for low-connectivity regions",
      "Clean step-by-step eligibility calculator & application checker",
    ],
    techStack: ["React Native", "Expo", "Push Notifications", "REST API", "Play Store"],
    liveUrl: "https://play.google.com/store/apps",
    accentColor: {
      from: "from-emerald-500",
      to: "to-teal-600",
      border: "border-emerald-500/30",
      glow: "rgba(16, 185, 129, 0.25)",
    },
    mockupType: "mobile",
    features: [
      { label: "Audience", value: "State Students" },
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Downloads", value: "180+ Installs" },
      { label: "Key Tech", value: "Push Notifications" },
    ],
  },
  {
    id: "save-prompts",
    title: "Save Prompts",
    subtitle: "AI Prompt Gallery & Generator Hub",
    category: "mobile",
    installs: "97+ Installs",
    rating: "4.9 ★",
    status: "Live on Play Store",
    description:
      "An AI inspiration and prompt discovery gallery allowing creators to explore curated AI-generated artwork and copy identical prompts to recreate high-fidelity images across Midjourney, DALL-E, and Stable Diffusion.",
    highlights: [
      "Curated visual gallery with one-tap clipboard prompt copying",
      "Filter by AI engine: Midjourney, Stable Diffusion, DALL-E 3 & Flux",
      "Supabase cloud backend for instant prompt saving & favorites sync",
      "Dark mode aesthetic with zero-latency image caching",
    ],
    techStack: ["React Native", "Expo", "Supabase", "AI Prompts", "Play Store"],
    liveUrl: "https://play.google.com/store/apps",
    accentColor: {
      from: "from-violet-500",
      to: "to-cyan-400",
      border: "border-violet-500/30",
      glow: "rgba(139, 92, 246, 0.25)",
    },
    mockupType: "mobile",
    features: [
      { label: "Domain", value: "Generative AI" },
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Downloads", value: "97+ Installs" },
      { label: "Integration", value: "Supabase DB" },
    ],
  },
  {
    id: "jac-results",
    title: "JAC Results 2026",
    subtitle: "High-Speed Board Exam Result Lookup",
    category: "mobile",
    installs: "62+ Installs",
    rating: "4.7 ★",
    status: "Live on Play Store",
    description:
      "A fast, lightweight mobile utility built for students across Jharkhand to instantly look up their Jharkhand Academic Council (JAC) 10th and 12th board examination results without website crashes or heavy traffic bottlenecks.",
    highlights: [
      "Optimized result query parser handling peak traffic gracefully",
      "Instant marksheet preview with download and share functionality",
      "Roll code & roll number auto-validation to reduce user errors",
      "Zero ad-clutter interface focused on speed and reliability",
    ],
    techStack: ["React Native", "Expo", "Web Scraping API", "Play Store"],
    liveUrl: "https://play.google.com/store/apps",
    accentColor: {
      from: "from-amber-500",
      to: "to-orange-600",
      border: "border-amber-500/30",
      glow: "rgba(245, 158, 11, 0.25)",
    },
    mockupType: "mobile",
    features: [
      { label: "Category", value: "Board Exams" },
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Downloads", value: "62+ Installs" },
      { label: "Speed", value: "Sub-second Lookup" },
    ],
  },
  {
    id: "footimes",
    title: "Footimes",
    subtitle: "Real-Time Live Football Score Tracker",
    category: "mobile",
    installs: "31+ Installs",
    rating: "4.5 ★",
    status: "Live on Play Store",
    description:
      "A real-time football score and tournament tracking application delivering live in-match updates, league standings, goal notifications, and team lineups across top international and domestic soccer leagues.",
    highlights: [
      "Live match commentary, score tick-by-tick updates & goal alerts",
      "Comprehensive standings and head-to-head stats for premier leagues",
      "Fast API integration with smart caching for low data consumption",
      "Sleek match center UI with dark pitch aesthetics",
    ],
    techStack: ["React Native", "Expo", "Football API", "Axios", "Play Store"],
    liveUrl: "https://play.google.com/store/apps",
    accentColor: {
      from: "from-blue-500",
      to: "to-indigo-600",
      border: "border-blue-500/30",
      glow: "rgba(59, 130, 246, 0.25)",
    },
    mockupType: "mobile",
    features: [
      { label: "Sport", value: "Football / Soccer" },
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Downloads", value: "31+ Installs" },
      { label: "Data Source", value: "Live Sports API" },
    ],
  },
];
