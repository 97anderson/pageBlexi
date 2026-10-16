import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";

import { BloquePrecios } from "@/components/BloquePrecios";
import { SeoShell } from "@/components/SeoShell";
import { ASESOR_DESDE_COP, ASESOR_HASTA_COP, pesos } from "@/lib/asesor";
import { WHATSAPP_PRUEBA, WHATSAPP_VENTAS, enlaceRegistro, enlaceWhatsApp } from "@/lib/contacto";
import { leerPlanes } from "@/lib/planes";
import { SITE_URL, jsonLd } from "@/lib/seo";

const title = "Chatbot con IA vs. bot de botones vs. asesor de WhatsApp | BLEXI";
const description =
  "Comparación honesta entre un chatbot de WhatsApp con IA, un bot de botones y un asesor humano: cómo atiende cada uno, qué cuesta y cuándo conviene cada opción.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/comparar" },
  openGraph: { title, description, url: "/comparar", siteName: "BLEXI", locale: "es_CO", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const filas: { criterio: string; ia: string; botones: string; asesor: string }[] = [
  {
    criterio: "Cómo entiende al cliente",
    ia: "Entiende lo que el cliente escribe, como lo escribe, y también sus notas de voz.",
    botones: "Sigue un menú fijo («marque 1»): lo que no está en el menú, no lo entiende.",
    asesor: "Entiende cualquier mensaje, incluidos los casos raros o delicados.",
  },
  {
    criterio: "Horario",
    ia: "24/7, también de noche y los domingos.",
    botones: "24/7.",
    asesor: "El de su turno.",
  },
  {
    criterio: "Cuántos clientes a la vez",
    ia: "Varios al mismo tiempo, hasta el tope de conversaciones del plan.",
    botones: "Varios al mismo tiempo.",
    asesor: "Pocos a la vez; si llegan muchos, esperan.",
  },
  {
    criterio: "Pedido, cita y pago",
    ia: "Arma el pedido con domicilio y pago, agenda citas y cobra desde la conversación; todo queda en el CRM.",
    botones: "Puede recoger datos básicos si el flujo se diseñó para eso; los cambios exigen rehacer el menú.",
    asesor: "Lo hace a mano y lo anota donde pueda.",
  },
  {
    criterio: "Lo que no sabe",
    ia: "Te lo pregunta a ti por WhatsApp y le avisa al cliente que lo está confirmando; no inventa precios.",
    botones: "Responde «opción no válida» o se queda sin salida.",
    asesor: "Decide con su criterio o te consulta.",
  },
  {
    criterio: "Cuándo interviene una persona",
    ia: "Tú mandas: ves cada conversación en el CRM y puedes pausarlo con un botón para atender tú.",
    botones: "Normalmente se pasa a una persona al final del menú.",
    asesor: "Es la persona.",
  },
  {
    criterio: "Costo",
    ia: "Planes mensuales desde el precio que ves abajo, con 15 días gratis y sin tarjeta.",
    botones: "Depende del proveedor; no es un precio que podamos citar aquí.",
    asesor: `Entre ${pesos(ASESOR_DESDE_COP)} y ${pesos(ASESOR_HASTA_COP)} COP al mes con prestaciones (el rango que cita nuestra página de precios).`,
  },
];

export default async function Comparar() {
  const planes = await leerPlanes();
  const url = `${SITE_URL}/comparar`;
  const datos = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#pagina`,
        url,
        name: "Chatbot con IA vs. bot de botones vs. asesor de WhatsApp",
        description,
        inLanguage: "es-CO",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "BLEXI", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Comparar", item: url },
        ],
      },
    ],
  };

  return (
    <SeoShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(datos) }} />

      <section className="pt-16 pb-10 sm:pt-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <span className="etiqueta">Comparar</span>
            <h1 className="mt-6 font-grotesk text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-brand-textDark sm:text-5xl">
              Chatbot con IA vs. bot de botones vs. <span className="subrayado">asesor de WhatsApp</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-textMuted">
              Tres formas de atender WhatsApp en tu negocio. Cada una tiene su lugar; esto es lo que hace
              (y lo que no) cada una, para que elijas con cabeza fría.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page">
          {/* En pantalla ancha, tabla; en celular, una tarjeta por criterio. */}
          <div className="mx-auto hidden max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparación entre un chatbot de WhatsApp con IA, un bot de botones y un asesor humano
              </caption>
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th scope="col" className="w-[16%] px-5 py-4 font-grotesk font-bold">Criterio</th>
                  <th scope="col" className="px-5 py-4 font-grotesk font-bold text-[#00D8F0]">Chatbot con IA (Blexi)</th>
                  <th scope="col" className="px-5 py-4 font-grotesk font-bold">Bot de botones</th>
                  <th scope="col" className="px-5 py-4 font-grotesk font-bold">Asesor de WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filas.map((f) => (
                  <tr key={f.criterio} className="align-top">
                    <th scope="row" className="px-5 py-4 font-grotesk font-bold text-brand-textDark">{f.criterio}</th>
                    <td className="bg-[#F3EBFE]/50 px-5 py-4 leading-relaxed text-brand-textDark">{f.ia}</td>
                    <td className="px-5 py-4 leading-relaxed text-brand-textMuted">{f.botones}</td>
                    <td className="px-5 py-4 leading-relaxed text-brand-textMuted">{f.asesor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto max-w-xl space-y-4 md:hidden">
            {filas.map((f) => (
              <div key={f.criterio} className="rounded-3xl border border-slate-200 bg-white p-5">
                <h2 className="font-grotesk text-base font-bold text-brand-textDark">{f.criterio}</h2>
                <dl className="mt-3 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-[#7C22D6]">Chatbot con IA (Blexi)</dt>
                    <dd className="text-brand-textDark">{f.ia}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-600">Bot de botones</dt>
                    <dd className="text-brand-textMuted">{f.botones}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-600">Asesor de WhatsApp</dt>
                    <dd className="text-brand-textMuted">{f.asesor}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-brand-textMuted">
            <h2 className="font-grotesk text-2xl font-bold text-brand-textDark">¿Cuál conviene?</h2>
            <p>
              <strong className="font-semibold text-brand-textDark">Un asesor humano</strong> es insustituible
              para negociaciones, reclamos delicados y clientes que necesitan una persona. Su límite es el
              horario y cuántas conversaciones aguanta a la vez.
            </p>
            <p>
              <strong className="font-semibold text-brand-textDark">Un bot de botones</strong> sirve cuando
              las preguntas son pocas y siempre las mismas. Se queda corto cuando el cliente escribe como
              habla o manda una nota de voz.
            </p>
            <p>
              <strong className="font-semibold text-brand-textDark">Un chatbot con IA como Blexi</strong>{" "}
              atiende a toda hora, toma pedidos y citas y deja todo en tu CRM, y te pasa la pelota cuando no
              sabe algo. No reemplaza tu criterio: tú ves cada conversación y puedes pausarlo cuando quieras.
              Por eso muchos negocios lo usan como primera línea y atienden ellos lo que de verdad lo pide.
            </p>
            <p>
              Para ver Blexi en acción, <a className="font-semibold text-brand-primary hover:underline" href={enlaceWhatsApp(WHATSAPP_PRUEBA, "Hola")} target="_blank" rel="noreferrer">pruébalo en WhatsApp</a>.
              También puedes ver cómo funciona para{" "}
              <a className="font-semibold text-brand-primary hover:underline" href="/para/restaurantes">restaurantes</a>,{" "}
              <a className="font-semibold text-brand-primary hover:underline" href="/para/tiendas">tiendas</a> y{" "}
              <a className="font-semibold text-brand-primary hover:underline" href="/para/servicios">servicios y citas</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-grotesk text-2xl font-bold text-brand-textDark">Precios de Blexi</h2>
            <p className="mb-6 mt-2 text-base text-brand-textMuted">Tres planes mensuales, sin permanencia.</p>
            <BloquePrecios planes={planes} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="container-page">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-center sm:p-14">
            <h2 className="font-grotesk text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prueba Blexi <span className="acento acento-claro">15 días gratis</span>
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={enlaceRegistro("plata")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 text-base font-bold text-slate-900 transition hover:bg-cyan-400"
              >
                Empezar gratis
                <ArrowRight className="size-5" strokeWidth={2.4} aria-hidden />
              </a>
              <a
                href={enlaceWhatsApp(WHATSAPP_VENTAS)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="size-4 text-emerald-400" aria-hidden />
                Más información por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SeoShell>
  );
}
