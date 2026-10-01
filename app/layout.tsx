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
  title: "Hair Transplant Dubai | FUE & DHI Hair Transplant Clinic | StyleAge",
  description:
    "Hair transplant clinic in Dubai Healthcare City offering FUE, Sapphire FUE, DHI, and FUT hair restoration, plus beard and eyebrow transplant. Book a hair transplant consultation in Dubai; suitability, cost, and the treating doctor are confirmed before anything is booked.",
  icons: { icon: "/styleage-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
