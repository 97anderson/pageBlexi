"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  CUPOS_LANZAMIENTO,
  PROMO,
  enlaceWhatsApp,
  finDeLaPromoEnPalabras,
  pesos,
} from "@/lib/config";
import { track } from "@/lib/medicion";

/** Días enteros que faltan hasta el fin de la promoción, contados en Bogotá. */
export function diasQueFaltan(ahora: Date): number {
  const [anio, mes, dia] = PROMO.hasta.split("-").map(Number);
  // Fin del último día en Bogotá (UTC-5, sin horario de verano).
  const fin = Date.UTC(anio, mes - 1, dia, 23 + 5, 59, 59);
  return Math.max(0, Math.ceil((fin - ahora.getTime()) / 86_400_000));
}

/** El conteo se calcula en el navegador: en el servidor la página se cachea. */
export function useDiasQueFaltan(): number | null {
  const [dias, setDias] = useState<number | null>(null);
  useEffect(() => setDias(diasQueFaltan(new Date())), []);
  return dias;
}

export function BannerDeLanzamiento({ listaPlata }: { listaPlata?: number }) {
  const dias = useDiasQueFaltan();
  if (!PROMO.activo || dias === 0) return null;

  const ahorro = listaPlata ? (listaPlata - PROMO.precios.plata) * PROMO.meses : null;

  return (
    <div className="relative z-[60] bg-blx-sol text-blx-tinta">
      <a
        href={enlaceWhatsApp("Hola, quiero el precio de lanzamiento de Blexi para mi negocio")}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("cta_clic", { seccion: "banner" })}
        className="container-page flex min-h-11 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[13px] font-semibold leading-snug sm:text-sm"
      >
        <span>
          <strong className="font-extrabold">Lanzamiento en Cali y el Valle:</strong> Plata a{" "}
          {pesos(PROMO.precios.plata)}/mes tus primeros {PROMO.meses} meses
          {ahorro ? ` (ahorras ${pesos(ahorro)})` : ""} · IVA incluido
          {CUPOS_LANZAMIENTO.activo ? ` · ${CUPOS_LANZAMIENTO.total} cupos` : ""}
        </span>
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-blx-tinta px-3 py-0.5 text-xs font-bold text-white">
          {dias === null
            ? `Hasta el ${finDeLaPromoEnPalabras()}`
            : dias === 1
              ? "Último día"
              : `Quedan ${dias} días`}
          <ArrowRight className="size-3.5" aria-hidden />
        </span>
      </a>
    </div>
  );
}
