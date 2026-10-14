import { CalendarCheck, LayoutDashboard, Megaphone, MessagesSquare, Truck, UserRound } from "lucide-react";

import { PanelDeVentas } from "@/components/lanzamiento/PanelDeVentas";
import { ADICIONALES, pesos } from "@/lib/config";

/**
 * Lo que trae el plan (módulos que el CRM concede a TODOS los planes en su
 * semilla: panel, pedidos, productos, clientes, conversaciones, pagos,
 * domicilios y citas) separado, sin letra pequeña, de los agentes
 * ADICIONALES con costo aparte (Ana y Sofía).
 */
const incluido = [
  { icono: LayoutDashboard, nombre: "Panel de ventas", texto: "Pedidos, productos y clientes en un solo lugar, con lo que vendió Blexi." },
  { icono: MessagesSquare, nombre: "Todas las conversaciones", texto: "Lees cada chat y entras a responder tú cuando quieras." },
  { icono: Truck, nombre: "Domicilios", texto: "Tarifa por zona, asignación al domiciliario y cobro contraentrega registrado." },
  { icono: CalendarCheck, nombre: "Citas", texto: "Para negocios de servicios: Blexi agenda y tú lo ves en tu panel." },
];

const min = (r: Record<string, number>) => Math.min(...Object.values(r));

export function QueIncluye() {
  return (
    <section id="incluye" className="bg-blx-noche py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-cian">El producto</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] [text-wrap:balance] sm:text-[2.6rem]">
            Blexi vende. Tu panel te muestra todo lo que pasó.
          </h2>
        </div>

        {/* Bento: el producto grande a la izquierda, lo incluido a la derecha. */}
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
          <div className="min-w-0 rounded-2xl bg-blx-tarjeta p-4 ring-1 ring-blx-borde sm:p-6">
            <figure>
                <PanelDeVentas />
                <figcaption className="mt-3 text-xs text-blx-apagadoNoche">Ilustración del panel con datos de ejemplo.</figcaption>
              </figure>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {incluido.map((b) => (
              <li key={b.nombre} className="rounded-2xl bg-blx-tarjeta p-6 ring-1 ring-blx-borde">
                <b.icono className="size-6 text-blx-cian" strokeWidth={1.8} aria-hidden />
                <h3 className="mt-4 font-grotesk text-lg font-bold">{b.nombre}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-blx-textoNoche">{b.texto}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Adicionales: con costo aparte, dicho en grande. */}
        <div className="mt-14">
          <h3 className="font-grotesk text-2xl font-bold">
            Agentes adicionales <span className="text-blx-textoNoche">· costo aparte</span>
          </h3>
          <p className="mt-2 max-w-2xl text-[15px] text-blx-textoNoche">
            No vienen incluidos en el plan. Los activas si los necesitas y se cobran aparte cada mes.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-blexi p-px">
              <div className="h-full rounded-[15px] bg-blx-tarjeta p-6">
                <UserRound className="size-6 text-blx-cian" aria-hidden />
                <h4 className="mt-4 font-grotesk text-lg font-bold">Ana, tu asistente</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-blx-textoNoche">
                  Le escribes por WhatsApp «¿cómo vamos hoy?» y te responde con tus ventas, pedidos pendientes y clientes
                  por atender.
                </p>
                <p className="mt-4 text-[15px] font-semibold text-white">
                  Prueba sin costo el primer mes; luego adicional desde {pesos(min(ADICIONALES.ana))}/mes según tu plan.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-blexi p-px">
              <div className="h-full rounded-[15px] bg-blx-tarjeta p-6">
                <Megaphone className="size-6 text-blx-cian" aria-hidden />
                <h4 className="mt-4 font-grotesk text-lg font-bold">Sofía, marketing con IA</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-blx-textoNoche">
                  Le cuentas la idea y te prepara publicaciones con tu logo, tus colores y el precio correcto, listas para
                  redes.
                </p>
                <p className="mt-4 text-[15px] font-semibold text-white">
                  Adicional desde {pesos(min(ADICIONALES.sofia))}/mes según tu plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
