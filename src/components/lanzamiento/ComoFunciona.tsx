/** "Del ¿cuánto vale? al pedido pagado": rejilla de 6 tarjetas del diseño A. */
type Tarjeta = { titulo: string; texto: string; icono: React.ReactNode; oscura?: boolean };

const trazo = { fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const tarjetas: Tarjeta[] = [
  {
    titulo: "Responde al instante",
    texto: "Con fotos, precios y disponibilidad de tu catálogo. Entiende notas de voz.",
    icono: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  },
  {
    titulo: "Arma el pedido",
    texto: "Pregunta lo que falta, calcula el envío según la zona y confirma antes de cobrar.",
    icono: (
      <>
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </>
    ),
  },
  {
    titulo: "Cobra",
    texto: "Nequi, transferencia, Wompi o contraentrega. El comprobante queda en el pedido.",
    icono: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    titulo: "Te avisa cada venta",
    texto: "Por WhatsApp y en tu panel: quién compró, qué, cuánto y cómo pagó.",
    oscura: true,
    icono: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </>
    ),
  },
  {
    titulo: "Tu negocio en un panel",
    texto: "Pedidos, productos, clientes y todas las conversaciones en un solo lugar.",
    icono: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    titulo: "Tú decides cuándo entrar",
    texto: "Si algo necesita tu criterio, Blexi te pregunta o te pasa la conversación.",
    icono: (
      <>
        <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  },
];

export function ComoFunciona() {
  return (
    <section id="como" className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 pb-[120px] sm:px-6">
      <div className="flex max-w-[760px] flex-col gap-4">
        <h2 className="m-0 font-grotesk text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.04] tracking-[-0.035em]">
          Del &quot;¿cuánto vale?&quot; al pedido pagado, sin que tú escribas.
        </h2>
        <p className="m-0 text-xl leading-[1.55] text-blx-texto">
          Blexi conoce tu catálogo, tus precios y tus envíos. Atiende a cada cliente como lo harías tú, a cualquier hora.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
        {tarjetas.map((t) => (
          <div
            key={t.titulo}
            className={`flex flex-col gap-3 rounded-3xl p-8 ${t.oscura ? "bg-blx-tinta text-blx-vitrinaTexto" : "border border-blx-linea bg-white"}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" stroke={t.oscura ? "#00D8F0" : "#4890F0"} {...trazo} aria-hidden="true">
              {t.icono}
            </svg>
            <h3 className={`m-0 font-grotesk text-2xl font-bold ${t.oscura ? "text-white" : ""}`}>{t.titulo}</h3>
            <p className={`m-0 text-[17px] leading-[1.55] ${t.oscura ? "text-blx-oscuroTexto" : "text-blx-texto"}`}>{t.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
