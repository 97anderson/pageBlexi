import { MessageCircle } from "lucide-react";

import { PROMO, enlaceWhatsApp, finDeLaPromoEnPalabras, pesos } from "@/lib/config";

export function BottomCTA() {
  return (
    <section id="empezar" className="bg-blx-sol py-20 text-blx-tinta sm:py-24">
      <div className="container-page grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="min-w-0">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-6xl">
            Que tu próximo pedido lo tome Blexi.
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium">
            Escríbenos, te mostramos Blexi vendiendo con tus productos y lo dejamos funcionando en tu negocio.
            Desde {pesos(PROMO.precios.plata)} al mes los primeros {PROMO.meses} meses, hasta el {finDeLaPromoEnPalabras()}.
          </p>
        </div>
        <a
          href={enlaceWhatsApp("Hola, quiero que Blexi venda en mi negocio")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-blx-tinta px-8 text-lg font-extrabold text-white transition hover:bg-blx-tintaSuave active:translate-y-px"
        >
          <MessageCircle className="size-6" aria-hidden />
          Empezar por WhatsApp
        </a>
      </div>
    </section>
  );
}
