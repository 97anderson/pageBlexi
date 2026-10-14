"use client";

import { MessageCircle } from "lucide-react";

import { enlaceWhatsApp } from "@/lib/config";
import { track } from "@/lib/medicion";

/**
 * El único objetivo de la página: abrir WhatsApp con un mensaje listo.
 *
 * El botón principal es VERDE WhatsApp con texto oscuro (#0F172A sobre
 * #25D366 ≈ 9:1) y es lo único verde de la página: se aísla del degradado de
 * marca (efecto Von Restorff) y anticipa el destino, porque es el verde que
 * esta audiencia ya toca todos los días. El degradado no sirve de botón: su
 * extremo cian no alcanza contraste con texto blanco.
 */

type Variante = "accion" | "secundarioClaro" | "secundarioOscuro";

const estilos: Record<Variante, string> = {
  accion:
    "bg-blx-wa text-blx-tinta shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] hover:bg-blx-waHover",
  secundarioClaro: "border border-blx-tinta/20 bg-white text-blx-tinta hover:border-blx-tinta/40",
  secundarioOscuro: "border border-blx-bordeFuerte text-white hover:bg-white/5",
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
  variante = "accion",
  className = "",
  datos,
}: Props) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("cta_clic", { seccion, ...datos })}
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-center font-display text-base font-bold transition active:translate-y-px ${estilos[variante]} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" strokeWidth={2.4} aria-hidden />
      {children}
    </a>
  );
}

/** Lo que pasa al tocar: se dice debajo de cada botón principal. */
export function QuePasaAlTocar({ oscuro = false, className = "" }: { oscuro?: boolean; className?: string }) {
  return (
    <p className={`mt-3 text-sm ${oscuro ? "text-blx-apagadoNoche" : "text-blx-apagado"} ${className}`}>
      Se abre WhatsApp con el mensaje listo. Tú decides si lo envías.
    </p>
  );
}
