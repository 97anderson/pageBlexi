import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { BloquePrecios } from "@/components/BloquePrecios";
import { SeoShell } from "@/components/SeoShell";
import { WHATSAPP_PRUEBA, WHATSAPP_VENTAS, enlaceRegistro, enlaceWhatsApp } from "@/lib/contacto";
import { leerPlanes } from "@/lib/planes";
import { RUBROS, rubroPorSlug } from "@/lib/rubros";
import { SITE_URL, jsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return RUBROS.map((r) => ({ rubro: r.slug }));
}

export function generateMetadata({ params }: { params: { rubro: string } }): Metadata {
  const r = rubroPorSlug(params.rubro);
  if (!r) return {};
  const title = `Agente de IA para WhatsApp para ${r.titulo} | BLEXI`;
  const description = `Blexi es un agente de IA para WhatsApp para ${r.ejemplos} en Colombia: atiende a tus clientes 24/7, toma pedidos o citas y lo deja todo en tu CRM. 15 días gratis, sin tarjeta.`;
  return {
    title,
    description,
    alternates: { canonical: `/para/${r.slug}` },
    openGraph: { title, description, url: `/para/${r.slug}`, siteName: "BLEXI", locale: "es_CO", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PaginaRubro({ params }: { params: { rubro: string } }) {
  const r = rubroPorSlug(params.rubro);
  if (!r) notFound();
  const planes = await leerPlanes();
  const url = `${SITE_URL}/para/${r.slug}`;

  const datos = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#pagina`,
        url,
        name: `Agente de IA para WhatsApp para ${r.titulo}`,
        inLanguage: "es-CO",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "BLEXI", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `Para ${r.titulo}`, item: url },
        ],
      },
    ],
  };

  return (
    <SeoShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(datos) }} />

      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20">
        <div className="container-page">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="etiqueta">Blexi para {r.titulo}</span>
            <h1 className="mt-6 font-grotesk text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-brand-textDark sm:text-5xl lg:text-6xl">
              Agente de IA para WhatsApp para <span className="subrayado">{r.titulo}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-textMuted">{r.intro}</p>
            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <a href={enlaceRegistro("plata")} className="btn-negro w-full sm:w-auto">
                Empieza 15 días gratis
                <span className="btn-negro__chip">
                  <ArrowRight className="size-4" strokeWidth={2.6} aria-hidden />
                </span>
              </a>
              <a
                href={enlaceWhatsApp(WHATSAPP_PRUEBA, "Hola")}
                target="_blank"
                rel="noreferrer"
                className="btn-blanco w-full sm:w-auto"
              >
                <MessageCircle className="size-5 text-brand-whatsapp" strokeWidth={2.2} aria-hidden />
                Pruébalo en WhatsApp
              </a>
            </div>
            <p className="mt-5 font-grotesk text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
              <span className="text-[#00D8F0]">●</span> 15 días gratis · sin tarjeta · toda Colombia
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="etiqueta">Qué hace Blexi</span>
            <h2 className="mt-5 font-grotesk text-3xl font-extrabold tracking-tight text-brand-textDark sm:text-4xl">
              Lo que Blexi hace en tu negocio
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {r.hace.map((h) => (
              <div key={h.titulo} className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white">
                  <Check className="size-5" strokeWidth={2.6} aria-hidden />
                </span>
                <h3 className="mt-4 font-grotesk text-lg font-bold text-brand-textDark">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">{h.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-grotesk text-2xl font-bold text-brand-textDark">Así se ve en el día a día</h2>
            <ul className="mt-5 space-y-3">
              {r.escenas.map((e) => (
                <li key={e} className="flex gap-3 text-base leading-7 text-brand-textMuted">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00D8F0]" aria-hidden />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-brand-textMuted">
              <strong className="font-semibold text-brand-textDark">¿Qué plan?</strong> {r.plan}
            </p>
          </div>
        </div>
      </section>

      <section id="precios" className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-grotesk text-2xl font-bold text-brand-textDark">Precios</h2>
            <p className="mb-6 mt-2 text-base text-brand-textMuted">
              Tres planes mensuales, sin permanencia.
            </p>
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
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
              Sin tarjeta de crédito y sin contratos. Te acompañamos a dejarlo listo.
            </p>
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
            <p className="mt-6 text-sm text-slate-400">
              También: <a href="/comparar" className="text-cyan-300 hover:underline">chatbot con IA vs. bot de botones vs. asesor</a>
            </p>
          </div>
        </div>
      </section>
    </SeoShell>
  );
}
