import type { Metadata } from "next";
import { Caveat, Fraunces, Inter, Playfair_Display } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-next",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gtmschool.club"),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: "The GTM School",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The GTM School — Free GTM series for builders in Bangalore",
    description:
      "20 hands-on sessions. Free. In person. 28 Aug–3 Oct. Every session ends with something you ship — ICP, landing page, pipeline, AI agent. Presented by AI Learn Circle × WIPM.",
    url: "https://www.gtmschool.club/",
    siteName: "The GTM School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-gtm-school.jpg",
        width: 1200,
        height: 630,
        alt: "The GTM School, Bangalore — free in-person GTM series for builders",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The GTM School — Free GTM series for builders in Bangalore",
    description:
      "20 hands-on sessions. Free. In person. 28 Aug–3 Oct. Ship real GTM deliverables. AI Learn Circle × WIPM.",
    images: ["/images/og-gtm-school.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-white ${inter.variable} ${fraunces.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body
        className="min-h-screen bg-white antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
