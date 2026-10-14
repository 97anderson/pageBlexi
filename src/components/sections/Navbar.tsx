"use client";

import { motion } from "framer-motion";

import { BlexiMark } from "@/components/brand/BlexiMark";
import {
  CIERRE_DE_LANZAMIENTO,
  DESCUENTO_DE_LANZAMIENTO_PCT,
  MESES_DE_LANZAMIENTO,
} from "@/lib/lanzamiento";
import { WHATSAPP_PRUEBA, enlaceWhatsApp } from "@/lib/contacto";

const links = [
  { label: "Producto", href: "#flujo" },
  { label: "CRM", href: "#crm" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <a
        href="#precios"
        className="block bg-slate-950 px-4 py-1.5 text-center font-grotesk text-xs font-semibold text-slate-300 transition hover:text-white"
      >
        <span className="text-[#00D8F0]">●</span> Lanzamiento: {DESCUENTO_DE_LANZAMIENTO_PCT}% menos los
        primeros {MESES_DE_LANZAMIENTO} meses
        <span className="hidden sm:inline">
          {" "}· registros hasta el {CIERRE_DE_LANZAMIENTO}
        </span>
      </a>
      {/* Menú en cápsula flotante, separado del borde. */}
      <div className="container-page pt-3">
        <div className="flex h-14 items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/85 pl-4 pr-2 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
          <a href="#hero" className="flex items-center gap-2.5">
            <BlexiMark state="loader" height={20} />
            <span className="font-grotesk text-lg font-extrabold tracking-tight text-brand-textDark">
              BLEXI
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-textMuted transition-colors hover:bg-slate-100 hover:text-brand-textDark"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={enlaceWhatsApp(WHATSAPP_PRUEBA)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Probar en WhatsApp
          </a>
        </div>
      </div>
    </motion.header>
  );
}
