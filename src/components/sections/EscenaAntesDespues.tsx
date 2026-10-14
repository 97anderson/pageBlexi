"use client";

import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { CheckCheck, Moon, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * La historia del «Antes vs. Después» en cuatro actos que se repiten:
 * el dueño ahogado en mensajes, llega Blexi y responde, las ventas suben solas
 * y el dueño se va a dormir. Todo es ilustración: nada de caras reales ni de
 * cifras de un cliente.
 */

type Acto = "estres" | "blexi" | "ventas" | "noche";

const ACTOS: { id: Acto; ms: number; titulo: string }[] = [
  { id: "estres", ms: 4200, titulo: "11:48 p. m. Los mensajes no paran y no alcanzas a contestar." },
  { id: "blexi", ms: 4200, titulo: "Llega BLEXI: responde cada chat y deja el pedido en tu CRM." },
  { id: "ventas", ms: 3600, titulo: "Las ventas se suman solas, sin que toques el celular." },
  { id: "noche", ms: 4200, titulo: "Tú te vas a dormir. BLEXI sigue vendiendo." },
];

const CHATS = [
  { nombre: "Laura", texto: "¿Tienen domicilio hoy?", pedido: "$32.000" },
  { nombre: "Andrés", texto: "🎤 Nota de voz (0:12)", pedido: "$54.000" },
  { nombre: "Camila", texto: "¿Precio del combo familiar?", pedido: "$89.000" },
  { nombre: "Julián", texto: "Hola?? sigo esperando", pedido: "$27.000" },
  { nombre: "Valentina", texto: "¿Aceptan Nequi?", pedido: "$46.000" },
];

const VENTA_FINAL = 1_240_000;
const pesos = (n: number) => `$${Math.round(n).toLocaleString("es-CO")}`;

const FONDO: Record<Acto, string> = {
  estres: "from-rose-100 via-red-50 to-orange-50",
  blexi: "from-cyan-50 via-white to-purple-50",
  ventas: "from-emerald-50 via-cyan-50 to-white",
  noche: "from-slate-900 via-indigo-950 to-slate-900",
};

/** El dueño, en plano. Cambia de cara según el acto. */
function Personaje({ acto }: { acto: Acto }) {
  const estresado = acto === "estres";
  const dormido = acto === "noche";
  const sinLeer = estresado ? "99+" : null;

  return (
    <svg viewBox="0 0 220 230" className="h-full w-full" role="img" aria-label="Dueño de negocio">
      {/* Escritorio */}
      <rect x="10" y="196" width="200" height="12" rx="6" fill={dormido ? "#334155" : "#CBD5E1"} />

      <motion.g
        animate={
          dormido
            ? { rotate: -10, y: 8 }
            : estresado
              ? { rotate: [0, -2, 2, -2, 0], y: 0 }
              : { rotate: 0, y: 0 }
        }
        transition={estresado ? { duration: 0.5, repeat: Infinity, repeatDelay: 0.6 } : { duration: 0.8 }}
        style={{ originX: "110px", originY: "190px" }}
      >
        {/* Cuerpo */}
        <rect x="62" y="128" width="96" height="72" rx="34" fill="#7C3AED" />
        <rect x="98" y="112" width="24" height="22" rx="8" fill="#C98B62" />
        {/* Cabeza */}
        <circle cx="110" cy="84" r="40" fill="#D9A27A" />
        {/* Pelo */}
        <path d="M70 82 C68 40 152 38 150 82 C140 60 84 58 70 82 Z" fill="#2B2238" />

        {/* Cara */}
        {dormido ? (
          <>
            <path d="M88 88 q8 6 16 0" stroke="#2B2238" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M116 88 q8 6 16 0" stroke="#2B2238" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M102 106 q8 5 16 0" stroke="#7A3B2E" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : estresado ? (
          <>
            <path d="M86 72 L102 78" stroke="#2B2238" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M134 72 L118 78" stroke="#2B2238" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="96" cy="88" r="4" fill="#2B2238" />
            <circle cx="124" cy="88" r="4" fill="#2B2238" />
            <path d="M96 110 q5 -6 10 0 q5 6 10 0 q5 -6 8 0" stroke="#7A3B2E" strokeWidth="3" fill="none" strokeLinecap="round" />
            <motion.path
              d="M152 66 q6 10 0 14 q-6 -4 0 -14 Z"
              fill="#38BDF8"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </>
        ) : (
          <>
            <circle cx="96" cy="88" r="4" fill="#2B2238" />
            <circle cx="124" cy="88" r="4" fill="#2B2238" />
            <path d="M96 104 Q110 118 124 104" stroke="#7A3B2E" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </>
        )}

        {/* Celular en la mano (dormido: queda sobre el escritorio) */}
        {!dormido && (
          <g>
            <rect x="140" y="138" width="34" height="58" rx="7" fill="#0F172A" />
            <rect x="144" y="144" width="26" height="44" rx="4" fill={estresado ? "#FEE2E2" : "#CFFAFE"} />
            <circle cx="146" cy="176" r="9" fill="#D9A27A" />
          </g>
        )}
        {sinLeer && (
          <motion.g animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ originX: "172px", originY: "136px" }}>
            <circle cx="172" cy="136" r="14" fill="#EF4444" />
            <text x="172" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
              {sinLeer}
            </text>
          </motion.g>
        )}
      </motion.g>

      {dormido && (
        <>
          <rect x="150" y="186" width="40" height="10" rx="3" fill="#0F172A" />
          {["z", "z", "Z"].map((z, i) => (
            <motion.text
              key={i}
              x={150 + i * 14}
              y={50 - i * 12}
              fontSize={14 + i * 4}
              fontWeight="700"
              fill="#A5B4FC"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 0], y: [10, -6, -16] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
            >
              {z}
            </motion.text>
          ))}
        </>
      )}
    </svg>
  );
}

