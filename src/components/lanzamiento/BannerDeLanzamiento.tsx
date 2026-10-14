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

/**
 * Franja superior: escasez real (la fecha) y el precio de entrada. No es un
 * botón: el único botón de esta pantalla es el del hero (ley de Hick).
 */
export function BannerDeLanzamiento({ listaPlata }: { listaPlata?: number }) {
  const dias = useDiasQueFaltan();
  if (!PROMO.activo || dias === 0) return null;

  const ahorro = listaPlata ? (listaPlata - PROMO.precios.plata) * PROMO.meses : null;

  return (
    <div className="relative z-[60] bg-blx-noche text-white">
      <div className="h-0.5 bg-blexi" aria-hidden />
      <a
        href="#precios"
        className="container-page flex min-h-10 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[13px] leading-snug sm:text-sm"
      >
        <span>
          <strong className="font-semibold">Precio de lanzamiento:</strong> Plata a {pesos(PROMO.precios.plata)}/mes tus
          primeros {PROMO.meses} meses{ahorro ? `, ahorras ${pesos(ahorro)}` : ""}
          {CUPOS_LANZAMIENTO.activo ? ` · ${CUPOS_LANZAMIENTO.total} cupos` : ""}
        </span>
        <span className="whitespace-nowrap rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-blx-textoNoche ring-1 ring-white/15">
          {dias === null
            ? `Hasta el ${finDeLaPromoEnPalabras()}`
            : dias === 1
              ? "Último día"
              : `Quedan ${dias} días`}
        </span>
      </a>
    </div>
  );
}
