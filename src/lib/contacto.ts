import { CODIGO_DE_LANZAMIENTO } from "@/lib/lanzamiento";

/**
 * A dónde lleva cada botón de la página, en un solo sitio.
 *
 * - PRUEBA: donde el visitante prueba a Blexi («Probar en WhatsApp»). Es el
 *   número de prueba de la empresa `bluecodesolutionstest`, donde Blexi
 *   responde como lo haría en un negocio.
 * - VENTAS: más información y asesoría (Hablar por WhatsApp, Enterprise,
 *   planes). Es la línea de Mara, la vendedora de BlueCode, que escala al
 *   dueño lo que no sepa (16-oct-2026).
 */
export const WHATSAPP_PRUEBA = "15055787905";
export const WHATSAPP_VENTAS = "573052629494";

/** Enlace de WhatsApp, con mensaje ya escrito si se pasa. */
export function enlaceWhatsApp(numero: string, mensaje?: string): string {
  const base = `https://wa.me/${numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

const REGISTRO = "https://console.bluecodesolution.com/register";

/**
 * El alta en la consola con el plan elegido y su código de lanzamiento, para
 * que el negocio entre ya con el precio de los primeros meses congelado. Los
 * códigos los crea el dueño en la consola (Invitaciones); sin código el alta
 * cobra el precio de lista.
 */
export function enlaceRegistro(planSlug: string): string {
  const params = new URLSearchParams({ plan: planSlug });
  const codigo = CODIGO_DE_LANZAMIENTO[planSlug];
  if (codigo) params.set("invite", codigo);
  return `${REGISTRO}?${params.toString()}`;
}
