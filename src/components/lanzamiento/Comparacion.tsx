import { PROMO, PRUEBA_REAL, pesos } from "@/lib/config";

/**
 * Blexi frente a las otras dos salidas. Honesta: no pone cifras de salarios
 * que no podemos sostener y no promete reemplazar a nadie.
 */
const filas = [
  {
    tema: "Costo al mes",
    blexi: `Desde ${pesos(PROMO.precios.plata)} los primeros ${PROMO.meses} meses, IVA incluido`,
    persona: "Un salario con prestaciones",
    nada: "Nada en pesos, pero las ventas que no se contestan",
  },
  {
    tema: "Horario",
    blexi: "Todos los días, a toda hora",
    persona: "Su turno",
    nada: "Cuando tú alcanzas",
  },
  {
    tema: "Tiempo de respuesta",
    blexi: `Segundos (mediana medida: ${PRUEBA_REAL.medianaSegundos} s)`,
    persona: "Minutos, si no está ocupada",
    nada: "Horas, o al día siguiente",
  },
  {
    tema: "Arma el pedido y cobra",
    blexi: "Sí, y te deja el comprobante en el panel",
    persona: "Sí, cuando aprende tu catálogo",
    nada: "Tú, entre el local y el celular",
  },
  {
    tema: "Lo que no sabe",
    blexi: "Te pregunta a ti y espera tu respuesta",
    persona: "Te pregunta a ti",
    nada: "—",
  },
];

export function Comparacion() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Las tres salidas</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            Blexi no reemplaza a tu equipo. Lo libera.
          </h2>
          <p className="mt-4 text-lg text-blx-apagado">
            Lo repetitivo lo hace Blexi; tu gente atiende, despacha y cuida a los clientes de siempre.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl ring-1 ring-blx-linea">
          <table className="w-full min-w-[680px] border-collapse text-left text-[15px]">
            <caption className="sr-only">Comparación entre Blexi, contratar a alguien y no hacer nada</caption>
            <thead>
              <tr className="text-sm uppercase tracking-wider">
                <th scope="col" className="w-[22%] bg-blx-claro p-4" />
                <th scope="col" className="bg-blx-noche p-4 font-display font-bold text-white"><span className="bg-blexi bg-clip-text text-transparent">Blexi</span></th>
                <th scope="col" className="bg-blx-claro p-4 font-display font-bold text-blx-tinta">Contratar a alguien</th>
                <th scope="col" className="bg-blx-claro p-4 font-display font-bold text-blx-tinta">No hacer nada</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.tema} className="border-t border-blx-linea">
                  <th scope="row" className="p-4 font-bold text-blx-tinta">{f.tema}</th>
                  <td className="bg-blx-azul/[0.07] p-4 font-semibold text-blx-tinta">{f.blexi}</td>
                  <td className="p-4 text-blx-apagado">{f.persona}</td>
                  <td className="p-4 text-blx-apagado">{f.nada}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
