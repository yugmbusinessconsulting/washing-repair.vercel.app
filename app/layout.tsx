import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FixMate Home Appliances Repair — Washing Machine Repair in Navi Mumbai",
  description:
    "Professional washing machine repair at your doorstep in Kopar Khairane, Navi Mumbai. All brands — LG, Samsung, Whirlpool, IFB, Bosch. Same-day service, genuine parts, affordable pricing.",
  keywords: [
    "washing machine repair navi mumbai",
    "lg washing machine repair",
    "samsung washing machine service",
    "doorstep repair kopar khairane",
    "whirlpool repair",
  ],
  openGraph: {
    title: "FixMate Home Appliances Repair — Washing Machine Repair in Navi Mumbai",
    description: "Same-day doorstep washing machine repair. All brands. Genuine parts.",
    type: "website",
  },
  icons: {
    icon: "/logo-icon.svg",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
