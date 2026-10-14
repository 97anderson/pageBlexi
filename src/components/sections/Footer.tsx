"use client";

import { BlexiMark } from "@/components/brand/BlexiMark";

const groups = [
  {
    title: "Producto",
    links: [
      { label: "Cómo vende", href: "/#como-vende" },
      { label: "Haz la cuenta", href: "/#calculadora" },
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
    <footer className="border-t border-slate-200 bg-white pb-28 sm:pb-0">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/70 ring-1 ring-black/[0.06]">
                <BlexiMark state="static" height={20} />
              </span>
              <span className="font-grotesk text-lg font-extrabold tracking-tight text-brand-textDark">
                BLEXI
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-textMuted">
              Blexi responde, toma el pedido, lo cobra y te avisa. Vendedor con
              IA para el WhatsApp de las pymes de Colombia.
            </p>
            <p className="mt-6 text-xs text-slate-400">
              Powered by{" "}
              <a
                href="https://bluecodesolution.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-600 hover:underline"
              >
                BlueCode Solutions
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="font-grotesk text-sm font-bold text-brand-textDark">
                  {g.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-brand-textMuted transition-colors hover:text-brand-textDark"
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-brand-textMuted">
            © {new Date().getFullYear()} Blexi · BlueCode Solutions · Hecho en Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
