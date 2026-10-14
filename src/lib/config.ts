/**
 * Lo que cambia por decisión comercial, en un solo sitio.
 *
 * El número de ventas, la promoción de lanzamiento, la prueba gratis, el
 * nombre visible de cada plan y lo que todavía no se puede prometer. Antes
 * cada sección traía su número de WhatsApp escrito a mano y la página llegó
 * a tener tres distintos, uno de ellos de prueba en Estados Unidos.
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
 * `slug` del API de planes. Decisión del dueño del 13-oct-2026.
 */
export const PROMO = {
  activo: true,
  hasta: "2026-12-31",
  meses: 3,
  precios: {
    plata: 299_000,
    oro: 599_000,
    platino: 1_199_000,
  } as Record<string, number>,
};

/**
 * Texto legal del precio de lanzamiento, visible junto a los precios
 * (Ley 1480: información clara sobre duración y precio posterior).
 */
export const TEXTO_LEGAL_LANZAMIENTO =
  "Precio de lanzamiento: aplica a tus primeros 3 meses si te registras antes del 31 de diciembre de 2026. Después pagas el precio de lista vigente del plan. Los precios pueden cambiar; el precio que pactas al registrarte se respeta durante su vigencia.";

/**
 * Hero y primer pantallazo: «claro» (claro primero, con vitrina oscura del
 * producto) u «oscuro» (oscuro primero, estilo producto de IA). Por defecto
 * claro: dueños de pyme que entran desde el celular, muchas veces a pleno sol.
 */
export const VARIANTE_HERO: "claro" | "oscuro" =
  process.env.NEXT_PUBLIC_VARIANTE_HERO === "oscuro" ? "oscuro" : "claro";

/**
 * Agentes ADICIONALES: no vienen en el plan, tienen costo aparte. Precios por
 * plan sembrados en la base del CRM:
 * - Ana: `platform_addon_plan_prices` (`20260930_01_master_precio_del_empleado_por_plan.py:49`),
 *   editable desde la consola (`20261001_01_master_precio_del_empleado_editable.py`).
 *   Todo negocio nuevo la recibe sin costo el primer mes (alta del CRM).
 * - Sofía (Marketing con IA, adicional `marketing_ia`): `20261105_01_master_marketing_datos.py`.
 * Si la consola cambia un precio, hay que cambiarlo aquí.
 */
export const ADICIONALES = {
  ana: { plata: 50_000, oro: 90_000, platino: 150_000 } as Record<string, number>,
  sofia: { plata: 55_000, oro: 99_000, platino: 169_000 } as Record<string, number>,
};

/** Días de prueba gratis antes del primer cobro. */
export const PRUEBA_DIAS = 15;

/**
 * Cupos del lanzamiento. APAGADO hasta que el dueño confirme el número: un
 * contador de cupos que no corresponde a nada real es publicidad engañosa.
 */
export const CUPOS_LANZAMIENTO = { activo: false, total: 30 };

/**
 * «Te lo dejamos funcionando»: el equipo carga el catálogo, conecta el
 * WhatsApp y hace la primera venta de prueba con el dueño. Encendida; el
 * dueño debe confirmar que el equipo puede cumplirla con cada alta.
 */
export const PROMESA_ALTA_ASISTIDA = {
  activo: true,
  corta: "Te lo dejamos funcionando",
  larga:
    "Cargamos tu catálogo, conectamos tu WhatsApp y hacemos contigo la primera venta de prueba.",
};

/**
 * Datos medidos en producción en una perfumería cliente (sin nombre ni
 * ciudad, por privacidad). Fuente: conversaciones del 27-sep al 13-oct-2026.
 */
export const PRUEBA_REAL = {
  quien: "una perfumería que ya usa Blexi",
  desde: "27 de septiembre",
  hasta: "13 de octubre de 2026",
  dias: 17,
  conversaciones: 36,
  medianaSegundos: "4,5",
  fueraDeHorarioPct: 31,
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
  return `$${Math.round(n).toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;
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

/**
 * Porcentaje de descuento redondeado al entero más cercano (299/490 = 38,98 %
 * → 39 %). Nunca se anuncia una cifra mayor que la real redondeada.
 */
export function descuentoPct(promo: number, lista?: number): number | null {
  if (!lista || lista <= promo) return null;
  return Math.round((1 - promo / lista) * 100);
}
