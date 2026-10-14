import { BlexiMark } from "@/components/brand/BlexiMark";
import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";

const links = [
  { label: "Cómo vende", href: "#como-vende" },
  { label: "Haz la cuenta", href: "#calculadora" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-blx-tinta/90 text-white backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Blexi, inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-white">
            <BlexiMark state="static" height={20} />
          </span>
          <span className="font-display text-base font-bold tracking-tight">blexi</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Secciones">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <BotonWhatsApp
          seccion="navegacion"
          variante="wa"
          mensaje="Hola, quiero ver cómo vende Blexi en mi negocio"
          className="min-h-10 px-4 text-sm"
        >
          <span className="hidden sm:inline">Hablar por WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </BotonWhatsApp>
      </div>
    </header>
  );
}
