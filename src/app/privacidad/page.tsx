import type { Metadata } from "next";

import {
  LA,
  LB,
  LCode,
  LInfoBox,
  LLI,
  LP,
  LUL,
  LegalSection,
  LegalShell,
} from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de Privacidad | BLEXI",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de BLEXI — BLUE CODE SOLUTIONS S.A.S.",
};

const toc = [
  { id: "responsable", label: "1. Responsable del tratamiento" },
  { id: "doble-rol", label: "2. Nuestro doble rol" },
  { id: "datos", label: "3. Datos que recopilamos" },
  { id: "finalidades", label: "4. Finalidades del tratamiento" },
  { id: "whatsapp-meta", label: "5. WhatsApp y Meta" },
  { id: "terceros", label: "6. Compartición con terceros" },
  { id: "transferencias", label: "7. Transferencias internacionales" },
  { id: "conservacion", label: "8. Conservación" },
  { id: "seguridad", label: "9. Seguridad" },
  { id: "derechos", label: "10. Tus derechos (Habeas Data)" },
  { id: "ejercer-derechos", label: "11. Cómo ejercer tus derechos" },
  { id: "menores", label: "12. Menores de edad" },
  { id: "cookies", label: "13. Cookies" },
  { id: "cambios", label: "14. Cambios a esta Política" },
  { id: "ley", label: "15. Ley aplicable" },
];

