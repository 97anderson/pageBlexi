"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

export function BottomCTA() {
  return (
    <section id="cta" className="relative px-4 py-20 sm:px-8 lg:py-28">
      <Reveal y={28}>
        <div className="container-page">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-800 p-10 sm:p-14 lg:p-20"
          >
            {/* Aurora glows */}
            <div
              className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-cyan-500/30 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-32 -bottom-32 size-[28rem] rounded-full bg-purple-500/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50"
              aria-hidden
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                  <Sparkles className="size-3.5" aria-hidden />
                  El futuro ya llegó
                </span>
                <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  El futuro de las Pymes está aquí.{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Únete a BLEXI hoy.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  En 2 días puedes tener tu agente de IA atendiendo WhatsApp,
                  multiplicar tus ventas y dejar de perder clientes por no
                  contestar.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <motion.a
                  href="https://wa.me/15055787905"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 text-base font-bold text-slate-900 shadow-xl shadow-cyan-500/40 transition hover:bg-cyan-400 lg:w-auto"
                >
                  Probar en WhatsApp
                  <ArrowRight className="size-5" strokeWidth={2.4} />
                </motion.a>
                <motion.a
                  href="https://wa.me/573222393582"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 lg:w-auto"
                >
                  <MessageCircle
                    className="size-4 text-emerald-400"
                    strokeWidth={2.2}
                  />
                  Hablar por WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
