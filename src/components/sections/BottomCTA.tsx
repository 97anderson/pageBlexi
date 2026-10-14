import { BotonWhatsApp, QuePasaAlTocar } from "@/components/lanzamiento/BotonWhatsApp";
import { DiasRestantes } from "@/components/lanzamiento/DiasRestantes";
import { PROMESA_ALTA_ASISTIDA, PROMO, PRUEBA_DIAS, pesos } from "@/lib/config";

export function BottomCTA() {
  return (
    <section id="empezar" className="relative overflow-hidden bg-blx-noche py-20 text-white sm:py-24">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-blexi" aria-hidden />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(144,48,240,0.2),transparent)]" aria-hidden />
      <div className="container-page relative grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="min-w-0">
          <h2 className="font-grotesk text-4xl font-bold leading-[1.05] tracking-[-0.03em] [text-wrap:balance] sm:text-6xl">
            Que el próximo «¿todavía tiene?» lo conteste <span className="bg-blexi bg-clip-text text-transparent">Blexi</span>.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-blx-textoNoche">
            {PRUEBA_DIAS} días gratis, sin tarjeta. Luego Plata a {pesos(PROMO.precios.plata)} al mes tus primeros{" "}
            {PROMO.meses} meses, IVA incluido: <DiasRestantes />.
            {PROMESA_ALTA_ASISTIDA.activo ? ` ${PROMESA_ALTA_ASISTIDA.corta}.` : ""}
          </p>
        </div>
        <div className="min-w-0">
          <BotonWhatsApp seccion="cierre" mensaje="Hola, quiero empezar mis días gratis de Blexi" className="min-h-16 w-full text-lg">
            Empezar mis {PRUEBA_DIAS} días gratis
          </BotonWhatsApp>
          <QuePasaAlTocar oscuro className="text-center" />
        </div>
      </div>
    </section>
  );
}
