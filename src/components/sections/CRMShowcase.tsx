"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Search,
  Users,
  Wallet,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { label: "Ejemplo: ventas hoy", value: "$2.350.000", trend: "+18.4%" },
  { label: "Ejemplo: pedidos activos", value: "27", trend: "+6" },
  { label: "Ejemplo: clientes nuevos", value: "12", trend: "+3" },
];

const orders = [
  {
    name: "María Camila",
    item: "Combo Pollo BBQ",
    status: "Pagado",
    amount: "$45.000",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Andrés Felipe",
    item: "AirPods Pro",
    status: "Cobrando",
    amount: "$850.000",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Luisa Rendón",
    item: "Pizza Familiar + 2 jugos",
    status: "Pagado",
    amount: "$78.000",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Carlos Mejía",
    item: "Plan mensual barbería",
    status: "Pagado",
    amount: "$120.000",
    color: "from-emerald-500 to-emerald-600",
  },
];

const chartBars = [38, 52, 44, 68, 60, 82, 95];

export function CRMShowcase() {
  return (
    <section
      id="crm"
      className="relative overflow-hidden bg-brand-dark py-24 lg:py-32"
    >
      {/* Background fx */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute -left-40 top-0 size-[480px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-[520px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            <BarChart3 className="size-3.5" aria-hidden />
            CRM en tiempo real
          </span>
          <h2 className="mt-5 font-grotesk text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            CRM en tiempo real:{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              tu negocio bajo control total.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Mientras BLEXI chatea, tú ves el dinero entrar desde cualquier
            dispositivo.
          </p>
        </Reveal>

        {/* Dashboard mockup */}
        <Reveal delay={0.15} y={32} className="relative mx-auto mt-16 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 blur-2xl"
            aria-hidden
          />

          <div className="overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-1.5 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <div className="ml-4 hidden flex-1 items-center justify-center sm:flex">
                <div className="flex w-72 items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  app.blexi.co/dashboard
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Bell className="size-4 text-slate-400" />
              </div>
            </div>

            {/* Dashboard inner */}
            <div className="grid gap-4 rounded-[1.5rem] bg-slate-950/60 p-4 sm:p-6 lg:grid-cols-[1fr_1.4fr]">
              {/* Sidebar / KPIs */}
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-grotesk text-lg font-bold text-white">
                      Dashboard
                    </p>
                    <p className="text-xs text-slate-400">
                      Hoy · martes, 5 may
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-2.5 py-1.5 text-xs text-slate-300">
                    <Search className="size-3.5" />
                    Buscar…
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4"
                    >
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        {s.label}
                      </p>
                      <div className="mt-2 flex items-end justify-between gap-2">
                        <span className="font-grotesk text-2xl font-extrabold text-white">
                          {s.value}
                        </span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                          <ArrowUpRight className="size-3" />
                          {s.trend}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        Ingresos · 7 días
                      </p>
                      <p className="font-grotesk text-xl font-bold text-white">
                        $14.820.000
                      </p>
                    </div>
                    <Wallet className="size-4 text-cyan-400" />
                  </div>
                  <div className="mt-4 flex items-end gap-1.5">
                    {chartBars.map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.06,
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ height: `${h}%`, originY: 1 }}
                        className={
                          "flex-1 rounded-md " +
                          (i === chartBars.length - 1
                            ? "bg-gradient-to-t from-cyan-500 to-purple-500"
                            : "bg-slate-700")
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-500">
                    {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: orders + customers */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-grotesk text-base font-bold text-white">
                        Pedidos en vivo
                      </p>
                      <p className="text-xs text-slate-400">
                        Atendidos por BLEXI · últimos 30 min
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-300">
                      <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />
                      EN VIVO
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {orders.map((o, i) => (
                      <motion.li
                        key={o.name}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
                        className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-3"
                      >
                        <span
                          className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr text-xs font-bold text-white ${o.color}`}
                        >
                          {o.name
                            .split(" ")
                            .map((p) => p[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white">
                            {o.name}
                          </p>
                          <p className="truncate text-xs text-slate-400">
                            {o.item}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-grotesk text-sm font-bold text-white">
                            {o.amount}
                          </p>
                          <p
                            className={
                              o.status === "Pagado"
                                ? "text-[10px] font-semibold text-emerald-400"
                                : "text-[10px] font-semibold text-amber-300"
                            }
                          >
                            {o.status}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-grotesk text-base font-bold text-white">
                      Clientes frecuentes
                    </p>
                    <Users className="size-4 text-purple-400" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {[12, 33, 47, 68, 5].map((id) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={id}
                          src={`https://i.pravatar.cc/64?img=${id}`}
                          alt=""
                          className="size-9 rounded-full border-2 border-slate-900 object-cover"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300">
                      <span className="font-semibold text-white">+128</span>{" "}
                      clientes recurrentes este mes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          <motion.div
            initial={{ opacity: 0, x: -16, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-4 bottom-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/95 p-3 pr-5 shadow-2xl shadow-cyan-500/20 backdrop-blur-md md:flex"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white">
              <Wallet className="size-5" strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-500">
                Pago recibido
              </p>
              <p className="font-grotesk text-sm font-bold text-slate-900">
                +$120.000 · Carlos M.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
