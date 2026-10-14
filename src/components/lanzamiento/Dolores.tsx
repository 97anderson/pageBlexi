/**
 * Problema y agitación: lo que vive un dueño de pyme con su WhatsApp.
 * Situaciones, no estadísticas. Lectura en F: titular a la izquierda y
 * tarjetas que se escanean por su primera línea.
 */
const dolores = [
  {
    cita: "«¿Todavía tiene disponible?»",
    texto: "Llega mientras atiendes en el local. Cuando por fin contestas, ya compró en otro lado.",
  },
  {
    cita: "«¿Cuánto vale?»",
    texto: "El mismo precio, la misma foto, la misma respuesta. Cuarenta veces al día.",
  },
  {
    cita: "«Visto 22:14»",
    texto: "De noche y en domingo también escriben. El mensaje se queda en visto hasta el lunes.",
  },
  {
    cita: "«Ya le pregunté a otro»",
    texto: "El cliente que no recibe respuesta en minutos no espera: le escribe a tu competencia.",
  },
];

export function Dolores() {
  return (
    <section className="bg-blx-claro py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Te suena</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            Tu WhatsApp está lleno de ventas que se enfrían esperando respuesta.
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {dolores.map((d) => (
            <li key={d.cita} className="rounded-2xl border border-blx-linea bg-white p-7">
              <p className="font-grotesk text-xl font-bold text-blx-tinta sm:text-2xl">{d.cita}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-blx-apagado">{d.texto}</p>
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
