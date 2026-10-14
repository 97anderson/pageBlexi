"use client";

import { useEffect, useState } from "react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { PRUEBA_DIAS } from "@/lib/config";

/**
 * CTA fijo en celular: píldora negra que aparece cuando el botón del hero
 * sale de vista. El footer reserva su alto (pb-28) para no tapar contenido.
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
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-blx-linea bg-[rgba(251,251,253,0.95)] backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <div className="mx-auto w-full max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5">
        <BotonWhatsApp seccion="fijo_movil" mensaje="Hola, quiero probar Blexi en mi negocio" className="w-full !py-4">
          Probar {PRUEBA_DIAS} días gratis
        </BotonWhatsApp>
      </div>
    </div>
  );
}
