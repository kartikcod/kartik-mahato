import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientWrapper from "@/components/Provider/ClientWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kartikmahato.com";

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kartik Mahato | Full Stack Developer & React Native Mobile Engineer (USA & India)",
    template: "%s | Kartik Mahato",
  },
  description:
    "Kartik Mahato is an experienced Full Stack Developer and React Native Mobile Engineer with 5 production apps live on Google Play Store (870+ installs). Specializing in high-performance Next.js, React, Node.js, and cross-platform mobile apps for fast-growing startups and remote teams in the United States, India, and worldwide.",
  applicationName: "Kartik Mahato Portfolio",
  authors: [{ name: "Kartik Mahato", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    // Brand & Identity
    "Kartik Mahato",
    "Kartik Mahato Portfolio",
    "Kartik Mahato Developer",
    "Kartik Mahato React Native",
    "Kartik Mahato Full Stack",
    // US Market Keywords
    "Full Stack Developer USA",
    "Remote Full Stack Engineer US",
    "Hire React Native Developer United States",
    "Next.js Developer Remote US",
    "Frontend Software Engineer USA",
    "Full Stack Engineer Remote Work",
    "US Tech Startup React Developer",
    "Contract Software Engineer USA",
    // India Prime Client Hubs (Bangalore, Delhi NCR, Mumbai, Hyderabad, Pune)
    "Full Stack Developer India",
    "React Native Developer India",
    "MERN Stack Developer India",
    "Mobile App Developer Bangalore",
    "React Native Developer Bengaluru",
    "Hire Next.js Developer Bangalore",
    "Full Stack Developer Delhi NCR",
    "React Native Developer Gurgaon",
    "App Developer Gurugram",
    "Web Developer Noida",
    "Mobile App Developer Mumbai",
    "Full Stack Developer Mumbai",
    "Software Developer Pune",
    "React Native Developer Pune",
    "React Native Developer Hyderabad",
    "Full Stack Developer Hyderabad",
    "Hire React Native Developer India",
    "Hire Full Stack Developer India",
    "Freelance App Developer India",
    "Top Mobile App Developers India",
    "Freelance Web Developer India",
    "Software Engineer Jharkhand",
    "App Developer Ranchi",
    // Core Technical Stack
    "React Native Mobile Apps",
    "Next.js 15 App Router",
    "TypeScript Full Stack",
    "Node.js Backend Architecture",
    "MongoDB & Express REST API",
    "Tailwind CSS Specialist",
    "Google Play Store App Developer",
    "Awwwards Style Portfolio",
    "Kudmi Matrimony App",
    "Save Prompts AI App",
    "JAC Results App",
    "Footimes Football App",
  ],
  creator: "Kartik Mahato",
  publisher: "Kartik Mahato",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": siteUrl,
      "en-IN": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_IN"],
    url: siteUrl,
    siteName: "Kartik Mahato - Portfolio & Works",
    title: "Kartik Mahato | Full Stack Developer & React Native Engineer (USA & India)",
    description:
      "5 production apps live on Google Play Store. Expert in Next.js, React Native, and full-stack engineering for teams in the US, India, and globally.",
    images: [
      {
        url: "/kartik_profile.png",
        width: 1200,
        height: 630,
        alt: "Kartik Mahato - Full Stack Developer & React Native Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Mahato | Full Stack Developer & React Native Engineer",
    description:
      "Full Stack Developer with 5 production apps on Google Play Store. Building scalable Next.js & React Native products for US & India teams.",
    creator: "@kartikmahato_01",
    images: ["/kartik_profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3aba3a40f62b1cba",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

// Structured Schema.org JSON-LD for rich Google search snippets
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Kartik Mahato",
  alternateName: ["Kartik", "kartikcod", "coderr_kartik"],
  url: siteUrl,
  image: `${siteUrl}/kartik_profile.png`,
  jobTitle: "Full Stack Developer & React Native Mobile Engineer",
  description:
    "Full Stack Developer and React Native Mobile Engineer with 5 live production apps on Google Play Store (870+ installs). Available for full-time contracts and remote roles in the United States and India.",
  email: "mailto:kartikmahato108@gmail.com",
  telephone: "+91-7667532801",
  nationality: {
    "@type": "Country",
    name: "India",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
    addressRegion: "Jharkhand",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Cambridge Institute of Technology, Ranchi",
  },
  knowsAbout: [
    "Full Stack Web Development",
    "React Native Mobile App Development",
    "Next.js App Router Architecture",
    "TypeScript & JavaScript",
    "Node.js & Express.js Backend APIs",
    "MongoDB Database Design",
    "Google Play Store Deployment & Publishing",
    "Awwwards Style Modern Web Design",
    "Tailwind CSS & Framer Motion",
    "Cross-platform iOS and Android Architecture",
  ],
  areaServed: [
    { "@type": "City", name: "Bengaluru", sameAs: "https://en.wikipedia.org/wiki/Bangalore" },
    { "@type": "City", name: "Gurugram", sameAs: "https://en.wikipedia.org/wiki/Gurgaon" },
    { "@type": "City", name: "Delhi", sameAs: "https://en.wikipedia.org/wiki/Delhi" },
    { "@type": "City", name: "Noida", sameAs: "https://en.wikipedia.org/wiki/Noida" },
    { "@type": "City", name: "Mumbai", sameAs: "https://en.wikipedia.org/wiki/Mumbai" },
    { "@type": "City", name: "Pune", sameAs: "https://en.wikipedia.org/wiki/Pune" },
    { "@type": "City", name: "Hyderabad", sameAs: "https://en.wikipedia.org/wiki/Hyderabad" },
    { "@type": "City", name: "Chennai", sameAs: "https://en.wikipedia.org/wiki/Chennai" },
    { "@type": "City", name: "Ahmedabad", sameAs: "https://en.wikipedia.org/wiki/Ahmedabad" },
    { "@type": "City", name: "Ranchi", sameAs: "https://en.wikipedia.org/wiki/Ranchi" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software & Mobile App Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "React Native Mobile App Development (iOS & Android)",
          description: "End-to-end mobile development with Google Play Store deployment, state management, and native performance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Next.js & MERN Web Development",
          description: "High-performance Awwwards-style web applications, serverless architecture, and scalable REST/GraphQL APIs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dedicated Remote Software Engineer (Startups in US & India)",
          description: "Full-time or contract software engineer offering fast turnarounds and timezone overlap for US & India clients.",
        },
      },
    ],
  },
  sameAs: [
    "https://github.com/kartikcod",
    "https://www.linkedin.com/in/kartik-react-developer/",
    "https://x.com/kartikmahato_01",
    "https://www.instagram.com/coderr_kartik/",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Kartik Mahato | Full Stack & React Native Developer Portfolio",
  description:
    "Official portfolio of Kartik Mahato featuring 5 live Google Play Store mobile apps, skills terminal, and modern interactive desktop OS interface.",
  inLanguage: ["en-US", "en-IN"],
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
};

const jsonLdApps = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Production Mobile Apps Live on Google Play Store by Kartik Mahato",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Kudmi Matrimony",
        operatingSystem: "Android",
        applicationCategory: "SocialNetworkingApplication",
        description: "Matrimony app exclusively for the Kudmi Samaj with 500+ installs.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "85",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "E-Kalyan Guide",
        operatingSystem: "Android",
        applicationCategory: "EducationalApplication",
        description: "Jharkhand welfare & scholarship scheme portal info app with 180+ installs.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Save Prompts",
        operatingSystem: "Android",
        applicationCategory: "ProductivityApplication",
        description: "AI image prompt gallery with one-tap clipboard copy and 97+ installs.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "JAC Results",
        operatingSystem: "Android",
        applicationCategory: "EducationalApplication",
        description: "Result lookup application for Jharkhand Academic Council board exams.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "Footimes",
        operatingSystem: "Android",
        applicationCategory: "SportsApplication",
        description: "Live football tournament scores and standings app.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Geo Targeting Meta for Prime Client Hubs (India & US) */}
        <meta name="geo.region" content="IN-KA;IN-DL;IN-HR;IN-MH;IN-TG;IN-UP;IN-TN;IN-GJ;IN-JH;US" />
        <meta name="geo.placename" content="Bengaluru, Delhi NCR, Gurugram, Mumbai, Hyderabad, Pune, Noida, India; United States" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        <meta name="target" content="all" />
        <meta name="audience" content="clients, startups, founders, engineering managers, recruiters" />
        <link rel="alternate" hrefLang="en-US" href={siteUrl} />
        <link rel="alternate" hrefLang="en-IN" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApps) }}
        />
      </head>
      <body className="bg-[#030303] antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
