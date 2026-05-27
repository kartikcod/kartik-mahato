"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScroller from "@/components/Provider/SmoothScroll";
import Preloader from "@/components/Shared/Preloader";
import Footer from "@/components/Footer/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll immediately on initial render
  useEffect(() => {
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
      
      {/* Tip: It's best practice to only mount the main site components 
        after loading is done to prevent background audio, heavy images, 
        or layout shifts from rendering prematurely.
      */}
      {!isLoading && (
        <SmoothScroller>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroller>
      )}
    </>
  );
}