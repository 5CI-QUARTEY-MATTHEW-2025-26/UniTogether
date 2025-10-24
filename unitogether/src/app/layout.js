import { Geist, Geist_Mono } from "next/font/google";
import LightRays from "./components/Effects/LightRays";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UniTogether",
  description: "Una piattaforma web per accompagnare i giovani diplomati nel passaggio alla vita universitaria, offrendo alloggi affidabili e connessioni con altri studenti.",
};

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
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor={isDark ? "#FCF6F5" : "#990011"}
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
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
