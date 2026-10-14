import { ImageResponse } from "next/og";

import { PROMO, PRUEBA_DIAS, pesos } from "@/lib/config";

/** Imagen para compartir el enlace, generada en el build. */
export const alt = "Blexi: tu WhatsApp vende solo. Vendedor con IA para WhatsApp para pymes de Colombia.";
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
          background: "#161D32",
          color: "white",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -300,
            top: 40,
            width: 560,
            height: 560,
            borderRadius: 90,
            background: "linear-gradient(135deg, #9030F0 0%, #4890F0 50%, #00D8F0 100%)",
            transform: "rotate(12deg)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#00D8F0", letterSpacing: 3 }}>
          BLEXI · HECHO EN COLOMBIA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, lineHeight: 1 }}>Tu WhatsApp</div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, lineHeight: 1.05, color: "#4890F0" }}>
            vende solo.
          </div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "rgba(255,255,255,0.85)", maxWidth: 820 }}>
            Responde, toma el pedido, lo cobra por Nequi y te avisa.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, maxWidth: 860 }}>
          {`${PRUEBA_DIAS} días gratis · Plata desde ${pesos(PROMO.precios.plata)}/mes los primeros ${PROMO.meses} meses · IVA incluido`}
        </div>
      </div>
    ),
    size,
  );
}
