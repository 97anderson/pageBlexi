"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  HeartCrack,
  MessagesSquare,
  Mic2,
  Moon,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

const painPoints = [
  {
    icon: MessagesSquare,
    text: "Mensajes acumulados sin responder",
  },
  {
    icon: Mic2,
    text: "Audios de voz ignorados — el cliente se va",
  },
  {
    icon: Moon,
    text: "Clientes escribiendo a las 11pm sin respuesta",
  },
  {
    icon: HeartCrack,
    text: "Pedidos a medias que nunca se cierran",
  },
];

const winPoints = [
  {
    icon: Sparkles,
    text: "Atención inmediata 24 / 7",
  },
  {
    icon: Mic2,
    text: "Entiende y responde notas de voz",
  },
  {
    icon: ShieldCheck,
    text: "Cero clientes ignorados, cero estrés",
  },
  {
    icon: RefreshCw,
    text: "Recupera carritos antes de que se pierdan",
  },
];

export function PainVsSolution() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Antes vs. Después
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            El estrés de vender por chat{" "}
            <span className="text-brand-textMuted">vs.</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              la paz de tener a BLEXI
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Dos formas de vivir tu negocio. Tú eliges cuál mereces.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Card: Problem */}
          <Reveal delay={0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative overflow-hidden rounded-3xl border border-red-100 bg-red-50 p-8 sm:p-10"
            >
              <div className="absolute -right-20 -top-20 size-72 rounded-full bg-red-200/60 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3 py-1 text-xs font-semibold text-red-600 backdrop-blur-sm">
                  <AlertTriangle className="size-3.5" aria-hidden />
                  Sin BLEXI
                </span>
                <h3 className="mt-5 font-grotesk text-2xl font-extrabold leading-tight text-brand-textDark sm:text-3xl">
                  Clientes esperando, ventas perdidas en la madrugada, estrés
                  sin fin.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Pasas el día con el celular en la mano. La competencia
                  responde antes que tú y se queda con la venta.
                </p>

                <ul className="mt-8 space-y-3">
                  {painPoints.map((p) => (
                    <li
                      key={p.text}
                      className="flex items-center gap-3 rounded-2xl border border-red-100 bg-white/70 px-4 py-3 backdrop-blur-sm"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
                        <p.icon className="size-4" strokeWidth={2.2} />
                      </span>
                      <span className="text-sm font-medium text-slate-800">
                        {p.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-red-600">
                  <Clock className="size-4" aria-hidden />
                  Tiempo perdido: 4–6 h/día · Ventas sin recuperar: hasta el 30%
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Card: Solution */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-cyan-50 p-8 sm:p-10"
            >
              <div className="absolute -right-24 -top-20 size-72 rounded-full bg-cyan-200/60 blur-3xl" />
              <div className="absolute -left-20 bottom-0 size-64 rounded-full bg-purple-200/40 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-sm">
                  <Sparkles className="size-3.5" aria-hidden />
                  Con BLEXI
                </span>
                <h3 className="mt-5 font-grotesk text-2xl font-extrabold leading-tight text-brand-textDark sm:text-3xl">
                  Atención 24 / 7, cierre automatizado y tranquilidad completa.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  La IA que te libera. BLEXI atiende, vende y registra todo en
                  tu CRM mientras tú haces lo importante.
                </p>

                <ul className="mt-8 space-y-3">
                  {winPoints.map((p) => (
                    <li
                      key={p.text}
                      className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white/80 px-4 py-3 backdrop-blur-sm"
                    >
                      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md shadow-cyan-500/30">
                        <p.icon className="size-4" strokeWidth={2.2} />
                      </span>
                      <span className="text-sm font-medium text-slate-800">
                        {p.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-cyan-700">
                  <TrendingUp className="size-4" aria-hidden />
                  Aumenta tus ventas en automático, sin descuidar a ningún lead
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