/** Lista de chats: sin leer en el acto 1, respondidos uno a uno en el 2. */
function Chats({ respondidos }: { respondidos: boolean }) {
  return (
    <ul className="space-y-2">
      {CHATS.map((c, i) => (
        <motion.li
          key={c.nombre}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.25 }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 shadow-sm"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
            {c.nombre[0]}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800">{c.nombre}</p>
            <p className="truncate text-[11px] text-slate-500">{c.texto}</p>
          </div>
          {respondidos ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.45 }}
              className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"
            >
              <CheckCheck className="size-3" /> BLEXI
            </motion.span>
          ) : (
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-bold text-white">
              {i + 2}
            </span>
          )}
        </motion.li>
      ))}
    </ul>
  );
}

/** Tablero del CRM: los pedidos caen mientras BLEXI responde. */
function Tablero() {
  return (
    <div className="mt-3 rounded-2xl border border-cyan-100 bg-white/90 p-3 shadow-sm">
      <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-700">Tu CRM · pedidos de hoy</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {CHATS.map((c, i) => (
          <motion.span
            key={c.nombre}
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.45, type: "spring", stiffness: 300, damping: 22 }}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-2 py-1 text-[10px] font-semibold text-white"
          >
            {c.nombre} · {c.pedido}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function Ventas({ quieto }: { quieto: boolean }) {
  const [valor, setValor] = useState(quieto ? VENTA_FINAL : 0);
  useEffect(() => {
    if (quieto) return;
    const control = animate(0, VENTA_FINAL, {
      duration: 2.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setValor,
    });
    return () => control.stop();
  }, [quieto]);

  const barras = [18, 30, 26, 44, 52, 70, 92];
  return (
    <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
      <p className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
        <TrendingUp className="size-4" /> Ventas de la noche
      </p>
      <p className="mt-2 font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        {pesos(valor)}
      </p>
      <div className="mt-4 flex h-24 items-end gap-2">
        {barras.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: quieto ? `${h}%` : "4%" }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
            className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-purple-500"
          />
        ))}
      </div>
    </div>
  );
}

function Noche() {
  const ventas = ["+$54.000", "+$32.000", "+$89.000"];
  return (
    <div className="relative flex h-full flex-col items-start justify-center gap-3">
      <Moon className="absolute right-2 top-0 size-10 text-amber-200" aria-hidden />
      {ventas.map((v, i) => (
        <motion.div
          key={v}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.9 }}
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400 text-slate-900">
            <CheckCheck className="size-3.5" />
          </span>
          Venta nueva {v}
        </motion.div>
      ))}
    </div>
  );
}

export function EscenaAntesDespues() {
  const quieto = useReducedMotion() ?? false;
  const [i, setI] = useState(quieto ? 2 : 0);

  useEffect(() => {
    if (quieto) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % ACTOS.length), ACTOS[i].ms);
    return () => window.clearTimeout(t);
  }, [i, quieto]);

  const acto = ACTOS[i].id;
  const noche = acto === "noche";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border bg-gradient-to-br shadow-xl transition-colors duration-700 ${FONDO[acto]} ${
        noche ? "border-slate-700 shadow-slate-900/30" : "border-slate-200/70 shadow-slate-200/60"
      }`}
    >
      {noche && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[...Array(14)].map((_, k) => (
            <span
              key={k}
              className="absolute size-1 animate-pulse rounded-full bg-white/70"
              style={{ left: `${(k * 37) % 100}%`, top: `${(k * 23) % 60}%`, animationDelay: `${k * 0.3}s` }}
            />
          ))}
        </div>
      )}

      <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10 md:p-10">
        <div className="mx-auto aspect-square w-full max-w-[260px] md:max-w-[320px]">
          <Personaje acto={acto} />
        </div>

        <div className="min-h-[440px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={acto}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {acto === "estres" && <Chats respondidos={false} />}
              {acto === "blexi" && (
                <>
                  <Chats respondidos />
                  <Tablero />
                </>
              )}
              {acto === "ventas" && <Ventas quieto={quieto} />}
              {acto === "noche" && <Noche />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-3 border-t border-black/5 px-6 pb-6 pt-4 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={acto}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`font-grotesk text-lg font-bold sm:text-xl ${noche ? "text-white" : "text-brand-textDark"}`}
          >
            {ACTOS[i].titulo}
          </motion.p>
        </AnimatePresence>
        <div className="flex gap-2" role="tablist" aria-label="Partes de la historia">
          {ACTOS.map((a, k) => (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={k === i}
              aria-label={a.titulo}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-gradient-to-r from-cyan-500 to-purple-500" : noche ? "w-2 bg-white/30" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
