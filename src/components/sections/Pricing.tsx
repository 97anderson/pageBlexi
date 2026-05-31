"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Clock,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/ui/Reveal";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Plan = {
  name: string;
  tagline: string;
  price: string;
  conversations: string;
  description: string;
  savingsBadge: string;
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
};

type CompatGroup = {
  items: { emoji: string; label: string }[];
};

type PlanCompat = {
  ideal: CompatGroup;
  also: CompatGroup;
  soon?: CompatGroup;
};

// ---------------------------------------------------------------------------
// Plan data
// ---------------------------------------------------------------------------

const plans: Plan[] = [
  {
    name: "Plata",
    tagline: "Para empezar",
    price: "$490.000",
    conversations: "500 conversaciones / mes",
    description:
      "Tu primer asesor de IA en WhatsApp. Atiende, responde y cierra pedidos mientras descansas.",
    savingsBadge: "Menos que un asesor de medio tiempo",
    cta: "Empezar con Plata",
    ctaHref: "https://wa.me/573222393582",
    features: [
      "500 conversaciones al mes",
      "1 línea de WhatsApp activa",
      "Catálogo hasta 100 productos o servicios",
      "Pedidos y citas automáticas 24/7",
      "CRM básico con historial de pedidos",
      "Atención sin intervención humana",
      "Configuración inicial incluida",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Oro",
    tagline: "La opción inteligente",
    price: "$990.000",
    conversations: "1.500 conversaciones / mes",
    description:
      "Más volumen, memoria de clientes, analíticas y notas de voz. El favorito de quienes quieren crecer sin contratar más.",
    savingsBadge: "Ahorra +$1.1M vs. asesor full-time",
    cta: "Quiero el plan Oro",
    ctaHref: "https://wa.me/15055787905",
    highlighted: true,
    badge: "Más popular",
    features: [
      "1.500 conversaciones al mes",
      "1 línea de WhatsApp activa",
      "Catálogo ilimitado de productos y servicios",
      "Pedidos, citas y pagos online integrados",
      "Notas de voz — Blexi entiende audios reales (500/mes)",
      "CRM completo con seguimiento en tiempo real",
      "Memoria personalizada por cliente",
      "Panel de analíticas y tasa de conversión",
      "Lenguaje regional LATAM adaptado",
      "Optimización mensual del agente incluida",
      "Soporte prioritario — respuesta en 1 día hábil",
    ],
  },
  {
    name: "Platino",
    tagline: "Para escalar",
    price: "$1.990.000",
    conversations: "4.000 conversaciones / mes",
    description:
      "Múltiples sucursales, alto volumen, notas de voz ilimitadas e integración total. Para negocios que ya crecieron.",
    savingsBadge: "10× la capacidad al costo de 1 empleado",
    cta: "Escalar con Platino",
    ctaHref: "https://wa.me/573222393582",
    features: [
      "4.000 conversaciones al mes",
      "Hasta 3 líneas de WhatsApp",
      "Todo lo del plan Oro incluido",
      "Notas de voz — entiende audios reales (2.000/mes)",
      "Múltiples sucursales o tipos de negocio",
      "Integración de pagos (Nequi, PSE, links)",
      "Reportes semanales de conversión",
      "Onboarding personalizado con tu equipo",
      "Soporte dedicado — respuesta en 12 h",
    ],
  },
];

// ---------------------------------------------------------------------------
// Business type compatibility per plan
// ---------------------------------------------------------------------------

const planCompat: Record<string, PlanCompat> = {
  Plata: {
    ideal: {
      items: [
        { emoji: "🍔", label: "Restaurantes y comidas rápidas" },
        { emoji: "🥐", label: "Panaderías y cafeterías" },
        { emoji: "🎂", label: "Pastelerías" },
        { emoji: "💊", label: "Farmacias" },
        { emoji: "🔧", label: "Talleres mecánicos y motos" },
        { emoji: "🐾", label: "Veterinarias y tiendas de mascotas" },
        { emoji: "💇", label: "Salones de belleza y barberías" },
        { emoji: "🧹", label: "Servicios del hogar (limpieza, plomería)" },
        { emoji: "🩺", label: "Clínicas y consultorios pequeños" },
        { emoji: "📚", label: "Librerías y papelerías" },
      ],
    },
    also: {
      items: [
        { emoji: "👗", label: "Ropa y accesorios (catálogo básico)" },
        { emoji: "💐", label: "Florería (sin imágenes)" },
        { emoji: "🐶", label: "Grooming y spas para mascotas" },
      ],
    },
    soon: {
      items: [
        { emoji: "🌺", label: "Perfumerías y lociones — próximamente Plata" },
        { emoji: "💎", label: "Joyería — catálogo visual, requiere Oro" },
      ],
    },
  },
  Oro: {
    ideal: {
      items: [
        { emoji: "🌺", label: "Perfumerías y lociones" },
        { emoji: "💐", label: "Florería y arreglos florales" },
        { emoji: "👗", label: "Tiendas de ropa, calzado y accesorios" },
        { emoji: "💎", label: "Joyería y bisutería" },
        { emoji: "🎂", label: "Pastelerías y repostería artesanal" },
        { emoji: "📱", label: "Electrónica y tecnología" },
        { emoji: "🍔", label: "Restaurantes con alto volumen" },
        { emoji: "💇", label: "Franquicias de belleza" },
        { emoji: "🐾", label: "Clínicas veterinarias" },
        { emoji: "🩺", label: "Grupos médicos y laboratorios" },
      ],
    },
    also: {
      items: [
        { emoji: "🛋️", label: "Muebles y decoración (catálogo visual)" },
        { emoji: "🎨", label: "Artesanías y productos hechos a mano" },
        { emoji: "🧴", label: "Cosméticos y cuidado personal" },
      ],
    },
  },
  Platino: {
    ideal: {
      items: [
        { emoji: "🏪", label: "Cadenas y franquicias (multi-sucursal)" },
        { emoji: "🍔", label: "Cadenas de restaurantes" },
        { emoji: "💊", label: "Cadenas de farmacias" },
        { emoji: "🛋️", label: "Muebles, decoración y diseño de interiores" },
        { emoji: "🚗", label: "Concesionarios y grandes talleres" },
        { emoji: "🏥", label: "Grupos médicos o redes de clínicas" },
        { emoji: "🌺", label: "Distribuidoras de perfumes y cosméticos" },
        { emoji: "👗", label: "Multi-tiendas de moda" },
        { emoji: "🎨", label: "Galerías y tiendas de arte" },
        { emoji: "🏋️", label: "Cadenas de gimnasios o bienestar" },
      ],
    },
    also: {
      items: [
        { emoji: "📦", label: "E-commerce con catálogo +500 productos" },
        { emoji: "🏗️", label: "Constructoras o inmobiliarias (próx.)" },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Sub-component: business types expandable panel
// ---------------------------------------------------------------------------

function PlanBusinessTypes({
  planName,
  highlighted,
}: {
  planName: string;
  highlighted?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const compat = planCompat[planName];
  if (!compat) return null;

  const toggleBg = highlighted
    ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100";

  const sectionTitle = highlighted
    ? "text-white/60"
    : "text-slate-400";

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${toggleBg}`}
      >
        <span>¿Es para mi negocio?</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-3.5" strokeWidth={2.5} aria-hidden />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`mt-2 rounded-xl border p-4 text-xs ${
                highlighted
                  ? "border-white/15 bg-white/8"
                  : "border-slate-100 bg-slate-50"
              }`}
            >
              {/* Ideal para */}
              <p className={`mb-2 font-bold uppercase tracking-wider ${sectionTitle}`}>
                ✅ Ideal para
              </p>
              <ul className="mb-3 space-y-1.5">
                {compat.ideal.items.map((b) => (
                  <li
                    key={b.label}
                    className={`flex items-center gap-2 ${
                      highlighted ? "text-white/80" : "text-slate-700"
                    }`}
                  >
                    <span className="shrink-0 text-sm">{b.emoji}</span>
                    {b.label}
                  </li>
                ))}
              </ul>

              {/* Funciona también */}
              {compat.also.items.length > 0 && (
                <>
                  <p className={`mb-2 font-bold uppercase tracking-wider ${sectionTitle}`}>
                    ⚡ Funciona también
                  </p>
                  <ul className="mb-3 space-y-1.5">
                    {compat.also.items.map((b) => (
                      <li
                        key={b.label}
                        className={`flex items-center gap-2 ${
                          highlighted ? "text-white/70" : "text-slate-500"
                        }`}
                      >
                        <span className="shrink-0 text-sm">{b.emoji}</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Próximamente / no recomendado */}
              {compat.soon && compat.soon.items.length > 0 && (
                <>
                  <p className={`mb-2 font-bold uppercase tracking-wider ${sectionTitle}`}>
                    🔜 Mejor en plan superior
                  </p>
                  <ul className="space-y-1.5">
                    {compat.soon.items.map((b) => (
                      <li
                        key={b.label}
                        className={`flex items-center gap-2 opacity-60 ${
                          highlighted ? "text-white/60" : "text-slate-400"
                        }`}
                      >
                        <span className="shrink-0 text-sm">{b.emoji}</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p
                className={`mt-3 border-t pt-3 text-[10px] leading-relaxed opacity-70 ${
                  highlighted
                    ? "border-white/10 text-white"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                ¿No ves tu negocio? Escríbenos — si existe en LATAM, Blexi
                puede atenderlo.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Rest of section data
// ---------------------------------------------------------------------------

const allPlansInclude = [
  {
    icon: Clock,
    label: "Atención 24/7/365",
    desc: "Nunca deja un mensaje en visto",
  },
  {
    icon: Users,
    label: "50+ chats simultáneos",
    desc: "Sin importar el volumen",
  },
  {
    icon: Shield,
    label: "Sin contratos eternos",
    desc: "Cancela cuando quieras",
  },
];

const comparisonStats = [
  {
    label: "24/7 sin descanso",
    sub: "Fines de semana, festivos, madrugada",
  },
  { label: "50+ chats a la vez", sub: "Un humano solo atiende 1 a la vez" },
  {
    label: "Sin vacaciones ni licencias",
    sub: "Disponibilidad garantizada siempre",
  },
  { label: "Aprende de cada venta", sub: "Mejora solo con el tiempo" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function Pricing() {
  return (
    <section id="precios" className="relative bg-slate-50 py-24 lg:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 size-[700px] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="container-page">
        {/* ── Section header ── */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            Planes Pyme · Colombia · LATAM
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-textDark sm:text-5xl">
            Menos que pagar{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              un colaborador
            </span>
            .{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              El doble
            </span>{" "}
            de capacidad.
          </h2>
          <p className="mt-5 text-lg text-brand-textMuted">
            Un asesor WhatsApp en Colombia cuesta entre{" "}
            <strong className="font-semibold text-brand-textDark">
              $1.400.000 y $2.100.000 COP/mes
            </strong>{" "}
            con prestaciones. Blexi trabaja 24/7 desde{" "}
            <strong className="font-semibold text-brand-textDark">
              $490.000/mes
            </strong>
            .
          </p>
        </Reveal>

        {/* ── Value comparison bar ── */}
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
              {comparisonStats.map((item) => (
                <div key={item.label} className="px-5 py-4 text-center">
                  <p className="text-sm font-bold text-brand-textDark">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-brand-textMuted">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Plans grid ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: plan.highlighted ? -8 : -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={
                  plan.highlighted
                    ? "relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-brand-primary bg-white p-8 shadow-xl shadow-cyan-500/20 lg:scale-[1.05]"
                    : "relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                }
              >
                {/* Glows for highlighted card */}
                {plan.highlighted && (
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
                )}

                <div className="relative flex flex-1 flex-col">
                  {/* Plan name & badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-textMuted">
                        {plan.tagline}
                      </span>
                      <h3 className="mt-0.5 font-grotesk text-xl font-bold text-brand-textDark">
                        {plan.name}
                      </h3>
                    </div>
                    {plan.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-cyan-500/30">
                        <Star className="size-3" strokeWidth={2.5} aria-hidden />
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price block */}
                  <div className="mt-6">
                    <div className="flex items-end gap-1.5">
                      <span className="font-grotesk text-[2.75rem] font-extrabold leading-none tracking-tight text-brand-textDark">
                        {plan.price}
                      </span>
                      <span className="mb-1 text-sm font-medium text-brand-textMuted">
                        COP / mes
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs font-medium text-brand-textMuted">
                      {plan.conversations}
                    </p>
                    {/* Savings badge */}
                    <div
                      className={
                        plan.highlighted
                          ? "mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                          : "mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      }
                    >
                      <span aria-hidden>💰</span>
                      {plan.savingsBadge}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-brand-textMuted">
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      plan.highlighted
                        ? "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 text-sm font-semibold text-white shadow-md shadow-cyan-500/40 transition hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/50"
                        : "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-brand-textDark transition hover:border-slate-300 hover:bg-slate-50"
                    }
                  >
                    {plan.highlighted && (
                      <Sparkles className="size-4" aria-hidden />
                    )}
                    {plan.cta}
                    {plan.highlighted && (
                      <ArrowRight className="size-4" aria-hidden />
                    )}
                  </a>

                  {/* ── Business type compatibility toggle ── */}
                  <PlanBusinessTypes
                    planName={plan.name}
                    highlighted={plan.highlighted}
                  />

                  {/* Features */}
                  <ul className="mt-8 flex-1 space-y-3 border-t border-slate-100 pt-6">
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

        {/* ── Enterprise card ── */}
        <Reveal delay={0.3} className="mt-6">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Building2
                    className="size-6 text-white"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-grotesk text-xl font-bold text-white">
                      Enterprise
                    </h3>
                    <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-white/80">
                      Franquicias · Cadenas · Alto volumen
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                    Conversaciones ilimitadas, múltiples sucursales,
                    integraciones con tu ERP o POS, SLA garantizado &gt;99.5%
                    y un gestor de cuenta dedicado. Precio a la medida.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Conversaciones ilimitadas",
                      "Multi-sucursal",
                      "Integraciones a la medida",
                      "SLA 99.5%",
                      "Gestor dedicado",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        <Check
                          className="size-3 text-cyan-400"
                          strokeWidth={3}
                          aria-hidden
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href="https://wa.me/573222393582"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
                >
                  Cotizar ahora
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Included in all plans ── */}
        <Reveal delay={0.15} className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-brand-textMuted">
              Incluido en todos los planes
            </p>
            <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
              {allPlansInclude.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon className="size-4" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-textDark">
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs text-brand-textMuted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Trust footer ── */}
        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="text-sm text-brand-textMuted">
            Sin contratos eternos · Cancela cuando quieras · Pymes en toda
            Colombia y LATAM ·{" "}
            <a
              href="https://wa.me/573222393582"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-primary hover:underline"
            >
              ¿Necesitas algo a la medida? Hablemos
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
