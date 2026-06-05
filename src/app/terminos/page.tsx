import type { Metadata } from "next";

import {
  LA,
  LB,
  LLI,
  LP,
  LUL,
  LegalSection,
  LegalShell,
} from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Términos y Condiciones | BLEXI",
  description:
    "Términos y Condiciones de Uso de BLEXI — BLUE CODE SOLUTIONS S.A.S.",
};

const toc = [
  { id: "descripcion", label: "1. Descripción del Servicio" },
  { id: "ia-garantias", label: "2. IA y ausencia de garantías" },
  { id: "responsabilidades", label: "3. Responsabilidades del Cliente" },
  { id: "terceros", label: "4. Dependencia de terceros" },
  { id: "pagos", label: "5. Planes, pagos y reembolsos" },
  { id: "propiedad", label: "6. Propiedad intelectual" },
  { id: "limitacion", label: "7. Limitación de responsabilidad" },
  { id: "indemnidad", label: "8. Indemnidad" },
  { id: "datos", label: "9. Tratamiento de datos" },
  { id: "terminacion", label: "10. Suspensión y terminación" },
  { id: "fuerza-mayor", label: "11. Fuerza mayor" },
  { id: "modificaciones", label: "12. Modificaciones" },
  { id: "ley", label: "13. Ley aplicable y jurisdicción" },
  { id: "contacto", label: "14. Contacto" },
];

