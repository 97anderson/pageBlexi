"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { LiveChatSimulation } from "./LiveChatSimulation";

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

const avatarIds = [12, 33, 47, 68];

const trustItems = [
  {
    icon: Zap,
    title: "Responde 24/7",
    desc: "Sin dejar leads en visto.",
  },
  {
    icon: Sparkles,
    title: "Entrenada con tu catálogo",
    desc: "Tu info, tu tono.",
  },
  {
    icon: ShieldCheck,
    title: "CRM incluido",
    desc: "Pedidos y seguimiento.",
  },
  {
    icon: MessageCircle,
    title: "En WhatsApp",
    desc: "Donde ya están tus clientes.",
  },
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
              <Sparkles
                className="size-3.5 text-brand-aiMagic"
                aria-hidden
              />
              IA entrenada para ventas en LATAM
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-grotesk text-5xl font-extrabold leading-[1.04] tracking-tight text-brand-textDark sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]"
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
            El asistente inteligente y CRM que organiza tu negocio en Colombia
            sin que sepas de tecnología.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.a
              href="https://wa.me/15055787905"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-primary px-8 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 transition-shadow hover:bg-brand-primaryHover hover:shadow-xl hover:shadow-cyan-500/60"
            >
              Probar en WhatsApp
              <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
            </motion.a>
            <motion.a
              href="https://wa.me/573222393582"
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
              Hablar por WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {avatarIds.map((imgId, i) => (
                <motion.div
                  key={imgId}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                    delay: 0.55 + i * 0.06,
                  }}
                  className="relative size-10 overflow-hidden rounded-full border-2 border-white shadow-md shadow-slate-300/60 ring-1 ring-black/[0.04]"
                >
                  <Image
                    src={`https://i.pravatar.cc/128?img=${imgId}`}
                    alt=""
                    width={40}
                    height={40}
                    className="size-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="max-w-[260px] text-sm leading-snug text-brand-textMuted sm:max-w-none">
              <span className="font-semibold text-brand-textDark">
                Responde en segundos
              </span>{" "}
              con tu catálogo y registra todo en el CRM
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {trustItems.map((t) => (
                <div
                  key={t.title}
                  className="group flex items-start gap-3 rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-sm shadow-slate-200/50 backdrop-blur-md transition hover:border-slate-300 hover:bg-white"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm transition group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-purple-500">
                    <t.icon className="size-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-textDark">
                      {t.title}
                    </p>
                    <p className="mt-0.5 text-xs text-brand-textMuted">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
