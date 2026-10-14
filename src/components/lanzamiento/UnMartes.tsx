/**
 * Storytelling: el mismo día, sin y con Blexi. Segunda persona, ejemplo
 * ilustrativo de una tienda con envíos; no es la historia de un cliente real.
 */
const dia = [
  {
    hora: "7:40 a. m.",
    sin: "Abres la tienda con 14 mensajes de anoche. Contestas los que alcanzas antes del primer cliente.",
    con: "Los 14 ya tienen respuesta desde anoche. Dos de ellos son pedidos pagados esperando despacho.",
  },
  {
    hora: "12:30 p. m.",
    sin: "Hora pico: atiendes, empacas y el celular no para. «Ya te contesto» a cinco personas.",
    con: "Atiendes el mostrador tranquilo. Blexi manda fotos, precios y tallas, y arma los pedidos.",
  },
  {
    hora: "4:15 p. m.",
    sin: "Buscas en el chat la dirección de un envío que alguien mandó a mediodía.",
    con: "El pedido está en tu panel con dirección, total y comprobante de pago.",
  },
  {
    hora: "9:40 p. m.",
    sin: "Ya cerraste. Alguien pregunta «¿todavía tiene disponible?». Lo verás mañana.",
    con: "Blexi le responde, le cobra y te llega el aviso: nuevo pedido pagado.",
  },
];

export function UnMartes() {
  return (
    <section id="un-martes" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Un martes cualquiera</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            El mismo día, dos finales distintos.
          </h2>
          <p className="mt-4 text-[15px] text-blx-apagado">Ejemplo ilustrativo de una tienda que vende por WhatsApp.</p>
        </div>

        <div className="mt-12 hidden grid-cols-[130px_1fr_1fr] gap-6 border-b border-blx-linea pb-3 font-display text-sm font-bold uppercase tracking-wider md:grid">
          <span />
          <span className="text-blx-apagado">Sin Blexi</span>
          <span className="bg-blexi-texto bg-clip-text text-transparent">Con Blexi</span>
        </div>

        <ol className="mt-6 space-y-4 md:mt-0 md:space-y-0">
          {dia.map((m) => (
            <li
              key={m.hora}
              className="grid gap-3 rounded-2xl bg-blx-claro p-6 md:grid-cols-[130px_1fr_1fr] md:gap-6 md:rounded-none md:border-b md:border-blx-linea md:bg-transparent md:px-0 md:py-7"
            >
              <p className="font-grotesk text-lg font-bold tabular-nums text-blx-tinta">{m.hora}</p>
              <p className="text-[16px] leading-relaxed text-blx-apagado">
                <span className="mb-1 block font-display text-xs font-bold uppercase tracking-wider md:hidden">Sin Blexi</span>
                {m.sin}
              </p>
              <div className="rounded-xl bg-blexi p-px">
                <p className="h-full rounded-[11px] bg-white p-4 text-[16px] font-medium leading-relaxed text-blx-tinta">
                  <span className="mb-1 block font-display text-xs font-bold uppercase tracking-wider text-blx-azulTexto md:hidden">Con Blexi</span>
                  {m.con}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
