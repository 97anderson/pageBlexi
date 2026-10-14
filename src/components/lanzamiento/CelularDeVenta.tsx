"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, Check, CheckCheck } from "lucide-react";
import type { ReactNode } from "react";

import { BlexiMark } from "@/components/brand/BlexiMark";

/**
 * Una venta de punta a punta en un celular: pregunta, productos con foto y
 * precio, pedido, cobro por Nequi, comprobante y el aviso al dueño. Es la
 * única animación orquestada de la página; con movimiento reducido sale
 * entera. Tienda de ejemplo genérica: sin marcas ni personas reales.
 */

type Paso = { quien: "cliente" | "blexi"; contenido: ReactNode };

/** Frasco dibujado con CSS: no depende de fotos de marcas reales. */
function Frasco({ tono }: { tono: string }) {
  return (
    <span className="relative flex size-12 shrink-0 items-end justify-center rounded-lg bg-slate-100" aria-hidden>
      <span className="absolute top-1.5 h-2 w-3 rounded-sm bg-slate-500" />
      <span className={`mb-1.5 h-7 w-7 rounded-md ${tono}`} />
    </span>
  );
}

const producto = (tono: string, nombre: string, detalle: string, precio: string) => (
  <div className="flex items-center gap-2.5 rounded-xl bg-white p-1.5 pr-3 ring-1 ring-black/5">
    <Frasco tono={tono} />
    <span className="min-w-0 leading-tight">
      <span className="block truncate text-[12.5px] font-semibold text-blx-tinta">{nombre}</span>
      <span className="block text-[11px] text-blx-apagado">{detalle}</span>
      <span className="text-[12px] font-bold text-blx-azulTexto">{precio}</span>
    </span>
  </div>
);

const pasos: Paso[] = [
  { quien: "cliente", contenido: "Hola, ¿tienen un perfume para hombre que dure todo el día?" },
  {
    quien: "blexi",
    contenido: (
      <div className="space-y-1.5">
        <p>¡Claro! Estos son los que más se llevan:</p>
        {producto("bg-gradient-to-b from-amber-700 to-amber-900", "Madera Intensa", "Eau de parfum · 100 ml", "$185.000")}
        {producto("bg-gradient-to-b from-sky-400 to-sky-600", "Cítrico Fresco", "Eau de toilette · 50 ml", "$129.000")}
      </div>
    ),
  },
  { quien: "cliente", contenido: "Me llevo Madera Intensa. Envío a Chapinero, Bogotá" },
  {
    quien: "blexi",
    contenido: (
      <div className="space-y-2">
        <div className="rounded-xl bg-white p-2.5 text-[12px] ring-1 ring-black/5">
          <div className="flex justify-between gap-3"><span>1 × Madera Intensa 100 ml</span><span>$185.000</span></div>
          <div className="flex justify-between gap-3 text-blx-apagado"><span>Envío Chapinero</span><span>$12.000</span></div>
          <div className="mt-1.5 flex justify-between gap-3 border-t border-black/10 pt-1.5 font-bold"><span>Total</span><span>$197.000</span></div>
        </div>
        <span className="flex h-9 items-center justify-center rounded-lg bg-[#200020] text-[12.5px] font-bold text-white">
          Pagar por Nequi
        </span>
      </div>
    ),
  },
  {
    quien: "cliente",
    contenido: (
      <span className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-md bg-[#200020] text-[10px] font-bold text-white" aria-hidden>
          N
        </span>
        Comprobante.jpg
      </span>
    ),
  },
  { quien: "blexi", contenido: "¡Pago recibido! Tu pedido sale hoy. Te aviso cuando vaya en camino." },
];

export function CelularDeVenta() {
  const quieto = useReducedMotion();
  const retraso = (i: number) => (quieto ? 0 : 0.5 + i * 0.7);
  const finDelChat = retraso(pasos.length);

  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      {/* Aviso al dueño: llega al final, cuando la venta está cobrada. La
          posición va en un contenedor aparte porque framer-motion escribe su
          propio `transform`. */}
      <div className="absolute inset-x-3 -top-6 z-20 sm:-right-8 sm:left-auto sm:w-[268px]" role="status">
        <motion.div
          initial={quieto ? false : { opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: finDelChat, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-blexi p-px shadow-2xl shadow-blx-cobalto/30"
        >
          <div className="flex items-start gap-3 rounded-[15px] bg-white p-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blx-noche">
              <Bell className="size-[18px] text-blx-cian" strokeWidth={2.4} aria-hidden />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-[11px] font-semibold uppercase tracking-wider text-blx-apagado">
                Blexi · para el dueño
              </span>
              <span className="block font-grotesk text-[15px] font-bold text-blx-tinta">Nuevo pedido · $197.000</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <Check className="size-3.5" strokeWidth={3} aria-hidden /> Pagado por Nequi
              </span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* El celular */}
      <div className="rounded-[2.6rem] bg-[#05080F] p-2.5 shadow-[0_40px_90px_-30px_rgba(15,23,42,0.75)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#ECE5DD]">
          <div className="flex items-center gap-2.5 bg-[#075E54] px-4 pb-3 pt-6 text-white">
            <span className="flex size-8 items-center justify-center rounded-full bg-white" aria-hidden>
              <BlexiMark state="static" height={14} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Tienda de perfumes</span>
              <span className="text-[11px] text-white/75">Responde Blexi · en línea</span>
            </span>
          </div>

          <ol className="flex min-h-[440px] flex-col gap-2 px-3 py-4 text-[13px] leading-snug text-blx-tinta" aria-label="Ejemplo de conversación de venta">
            {pasos.map((p, i) => (
              <motion.li
                key={i}
                initial={quieto ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: retraso(i), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={
                  p.quien === "cliente"
                    ? "ml-auto max-w-[82%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3 py-2"
                    : "mr-auto max-w-[88%] rounded-2xl rounded-tl-md bg-white/95 px-3 py-2"
                }
              >
                <span className="sr-only">{p.quien === "cliente" ? "Cliente: " : "Blexi: "}</span>
                {p.contenido}
                {p.quien === "cliente" && <CheckCheck className="ml-1 inline size-3.5 text-sky-500" aria-hidden />}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