export default function PrivacidadPage() {
  return (
    <LegalShell
      title="Política de Privacidad y Tratamiento de Datos Personales"
      subtitle="Cómo BLUE CODE SOLUTIONS S.A.S. recopila, usa, comparte y protege los datos personales en el Servicio BLEXI."
      lastUpdated="Última actualización: 1 de junio de 2026"
      toc={toc}
    >
      <LP>
        Esta Política explica cómo <LB>BLUE CODE SOLUTIONS S.A.S.</LB>{" "}
        (&quot;BlueCode&quot;, &quot;nosotros&quot;), responsable del producto{" "}
        <LB>BLEXI</LB> (&quot;el Servicio&quot;), recopila, usa, comparte y
        protege los datos personales que se tratan cuando visitas nuestros sitios
        web (<LCode>soyblexi.com</LCode> y <LCode>bluecodesolution.com</LCode>),
        contratas el Servicio, o interactúas por WhatsApp con un negocio que
        utiliza BLEXI.
      </LP>
      <LP>
        Tratamos los datos personales conforme a la{" "}
        <LB>Ley 1581 de 2012</LB>, el <LB>Decreto 1377 de 2013</LB> y demás
        normas colombianas aplicables sobre protección de datos personales
        (Habeas Data), así como a las políticas y términos de la{" "}
        <LB>Plataforma de WhatsApp Business de Meta</LB>.
      </LP>

      <div className="my-10 h-px bg-brand-border" />

      <LegalSection id="responsable" number="1" title="Responsable del tratamiento">
        <LUL>
          <LLI>
            <LB>Razón social:</LB> BLUE CODE SOLUTIONS S.A.S.
          </LLI>
          <LLI>
            <LB>NIT:</LB> 901.954.333-1
          </LLI>
          <LLI>
            <LB>Domicilio:</LB> Av. 6 Norte 47 N 38, Ap. 308, Cali, Valle del
            Cauca, Colombia
          </LLI>
          <LLI>
            <LB>Correo para temas de datos:</LB>{" "}
            <LA href="mailto:contacto@bluecodesolution.com">
              contacto@bluecodesolution.com
            </LA>
          </LLI>
          <LLI>
            <LB>Sitios web:</LB>{" "}
            <LA href="https://soyblexi.com" external>
              soyblexi.com
            </LA>{" "}
            ·{" "}
            <LA href="https://bluecodesolution.com" external>
              bluecodesolution.com
            </LA>
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="doble-rol"
        number="2"
        title="Nuestro doble rol: responsable y encargado"
      >
        <LP>
          Es importante distinguir dos situaciones, porque determinan quién
          decide sobre tus datos:
        </LP>
        <LInfoBox>
          <p className="font-semibold text-brand-textDark">
            a) BlueCode como Responsable
          </p>
          <p className="mt-1">
            Cuando tratamos datos de visitantes de nuestros sitios web y de las
            personas o empresas que contratan o consultan por BLEXI (datos de
            contacto comerciales, información de la cuenta, facturación),
            BlueCode es el <LB>responsable</LB> del tratamiento.
          </p>
        </LInfoBox>
        <LInfoBox>
          <p className="font-semibold text-brand-textDark">
            b) BlueCode como Encargado
          </p>
          <p className="mt-1">
            Cuando un negocio (nuestro cliente) usa BLEXI para atender a sus
            propios clientes por WhatsApp, los datos de esos usuarios finales
            (mensajes, número de teléfono, pedidos) son tratados por BLEXI{" "}
            <LB>por cuenta y bajo las instrucciones de ese negocio</LB>, que
            actúa como responsable. En ese escenario, BlueCode es un{" "}
            <LB>encargado del tratamiento</LB>: solo procesamos esos datos para
            prestar el Servicio al negocio, no para fines propios.
          </p>
        </LInfoBox>
        <LP>
          Si eres un usuario final y deseas ejercer derechos sobre tus datos,
          puedes dirigirte al negocio con el que conversaste o escribirnos para
          que canalicemos tu solicitud.
        </LP>
      </LegalSection>

      <LegalSection id="datos" number="3" title="Datos que recopilamos">
        <LP>
          <LB>De visitantes del sitio web:</LB> datos de navegación básicos
          (páginas vistas, dispositivo, datos analíticos y de seguridad) y la
          información que nos envíes voluntariamente en formularios de contacto
          (nombre, correo, teléfono, mensaje).
        </LP>
        <LP>
          <LB>De clientes del Servicio (negocios):</LB> datos de contacto y de
          la cuenta, nombre del negocio, datos de facturación y pago,
          configuración del agente, catálogo de productos o servicios e
          información necesaria para operar BLEXI.
        </LP>
        <LP>
          <LB>
            De usuarios finales que escriben por WhatsApp a un negocio que usa
            BLEXI
          </LB>{" "}
          (tratados como encargado, por cuenta del negocio): número de teléfono
          de WhatsApp, nombre de perfil, contenido de los mensajes (texto, audio,
          imágenes), e información de pedidos, citas o solicitudes que el usuario
          comparta en la conversación.
        </LP>
        <LP>
          No solicitamos ni requerimos datos sensibles para prestar el Servicio.
          Te pedimos no compartir datos sensibles a través de los canales de
          BLEXI.
        </LP>
      </LegalSection>

      <LegalSection id="finalidades" number="4" title="Finalidades del tratamiento">
        <LP>Usamos los datos para:</LP>
        <LUL>
          <LLI>Prestar, configurar, operar y mejorar el Servicio.</LLI>
          <LLI>
            Permitir que los negocios atiendan a sus clientes por WhatsApp
            mediante el agente de IA y el CRM.
          </LLI>
          <LLI>
            Responder solicitudes, brindar soporte y comunicarnos contigo.
          </LLI>
          <LLI>
            Gestionar la relación contractual, la facturación y los pagos.
          </LLI>
          <LLI>
            Cumplir obligaciones legales y prevenir fraude, abuso y amenazas de
            seguridad.
          </LLI>
          <LLI>
            Generar estadísticas y análisis agregados para mejorar el producto.
          </LLI>
        </LUL>
        <LP>
          No vendemos datos personales, ni los usamos para fines distintos a los
          aquí descritos o a los instruidos por el negocio cliente.
        </LP>
      </LegalSection>

      <LegalSection id="whatsapp-meta" number="5" title="WhatsApp y Meta">
        <LP>
          BLEXI se integra con la <LB>Plataforma de WhatsApp Business</LB> a
          través de la API de Meta Platforms, Inc. (&quot;Meta&quot;). Al usar la
          integración:
        </LP>
        <LUL>
          <LLI>
            Tratamos los datos de la plataforma de WhatsApp únicamente para
            prestar el Servicio y conforme a los términos y políticas de Meta y
            de WhatsApp.
          </LLI>
          <LLI>
            No usamos los datos obtenidos a través de la plataforma de WhatsApp
            para fines de publicidad propia, ni los vendemos o cedemos a terceros
            con fines comerciales no autorizados.
          </LLI>
          <LLI>
            El contenido de los mensajes se procesa para generar las respuestas
            del agente y registrar la operación del negocio en el CRM, según la
            configuración del negocio cliente.
          </LLI>
          <LLI>
            Meta trata determinados datos como parte de la operación de WhatsApp
            conforme a sus propias políticas de privacidad, sobre las que te
            recomendamos informarte.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection id="terceros" number="6" title="Compartición con terceros">
        <LP>
          Compartimos datos solo en la medida necesaria para operar el Servicio,
          con:
        </LP>
        <LUL>
          <LLI>
            <LB>Proveedores de infraestructura y nube</LB> (servicios de hosting
            y cómputo) que almacenan y procesan datos bajo nuestras
            instrucciones.
          </LLI>
          <LLI>
            <LB>Meta / WhatsApp</LB>, como plataforma de mensajería.
          </LLI>
          <LLI>
            <LB>Proveedores de modelos de inteligencia artificial</LB>, para
            generar las respuestas del agente, bajo acuerdos que limitan el uso
            de los datos a la prestación del Servicio.
          </LLI>
          <LLI>
            <LB>Pasarelas de pago</LB>, que tratan los datos estrictamente
            necesarios para la transacción.
          </LLI>
          <LLI>
            <LB>Autoridades</LB>, cuando exista una obligación legal o
            requerimiento válido.
          </LLI>
        </LUL>
        <LP>
          Todos los terceros que actúan como encargados están obligados
          contractualmente a confidencialidad y a tratar los datos solo conforme
          a nuestras instrucciones y a la ley.
        </LP>
      </LegalSection>

      <LegalSection
        id="transferencias"
        number="7"
        title="Transferencias internacionales"
      >
        <LP>
          Algunos de nuestros proveedores pueden estar ubicados fuera de
          Colombia. Cuando esto ocurre, adoptamos medidas para que la
          transferencia cumpla con la normativa colombiana de protección de datos
          y con compromisos contractuales de confidencialidad y seguridad
          adecuados.
        </LP>
      </LegalSection>

      <LegalSection id="conservacion" number="8" title="Conservación">
        <LP>
          Conservamos los datos durante el tiempo necesario para cumplir las
          finalidades descritas, la relación contractual y las obligaciones
          legales aplicables. Cuando dejan de ser necesarios, los eliminamos o
          anonimizamos de forma segura. Los negocios clientes pueden solicitar la
          eliminación de los datos tratados por su cuenta al terminar el
          servicio.
        </LP>
      </LegalSection>

      <LegalSection id="seguridad" number="9" title="Seguridad">
        <LP>
          Aplicamos medidas técnicas y organizativas razonables para proteger los
          datos contra acceso no autorizado, pérdida, alteración o divulgación,
          incluyendo controles de acceso, cifrado en tránsito y prácticas de
          seguridad en nuestra infraestructura. Ningún sistema es completamente
          infalible, pero trabajamos para mantener un nivel de protección
          apropiado al riesgo.
        </LP>
      </LegalSection>

      <LegalSection
        id="derechos"
        number="10"
        title="Tus derechos como titular (Habeas Data)"
      >
        <LP>
          Conforme a la Ley 1581 de 2012, como titular de datos personales
          tienes derecho a:
        </LP>
        <LUL>
          <LLI>
            <LB>Conocer, actualizar y rectificar</LB> tus datos.
          </LLI>
          <LLI>
            <LB>Solicitar prueba</LB> de la autorización otorgada.
          </LLI>
          <LLI>
            <LB>Ser informado</LB> sobre el uso que se ha dado a tus datos.
          </LLI>
          <LLI>
            <LB>Presentar quejas</LB> ante la Superintendencia de Industria y
            Comercio (SIC) por infracciones.
          </LLI>
          <LLI>
            <LB>Revocar la autorización</LB> y/o{" "}
            <LB>solicitar la supresión</LB> de tus datos cuando proceda.
          </LLI>
          <LLI>
            <LB>Acceder de forma gratuita</LB> a tus datos personales.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="ejercer-derechos"
        number="11"
        title="Cómo ejercer tus derechos"
      >
        <LP>
          Puedes ejercer tus derechos enviando una solicitud a{" "}
          <LA href="mailto:contacto@bluecodesolution.com">
            contacto@bluecodesolution.com
          </LA>
          , indicando tu nombre, el derecho que deseas ejercer y la información
          que permita atender tu petición. Responderemos dentro de los plazos
          establecidos por la ley colombiana.
        </LP>
        <LP>
          Si eres un usuario final y tus datos fueron tratados por cuenta de un
          negocio que usa BLEXI, canalizaremos tu solicitud hacia el responsable
          correspondiente o te orientaremos para ejercerla.
        </LP>
      </LegalSection>

      <LegalSection id="menores" number="12" title="Menores de edad">
        <LP>
          El Servicio no está dirigido a menores de edad. No recopilamos
          conscientemente datos de menores sin la autorización de sus
          representantes legales. Si detectamos un tratamiento de este tipo sin
          autorización válida, procederemos a su supresión.
        </LP>
      </LegalSection>

      <LegalSection
        id="cookies"
        number="13"
        title="Cookies y tecnologías similares"
      >
        <LP>
          En nuestros sitios web podemos usar cookies y tecnologías análogas para
          funcionamiento, seguridad y analítica. Puedes configurar tu navegador
          para gestionarlas o rechazarlas; algunas funciones podrían verse
          afectadas.
        </LP>
      </LegalSection>

      <LegalSection id="cambios" number="14" title="Cambios a esta Política">
        <LP>
          Podemos actualizar esta Política para reflejar cambios legales, técnicos
          o del Servicio. Publicaremos la versión vigente en esta página con su
          fecha de actualización. El uso continuado del Servicio tras la
          publicación implica la aceptación de los cambios.
        </LP>
      </LegalSection>

      <LegalSection id="ley" number="15" title="Ley aplicable" last>
        <LP>
          Esta Política se rige por las leyes de la República de Colombia, en
          particular la <LB>Ley 1581 de 2012</LB> y el{" "}
          <LB>Decreto 1377 de 2013</LB>.
        </LP>
      </LegalSection>
    </LegalShell>
  );
}
