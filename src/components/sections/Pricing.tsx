"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Plata",
    price: "$300.000",
    description: "Ideal para empezar con tu agente de IA atendiendo WhatsApp.",
    cta: "Probar Plata",
    features: [
      "1 línea de WhatsApp",
      "Hasta 500 conversaciones / mes",
      "CRM básico con pedidos",
      "Entrenamiento con tu menú o catálogo",
    ],
  },
  {
    name: "Oro",
    price: "$600.000",
    description:
      "Para Pymes que quieren escalar atención y seguimiento sin contratar más.",
    cta: "Probar Oro",
    highlighted: true,
    badge: "Más popular",
    features: [
      "Conversaciones ilimitadas",
      "Dashboard CRM completo en tiempo real",
      "Seguimiento de leads y pedidos",
      "Optimización de respuestas y catálogo",
    ],
  },
];

export function Pricing() {
  return (
    <section id="precios" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Planes Pyme · Colombia
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Planes diseñados para{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              crecer contigo
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Sin contratos eternos. Cambia de plan cuando quieras.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: plan.highlighted ? -6 : -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={
                  plan.highlighted
                    ? "relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-brand-primary bg-white p-8 shadow-xl shadow-cyan-500/20 lg:scale-[1.04]"
                    : "relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                }
              >
                {plan.highlighted ? (
                  <>
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-cyan-300/30 blur-3xl"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-purple-300/25 blur-3xl"
                      aria-hidden
                    />
                  </>
                ) : null}

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-grotesk text-xl font-bold text-brand-textDark">
                      {plan.name}
                    </h3>
                    {plan.badge ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-cyan-500/30">
                        <Star
                          className="size-3"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="font-grotesk text-5xl font-extrabold tracking-tight text-brand-textDark">
                      {plan.price}
                    </span>
                    <span className="mb-2 text-sm font-medium text-brand-textMuted">
                      COP / mes
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-textMuted">
                    {plan.description}
                  </p>

                  <a
                    href="https://wa.me/515055787905"
                    target="_blank"
                    rel="noreferrer"
                    className={
                      plan.highlighted
                        ? "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-md shadow-cyan-500/40 transition hover:bg-brand-primaryHover hover:shadow-lg hover:shadow-cyan-500/50"
                        : "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-brand-textDark transition hover:border-slate-300 hover:bg-slate-50"
                    }
                  >
                    {plan.highlighted ? (
                      <Sparkles className="size-4" aria-hidden />
                    ) : null}
                    {plan.cta}
                  </a>

                  <ul className="mt-8 space-y-3 border-t border-slate-100 pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={
                            plan.highlighted
                              ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 text-white"
                              : "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-brand-primary"
                          }
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 text-center">
          <p className="text-sm text-brand-textMuted">
            ¿Necesitas algo a la medida?{" "}
            <a
              href="https://wa.me/573222393582"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-primary hover:underline"
            >
              Hablemos
            </a>
            . Atendemos a Pymes en toda Colombia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
