"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, LayoutDashboard, MessageCircle, Sparkles, Zap } from "lucide-react";

import { LiveChatSimulation } from "./LiveChatSimulation";
import { BlexiMark } from "@/components/brand/BlexiMark";
import { WHATSAPP_PRUEBA, WHATSAPP_VENTAS, enlaceWhatsApp } from "@/lib/contacto";
import {
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

/** Tres hechos en una línea, en vez de cuatro tarjetas que repetían el título. */
const hechos = [
  { icon: Zap, texto: "Responde en segundos" },
  { icon: Clock3, texto: "24/7, también domingos" },
  { icon: LayoutDashboard, texto: "Cada pedido queda en tu CRM" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-24 sm:pt-24 lg:pt-28 lg:pb-32"
    >
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] animate-aurora rounded-full bg-purple-400/30 blur-3xl" />
        <div className="absolute right-[-15%] top-[20%] h-[600px] w-[600px] animate-aurora rounded-full bg-cyan-400/30 blur-3xl [animation-delay:-3s]" />
        <div className="absolute inset-0 bg-grid-soft opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bgMain/40 to-brand-bgMain" />
      </div>

      <div className="container-page grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <motion.div
          className="flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm shadow-slate-200/60 backdrop-blur-md">
              <BlexiMark state="loader" height={14} />
              IA entrenada para ventas en LATAM
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-grotesk text-[2.75rem] font-extrabold leading-[1.04] tracking-tight text-brand-textDark sm:text-6xl lg:text-[3.6rem] lg:leading-[1.04] xl:text-[4rem]"
          >
            Tú descansa,{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              BLEXI
            </span>{" "}
            atiende{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              WhatsApp
            </span>{" "}
            y vende por ti.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-textMuted"
          >
            Contesta cada mensaje, toma el pedido y lo deja en tu CRM, aunque
            estés atendiendo, durmiendo o sea domingo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.a
              href="#precios"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-primary px-8 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 transition-shadow hover:bg-brand-primaryHover hover:shadow-xl hover:shadow-cyan-500/60"
            >
              <Sparkles className="size-4" strokeWidth={2.2} aria-hidden />
              Comienza hoy mismo
              <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
            </motion.a>
            <motion.a
              href={enlaceWhatsApp(WHATSAPP_PRUEBA, "Hola")}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 text-base font-semibold text-brand-textDark backdrop-blur-md transition hover:border-slate-300 hover:bg-white"
            >
              <MessageCircle
                className="size-5 text-brand-whatsapp"
                strokeWidth={2.2}
                aria-hidden
              />
              Pruébalo en WhatsApp
            </motion.a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm text-brand-textMuted"
          >
            <span className="font-semibold text-brand-textDark">
              Desde {desde}/mes
            </span>{" "}
            los primeros {MESES_DE_LANZAMIENTO} meses ·{" "}
            <span className="font-semibold text-brand-textDark">15 días gratis</span>, sin
            tarjeta ·{" "}
            <a
              href={enlaceWhatsApp(WHATSAPP_VENTAS)}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-primary hover:underline"
            >
              ¿Dudas? Habla con un asesor
            </a>
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6"
          >
            {hechos.map((h) => (
              <li
                key={h.texto}
                className="flex items-center gap-2 text-sm font-medium text-brand-textDark"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-500 text-white">
                  <h.icon className="size-3.5" strokeWidth={2.4} aria-hidden />
                </span>
                {h.texto}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.25, ease: easeOutExpo }}
        >
          {/* Aura IA: gradient blur */}
          <motion.div
            className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-tr from-purple-400/30 to-cyan-400/30 blur-3xl"
            aria-hidden
            animate={{
              opacity: [0.55, 0.85, 0.55],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <LiveChatSimulation />
        </motion.div>
      </div>
    </section>
  );
}
