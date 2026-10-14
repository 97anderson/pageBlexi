import { BotonWhatsApp, QuePasaAlTocar } from "@/components/lanzamiento/BotonWhatsApp";
import { PROMESA_ALTA_ASISTIDA, PRUEBA_DIAS } from "@/lib/config";

/** CTA final del diseño A. */
export function BottomCTA() {
  return (
    <section id="empezar" className="mx-auto flex max-w-[1240px] flex-col items-center gap-6 px-4 py-[120px] text-center sm:px-6">
      <h2 className="m-0 max-w-[900px] font-grotesk text-[clamp(40px,5.5vw,76px)] font-bold leading-none tracking-[-0.04em] [text-wrap:balance]">
        Pruébalo {PRUEBA_DIAS} días con tu propio catálogo.
      </h2>
      <p className="m-0 text-xl text-blx-texto">
        {PROMESA_ALTA_ASISTIDA.activo ? "Lo dejamos funcionando contigo. " : ""}Sin tarjeta.
      </p>
      <BotonWhatsApp seccion="cierre" mensaje="Hola, quiero empezar con Blexi en mi negocio" className="px-[34px]">
        Empezar por WhatsApp
      </BotonWhatsApp>
      <QuePasaAlTocar />
    </section>
  );
}
