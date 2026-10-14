"use client";

import { useState } from "react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { PROMESA_ALTA_ASISTIDA, PRUEBA_DIAS } from "@/lib/config";
import { track } from "@/lib/medicion";

/**
 * "¿Qué vendes?" de la dirección C, con el estilo de A: chips de rubro que
 * cambian el chat de ejemplo. Textos de los 5 rubros tal cual del diseño.
 */
type Chat = { negocio: string; pregunta: string; respuesta: string; cliente2: string; cierre: string; aviso: string };

const CHATS: Record<string, Chat> = {
  perfumeria: {
    negocio: "Tienda Aurora",
    pregunta: "Hola, ¿tienen un perfume de hombre que dure todo el día?",
    respuesta: "Te recomiendo Madera Intensa, eau de parfum de 100 ml, $185.000. Te envío la foto.",
    cliente2: "Me lo llevo, con envío a Chapinero",
    cierre: "Listo: envío $12.000, total $197.000. Te dejo el enlace para pagar por Nequi.",
    aviso: "Nuevo pedido $197.000, pagado por Nequi.",
  },
  moda: {
    negocio: "Moda Lúa",
    pregunta: "¿Tienen la chaqueta negra en talla M?",
    respuesta: "¡Sí, quedan 3! Chaqueta Urbana negra, talla M, $159.000. Te envío las fotos.",
    cliente2: "La quiero, ¿envían a Medellín?",
    cierre: "Claro: envío $14.000, llega en 2 días. Total $173.000. ¿Nequi o transferencia?",
    aviso: "Nuevo pedido $173.000, por confirmar pago.",
  },
  belleza: {
    negocio: "Estudio Brillo",
    pregunta: "¿Tienen cita para uñas el sábado?",
    respuesta: "Tengo el sábado a las 10:00 o a las 3:00 p. m. Manicure semipermanente: $45.000.",
    cliente2: "A las 3, por favor",
    cierre: "Agendada el sábado a las 3:00 p. m. Te escribo un recordatorio el viernes.",
    aviso: "Nueva cita el sábado 3:00 p. m.",
  },
  tecnologia: {
    negocio: "Punto Tech",
    pregunta: "¿Cuánto valen los audífonos inalámbricos?",
    respuesta: "Tengo dos: Pulse Pro a $189.000 con cancelación de ruido y Pulse Lite a $99.000. ¿Te mando las fotos?",
    cliente2: "Los Pulse Pro, para recoger",
    cierre: "Te los aparto. Puedes recogerlos hoy hasta las 7:00 p. m. Pagas en tienda o por transferencia.",
    aviso: "Nuevo pedido $189.000 para recoger.",
  },
  servicios: {
    negocio: "Taller Ruta",
    pregunta: "¿Cuánto cuesta el cambio de aceite para moto?",
    respuesta: "Para motos hasta 200 cc, $65.000 con filtro. ¿Te agendo?",
    cliente2: "Sí, mañana en la mañana",
    cierre: "Quedas mañana a las 9:00 a. m. Te llega la ubicación del taller.",
    aviso: "Nueva cita mañana 9:00 a. m.",
  },
};

const RUBROS: [string, string][] = [
  ["perfumeria", "Perfumería"],
  ["moda", "Moda"],
  ["belleza", "Belleza"],
  ["tecnologia", "Tecnología"],
  ["servicios", "Servicios"],
];

export function QueVendes() {
  const [rubro, setRubro] = useState("perfumeria");
  const chat = CHATS[rubro];
  const nombre = RUBROS.find(([k]) => k === rubro)?.[1] ?? "";

  const elegir = (k: string) => {
    setRubro(k);
    track("cta_clic", { seccion: "que_vendes_rubro", rubro: k });
  };

  return (
    <section aria-labelledby="que-vendes" className="mx-auto max-w-[1240px] px-4 pb-28 sm:px-6">
      <div className="flex flex-wrap items-center gap-9 rounded-[28px] border border-blx-linea bg-white px-6 py-9 sm:px-9">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px]">
          <h2 id="que-vendes" className="m-0 font-grotesk text-[32px] font-bold tracking-[-0.02em]">
            ¿Qué vendes?
          </h2>
          <p className="m-0 text-[17px] text-blx-texto">Elige tu tipo de negocio y mira cómo atendería Blexi a tu cliente.</p>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Tipo de negocio">
            {RUBROS.map(([k, n]) => {
              const activo = k === rubro;
              return (
                <button
                  key={k}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => elegir(k)}
                  className={`min-h-11 rounded-full border px-[18px] py-3 text-base font-semibold leading-none ${
                    activo ? "border-blx-cobalto bg-blx-cobalto text-white" : "border-[#C9CFDD] bg-white text-blx-tinta hover:border-blx-cobalto"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>
          <BotonWhatsApp
            seccion="que_vendes"
            mensaje={`Hola, tengo un negocio de ${nombre.toLowerCase()} y quiero que Blexi atienda mi WhatsApp`}
            datos={{ rubro }}
            className="mt-2 self-start"
          >
            Quiero esto en mi WhatsApp
          </BotonWhatsApp>
          <span className="text-sm text-blx-apagado">
            {PRUEBA_DIAS} días gratis · Sin tarjeta{PROMESA_ALTA_ASISTIDA.activo ? ` · ${PROMESA_ALTA_ASISTIDA.corta}` : ""}
          </span>
        </div>

        <div className="mx-auto flex min-w-0 flex-[0_1_330px] flex-col gap-2.5 rounded-[28px] bg-white px-3.5 pb-5 pt-4 text-sm leading-[1.4] shadow-[0_24px_60px_rgba(48,96,240,0.18)]" aria-live="polite">
          <div className="flex items-center gap-2.5 border-b border-[#EEF0F5] pb-2.5">
            <span className="size-[34px] rounded-full bg-[linear-gradient(135deg,#9030F0,#00D8F0)]" aria-hidden />
            <div>
              <div className="font-bold">{chat.negocio}</div>
              <div className="text-xs text-blx-apagado">Responde Blexi · en línea</div>
            </div>
          </div>
          <div className="max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-blx-burbujaCliente px-3 py-2.5">{chat.pregunta}</div>
          <div className="max-w-[88%] self-start rounded-[14px_14px_14px_4px] bg-blx-burbujaBlexi px-3 py-2.5">{chat.respuesta}</div>
          <div className="max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-blx-burbujaCliente px-3 py-2.5">{chat.cliente2}</div>
          <div className="max-w-[88%] self-start rounded-[14px_14px_14px_4px] bg-blx-burbujaBlexi px-3 py-2.5">{chat.cierre}</div>
          <div className="mt-1 rounded-[14px] bg-blx-tinta px-3.5 py-3 text-[13px] text-white">
            <span className="font-bold text-blx-verdeOk">Aviso al dueño:</span> {chat.aviso}
          </div>
        </div>
      </div>
      <p className="mt-3.5 text-center text-[13px] text-blx-apagado">Conversaciones de ejemplo.</p>
    </section>
  );
}
