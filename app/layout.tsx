import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Nahidul Satil",
    template: "%s | Md Nahidul Satil",
  },
  description:
    "Prospective Ph.D. researcher in cybersecurity governance, cyber policy, and national cyber resilience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Sidebar />
        <MobileNav />
        <main className="lg:pl-[250px]">
          <div className="mx-auto max-w-4xl px-5 py-12 md:px-10 md:py-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
