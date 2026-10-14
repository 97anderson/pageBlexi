"use client";

import { useEffect, useState } from "react";

import { CUPOS_LANZAMIENTO, PROMO, finDeLaPromoEnPalabras, pesos } from "@/lib/config";

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

/** Barra superior oscura del diseño A. */
export function BannerDeLanzamiento() {
  const dias = useDiasQueFaltan();
  if (!PROMO.activo || dias === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 bg-blx-tinta px-6 py-3 text-center text-[15px] text-blx-barra">
      <span>
        <b className="text-white">Precio de lanzamiento:</b> desde {pesos(PROMO.precios.plata)}/mes tus primeros{" "}
        {PROMO.meses} meses, para registros hasta el {finDeLaPromoEnPalabras()}
        {dias !== null && dias > 1 ? ` (quedan ${dias} días)` : dias === 1 ? " (último día)" : ""}.
        {CUPOS_LANZAMIENTO.activo ? ` ${CUPOS_LANZAMIENTO.total} cupos.` : ""}
      </span>
      <a href="#precios" className="font-semibold text-blx-cianClaro no-underline hover:text-white">
        Ver precios
      </a>
    </div>
  );
}
