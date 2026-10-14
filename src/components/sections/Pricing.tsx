import { Check } from "lucide-react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { DiasRestantes } from "@/components/lanzamiento/DiasRestantes";
import type { PlanDeLaBase } from "@/lib/planes";
import {
  ADICIONALES,
  CUPOS_LANZAMIENTO,
  NOMBRES_DE_PLAN,
  PROMO,
  PRUEBA_DIAS,
  TEXTO_LEGAL_LANZAMIENTO,
  descuentoPct,
  pesos,
} from "@/lib/config";

/**
 * Precios de lanzamiento sobre los de la base.
 *
 * Cada línea de la tarjeta está verificada: las cifras salen del API de
 * planes (`features`); las de módulo, de la semilla `plan_module_configs` del
 * CRM. Lo que no se pudo confirmar (POS, alertas, «entrena al agente») no se
 * muestra. Ana y Sofía van en su propio bloque: son adicionales con costo
 * aparte, no parte del plan.
 */

type Linea = { clave: string; texto: (n: string) => string; ilimitado?: string };

const numero = (n: number) => n.toLocaleString("es-CO");

/** Topes del API de planes, en este orden, si la base los trae y no son 0. */
const lineasDeLaBase: Linea[] = [
  { clave: "monthly_conversations", texto: (n) => `${n} conversaciones al mes` },
  { clave: "max_catalog_products", texto: (n) => `Hasta ${n} productos en el catálogo`, ilimitado: "Catálogo sin tope" },
  { clave: "max_crm_users", texto: (n) => `${n} usuarios en el panel`, ilimitado: "Usuarios sin tope" },
  { clave: "voice_notes_limit", texto: (n) => `Entiende ${n} notas de voz al mes`, ilimitado: "Notas de voz sin tope" },
  { clave: "vision_monthly_limit", texto: (n) => `Reconoce ${n} fotos que mandan tus clientes al mes`, ilimitado: "Fotos de clientes sin tope" },
  { clave: "max_couriers", texto: (n) => `Domicilios con hasta ${n} domiciliarios`, ilimitado: "Domiciliarios sin tope" },
  { clave: "max_locations", texto: (n) => (n === "1" ? "1 sede" : `Hasta ${n} sedes`), ilimitado: "Sedes sin tope" },
];

/** Módulos por plan según `plan_module_configs` (semilla del CRM). */
const modulos: Record<string, { tagline: string; lineas: string[] }> = {
  plata: {
    tagline: "Para empezar a vender por WhatsApp",
    lineas: ["Panel con pedidos, productos, clientes y conversaciones", "Citas para negocios de servicios"],
  },
  oro: {
    tagline: "Para el negocio con buen movimiento",
    lineas: ["Todo lo de Plata", "Analíticas de ventas"],
  },
  platino: {
    tagline: "Para alto volumen y varias sedes",
    lineas: ["Todo lo de Oro", "Segmentos de clientes"],
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
    <section id="precios" className="bg-blx-claro py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Precio de lanzamiento</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            Tus primeros {PROMO.meses} meses, casi 40 % más baratos.
          </h2>
          <p className="mt-5 text-lg text-blx-apagado">
            Primero {PRUEBA_DIAS} días gratis, sin tarjeta. Oferta para quien se registre a tiempo: <DiasRestantes />.
            IVA incluido.
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
            const mod = modulos[slug];

            const tarjeta = (
              <div className="flex h-full flex-col rounded-[15px] bg-white p-7 sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-grotesk text-2xl font-bold text-blx-tinta">{nombre}</h3>
                  {pct !== null && (
                    <span className="rounded-full bg-blx-azul/10 px-2.5 py-0.5 font-grotesk text-sm font-bold text-blx-azulTexto">−{pct} %</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-blx-apagado">{mod?.tagline}</p>

                <div className="mt-6">
                  {conPromo ? (
                    <>
                      {lista && lista > promo && (
                        <p className="text-base text-blx-apagado">
                          <span className="sr-only">Precio de lista: </span>
                          <s>{pesos(lista)}</s>/mes
                        </p>
                      )}
                      <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-grotesk text-[2.5rem] font-bold leading-none tracking-[-0.03em] text-blx-tinta">{pesos(promo)}</span>
                        <span className="text-sm text-blx-apagado">/mes</span>
                      </p>
                      <p className="mt-2 text-sm font-semibold text-blx-tinta">tus primeros {PROMO.meses} meses · IVA incluido</p>
                      {ahorro && (
                        <p className="mt-3 inline-block rounded-lg bg-blx-azul/10 px-3 py-1.5 text-sm font-bold text-blx-azulTexto">
                          Ahorras {pesos(ahorro)} en {PROMO.meses} meses
                        </p>
                      )}
                      <p className="mt-3 text-sm text-blx-apagado">
                        {lista ? `Luego, precio de lista vigente (hoy ${pesos(lista)}/mes).` : "Luego, precio de lista vigente del plan."}
                      </p>
                    </>
                  ) : (
                    lista && (
                      <p className="font-grotesk text-[2.5rem] font-bold leading-none text-blx-tinta">
                        {pesos(lista)}
                        <span className="text-base font-medium">/mes</span>
                      </p>
                    )
                  )}
                </div>

                <ul className="mt-7 flex-1 space-y-2.5 text-[15px] text-blx-tinta">
                  {[...(mod?.lineas ?? []), ...lineas(plan?.features)].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-blx-azulTexto" strokeWidth={3} aria-hidden />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-blx-linea bg-blx-claro p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blx-tinta">Agentes adicionales (costo aparte)</p>
                  <ul className="mt-2 space-y-1 text-sm text-blx-tinta">
                    <li>
                      Ana, asistente: sin costo el primer mes; luego {pesos(ADICIONALES.ana[slug])}/mes
                    </li>
                    <li>Sofía, marketing con IA: {pesos(ADICIONALES.sofia[slug])}/mes</li>
                  </ul>
                </div>

                <BotonWhatsApp
                  seccion={`precios_${slug}`}
                  mensaje={`Hola, quiero empezar con el plan ${nombre} y el precio de lanzamiento`}
                  variante={destacado ? "accion" : "secundarioClaro"}
                  className="mt-6 w-full"
                >
                  Empezar con {nombre}
                </BotonWhatsApp>
                <p className="mt-2 text-center text-xs text-blx-apagado">{PRUEBA_DIAS} días gratis antes del primer cobro</p>
              </div>
            );

            return (
              <li key={slug} className="relative">
                {destacado && (
                  <span className="absolute -top-3.5 left-7 z-10 rounded-full bg-blexi px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
                    Recomendado
                  </span>
                )}
                <div className={`h-full rounded-2xl p-px ${destacado ? "bg-blexi shadow-[0_24px_60px_-24px_rgba(48,96,240,0.55)]" : "bg-blx-linea"}`}>
                  {tarjeta}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 max-w-3xl space-y-2 text-sm leading-relaxed text-blx-apagado">
          <p className="font-medium text-blx-tinta">{TEXTO_LEGAL_LANZAMIENTO}</p>
          <p>
            Empiezas con {PRUEBA_DIAS} días gratis sin tarjeta y te avisamos 15 días antes de que cambie tu precio. Pagas
            con tarjeta; transferencia y Nequi para la suscripción vienen en camino. Todos los precios incluyen IVA.
            Conversaciones adicionales y agentes adicionales se cobran aparte según la tabla de tu panel.
          </p>
        </div>
      </div>
    </section>
  );
}
