import { ArrowDown, MessageCircle } from "lucide-react";

import { CelularDeVenta } from "@/components/lanzamiento/CelularDeVenta";
import { PROMO, enlaceWhatsApp, pesos } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-blx-tinta pb-20 pt-14 text-white sm:pt-20 lg:pb-28"
    >
      {/* Franja de sol: un solo gesto de color detrás del celular. */}
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
            Vendedor con IA para WhatsApp
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight [text-wrap:balance] sm:text-6xl lg:text-[4.6rem]">
            Tu WhatsApp
            <br />
            <span className="text-blx-sol">vende solo.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Blexi responde a tus clientes con fotos y precios, toma el pedido,
            lo cobra por Nequi y te avisa. Tú solo despachas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={enlaceWhatsApp(
                "Hola, quiero mi descuento de lanzamiento de Blexi para mi negocio",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blx-sol px-7 text-base font-extrabold text-blx-tinta shadow-[0_14px_40px_-12px_rgba(255,106,26,0.8)] transition hover:brightness-105 active:translate-y-px"
            >
              <MessageCircle className="size-5" strokeWidth={2.4} aria-hidden />
              Quiero el precio de lanzamiento
            </a>
            <a
              href="#como-vende"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver cómo vende
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>

          <dl className="mt-10 flex max-w-lg flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
            <div>
              <dt className="text-xs text-white/60">Desde</dt>
              <dd className="whitespace-nowrap font-display text-base font-bold sm:text-xl">{pesos(PROMO.precios.plata)}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">Por</dt>
              <dd className="whitespace-nowrap font-display text-base font-bold sm:text-xl">{PROMO.meses} meses</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">IVA</dt>
              <dd className="whitespace-nowrap font-display text-base font-bold sm:text-xl">incluido</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-white/60">Hecho en Cali para pymes de Colombia.</p>
        </div>

        <div className="min-w-0 pt-6 lg:pt-0">
          <CelularDeVenta />
        </div>
      </div>
    </section>
  );
}
