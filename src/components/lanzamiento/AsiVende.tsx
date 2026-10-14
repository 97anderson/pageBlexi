import { Bell, Images, Receipt, ShoppingBag } from "lucide-react";

/** La venta en el orden en que pasa. La numeración es el orden real. */
const pasos = [
  {
    icono: Images,
    titulo: "Responde al instante",
    texto:
      "A cualquier hora contesta con las fotos y los precios de tu catálogo. Sin dejar a nadie en visto.",
  },
  {
    icono: ShoppingBag,
    titulo: "Arma el pedido",
    texto:
      "Pregunta lo que falta, suma el domicilio de tu zona y confirma el total antes de cobrar.",
  },
  {
    icono: Receipt,
    titulo: "Cobra",
    texto:
      "Nequi, transferencia, pago en línea con Wompi o contraentrega. El comprobante queda en el pedido.",
  },
  {
    icono: Bell,
    titulo: "Te avisa",
    texto:
      "Te llega el pedido por WhatsApp y lo ves en tu panel: quién compró, qué, cuánto y cómo pagó.",
  },
];

export function AsiVende() {
  return (
    <section id="como-vende" className="bg-blx-papel py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-solTexto">Así vende Blexi</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            De «¿cuánto vale?» a pedido pagado, sin que tú escribas.
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-blx-tinta/10 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="flex flex-col gap-4 bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-extrabold leading-none text-blx-sol">{i + 1}</span>
                <p.icono className="size-6 text-blx-tinta/40" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-bold text-blx-tinta">{p.titulo}</h3>
              <p className="text-[15px] leading-relaxed text-blx-gris">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
