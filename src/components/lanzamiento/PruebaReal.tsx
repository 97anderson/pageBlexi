import { PRUEBA_REAL } from "@/lib/config";

/**
 * Prueba social sin inventar: tres cifras medidas en producción en un
 * negocio cliente, con su periodo. Sin nombre, sin logo, sin testimonio.
 */
export function PruebaReal() {
  const cifras = [
    { valor: String(PRUEBA_REAL.conversaciones), unidad: "conversaciones", texto: `atendidas en ${PRUEBA_REAL.dias} días` },
    { valor: PRUEBA_REAL.medianaSegundos, unidad: "segundos", texto: "de respuesta (mediana)" },
    { valor: `${PRUEBA_REAL.fueraDeHorarioPct} %`, unidad: "fuera de horario", texto: "llegaron de noche, en domingo o en festivo" },
  ];

  return (
    <section className="bg-blx-tinta py-20 text-white sm:py-24">
      <div className="container-page">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-sol">Medido, no prometido</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight [text-wrap:balance] sm:text-[2.6rem]">
          Así le fue a {PRUEBA_REAL.quien}.
        </h2>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3">
          {cifras.map((c) => (
            <div key={c.unidad} className="bg-blx-tinta p-7 sm:p-8">
              <dt className="sr-only">{c.unidad}</dt>
              <dd>
                <span className="block font-display text-6xl font-extrabold leading-none tracking-tight text-blx-sol sm:text-7xl">
                  {c.valor}
                </span>
                <span className="mt-3 block text-lg font-bold">{c.unidad}</span>
                <span className="block text-[15px] text-white/70">{c.texto}</span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-3xl text-sm text-white/60">
          Datos de las conversaciones del {PRUEBA_REAL.desde} al {PRUEBA_REAL.hasta}, medidos en el sistema de
          Blexi. Ese casi un tercio de clientes que escribe fuera de horario es el que hoy suele quedar en visto.
        </p>
      </div>
    </section>
  );
}
