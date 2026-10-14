/**
 * Storytelling: el mismo día, sin y con Blexi. Segunda persona, ejemplo
 * ilustrativo; no es la historia de un cliente real.
 */
const dia = [
  {
    hora: "7:40 a. m.",
    sin: "Abres el local con 14 mensajes de anoche. Contestas los que alcanzas entre el café y la caja.",
    con: "Los 14 ya tienen respuesta desde anoche. Dos de ellos son pedidos pagados esperando despacho.",
  },
  {
    hora: "12:30 p. m.",
    sin: "Hora pico: cobras, empacas y el celular no para de vibrar. «Ya te contesto» a cinco personas.",
    con: "Atiendes el mostrador tranquilo. Blexi manda fotos, precios y arma los pedidos de WhatsApp.",
  },
  {
    hora: "4:15 p. m.",
    sin: "Buscas en el chat la dirección de un domicilio que alguien mandó a mediodía.",
    con: "El pedido está en tu panel con dirección, total y comprobante de Nequi.",
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
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-solTexto">Un martes cualquiera</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            El mismo día, dos finales distintos.
          </h2>
          <p className="mt-4 text-[15px] text-blx-gris">Ejemplo ilustrativo de un negocio con domicilios.</p>
        </div>

        <div className="mt-12 hidden grid-cols-[120px_1fr_1fr] gap-6 border-b border-blx-tinta/10 pb-3 text-sm font-bold uppercase tracking-wider md:grid">
          <span />
          <span className="text-blx-gris">Sin Blexi</span>
          <span className="text-blx-solTexto">Con Blexi</span>
        </div>

        <ol className="mt-6 space-y-4 md:mt-0 md:space-y-0">
          {dia.map((m) => (
            <li
              key={m.hora}
              className="grid gap-3 rounded-3xl bg-blx-papel p-6 md:grid-cols-[120px_1fr_1fr] md:gap-6 md:rounded-none md:border-b md:border-blx-tinta/10 md:bg-transparent md:px-0 md:py-7"
            >
              <p className="font-display text-lg font-bold text-blx-tinta">{m.hora}</p>
              <p className="text-[16px] leading-relaxed text-blx-gris">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider md:hidden">Sin Blexi</span>
                {m.sin}
              </p>
              <p className="rounded-2xl bg-white p-4 text-[16px] font-medium leading-relaxed text-blx-tinta ring-1 ring-blx-sol/40 md:bg-blx-sol/10 md:ring-0">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-blx-solTexto md:hidden">Con Blexi</span>
                {m.con}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
