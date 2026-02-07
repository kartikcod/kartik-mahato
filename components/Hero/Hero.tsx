"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();

  /* ========= PARALLAX ========= */

  const springConfig = { damping: 25, stiffness: 100 };

  const yText = useSpring(
    useTransform(scrollY, [0, 500], [0, -100]),
    springConfig,
  );

  const yImage = useSpring(
    useTransform(scrollY, [0, 500], [0, -40]),
    springConfig,
  );

  /* ========= VARIANTS (TYPED) ========= */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const, // ✅ fix tuple typing
      },
    },
  };

  const revealTitle: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // ✅ fix
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#F5F5F5] overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8"
    >
      {/* ===== HEADER ===== */}
      <div className="flex flex-col items-center text-center mt-16 z-50">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="relative group cursor-default mb-6"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000" />

          <div className="relative px-4 py-1.5 bg-black border border-white/10 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-300">
              Freelancing Available
            </span>
          </div>
        </motion.div>

        {/* Intro text */}
        <div className="z-30 overflow-hidden">
          <motion.p
            variants={itemVariants}
            className="text-zinc-600 text-sm sm:text-lg md:text-xl font-medium tracking-tight"
          >
            <span className="inline-block mr-1">👋</span>
            My Name is
            <span className="font-bold text-black mx-1.5 relative inline-block">
              Kartik Mahato
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-violet-500/50"
              />
            </span>
            and I am a{" "}
            <span className="italic font-light text-violet-400">
              Freelancer
            </span>
          </motion.p>
        </div>
      </div>

      {/* ===== MAIN HERO ===== */}
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center mt-10">
        {/* Solid text */}
        <div className="overflow-hidden">
          <motion.h1
            variants={revealTitle}
            style={{ y: yText }}
            className="relative z-10 text-[18vw] sm:text-[16vw] md:text-xl lg:text-[10vw] leading-[1.2] font-black text-black tracking-tighter uppercase select-none"
          >
            Web designer
          </motion.h1>
        </div>

        {/* Image */}
        <motion.div
          variants={itemVariants}
          style={{ y: yImage }}
          className="relative z-20 -mt-[8%] sm:-mt-[10%] w-[70%] sm:w-[50%] md:w-[40%] lg:w-[32%] aspect-[4/5]"
        >
          <Image
            src="/kartik.png"
            alt="Profile"
            fill
            priority
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain grayscale drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:grayscale-0 transition-all duration-700"
          />

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3 z-40 w-full px-4 justify-center"
          >
            <button className="whitespace-nowrap px-5 sm:px-6 py-3.5 sm:py-3 bg-black text-white text-[11px] sm:text-xs uppercase font-bold rounded-xl hover:bg-zinc-800 transition-all shadow-2xl active:scale-95 touch-manipulation">
              You need a designer
            </button>
            <button className="whitespace-nowrap px-5 sm:px-6 py-3.5 sm:py-3 border-2 border-black bg-white/80 backdrop-blur-md text-black text-[11px] sm:text-xs uppercase font-bold rounded-xl hover:bg-black hover:text-white transition-all active:scale-95 touch-manipulation">
              You need a developer
            </button>
          </motion.div>
        </motion.div>

        {/* Outline text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ y: yText, WebkitTextStroke: "1px #000" }}
          className="absolute top-[38%] sm:top-[35%] z-0 text-[17vw] md:text-xl lg:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent select-none "
        >
          & Developer
        </motion.h1>
      </div>

      {/* ===== FOOTER META ===== */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-30 hidden xs:block"
      >
        <p className="text-zinc-600 text-sm md:text-lg font-medium">
          based in India.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 flex gap-6 opacity-40 grayscale"
      >
        {["Next.Js","React.Js", "Tailwind", "Motion"].map((t) => (
          <span
            key={t}
            className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-black"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}
