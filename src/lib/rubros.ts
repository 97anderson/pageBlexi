/**
 * Páginas por rubro (/para/<rubro>): una plantilla y estos datos.
 *
 * Sólo capacidades que la página principal ya afirma (flujo, funciones, planes
 * y compatibilidad por plan). Si Blexi deja de hacer algo, se quita aquí.
 */
export type Rubro = {
  slug: string;
  /** «Agente de IA para WhatsApp para <titulo>» */
  titulo: string;
  /** Para el title y la descripción. */
  ejemplos: string;
  intro: string;
  hace: { titulo: string; texto: string }[];
  escenas: string[];
  plan: string;
};

export const RUBROS: Rubro[] = [
  {
    slug: "restaurantes",
    titulo: "restaurantes",
    ejemplos: "restaurantes, comidas rápidas, panaderías, cafeterías y pastelerías",
    intro:
      "Si vendes comida, WhatsApp es tu caja registradora: los pedidos llegan a la hora pico, por texto y por nota de voz. Blexi es un agente de IA para WhatsApp que contesta cada mensaje, arma el pedido completo y lo deja en tu CRM, aunque estés en la cocina.",
    hace: [
      { titulo: "Toma el pedido completo", texto: "Entiende cómo escribe el cliente, arma el carrito con tu catálogo y tus precios, y recoge dirección y forma de pago. No hay menús de «marque 1»." },
      { titulo: "Entiende las notas de voz", texto: "Muchos clientes piden hablando. Blexi transcribe la nota, entiende el contexto y responde igual que si fuera texto." },
      { titulo: "Recupera el pedido a medias", texto: "Si el cliente dudó y dejó el pedido sin cerrar, Blexi le manda un recordatorio automático dentro de las 24 horas." },
      { titulo: "Domicilios y cobros", texto: "Maneja domicilios con tus domiciliarios y los cobros desde la conversación; el pedido queda registrado en el CRM." },
      { titulo: "Te pregunta lo que no sabe", texto: "Si el cliente pide algo que no está claro en tu catálogo, te escribe por WhatsApp y le avisa al cliente que lo está confirmando. No inventa precios." },
    ],
    escenas: [
      "Un cliente escribe a las 11 p. m. pidiendo dos hamburguesas y una gaseosa: Blexi responde, toma el pedido y queda en tu CRM para cuando abras.",
      "Una panadería recibe encargos de tortas por WhatsApp: Blexi consulta el catálogo, confirma lo que pide el cliente y registra el encargo.",
    ],
    plan:
      "Restaurantes y comidas rápidas, panaderías, cafeterías y pastelerías encajan en el plan Plata. Los restaurantes de alto volumen suelen necesitar Oro o Diamante.",
  },
  {
    slug: "tiendas",
    titulo: "tiendas",
    ejemplos: "tiendas de ropa, perfumerías, accesorios, florerías y librerías",
    intro:
      "En una tienda cada cliente pregunta por referencias, tallas, fragancias o disponibilidad, y casi siempre por WhatsApp. Blexi es un agente de IA para WhatsApp que conoce tu catálogo, responde esas dudas y deja la venta registrada en tu CRM.",
    hace: [
      { titulo: "Responde con tu catálogo", texto: "Aprende tu negocio desde tu catálogo, menú o PDF y contesta con tu información y tus precios, sin escribir código." },
      { titulo: "Búsqueda por foto", texto: "En los planes Oro y Diamante, el cliente puede mandar una foto y Blexi busca lo parecido en tu catálogo." },
      { titulo: "Recuerda a cada cliente", texto: "Guarda nombre, dirección y lo que suele pedir, y construye el perfil con cada conversación, sin bases de datos manuales." },
      { titulo: "Cobra sin salir de WhatsApp", texto: "En los planes Oro y Diamante genera el link de pago, recibe el comprobante y confirma la orden. Nequi, PSE o tarjeta." },
      { titulo: "Recupera la venta que se enfría", texto: "Si el pedido queda a medias, manda un recordatorio automático dentro de las 24 horas." },
    ],
    escenas: [
      "Una perfumería recibe a diario «¿tienes esta fragancia?»: Blexi consulta el catálogo, responde y arma el pedido.",
      "Una tienda de ropa recibe la foto de una prenda que vio el cliente: Blexi busca opciones parecidas en el catálogo (planes Oro y Diamante).",
    ],
    plan:
      "Ropa y accesorios con catálogo básico entran en el plan Plata; las perfumerías, las tiendas de ropa, calzado y accesorios con más catálogo, la joyería y la electrónica encajan mejor en Oro. Las tiendas con catálogo amplio pueden necesitar Diamante.",
  },
  {
    slug: "servicios",
    titulo: "servicios y citas",
    ejemplos: "barberías, salones de belleza, consultorios, talleres y veterinarias",
    intro:
      "Si vendes tu tiempo, cada mensaje sin responder es una cita perdida. Blexi es un agente de IA para WhatsApp que atiende a tus clientes, verifica disponibilidad, confirma la cita y la cambia si el cliente lo pide, mientras tú atiendes.",
    hace: [
      { titulo: "Agenda citas", texto: "Verifica la disponibilidad, agenda, cambia o cancela la cita, sin llamadas ni idas y vueltas. Pensado para salones, consultorios y talleres." },
      { titulo: "Responde dudas sobre tus servicios", texto: "Contesta por texto y por nota de voz, con tu información, tus servicios y tus precios, y en un tono natural." },
      { titulo: "Recuerda a cada cliente", texto: "Su nombre, sus datos y lo que suele pedir quedan en el perfil, para atenderlo mejor cada vez." },
      { titulo: "Todo en el CRM", texto: "Ves quién escribió, qué pidió y cómo va cada cita o pedido, desde cualquier dispositivo." },
      { titulo: "Tú decides cuándo interviene", texto: "Lo que no sabe te lo pregunta a ti, y con un botón lo pausas y atiendes tú." },
    ],
    escenas: [
      "Una barbería recibe pedidos de cita a toda hora: Blexi revisa la agenda y confirma sin que el barbero suelte la máquina.",
      "Un consultorio pequeño recibe preguntas de horarios y servicios: Blexi responde y agenda, y el equipo ve todo en el CRM.",
    ],
    plan:
      "Salones de belleza y barberías, clínicas y consultorios pequeños, talleres y veterinarias encajan en el plan Plata. Los grupos médicos y las clínicas con más volumen suelen necesitar Oro o Diamante.",
  },
];

export const rubroPorSlug = (slug: string) => RUBROS.find((r) => r.slug === slug);
