import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS_NAME, DOMAIN } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${BUSINESS_NAME} | Mobile Sandblasting in Calgary & Area`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Calgary Sandblasting is a mobile sandblasting company serving Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. We bring the compressor and blast rig to you.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: DOMAIN,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Mobile Sandblasting in Calgary & Area`,
    description:
      "Mobile sandblasting for trailers, equipment, fleets, and residential fences & decks. We come to you — serving Calgary and surrounding communities.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | Mobile Sandblasting in Calgary & Area`,
    description:
      "Mobile sandblasting for trailers, equipment, fleets, and residential fences & decks. We come to you — serving Calgary and surrounding communities.",
  },
  alternates: {
    canonical: DOMAIN,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
