import { Smartphone } from "lucide-react";

import { MOSTRAR_COEXISTENCIA } from "@/lib/config";

/**
 * La coexistencia: el dueño sigue con la app de WhatsApp Business en su
 * celular y Blexi atiende el mismo número. Apagada con
 * `MOSTRAR_COEXISTENCIA` hasta que esté probada con un número real.
 */
const puntos = [
  "Conservas tu número, tus chats y tus contactos.",
  "Cuando tú contestas un chat, Blexi te deja hablar.",
  "Lo que vende Blexi te llega al celular y al panel.",
];

export function SigueTuWhatsApp() {
  if (!MOSTRAR_COEXISTENCIA) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-blx-wa/15 text-emerald-700 lg:size-20">
          <Smartphone className="size-8 lg:size-10" aria-hidden />
        </div>
        <div className="min-w-0">
          <h2 className="font-grotesk text-3xl font-bold tracking-tight text-blx-tinta sm:text-4xl">
            Sigue usando tu WhatsApp.
          </h2>
          <ul className="mt-6 space-y-3 text-lg text-blx-apagado">
            {puntos.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-blexi" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
