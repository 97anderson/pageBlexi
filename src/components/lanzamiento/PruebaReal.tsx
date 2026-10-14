import { PRUEBA_REAL } from "@/lib/config";

/**
 * Prueba social sin inventar: tres cifras medidas en producción en un
 * negocio cliente, con su periodo. Sin nombre, sin ciudad, sin logo.
 * Una sola métrica fuerte manda (la mediana de respuesta); las otras dos la
 * acompañan.
 */
export function PruebaReal() {
  return (
    <section className="relative overflow-hidden bg-blx-noche py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(72,144,240,0.18),transparent)]" aria-hidden />
      <div className="container-page relative grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-cian">Medido, no prometido</p>
          <p className="mt-6 font-grotesk text-[5.5rem] font-bold leading-none tracking-[-0.04em] sm:text-[8rem]">
            <span className="bg-blexi bg-clip-text text-transparent">{PRUEBA_REAL.medianaSegundos}</span>
            <span className="ml-2 text-3xl font-semibold text-blx-textoNoche sm:text-4xl">segundos</span>
          </p>
          <h2 className="mt-4 max-w-xl font-grotesk text-2xl font-bold leading-snug sm:text-3xl">
            Tiempo de respuesta (mediana) en {PRUEBA_REAL.quien}.
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-blx-tarjeta p-6 ring-1 ring-blx-borde">
            <dt className="text-sm text-blx-apagadoNoche">Conversaciones atendidas</dt>
            <dd className="mt-1 font-grotesk text-4xl font-bold tabular-nums">{PRUEBA_REAL.conversaciones}</dd>
            <dd className="text-sm text-blx-apagadoNoche">en {PRUEBA_REAL.dias} días</dd>
          </div>
          <div className="rounded-2xl bg-blx-tarjeta p-6 ring-1 ring-blx-borde">
            <dt className="text-sm text-blx-apagadoNoche">Fuera de horario</dt>
            <dd className="mt-1 font-grotesk text-4xl font-bold tabular-nums">{PRUEBA_REAL.fueraDeHorarioPct} %</dd>
            <dd className="text-sm text-blx-apagadoNoche">de noche, en domingo o festivo</dd>
          </div>
        </dl>
      </div>
      <p className="container-page relative mt-8 text-sm text-blx-apagadoNoche">
        Conversaciones del {PRUEBA_REAL.desde} al {PRUEBA_REAL.hasta}, medidas en el sistema de Blexi. Ese casi un tercio
        que escribe fuera de horario es el que hoy suele quedar en visto.
      </p>
    </section>
  );
}
