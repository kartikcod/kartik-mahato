import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Kartik Mahato | Full Stack Developer (USA & India)",
  description:
    "Learn about Kartik Mahato, a Full Stack Developer and React Native Engineer with a B.Tech in Computer Science and experience at Aura Ads and Cheers Digitals. Open for remote engineering roles in the United States and India.",
  keywords: [
    "About Kartik Mahato",
    "Kartik Mahato Resume",
    "Kartik Mahato Education",
    "Cambridge Institute of Technology Ranchi",
    "Full Stack Developer India",
    "Remote Developer USA",
    "React Native Engineer",
    "Aura Ads Developer",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kartik Mahato | Full Stack Developer (USA & India)",
    description:
      "B.Tech in Computer Science, experienced in high-performance Next.js and React Native development. Available for US & India remote opportunities.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
