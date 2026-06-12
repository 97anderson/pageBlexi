"use client";

/**
 * BlexiMark — átomo de marca vivo (5 estados)
 *
 * Los <defs> SVG (gradiente + filtro) están definidos una sola vez en layout.tsx.
 * Las animaciones CSS están en globals.css.
 * Este componente solo renderiza el SVG; no inyecta nada al DOM.
 *
 * IDs globales usados: #blexi-grad  #blexi-filter
 */

export type BlexiMarkState = "splash" | "loader" | "thinking" | "live" | "static";

const PATH =
  "M24.5,12 C19,12 14.5,16.5 14.5,22 C14.5,27.5 19,32 24.5,32 C30,32 33,27 36,22 C39,17 42,12 47.5,12 C53,12 57.5,16.5 57.5,22 C57.5,27.5 53,32 47.5,32 C42,32 39,27 36,22 C33,17 30,12 24.5,12 Z";

interface Props {
  state?: BlexiMarkState;
  width?: number;
  height?: number;
  className?: string;
}

export function BlexiMark({ state = "static", width, height, className }: Props) {
  if (state === "thinking") {
    return (
      <div
        className={className}
        role="img"
        aria-label="Blexi está escribiendo…"
        style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
      >
        {[0, 150, 300].map((delay, i) => (
          <span
            key={i}
            className="bm-dot-bounce"
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#9030F0,#4890F0,#00D8F0)",
              display: "inline-block",
              animationDelay: `${delay}ms`,
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
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 14px",
          borderRadius: 999,
          background: "rgba(0,216,240,.12)",
          border: "1px solid rgba(0,216,240,.30)",
          color: "#9FEAF6",
          fontSize: 12,
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        <span
          className="bm-live-dot"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            flexShrink: 0,
            background: "#00D8F0",
          }}
        />
        <span>Blexi atendiendo · EN VIVO</span>
      </div>
    );
  }

  const aspect = 56 / 88;
  const w =
    width ??
    (height
      ? Math.round(height / aspect)
      : state === "splash"
      ? 280
      : state === "loader"
      ? 72
      : 60);
  const h = height ?? Math.round(w * aspect);

  const isSplash = state === "splash";
  const isLoader = state === "loader";

  return (
    <svg
      width={w}
      height={h}
      viewBox="-8 -6 88 56"
      fill="none"
      className={`${isSplash ? "bm-atom" : ""} ${className ?? ""}`.trim()}
      aria-label={state !== "static" ? "Blexi" : undefined}
      aria-hidden={state === "static" ? true : undefined}
      style={{ overflow: "visible", display: "block", flexShrink: 0 }}
    >
      <g className={isSplash ? "bm-breathe" : undefined}>
        {/* Glow — solo splash */}
        {isSplash && (
          <path
            className="bm-glow"
            stroke="url(#blexi-grad)"
            filter="url(#blexi-filter)"
            strokeWidth={11}
            strokeLinecap="round"
            style={{ opacity: 0.35 }}
            d={PATH}
          />
        )}

        {/* Track */}
        <path
          stroke="url(#blexi-grad)"
          strokeWidth={7}
          strokeLinecap="round"
          style={{ opacity: isLoader ? 0.25 : 0.92 }}
          d={PATH}
        />

        {/* Comet — splash + loader */}
        {state !== "static" && (
          <path
            className={isLoader ? "bm-comet-fast" : "bm-comet"}
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
