import { BadgeCheck, CreditCard, MapPin, ShieldCheck } from "lucide-react";

/**
 * Autoridad, sin logos ni clientes inventados: sólo hechos verificables del
 * producto. Va justo debajo del hero.
 */
const hechos = [
  { icono: BadgeCheck, texto: "Conectado a la plataforma oficial de WhatsApp Business (Meta)" },
  { icono: CreditCard, texto: "Cobros por Nequi, transferencia, Wompi o contraentrega" },
  { icono: ShieldCheck, texto: "Tratamiento de datos según la Ley 1581" },
  { icono: MapPin, texto: "Hecho en Colombia, con soporte en español" },
];

export function FranjaDeConfianza() {
  return (
    <section aria-label="Por qué confiar" className="border-y border-blx-linea bg-white">
      <ul className="container-page grid gap-x-8 gap-y-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {hechos.map((h) => (
          <li key={h.texto} className="flex items-center gap-3 text-sm font-medium text-blx-tinta">
            <h.icono className="size-5 shrink-0 text-blx-azulTexto" aria-hidden />
            {h.texto}
          </li>
        ))}
      </ul>
    </section>
  );
}
