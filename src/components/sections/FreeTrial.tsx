"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

const trialSteps = [
  {
    step: "01",
    title: "Regístrate en 3 minutos",
    desc: "Cuéntanos sobre tu negocio. Sin tecnicismos, sin contratos.",
  },
  {
    step: "02",
    title: "Carga tu catálogo",
    desc: "Sube tus productos o servicios con un archivo Excel o manualmente.",
  },
  {
    step: "03",
    title: "Blexi entra en acción",
    desc: "En menos de 24h tu agente está atendiendo WhatsApp y cerrando ventas.",
  },
];

const included = [
  "500 conversaciones de prueba",
  "CRM completo incluido",
  "Agente IA 24/7 en WhatsApp",
  "Catálogo hasta 100 productos",
  "Soporte por WhatsApp",
  "Sin tarjeta de crédito",
];

export function FreeTrial() {
  return (
    <section
      id="free-trial"
      className="relative bg-white py-24 lg:py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="container-page">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700">
            <Sparkles className="size-3.5" aria-hidden />
            Sin riesgo · Sin tarjeta · Sin compromisos
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            14 días gratis.{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Prueba Blexi
            </span>{" "}
            con tu propio negocio.
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Configura tu agente, carga tu catálogo y déjalo trabajar. Si en 14 días no ves resultados, no pagas nada.
          </p>
        </Reveal>

        {/* Steps */}
        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-6 sm:grid-cols-3">
            {trialSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="inline-block font-grotesk text-5xl font-extrabold leading-none text-slate-100 select-none">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-brand-textDark">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-textMuted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Included + CTA */}
        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-3xl border-2 border-brand-primary bg-white shadow-xl shadow-cyan-500/10">
            <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
              {/* Left: what's included */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2">
                  <Zap className="size-5 text-brand-primary" strokeWidth={2.5} aria-hidden />
                  <h3 className="font-grotesk text-xl font-bold text-brand-textDark">
                    Incluido en los 14 días gratis
                  </h3>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        className="size-4.5 shrink-0 text-cyan-500"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-brand-textMuted">
                  Al terminar el trial, elige el plan que mejor se adapte a tu negocio o cancela sin penalización.
                </p>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:min-w-[280px] lg:p-10">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-white font-grotesk">$0</p>
                  <p className="mt-1 text-sm text-slate-400">durante 14 días</p>
                </div>

                <motion.a
                  href="https://wa.me/573222393582?text=Hola!%20Quiero%20empezar%20mi%20prueba%20gratuita%20de%2014%20d%C3%ADas%20de%20Blexi"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/40 transition hover:opacity-90"
                >
                  <Sparkles className="size-4" aria-hidden />
                  Empezar prueba gratis
                  <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
                </motion.a>

                <motion.a
                  href="https://wa.me/573222393582"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  <MessageCircle className="size-4 text-emerald-400" strokeWidth={2.2} aria-hidden />
                  Tengo preguntas
                </motion.a>

                <p className="text-center text-xs text-slate-500">
                  Sin tarjeta de crédito requerida
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
