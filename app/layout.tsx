import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/Provider/ClientWrapper";

export const metadata: Metadata = {
  title: "Portfolio - Kartik Mahato",
  description: "Web Designer & MERN Stack Developer Portfolio", // Refined description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030303] antialiased">
        {/* Saara client-side logic is wrapper ke andar jayega */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}