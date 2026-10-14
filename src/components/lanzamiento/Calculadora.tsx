"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { BotonWhatsApp } from "@/components/lanzamiento/BotonWhatsApp";
import { pesos } from "@/lib/config";
import { track } from "@/lib/medicion";

/**
 * Calculadora de lo que se escapa. Es una ESTIMACIÓN con los números del
 * visitante y supuestos visibles y editables; no promete resultados.
 *
 * Modelo:
 * - Fuera de horario llega una parte de las conversaciones: horas sin atender
 *   / 24, ajustado por la «actividad nocturna» (de noche se escribe menos que
 *   de día). Con 10 horas y 0,75 da 31 %, lo mismo que se midió en una
 *   perfumería cliente.
 * - Ventas en juego = conversaciones sin respuesta × tasa de compra × ticket.
 * - Horas al mes = conversaciones del mes × minutos que tomas en responder.
 */

type Campo = {
  id: string;
  etiqueta: string;
  ayuda?: string;
  min: number;
  max: number;
  paso: number;
  sufijo?: string;
};

const entradas: Campo[] = [
  { id: "conversaciones", etiqueta: "Conversaciones nuevas al día", min: 1, max: 500, paso: 1 },
  { id: "ticket", etiqueta: "Ticket promedio de una venta", min: 1000, max: 5_000_000, paso: 1000, sufijo: "COP" },
  { id: "horas", etiqueta: "Horas al día que nadie contesta", ayuda: "Noche, cierre, domingo repartido", min: 0, max: 24, paso: 1, sufijo: "h" },
];

const supuestos: Campo[] = [
  { id: "actividad", etiqueta: "Actividad fuera de horario", ayuda: "1 = igual que de día; 0,75 = un 25 % menos", min: 0, max: 1, paso: 0.05 },
  { id: "compra", etiqueta: "De cada 100 conversaciones, cuántas compran", min: 0, max: 100, paso: 1, sufijo: "%" },
  { id: "minutos", etiqueta: "Minutos que tomas en atender una conversación", min: 0, max: 60, paso: 1, sufijo: "min" },
];

const INICIAL: Record<string, number> = {
  conversaciones: 30,
  ticket: 35_000,
  horas: 10,
  actividad: 0.75,
  compra: 10,
  minutos: 4,
};