export default function TerminosPage() {
  return (
    <LegalShell
      title="Términos y Condiciones de Uso"
      subtitle="Condiciones que regulan el acceso y uso de BLEXI, el asistente de IA conversacional y CRM para ventas y atención por WhatsApp."
      lastUpdated="Última actualización: 1 de junio de 2026"
      toc={toc}
    >
      <LP>
        Estos Términos y Condiciones (&quot;Términos&quot;) regulan el acceso y
        uso de <LB>BLEXI</LB> (&quot;el Servicio&quot;), ofrecido por{" "}
        <LB>BLUE CODE SOLUTIONS S.A.S.</LB> (&quot;BlueCode&quot;,
        &quot;nosotros&quot;), sociedad constituida en Colombia, NIT
        901.954.333-1, con domicilio en Cali, Valle del Cauca.
      </LP>
      <LP>
        Al registrarte, contratar o usar el Servicio, aceptas estos Términos en
        su totalidad. Si actúas en nombre de una empresa, declaras que tienes
        facultad para obligarla. Si no estás de acuerdo, no uses el Servicio.
      </LP>

      <div className="my-10 h-px bg-brand-border" />

      <LegalSection id="descripcion" number="1" title="Descripción del Servicio">
        <LP>
          BLEXI es una herramienta de software que utiliza inteligencia
          artificial para ayudar a los negocios (&quot;el Cliente&quot;) a
          atender conversaciones, registrar pedidos, dar seguimiento y organizar
          información en un CRM, integrándose con la plataforma de WhatsApp
          Business. El Servicio es una herramienta de apoyo:{" "}
          <LB>
            no reemplaza el criterio, la supervisión ni la responsabilidad del
            Cliente
          </LB>{" "}
          sobre su propia operación comercial.
        </LP>
      </LegalSection>

      <LegalSection
        id="ia-garantias"
        number="2"
        title="Naturaleza de la inteligencia artificial y ausencia de garantía de resultados"
      >
        <LP>El Cliente reconoce y acepta expresamente que:</LP>
        <LUL>
          <LLI>
            BLEXI genera respuestas de forma automatizada mediante modelos de
            inteligencia artificial, los cuales{" "}
            <LB>pueden producir información imprecisa, incompleta o errónea</LB>
            , y pueden no comportarse igual en todos los casos.
          </LLI>
          <LLI>
            BlueCode <LB>no garantiza</LB> que el agente responda siempre de
            forma correcta, ni que interprete adecuadamente toda solicitud de los
            usuarios finales.
          </LLI>
          <LLI>
            El Cliente es el{" "}
            <LB>
              único responsable de revisar, configurar, supervisar y validar
            </LB>{" "}
            el comportamiento del agente, su catálogo, precios, promociones y los
            mensajes que se envían en su nombre.
          </LLI>
          <LLI>
            Cualquier cifra, ejemplo, proyección o beneficio mencionado en
            nuestros sitios web o materiales de marketing es{" "}
            <LB>meramente ilustrativo y referencial</LB>, no constituye una
            promesa, oferta ni garantía contractual de resultados.
          </LLI>
          <LLI>
            BLEXI{" "}
            <LB>
              no garantiza un volumen de ventas, conversiones, ingresos ni
              resultados comerciales específicos
            </LB>{" "}
            de ningún tipo.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="responsabilidades"
        number="3"
        title="Responsabilidades del Cliente"
      >
        <LP>El Cliente se obliga a:</LP>
        <LUL>
          <LLI>
            Usar el Servicio de forma lícita, veraz y responsable, y cumplir
            toda la normativa aplicable a su actividad.
          </LLI>
          <LLI>
            Ser responsable por todo el contenido que carga o configura
            (catálogo, precios, descripciones, mensajes, políticas comerciales) y
            por la exactitud de dicho contenido.
          </LLI>
          <LLI>
            Obtener y mantener el{" "}
            <LB>consentimiento de sus propios usuarios finales</LB> para
            contactarlos por WhatsApp, conforme a la ley de protección de datos y
            a las políticas de WhatsApp/Meta.
          </LLI>
          <LLI>
            Cumplir las{" "}
            <LB>Políticas de Negocios y Comercio de WhatsApp y de Meta</LB>,
            abstenerse de enviar spam, contenido prohibido o comunicaciones no
            autorizadas.
          </LLI>
          <LLI>
            No usar el Servicio para actividades ilícitas, engañosas,
            fraudulentas, ni para vender productos o servicios prohibidos.
          </LLI>
          <LLI>
            Supervisar las interacciones del agente y atender personalmente los
            casos que requieran intervención humana (reclamos, temas sensibles o
            decisiones comerciales relevantes).
          </LLI>
        </LUL>
        <LP>
          El Cliente es el responsable frente a sus propios clientes por las
          ventas, pedidos, precios, entregas, pagos y obligaciones comerciales
          derivadas de su actividad. BlueCode no es parte de esas relaciones
          comerciales.
        </LP>
      </LegalSection>

      <LegalSection
        id="terceros"
        number="4"
        title="Dependencia de terceros (WhatsApp, Meta y otros proveedores)"
      >
        <LP>
          El Servicio funciona sobre la infraestructura y los servicios de{" "}
          <LB>proveedores de terceros</LB>. Entre ellos se incluyen, de forma
          enunciativa y no limitativa:
        </LP>
        <LUL>
          <LLI>
            <LB>Meta Platforms, Inc. / WhatsApp</LB> — plataforma de mensajería
            (WhatsApp Business Platform / Cloud API).
          </LLI>
          <LLI>
            <LB>Amazon Web Services (AWS)</LB> y demás proveedores de nube,
            cómputo, almacenamiento y conectividad.
          </LLI>
          <LLI>
            <LB>OpenAI</LB> y otros <LB>proveedores de modelos de IA (LLMs)</LB>{" "}
            utilizados para generar las respuestas del agente, los cuales pueden
            cambiar o ser sustituidos a discreción de BlueCode.
          </LLI>
          <LLI>
            <LB>Pasarelas y procesadores de pago</LB>, y otros servicios
            auxiliares.
          </LLI>
        </LUL>
        <LP>El Cliente reconoce y acepta expresamente que:</LP>
        <LUL>
          <LLI>
            BlueCode <LB>no controla</LB> a estos proveedores y{" "}
            <LB>no es responsable</LB> por interrupciones, caídas, latencia,
            degradación, indisponibilidad, cambios de política, bloqueos de
            números, ni por cualquier decisión, acción u omisión de
            Meta/WhatsApp, AWS, OpenAI u otros terceros.
          </LLI>
          <LLI>
            Ante una <LB>caída o suspensión de cualquiera de estos proveedores</LB>
            , el Servicio podrá verse afectado o interrumpido,{" "}
            <LB>sin que ello genere responsabilidad alguna para BlueCode</LB> ni
            derecho a indemnización, descuento o reembolso, más allá de lo que
            la ley exija de forma imperativa.
          </LLI>
          <LLI>
            BlueCode hará esfuerzos razonables por restablecer el Servicio, pero{" "}
            <LB>no garantiza disponibilidad ininterrumpida</LB> dado que depende
            de terceros fuera de su control.
          </LLI>
          <LLI>
            La aprobación y mantenimiento de la cuenta de WhatsApp del Cliente
            dependen del cumplimiento de las políticas de Meta/WhatsApp por parte
            del Cliente.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection id="pagos" number="5" title="Planes, pagos, renovación y reembolsos">
        <LUL>
          <LLI>
            El Servicio se ofrece mediante <LB>planes de suscripción</LB> con
            tarifas y límites de uso publicados al momento de la contratación.
          </LLI>
          <LLI>
            Salvo que se indique lo contrario, las suscripciones se{" "}
            <LB>renuevan automáticamente</LB> por periodos iguales hasta que el
            Cliente las cancele.
          </LLI>
          <LLI>
            Los pagos no realizados oportunamente podrán dar lugar a la{" "}
            <LB>suspensión o terminación</LB> del Servicio.
          </LLI>
          <LLI>
            BlueCode podrá <LB>modificar las tarifas</LB> notificando con
            antelación razonable; los cambios aplican a partir del siguiente
            periodo de facturación.
          </LLI>
          <LLI>
            <LB>Periodo de prueba:</LB> si se ofrece un periodo gratuito, al
            finalizarlo el Cliente deberá elegir un plan o cancelar.
          </LLI>
          <LLI>
            <LB>Reembolsos y derecho de retracto:</LB> se aplicarán conforme a
            la legislación colombiana de protección al consumidor. Salvo
            obligación legal en contrario, las tarifas de periodos ya iniciados
            no son reembolsables. El Cliente puede cancelar la renovación en
            cualquier momento, surtiendo efecto al final del periodo pagado.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection id="propiedad" number="6" title="Propiedad intelectual">
        <LP>
          El Servicio, su software, marca, diseño y contenidos son propiedad de
          BlueCode o de sus licenciantes y están protegidos por la ley. Se otorga
          al Cliente una <LB>licencia limitada, no exclusiva, intransferible y
          revocable</LB> para usar el Servicio durante la vigencia de la
          suscripción. El Cliente conserva la propiedad de su propio contenido y
          datos. El Cliente no podrá copiar, descompilar, revender ni crear obras
          derivadas del Servicio sin autorización escrita.
        </LP>
      </LegalSection>

      <LegalSection
        id="limitacion"
        number="7"
        title="Limitación de responsabilidad"
      >
        <LP>En la máxima medida permitida por la ley:</LP>
        <LUL>
          <LLI>
            El Servicio se presta <LB>&quot;tal cual&quot;</LB> y{" "}
            <LB>&quot;según disponibilidad&quot;</LB>, sin garantías implícitas
            de comerciabilidad, idoneidad para un fin particular o
            disponibilidad ininterrumpida.
          </LLI>
          <LLI>
            BlueCode <LB>no será responsable</LB> por daños indirectos,
            incidentales, especiales o punitivos, ni por lucro cesante, pérdida
            de oportunidades, pérdida de datos, pérdida de clientes o daño
            reputacional, derivados del uso o de la imposibilidad de uso del
            Servicio, ni por respuestas generadas por la IA, ni por actos de
            terceros (incluyendo Meta/WhatsApp).
          </LLI>
          <LLI>
            La <LB>responsabilidad total acumulada</LB> de BlueCode frente al
            Cliente se limita al{" "}
            <LB>
              monto efectivamente pagado durante los tres (3) meses anteriores
            </LB>{" "}
            al hecho que originó la reclamación.
          </LLI>
        </LUL>
        <LP>
          Algunas jurisdicciones no permiten ciertas exclusiones; en tal caso,
          estas limitaciones aplicarán hasta donde lo permita la ley.
        </LP>
      </LegalSection>

      <LegalSection id="indemnidad" number="8" title="Indemnidad">
        <LP>
          El Cliente mantendrá indemne a BlueCode frente a reclamaciones,
          demandas, sanciones, daños o costos (incluidos honorarios de abogados)
          que surjan de: (i) el contenido cargado o los mensajes enviados a
          través de su cuenta; (ii) el incumplimiento de estos Términos o de la
          ley; (iii) la violación de las políticas de WhatsApp/Meta; o (iv)
          reclamaciones de sus propios clientes o terceros relacionadas con su
          actividad comercial.
        </LP>
      </LegalSection>

      <LegalSection id="datos" number="9" title="Tratamiento de datos personales">
        <LP>
          El tratamiento de datos personales se rige por nuestra{" "}
          <LA href="/privacidad">Política de Privacidad</LA>, que forma parte
          integral de estos Términos. El Cliente actúa como responsable de los
          datos de sus usuarios finales y BlueCode como encargado del tratamiento
          por cuenta del Cliente, según se detalla en dicha Política.
        </LP>
      </LegalSection>

      <LegalSection id="terminacion" number="10" title="Suspensión y terminación">
        <LP>
          BlueCode podrá suspender o terminar el acceso al Servicio, total o
          parcialmente, en caso de: incumplimiento de estos Términos, falta de
          pago, uso indebido o riesgo para la plataforma. El Cliente puede
          terminar su suscripción cancelando la renovación. A la terminación,
          cesará el acceso al Servicio y los datos podrán eliminarse conforme a
          la Política de Privacidad y a la ley.
        </LP>
      </LegalSection>

      <LegalSection id="fuerza-mayor" number="11" title="Fuerza mayor">
        <LP>
          BlueCode no será responsable por incumplimientos o demoras causados por
          hechos fuera de su control razonable, incluyendo fallas de internet, de
          proveedores de nube, de Meta/WhatsApp, cortes de energía, ataques
          informáticos, desastres naturales o actos de autoridad.
        </LP>
      </LegalSection>

      <LegalSection id="modificaciones" number="12" title="Modificaciones">
        <LP>
          Podemos actualizar estos Términos para reflejar cambios legales,
          técnicos o del Servicio. Publicaremos la versión vigente en esta página
          con su fecha de actualización. El uso continuado del Servicio tras la
          publicación implica la aceptación de los cambios.
        </LP>
      </LegalSection>

      <LegalSection id="ley" number="13" title="Ley aplicable y jurisdicción">
        <LP>
          Estos Términos se rigen por las leyes de la República de Colombia.
          Cualquier controversia que no pueda resolverse de mutuo acuerdo se
          someterá a los jueces y tribunales competentes de la ciudad de{" "}
          <LB>Cali, Valle del Cauca, Colombia</LB>, renunciando las partes a
          cualquier otro fuero que pudiera corresponderles.
        </LP>
      </LegalSection>

      <LegalSection id="contacto" number="14" title="Contacto" last>
        <LP>
          Para soporte o consultas sobre estos Términos:{" "}
          <LA href="mailto:contacto@bluecodesolution.com">
            contacto@bluecodesolution.com
          </LA>{" "}
          — BLUE CODE SOLUTIONS S.A.S., Cali, Colombia.
        </LP>
      </LegalSection>
    </LegalShell>
  );
}
