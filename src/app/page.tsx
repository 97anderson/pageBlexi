import { leerPlanes, type PlanDeLaBase } from "@/lib/planes";
import { NOMBRES_DE_PLAN, PROMO, PRUEBA_DIAS } from "@/lib/config";
import { AsiVende } from "@/components/lanzamiento/AsiVende";
import { BannerDeLanzamiento } from "@/components/lanzamiento/BannerDeLanzamiento";
import { Calculadora } from "@/components/lanzamiento/Calculadora";
import { Comparacion } from "@/components/lanzamiento/Comparacion";
import { Dolores } from "@/components/lanzamiento/Dolores";
import { FranjaDeConfianza } from "@/components/lanzamiento/FranjaDeConfianza";
import { Preguntas } from "@/components/lanzamiento/Preguntas";
import { PruebaReal } from "@/components/lanzamiento/PruebaReal";
import { QueIncluye } from "@/components/lanzamiento/QueIncluye";
import { SigueTuWhatsApp } from "@/components/lanzamiento/SigueTuWhatsApp";
import { UnMartes } from "@/components/lanzamiento/UnMartes";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { StickyWhatsAppCTA } from "@/components/StickyWhatsAppCTA";

/** Datos estructurados: la aplicación y sus ofertas de lanzamiento. */
function datosEstructurados(planes: PlanDeLaBase[]) {
  const ofertas = planes
    .filter((p) => PROMO.precios[p.slug])
    .map((p) => ({
      "@type": "Offer",
      name: `Plan ${NOMBRES_DE_PLAN[p.slug] ?? p.name ?? p.slug}, precio de lanzamiento`,
      price: PROMO.precios[p.slug],
      priceCurrency: "COP",
      priceValidUntil: PROMO.hasta,
      description: `Primeros ${PROMO.meses} meses, IVA incluido; luego ${p.monthlyPriceCop} COP al mes. ${PRUEBA_DIAS} días gratis.`,
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "Country", name: "Colombia" },
    }));

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Blexi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, WhatsApp",
    description:
      "Vendedor con IA para WhatsApp: responde con fotos y precios, toma el pedido, lo cobra por Nequi y avisa al dueño.",
    inLanguage: "es-CO",
    publisher: { "@type": "Organization", name: "BlueCode Solutions", url: "https://bluecodesolution.com" },
    ...(ofertas.length ? { offers: ofertas } : {}),
  };
}

export default async function Home() {
  // Los precios se leen aquí, en el servidor, para que estén en el primer
  // pintado: sin esto la página abría con «consulta el precio» y saltaba a la
  // cifra, y los buscadores no veían ninguna.
  const planes = await leerPlanes();
  const listaPlata = planes.find((p) => p.slug === "plata")?.monthlyPriceCop;

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados(planes)) }}
      />
      <BannerDeLanzamiento listaPlata={listaPlata} />
      <Navbar />
      <main className="relative">
        <Hero />
        <FranjaDeConfianza />
        <Dolores />
        <UnMartes />
        <AsiVende />
        <QueIncluye />
        <PruebaReal />
        <Calculadora />
        <Comparacion />
        <SigueTuWhatsApp />
        <Pricing planes={planes} />
        <Preguntas />
        <BottomCTA />
      </main>
      <StickyWhatsAppCTA />
      <Footer />
    </>
  );
}
