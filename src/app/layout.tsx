import type { Metadata } from "next";
import {
  Caveat,
  Fraunces,
  Inter,
  Noto_Serif_Kannada,
  Playfair_Display,
} from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-next",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

const notoKannada = Noto_Serif_Kannada({
  subsets: ["kannada"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-noto-kannada",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmschool.bangalore"),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/images/hero-vidhana.webp", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-white ${inter.variable} ${fraunces.variable} ${playfair.variable} ${caveat.variable} ${notoKannada.variable}`}
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
