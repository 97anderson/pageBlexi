/**
 * Los planes que enseña la página, leídos de la base.
 *
 * Un solo sitio para las dos vías: el componente de servidor los deja en el
 * primer pintado —para que no haya salto ni queden fuera de los buscadores— y
 * el route handler los sirve al navegador cuando hace falta refrescarlos.
 * Repetir el `fetch` en dos sitios era repetir también la URL y el manejo de
 * fallos, que es como uno de los dos se queda viejo.
 */

export type PlanDeLaBase = {
  slug: string;
  name?: string;
  monthlyPriceCop: number;
  annualPriceCop: number;
  annualSavingsCop: number;
  annualDiscountPct: number;
  /**
   * Los topes públicos del plan tal como los aplica el sistema —conversaciones,
   * catálogo, usuarios, domiciliarios, notas de voz, fotos—. La página los
   * pinta desde aquí para que lo prometido y lo que corta el sistema sean el
   * mismo número; escritos a mano se desviaron (3 usuarios en la página, 2 en
   * la base) sin que nadie lo notara.
   */
  features?: Record<string, number>;
};

const API =
  process.env.BLEXI_API_URL ?? "https://api.bluecodesolution.com/api/v1";

/** Un rato de caché: los precios cambian de mes en mes, no de minuto en minuto. */
export const REVALIDAR = 300;

export async function leerPlanes(): Promise<PlanDeLaBase[]> {
  try {
    const respuesta = await fetch(`${API}/plans`, {
      next: { revalidate: REVALIDAR },
      headers: { Accept: "application/json" },
    });
    if (!respuesta.ok) return [];
    const datos = await respuesta.json();
    return Array.isArray(datos) ? datos : [];
  } catch {
    // Lista vacía, no excepción: la página sabe enseñar sus planes sin precio,
    // y tumbarla por no poder pintar tres cifras sería peor.
    return [];
  }
}
