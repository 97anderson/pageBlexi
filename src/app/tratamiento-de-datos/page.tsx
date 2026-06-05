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
  title: "Tratamiento de Datos | BLEXI",
  description:
    "Información sobre tratamiento de datos personales en BLEXI — roles, finalidades, seguridad y derechos de los titulares.",
};

const toc = [
  { id: "roles", label: "1. Roles en el tratamiento" },
  { id: "datos-tratados", label: "2. Datos tratados por cuenta del negocio" },
  { id: "finalidades", label: "3. Finalidades del tratamiento" },
  { id: "whatsapp-meta", label: "4. WhatsApp Business y Meta" },
  { id: "terceros", label: "5. Compartición con terceros" },
  { id: "transferencias", label: "6. Transferencias internacionales" },
  { id: "conservacion", label: "7. Conservación y eliminación" },
  { id: "seguridad", label: "8. Seguridad" },
  { id: "derechos", label: "9. Derechos de los titulares" },
  { id: "ley", label: "10. Ley aplicable" },
];

export default function TratamientoDeDatosPage() {
  return (
    <LegalShell
      title="Tratamiento de datos personales"
      subtitle="Información para los negocios que usan BLEXI y para los usuarios finales que interactúan por WhatsApp — roles, finalidades y cómo ejercer derechos."
      lastUpdated="Última actualización: 1 de junio de 2026"
      toc={toc}
    >
      <LP>
        Esta página amplía nuestra{" "}
        <LA href="/privacidad">Política de Privacidad</LA> con información
        específica para los <LB>negocios que usan BLEXI</LB> y para los{" "}
        <LB>usuarios finales</LB> que interactúan por WhatsApp con esos
        negocios. Si eres un negocio cliente, aquí encontrarás cómo tratamos los
        datos de tus clientes, cuáles son tus responsabilidades y cómo atender
        las solicitudes de tus titulares.
      </LP>

      <div className="my-10 h-px bg-brand-border" />

      <LegalSection id="roles" number="1" title="Roles en el tratamiento">
        <LP>
          Cuando contratas BLEXI para atender a tus clientes por WhatsApp, se
          establecen dos roles diferenciados conforme a la Ley 1581 de 2012:
        </LP>
        <LUL>
          <LLI>
            <LB>Tú (el negocio) como Responsable.</LB> Decides los fines y
            medios del tratamiento de los datos de tus propios clientes
            (usuarios finales). Eres quien tiene la relación directa con ellos y
            quien debe obtener las autorizaciones necesarias.
          </LLI>
          <LLI>
            <LB>BLEXI (BLUE CODE SOLUTIONS S.A.S.) como Encargado.</LB> Tratamos
            los datos de tus clientes únicamente para prestarte el Servicio,
            siguiendo tus instrucciones y sin usarlos para fines propios. No
            vendemos ni cedemos esos datos a terceros con fines comerciales no
            autorizados.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="datos-tratados"
        number="2"
        title="Datos tratados por cuenta del negocio"
      >
        <LP>
          Para prestar el Servicio, BLEXI trata, por cuenta del negocio cliente,
          los siguientes datos de los usuarios finales:
        </LP>
        <LUL>
          <LLI>Número de teléfono de WhatsApp y nombre de perfil.</LLI>
          <LLI>
            Contenido de las conversaciones (texto, audio e imágenes que el
            usuario comparte en el chat).
          </LLI>
          <LLI>
            Información de pedidos, citas o solicitudes registradas durante la
            conversación.
          </LLI>
          <LLI>
            Historial de interacciones almacenado en el CRM del negocio dentro
            de BLEXI.
          </LLI>
        </LUL>
        <LP>
          El negocio debe abstenerse de solicitar o de permitir que sus clientes
          compartan <LB>datos sensibles</LB> (salud, biometría, creencias, etc.)
          a través de los canales de BLEXI, ya que el Servicio no está diseñado
          para tratar esa categoría de datos.
        </LP>
      </LegalSection>

      <LegalSection id="finalidades" number="3" title="Finalidades del tratamiento">
        <LP>
          Los datos tratados por cuenta del negocio se usan exclusivamente para:
        </LP>
        <LUL>
          <LLI>
            Operar el agente de IA y el CRM para la atención al cliente por
            WhatsApp.
          </LLI>
          <LLI>
            Registrar pedidos, citas y el historial de conversación en el
            dashboard del negocio.
          </LLI>
          <LLI>
            Generar métricas e informes de operación para el negocio (de forma
            agregada o individualizada, según la configuración).
          </LLI>
          <LLI>
            Cumplir con las obligaciones legales aplicables y prevenir fraude o
            abuso en el Servicio.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="whatsapp-meta"
        number="4"
        title="Integración con WhatsApp Business y Meta"
      >
        <LP>
          BLEXI opera sobre la{" "}
          <LB>Plataforma de WhatsApp Business API</LB> de Meta Platforms, Inc.
          (&quot;Meta&quot;). Esto implica:
        </LP>
        <LUL>
          <LLI>
            Los mensajes se transmiten a través de la infraestructura de Meta.
            Tanto el negocio como sus usuarios finales están sujetos a los
            Términos de Servicio y la Política de Privacidad de WhatsApp.
          </LLI>
          <LLI>
            BLEXI no utiliza los datos de la plataforma de WhatsApp para
            publicidad propia ni los transfiere a terceros con fines comerciales
            no relacionados con el Servicio.
          </LLI>
          <LLI>
            El negocio es responsable de informar a sus clientes que la atención
            se presta mediante un agente automatizado integrado con WhatsApp
            Business, y de obtener las autorizaciones que la ley exija.
          </LLI>
          <LLI>
            Meta puede tratar determinados datos de mensajería conforme a sus
            propias políticas. Consulta{" "}
            <LA href="https://www.whatsapp.com/legal/privacy-policy" external>
              whatsapp.com/legal/privacy-policy
            </LA>
            .
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection id="terceros" number="5" title="Compartición con terceros">
        <LP>
          Para prestar el Servicio, BLEXI puede involucrar a los siguientes
          terceros como sub-encargados, siempre bajo acuerdos de
          confidencialidad y limitando el uso de los datos a la finalidad del
          Servicio:
        </LP>
        <LUL>
          <LLI>
            <LB>Proveedores de infraestructura y nube</LB> (hosting, cómputo y
            almacenamiento).
          </LLI>
          <LLI>
            <LB>Proveedores de modelos de inteligencia artificial</LB>, para
            generar las respuestas del agente.
          </LLI>
          <LLI>
            <LB>Meta / WhatsApp</LB>, como plataforma de mensajería.
          </LLI>
          <LLI>
            <LB>Autoridades colombianas o internacionales</LB>, cuando exista
            una obligación legal o requerimiento válido.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="transferencias"
        number="6"
        title="Transferencias internacionales"
      >
        <LP>
          Algunos proveedores de infraestructura o de modelos de IA pueden estar
          ubicados fuera de Colombia. BLEXI adopta medidas contractuales de
          confidencialidad y seguridad para que estas transferencias cumplan con
          la normativa colombiana de protección de datos personales.
        </LP>
      </LegalSection>

      <LegalSection
        id="conservacion"
        number="7"
        title="Conservación y eliminación"
      >
        <LP>
          Conservamos los datos tratados por cuenta del negocio durante la
          vigencia del contrato de servicio y el tiempo adicional que exijan las
          obligaciones legales aplicables. Al terminar la relación contractual,
          el negocio puede solicitar la eliminación de sus datos y los de sus
          clientes escribiendo a{" "}
          <LA href="mailto:contacto@bluecodesolution.com">
            contacto@bluecodesolution.com
          </LA>
          . Procederemos a eliminarlos o anonimizarlos de forma segura en los
          plazos establecidos.
        </LP>
      </LegalSection>

      <LegalSection id="seguridad" number="8" title="Seguridad">
        <LP>
          BLEXI implementa medidas técnicas y organizativas razonables para
          proteger los datos contra acceso no autorizado, pérdida, alteración o
          divulgación, incluyendo:
        </LP>
        <LUL>
          <LLI>Controles de acceso por roles y autenticación.</LLI>
          <LLI>Cifrado de datos en tránsito (TLS).</LLI>
          <LLI>Monitoreo y auditoría de actividad en la infraestructura.</LLI>
          <LLI>Prácticas de desarrollo seguro.</LLI>
        </LUL>
        <LP>
          Te recomendamos también limitar los accesos internos a tu dashboard de
          BLEXI y evitar que tus clientes compartan datos sensibles o financieros
          innecesarios a través del chat.
        </LP>
      </LegalSection>

      <LegalSection
        id="derechos"
        number="9"
        title="Derechos de los titulares (Habeas Data)"
      >
        <LP>
          Conforme a la Ley 1581 de 2012, tus clientes (usuarios finales) tienen
          derecho a conocer, actualizar, rectificar, suprimir sus datos y revocar
          la autorización de tratamiento, entre otros. Como negocio responsable,
          debes garantizar que puedan ejercer estos derechos.
        </LP>
        <LP>
          Si un usuario final solicita el ejercicio de alguno de estos derechos
          en relación con datos tratados por BLEXI:
        </LP>
        <LUL>
          <LLI>
            Puedes gestionar directamente la solicitud desde tu dashboard (por
            ejemplo, actualizando o eliminando registros del CRM).
          </LLI>
          <LLI>
            Para operaciones que requieran soporte de BLEXI, escríbenos a{" "}
            <LA href="mailto:contacto@bluecodesolution.com">
              contacto@bluecodesolution.com
            </LA>{" "}
            y gestionaremos la solicitud conforme a tus instrucciones y a la
            ley, dentro de los plazos legales establecidos.
          </LLI>
        </LUL>
        <LP>
          Si eres un usuario final y tus datos fueron tratados por cuenta de un
          negocio que usa BLEXI, puedes dirigir tu solicitud directamente al
          negocio o contactarnos para que canalicemos tu petición.
        </LP>
      </LegalSection>

      <LegalSection id="ley" number="10" title="Ley aplicable" last>
        <LP>
          Este documento se rige por las leyes de la República de Colombia, en
          particular la <LB>Ley 1581 de 2012</LB> y el{" "}
          <LB>Decreto 1377 de 2013</LB>. Para consultar la política completa de
          privacidad de BLEXI visita{" "}
          <LA href="/privacidad">soyblexi.com/privacidad</LA>.
        </LP>
      </LegalSection>
    </LegalShell>
  );
}
