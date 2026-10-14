"use client";

import { LogoBlexi } from "@/components/brand/LogoBlexi";

const groups = [
  {
    title: "Producto",
    links: [
      { label: "Cómo funciona", href: "/#como" },
      { label: "Haz la cuenta", href: "/#calculadora" },
      { label: "Preguntas", href: "/#preguntas" },
      { label: "Precios", href: "/#precios" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "BlueCode Solutions", href: "https://bluecodesolution.com" },
      { label: "Contacto", href: "/#empezar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Tratamiento de datos", href: "/tratamiento-de-datos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-blx-linea bg-white pb-28 sm:pb-0">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoBlexi id="logo-pie" />
              <span className="font-grotesk text-[22px] font-bold tracking-[-0.02em] text-blx-tinta">Blexi</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blx-apagado">
              Blexi responde, toma el pedido, lo cobra y te avisa. Vendedor con
              IA para el WhatsApp de las pymes de Colombia.
            </p>
            <p className="mt-6 text-xs text-blx-apagado">
              Powered by{" "}
              <a
                href="https://bluecodesolution.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blx-tinta hover:underline"
              >
                BlueCode Solutions
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="font-grotesk text-[15px] font-bold text-blx-tinta">
                  {g.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-blx-apagado transition-colors hover:text-blx-tinta"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-blx-linea pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-blx-apagado">
            © {new Date().getFullYear()} Blexi · BlueCode Solutions · Hecho en Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
