import { ArrowDown, Check } from "lucide-react";

import { BotonWhatsApp, QuePasaAlTocar } from "@/components/lanzamiento/BotonWhatsApp";
import { CelularDeVenta } from "@/components/lanzamiento/CelularDeVenta";
import { PROMESA_ALTA_ASISTIDA, PRUEBA_DIAS, VARIANTE_HERO } from "@/lib/config";

const sinRiesgo = [
  `${PRUEBA_DIAS} días gratis, sin tarjeta`,
  "Cancelas cuando quieras",
  ...(PROMESA_ALTA_ASISTIDA.activo ? [PROMESA_ALTA_ASISTIDA.corta] : []),
];

/**
 * Primer pantallazo en Z: marca arriba a la izquierda, titular y un solo
 * botón a la izquierda, el producto a la derecha (en celular, debajo).
 *
 * Dos variantes con la misma marca (`VARIANTE_HERO`):
 * - claro: fondo claro y legible al sol, con una vitrina oscura del producto;
 * - oscuro: todo en Noche Cobalto, estilo producto de IA.
 */
export function Hero({ variante = VARIANTE_HERO }: { variante?: "claro" | "oscuro" }) {
  const oscuro = variante === "oscuro";

  return (
    <section
      id="inicio"
      className={`relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pb-24 ${oscuro ? "bg-blx-noche text-white" : "bg-gradient-to-b from-white to-blx-claro text-blx-tinta"}`}
    >
      {oscuro && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(144,48,240,0.22),transparent)]" />
          <div className="absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(0,216,240,0.14),transparent)]" />
        </div>
      )}

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="min-w-0">
          <p
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em] ${
              oscuro ? "bg-white/5 text-blx-textoNoche ring-1 ring-blx-borde" : "bg-white text-blx-azulTexto ring-1 ring-blx-linea"
            }`}
          >
            <span className="size-1.5 rounded-full bg-blexi" aria-hidden />
            Vendedor con IA para WhatsApp · Hecho en Colombia
          </p>

          <h1 className="mt-6 font-grotesk text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] [text-wrap:balance] sm:text-6xl lg:text-[4.4rem]">
            Tu WhatsApp{" "}
            <span className={`bg-clip-text text-transparent ${oscuro ? "bg-blexi" : "bg-blexi-texto"}`}>vende solo.</span>
          </h1>

          <p className={`mt-6 max-w-xl text-lg leading-relaxed sm:text-xl ${oscuro ? "text-blx-textoNoche" : "text-blx-apagado"}`}>
            Son las 9:40 de la noche, ya cerraste y alguien pregunta «¿todavía tiene disponible?». Blexi le responde con
            foto y precio, toma el pedido, lo cobra por Nequi y te avisa.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <span id="cta-hero" className="contents">
              <BotonWhatsApp
                seccion={`hero_${variante}`}
                mensaje="Hola, quiero ver a Blexi vendiendo en mi negocio"
                className="sm:px-8"
              >
                Quiero ver a Blexi en mi negocio
              </BotonWhatsApp>
            </span>
            <a
              href="#como-vende"
              className={`inline-flex items-center justify-center gap-1.5 text-[15px] font-semibold underline-offset-4 hover:underline ${oscuro ? "text-blx-textoNoche" : "text-blx-tinta"}`}
            >
              Ver cómo vende <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
          <QuePasaAlTocar oscuro={oscuro} />

          <ul className={`mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t pt-6 text-[15px] font-medium ${oscuro ? "border-blx-borde" : "border-blx-linea"}`}>
            {sinRiesgo.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className={`size-4 ${oscuro ? "text-blx-cian" : "text-blx-azulTexto"}`} strokeWidth={3} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* La vitrina del producto: en la variante clara es el único bloque
            oscuro del primer pantallazo, para que el producto se lea como
            tecnología sin oscurecer la lectura. */}
        <div className="min-w-0">
          <div
            className={`relative rounded-[2rem] p-5 pt-12 sm:p-8 sm:pt-14 ${
              oscuro ? "bg-blx-tarjeta/50 ring-1 ring-blx-borde" : "bg-blx-noche shadow-[0_30px_80px_-30px_rgba(48,96,240,0.55)]"
            }`}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-blexi" aria-hidden />
            <CelularDeVenta />
            <p className="mt-5 text-center text-xs text-blx-apagadoNoche">Ilustración con datos de ejemplo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
