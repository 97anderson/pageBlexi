import { leerPlanes } from "@/lib/planes";
import { AsiVende } from "@/components/lanzamiento/AsiVende";
import { BannerDeLanzamiento } from "@/components/lanzamiento/BannerDeLanzamiento";
import { Preguntas } from "@/components/lanzamiento/Preguntas";
import { QueIncluye } from "@/components/lanzamiento/QueIncluye";
import { SigueTuWhatsApp } from "@/components/lanzamiento/SigueTuWhatsApp";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { StickyWhatsAppCTA } from "@/components/StickyWhatsAppCTA";

export default async function Home() {
  // Los precios se leen aquí, en el servidor, para que estén en el primer
  // pintado: sin esto la página abría con «consulta el precio» y saltaba a la
  // cifra, y los buscadores no veían ninguna.
  const planes = await leerPlanes();

  return (
    <>
      <BannerDeLanzamiento />
      <Navbar />
      <main className="relative pb-24 sm:pb-0">
        <Hero />
        <AsiVende />
        <SigueTuWhatsApp />
        <QueIncluye />
        <Pricing planes={planes} />
        <Preguntas />
        <BottomCTA />
      </main>
      <StickyWhatsAppCTA />
      <Footer />
    </>
  );
}
