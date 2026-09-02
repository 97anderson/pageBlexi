/**
 * Los planes que enseña la página, leídos de la base.
 *
 * Los precios estaban escritos en el componente: la tercera copia, después de
 * la del asistente de alta que ya se corrigió. Subirlos en la consola no
 * cambiaba lo que veía quien entraba a la web, y quien llegaba desde ahí al
 * registro se encontraba otro número.
 *
 * Va por el servidor y no desde el navegador a propósito. El API sólo admite
 * peticiones desde la consola, así que un `fetch` desde el navegador moriría en
 * CORS; la alternativa era añadir este dominio a la lista blanca de producción,
 * que es ensanchar una frontera de seguridad para leer tres precios. De
 * servidor a servidor no hay CORS y la lista se queda como está.
 */

const API =
  process.env.BLEXI_API_URL ?? "https://api.bluecodesolution.com/api/v1";

/** Un rato de caché: los precios cambian de mes en mes, no de minuto en minuto. */
export const revalidate = 300;

export async function GET() {
  try {
    const respuesta = await fetch(`${API}/plans`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });

    if (!respuesta.ok) {
      return Response.json({ planes: [] }, { status: 200 });
    }

    return Response.json({ planes: await respuesta.json() }, { status: 200 });
  } catch {
    // Una lista vacía, no un error: la página sabe enseñar sus planes sin
    // precio, y dejarla caída por no poder pintar tres cifras sería peor.
    return Response.json({ planes: [] }, { status: 200 });
  }
}
