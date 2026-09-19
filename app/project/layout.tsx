import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Live Apps & Projects | Kartik Mahato (5 Play Store Apps)",
  description:
    "Explore 5 live production apps on Google Play Store with 870+ total installs, built with React Native, Next.js, and MERN stack by Kartik Mahato. Includes Kudmi Matrimony, Save Prompts, and E-Kalyan Guide.",
  keywords: [
    "Kartik Mahato Projects",
    "Google Play Store Live Apps",
    "React Native Production Apps",
    "Kudmi Matrimony App",
    "Save Prompts App",
    "Jharkhand E-Kalyan App",
    "JAC Results App",
    "Footimes Football App",
    "Full Stack Projects India USA",
    "Hire Mobile App Developer",
  ],
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Live Production Apps & Projects | Kartik Mahato",
    description:
      "Explore 5 live Google Play Store mobile apps with 870+ installs and full-stack web applications built by Kartik Mahato.",
    url: "/project",
  },
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
