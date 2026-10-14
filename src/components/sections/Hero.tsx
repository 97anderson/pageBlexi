"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { LiveChatSimulation } from "./LiveChatSimulation";
import { WHATSAPP_PRUEBA, WHATSAPP_VENTAS, enlaceWhatsApp } from "@/lib/contacto";
import {
  CIERRE_DE_LANZAMIENTO,
  MESES_DE_LANZAMIENTO,
  PRECIO_DE_LANZAMIENTO_COP,
} from "@/lib/lanzamiento";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const desdeCop = Math.min(...Object.values(PRECIO_DE_LANZAMIENTO_COP));
const desde = `$${desdeCop.toLocaleString("es-CO")}`;

/**
 * Lo que hace Blexi en tres pasos, en tarjetas numeradas alrededor del
 * celular: el mismo pedido del chat, de la respuesta al CRM.
 */
const pasos = [
  { n: "01", titulo: "Responde", texto: "En segundos, también a las 11 p. m.", lado: "lg:-left-8 lg:top-24" },
  { n: "02", titulo: "Toma el pedido", texto: "2 Doble Carne + gaseosa · $59.000", lado: "lg:-right-10 lg:top-40" },
  { n: "03", titulo: "Al CRM", texto: "Pedido #1042 en tu tablero", lado: "lg:left-6 lg:bottom-10" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 sm:pt-20 lg:pb-32">
      <div className="container-page">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span variants={fadeUp} className="etiqueta">
            IA que vende por WhatsApp · Colombia
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-grotesk text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-brand-textDark sm:text-6xl lg:text-[4.25rem]"
          >
            Tú descansa, BLEXI atiende WhatsApp y{" "}
            <span className="subrayado">vende por ti.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-textMuted"
          >
            Contesta cada mensaje, toma el pedido y lo deja en tu CRM, aunque
            estés atendiendo, durmiendo o sea domingo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <motion.a
              href="#precios"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-negro w-full sm:w-auto"
            >
              Comienza hoy mismo
              <span className="btn-negro__chip">
                <ArrowRight className="size-4" strokeWidth={2.6} aria-hidden />
              </span>
            </motion.a>
            <motion.a
              href={enlaceWhatsApp(WHATSAPP_PRUEBA, "Hola")}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-blanco w-full sm:w-auto"
            >
              <MessageCircle className="size-5 text-brand-whatsapp" strokeWidth={2.2} aria-hidden />
              Pruébalo en WhatsApp
            </motion.a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 font-grotesk text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            <span className="text-[#00D8F0]">●</span> Desde {desde}/mes · 15 días gratis · sin tarjeta
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-sm text-brand-textMuted">
            Precio de lanzamiento por {MESES_DE_LANZAMIENTO} meses para quien se registre hasta el{" "}
            {CIERRE_DE_LANZAMIENTO} ·{" "}
            <a
              href={enlaceWhatsApp(WHATSAPP_VENTAS)}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 underline decoration-[#00D8F0] decoration-2 underline-offset-4"
            >
              ¿Dudas? Habla con un asesor
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-20 max-w-3xl lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: easeOutExpo }}
        >
          {/* Un solo brillo suave detrás del celular. */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-300/30 to-cyan-300/30 blur-3xl"
            aria-hidden
          />

          <LiveChatSimulation />

          {/* Tarjetas numeradas: flotan alrededor en pantalla grande y se
              ordenan debajo en el celular. */}
          <ol className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-0">
            {pasos.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.25, type: "spring", stiffness: 260, damping: 24 }}
                className={`rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-lg shadow-slate-900/5 lg:absolute lg:w-56 ${p.lado}`}
              >
                <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C22D6]">
                  {p.n} · {p.titulo}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">{p.texto}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden /> Listo
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
