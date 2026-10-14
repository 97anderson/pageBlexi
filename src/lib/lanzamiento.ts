/**
 * Precio de lanzamiento (decisión del dueño, 13-oct-2026): 40 % menos durante
 * los tres primeros meses, IVA incluido, para negocios que se registren hasta
 * el 31 de diciembre de 2026. Después rige el precio de lista de la base.
 *
 * Va escrito aquí y no en la base porque es una oferta con fecha de cierre:
 * cuando venza, se borra este archivo y sus usos.
 */
export const PRECIO_DE_LANZAMIENTO_COP: Record<string, number> = {
  plata: 299_000,
  oro: 599_000,
  platino: 1_199_000,
};

/**
 * Código de invitación de cada plan: lleva el precio de lanzamiento y los
 * meses. Se crean en la consola (Invitaciones) con los mismos valores de arriba.
 */
export const CODIGO_DE_LANZAMIENTO: Record<string, string> = {
  plata: "LANZA-PLATA",
  oro: "LANZA-ORO",
  platino: "LANZA-DIAMANTE",
};

export const MESES_DE_LANZAMIENTO = 3;
export const DESCUENTO_DE_LANZAMIENTO_PCT = 40;
export const CIERRE_DE_LANZAMIENTO = "31 de diciembre de 2026";
