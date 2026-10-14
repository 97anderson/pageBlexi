import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import type { PlanDeLaBase } from "@/lib/planes";
import {
  ADICIONALES,
  CUPOS_LANZAMIENTO,
  NOMBRES_DE_PLAN,
  PROMO,
  PRUEBA_DIAS,
  TEXTO_LEGAL_LANZAMIENTO,
  pesos,
} from "@/lib/config";

/**
 * Precios del diseño A.
 *
 * Cada línea está verificada: las cifras salen del API de planes
 * (`features`); las de módulo, de la semilla `plan_module_configs` del CRM
 * (analíticas en Oro, segmentos en Diamante). Lo que no se pudo confirmar
 * (POS, alertas, "entrena al agente") no se muestra. Ana y Sofía van aparte:
 * son adicionales con costo aparte, no parte del plan.
 */

type Linea = { clave: string; texto: (n: string) => string; ilimitado?: string };

const numero = (n: number) => n.toLocaleString("es-CO");

const lineasDeLaBase: Linea[] = [
  { clave: "monthly_conversations", texto: (n) => `${n} conversaciones al mes` },
  { clave: "max_catalog_products", texto: (n) => `Hasta ${n} productos`, ilimitado: "Productos sin tope" },
  { clave: "max_crm_users", texto: (n) => `${n} usuarios en el panel`, ilimitado: "Usuarios sin tope" },
  { clave: "voice_notes_limit", texto: (n) => `${n} notas de voz al mes`, ilimitado: "Notas de voz sin tope" },
  { clave: "vision_monthly_limit", texto: (n) => `${n} fotos de clientes al mes`, ilimitado: "Fotos de clientes sin tope" },
  { clave: "max_couriers", texto: (n) => `Domicilios con hasta ${n} domiciliarios`, ilimitado: "Domiciliarios sin tope" },
  { clave: "max_locations", texto: (n) => (n === "1" ? "1 sede" : `Hasta ${n} sedes`), ilimitado: "Sedes sin tope" },
];

/** Módulos que cambian por plan (semilla `plan_module_configs`). */
const modulos: Record<string, string[]> = {
  plata: [],
  oro: ["Analíticas de ventas"],
  platino: ["Segmentos de clientes"],
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

const desde = (r: Record<string, number>) => pesos(Math.min(...Object.values(r)));

export function Pricing({ planes }: { planes: PlanDeLaBase[] }) {
  const porSlug = new Map(planes.map((p) => [p.slug, p]));
  const recomendado = planes.find((p) => p.isRecommended)?.slug ?? "oro";

  return (
    <section id="precios" className="border-y border-blx-linea bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-11 px-4 py-[112px] sm:px-6">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="text-[15px] font-semibold text-blx-violetaTexto">Precio de lanzamiento</span>
          <h2 className="m-0 font-grotesk text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.04] tracking-[-0.035em] [text-wrap:balance]">
            Tus primeros {PROMO.meses} meses, casi 40 % menos.
          </h2>
          <p className="m-0 max-w-[680px] text-[19px] text-blx-texto">
            Primero {PRUEBA_DIAS} días gratis, sin tarjeta. IVA incluido.
            {CUPOS_LANZAMIENTO.activo ? ` Solo ${CUPOS_LANZAMIENTO.total} cupos.` : ""}
          </p>
        </div>

        <div className="flex flex-wrap items-stretch gap-5">
          {ORDEN.map((slug) => {
            const plan = porSlug.get(slug);
            const promo = PROMO.activo ? PROMO.precios[slug] : undefined;
            const lista = plan?.monthlyPriceCop;
            const nombre = NOMBRES_DE_PLAN[slug] ?? plan?.name ?? slug;
            const destacado = slug === recomendado;
            const items = [...lineas(plan?.features), ...(modulos[slug] ?? [])];

            return (
              <div
                key={slug}
                className={`flex min-w-0 flex-[1_1_300px] flex-col gap-4 rounded-3xl p-[34px] ${
                  destacado ? "border-2 border-blx-azul shadow-[0_20px_60px_rgba(72,144,240,0.16)]" : "border border-blx-linea"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-grotesk text-[26px] font-bold">{nombre}</span>
                  {destacado && (
                    <span className="rounded-full bg-recomendado px-3 py-1.5 text-[13px] font-bold text-white">Recomendado</span>
                  )}
                </div>
                {promo && lista && lista > promo && (
                  <div className="text-base text-blx-apagado">
                    <span className="sr-only">Precio de lista: </span>
                    <s>{pesos(lista)}</s> /mes
                  </div>
                )}
                <div className="font-grotesk text-[52px] font-bold leading-none tracking-[-0.03em]">{pesos(promo ?? lista ?? 0)}</div>
                {promo && <div className="text-[15px] text-blx-texto">al mes, tus primeros {PROMO.meses} meses</div>}
                <ul className="m-0 list-none p-0 text-base leading-[1.8] text-blx-texto3">
                  {items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <BotonWhatsApp
                  seccion={`precios_${slug}`}
                  mensaje={`Hola, quiero empezar con el plan ${nombre} y el precio de lanzamiento`}
                  variante={destacado ? "negra" : "contornoNegro"}
                  icono={false}
                  className="mt-auto w-full !px-4 !py-4 text-[17px]"
                >
                  Empezar con {nombre}
                </BotonWhatsApp>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="min-w-0 flex-[1_1_420px] rounded-[20px] bg-blx-gris px-7 py-6 text-base leading-relaxed text-blx-texto3">
            <b>Agentes adicionales, con costo aparte.</b> Ana, tu asistente: sin costo el primer mes, luego desde{" "}
            {desde(ADICIONALES.ana)}/mes. Sofía, marketing con IA: desde {desde(ADICIONALES.sofia)}/mes.
          </div>
          <div className="min-w-0 flex-[1_1_420px] text-sm leading-relaxed text-blx-apagado">{TEXTO_LEGAL_LANZAMIENTO}</div>
        </div>
      </div>
    </section>
  );
}
