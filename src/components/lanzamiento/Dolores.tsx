import { Citado } from "@/components/ui/Citado";

/**
 * Problema y agitación: lo que vive un dueño de pyme con su WhatsApp.
 * Situaciones, no estadísticas. Lectura en F: titular a la izquierda y
 * tarjetas que se escanean por su primera línea.
 */
const dolores = [
  {
    cita: "¿Todavía tiene disponible?",
    texto: "Llega mientras atiendes en el local. Cuando por fin contestas, ya compró en otro lado.",
  },
  {
    cita: "¿Cuánto vale?",
    texto: "El mismo precio, la misma foto, la misma respuesta. Cuarenta veces al día.",
  },
  {
    cita: "Visto 22:14",
    texto: "De noche y en domingo también escriben. El mensaje se queda en visto hasta el lunes.",
  },
  {
    cita: "Ya le pregunté a otro",
    texto: "El cliente que no recibe respuesta en minutos no espera: le escribe a tu competencia.",
  },
];

export function Dolores() {
  return (
    <section className="bg-blx-fondo py-[112px]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[15px] font-semibold text-blx-violetaTexto">¿Te suena?</p>
          <h2 className="mt-3 font-grotesk text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.04] tracking-[-0.035em] text-blx-tinta [text-wrap:balance]">
            Tu WhatsApp está lleno de ventas que se enfrían esperando respuesta.
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {dolores.map((d) => (
            <li key={d.cita} className="rounded-3xl border border-blx-linea bg-white p-7">
              <p className="font-grotesk text-xl font-bold text-blx-tinta sm:text-2xl"><Citado>{d.cita}</Citado></p>
              <p className="mt-3 text-[16px] leading-relaxed text-blx-texto">{d.texto}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-lg font-semibold text-blx-tinta">
          No es falta de clientes. Es que nadie puede atender el local, despachar y contestar el celular al mismo tiempo.
        </p>
      </div>
    </section>
  );
}
