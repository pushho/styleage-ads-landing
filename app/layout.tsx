import type { Metadata } from "next";
import { IBM_Plex_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hair transplant in Dubai | StyleAge Clinic",
  description:
    "FUE and DHI hair transplant consultations at StyleAge Clinic, Ibn Sina Building, Dubai Healthcare City. Suitability, method, fee, and the treating doctor are confirmed before a procedure is booked.",
  icons: { icon: "/styleage-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
