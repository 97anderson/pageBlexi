import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { PRUEBA_DIAS } from "@/lib/config";

/**
 * Botón fijo abajo, sólo en celular: es donde llega casi todo el público.
 * `main` y el footer reservan su alto (pb-28) para que no tape contenido.
 */
export function StickyWhatsAppCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-blx-tinta/95 backdrop-blur sm:hidden">
      <div className="mx-auto w-full max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5">
        <BotonWhatsApp
          seccion="fijo_movil"
          variante="wa"
          mensaje="Hola, quiero probar Blexi en mi negocio"
          className="min-h-12 w-full"
        >
          Probar {PRUEBA_DIAS} días gratis
        </BotonWhatsApp>
        <p className="mt-1 text-center text-[11px] text-white/60">Abre WhatsApp con el mensaje listo</p>
      </div>
    </div>
  );
}
