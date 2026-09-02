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
  Store,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Un plan tal como lo publica la base, a través de /api/planes. */
type PlanDeLaBase = {
  slug: string;
  monthlyPriceCop: number;
  annualPriceCop: number;
  annualSavingsCop: number;
  annualDiscountPct: number;
};

type Ciclo = "mensual" | "anual";

type Plan = {
  name: string;
  tagline: string;
  /**
   * Ya no se enseña: el bloque de precio se rellena con lo que diga la base.
   * Queda como identidad de la tarjeta. Si la base no responde, la tarjeta sale
   * sin cifra — un número que no se puede confirmar es peor que ninguno, porque
   * quien llega al registro se encuentra otro.
   */
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
      "Punto de venta para el mostrador",
            "Domicilios con hasta 3 domiciliarios",
      "Cobros desde la conversación",
      "CRM de pedidos, clientes y conversaciones",
      "Hasta 3 usuarios en el panel",
            "Configuración inicial incluida",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Oro",
    tagline: "La opción inteligente",
    price: "$990.000",
    conversations: "1.000 conversaciones / mes",
    description:
      "Más volumen, memoria de clientes, analíticas y notas de voz. El favorito de quienes quieren crecer sin contratar más.",
    savingsBadge: "Ahorra +$1.1M vs. asesor full-time",
    cta: "Quiero el plan Oro",
    ctaHref: "https://wa.me/15055787905",
    highlighted: true,
    badge: "Más popular",
    features: [
      "1.000 conversaciones al mes",
      "1 línea de WhatsApp activa",
      "Catálogo hasta 500 productos o servicios",
      "Pedidos, citas y pagos online integrados",
      "Domicilios con hasta 10 domiciliarios",
      "Notas de voz (500/mes)",
      "Búsqueda por foto (500/mes)",
      "Hasta 10 usuarios en el panel",
      "CRM con seguimiento en tiempo real",
            "Panel de analíticas y tasa de conversión",
            "Optimización mensual incluida",
      "Soporte prioritario — respuesta en 1 día hábil",
    ],
  },
  {
    name: "Platino",
    tagline: "Para escalar",
    price: "$1.990.000",
    conversations: "2.200 conversaciones / mes",
    description:
      "Alto volumen, marketing sobre tu base de clientes y el conocimiento del agente en tus manos. Para negocios que ya crecieron.",
    savingsBadge: "10× la capacidad al costo de 1 empleado",
    cta: "Escalar con Platino",
    ctaHref: "https://wa.me/573222393582",
    features: [
      "2.200 conversaciones al mes",
      "Todo lo del plan Oro incluido",
      "Catálogo hasta 2.000 productos o servicios",
      "Notas de voz: 2.000 al mes",
      "Domiciliarios y usuarios del panel ilimitados",
      "Segmentos de clientes y campañas por WhatsApp",
      "Insights sobre tus ventas",
      "Entrena al agente con tu información",
      "Todos los medios de pago",
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
        { emoji: "💐", label: "Florería" },
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
        { emoji: "🍔", label: "Restaurantes de muy alto volumen" },
        { emoji: "💊", label: "Farmacias y droguerías grandes" },
        { emoji: "🛋️", label: "Muebles, decoración y diseño de interiores" },
        { emoji: "🚗", label: "Concesionarios y grandes talleres" },
        { emoji: "🏥", label: "Centros médicos con agenda intensa" },
        { emoji: "🌺", label: "Distribuidoras de perfumes y cosméticos" },
        { emoji: "👗", label: "Tiendas de moda con catálogo amplio" },
        { emoji: "🎨", label: "Galerías y tiendas de arte" },
        { emoji: "🏋️", label: "Gimnasios y centros de bienestar" },
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

  // All plan cards share a white background. Oro (highlighted) gets a
  // cyan accent; Plata/Platino get a neutral slate style.
  const toggleBg = highlighted
    ? "border-cyan-300 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100";

  const panelBorder = highlighted ? "border-cyan-100 bg-cyan-50/40" : "border-slate-100 bg-slate-50";
  const sectionTitle = highlighted ? "text-cyan-600/70" : "text-slate-400";
  const itemColor    = "text-slate-700";
  const alsoColor    = "text-slate-500";
  const soonColor    = "text-slate-400 opacity-60";
  const footerColor  = highlighted ? "border-cyan-100 text-slate-500" : "border-slate-200 text-slate-500";

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
            <div className={`mt-2 rounded-xl border p-4 text-xs ${panelBorder}`}>
              {/* Ideal para */}
              <p className={`mb-2 font-bold uppercase tracking-wider ${sectionTitle}`}>
                ✅ Ideal para
              </p>
              <ul className="mb-3 space-y-1.5">
                {compat.ideal.items.map((b) => (
                  <li key={b.label} className={`flex items-center gap-2 ${itemColor}`}>
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
                      <li key={b.label} className={`flex items-center gap-2 ${alsoColor}`}>
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
                      <li key={b.label} className={`flex items-center gap-2 ${soonColor}`}>
                        <span className="shrink-0 text-sm">{b.emoji}</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p className={`mt-3 border-t pt-3 text-[10px] leading-relaxed ${footerColor}`}>
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
    icon: Store,
    label: "Punto de venta incluido",
    desc: "El mostrador y el chat, un solo inventario",
  },
  {
    icon: Shield,
    label: "Sin permanencia",
    desc: "Cancelas cuando quieras y corre hasta el fin del mes pagado",
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
    sub: "No pide días libres ni se incapacita",
  },
  { label: "Aprende de cada venta", sub: "Mejora solo con el tiempo" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

/** El nombre de la tarjeta contra el identificador del plan en la base. */
const SLUG_POR_NOMBRE: Record<string, string> = {
  Plata: "plata",
  Oro: "oro",
  Platino: "platino",
};

const pesos = (cop: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(cop);

export function Pricing() {
  const [ciclo, setCiclo] = useState<Ciclo>("mensual");
  const [deLaBase, setDeLaBase] = useState<Record<string, PlanDeLaBase>>({});

  useEffect(() => {
    // Los precios salen de la base, no de esta página: el que se anuncia y el
    // que se cobra tienen que venir del mismo sitio.
    let vigente = true;
    fetch("/api/planes")
      .then((r) => r.json())
      .then((datos: { planes?: PlanDeLaBase[] }) => {
        if (!vigente) return;
        const porSlug: Record<string, PlanDeLaBase> = {};
        for (const p of datos.planes ?? []) porSlug[p.slug] = p;
        setDeLaBase(porSlug);
      })
      .catch(() => undefined);
    return () => {
      vigente = false;
    };
  }, []);

  const descuento = Math.max(
    0,
    // Sólo cuentan los planes que traen precio anual: con un API una versión
    // por detrás, el interruptor aparecería sin nada que conmutar.
    ...Object.values(deLaBase)
      .filter((p) => Number.isFinite(p.annualPriceCop))
      .map((p) => p.annualDiscountPct ?? 0),
  );

  /** El plan más barato, para el «desde». Nulo mientras no haya datos. */
  const precios = Object.values(deLaBase).map((p) => p.monthlyPriceCop);
  const desdeCop = precios.length ? Math.min(...precios) : null;

  return (
    <section id="precios" className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
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
            con prestaciones. Blexi trabaja 24/7{" "}
            {desdeCop !== null ? (
              <>
                desde{" "}
                <strong className="font-semibold text-brand-textDark">
                  {pesos(desdeCop)}/mes
                </strong>
              </>
            ) : (
              "por una fracción de eso"
            )}
            .
          </p>

          {/* Mes a mes o un año. El ahorro sale de la base: si el descuento
              cambia en la consola, esta página ya lo dice sin que nadie la
              toque. Sin datos no se pinta — un interruptor que no cambia
              ninguna cifra sólo confunde. */}
          {descuento > 0 && (
            <div
              className="mx-auto mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1"
              role="group"
              aria-label="Cada cuánto pagas"
            >
              {(["mensual", "anual"] as const).map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => setCiclo(opcion)}
                  aria-pressed={ciclo === opcion}
                  className={
                    ciclo === opcion
                      ? "inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                      : "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                  }
                >
                  {opcion === "mensual" ? "Mes a mes" : "Un año"}
                  {opcion === "anual" && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                      −{descuento}%
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
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
                    {(() => {
                      const dato = deLaBase[SLUG_POR_NOMBRE[plan.name] ?? ""];
                      // Sin precio válido no se pinta cifra. El API puede ir una
                      // versión por detrás y no traer todavía el precio anual:
                      // pintar «NaN» o «$0» sería peor que decir que se consulte.
                      if (!dato || !Number.isFinite(dato.monthlyPriceCop)) {
                        return (
                          <p className="text-sm font-medium text-brand-textMuted">
                            Consulta el precio actual — te lo confirmamos al registrarte.
                          </p>
                        );
                      }
                      const anual =
                        ciclo === "anual" && Number.isFinite(dato.annualPriceCop);
                      return (
                        <>
                          <div className="flex items-end gap-1.5">
                            <span className="font-grotesk text-[2.75rem] font-extrabold leading-none tracking-tight text-brand-textDark">
                              {pesos(anual ? dato.annualPriceCop : dato.monthlyPriceCop)}
                            </span>
                            <span className="mb-1 text-sm font-medium text-brand-textMuted">
                              COP / {anual ? "año" : "mes"}
                            </span>
                          </div>
                          {anual && dato.annualSavingsCop > 0 && (
                            <p className="mt-1 text-xs font-semibold text-emerald-700">
                              Ahorras {pesos(dato.annualSavingsCop)} frente a doce meses
                            </p>
                          )}
                        </>
                      );
                    })()}
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
                      Alto volumen · A la medida
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                    ¿Tu operación se sale de Platino? Hablemos. Armamos el
                    alcance y el precio contigo, sin cuotas que te queden
                    cortas. Nos sentamos, miramos tus números y te decimos qué
                    podemos hacer hoy y qué no.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Conversaciones sin tope",
                      "Notas de voz sin tope",
                      "Catálogo, domiciliarios y usuarios sin tope",
                      "Alcance y precio acordados contigo",
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
                  Hablemos
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
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
