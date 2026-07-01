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
  title: "City Appliance — Washing Machine Repair in Pune",
  description:
    "Professional washing machine repair at your doorstep in Pune. All brands — LG, Samsung, Whirlpool, IFB, Bosch. Same-day service, genuine parts, affordable pricing.",
  keywords: [
    "washing machine repair pune",
    "lg washing machine repair",
    "samsung washing machine service",
    "doorstep repair pune",
    "whirlpool repair",
  ],
  openGraph: {
    title: "City Appliance — Washing Machine Repair in Pune",
    description: "Same-day doorstep washing machine repair. All brands. Genuine parts.",
    type: "website",
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
