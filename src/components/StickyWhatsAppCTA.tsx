"use client";

import { useEffect, useState } from "react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { PRUEBA_DIAS } from "@/lib/config";

/**
 * Botón fijo abajo, sólo en celular. Aparece cuando el botón del hero sale
 * de la pantalla: nunca hay dos botones verdes a la vista a la vez. El
 * footer reserva su alto (pb-28) para que no tape contenido.
 */
export function StickyWhatsAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#cta-hero a");
    if (!hero || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting));
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-blx-borde bg-blx-noche/95 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <div className="mx-auto w-full max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5">
        <BotonWhatsApp seccion="fijo_movil" mensaje="Hola, quiero probar Blexi en mi negocio" className="min-h-12 w-full">
          Probar {PRUEBA_DIAS} días gratis
        </BotonWhatsApp>
        <p className="mt-1 text-center text-[11px] text-blx-apagadoNoche">Abre WhatsApp con el mensaje listo</p>
      </div>
    </div>
  );
}
