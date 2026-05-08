import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

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
  title: "BLEXI — IA que vende por WhatsApp para tu Pyme",
  description:
    "BLEXI es el asistente de IA y CRM en tiempo real que atiende WhatsApp 24/7, cierra ventas y organiza tu negocio en Colombia sin que sepas de tecnología.",
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
        {children}
      </body>
    </html>
  );
}
