"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  CheckCheck,
  CreditCard,
  MoreVertical,
  Paperclip,
  Phone,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import blexiLogo from "@/app/img/blexi_logo.png";

type Message = {
  id: string;
  sender: "customer" | "blexi" | "typing";
  text: string;
  time?: string;
};

const PHASE_MS = 3200;

const customer1: Message = {
  id: "c1",
  sender: "customer",
  text: "Hola, ¿tienen disponibles los AirPods Pro?",
  time: "10:42",
};

const typing: Message = { id: "typing", sender: "typing", text: "" };

const blexi1: Message = {
  id: "b1",
  sender: "blexi",
  text: "¡Hola! Sí, te los tengo en $850.000 con envío gratis a Bogotá. ¿Te genero el link de pago? 💳",
  time: "10:42",
};

const customer2: Message = {
  id: "c2",
  sender: "customer",
  text: "¡Sí, gracias!",
  time: "10:43",
};

function TypingDots() {
  return (
    <div className="flex gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-2 rounded-full bg-slate-400"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.55,
            repeat: Infinity,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const bubbleSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
};

export function LiveChatSimulation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, PHASE_MS);
    return () => window.clearInterval(id);
  }, []);

  const messages: Message[] = (() => {
    switch (phase) {
      case 0:
        return [customer1];
      case 1:
        return [customer1, typing];
      case 2:
        return [customer1, blexi1];
      case 3:
        return [customer1, blexi1, customer2];
      default:
        return [customer1];
    }
  })();

  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* Floating side toast: AI thinking */}
      <AnimatePresence>
        {phase === 1 ? (
          <motion.div
            key="toast-ai"
            initial={{ opacity: 0, x: -12, y: -4 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-6 top-20 z-20 hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/85 px-3 py-2 text-xs font-medium text-slate-700 shadow-lg shadow-slate-200/60 backdrop-blur-md md:flex"
          >
            <Brain className="size-4 text-brand-aiMagic" aria-hidden />
            BLEXI está pensando…
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Floating side toast: sale closed */}
      <AnimatePresence>
        {phase === 3 ? (
          <motion.div
            key="toast-sale"
            initial={{ opacity: 0, x: 14, y: 6 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 14 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="absolute -right-8 bottom-28 z-20 hidden items-center gap-2 rounded-2xl border border-cyan-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-xl shadow-cyan-500/20 md:flex"
          >
            <span className="flex size-7 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white">
              <Zap className="size-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span className="leading-tight">
              Venta cerrada
              <span className="block text-[11px] font-medium text-slate-500">
                $850.000 COP
              </span>
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-300/50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
      >
        {/* Header (WhatsApp-like) */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-[#075E54] px-3 py-3 text-white">
          <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
            <ArrowLeft className="size-4" aria-hidden />
          </span>

          <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/10">
            <Image
              src={blexiLogo}
              alt="BLEXI"
              width={26}
              height={26}
              className="select-none"
            />
            <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">BLEXI</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/80">
              <span
                className="size-1.5 animate-pulse-soft rounded-full bg-[#25D366]"
                aria-hidden
              />
              en línea · responde en segundos
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="hidden items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 sm:inline-flex">
              <Sparkles className="size-3" aria-hidden />
              IA
            </span>
            <Phone className="size-4 text-white/90" aria-hidden />
            <Video className="size-4 text-white/90" aria-hidden />
            <MoreVertical className="size-4 text-white/90" aria-hidden />
          </div>
        </div>

        {/* Messages */}
        <div className="relative flex max-h-[360px] min-h-[300px] flex-col gap-2.5 overflow-y-auto bg-[#ECE5DD] px-3 py-4">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.04) 0 2px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.03) 0 2px, transparent 2px)",
              backgroundSize: "48px 48px",
            }}
          />
          <AnimatePresence initial={false} mode="popLayout">
            {messages.map((m, index) => (
              <motion.div
                key={m.id}
                layout
                custom={index}
                initial={{ opacity: 0, y: 14, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { ...bubbleSpring, delay: index * 0.08 },
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className={
                  m.sender === "blexi"
                    ? "relative mr-10 max-w-[88%] self-start rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-900 shadow-sm"
                    : m.sender === "customer"
                      ? "relative ml-10 max-w-[88%] self-end rounded-2xl rounded-tr-md bg-[#DCF8C6] px-3.5 py-2.5 text-sm leading-relaxed text-slate-900 shadow-sm"
                      : "relative mr-10 max-w-[80px] self-start rounded-2xl rounded-tl-md bg-white px-3.5 py-2 shadow-sm"
                }
              >
                {m.sender === "typing" ? (
                  <TypingDots />
                ) : (
                  <>
                    <p>{m.text}</p>
                    {m.time ? (
                      <p
                        className={
                          m.sender === "customer"
                            ? "mt-1 flex items-center justify-end gap-1 text-[10px] font-medium text-slate-600"
                            : "mt-1 text-[10px] font-medium text-slate-500"
                        }
                      >
                        {m.time}
                        {m.sender === "customer" ? (
                          <CheckCheck className="size-3 text-[#34B7F1]" aria-hidden />
                        ) : null}
                      </p>
                    ) : null}
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Inline payment card when phase = 3 */}
          <AnimatePresence>
            {phase === 3 ? (
              <motion.div
                key="payment-card"
                layout
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="mr-8 max-w-[88%] self-start overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-md"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  <CreditCard className="size-3.5 text-brand-primary" />
                  Link de pago
                </div>
                <div className="flex items-center justify-between gap-3 p-3">
                  <div>
                    <p className="text-xs text-slate-500">AirPods Pro · 1u</p>
                    <p className="font-grotesk text-base font-bold text-brand-textDark">
                      $850.000
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-primary px-3 py-1.5 text-xs font-semibold text-white">
                    Pagar
                  </span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Footer composer mock */}
        <div className="flex items-center gap-2 border-t border-black/5 bg-[#F0F0F0] px-3 py-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-black/5">
            <Paperclip className="size-4" aria-hidden />
          </span>
          <div className="flex flex-1 items-center rounded-full bg-white px-4 py-2.5 text-xs text-slate-400 shadow-sm ring-1 ring-black/5">
            Escribe un mensaje…
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-emerald-300/40">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M2 21l1.7-5A8.5 8.5 0 1 1 7 18.7L2 21Z" />
            </svg>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
