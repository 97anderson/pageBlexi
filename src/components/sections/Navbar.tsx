"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoBlexi } from "@/components/brand/LogoBlexi";
import { URL_INICIAR_SESION, enlaceWhatsApp } from "@/lib/config";
import { track } from "@/lib/medicion";

const links = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como" },
  { label: "Precios", href: "#precios" },
  { label: "Preguntas", href: "#preguntas" },
];

const MENSAJE = "Hola, quiero probar Blexi gratis en mi negocio";

/**
 * Nav del diseño A: 84 px, logo 46×24 + "Blexi" a 26 px, enlaces a 17 px.
 * En celular: logo, "Probar gratis" y un menú desplegable con aria-expanded.
 */
export function Navbar() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, [abierto]);

  return (
    <header className="sticky top-0 z-50 border-b border-blx-linea bg-[rgba(251,251,253,0.92)] backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex h-[84px] max-w-[1240px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3 text-blx-tinta no-underline">
          <LogoBlexi id="logo-nav" />
          <span className="font-grotesk text-[26px] font-bold tracking-[-0.02em]">Blexi</span>
        </a>

        <div className="hidden gap-9 text-[17px] font-medium lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-blx-tinta no-underline hover:text-blx-cobalto">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-5">
          <a href={URL_INICIAR_SESION} className="hidden text-[17px] font-medium text-blx-tinta no-underline hover:text-blx-cobalto lg:inline">
            Iniciar sesión
          </a>
          <a
            href={enlaceWhatsApp(MENSAJE)}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("cta_clic", { seccion: "navegacion" })}
            className="inline-flex min-h-11 items-center rounded-full bg-blx-tinta px-4 py-[13px] text-base font-semibold sm:px-[22px] leading-none text-white no-underline hover:bg-[#1B2238]"
          >
            Probar gratis
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-blx-linea text-blx-tinta lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <div id="menu-movil" hidden={!abierto} className="border-t border-blx-linea bg-blx-fondo lg:hidden">
        <ul className="mx-auto flex max-w-[1240px] flex-col px-6 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAbierto(false)} className="flex min-h-12 items-center text-[17px] font-medium text-blx-tinta no-underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={URL_INICIAR_SESION} className="flex min-h-12 items-center text-[17px] font-medium text-blx-tinta no-underline">
              Iniciar sesión
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
