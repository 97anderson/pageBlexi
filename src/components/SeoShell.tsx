import Image from "next/image";

import blexiLogo from "@/app/img/blexi_logo.png";
import { Footer } from "@/components/sections/Footer";
import { WHATSAPP_PRUEBA, enlaceWhatsApp } from "@/lib/contacto";

/**
 * Marco de las páginas de contenido (rubros, comparación): la misma cabecera
 * clara de la página principal y el mismo pie.
 */
export function SeoShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bgMain">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
        <div className="container-page flex h-14 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center overflow-hidden rounded-xl bg-white shadow ring-1 ring-black/[0.06]">
              <Image src={blexiLogo} alt="Logo de BLEXI, agente de IA para WhatsApp" width={22} height={22} />
            </span>
            <span className="font-grotesk text-base font-extrabold tracking-tight text-brand-textDark">
              BLEXI
            </span>
          </a>
          <nav className="flex items-center gap-1 text-sm font-medium text-brand-textMuted">
            <a href="/#precios" className="hidden rounded-full px-3 py-2 hover:text-brand-textDark sm:inline">
              Precios
            </a>
            <a
              href={enlaceWhatsApp(WHATSAPP_PRUEBA)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Probar en WhatsApp
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
