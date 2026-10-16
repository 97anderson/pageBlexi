import { pesos } from "@/lib/asesor";
import { CIERRE_DE_LANZAMIENTO, MESES_DE_LANZAMIENTO } from "@/lib/lanzamiento";
import type { PlanDeLaBase } from "@/lib/planes";
import { preciosDe } from "@/lib/precios";

/** Los tres planes con el precio de la base y el de lanzamiento, para las páginas de contenido. */
export function BloquePrecios({ planes }: { planes: PlanDeLaBase[] }) {
  const precios = preciosDe(planes);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {precios.map((p) => (
          <div key={p.slug} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <p className="font-grotesk text-lg font-bold text-brand-textDark">Plan {p.nombre}</p>
            <p className="mt-3 font-grotesk text-3xl font-extrabold text-brand-textDark">
              {pesos(p.lanzamiento)}
              <span className="text-base font-semibold text-brand-textMuted">/mes</span>
            </p>
            <p className="mt-1 text-sm text-brand-textMuted">
              Precio de lanzamiento por {MESES_DE_LANZAMIENTO} meses, IVA incluido.
              {p.lista !== undefined && <> Precio de lista: {pesos(p.lista)}/mes.</>}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-brand-textMuted">
        El precio de lanzamiento aplica a los negocios que se registren hasta el {CIERRE_DE_LANZAMIENTO}.
        Los primeros 15 días son gratis y sin tarjeta. Ana (asistente del dueño) y Sofía (marketing) son
        adicionales con costo aparte. Los precios y condiciones pueden cambiar.{" "}
        <a href="/#precios" className="font-semibold text-brand-primary hover:underline">
          Ver planes completos
        </a>
        .
      </p>
    </div>
  );
}
