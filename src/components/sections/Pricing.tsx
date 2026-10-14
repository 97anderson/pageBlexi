import { Check } from "lucide-react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { DiasRestantes } from "@/components/lanzamiento/DiasRestantes";
import type { PlanDeLaBase } from "@/lib/planes";
import {
  CUPOS_LANZAMIENTO,
  NOMBRES_DE_PLAN,
  PROMO,
  PRUEBA_DIAS,
  descuentoPct,
  finDeLaPromoEnPalabras,
  pesos,
} from "@/lib/config";

/**
 * Precios de lanzamiento sobre los de la base.
 *
 * El precio de lista y los topes salen del API (`leerPlanes`); el precio de
 * lanzamiento, de `PROMO`. Si el API no responde, la tarjeta no inventa el
 * precio de lista: dice «luego el precio de lista del plan» y no calcula
 * ahorro ni porcentaje.
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
    lineas: ["Ana, tu asistente, gratis el primer mes", "Sofía: publicaciones con fotos de tu catálogo"],
  },
  oro: {
    tagline: "Para el negocio con buen movimiento",
    lineas: [
      "Ana, tu asistente, gratis el primer mes",
      "Sofía: también imágenes creadas con IA",
      "Analíticas de ventas",
    ],
  },
  platino: {
    tagline: "Para alto volumen y varias sedes",
    lineas: [
      "Ana, tu asistente, gratis el primer mes",
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

export function Pricing({ planes }: { planes: PlanDeLaBase[] }) {
  const porSlug = new Map(planes.map((p) => [p.slug, p]));
  const recomendado = planes.find((p) => p.isRecommended)?.slug ?? "oro";

  return (
    <section id="precios" className="bg-blx-tinta py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-sol">Precio de lanzamiento</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight [text-wrap:balance] sm:text-[2.6rem]">
            Tus primeros {PROMO.meses} meses, casi 40 % más baratos.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Para negocios de Cali y el Valle que se registren hasta el {finDeLaPromoEnPalabras()}: <DiasRestantes />.
            Primero {PRUEBA_DIAS} días gratis, sin tarjeta. IVA incluido.
            {CUPOS_LANZAMIENTO.activo ? ` Solo ${CUPOS_LANZAMIENTO.total} cupos.` : ""}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {ORDEN.map((slug) => {
            const plan = porSlug.get(slug);
            const promo = PROMO.precios[slug];
            const lista = plan?.monthlyPriceCop;
            const conPromo = PROMO.activo && Boolean(promo);
            const pct = conPromo ? descuentoPct(promo, lista) : null;
            const ahorro = conPromo && lista && lista > promo ? (lista - promo) * PROMO.meses : null;
            const nombre = NOMBRES_DE_PLAN[slug] ?? plan?.name ?? slug;
            const destacado = slug === recomendado;
            const extra = extras[slug];
            const suave = destacado ? "text-blx-gris" : "text-white/65";

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
                    <span
                      className={
                        destacado
                          ? "rounded-full bg-blx-sol/15 px-2.5 py-0.5 text-sm font-extrabold text-blx-solTexto"
                          : "rounded-full bg-blx-sol px-2.5 py-0.5 text-sm font-extrabold text-blx-tinta"
                      }
                    >
                      −{pct} %
                    </span>
                  )}
                </div>
                <p className={`mt-1 text-sm ${suave}`}>{extra?.tagline}</p>

                <div className="mt-7">
                  {conPromo ? (
                    <>
                      {lista && lista > promo && (
                        <p className={`text-base ${suave}`}>
                          <span className="sr-only">Precio de lista: </span>
                          <s>{pesos(lista)}</s>/mes
                        </p>
                      )}
                      <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-display text-[2.5rem] font-extrabold leading-none tracking-tight">{pesos(promo)}</span>
                        <span className={`text-sm ${suave}`}>/mes</span>
                      </p>
                      <p className="mt-2 text-sm font-semibold">los primeros {PROMO.meses} meses · IVA incluido</p>
                      {ahorro && (
                        <p className={destacado ? "mt-3 inline-block rounded-lg bg-blx-sol/15 px-3 py-1.5 text-sm font-bold text-blx-solTexto" : "mt-3 inline-block rounded-lg bg-blx-sol/15 px-3 py-1.5 text-sm font-bold text-blx-sol"}>
                          Ahorras {pesos(ahorro)} en {PROMO.meses} meses
                        </p>
                      )}
                      <p className={`mt-3 text-sm ${suave}`}>
                        {lista ? `Desde el mes ${PROMO.meses + 1}: ${pesos(lista)}/mes.` : "Desde el mes siguiente: precio de lista del plan."}
                      </p>
                    </>
                  ) : (
                    lista && (
                      <p className="font-display text-[2.5rem] font-extrabold leading-none">
                        {pesos(lista)}
                        <span className="text-base font-medium">/mes</span>
                      </p>
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

                <BotonWhatsApp
                  seccion={`precios_${slug}`}
                  mensaje={`Hola, quiero empezar con el plan ${nombre} y el precio de lanzamiento`}
                  variante={destacado ? "sol" : "contorno"}
                  className="mt-8 w-full"
                >
                  Empezar con {nombre}
                </BotonWhatsApp>
                <p className={`mt-2 text-center text-xs ${suave}`}>{PRUEBA_DIAS} días gratis antes del primer cobro</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
          Precio de lanzamiento para negocios que se registren hasta el {finDeLaPromoEnPalabras()} de 2026. Empiezas con{" "}
          {PRUEBA_DIAS} días gratis sin tarjeta; después, las {PROMO.meses} primeras mensualidades van al precio de
          lanzamiento y desde la siguiente se cobra el precio de lista vigente, con aviso 15 días antes. Pagas con
          tarjeta; transferencia y Nequi para la suscripción vienen en camino. Todos los precios incluyen IVA.
          Conversaciones adicionales y otros servicios se cobran aparte según la tabla de tu panel.
        </p>
      </div>
    </section>
  );
}
