import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kopoudevelopers.com"),
  title: SITE_CONFIG.meta.title,
  description: SITE_CONFIG.meta.description,
  keywords: SITE_CONFIG.meta.keywords,
  openGraph: {
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    url: SITE_CONFIG.meta.siteUrl,
    siteName: SITE_CONFIG.company.name,
    images: [
      {
        url: SITE_CONFIG.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Kopou Apartments – Premium Residential Development in Tezpur, Assam",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    images: [SITE_CONFIG.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.meta.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#171717" />
      </head>
      <body className={`${inter.className} antialiased bg-[#F8F6F1] text-[#171717]`}>
        {children}
      </body>
    </html>
  );
}
