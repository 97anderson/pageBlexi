import { Plus } from "lucide-react";

import { PROMO } from "@/lib/config";

/**
 * Preguntas frecuentes con <details>: el navegador ya las hace accesibles con
 * teclado y lector de pantalla, sin JavaScript.
 */
const preguntas = [
  {
    p: "¿Me cambia el número de WhatsApp?",
    r: "No. Blexi atiende en el número de tu negocio; tus clientes te siguen escribiendo al mismo. Te acompañamos en la conexión con Meta paso a paso.",
  },
  {
    p: "¿Cómo me pagan los clientes?",
    r: "Por Nequi, transferencia, pago en línea con Wompi o contraentrega: tú eliges cuáles aceptas. El dinero llega directo a tu cuenta, Blexi no lo toca.",
  },
  {
    p: `¿Qué pasa cuando terminan los ${PROMO.meses} meses de lanzamiento?`,
    r: "Desde la siguiente mensualidad se cobra el precio de lista de tu plan. Te avisamos 15 días antes y puedes cambiar de plan o cancelar cuando quieras.",
  },
  {
    p: "¿El precio incluye IVA?",
    r: "Sí. Todos los precios de esta página incluyen IVA.",
  },
  {
    p: "¿Necesito saber de tecnología?",
    r: "No. Te lo dejamos funcionando nosotros: cargamos tu catálogo, conectamos tu WhatsApp y hacemos la primera venta de prueba contigo.",
  },
  {
    p: "¿Puedo cancelar?",
    r: "Sí, cuando quieras y sin multas. Lo que ya pagaste se respeta hasta el final del mes.",
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
