"use client";

import { MessageCircle } from "lucide-react";

import { enlaceWhatsApp } from "@/lib/config";
import { track } from "@/lib/medicion";

/**
 * El único objetivo de la página: abrir WhatsApp con un mensaje listo. Cada
 * sección manda su propio texto y su nombre, para saber desde dónde se tocó.
 */

type Variante = "sol" | "tinta" | "contorno" | "contornoClaro" | "wa";

const estilos: Record<Variante, string> = {
  sol: "bg-blx-sol text-blx-tinta shadow-[0_14px_40px_-12px_rgba(255,106,26,0.8)] hover:brightness-105",
  tinta: "bg-blx-tinta text-white hover:bg-blx-tintaSuave",
  contorno: "border border-white/25 text-white hover:bg-white/10",
  contornoClaro: "border border-blx-tinta/20 text-blx-tinta hover:bg-blx-tinta/5",
  wa: "bg-blx-wa text-blx-tinta hover:brightness-95",
};

type Props = {
  seccion: string;
  mensaje: string;
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  datos?: Record<string, unknown>;
};

export function BotonWhatsApp({
  seccion,
  mensaje,
  children,
  variante = "sol",
  className = "",
  datos,
}: Props) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("cta_clic", { seccion, ...datos })}
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 text-center text-base font-extrabold transition active:translate-y-px ${estilos[variante]} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" strokeWidth={2.4} aria-hidden />
      {children}
    </a>
  );
}

/** Lo que pasa al tocar: se dice debajo de cada botón principal. */
export function QuePasaAlTocar({ claro = false }: { claro?: boolean }) {
  return (
    <p className={claro ? "mt-3 text-sm text-blx-gris" : "mt-3 text-sm text-white/60"}>
      Se abre WhatsApp con el mensaje listo. Tú decides si lo envías.
    </p>
  );
}
