"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbBrandDeezer } from "react-icons/tb";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Background text parallax
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -200]),
    springConfig,
  );

  // Image parallax and scale
  const imageY = useSpring(
    useTransform(imageScrollProgress, [0, 1], [100, -100]),
    springConfig,
  );
  const imageScale = useTransform(
    imageScrollProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8],
  );

  // Text reveal animations
  const textY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.5],
  );

  // Rotate effect for decorative elements
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* Animated Background Text with Parallax */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <motion.h2
          style={{ y: backgroundY }}
          className="text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[20vw] font-black uppercase whitespace-nowrap"
        >
          About Me
        </motion.h2>
      </div>

      {/* Rotating Decorative Elements - Hidden on mobile for performance */}
      <motion.div
        style={{ rotate }}
        className="hidden md:block absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 border border-violet-500/20 rounded-full"
      />
      <motion.div
        style={{ rotate: useTransform(rotate, (r) => -r) }}
        className="hidden md:block absolute bottom-20 md:bottom-40 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 border border-cyan-500/20 rounded-full"
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 lg:py-40">
        {/* Top Section - Introduction with Scroll Animation */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="mb-20 sm:mb-24 md:mb-32 lg:mb-40"
        >
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start">
            {/* Left - Small Label with Slide In */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky lg:top-32"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 cursor-pointer"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-[1px] bg-violet-500 w-8 sm:w-12"
                  />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 font-bold">
                    Introduction
                  </span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-xs sm:text-sm text-zinc-500 leading-relaxed"
                >
                  Based in India
                  <br />
                  Available for freelance
                  <br />
                  work from anywhere
                </motion.p>
              </motion.div>
            </div>

            {/* Right - Large Text with Word Animation */}
            <div className="lg:col-span-9">
              <motion.h2
                style={{ y: textY }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-[1.3] sm:leading-[1.2] mb-6 sm:mb-8"
              >
                {[
                  "I'm",
                  "a",
                  "creative",
                  "developer",
                  "and",
                  "designer",
                  "who",
                  "crafts",
                  "exceptional",
                  "digital",
                  "experiences.",
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block mr-2 sm:mr-3 md:mr-4 ${
                      [
                        "creative",
                        "developer",
                        "designer",
                        "exceptional",
                      ].includes(word)
                        ? "font-black italic"
                        : ""
                    }`}
                  >
                    {word === "exceptional" ? (
                      <span className="relative">
                        <span className="relative z-10">{word}</span>
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.05 + 0.3,
                          }}
                          className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-violet-500/30 -z-0"
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-3xl"
              >
                With a passion for minimalist design and modern web
                technologies, I transform ideas into beautiful, functional
                websites that leave a lasting impression.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Image + Stats with Advanced Animations */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 mb-20 sm:mb-24 md:mb-32 lg:mb-40">
          {/* Image Card with Parallax */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] bg-zinc-900 rounded-2xl sm:rounded-3xl overflow-hidden group perspective-1000"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src="/kartik.png"
                alt="Kartik Mahato"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-black/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10"
              >
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                  Kartik Mahato
                </p>
                <p className="text-[10px] sm:text-xs text-zinc-400">
                  Web Designer & Developer
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Grid with Stagger Animation */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            {[
              { number: "01+", label: "Years of", sublabel: "Experience" },
              { number: "6+", label: "Projects", sublabel: "Completed" },
              { number: "6+", label: "Happy", sublabel: "Clients" },
              { number: "100%", label: "Client", sublabel: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 border-b border-zinc-800 pb-4 sm:pb-6 group-hover:border-violet-500 transition-all duration-500">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tabular-nums bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-500"
                  >
                    {stat.number}
                  </motion.span>
                  <div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-violet-400 transition-colors">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Services with 3D Hover Effects */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          {/* Left - Label */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 cursor-pointer"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-[1px] bg-cyan-500 w-8 sm:w-12"
                />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 font-bold">
                  Expertise
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Services Grid */}
          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {[
                {
                  title: "Web Design",
                  description:
                    "Creating beautiful, intuitive interfaces that users love",
                  icon: <MdOutlineDesignServices />,
                },
                {
                  title: "Web Development",
                  description:
                    "Building fast, scalable applications with modern tech",
                  icon: <FaConnectdevelop />,
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Crafting seamless user experiences with attention to detail",
                  icon: <SiMaterialdesignicons />,
                },
                {
                  title: "Brand Identity",
                  description:
                    "Developing unique visual identities that stand out",
                  icon: <TbBrandDeezer />,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                  }}
                  className="group relative perspective-1000"
                >
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="relative bg-zinc-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-zinc-800 group-hover:border-transparent transition-all duration-300 h-full transform-gpu">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-3xl sm:text-4xl mb-3 sm:mb-4 inline-block"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA with Advanced Hover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full touch-manipulation"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div whileHover={{ letterSpacing: "0.1em" }}>
                  <Link
                    href="/contact"
                    className="relative text-xs sm:text-sm uppercase font-bold tracking-wider"
                  >
                    Let's Work Together
                  </Link>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs - Reduced on mobile for performance */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-violet-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
      />
    </section>
  );
}
