import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamiento de Datos | BLEXI",
  description:
    "Información sobre tratamiento de datos personales en BLEXI — roles, finalidades, seguridad y derechos de los titulares.",
};

export default function TratamientoDeDatosPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        Tratamiento de datos personales
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-textMuted">
        Última actualización: 1 de junio de 2026
      </p>

      <section className="prose prose-slate mt-10 max-w-3xl">
        <p>
          Esta página amplía nuestra{" "}
          <a href="/privacidad">Política de Privacidad</a> con información
          específica para los <strong>negocios que usan BLEXI</strong> y para
          los <strong>usuarios finales</strong> que interactúan por WhatsApp con
          esos negocios. Si eres un negocio cliente, aquí encontrarás cómo
          tratamos los datos de tus clientes, cuáles son tus
          responsabilidades y cómo atender las solicitudes de tus titulares.
        </p>

        <hr />

        <h2>1. Roles en el tratamiento</h2>
        <p>
          Cuando contratas BLEXI para atender a tus clientes por WhatsApp, se
          establecen dos roles diferenciados conforme a la Ley 1581 de 2012:
        </p>
        <ul>
          <li>
            <strong>Tú (el negocio) como Responsable.</strong> Decides los
            fines y medios del tratamiento de los datos de tus propios clientes
            (usuarios finales). Eres quien tiene la relación directa con ellos
            y quien debe obtener las autorizaciones necesarias.
          </li>
          <li>
            <strong>BLEXI (BLUE CODE SOLUTIONS S.A.S.) como Encargado.</strong>{" "}
            Tratamos los datos de tus clientes únicamente para prestarte el
            Servicio, siguiendo tus instrucciones y sin usarlos para fines
            propios. No vendemos ni cedemos esos datos a terceros con fines
            comerciales no autorizados.
          </li>
        </ul>

        <hr />

        <h2>2. Datos tratados por cuenta del negocio</h2>
        <p>
          Para prestar el Servicio, BLEXI trata, por cuenta del negocio
          cliente, los siguientes datos de los usuarios finales:
        </p>
        <ul>
          <li>Número de teléfono de WhatsApp y nombre de perfil.</li>
          <li>
            Contenido de las conversaciones (texto, audio e imágenes que el
            usuario comparte en el chat).
          </li>
          <li>
            Información de pedidos, citas o solicitudes registradas durante la
            conversación.
          </li>
          <li>
            Historial de interacciones almacenado en el CRM del negocio dentro
            de BLEXI.
          </li>
        </ul>
        <p>
          El negocio debe abstenerse de solicitar o de permitir que sus
          clientes compartan datos sensibles (salud, biometría, creencias, etc.)
          a través de los canales de BLEXI, ya que el Servicio no está diseñado
          para tratar esa categoría de datos.
        </p>

        <hr />

        <h2>3. Finalidades del tratamiento</h2>
        <p>
          Los datos tratados por cuenta del negocio se usan exclusivamente para:
        </p>
        <ul>
          <li>
            Operar el agente de IA y el CRM para la atención al cliente por
            WhatsApp.
          </li>
          <li>
            Registrar pedidos, citas y el historial de conversación en el
            dashboard del negocio.
          </li>
          <li>
            Generar métricas e informes de operación para el negocio (de forma
            agregada o individualizada, según la configuración).
          </li>
          <li>
            Cumplir con las obligaciones legales aplicables y prevenir fraude o
            abuso en el Servicio.
          </li>
        </ul>

        <hr />

        <h2>4. Integración con WhatsApp Business y Meta</h2>
        <p>
          BLEXI opera sobre la{" "}
          <strong>Plataforma de WhatsApp Business API</strong> de Meta
          Platforms, Inc. (&quot;Meta&quot;). Esto implica:
        </p>
        <ul>
          <li>
            Los mensajes se transmiten a través de la infraestructura de Meta.
            Tanto el negocio como sus usuarios finales están sujetos a los
            Términos de Servicio y la Política de Privacidad de WhatsApp.
          </li>
          <li>
            BLEXI no utiliza los datos de la plataforma de WhatsApp para
            publicidad propia ni los transfiere a terceros con fines
            comerciales no relacionados con el Servicio.
          </li>
          <li>
            El negocio es responsable de informar a sus clientes que la
            atención se presta mediante un agente automatizado integrado con
            WhatsApp Business y de obtener las autorizaciones que la ley
            exija.
          </li>
          <li>
            Meta puede tratar determinados datos de mensajería conforme a sus
            propias políticas, sobre las que te recomendamos informarte en{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>

        <hr />

        <h2>5. Compartición con terceros</h2>
        <p>
          Para prestar el Servicio, BLEXI puede involucrar a los siguientes
          terceros como sub-encargados, siempre bajo acuerdos de
          confidencialidad y limitando el uso de los datos a la finalidad del
          Servicio:
        </p>
        <ul>
          <li>
            <strong>Proveedores de infraestructura y nube</strong> (hosting,
            cómputo y almacenamiento).
          </li>
          <li>
            <strong>Proveedores de modelos de inteligencia artificial</strong>,
            para generar las respuestas del agente.
          </li>
          <li>
            <strong>Meta / WhatsApp</strong>, como plataforma de mensajería.
          </li>
          <li>
            <strong>Autoridades colombianas o internacionales</strong>, cuando
            exista una obligación legal o requerimiento válido.
          </li>
        </ul>

        <hr />

        <h2>6. Transferencias internacionales</h2>
        <p>
          Algunos proveedores de infraestructura o de modelos de IA pueden
          estar ubicados fuera de Colombia. BLEXI adopta medidas contractuales
          de confidencialidad y seguridad para que estas transferencias cumplan
          con la normativa colombiana de protección de datos personales.
        </p>

        <hr />

        <h2>7. Conservación y eliminación</h2>
        <p>
          Conservamos los datos tratados por cuenta del negocio durante la
          vigencia del contrato de servicio y el tiempo adicional que exijan
          las obligaciones legales aplicables. Al terminar la relación
          contractual, el negocio puede solicitar la eliminación de sus datos y
          los de sus clientes escribiendo a{" "}
          <a href="mailto:contacto@bluecodesolution.com">
            contacto@bluecodesolution.com
          </a>
          . Procederemos a eliminarlos o anonimizarlos de forma segura en los
          plazos establecidos.
        </p>

        <hr />

        <h2>8. Seguridad</h2>
        <p>
          BLEXI implementa medidas técnicas y organizativas razonables para
          proteger los datos contra acceso no autorizado, pérdida, alteración o
          divulgación, incluyendo:
        </p>
        <ul>
          <li>Controles de acceso por roles y autenticación.</li>
          <li>Cifrado de datos en tránsito (TLS).</li>
          <li>Monitoreo y auditoría de actividad en la infraestructura.</li>
          <li>Prácticas de desarrollo seguro.</li>
        </ul>
        <p>
          Te recomendamos también limitar los accesos internos a tu dashboard
          de BLEXI y evitar que tus clientes compartan datos sensibles o
          financieros innecesarios a través del chat.
        </p>

        <hr />

        <h2>9. Derechos de los titulares (Habeas Data)</h2>
        <p>
          Conforme a la Ley 1581 de 2012, tus clientes (usuarios finales) tienen
          derecho a conocer, actualizar, rectificar, suprimir sus datos y
          revocar la autorización de tratamiento, entre otros. Como negocio
          responsable, debes garantizar que puedan ejercer estos derechos.
        </p>
        <p>
          Si un usuario final solicita el ejercicio de alguno de estos derechos
          en relación con datos tratados por BLEXI:
        </p>
        <ul>
          <li>
            Puedes gestionar directamente la solicitud desde tu dashboard (por
            ejemplo, actualizando o eliminando registros del CRM).
          </li>
          <li>
            Para operaciones que requieran soporte de BLEXI, escríbenos a{" "}
            <a href="mailto:contacto@bluecodesolution.com">
              contacto@bluecodesolution.com
            </a>{" "}
            y gestionaremos la solicitud conforme a tus instrucciones y a la
            ley, dentro de los plazos legales establecidos.
          </li>
        </ul>
        <p>
          Si eres un usuario final y tus datos fueron tratados por cuenta de un
          negocio que usa BLEXI, puedes dirigir tu solicitud directamente al
          negocio o contactarnos para que canalicemos tu petición.
        </p>

        <hr />

        <h2>10. Ley aplicable</h2>
        <p>
          Este documento se rige por las leyes de la República de Colombia, en
          particular la Ley 1581 de 2012 y el Decreto 1377 de 2013. Para
          consultar la política completa de privacidad de BLEXI visita{" "}
          <a href="/privacidad">soyblexi.com/privacidad</a>.
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
