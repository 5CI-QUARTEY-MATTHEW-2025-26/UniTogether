"use client";

import { Geist, Geist_Mono } from "next/font/google";
import LightRays from "./components/Effects/LightRays";
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
        style={{ background: isDark ? "#000" : "#fff", color: isDark ? "#FCF6F5" : "#000" }}
      >
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor={isDark ? "#FCF6F5" : "#990011"}
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            pulsating={true}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        {children}
      </body>
    </html>
  );
}