"use client";
import { useState } from "react";
// import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

const prisma = localFont({
  src: "../../public/assets/fonts/Prisma.ttf",
  variable: "--font-prisma",
});

import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${
          PlayfairDisplay.variable
        } ${prisma.variable} font-sans bg-white ${darkMode ? "dark" : ""}`}
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
