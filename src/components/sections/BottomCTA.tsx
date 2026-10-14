import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { DiasRestantes } from "@/components/lanzamiento/DiasRestantes";
import { PROMESA_ALTA_ASISTIDA, PROMO, PRUEBA_DIAS, pesos } from "@/lib/config";

export function BottomCTA() {
  return (
    <section id="empezar" className="bg-blx-sol py-20 text-blx-tinta sm:py-24">
      <div className="container-page grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="min-w-0">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-6xl">
            Que el próximo «¿todavía tiene?» lo conteste Blexi.
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium">
            {PRUEBA_DIAS} días gratis, sin tarjeta. Luego Plata a {pesos(PROMO.precios.plata)} al mes los primeros{" "}
            {PROMO.meses} meses, IVA incluido: <DiasRestantes />.
            {PROMESA_ALTA_ASISTIDA.activo ? ` ${PROMESA_ALTA_ASISTIDA.corta}.` : ""}
          </p>
        </div>
        <div className="min-w-0">
          <BotonWhatsApp
            seccion="cierre"
            variante="tinta"
            mensaje="Hola, quiero empezar mis días gratis de Blexi"
            className="min-h-16 w-full text-lg"
          >
            Empezar mis {PRUEBA_DIAS} días gratis
          </BotonWhatsApp>
          <p className="mt-3 text-center text-sm font-medium">Se abre WhatsApp con el mensaje listo. Tú decides si lo envías.</p>
        </div>
      </div>
    </section>
  );
}
