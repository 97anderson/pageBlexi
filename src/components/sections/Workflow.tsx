"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CreditCard,
  HeartHandshake,
  ShoppingCart,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    icon: BookOpen,
    title: "Inteligencia",
    description:
      "Aprende tu negocio en segundos con tu menú, catálogo o PDF. Sin código.",
  },
  {
    n: "02",
    icon: HeartHandshake,
    title: "Asesoría",
    description:
      "Responde dudas complejas como si fueras tú: tono natural, info exacta.",
  },
  {
    n: "03",
    icon: ShoppingCart,
    title: "Ventas",
    description:
      "Toma el pedido y llena el carrito automáticamente, paso a paso.",
  },
  {
    n: "04",
    icon: CreditCard,
    title: "Pagos",
    description:
      "Genera el link de cobro, confirma la orden y la deja en tu CRM.",
  },
];

export function Workflow() {
  return (
    <section id="flujo" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Flujo end-to-end
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Desde el{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              &ldquo;Hola&rdquo;
            </span>{" "}
            hasta el{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              &ldquo;Pago recibido&rdquo;
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Una sola IA, todo el funnel. Sin integraciones complicadas, sin
            personal extra.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line on desktop */}
          <div
            className="pointer-events-none absolute left-8 right-8 top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-500/10"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-tr from-cyan-100/0 to-purple-100/0 blur-2xl transition-all group-hover:from-cyan-100/70 group-hover:to-purple-100/60"
                    aria-hidden
                  />
                  <div className="relative flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-50 text-brand-primary ring-1 ring-cyan-100 transition-all group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white group-hover:ring-transparent">
                        <s.icon className="size-5" strokeWidth={2.2} />
                      </span>
                      <span className="font-grotesk text-xs font-bold tracking-wider text-slate-400">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-6 font-grotesk text-xl font-bold text-brand-textDark">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">
                      {s.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
