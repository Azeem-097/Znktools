import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ToolsTemple — Premium AI Tools at Unbeatable Prices",
  description:
    "Get instant access to ChatGPT Pro, Gemini Pro, Canva Pro & more premium AI tools at the lowest prices in Pakistan. Instant WhatsApp delivery.",
  keywords: [
    "ChatGPT Pro",
    "Canva Pro",
    "Gemini Pro",
    "AI tools Pakistan",
    "cheap AI subscriptions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050508] text-white overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}