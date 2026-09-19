"use client";

import { useState, useRef, useEffect } from "react";
import { FiTerminal } from "react-icons/fi";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalWindow() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-cyan-400 font-bold">Kartik OS Terminal v2.0 (Darwin x86_64)</p>
          <p className="text-zinc-400">
            Type <span className="text-emerald-400 font-bold font-mono">help</span> to view available commands, or click any quick command below.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-violet-400 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - View frontend, mobile, backend & database skills</p>
            <p><span className="text-emerald-400 font-bold">projects</span> - View all 5 Google Play Store apps & web projects</p>
            <p><span className="text-emerald-400 font-bold">exp</span> - View full-stack developer work experience</p>
            <p><span className="text-emerald-400 font-bold">about</span> - About Kartik Mahato</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Get email, phone and LinkedIn</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-violet-400 font-bold">// Technical Skill Matrix</p>
            <div>
              <span className="text-cyan-400 font-semibold">• Languages: </span>
              <span>JavaScript (ES6+), HTML5, CSS3, TypeScript</span>
            </div>
            <div>
              <span className="text-pink-400 font-semibold">• Frontend: </span>
              <span>React.js, Next.js, Tailwind CSS, shadcn/ui, Framer Motion</span>
            </div>
            <div>
              <span className="text-emerald-400 font-semibold">• Mobile App: </span>
              <span>React Native, Expo, Push Notifications, Google Play Store Deployment</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold">• Backend & DB: </span>
              <span>Node.js, Express.js, REST APIs, MongoDB, Supabase, Firebase</span>
            </div>
            <div>
              <span className="text-blue-400 font-semibold">• Tools: </span>
              <span>Git, GitHub, VS Code, Postman, Chrome DevTools, Vercel, Hostinger</span>
            </div>
            <div>
              <span className="text-purple-400 font-semibold">• AI & Workflow: </span>
              <span>Cursor AI, ChatGPT, Gemini, Antigravity, Claude</span>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-zinc-300">
            <p className="text-violet-400 font-bold">// Live Google Play Store Apps (870+ Installs)</p>
            <p><span className="text-rose-400 font-bold">1. Kudmi Matrimony:</span> 500+ installs • React Native, Expo, Supabase</p>
            <p><span className="text-emerald-400 font-bold">2. Jharkhand E-Kalyan:</span> 180+ installs • Push Notifications, React Native</p>
            <p><span className="text-violet-400 font-bold">3. Save Prompts:</span> 97+ installs • AI Prompts Gallery, Supabase</p>
            <p><span className="text-amber-400 font-bold">4. JAC Results 2026:</span> 62+ installs • Fast Board Exam Lookup</p>
            <p><span className="text-blue-400 font-bold">5. Footimes:</span> 31+ installs • Real-time Football Scores API</p>
          </div>
        );
        break;

      case "exp":
        output = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-violet-400 font-bold">// Professional Experience</p>
            <div>
              <p className="text-cyan-400 font-bold">Full Stack Developer — Aura Ads (04/2026 – Current)</p>
              <p className="text-xs text-zinc-400">React.js, Next.js, Node.js, Express.js, MongoDB REST APIs & Dashboards</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">Web Developer — Cheers Digitals (04/2025 – 04/2026)</p>
              <p className="text-xs text-zinc-400">Responsive web apps, Framer Motion animations, Tailwind CSS, Hostinger & GoDaddy</p>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <p className="text-zinc-300 leading-relaxed">
            Kartik Mahato is a Full Stack Developer with 1+ year of experience building MERN web applications
            and 5 React Native apps live on the Google Play Store with 870+ installs. Based in Jharkhand, India.
          </p>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p><span className="text-cyan-400 font-bold">Email:</span> kartikmahato108@gmail.com</p>
            <p><span className="text-emerald-400 font-bold">Phone:</span> +91-7667532801</p>
            <p><span className="text-violet-400 font-bold">LinkedIn:</span> linkedin.com/in/kartik-react-developer/</p>
            <p><span className="text-amber-400 font-bold">GitHub:</span> github.com/kartikcod</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-rose-400">
            Command not recognized: "{trimmed}". Type <span className="underline font-bold">help</span> to view all commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-full bg-black/95 text-emerald-400 font-mono text-xs sm:text-sm p-4 sm:p-6 overflow-y-auto flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Quick Command Pills for Instant Click */}
        <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-zinc-900">
          <span className="text-[11px] text-zinc-500 font-sans">Quick Run:</span>
          {["help", "skills", "projects", "exp", "about", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(cmd);
              }}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-emerald-400 border border-zinc-800 transition-colors text-xs"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* History Log */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-cyan-400 font-bold">kartik@macbook</span>
              <span className="text-zinc-600">:</span>
              <span className="text-violet-400">~</span>
              <span className="text-zinc-600">$</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 text-zinc-400 pt-2">
          <span className="text-cyan-400 font-bold">kartik@macbook</span>
          <span className="text-zinc-600">:</span>
          <span className="text-violet-400">~</span>
          <span className="text-zinc-600">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm caret-emerald-400"
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
