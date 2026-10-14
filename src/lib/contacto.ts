import { CODIGO_DE_LANZAMIENTO } from "@/lib/lanzamiento";

/**
 * A dónde lleva cada botón de la página, en un solo sitio.
 *
 * - PRUEBA: donde el visitante prueba a Blexi («Probar en WhatsApp»). Es el
 *   número de prueba de la empresa `bluecodesolutionstest`, donde Blexi ya
 *   responde. Cuando funcione la línea en coexistencia, se cambia aquí.
 * - VENTAS: hablar con una persona o pedir asesoría (Hablar por WhatsApp,
 *   Enterprise). Hoy es el número del dueño; cuando Mara atienda su línea,
 *   pasa a ser el de Mara y ella escala al dueño lo que no sepa.
 */
export const WHATSAPP_PRUEBA = "15055787905";
export const WHATSAPP_VENTAS = "573222393582";

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
