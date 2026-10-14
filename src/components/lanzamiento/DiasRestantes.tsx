"use client";

import { useDiasQueFaltan } from "@/components/lanzamiento/BannerDeLanzamiento";
import { finDeLaPromoEnPalabras } from "@/lib/config";

/** «Quedan N días»: la fecha límite real, contada en el navegador. */
export function DiasRestantes() {
  const dias = useDiasQueFaltan();
  if (dias === null) return <>hasta el {finDeLaPromoEnPalabras()}</>;
  if (dias === 1) return <>hoy es el último día</>;
  return (
    <>
      quedan {dias} días (hasta el {finDeLaPromoEnPalabras()})
    </>
  );
}
