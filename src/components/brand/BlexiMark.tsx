"use client";

import { useId } from "react";

export type BlexiMarkState = "splash" | "loader" | "thinking" | "live" | "static";

interface Props {
  state?: BlexiMarkState;
  width?: number;
  height?: number;
  className?: string;
}

const PATH =
  "M24.5,12 C19,12 14.5,16.5 14.5,22 C14.5,27.5 19,32 24.5,32 C30,32 33,27 36,22 C39,17 42,12 47.5,12 C53,12 57.5,16.5 57.5,22 C57.5,27.5 53,32 47.5,32 C42,32 39,27 36,22 C33,17 30,12 24.5,12 Z";

const CSS = `
@media (prefers-reduced-motion: no-preference) {
  .bm-breathe { animation: bm-breathe 5s ease-in-out infinite; transform-origin: center; }
  .bm-glow    { animation: bm-pulse   5s ease-in-out infinite; }
  .bm-comet      { animation: bm-travel 3.2s linear infinite; }
  .bm-comet-fast { animation: bm-travel 1.6s linear infinite; }
  .bm-atom:hover .bm-comet      { animation-duration: 1.4s; }
  .bm-atom:hover .bm-glow       { opacity: .6 !important; }
  .bm-dot-bounce                 { animation: bm-bob 1.2s ease-in-out infinite; }
  .bm-dot-bounce:nth-child(2)   { animation-delay: .15s; }
  .bm-dot-bounce:nth-child(3)   { animation-delay: .30s; }
  .bm-live-dot { animation: bm-ping 1.6s ease-out infinite; }
}
@keyframes bm-breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.035)} }
@keyframes bm-pulse   { 0%,100%{opacity:.28} 50%{opacity:.55} }
@keyframes bm-travel  { to{stroke-dashoffset:-386} }
@keyframes bm-bob     { 0%,100%{transform:translateY(3px);opacity:.5} 50%{transform:translateY(-3px);opacity:1} }
@keyframes bm-ping    { 0%{box-shadow:0 0 0 0 rgba(0,216,240,.5)} 100%{box-shadow:0 0 0 10px rgba(0,216,240,0)} }
`;

let _cssInjected = false;
function injectCSS() {
  if (_cssInjected || typeof document === "undefined") return;
  _cssInjected = true;
  const el = document.createElement("style");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function BlexiMark({ state = "static", width, height, className }: Props) {
  injectCSS();
  const uid = useId().replace(/:/g, "");
  const gid = `${uid}-g`;
  const fid = `${uid}-f`;

  if (state === "thinking") {
    return (
      <div
        className={className}
        role="img"
        aria-label="Blexi está escribiendo…"
        style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="bm-dot-bounce"
            style={{
              width: 11, height: 11, borderRadius: "50%",
              background: "linear-gradient(135deg,#9030F0,#4890F0,#00D8F0)",
              display: "inline-block",
            }}
          />
        ))}
      </div>
    );
  }

  if (state === "live") {
    return (
      <div
        className={className}
        role="status"
        aria-label="Agente en vivo"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 14px", borderRadius: 999,
          background: "rgba(0,216,240,.12)", border: "1px solid rgba(0,216,240,.30)",
          color: "#9FEAF6", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap",
        }}
      >
        <span
          className="bm-live-dot"
          style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            background: "#00D8F0", boxShadow: "0 0 0 0 rgba(0,216,240,.6)",
          }}
        />
        <span>Blexi atendiendo · EN VIVO</span>
      </div>
    );
  }

  const aspect = 56 / 88;
  const w = width ?? (height ? Math.round(height / aspect) : state === "splash" ? 280 : state === "loader" ? 72 : 60);
  const h = height ?? Math.round(w * aspect);

  return (
    <svg
      width={w}
      height={h}
      viewBox="-8 -6 88 56"
      fill="none"
      className={`${state === "splash" ? "bm-atom" : ""} ${className ?? ""}`}
      aria-label={state !== "static" ? "Blexi" : undefined}
      aria-hidden={state === "static" ? true : undefined}
      style={{ overflow: "visible", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#9030F0" />
          <stop offset="50%"  stopColor="#4890F0" />
          <stop offset="100%" stopColor="#00D8F0" />
        </linearGradient>
        <filter id={fid} x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <g className={state === "splash" ? "bm-breathe" : undefined}>
        {state === "splash" && (
          <path
            className="bm-glow"
            stroke={`url(#${gid})`}
            filter={`url(#${fid})`}
            strokeWidth={11}
            strokeLinecap="round"
            style={{ opacity: 0.35 }}
            d={PATH}
          />
        )}

        <path
          stroke={`url(#${gid})`}
          strokeWidth={7}
          strokeLinecap="round"
          style={{ opacity: state === "loader" ? 0.25 : 0.92 }}
          d={PATH}
        />

        {state !== "static" && (
          <path
            className={state === "loader" ? "bm-comet-fast" : "bm-comet"}
            stroke="#FFFFFF"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="26 360"
            d={PATH}
          />
        )}
      </g>
    </svg>
  );
}
