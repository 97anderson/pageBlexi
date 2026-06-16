"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  CreditCard,
  LayoutDashboard,
  Mic2,
  RefreshCw,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

type Feature = {
  icon: React.ElementType;
  headline: string;
  description: string;
  badge: string;
  premium: boolean; // true = solo Oro/Platino  |  false = todos los planes
};

const features: Feature[] = [
  {
    icon: Mic2,
    headline: "Los audios no quedan sin responder",
    description:
      "En LATAM la mayoría habla por nota de voz. Blexi las transcribe, entiende el contexto y responde igual que si fuera texto. Ningún cliente sin atención.",
    badge: "Plan Oro y Platino",
    premium: true,
  },
  {
    icon: RefreshCw,
    headline: "El cliente dudó. Blexi insiste.",
    description:
      "Si un pedido queda a medias, Blexi manda un recordatorio automático dentro de las 24 h. Venta recuperada sin que el dueño intervenga.",
    badge: "Todos los planes",
    premium: false,
  },
  {
    icon: Users,
    headline: "Recuerda a cada cliente",
    description:
      "Nombre, dirección y lo que siempre pide. Blexi construye el perfil de cada cliente con cada conversación — sin bases de datos manuales.",
    badge: "Todos los planes",
    premium: false,
  },
  {
    icon: CreditCard,
    headline: "El cliente paga sin salir de WhatsApp",
    description:
      "Genera link de pago, recibe el comprobante y confirma la orden automáticamente. Nequi, PSE o tarjeta. El pedido queda cerrado.",
    badge: "Plan Oro y Platino",
    premium: true,
  },
  {
    icon: LayoutDashboard,
    headline: "Tu negocio en la palma de la mano",
    description:
      "Pedidos, ingresos, clientes frecuentes y alertas de stock — todo en tiempo real desde el CRM. Sin planillas, sin llamadas, sin sorpresas.",
    badge: "Todos los planes",
    premium: false,
  },
  {
    icon: CalendarCheck,
    headline: "Citas sin llamadas, sin idas y vueltas",
    description:
      "Para salones, consultorios y talleres: Blexi verifica disponibilidad, confirma la cita y manda recordatorios automáticos.",
    badge: "Todos los planes",
    premium: false,
  },
];

export function Features() {
  return (
    <section id="producto" className="relative bg-slate-50/60 py-24 lg:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-0 top-1/4 size-[500px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="container-page">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Por qué Blexi
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Recupera ventas que{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              antes se perdían
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Blexi no solo responde — actúa, recuerda y recupera. Día y noche,
            sin que muevas un dedo.
          </p>
        </Reveal>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.headline} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-500/10"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-tr from-cyan-100/0 to-purple-100/0 blur-2xl transition-all duration-500 group-hover:from-cyan-100/60 group-hover:to-purple-100/50"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col">
                  {/* Icon */}
                  <div
                    className={
                      f.premium
                        ? "flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md shadow-cyan-500/30"
                        : "flex size-12 items-center justify-center rounded-2xl bg-cyan-50 text-brand-primary ring-1 ring-cyan-100 transition-all group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white group-hover:ring-transparent"
                    }
                  >
                    <f.icon className="size-5" strokeWidth={2.2} />
                  </div>

                  {/* Text */}
                  <h3 className="mt-5 font-grotesk text-lg font-bold leading-snug text-brand-textDark">
                    {f.headline}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-textMuted">
                    {f.description}
                  </p>

                  {/* Plan badge */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span
                      className={
                        f.premium
                          ? "inline-flex items-center gap-1.5 rounded-full border border-purple-100 bg-gradient-to-r from-cyan-50 to-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-700"
                          : "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                      }
                    >
                      {f.premium && (
                        <span
                          className="size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                          aria-hidden
                        />
                      )}
                      {f.badge}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-brand-textMuted">
            Cada plan incluye el CRM, la IA y el soporte.{" "}
            <a
              href="#precios"
              className="font-semibold text-brand-primary hover:underline"
            >
              Ver diferencias entre planes →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
