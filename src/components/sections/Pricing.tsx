import { Check, MessageCircle } from "lucide-react";

import type { PlanDeLaBase } from "@/lib/planes";
import {
  NOMBRES_DE_PLAN,
  PROMO,
  enlaceWhatsApp,
  finDeLaPromoEnPalabras,
  pesos,
} from "@/lib/config";

/**
 * Precios de lanzamiento sobre los de la base.
 *
 * El precio de lista y los topes salen del API (`leerPlanes`); el precio de
 * lanzamiento, de `PROMO`. Si el API no responde, la tarjeta dice «luego el
 * precio de lista» en vez de inventar una cifra.
 */

type Linea = { clave: string; texto: (n: string) => string; ilimitado?: string };

const numero = (n: number) => n.toLocaleString("es-CO");

/** Topes que muestra cada tarjeta, en este orden, si la base los trae. */
const lineasDeLaBase: Linea[] = [
  { clave: "monthly_conversations", texto: (n) => `${n} conversaciones al mes` },
  { clave: "max_catalog_products", texto: (n) => `Hasta ${n} productos en el catálogo`, ilimitado: "Catálogo sin tope" },
  { clave: "max_crm_users", texto: (n) => `${n} usuarios en el panel`, ilimitado: "Usuarios sin tope" },
  { clave: "voice_notes_limit", texto: (n) => `Entiende ${n} notas de voz al mes`, ilimitado: "Notas de voz sin tope" },
  { clave: "vision_monthly_limit", texto: (n) => `Reconoce ${n} fotos de clientes al mes`, ilimitado: "Fotos de clientes sin tope" },
  { clave: "max_couriers", texto: (n) => `Domicilios con ${n} domiciliarios`, ilimitado: "Domiciliarios sin tope" },
];

/** Lo que no es una cifra de la base: depende del plan y de la decisión comercial. */
const extras: Record<string, { tagline: string; lineas: string[] }> = {
  plata: {
    tagline: "Para empezar a vender por WhatsApp",
    lineas: [
      "Ana gratis el primer mes",
      "Sofía: publicaciones con fotos de tu catálogo",
    ],
  },
  oro: {
    tagline: "Para el negocio con buen movimiento",
    lineas: [
      "Ana gratis el primer mes",
      "Sofía: también imágenes creadas con IA",
      "Analíticas de ventas",
    ],
  },
  platino: {
    tagline: "Para alto volumen y varias sedes",
    lineas: [
      "Ana gratis el primer mes",
      "Sofía: también imágenes creadas con IA",
      "Segmentos de clientes y alertas del negocio",
    ],
  },
};

const ORDEN = ["plata", "oro", "platino"];

function lineas(features: Record<string, number> | undefined): string[] {
  if (!features) return [];
  return lineasDeLaBase.flatMap((l) => {
    const n = features[l.clave];
    if (!Number.isFinite(n) || n === 0) return [];
    if (n < 0) return l.ilimitado ? [l.ilimitado] : [];
    return [l.texto(numero(n))];
  });
}

function descuento(promo: number, lista?: number): number | null {
  if (!lista || lista <= promo) return null;
  // Se redondea hacia abajo: «59 %» es cierto, «60 %» con 59,4 no lo es.
  return Math.floor((1 - promo / lista) * 100);
}

export function Pricing({ planes }: { planes: PlanDeLaBase[] }) {
  const porSlug = new Map(planes.map((p) => [p.slug, p]));
  const recomendado = planes.find((p) => p.isRecommended)?.slug ?? "oro";

  return (
    <section id="precios" className="bg-blx-tinta py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-sol">Precio de lanzamiento</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight [text-wrap:balance] sm:text-[2.6rem]">
            Tus primeros {PROMO.meses} meses, a menos de la mitad.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Para negocios que se registren hasta el {finDeLaPromoEnPalabras()}. IVA incluido. Cancelas cuando quieras.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {ORDEN.map((slug) => {
            const plan = porSlug.get(slug);
            const promo = PROMO.precios[slug];
            const lista = plan?.monthlyPriceCop;
            const pct = PROMO.activo && promo ? descuento(promo, lista) : null;
            const nombre = NOMBRES_DE_PLAN[slug] ?? plan?.name ?? slug;
            const destacado = slug === recomendado;
            const extra = extras[slug];

            return (
              <li
                key={slug}
                className={
                  destacado
                    ? "relative flex flex-col rounded-3xl bg-white p-7 text-blx-tinta ring-4 ring-blx-sol sm:p-8"
                    : "relative flex flex-col rounded-3xl bg-blx-tintaSuave p-7 ring-1 ring-blx-linea sm:p-8"
                }
              >
                {destacado && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-blx-sol px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-blx-tinta">
                    Recomendado
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-extrabold">{nombre}</h3>
                  {pct !== null && (
                    <span className={destacado ? "rounded-full bg-blx-sol/15 px-2.5 py-0.5 text-sm font-extrabold text-blx-solTexto" : "rounded-full bg-blx-sol px-2.5 py-0.5 text-sm font-extrabold text-blx-tinta"}>
                      −{pct} %
                    </span>
                  )}
                </div>
                <p className={destacado ? "mt-1 text-sm text-blx-gris" : "mt-1 text-sm text-white/65"}>{extra?.tagline}</p>

                <div className="mt-7">
                  {PROMO.activo && promo ? (
                    <>
                      <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-display text-[2.6rem] font-extrabold leading-none tracking-tight">{pesos(promo)}</span>
                        <span className={destacado ? "text-sm text-blx-gris" : "text-sm text-white/65"}>/mes</span>
                      </p>
                      <p className={destacado ? "mt-2 text-sm font-semibold text-blx-tinta" : "mt-2 text-sm font-semibold text-white"}>
                        los primeros {PROMO.meses} meses
                      </p>
                      <p className={destacado ? "text-sm text-blx-gris" : "text-sm text-white/65"}>
                        {lista ? (
                          <>luego {pesos(lista)}/mes · IVA incluido</>
                        ) : (
                          <>luego el precio de lista del plan · IVA incluido</>
                        )}
                      </p>
                    </>
                  ) : (
                    lista && (
                      <p className="font-display text-[2.6rem] font-extrabold leading-none">{pesos(lista)}<span className="text-base font-medium">/mes</span></p>
                    )
                  )}
                </div>

                <ul className="mt-7 flex-1 space-y-2.5 text-[15px]">
                  {[...lineas(plan?.features), ...(extra?.lineas ?? [])].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <Check className={destacado ? "mt-0.5 size-4 shrink-0 text-blx-solTexto" : "mt-0.5 size-4 shrink-0 text-blx-sol"} strokeWidth={3} aria-hidden />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={enlaceWhatsApp(`Hola, quiero el plan ${nombre} con el precio de lanzamiento`)}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    destacado
                      ? "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blx-sol px-6 text-base font-extrabold text-blx-tinta transition hover:brightness-105"
                      : "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-base font-bold text-white transition hover:bg-white/10"
                  }
                >
                  <MessageCircle className="size-[18px]" aria-hidden />
                  Quiero {nombre}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
          Precio de lanzamiento para negocios que se registren entre hoy y el {finDeLaPromoEnPalabras()} de 2026:
          aplica a las {PROMO.meses} primeras mensualidades del plan elegido. Desde la siguiente se cobra el precio de
          lista vigente y te avisamos 15 días antes. Todos los precios incluyen IVA. Conversaciones adicionales y
          otros servicios se cobran aparte según la tabla de tu panel.
        </p>
      </div>
    </section>
  );
}
