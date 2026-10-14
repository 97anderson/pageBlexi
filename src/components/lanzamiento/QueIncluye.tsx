import { Bike, LayoutDashboard, Megaphone, UserRound } from "lucide-react";

const bloques = [
  {
    icono: LayoutDashboard,
    nombre: "Tu panel de ventas",
    texto:
      "Pedidos, clientes y todas las conversaciones en un solo lugar. Ves qué vendió Blexi y entras a cualquier chat cuando quieras.",
    nota: "En todos los planes",
  },
  {
    icono: UserRound,
    nombre: "Ana, tu asistente",
    texto:
      "Le escribes por WhatsApp «¿cómo vamos hoy?» y te responde con tus ventas, pedidos pendientes y clientes por atender.",
    nota: "Gratis el primer mes en todos los planes",
  },
  {
    icono: Megaphone,
    nombre: "Sofía, tus publicaciones",
    texto:
      "Le cuentas la idea y te prepara publicaciones con tu logo, tus colores y el precio correcto, listas para redes.",
    nota: "Plata: con fotos de tu catálogo · Oro y Diamante: también imágenes creadas con IA",
  },
  {
    icono: Bike,
    nombre: "Domicilios en orden",
    texto:
      "Tarifa por zona, asignación al domiciliario y aviso al cliente. El cobro contraentrega queda registrado.",
    nota: "Según el plan",
  },
];

export function QueIncluye() {
  return (
    <section id="incluye" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blx-solTexto">Qué incluye</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-blx-tinta [text-wrap:balance] sm:text-[2.6rem]">
            Un equipo que trabaja por tu negocio, todos los días.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-blx-gris">
            Blexi vende. Lo demás te ayuda a ordenar y a atraer más clientes.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {bloques.map((b) => (
            <li key={b.nombre} className="flex flex-col rounded-3xl border border-blx-tinta/10 bg-blx-papel p-7">
              <b.icono className="size-7 text-blx-tinta" strokeWidth={1.8} aria-hidden />
              <h3 className="mt-5 font-display text-lg font-bold text-blx-tinta">{b.nombre}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-blx-gris">{b.texto}</p>
              <p className="mt-5 text-sm font-semibold text-blx-solTexto">{b.nota}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
