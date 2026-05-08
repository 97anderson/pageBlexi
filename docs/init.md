Rol de la IA: Eres un Full-Stack Developer y UI/UX Expert especializado en SaaS moderno (estilo 2026, frameworks Next.js, Tailwind CSS, animaciones suaves tipo GSAP/Framer Motion). Tu objetivo es construir la landing page y el MVP del CRM para "BLEXI".

1. Core Brand Identity (Identidad de Marca BLEXI)
Posicionamiento: BLEXI no es una "herramienta" ni un "software". Es el empleado estrella de la Pyme. Trabaja 24/7, vende por WhatsApp y organiza todo en el CRM.

Tono de Voz: Cero tecnicismos. Empático, aliviador, directo. Palabras clave: "Gana tiempo", "Cero estrés tecnológico", "Ventas en piloto automático", "Nosotros nos encargamos".

Logo/Iconografía: Una burbuja de chat abstracta, orgánica y suave (bordes súper redondeados). Sin caras robóticas. Debe sentirse fluido y vivo.

2. Paleta de Colores (Estilo Moderno & Cálido)
En lugar de fondos blancos aburridos, usaremos un contraste entre la calidez humana y la limpieza de una startup de alto crecimiento:

--bg-base: #FDFBF7 (Un blanco roto / crema ultra suave para el fondo general, da sensación orgánica).

--primary-brand: #FFB300 (Mango Yellow - Para botones principales y el logo. Transmite energía, ventas y cercanía).

--primary-hover: #E6A200

--accent-whatsapp: #25D366 (Un verde brillante solo para íconos o tags que referencian la conexión con WhatsApp).

--text-hero: #111827 (Casi negro, para títulos potentes).

--text-muted: #6B7280 (Para subtítulos y descripciones largas).

--surface-card: #FFFFFF (Blanco puro para las tarjetas flotantes, con un border sutil de #F3F4F6).

3. Tipografía (El Toque SaaS 2026)
Títulos (Display/Headers): Plus Jakarta Sans o Outfit. (Tienen formas geométricas pero amigables, dan ese toque de "empresa gringa de alto nivel" pero legible).

Cuerpos de texto (Body/UI): Inter o Geist. (Perfectas para la interfaz del CRM interno y botones).

4. Trucos de UI/UX (Inspiración "Plinng" adaptada a BLEXI)
Cursor, al construir los componentes, debes integrar estos elementos visuales:

"The Live Feed Simulation" (El truco visual más importante):
En el Hero Section, junto al texto principal, no pongas una imagen estática. Crea un componente animado que simule un celular donde los mensajes entran y BLEXI responde solo.
Ejemplo visual: Aparece un pop-up pequeño: "⚡ Blexi acaba de cerrar una venta de $50.000 COP", luego otro "🧠 Blexi está respondiendo dudas sobre el menú". Esto tangibiliza la IA.

Glassmorphism Suave y Tarjetas Flotantes:
Los elementos de la UI (estadísticas, chats) deben flotar suavemente sobre el fondo crema usando un efecto de cristal sutil (backdrop-blur-md, bg-white/80, sombras caídas muy amplias y difuminadas shadow-xl shadow-black/5).

Componente de "Aprobación en 1 Clic" (Matchmaker UI):
Muestra cómo el dueño del negocio tiene el control total. Un componente donde el CRM sugiere: "Blexi: El cliente está dudando, ¿ofrezco 10% de descuento?" y dos botones gigantes: Aprobar / Ignorar. (Transmite que la tecnología no es incontrolable).

Bordes Radiales Amplios:
Usa rounded-2xl o rounded-3xl en las tarjetas y botones. Los bordes afilados (rounded-sm) se ven antiguos y técnicos.

5. Estructura de la Landing Page (Optimizada para Conversión Rápida)
1. Nav & Hero:

Copy: "Tú descansa, BLEXI atiende WhatsApp y vende por ti."

Sub: "El asistente inteligente y CRM que organiza tu negocio sin que sepas de tecnología."

CTA: "Ver a BLEXI en acción (Demo gratis)".

2. El Dolor (Sección de contraste):

Visual: Un switch o slider "Antes de BLEXI" (caos de chats sin responder) vs "Con BLEXI" (todo organizado en tarjetas limpias).

3. Feature Cards (La Magia):

Tarjetas minimalistas:

Aprende tu negocio: Sube tu PDF o menú en segundos.

Vende 24/7: Atiende con audios o texto en WhatsApp.

Cobra solo: Enlaces de pago integrados.

4. El Dashboard (El CRM en tiempo real):

Un mockup ultra limpio de cómo se ve el panel del administrador (viendo el dinero entrar).

5. Pricing (Planes Colombia):

Mostrar 2 planes claros (Mensual/Anual). Destacar un badge de "Plan Pioneros: 50% off para los primeros 100 clientes".

6. FAQ y Footer (Respaldo):

Dejar claro que BLEXI es "Powered by BlueCode Solutions" (Aporta el respaldo de una empresa matriz seria).

6. Instrucciones de Desarrollo para Cursor (Next.js / Tailwind)
Configura Tailwind usando el sistema de colores definido arriba.

Utiliza Framer Motion para las animaciones del Hero y el "Live Feed". Las tarjetas deben entrar con un fade-up suave al hacer scroll.

Usa componentes de shadcn/ui modificados para tener bordes más redondeados y remover las líneas duras.

Crea un componente <LiveChatSimulation/> interactivo que cambie de estado cada 3 segundos mostrando el valor del producto.