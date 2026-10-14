import { Bell, Images, Receipt, ShoppingBag } from "lucide-react";

/** La venta en el orden en que pasa. La numeración es el orden real. */
const pasos = [
  {
    icono: Images,
    titulo: "Responde al instante",
    texto: "A cualquier hora contesta con las fotos, precios y presentaciones de tu catálogo.",
  },
  {
    icono: ShoppingBag,
    titulo: "Arma el pedido",
    texto: "Pregunta lo que falta (talla, cantidad, dirección), suma el envío y confirma el total.",
  },
  {
    icono: Receipt,
    titulo: "Cobra",
    texto: "Nequi, transferencia, pago en línea con Wompi o contraentrega. El comprobante queda en el pedido.",
  },
  {
    icono: Bell,
    titulo: "Te avisa",
    texto: "Te llega el pedido por WhatsApp y lo ves en tu panel: quién compró, qué, cuánto y cómo pagó.",
  },
];

export function AsiVende() {
  return (
    <section id="como-vende" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Así vende Blexi</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            De «¿cuánto vale?» a pedido pagado, sin que tú escribas.
          </h2>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="relative flex flex-col gap-4 rounded-2xl border border-blx-linea bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blexi font-grotesk text-lg font-bold text-white">
                  {i + 1}
                </span>
                <p.icono className="size-6 text-blx-apagado" aria-hidden />
              </div>
              <h3 className="font-grotesk text-lg font-bold text-blx-tinta">{p.titulo}</h3>
              <p className="text-[15px] leading-relaxed text-blx-apagado">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
