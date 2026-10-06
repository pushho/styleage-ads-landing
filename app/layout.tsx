import type { Metadata } from "next";
import { IBM_Plex_Sans_JP, Inter } from "next/font/google";
import { CLINIC } from "@/lib/clinic";
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
  title: {
    default: `${CLINIC.name} | ${CLINIC.tagline}`,
    template: `%s | ${CLINIC.name}`,
  },
  description: `${CLINIC.name} ${CLINIC.tagline} clinic in Dubai Healthcare City.`,
  icons: { icon: "/styleage-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
