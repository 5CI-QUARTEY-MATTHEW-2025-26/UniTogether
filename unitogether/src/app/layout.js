"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Nota: la metadata statica non può essere esportata da un Client Component.
// Se necessario, dovrai gestirla dinamicamente.

export default function RootLayout({ children }) {
  // Hook per tema dinamico lato client
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const match = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(match.matches);
      const handler = (e) => setIsDark(e.matches);
      match.addEventListener("change", handler);
      return () => match.removeEventListener("change", handler);
    }
  }, []);

  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: isDark ? "#050505" : "#fff", color: isDark ? "#FCF6F5" : "#050505" }}
      >
        {!isDark && <div className="gradient" />}
        {children}
      </body>
    </html>
  );
}