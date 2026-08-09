/**
 * Destinos externos de la web. Viven en un solo sitio porque un cambio de dominio
 * o de número de ventas no puede depender de encontrar todas las secciones que lo
 * repiten.
 */

/** Consola del CRM: donde el dueño de negocio se registra por su cuenta. */
export const CONSOLE_URL =
  process.env.NEXT_PUBLIC_CONSOLE_URL ?? "https://console.bluecodesolution.com";

/** Asistente de registro. Vía principal de entrada al producto. */
export const REGISTER_URL = `${CONSOLE_URL}/register`;

/**
 * Registro con el plan preseleccionado desde la tabla de precios.
 * El asistente lee el plan; si no lo reconoce, aplica el suyo por defecto.
 */
export const registerUrlForPlan = (planId: string): string =>
  `${REGISTER_URL}?plan=${encodeURIComponent(planId)}`;

/** WhatsApp de ventas: vía secundaria, para quien prefiere hablar con alguien. */
export const SALES_WHATSAPP_URL = "https://wa.me/573222393582";

/** Número donde el visitante conversa con el agente de demostración. */
export const DEMO_WHATSAPP_URL = "https://wa.me/15055787905";

export const salesWhatsappUrlWithText = (text: string): string =>
  `${SALES_WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
