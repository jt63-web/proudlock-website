import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proudlock.com.au"),
  title: {
    default: "Proudlock — Commercial & Residential Construction, Southeast Queensland",
    template: "%s | Proudlock",
  },
  description:
    "Proudlock builds and develops commercial and residential projects across Southeast Queensland. Established 2014. Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan.",
  keywords: [
    "commercial construction Brisbane",
    "warehouse construction Queensland",
    "residential builder SEQ",
    "fitout Brisbane",
    "Proudlock construction",
    "Southeast Queensland builder",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://proudlock.com.au",
    siteName: "Proudlock",
    images: [{ url: "/images/hero/warehouse-1.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
