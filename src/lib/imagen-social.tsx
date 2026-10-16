import { ImageResponse } from "next/og";

export const imagenSocial = {
  alt: "BLEXI — IA que vende por WhatsApp para tu Pyme",
  size: { width: 1200, height: 630 },
  contentType: "image/png",
};

/** Tarjeta social 1200×630 con la marca: degradado, marca y titular de la web. */
export function crearImagenSocial() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg,#9030F0 0%,#4890F0 55%,#00D8F0 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="96" height="96" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.18)" />
            <g transform="translate(16,16) scale(0.605) translate(-36,-22)">
              <path
                fill="none"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="7"
                strokeLinecap="round"
                d="M24.5,12 C19,12 14.5,16.5 14.5,22 C14.5,27.5 19,32 24.5,32 C30,32 33,27 36,22 C39,17 42,12 47.5,12 C53,12 57.5,16.5 57.5,22 C57.5,27.5 53,32 47.5,32 C42,32 39,27 36,22 C33,17 30,12 24.5,12 Z"
              />
            </g>
          </svg>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: 4 }}>BLEXI</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.5,
          }}
        >
          Tú descansa, BLEXI atiende WhatsApp y vende por ti.
        </div>
        <div style={{ display: "flex", fontSize: 30, opacity: 0.92 }}>
          IA y CRM para tu Pyme en Colombia · soyblexi.com
        </div>
      </div>
    ),
    imagenSocial.size,
  );
}
