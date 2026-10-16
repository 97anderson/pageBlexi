/**
 * Datos estructurados (JSON-LD) y URL del sitio, en un solo lugar.
 *
 * Nada se escribe a mano aquí que la página no diga: los precios salen de los
 * planes que lee el servidor (los mismos de la sección de precios), las
 * preguntas del arreglo que pinta la sección de preguntas frecuentes.
 */
import type { PlanDeLaBase } from "@/lib/planes";

export const SITE_URL = "https://soyblexi.com";
export const SITE_NAME = "BLEXI";
export const EMPRESA_URL = "https://www.bluecodesolution.com";
export const TITULO = "BLEXI — IA que vende por WhatsApp para tu Pyme";
export const DESCRIPCION =
  "BLEXI es el asistente de IA y CRM en tiempo real que atiende WhatsApp 24/7, cierra ventas y organiza tu negocio en Colombia sin que sepas de tecnología.";

export const PALABRAS_CLAVE = [
  "agente de IA para WhatsApp",
  "asistente de ventas por WhatsApp",
  "chatbot de WhatsApp con IA Colombia",
  "agentes inteligentes para negocios",
  "CRM con IA para pymes",
  "BLEXI",
  "BlueCode Solutions",
];

export const ORGANIZACION = {
  "@type": "Organization",
  "@id": `${EMPRESA_URL}/#organization`,
  name: "BlueCode Solutions",
  legalName: "BLUE CODE SOLUTIONS S.A.S.",
  url: EMPRESA_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: "contacto@bluecodesolution.com",
  sameAs: [SITE_URL],
} as const;

type Pregunta = { p: string; r: string };

export function datosEstructurados(planes: PlanDeLaBase[], preguntas: Pregunta[]) {
  const ofertas = planes
    .filter((pl) => Number.isFinite(pl.monthlyPriceCop) && pl.monthlyPriceCop > 0)
    .map((pl) => ({
      "@type": "Offer",
      name: `Plan ${pl.name ?? pl.slug}`,
      price: pl.monthlyPriceCop,
      priceCurrency: "COP",
      url: `${SITE_URL}/#precios`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: pl.monthlyPriceCop,
        priceCurrency: "COP",
        billingDuration: "P1M",
        unitCode: "MON",
      },
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZACION,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPCION,
        inLanguage: "es-CO",
        publisher: { "@id": ORGANIZACION["@id"] },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        url: SITE_URL,
        description: DESCRIPCION,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, WhatsApp",
        inLanguage: "es-CO",
        publisher: { "@id": ORGANIZACION["@id"] },
        ...(ofertas.length ? { offers: ofertas } : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: preguntas.map((q) => ({
          "@type": "Question",
          name: q.p,
          acceptedAnswer: { "@type": "Answer", text: q.r },
        })),
      },
    ],
  };
}

/** JSON seguro para incrustar en un <script>: escapa «<» para que no cierre la etiqueta. */
export function jsonLd(datos: unknown): string {
  return JSON.stringify(datos).replace(/</g, "\\u003c");
}
