import { ImageResponse } from "next/og";

import { PROMO, PRUEBA_DIAS, pesos } from "@/lib/config";

/** Imagen para compartir el enlace, generada en el build, con el estilo del diseño A. */
export const alt = "Blexi: tu WhatsApp, vendiendo las 24 horas. Vendedor con inteligencia artificial para pymes de Colombia.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ImagenParaCompartir() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFBFD",
          color: "#0B1020",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 56, height: 28, borderRadius: 14, background: "linear-gradient(135deg, #9030F0, #4890F0, #00D8F0)" }} />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>Blexi</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>Tu WhatsApp, vendiendo</div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.1, letterSpacing: -3, color: "#3060F0" }}>
            las 24 horas.
          </div>
          <div style={{ display: "flex", fontSize: 32, marginTop: 26, color: "#4A5368" }}>
            Responde con fotos y precios, arma el pedido, lo cobra y te avisa.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#0B1020" }}>
          {`${PRUEBA_DIAS} días gratis · Lanzamiento: desde ${pesos(PROMO.precios.plata)}/mes tus primeros ${PROMO.meses} meses · IVA incluido`}
        </div>
      </div>
    ),
    size,
  );
}
