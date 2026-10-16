import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import {
  DESCRIPCION,
  EMPRESA_URL,
  PALABRAS_CLAVE,
  SITE_NAME,
  SITE_URL,
  TITULO,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
  description: DESCRIPCION,
  keywords: PALABRAS_CLAVE,
  applicationName: SITE_NAME,
  authors: [{ name: "BlueCode Solutions", url: EMPRESA_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: "/",
    siteName: SITE_NAME,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(jakarta.variable, grotesk.variable, inter.variable)}
    >
      <body className="bg-brand-bgMain font-sans text-brand-textDark">
        {/* Blexi shared SVG defs — disponibles para todos los BlexiMark de la página */}
        <svg
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="blexi-grad" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#9030F0" />
              <stop offset="50%"  stopColor="#4890F0" />
              <stop offset="100%" stopColor="#00D8F0" />
            </linearGradient>
            <filter id="blexi-filter" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
