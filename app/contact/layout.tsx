import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Kartik Mahato | Hire Full Stack & React Native Developer",
  description:
    "Get in touch with Kartik Mahato for freelance projects, full-time contracts, and remote engineering roles in the United States, India, and worldwide. Direct email: kartikmahato108@gmail.com, Phone: +91-7667532801.",
  keywords: [
    "Contact Kartik Mahato",
    "Hire Full Stack Developer",
    "Hire React Native Developer USA",
    "Hire Software Engineer India",
    "Hire React Native Developer Bangalore",
    "Freelance App Developer Delhi NCR",
    "Hire Mobile App Developer Mumbai",
    "React Native Freelancer Gurgaon",
    "Software Developer for Hire Pune",
    "Full Stack Freelancer Hyderabad",
    "Remote Developer for Hire",
    "Freelance React Developer",
    "Kartik Mahato Email",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kartik Mahato | Hire Full Stack & React Native Developer",
    description:
      "Available for freelance projects, remote full-time positions, and contract engineering roles across the US, India, and globally.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
