/**
 * Los números de WhatsApp de la página, en un solo sitio.
 *
 * - VENTAS: hablar con una persona (Hablar por WhatsApp, planes, Enterprise).
 *   Hoy es el número del dueño; luego será la línea de Mara.
 * - PRUEBA: donde el visitante prueba a Blexi («Probar en WhatsApp»). Debe ser
 *   un número donde Blexi responda: el +57 305 262 9494 en coexistencia. Mientras
 *   Meta no habilite la coexistencia (caso 39513856698258551, 14-oct-2026) ese
 *   número no tiene a Blexi detrás, y mandar ahí al visitante sería dejarlo sin
 *   respuesta; por eso apunta a VENTAS. El día que Blexi responda en la 305, se
 *   cambia esta línea por "573052629494".
 */
export const WHATSAPP_VENTAS = "573222393582";
export const WHATSAPP_PRUEBA = WHATSAPP_VENTAS;

/** Enlace de WhatsApp, con mensaje ya escrito si se pasa. */
export function enlaceWhatsApp(numero: string, mensaje?: string): string {
  const base = `https://wa.me/${numero}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}
