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
  premium: boolean; // true = solo Oro/Diamante  |  false = todos los planes
};

const features: Feature[] = [
  {
    icon: Mic2,
    headline: "Los audios no quedan sin responder",
    description:
      "En LATAM la mayoría habla por nota de voz. Blexi las transcribe, entiende el contexto y responde igual que si fuera texto. Ningún cliente sin atención.",
    badge: "Todos los planes",
    premium: false,
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
    badge: "Plan Oro y Diamante",
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

/** Tamaño y color de cada bloque del mosaico, en orden. */
const MOSAICO = [
  { span: "lg:col-span-2", fondo: "bg-slate-950", icono: "bg-[#00D8F0] text-slate-950", titulo: "text-white", texto: "text-slate-300", etiqueta: "text-[#00D8F0]" },
  { span: "", fondo: "bg-[#EADCFD]", icono: "bg-white text-[#9030F0]", titulo: "text-slate-950", texto: "text-slate-700", etiqueta: "text-[#7C22D6]" },
  { span: "", fondo: "bg-white border border-slate-200/80", icono: "bg-slate-950 text-white", titulo: "text-slate-950", texto: "text-slate-600", etiqueta: "text-slate-500" },
  { span: "lg:col-span-2", fondo: "bg-[#CFF6FB]", icono: "bg-white text-cyan-700", titulo: "text-slate-950", texto: "text-slate-700", etiqueta: "text-cyan-800" },
  { span: "", fondo: "bg-white border border-slate-200/80", icono: "bg-slate-950 text-white", titulo: "text-slate-950", texto: "text-slate-600", etiqueta: "text-slate-500" },
  { span: "lg:col-span-2", fondo: "bg-[#EADCFD]", icono: "bg-white text-[#9030F0]", titulo: "text-slate-950", texto: "text-slate-700", etiqueta: "text-[#7C22D6]" },
];

export function Features() {
  return (
    <section id="producto" className="relative overflow-hidden py-24 lg:py-32">

      <div className="container-page">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="etiqueta">
            Por qué Blexi
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Recupera ventas que{" "}
            <span className="acento">
              antes se perdían
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Blexi no solo responde — actúa, recuerda y recupera. Día y noche,
            sin que muevas un dedo.
          </p>
        </Reveal>

        {/* Mosaico: bloques de distinto tamaño y color, en vez de seis
            tarjetas iguales. */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {features.map((f, i) => {
            const t = MOSAICO[i % MOSAICO.length];
            return (
              <Reveal key={f.headline} delay={i * 0.06} className={t.span}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className={`relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-8 ${t.fondo}`}
                >
                  <span className={`flex size-11 items-center justify-center rounded-2xl ${t.icono}`}>
                    <f.icon className="size-5" strokeWidth={2.2} />
                  </span>
                  <h3 className={`mt-6 font-grotesk text-xl font-bold leading-snug sm:text-2xl ${t.titulo}`}>
                    {f.headline}
                  </h3>
                  <p className={`mt-3 max-w-md flex-1 text-sm leading-relaxed ${t.texto}`}>
                    {f.description}
                  </p>
                  <p className={`mt-6 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] ${t.etiqueta}`}>
                    {f.badge}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
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
