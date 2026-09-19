"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SmoothScroller from "@/components/Provider/SmoothScroll";
import Preloader from "@/components/Shared/Preloader";
import Footer from "@/components/Footer/Footer";

import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Detect if inside an iframe (e.g. desktop OS game window)
  useEffect(() => {
    if (typeof window !== "undefined" && window.self !== window.top) {
      setIsEmbedded(true);
      setIsLoading(false);
      return;
    }

    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading]);

  // This handles everything cleanly once the preloader puzzle finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  };

  if (isEmbedded) {
    return <main className="w-full h-full bg-black">{children}</main>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            key="loader"
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroller>
          <main>{children}</main>
          {!isHome && <Footer />}
        </SmoothScroller>
      )}
    </>
  );
}