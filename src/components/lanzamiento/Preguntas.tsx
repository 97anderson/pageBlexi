import { Plus } from "lucide-react";

import { PROMESA_ALTA_ASISTIDA, PROMO, PRUEBA_DIAS, pesos } from "@/lib/config";

/**
 * Las objeciones de siempre, respondidas con lo que es verdad hoy. Con
 * <details>: accesibles con teclado y lector de pantalla, sin JavaScript.
 *
 * «¿Me cambia el número?» NO promete que el dueño siga usando la app del
 * celular: la coexistencia no está probada (MOSTRAR_COEXISTENCIA = false).
 */
const preguntas = [
  {
    p: "¿Qué pasa con mi WhatsApp? ¿Me cambia el número?",
    r: "Tus clientes te siguen escribiendo al mismo número de tu negocio y ahí les responde Blexi. Antes de conectarlo te explicamos qué cambia en tu celular y tú decides.",
  },
  {
    p: "¿Y si Blexi responde mal o no sabe algo?",
    r: "Blexi solo vende con la información de tu catálogo. Lo que no sabe, no lo inventa: te pregunta a ti por WhatsApp y espera tu respuesta. Puedes leer todas las conversaciones en tu panel y entrar a cualquier chat cuando quieras.",
  },
  {
    p: "¿No es caro?",
    r: `Durante el lanzamiento, Plata cuesta ${pesos(PROMO.precios.plata)} al mes los primeros ${PROMO.meses} meses, IVA incluido, y antes tienes ${PRUEBA_DIAS} días gratis para ver si te vende. Usa la calculadora de arriba con tus números y compara.`,
  },
  {
    p: "¿Es difícil de usar?",
    r: PROMESA_ALTA_ASISTIDA.activo
      ? `No necesitas saber de tecnología. ${PROMESA_ALTA_ASISTIDA.larga} Después, lo manejas desde el celular.`
      : "No necesitas saber de tecnología: te guiamos paso a paso y lo manejas desde el celular.",
  },
  {
    p: `¿Qué pasa cuando terminan los ${PROMO.meses} meses de lanzamiento?`,
    r: "Desde la siguiente mensualidad se cobra el precio de lista de tu plan. Te avisamos 15 días antes y puedes cambiar de plan o cancelar cuando quieras, sin multas.",
  },
  {
    p: "¿Cómo pago la suscripción? ¿Necesito tarjeta?",
    r: `Los ${PRUEBA_DIAS} días de prueba no piden tarjeta. Después pagas con tarjeta; el pago por transferencia y Nequi para la suscripción viene en camino. Los precios incluyen IVA.`,
  },
  {
    p: "¿Cómo me pagan mis clientes?",
    r: "Por Nequi, transferencia, pago en línea con Wompi o contraentrega: tú eliges cuáles aceptas. El dinero llega directo a tu cuenta, Blexi no lo toca.",
  },
  {
    p: "¿Qué hacen con mis datos y los de mis clientes?",
    r: "Los usamos solo para prestarte el servicio, según la Ley 1581 de protección de datos. No vendemos ni cedemos tus datos con fines comerciales. Los detalles están en la política de tratamiento de datos.",
  },
];

export function Preguntas() {
  return (
    <section id="preguntas" className="bg-blx-papel py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-solTexto">Preguntas</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            Lo que todo dueño pregunta antes de empezar.
          </h2>
          <p className="mt-4 text-[15px] text-blx-gris">
            ¿Otra duda? Escríbenos por WhatsApp y te respondemos.{" "}
            <a href="/tratamiento-de-datos" className="font-semibold text-blx-solTexto underline underline-offset-2">
              Tratamiento de datos
            </a>
          </p>
        </div>

        <div className="divide-y divide-blx-tinta/10 border-y border-blx-tinta/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 font-display text-base font-bold text-blx-tinta sm:text-lg [&::-webkit-details-marker]:hidden">
                {q.p}
                <Plus className="size-5 shrink-0 text-blx-solTexto transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-blx-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
