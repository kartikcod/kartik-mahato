import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientWrapper from "@/components/Provider/ClientWrapper";

export const metadata: Metadata = {
  title: "Portfolio - Kartik Mahato",
  description: "Web Designer & MERN Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
