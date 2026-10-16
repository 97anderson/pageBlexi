import { leerPlanes } from "@/lib/planes";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { Faq, preguntas } from "@/components/sections/Faq";
import { CRMShowcase } from "@/components/sections/CRMShowcase";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { FreeTrial } from "@/components/sections/FreeTrial";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { PainVsSolution } from "@/components/sections/PainVsSolution";
import { Pricing } from "@/components/sections/Pricing";
import { Workflow } from "@/components/sections/Workflow";
import { StickyWhatsAppCTA } from "@/components/StickyWhatsAppCTA";
import { datosEstructurados, jsonLd } from "@/lib/seo";
import { WHATSAPP_PRUEBA, enlaceWhatsApp } from "@/lib/contacto";

export default async function Home() {
  // Los precios se leen aquí, en el servidor, para que estén en el primer
  // pintado: sin esto la página abría con «consulta el precio» y saltaba a la
  // cifra, y los buscadores no veían ninguna.
  const planes = await leerPlanes();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(datosEstructurados(planes, preguntas)) }}
      />
      <Navbar />
      <main className="relative pb-24 sm:pb-0">
        <Hero />
        <PainVsSolution />
        <Workflow />
        <Features />
        <CRMShowcase />
        <Pricing planes={planes} />
        <FreeTrial />
        <Faq />
        <BottomCTA />
      </main>
      <StickyWhatsAppCTA href={enlaceWhatsApp(WHATSAPP_PRUEBA)} />
      <Footer />
    </>
  );
}
