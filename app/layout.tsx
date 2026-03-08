import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientWrapper from "@/components/Provider/ClientWrapper";
import CustomCursor from "@/components/CustomScroller/CustomCursor";
import ScrollingCircle from "@/components/Scrolling/ScrollingCircle";

export const metadata: Metadata = {
  title: "Portfolio - Kartik Mahato",
  description: "Web Designer & MERN Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] antialiased">
        <ClientWrapper>{children}<ScrollingCircle /> <CustomCursor /> </ClientWrapper>
      </body>
    </html>
  );
}
