export interface Wallpaper {
  id: string;
  name: string;
  thumbnailGradient: string;
  backgroundClass: string;
  orbs: {
    color: string;
    position: string;
    size: string;
  }[];
  customImageUrl?: string;
}

export const WALLPAPERS: Wallpaper[] = [
  {
    id: "cosmic",
    name: "Cosmic Nebula",
    thumbnailGradient: "from-violet-900 via-indigo-950 to-black",
    backgroundClass: "from-[#0a0d18] via-[#05060a] to-[#020204]",
    orbs: [
      { color: "bg-violet-600/15", position: "top-[10%] left-[20%]", size: "w-[500px] h-[500px]" },
      { color: "bg-cyan-500/15", position: "bottom-[20%] right-[15%]", size: "w-[600px] h-[600px]" },
      { color: "bg-pink-600/10", position: "top-[40%] right-[30%]", size: "w-[400px] h-[400px]" },
    ],
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    thumbnailGradient: "from-fuchsia-900 via-purple-950 to-cyan-950",
    backgroundClass: "from-[#100319] via-[#07010e] to-[#020005]",
    orbs: [
      { color: "bg-fuchsia-600/25", position: "top-[15%] right-[20%]", size: "w-[550px] h-[550px]" },
      { color: "bg-cyan-400/20", position: "bottom-[15%] left-[15%]", size: "w-[500px] h-[500px]" },
      { color: "bg-purple-600/20", position: "top-[50%] left-[40%]", size: "w-[450px] h-[450px]" },
    ],
  },
  {
    id: "monterey",
    name: "Monterey Wave",
    thumbnailGradient: "from-indigo-800 via-purple-900 to-rose-900",
    backgroundClass: "from-[#0d0a1f] via-[#080514] to-[#030208]",
    orbs: [
      { color: "bg-indigo-600/20", position: "top-[5%] left-[30%]", size: "w-[600px] h-[600px]" },
      { color: "bg-rose-600/15", position: "bottom-[25%] right-[25%]", size: "w-[500px] h-[500px]" },
      { color: "bg-violet-500/20", position: "top-[60%] left-[10%]", size: "w-[400px] h-[400px]" },
    ],
  },
  {
    id: "sonoma",
    name: "Sonoma Sunset",
    thumbnailGradient: "from-amber-700 via-orange-900 to-zinc-950",
    backgroundClass: "from-[#1a0e05] via-[#0d0702] to-[#030200]",
    orbs: [
      { color: "bg-amber-500/20", position: "top-[15%] right-[25%]", size: "w-[550px] h-[550px]" },
      { color: "bg-rose-600/15", position: "bottom-[20%] left-[20%]", size: "w-[500px] h-[500px]" },
      { color: "bg-orange-600/15", position: "top-[45%] left-[35%]", size: "w-[450px] h-[450px]" },
    ],
  },
  {
    id: "matrix",
    name: "Matrix Emerald",
    thumbnailGradient: "from-emerald-900 via-teal-950 to-black",
    backgroundClass: "from-[#02140d] via-[#010a06] to-[#000402]",
    orbs: [
      { color: "bg-emerald-500/20", position: "top-[10%] left-[25%]", size: "w-[550px] h-[550px]" },
      { color: "bg-teal-500/15", position: "bottom-[15%] right-[20%]", size: "w-[500px] h-[500px]" },
      { color: "bg-cyan-500/10", position: "top-[55%] right-[35%]", size: "w-[400px] h-[400px]" },
    ],
  },
  {
    id: "midnight",
    name: "Midnight Void (OLED)",
    thumbnailGradient: "from-zinc-900 via-black to-zinc-950",
    backgroundClass: "from-[#050505] via-[#020202] to-[#000000]",
    orbs: [
      { color: "bg-white/5", position: "top-[20%] left-[30%]", size: "w-[450px] h-[450px]" },
      { color: "bg-zinc-700/10", position: "bottom-[20%] right-[30%]", size: "w-[450px] h-[450px]" },
    ],
  },
  {
    id: "blue-horizon",
    name: "Blue Oceanic",
    thumbnailGradient: "from-blue-900 via-cyan-950 to-black",
    backgroundClass: "from-[#030e1d] via-[#02070f] to-[#010307]",
    orbs: [
      { color: "bg-blue-600/20", position: "top-[10%] right-[20%]", size: "w-[600px] h-[600px]" },
      { color: "bg-cyan-500/20", position: "bottom-[20%] left-[20%]", size: "w-[500px] h-[500px]" },
      { color: "bg-indigo-600/15", position: "top-[40%] left-[40%]", size: "w-[400px] h-[400px]" },
    ],
  },
];

export interface CustomizationSettings {
  wallpaperId: string;
  customWallpaperUrl: string;
  accentColor: "purple" | "cyan" | "emerald" | "amber" | "rose";
  dockMagnification: boolean;
  blurLevel: "high" | "medium" | "low";
}

export const DEFAULT_SETTINGS: CustomizationSettings = {
  wallpaperId: "cosmic",
  customWallpaperUrl: "",
  accentColor: "purple",
  dockMagnification: true,
  blurLevel: "high",
};