function numeroSeguro(v: string, min: number, max: number): number {
  const n = Number(v.replace(",", "."));
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

const TODOS = [...entradas, ...supuestos];

export function Calculadora() {
  // Se guarda lo que se escribe (para poder borrar y volver a escribir) y se
  // calcula con el número válido más cercano.
  const [texto, setTexto] = useState<Record<string, string>>(() =>
    Object.fromEntries(Object.entries(INICIAL).map(([k, n]) => [k, String(n)])),
  );
  const v = useMemo(
    () =>
      Object.fromEntries(
        TODOS.map((c) => [c.id, texto[c.id] === "" ? INICIAL[c.id] : numeroSeguro(texto[c.id], c.min, c.max)]),
      ) as Record<string, number>,
    [texto],
  );
  const usada = useRef(false);

  const r = useMemo(() => {
    const mes = v.conversaciones * 30;
    const fraccion = Math.min(1, (v.horas / 24) * v.actividad);
    const sinRespuesta = Math.round(mes * fraccion);
    const ventas = sinRespuesta * (v.compra / 100) * v.ticket;
    const horasMes = Math.round((mes * v.minutos) / 60);
    return { mes, fraccion, sinRespuesta, ventas, horasMes };
  }, [v]);

  useEffect(() => {
    if (usada.current) return;
    const cambio = Object.keys(INICIAL).some((k) => v[k] !== INICIAL[k]);
    if (cambio) {
      usada.current = true;
      track("calculadora_uso");
    }
  }, [v]);

  const cambiar = (c: Campo) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setTexto((prev) => ({ ...prev, [c.id]: e.target.value }));

  const campo = (c: Campo, oscuro = false) => (
    <label key={c.id} htmlFor={`calc-${c.id}`} className="block">
      <span className={oscuro ? "block text-sm font-semibold text-blx-tinta" : "block font-display text-[15px] font-bold text-blx-tinta"}>
        {c.etiqueta}
      </span>
      {c.ayuda && <span className="block text-xs text-blx-apagado">{c.ayuda}</span>}
      <span className="mt-2 flex items-center rounded-xl border border-blx-linea bg-white focus-within:border-blx-azul focus-within:ring-2 focus-within:ring-blx-azul/30">
        <input
          id={`calc-${c.id}`}
          type="number"
          inputMode="decimal"
          min={c.min}
          max={c.max}
          step={c.paso}
          value={texto[c.id]}
          onChange={cambiar(c)}
          className="w-full min-w-0 rounded-xl bg-transparent px-4 py-3 font-grotesk text-lg font-bold tabular-nums text-blx-tinta outline-none"
        />
        {c.sufijo && <span className="pr-4 text-sm font-semibold text-blx-apagado">{c.sufijo}</span>}
      </span>
    </label>
  );

  const mensaje =
    `Hola, hice la cuenta en la página de Blexi: ${v.conversaciones} conversaciones al día, ` +
    `ticket de ${pesos(v.ticket)} y ${v.horas} horas sin atender. ` +
    `Me salen unas ${r.sinRespuesta} conversaciones al mes sin respuesta y ${pesos(r.ventas)} en ventas en juego. ` +
    `Quiero ver cómo lo atendería Blexi.`;

  return (
    <section id="calculadora" className="bg-blx-claro py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-violetaTexto">Haz la cuenta</p>
          <h2 className="mt-3 font-grotesk text-3xl font-bold leading-tight tracking-[-0.02em] text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            ¿Cuánto se te escapa cuando nadie contesta?
          </h2>
          <p className="mt-4 text-lg text-blx-apagado">Pon los números de tu negocio. Es una estimación, no una promesa.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0 rounded-2xl bg-white p-6 ring-1 ring-blx-linea sm:p-8">
            <div className="grid gap-5">{entradas.map((c) => campo(c))}</div>

            <details className="mt-6 rounded-xl bg-blx-claro p-4">
              <summary className="cursor-pointer text-sm font-bold text-blx-tinta">Supuestos (puedes cambiarlos)</summary>
              <div className="mt-4 grid gap-4">{supuestos.map((c) => campo(c, true))}</div>
            </details>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-2xl bg-blx-noche p-6 text-white ring-1 ring-blx-borde sm:p-8" aria-live="polite">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-blexi" aria-hidden />
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-blx-cian">Tu estimación al mes</p>

            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-[15px] text-blx-apagadoNoche">Conversaciones que llegan cuando nadie contesta</dt>
                <dd className="font-grotesk text-4xl font-bold tabular-nums sm:text-5xl">{r.sinRespuesta.toLocaleString("es-CO")}</dd>
                <dd className="text-sm text-blx-apagadoNoche">
                  {Math.round(r.fraccion * 100)} % de tus {r.mes.toLocaleString("es-CO")} conversaciones del mes
                </dd>
              </div>
              <div>
                <dt className="text-[15px] text-blx-apagadoNoche">Ventas en juego en esas conversaciones</dt>
                <dd className="bg-blexi bg-clip-text font-grotesk text-4xl font-bold tabular-nums text-transparent sm:text-5xl">{pesos(r.ventas)}</dd>
              </div>
              <div>
                <dt className="text-[15px] text-blx-apagadoNoche">Horas al mes respondiendo por WhatsApp</dt>
                <dd className="font-grotesk text-4xl font-bold tabular-nums sm:text-5xl">{r.horasMes.toLocaleString("es-CO")} h</dd>
              </div>
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-blx-apagadoNoche">
              Estimación propia de Blexi con tus números y los supuestos de la izquierda. No incluye las ventas que
              hoy sí cierras ni garantiza un resultado.
            </p>

            <BotonWhatsApp
              seccion="calculadora"
              mensaje={mensaje}
              className="mt-6 w-full"
              datos={{ ventas: Math.round(r.ventas) }}
            >
              Enviar mi cuenta por WhatsApp
            </BotonWhatsApp>
            <p className="mt-3 text-sm text-blx-apagadoNoche">Se abre WhatsApp con tus números en el mensaje.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
