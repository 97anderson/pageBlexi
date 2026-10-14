import { ChevronDown, LayoutDashboard, PauseCircle, UserRoundCheck } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

/**
 * «Tú mandas» y preguntas frecuentes.
 *
 * Cada respuesta describe lo que el producto ya hace: nada de cifras sin medir
 * ni funciones por venir. Si algo cambia en el producto, se cambia aquí.
 */

const control = [
  {
    icon: UserRoundCheck,
    titulo: "Lo que no sabe, te lo pregunta",
    texto:
      "Si un cliente pide algo que Blexi no tiene claro, te escribe a tu WhatsApp y le dice al cliente que lo está confirmando. No inventa precios.",
  },
  {
    icon: LayoutDashboard,
    titulo: "Ves cada conversación",
    texto:
      "Todo lo que habla y cada pedido que toma queda en tu CRM: quién escribió, qué pidió y cómo va.",
  },
  {
    icon: PauseCircle,
    titulo: "Lo pausas cuando quieras",
    texto: "Con un botón Blexi deja de responder y atiendes tú. Lo vuelves a encender igual de fácil.",
  },
];

const preguntas = [
  {
    p: "¿Blexi manda mensajes sin que yo lo sepa?",
    r: "Blexi responde a quien te escribe, con tu catálogo, tus precios y tus promociones, y le escribe al cliente que dejó un pedido a medias. Todo queda en Conversaciones de tu CRM, y puedes pausarlo cuando quieras.",
  },
  {
    p: "¿Y si no sabe responder algo?",
    r: "Te lo pregunta a ti por WhatsApp y le avisa al cliente que lo está confirmando. Cuando contestas, Blexi le responde al cliente con tu respuesta.",
  },
  {
    p: "¿Tengo que cambiar mi número de WhatsApp?",
    r: "No. Conectamos el número de WhatsApp Business que ya usas y te acompañamos paso a paso. Si prefieres no tocar tu número, Blexi puede atender en uno nuevo.",
  },
  {
    p: "¿Qué pasa si se me acaban las conversaciones del mes?",
    r: "Compras un paquete de 100, 200 o 500 que suma conversaciones, notas de voz y fotos, o subes de plan. Blexi no se apaga sin avisarte.",
  },
  {
    p: "¿En qué se diferencia de un bot de botones?",
    r: "Blexi entiende lo que el cliente escribe como lo escribe, y también sus notas de voz. Recuerda a cada cliente, arma el pedido completo con domicilio y pago, y lo deja en tu CRM. No hay menús de «marque 1».",
  },
  {
    p: "¿Cómo pago?",
    r: "Los primeros 15 días son gratis y no te pedimos tarjeta. Después pagas mes a mes por transferencia, Nequi o tarjeta.",
  },
  {
    p: "¿Cómo cancelo?",
    r: "No hay permanencia. Cancelas cuando quieras y Blexi sigue funcionando hasta el final del mes que pagaste.",
  },
  {
    p: "¿Mis datos y los de mis clientes están seguros?",
    r: "Cada negocio tiene su propia base de datos, separada de las demás. Tratamos los datos según la Ley 1581 de Colombia; el detalle está en nuestra política de privacidad.",
  },
];

export function Faq() {
  return (
    <section id="preguntas" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Tú mandas
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Blexi vende por ti,{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              pero el negocio es tuyo
            </span>
            .
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {control.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white">
                  <c.icon className="size-5" strokeWidth={2.2} aria-hidden />
                </span>
                <p className="mt-4 font-grotesk text-lg font-bold text-brand-textDark">{c.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">{c.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center font-grotesk text-2xl font-bold text-brand-textDark">
            Preguntas frecuentes
          </h3>
          <div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
            {preguntas.map((q) => (
              <details key={q.p} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-brand-textDark">
                  {q.p}
                  <ChevronDown
                    className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-textMuted">
                  {q.r}
                  {q.p.startsWith("¿Mis datos") && (
                    <>
                      {" "}
                      <a href="/privacidad" className="font-semibold text-brand-primary hover:underline">
                        Leer la política
                      </a>
                      .
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
