import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | BLEXI",
  description:
    "Términos y Condiciones de Uso de BLEXI — BLUE CODE SOLUTIONS S.A.S.",
};

export default function TerminosPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        Términos y Condiciones de Uso
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-textMuted">
        Última actualización: 1 de junio de 2026
      </p>

      <section className="prose prose-slate mt-10 max-w-3xl">
        <p>
          Estos Términos y Condiciones (&quot;Términos&quot;) regulan el acceso
          y uso de <strong>BLEXI</strong> (&quot;el Servicio&quot;), un
          asistente de inteligencia artificial conversacional y CRM para
          atención y ventas por WhatsApp, ofrecido por{" "}
          <strong>BLUE CODE SOLUTIONS S.A.S.</strong> (&quot;BlueCode&quot;,
          &quot;nosotros&quot;), sociedad constituida en Colombia, NIT
          901.954.333-1, con domicilio en Cali, Valle del Cauca.
        </p>
        <p>
          Al registrarte, contratar o usar el Servicio, aceptas estos Términos
          en su totalidad. Si actúas en nombre de una empresa, declaras que
          tienes facultad para obligarla. Si no estás de acuerdo, no uses el
          Servicio.
        </p>

        <hr />

        <h2>1. Descripción del Servicio</h2>
        <p>
          BLEXI es una herramienta de software que utiliza inteligencia
          artificial para ayudar a los negocios (&quot;el Cliente&quot;) a
          atender conversaciones, registrar pedidos, dar seguimiento y organizar
          información en un CRM, integrándose con la plataforma de WhatsApp
          Business. El Servicio es una herramienta de apoyo:{" "}
          <strong>
            no reemplaza el criterio, la supervisión ni la responsabilidad del
            Cliente
          </strong>{" "}
          sobre su propia operación comercial.
        </p>

        <hr />

        <h2>
          2. Naturaleza de la inteligencia artificial y ausencia de garantía de
          resultados
        </h2>
        <p>El Cliente reconoce y acepta expresamente que:</p>
        <ul>
          <li>
            BLEXI genera respuestas de forma automatizada mediante modelos de
            inteligencia artificial, los cuales{" "}
            <strong>
              pueden producir información imprecisa, incompleta o errónea
            </strong>
            , y pueden no comportarse igual en todos los casos.
          </li>
          <li>
            BlueCode <strong>no garantiza</strong> que el agente responda
            siempre de forma correcta, ni que interprete adecuadamente toda
            solicitud de los usuarios finales.
          </li>
          <li>
            El Cliente es el{" "}
            <strong>
              único responsable de revisar, configurar, supervisar y validar
            </strong>{" "}
            el comportamiento del agente, su catálogo, precios, promociones y
            los mensajes que se envían en su nombre.
          </li>
          <li>
            Cualquier cifra, ejemplo, proyección o beneficio mencionado en
            nuestros sitios web, materiales de marketing o comunicaciones (por
            ejemplo, porcentajes de recuperación de ventas, ahorros, capacidad
            de atención o tiempos de respuesta) es{" "}
            <strong>meramente ilustrativo y referencial</strong>, no constituye
            una promesa, oferta ni garantía contractual de resultados. Los
            resultados reales dependen de factores ajenos a BlueCode, como el
            negocio, su catálogo, su mercado y la conducta de sus clientes.
          </li>
          <li>
            BLEXI{" "}
            <strong>
              no garantiza un volumen de ventas, conversiones, ingresos ni
              resultados comerciales específicos
            </strong>{" "}
            de ningún tipo.
          </li>
        </ul>

        <hr />

        <h2>3. Responsabilidades del Cliente</h2>
        <p>El Cliente se obliga a:</p>
        <ul>
          <li>
            Usar el Servicio de forma lícita, veraz y responsable, y a cumplir
            toda la normativa aplicable a su actividad.
          </li>
          <li>
            Ser responsable por todo el contenido que carga o configura
            (catálogo, precios, descripciones, mensajes, políticas comerciales)
            y por la exactitud de dicho contenido.
          </li>
          <li>
            Obtener y mantener el{" "}
            <strong>consentimiento de sus propios usuarios finales</strong> para
            contactarlos por WhatsApp, conforme a la ley de protección de datos
            y a las políticas de WhatsApp/Meta.
          </li>
          <li>
            Cumplir las{" "}
            <strong>
              Políticas de Negocios y Comercio de WhatsApp y de Meta
            </strong>
            , abstenerse de enviar spam, contenido prohibido o comunicaciones no
            autorizadas.
          </li>
          <li>
            No usar el Servicio para actividades ilícitas, engañosas,
            fraudulentas, ni para vender productos o servicios prohibidos.
          </li>
          <li>
            Supervisar las interacciones del agente y atender personalmente los
            casos que requieran intervención humana (por ejemplo, reclamos,
            temas sensibles o decisiones comerciales relevantes).
          </li>
        </ul>
        <p>
          El Cliente es el responsable frente a sus propios clientes por las
          ventas, pedidos, precios, entregas, pagos y obligaciones comerciales
          derivadas de su actividad. BlueCode no es parte de esas relaciones
          comerciales.
        </p>

        <hr />

        <h2>4. Dependencia de terceros (WhatsApp, Meta y otros proveedores)</h2>
        <p>
          El Servicio funciona sobre la infraestructura y los servicios de{" "}
          <strong>proveedores de terceros</strong>, y su disponibilidad y
          desempeño dependen de ellos. Entre dichos proveedores se incluyen, de
          forma enunciativa y no limitativa:
        </p>
        <ul>
          <li>
            <strong>Meta Platforms, Inc. / WhatsApp</strong>, como plataforma
            de mensajería (WhatsApp Business Platform / Cloud API).
          </li>
          <li>
            <strong>Amazon Web Services (AWS)</strong> y demás proveedores de{" "}
            <strong>
              nube, cómputo, almacenamiento y conectividad
            </strong>{" "}
            sobre los que opera el Servicio.
          </li>
          <li>
            <strong>OpenAI</strong> y otros{" "}
            <strong>
              proveedores y modelos de inteligencia artificial (LLMs)
            </strong>{" "}
            utilizados para generar las respuestas del agente, los cuales pueden
            cambiar o ser sustituidos a discreción de BlueCode para mantener o
            mejorar el Servicio.
          </li>
          <li>
            <strong>Pasarelas y procesadores de pago</strong>, y otros servicios
            auxiliares (analítica, transcripción de audio, etc.).
          </li>
        </ul>
        <p>El Cliente reconoce y acepta expresamente que:</p>
        <ul>
          <li>
            BlueCode <strong>no controla</strong> a estos proveedores y{" "}
            <strong>no es responsable</strong> por interrupciones, caídas,
            latencia, degradación, indisponibilidad, errores, cambios de
            política, cambios de precios, suspensiones, limitaciones de
            mensajería, bloqueos o vetos de números, ni por cualquier decisión,
            acción u omisión de Meta/WhatsApp, AWS, OpenAI u otros terceros.
          </li>
          <li>
            En caso de{" "}
            <strong>
              caída, falla o suspensión total o parcial del servicio de
              cualquiera de estos proveedores
            </strong>{" "}
            (por ejemplo, una interrupción de WhatsApp/Meta, de AWS o de los
            modelos de IA), el Servicio podrá verse afectado, suspendido o
            interrumpido,{" "}
            <strong>sin que ello genere responsabilidad alguna para BlueCode</strong>{" "}
            ni derecho a indemnización, descuento o reembolso, más allá de lo
            que la ley exija de forma imperativa.
          </li>
          <li>
            BlueCode hará esfuerzos razonables por restablecer el Servicio o
            mitigar el impacto, pero{" "}
            <strong>no garantiza disponibilidad ininterrumpida</strong> ni
            tiempos de respuesta o recuperación, dado que dependen de terceros
            fuera de su control.
          </li>
          <li>
            La aprobación, el mantenimiento y la calidad de la cuenta de
            WhatsApp del Cliente dependen del cumplimiento, por parte del
            Cliente, de las políticas de Meta/WhatsApp.
          </li>
          <li>
            El uso del Servicio implica también la aceptación, por parte del
            Cliente, de los términos y políticas aplicables de dichos
            proveedores cuando corresponda.
          </li>
        </ul>

        <hr />

        <h2>5. Planes, pagos, renovación y reembolsos</h2>
        <ul>
          <li>
            El Servicio se ofrece mediante{" "}
            <strong>planes de suscripción</strong> con tarifas y límites de uso
            (por ejemplo, número de conversaciones, líneas o funciones)
            publicados al momento de la contratación.
          </li>
          <li>
            Salvo que se indique lo contrario, las suscripciones se{" "}
            <strong>renuevan automáticamente</strong> por periodos iguales hasta
            que el Cliente las cancele conforme a estos Términos.
          </li>
          <li>
            Los pagos no realizados oportunamente podrán dar lugar a la{" "}
            <strong>suspensión o terminación</strong> del Servicio.
          </li>
          <li>
            BlueCode podrá <strong>modificar las tarifas</strong> notificando
            con antelación razonable; los cambios aplican a partir del siguiente
            periodo de facturación.
          </li>
          <li>
            <strong>Periodo de prueba:</strong> si se ofrece un periodo
            gratuito, al finalizar este el Cliente deberá elegir un plan o
            cancelar; de lo contrario podrá suspenderse el Servicio.
          </li>
          <li>
            <strong>Reembolsos y derecho de retracto:</strong> se aplicarán
            conforme a la legislación colombiana de protección al consumidor.
            Salvo obligación legal en contrario, las tarifas de periodos ya
            iniciados no son reembolsables. El Cliente puede cancelar la
            renovación en cualquier momento, surtiendo efecto al final del
            periodo pagado.
          </li>
        </ul>

        <hr />

        <h2>6. Propiedad intelectual</h2>
        <p>
          El Servicio, su software, marca, diseño y contenidos son propiedad de
          BlueCode o de sus licenciantes y están protegidos por la ley. Se
          otorga al Cliente una licencia limitada, no exclusiva, intransferible
          y revocable para usar el Servicio durante la vigencia de la
          suscripción. El Cliente conserva la propiedad de su propio contenido y
          datos. El Cliente no podrá copiar, descompilar, revender ni crear
          obras derivadas del Servicio sin autorización escrita.
        </p>

        <hr />

        <h2>7. Limitación de responsabilidad</h2>
        <p>En la máxima medida permitida por la ley:</p>
        <ul>
          <li>
            El Servicio se presta{" "}
            <strong>
              &quot;tal cual&quot; y &quot;según disponibilidad&quot;
            </strong>
            , sin garantías implícitas de comerciabilidad, idoneidad para un
            fin particular o disponibilidad ininterrumpida.
          </li>
          <li>
            BlueCode <strong>no será responsable</strong> por daños indirectos,
            incidentales, especiales, punitivos ni por lucro cesante, pérdida de
            oportunidades, pérdida de datos, pérdida de clientes o daño
            reputacional, derivados del uso o de la imposibilidad de uso del
            Servicio, ni por respuestas generadas por la IA, ni por actos de
            terceros (incluyendo Meta/WhatsApp).
          </li>
          <li>
            La <strong>responsabilidad total acumulada</strong> de BlueCode
            frente al Cliente por cualquier reclamación relacionada con el
            Servicio se limita al{" "}
            <strong>
              monto efectivamente pagado por el Cliente a BlueCode durante los
              tres (3) meses anteriores
            </strong>{" "}
            al hecho que originó la reclamación.
          </li>
        </ul>
        <p>
          Algunas jurisdicciones no permiten ciertas exclusiones; en tal caso,
          estas limitaciones aplicarán hasta donde lo permita la ley.
        </p>

        <hr />

        <h2>8. Indemnidad</h2>
        <p>
          El Cliente mantendrá indemne a BlueCode frente a reclamaciones,
          demandas, sanciones, daños o costos (incluidos honorarios de abogados)
          que surjan de: (i) el contenido cargado o los mensajes enviados a
          través de su cuenta; (ii) el incumplimiento de estos Términos o de la
          ley; (iii) la violación de las políticas de WhatsApp/Meta; o (iv)
          reclamaciones de sus propios clientes o terceros relacionadas con su
          actividad comercial.
        </p>

        <hr />

        <h2>9. Tratamiento de datos personales</h2>
        <p>
          El tratamiento de datos personales se rige por nuestra{" "}
          <a href="/privacidad">Política de Privacidad</a>, que forma parte
          integral de estos Términos. El Cliente actúa como responsable de los
          datos de sus usuarios finales y BlueCode como encargado del
          tratamiento por cuenta del Cliente, según se detalla en dicha
          Política.
        </p>

        <hr />

        <h2>10. Suspensión y terminación</h2>
        <p>
          BlueCode podrá suspender o terminar el acceso al Servicio, total o
          parcialmente, en caso de: incumplimiento de estos Términos, falta de
          pago, uso indebido o riesgo para la plataforma. El Cliente puede
          terminar su suscripción cancelando la renovación. A la terminación,
          cesará el acceso al Servicio y los datos podrán eliminarse conforme a
          la Política de Privacidad y a la ley.
        </p>

        <hr />

        <h2>11. Fuerza mayor</h2>
        <p>
          BlueCode no será responsable por incumplimientos o demoras causados
          por hechos fuera de su control razonable, incluyendo fallas de
          internet, de proveedores de nube, de Meta/WhatsApp, cortes de energía,
          ataques informáticos, desastres naturales o actos de autoridad.
        </p>

        <hr />

        <h2>12. Modificaciones</h2>
        <p>
          Podemos actualizar estos Términos para reflejar cambios legales,
          técnicos o del Servicio. Publicaremos la versión vigente en esta
          página con su fecha de actualización. El uso continuado del Servicio
          tras la publicación implica la aceptación de los cambios.
        </p>

        <hr />

        <h2>13. Ley aplicable y jurisdicción</h2>
        <p>
          Estos Términos se rigen por las leyes de la República de Colombia.
          Cualquier controversia que no pueda resolverse de mutuo acuerdo se
          someterá a los jueces y tribunales competentes de la ciudad de{" "}
          <strong>Cali, Valle del Cauca, Colombia</strong>, renunciando las
          partes a cualquier otro fuero que pudiera corresponderles.
        </p>

        <hr />

        <h2>14. Contacto</h2>
        <p>
          Para soporte o consultas sobre estos Términos:{" "}
          <a href="mailto:contacto@bluecodesolution.com">
            contacto@bluecodesolution.com
          </a>{" "}
          — BLUE CODE SOLUTIONS S.A.S., Cali, Colombia.
        </p>
      </section>

      <a
        href="/"
        className="mt-10 inline-flex text-sm font-semibold text-brand-primary hover:underline"
      >
        Volver a la landing
      </a>
    </main>
  );
}
