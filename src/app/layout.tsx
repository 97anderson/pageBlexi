import type { Metadata } from "next";
import { Figtree, Unbounded } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

// Unbounded para los titulares: ancha, con carácter, se usa poco y grande.
// Figtree para leer: redonda y clara en un celular barato.
const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soyblexi.com"),
  keywords: ["vendedor con IA", "WhatsApp", "Cali", "Valle del Cauca", "pymes", "chatbot de ventas", "Nequi"],
  title: "Blexi | Vendedor con IA para WhatsApp en Cali y el Valle del Cauca",
  description:
    "Blexi es el vendedor con IA para el WhatsApp de tu negocio en Cali: responde con fotos y precios, toma el pedido, lo cobra por Nequi y te avisa. 15 días gratis.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Blexi | Vendedor con IA para WhatsApp en Cali y el Valle del Cauca",
    description:
      "Blexi es el vendedor con IA para el WhatsApp de tu negocio en Cali: responde con fotos y precios, toma el pedido, lo cobra por Nequi y te avisa. 15 días gratis.",
    siteName: "BLEXI",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blexi | Vendedor con IA para WhatsApp en Cali y el Valle del Cauca",
    description:
      "Blexi es el vendedor con IA para el WhatsApp de tu negocio en Cali: responde con fotos y precios, toma el pedido, lo cobra por Nequi y te avisa. 15 días gratis.",
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
      className={cn(display.variable, body.variable)}
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
