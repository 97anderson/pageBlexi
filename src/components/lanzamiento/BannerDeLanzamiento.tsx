"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { PROMO, enlaceWhatsApp, finDeLaPromoEnPalabras, pesos } from "@/lib/config";

/** Días enteros que faltan hasta el fin de la promoción, contados en Bogotá. */
function diasQueFaltan(ahora: Date): number {
  const [anio, mes, dia] = PROMO.hasta.split("-").map(Number);
  // Fin del último día en Bogotá (UTC-5, sin horario de verano).
  const fin = Date.UTC(anio, mes - 1, dia, 23 + 5, 59, 59);
  return Math.max(0, Math.ceil((fin - ahora.getTime()) / 86_400_000));
}

export function BannerDeLanzamiento() {
  // El número se calcula en el navegador: en el servidor la página se cachea y
  // el conteo saldría viejo, o distinto del cliente al hidratar.
  const [dias, setDias] = useState<number | null>(null);

  useEffect(() => {
    setDias(diasQueFaltan(new Date()));
  }, []);

  if (!PROMO.activo || dias === 0) return null;

  return (
    <div className="relative z-[60] bg-blx-sol text-blx-tinta">
      <a
        href={enlaceWhatsApp(
          "Hola, quiero el precio de lanzamiento de Blexi para mi negocio",
        )}
        target="_blank"
        rel="noreferrer"
        className="container-page flex min-h-11 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[13px] font-semibold leading-snug sm:text-sm"
      >
        <span>
          <strong className="font-extrabold">Lanzamiento en el Valle del Cauca:</strong>{" "}
          59 % menos tus primeros {PROMO.meses} meses · Plata desde{" "}
          {pesos(PROMO.precios.plata)}/mes IVA incluido
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
