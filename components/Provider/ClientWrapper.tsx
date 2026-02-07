"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScroller from "@/components/Provider/SmoothScroll";
import Preloader from "@/components/Shared/Preloader";
import Footer from "@/components/Footer/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Loader ke baad scroll enable karne ke liye
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, 3000);

    // Loader ke waqt scroll disable rakhein
    document.body.style.overflow = "hidden";

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>
      
      <SmoothScroller>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SmoothScroller>
    </>
  );
}