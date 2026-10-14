import { ArrowDown, Check } from "lucide-react";

import { BotonWhatsApp, QuePasaAlTocar } from "@/components/lanzamiento/BotonWhatsApp";
import { CelularDeVenta } from "@/components/lanzamiento/CelularDeVenta";
import { PROMESA_ALTA_ASISTIDA, PRUEBA_DIAS } from "@/lib/config";

const sinRiesgo = [
  `${PRUEBA_DIAS} días gratis, sin tarjeta`,
  "Cancelas cuando quieras",
  ...(PROMESA_ALTA_ASISTIDA.activo ? [PROMESA_ALTA_ASISTIDA.corta] : []),
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-blx-tinta pb-20 pt-12 text-white sm:pt-20 lg:pb-28"
    >
      {/* Un solo gesto de color: la franja de sol detrás del celular. */}
      <div
        className="pointer-events-none absolute -right-24 top-24 hidden h-[520px] w-[520px] rotate-12 rounded-[5rem] bg-blx-sol/90 lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-48 hidden h-[420px] w-[420px] rotate-12 rounded-[4rem] border-2 border-blx-cian/50 lg:block"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blx-cianClaro">
            Vendedor con IA para WhatsApp · Cali y el Valle
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight [text-wrap:balance] sm:text-6xl lg:text-[4.6rem]">
            Tu WhatsApp
            <br />
            <span className="text-blx-sol">vende solo.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Son las 9:40 de la noche, ya cerraste y alguien escribe «¿todavía tiene disponible?».
            Blexi le contesta con foto y precio, toma el pedido, lo cobra por Nequi y te avisa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BotonWhatsApp
              seccion="hero"
              mensaje="Hola, quiero ver a Blexi vendiendo en mi negocio con el precio de lanzamiento"
            >
              Quiero verlo en mi negocio
            </BotonWhatsApp>
            <a
              href="#como-vende"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver cómo vende
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
          <QuePasaAlTocar />

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-[15px] font-semibold">
            {sinRiesgo.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-blx-sol" strokeWidth={3} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 pt-6 lg:pt-0">
          <CelularDeVenta />
        </div>
      </div>
    </section>
  );
}
