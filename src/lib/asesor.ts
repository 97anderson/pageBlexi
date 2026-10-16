/** Lo que cuesta un asesor de WhatsApp en Colombia con prestaciones (el rango que cita la página de precios). */
export const ASESOR_DESDE_COP = 1_400_000;
export const ASESOR_HASTA_COP = 2_100_000;

export const pesos = (cop: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(cop);
