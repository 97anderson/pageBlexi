import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

const RUTAS: { ruta: string; prioridad: number; frecuencia: "weekly" | "yearly" }[] = [
  { ruta: "", prioridad: 1, frecuencia: "weekly" },
  { ruta: "/para/restaurantes", prioridad: 0.8, frecuencia: "weekly" },
  { ruta: "/para/tiendas", prioridad: 0.8, frecuencia: "weekly" },
  { ruta: "/para/servicios", prioridad: 0.8, frecuencia: "weekly" },
  { ruta: "/comparar", prioridad: 0.7, frecuencia: "weekly" },
  { ruta: "/terminos", prioridad: 0.3, frecuencia: "yearly" },
  { ruta: "/privacidad", prioridad: 0.3, frecuencia: "yearly" },
  { ruta: "/tratamiento-de-datos", prioridad: 0.3, frecuencia: "yearly" },
  { ruta: "/eliminacion-de-datos", prioridad: 0.3, frecuencia: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((r) => ({
    url: `${SITE_URL}${r.ruta}`,
    changeFrequency: r.frecuencia,
    priority: r.prioridad,
  }));
}
