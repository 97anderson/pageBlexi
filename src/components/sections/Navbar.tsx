import { MessageCircle } from "lucide-react";

import { BlexiMark } from "@/components/brand/BlexiMark";
import { VARIANTE_HERO, enlaceWhatsApp } from "@/lib/config";

const links = [
  { label: "Cómo vende", href: "#como-vende" },
  { label: "Haz la cuenta", href: "#calculadora" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
];

/**
 * La barra no compite con el botón del hero: el WhatsApp de aquí es un
 * enlace discreto, no un segundo botón verde (ley de Hick).
 */
export function Navbar() {
  const oscuro = VARIANTE_HERO === "oscuro";
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${
        oscuro ? "border-blx-borde bg-blx-noche/90 text-white" : "border-blx-linea bg-white/90 text-blx-tinta"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Blexi, inicio">
          <span className={`flex size-9 items-center justify-center rounded-xl ${oscuro ? "bg-white/5 ring-1 ring-blx-borde" : "bg-white ring-1 ring-blx-linea"}`}>
            <BlexiMark state="static" height={18} />
          </span>
          <span className="font-grotesk text-lg font-bold tracking-tight">Blexi</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Secciones">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                oscuro ? "text-blx-textoNoche hover:bg-white/5 hover:text-white" : "text-blx-apagado hover:bg-blx-claro hover:text-blx-tinta"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={enlaceWhatsApp("Hola, tengo una pregunta sobre Blexi")}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold ring-1 ${
            oscuro ? "text-white ring-blx-borde hover:bg-white/5" : "text-blx-tinta ring-blx-linea hover:bg-blx-claro"
          }`}
        >
          <MessageCircle className="size-4" aria-hidden />
          <span className="hidden sm:inline">Escríbenos</span>
          <span className="sr-only sm:hidden">Escríbenos por WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
