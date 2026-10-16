import { crearImagenSocial, imagenSocial } from "@/lib/imagen-social";

export const alt = imagenSocial.alt;
export const size = imagenSocial.size;
export const contentType = imagenSocial.contentType;

export default function Image() {
  return crearImagenSocial();
}
