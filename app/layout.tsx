import type { Metadata } from "next";
import { Newsreader, Inter, Geist } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nahidul Satil, PMP | Systems & Engineering Dossier",
  description:
    "Prospective graduate researcher and systems engineering leader — software systems, cybersecurity, and AI-enabled automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <SiteHeader />
        <main className="flex-1 w-full pt-16 pb-24 lg:pt-28 lg:pb-16">
          {children}
        </main>
        <MobileBottomNav />
      </body>
    </html>
  );
}
