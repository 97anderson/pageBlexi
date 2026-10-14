/**
 * Lo que cambia por decisión comercial, en un solo sitio.
 *
 * El número de ventas, la promoción de lanzamiento, el nombre visible de cada
 * plan y lo que todavía no se puede prometer. Antes cada sección traía su
 * número de WhatsApp escrito a mano y la página llegó a tener tres distintos,
 * uno de ellos de prueba en Estados Unidos.
 */

/**
 * El WhatsApp de ventas, sin «+». Todos los botones de la página van aquí.
 * Cuando la línea de Mara (573052629494) esté conectada, se cambia sólo esto.
 */
export const WHATSAPP_VENTAS = "573222393582";

/** Enlace a WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(texto?: string): string {
  const base = `https://wa.me/${WHATSAPP_VENTAS}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

/**
 * Precio de lanzamiento: las tres primeras mensualidades a este valor, IVA
 * incluido, para negocios que se registren hasta `hasta` (inclusive). Desde la
 * cuarta se cobra el precio de lista que diga la base. Las claves son los
 * `slug` del API de planes.
 */
export const PROMO = {
  activo: true,
  hasta: "2026-12-31",
  meses: 3,
  precios: {
    plata: 199_000,
    oro: 399_000,
    platino: 799_000,
  } as Record<string, number>,
};

/**
 * Nombre que se enseña por `slug`. La base sigue llamando `platino` al plan
 * más alto; aquí se presenta como Diamante. Si el slug no está en el mapa se
 * usa el nombre que mande el API.
 */
export const NOMBRES_DE_PLAN: Record<string, string> = {
  plata: "Plata",
  oro: "Oro",
  platino: "Diamante",
};

/**
 * La sección «Sigue usando tu WhatsApp». La coexistencia con la app del
 * celular todavía no está probada con un número real en producción: no se
 * promete hasta que lo esté (Ley 1480, información veraz).
 */
export const MOSTRAR_COEXISTENCIA = false;

/** Formato de pesos colombianos sin decimales: $199.000. */
export function pesos(n: number): string {
  return `$${n.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;
}

/** Fecha final de la promoción en palabras: «31 de diciembre». */
export function finDeLaPromoEnPalabras(): string {
  const [anio, mes, dia] = PROMO.hasta.split("-").map(Number);
  const fecha = new Date(Date.UTC(anio, mes - 1, dia, 12));
  return fecha.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    timeZone: "America/Bogota",
  });
}
