"use client";

import { MessageCircle } from "lucide-react";

import { enlaceWhatsApp } from "@/lib/config";
import { track } from "@/lib/medicion";

/**
 * Botón de la página: píldora del diseño A que abre WhatsApp con el mensaje
 * listo. `negra` es la principal (#0B1020, texto blanco, 18 px, 18×32);
 * `contorno` y `contornoNegro` son las secundarias del diseño.
 */

type Variante = "negra" | "contorno" | "contornoNegro";

const estilos: Record<Variante, string> = {
  negra: "bg-blx-tinta text-white hover:bg-[#1B2238]",
  contorno: "border border-blx-bordeBoton bg-white text-blx-tinta hover:border-blx-tinta",
  contornoNegro: "border border-blx-tinta text-blx-tinta hover:bg-blx-tinta hover:text-white",
};

type Props = {
  seccion: string;
  mensaje: string;
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  datos?: Record<string, unknown>;
  icono?: boolean;
};

export function BotonWhatsApp({
  seccion,
  mensaje,
  children,
  variante = "negra",
  className = "",
  datos,
  icono = true,
}: Props) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("cta_clic", { seccion, ...datos })}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-8 py-[18px] text-center text-lg font-semibold leading-none transition active:translate-y-px ${estilos[variante]} ${className}`}
    >
      {icono && <MessageCircle className="size-5 shrink-0" strokeWidth={2.2} aria-hidden />}
      {children}
    </a>
  );
}

/** Lo que pasa al tocar: se dice debajo de los botones principales. */
export function QuePasaAlTocar({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[15px] text-blx-apagado ${className}`}>Se abre WhatsApp con el mensaje listo. Tú decides si lo envías.</p>
  );
}
