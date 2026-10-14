"use client";

import { motion } from "framer-motion";

import { BlexiMark } from "@/components/brand/BlexiMark";
import {
  CIERRE_DE_LANZAMIENTO,
  DESCUENTO_DE_LANZAMIENTO_PCT,
  MESES_DE_LANZAMIENTO,
} from "@/lib/lanzamiento";

const links = [
  { label: "Producto", href: "#flujo" },
  { label: "CRM", href: "#crm" },
  { label: "Precios", href: "#precios" },
  { label: "Demo", href: "#hero" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl"
    >
      <a
        href="#precios"
        className="block bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1.5 text-center text-xs font-semibold text-white transition hover:opacity-90"
      >
        Precio de lanzamiento: {DESCUENTO_DE_LANZAMIENTO_PCT}% menos los primeros{" "}
        {MESES_DE_LANZAMIENTO} meses
        <span className="hidden sm:inline">
          {" "}· para negocios que se registren hasta el {CIERRE_DE_LANZAMIENTO}
        </span>
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="relative flex size-9 items-center justify-center overflow-visible rounded-2xl bg-white shadow-lg shadow-slate-200/70 ring-1 ring-black/[0.06]">
            <BlexiMark state="loader" height={20} />
          </span>
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

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/573222393582"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/40 transition hover:bg-brand-primaryHover hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Probar en WhatsApp
          </a>
        </div>
      </div>
    </motion.header>
  );
}
