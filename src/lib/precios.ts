/**
 * Precios para las páginas de texto (preguntas, rubros, comparación).
 *
 * Nada se escribe a mano: el precio de lista sale de la base (`leerPlanes()`,
 * el mismo origen de la sección de precios) y el de lanzamiento de
 * `lanzamiento.ts`. Si la base no responde, el precio de lista se omite en vez
 * de inventarlo.
 */
import type { PlanDeLaBase } from "@/lib/planes";
import {
  CIERRE_DE_LANZAMIENTO,
  MESES_DE_LANZAMIENTO,
  PRECIO_DE_LANZAMIENTO_COP,
} from "@/lib/lanzamiento";
import { pesos } from "@/lib/asesor";

/** Nombre que se ve → identificador en la base («Diamante» es «platino» allí). */
export const PLANES_VISIBLES = [
  { nombre: "Plata", slug: "plata" },
  { nombre: "Oro", slug: "oro" },
  { nombre: "Diamante", slug: "platino" },
] as const;

export type PrecioDePlan = {
  nombre: string;
  slug: string;
  /** Precio de lista mensual leído de la base; undefined si no respondió. */
  lista?: number;
  lanzamiento: number;
};

export function preciosDe(planes: PlanDeLaBase[]): PrecioDePlan[] {
  return PLANES_VISIBLES.map(({ nombre, slug }) => {
    const base = planes.find((p) => p.slug === slug);
    const lista = base && Number.isFinite(base.monthlyPriceCop) && base.monthlyPriceCop > 0
      ? base.monthlyPriceCop
      : undefined;
    return { nombre, slug, lista, lanzamiento: PRECIO_DE_LANZAMIENTO_COP[slug] };
  });
}

/** Párrafo con los precios, para la respuesta de las preguntas frecuentes. */
export function textoDePrecios(planes: PlanDeLaBase[]): string {
  const precios = preciosDe(planes);
  const conLista = precios.every((p) => p.lista !== undefined);
  const lista = conLista
    ? `Blexi tiene tres planes mensuales: ${precios
        .map((p) => `${p.nombre} ${pesos(p.lista as number)}`)
        .join(", ")} (precio de lista). `
    : "Blexi tiene tres planes mensuales: Plata, Oro y Diamante (el precio de lista vigente está en la sección de precios). ";
  const lanzamiento = `Para los negocios que se registren hasta el ${CIERRE_DE_LANZAMIENTO} hay precio de lanzamiento durante los primeros ${MESES_DE_LANZAMIENTO} meses de pago: ${precios
    .map((p) => `${p.nombre} ${pesos(p.lanzamiento)}`)
    .join(", ")} al mes, IVA incluido. `;
  return `${lista}${lanzamiento}Los primeros 15 días son gratis y sin tarjeta. Ana (asistente del dueño) y Sofía (marketing) son adicionales con costo aparte. Los precios y condiciones pueden cambiar.`;
}
