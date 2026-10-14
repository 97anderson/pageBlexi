import { leerPlanes, type PlanDeLaBase } from "@/lib/planes";
import { NOMBRES_DE_PLAN, PROMO, PRUEBA_DIAS } from "@/lib/config";
import { BannerDeLanzamiento } from "@/components/lanzamiento/BannerDeLanzamiento";
import { Calculadora } from "@/components/lanzamiento/Calculadora";
import { ComoFunciona } from "@/components/lanzamiento/ComoFunciona";
import { Comparacion } from "@/components/lanzamiento/Comparacion";
import { Dolores } from "@/components/lanzamiento/Dolores";
import { Preguntas } from "@/components/lanzamiento/Preguntas";
import { QueVendes } from "@/components/lanzamiento/QueVendes";
import { Vitrina } from "@/components/lanzamiento/Vitrina";
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
      description: `Primeros ${PROMO.meses} meses, IVA incluido; luego el precio de lista vigente (hoy ${p.monthlyPriceCop} COP al mes). ${PRUEBA_DIAS} días gratis.`,
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
      "Vendedor con inteligencia artificial para WhatsApp: responde con fotos y precios, arma el pedido, lo cobra y avisa al dueño.",
    inLanguage: "es-CO",
    publisher: { "@type": "Organization", name: "BlueCode Solutions", url: "https://bluecodesolution.com" },
    ...(ofertas.length ? { offers: ofertas } : {}),
  };
}

export default async function Home() {
  // Los precios se leen aquí, en el servidor, para que estén en el primer
  // pintado y los buscadores los vean.
  const planes = await leerPlanes();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados(planes)) }}
      />
      <BannerDeLanzamiento />
      <Navbar />
      <main className="relative">
        <Hero />
        <Vitrina />
        <QueVendes />
        <ComoFunciona />
        <Dolores />
        <Calculadora />
        <Comparacion />
        <Pricing planes={planes} />
        <Preguntas />
        <BottomCTA />
      </main>
      <StickyWhatsAppCTA />
      <Footer />
    </>
  );
}
