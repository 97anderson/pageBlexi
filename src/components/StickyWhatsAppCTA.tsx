import { MessageCircle } from "lucide-react";

import { enlaceWhatsApp } from "@/lib/config";

/** Botón fijo abajo, sólo en celular: es donde llega casi todo el público. */
export function StickyWhatsAppCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
      <div className="relative mx-auto w-full max-w-xl px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3">
        <a
          href={enlaceWhatsApp("Hola, quiero mi descuento de lanzamiento de Blexi")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-blx-wa px-6 text-base font-extrabold text-blx-tinta shadow-xl shadow-black/30 ring-1 ring-black/10 transition hover:brightness-95 active:translate-y-px"
        >
          <MessageCircle className="size-5" strokeWidth={2.2} aria-hidden />
          Quiero el precio de lanzamiento
        </a>
      </div>
    </div>
  );
}
