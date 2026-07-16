import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_TAG_ID = "G-FTWS1V15DC";

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

const SITE_URL = "https://fix-matee.vercel.app";
const SITE_TITLE = "FixMate Home Appliances Repair — Washing Machine Repair in Navi Mumbai";
const SITE_DESCRIPTION =
  "Professional washing machine repair at your doorstep across Navi Mumbai — Kopar Khairane, Vashi, Ghansoli, Kharghar, CBD Belapur, Nerul, Sanpada, Panvel, Kamothe, Ulwe and Airoli. All brands — LG, Samsung, Whirlpool, IFB, Bosch. Same-day service, genuine parts, affordable pricing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | FixMate Home Appliances Repair",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "washing machine repair navi mumbai",
    "navi mumbai washing machine repair",
    "washing machine repair kopar khairane",
    "washing machine repair vashi",
    "washing machine repair ghansoli",
    "washing machine repair kharghar",
    "washing machine repair cbd belapur",
    "washing machine repair nerul",
    "washing machine repair sanpada",
    "washing machine repair panvel",
    "washing machine repair kamothe",
    "washing machine repair ulwe",
    "washing machine repair airoli",
    "washing machine repair near me",
    "lg washing machine repair",
    "samsung washing machine repair",
    "whirlpool washing machine repair",
    "ifb washing machine repair",
    "bosch washing machine repair",
    "appliance repair service",
    "domestic appliance repairs",
    "washing machine installation",
    "washing machine not draining",
    "washing machine not spinning",
    "washing machine motor repair",
    "washing machine lid switch repair",
    "washing machine drain pump repair",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: "Same-day doorstep washing machine repair across Navi Mumbai. All brands. Genuine parts.",
    url: SITE_URL,
    siteName: "FixMate Home Appliances Repair",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FixMate Home Appliances Repair — Washing Machine Repair in Navi Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: "Same-day doorstep washing machine repair across Navi Mumbai. All brands. Genuine parts.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo-icon.svg",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export const viewport = {
  themeColor: "#4338ca",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "FixMate Home Appliances Repair",
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: "+91-6388239273",
  email: "fixmate041@gmail.com",
  priceRange: "₹150 onwards",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kopar Khairane, Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    "Kopar Khairane",
    "Vashi",
    "Ghansoli",
    "Kharghar",
    "CBD Belapur",
    "Nerul",
    "Sanpada",
    "Panvel",
    "Kamothe",
    "Ulwe",
    "Airoli",
  ].map((name) => ({ "@type": "Place", name })),
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
