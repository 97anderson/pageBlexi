/**
 * Los planes, para el navegador.
 *
 * El primer pintado ya los trae del servidor; esto queda para refrescarlos sin
 * recargar la página. Va por el servidor y no directo al API porque éste sólo
 * admite peticiones desde la consola: un `fetch` del navegador moriría en CORS,
 * y la alternativa era meter este dominio en la lista blanca de producción —
 * ensanchar una frontera de seguridad para leer tres precios—. De servidor a
 * servidor no hay CORS y la lista se queda como está.
 */
import { REVALIDAR, leerPlanes } from "@/lib/planes";

export const revalidate = REVALIDAR;

export async function GET() {
  return Response.json({ planes: await leerPlanes() }, { status: 200 });
}
