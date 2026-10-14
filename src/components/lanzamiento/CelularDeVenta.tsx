"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Beef, Bell, Check, CheckCheck, CupSoda, Sandwich } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Una venta de punta a punta en un celular: pregunta, fotos con precio,
 * pedido, cobro por Nequi, comprobante y el aviso al dueño. Es la única
 * animación orquestada de la página; con movimiento reducido sale entera.
 *
 * Negocio de ejemplo genérico de comidas rápidas: sin nombres reales.
 */

type Paso = { quien: "cliente" | "blexi"; contenido: ReactNode };

const producto = (
  Icono: typeof Beef,
  nombre: string,
  precio: string,
  fondo: string,
) => (
  <div className="flex items-center gap-2.5 rounded-xl bg-white p-1.5 pr-3 ring-1 ring-black/5">
    <span
      className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${fondo}`}
      aria-hidden
    >
      <Icono className="size-6 text-white" strokeWidth={2} />
    </span>
    <span className="min-w-0 leading-tight">
      <span className="block truncate text-[12.5px] font-semibold text-blx-tinta">{nombre}</span>
      <span className="text-[12px] font-bold text-blx-solTexto">{precio}</span>
    </span>
  </div>
);

const pasos: Paso[] = [
  { quien: "cliente", contenido: "Hola, ¿qué hamburguesas tienen?" },
  {
    quien: "blexi",
    contenido: (
      <div className="space-y-1.5">
        <p>¡Hola! Estas son las que más piden hoy:</p>
        {producto(Beef, "Hamburguesa doble", "$24.000", "bg-[#C2410C]")}
        {producto(Sandwich, "Salchipapa especial", "$18.000", "bg-[#B45309]")}
      </div>
    ),
  },
  { quien: "cliente", contenido: "Dame 2 dobles y una salchipapa, a domicilio en San Fernando" },
  {
    quien: "blexi",
    contenido: (
      <div className="space-y-2">
        <div className="rounded-xl bg-white p-2.5 text-[12px] ring-1 ring-black/5">
          <div className="flex justify-between gap-3"><span>2 × Hamburguesa doble</span><span>$48.000</span></div>
          <div className="flex justify-between gap-3"><span>1 × Salchipapa especial</span><span>$18.000</span></div>
          <div className="flex justify-between gap-3 text-blx-gris"><span>Domicilio San Fernando</span><span>$6.000</span></div>
          <div className="mt-1.5 flex justify-between gap-3 border-t border-black/10 pt-1.5 font-bold"><span>Total</span><span>$72.000</span></div>
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
        <span className="flex size-9 items-center justify-center rounded-md bg-[#200020] text-[9px] font-bold text-white" aria-hidden>
          N
        </span>
        Comprobante.jpg
      </span>
    ),
  },
  { quien: "blexi", contenido: "¡Pago recibido! Tu pedido sale en 30 minutos." },
];

export function CelularDeVenta() {
  const quieto = useReducedMotion();
  const retraso = (i: number) => (quieto ? 0 : 0.5 + i * 0.75);
  const finDelChat = retraso(pasos.length);

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Aviso al dueño: llega al final, cuando la venta está cobrada. */}
      {/* La posición va en un contenedor aparte: framer-motion escribe su
          propio `transform` y pisaría el translate de Tailwind. */}
      <div className="absolute inset-x-3 -top-5 z-20 sm:-right-10 sm:left-auto sm:w-[270px]" role="status">
      <motion.div
        initial={quieto ? false : { opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: finDelChat, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-2xl shadow-black/40 ring-1 ring-black/5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blx-sol text-blx-tinta">
            <Bell className="size-[18px]" strokeWidth={2.4} aria-hidden />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-blx-gris">
              Blexi · para el dueño
            </span>
            <span className="block text-sm font-bold text-blx-tinta">Nuevo pedido · $72.000</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <Check className="size-3.5" strokeWidth={3} aria-hidden /> Pagado por Nequi
            </span>
          </span>
        </div>
      </motion.div>
      </div>

      {/* El celular */}
      <div className="rounded-[2.6rem] bg-[#05090E] p-2.5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#ECE5DD]">
          <div className="flex items-center gap-2.5 bg-[#075E54] px-4 pb-3 pt-6 text-white">
            <span className="flex size-8 items-center justify-center rounded-full bg-white/15" aria-hidden>
              <CupSoda className="size-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Comidas rápidas del barrio</span>
              <span className="text-[11px] text-white/70">Responde Blexi · en línea</span>
            </span>
          </div>

          <ol className="flex min-h-[430px] flex-col gap-2 px-3 py-4 text-[13px] leading-snug text-blx-tinta" aria-label="Ejemplo de conversación de venta">
            {pasos.map((p, i) => (
              <motion.li
                key={i}
                initial={quieto ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: retraso(i), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={
                  p.quien === "cliente"
                    ? "ml-auto max-w-[82%] rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3 py-2"
                    : "mr-auto max-w-[88%] rounded-2xl rounded-tl-md bg-white/90 px-3 py-2"
                }
              >
                <span className="sr-only">{p.quien === "cliente" ? "Cliente: " : "Blexi: "}</span>
                {p.contenido}
                {p.quien === "cliente" && (
                  <CheckCheck className="ml-1 inline size-3.5 text-sky-500" aria-hidden />
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
