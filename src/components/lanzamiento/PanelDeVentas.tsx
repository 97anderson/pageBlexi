import { BlexiMark } from "@/components/brand/BlexiMark";

/**
 * Maqueta del panel de pedidos del CRM, con su kit: lienzo Noche Cobalto,
 * tarjetas #222C48, bordes #404F73, cifras en Space Grotesk y el degradado
 * de marca sólo como firma. Datos de EJEMPLO, multirrubro y sin marcas reales;
 * la página lo dice debajo.
 */
const pedidos = [
  { id: "1042", item: "Perfume Madera Intensa 100 ml", total: "$197.000", pago: "Nequi", estado: "Pagado" },
  { id: "1041", item: "Chaqueta denim · talla M", total: "$159.900", pago: "Contraentrega", estado: "En camino" },
  { id: "1040", item: "Audífonos inalámbricos", total: "$89.900", pago: "Wompi", estado: "Pagado" },
  { id: "1039", item: "Kit de cuidado facial", total: "$74.000", pago: "Transferencia", estado: "Por confirmar" },
];

const color: Record<string, string> = {
  Pagado: "bg-emerald-400/15 text-emerald-300",
  "En camino": "bg-sky-400/15 text-sky-300",
  "Por confirmar": "bg-amber-400/15 text-amber-200",
};

export function PanelDeVentas({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-blx-noche text-blx-textoNoche ring-1 ring-blx-borde ${className}`} aria-label="Ilustración del panel de pedidos de Blexi con datos de ejemplo" role="img">
      <div className="flex items-center justify-between border-b border-blx-borde px-4 py-3">
        <div className="flex items-center gap-2">
          <BlexiMark state="static" height={14} />
          <span className="font-grotesk text-sm font-semibold text-white">Pedidos</span>
        </div>
        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] ring-1 ring-blx-borde">Hoy</span>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { k: "Ventas de hoy", v: "$520.800" },
          { k: "Pedidos", v: "4" },
          { k: "Por Blexi", v: "4 de 4" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl bg-blx-tarjeta p-2.5 ring-1 ring-blx-borde">
            <div className="text-[10.5px] text-blx-apagadoNoche">{s.k}</div>
            <div className="font-grotesk text-base font-bold tabular-nums text-white">{s.v}</div>
          </div>
        ))}
      </div>

      <ul className="space-y-1.5 px-3 pb-3">
        {pedidos.map((p) => (
          <li key={p.id} className="flex items-center gap-3 rounded-xl bg-blx-tarjeta px-3 py-2 ring-1 ring-blx-borde">
            <span className="font-grotesk text-[11px] text-blx-apagadoNoche">#{p.id}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-medium text-white">{p.item}</span>
              <span className="text-[10.5px] text-blx-apagadoNoche">{p.pago}</span>
            </span>
            <span className="font-grotesk text-[12px] font-semibold tabular-nums text-white">{p.total}</span>
            <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold sm:inline ${color[p.estado]}`}>{p.estado}</span>
          </li>
        ))}
      </ul>
      <div className="h-0.5 bg-blexi" aria-hidden />
    </div>
  );
}
