import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { PROMESA_ALTA_ASISTIDA, PRUEBA_DIAS } from "@/lib/config";

/** Hero centrado del diseño A. */
export function Hero() {
  const garantias = ["Sin tarjeta", "Cancelas cuando quieras", ...(PROMESA_ALTA_ASISTIDA.activo ? [PROMESA_ALTA_ASISTIDA.corta] : [])];

  return (
    <section id="inicio" className="mx-auto flex max-w-[1240px] flex-col items-center gap-7 px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-24">
      <span className="rounded-full bg-blx-chip px-4 py-2 text-[15px] font-semibold text-blx-cobalto">
        Vendedor con inteligencia artificial para WhatsApp
      </span>
      <h1 className="m-0 max-w-[1000px] font-grotesk text-[clamp(48px,7.5vw,104px)] font-bold leading-[0.98] tracking-[-0.045em] [text-wrap:balance]">
        Tu WhatsApp, vendiendo <span className="bg-titular bg-clip-text text-transparent">las 24 horas.</span>
      </h1>
      <p className="m-0 max-w-[720px] text-[clamp(19px,2vw,23px)] leading-normal text-blx-texto">
        Blexi responde a tus clientes con fotos y precios, arma el pedido, lo cobra por Nequi o transferencia y te avisa. Tú
        te dedicas a despachar.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <span id="cta-hero" className="contents">
          <BotonWhatsApp seccion="hero" mensaje={`Hola, quiero probar Blexi ${PRUEBA_DIAS} días gratis en mi negocio`}>
            Probar {PRUEBA_DIAS} días gratis
          </BotonWhatsApp>
        </span>
        <a
          href="#como"
          className="inline-flex min-h-12 items-center rounded-full border border-blx-bordeBoton bg-white px-7 py-[18px] text-lg font-semibold leading-none text-blx-tinta no-underline hover:border-blx-tinta"
        >
          Ver cómo vende
        </a>
      </div>
      <p className="m-0 text-[15px] text-blx-apagado">{garantias.join(" · ")}</p>
    </section>
  );
}
