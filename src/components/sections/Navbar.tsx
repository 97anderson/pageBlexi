import { BlexiMark } from "@/components/brand/BlexiMark";
import { enlaceWhatsApp } from "@/lib/config";

const links = [
  { label: "Cómo vende", href: "#como-vende" },
  { label: "Qué incluye", href: "#incluye" },
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

        <a
          href={enlaceWhatsApp("Hola, quiero ver cómo vende Blexi en mi negocio")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-blx-wa px-4 text-sm font-bold text-blx-tinta transition hover:brightness-95"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </header>
  );
}
