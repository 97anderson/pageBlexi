/**
 * Gancho único de medición del embudo.
 *
 * Hoy no hay herramienta de analítica: el evento se publica en la ventana
 * como `blexi:medicion` y, si algún día existe `window.dataLayer`, también se
 * empuja ahí. Conectar un proveedor es escuchar ese evento en un solo sitio;
 * ninguna sección conoce al proveedor.
 */

export type EventoDeEmbudo = "cta_clic" | "calculadora_uso" | "calculadora_cta";

type ConDataLayer = Window & { dataLayer?: unknown[] };

export function track(evento: EventoDeEmbudo, datos: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  try {
    const detalle = { evento, ...datos, en: new Date().toISOString() };
    window.dispatchEvent(new CustomEvent("blexi:medicion", { detail: detalle }));
    (window as ConDataLayer).dataLayer?.push({ event: evento, ...datos });
  } catch {
    // La medición nunca rompe un clic.
  }
}
