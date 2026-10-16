import type { Metadata } from "next";

import {
  LA,
  LB,
  LInfoBox,
  LLI,
  LP,
  LUL,
  LegalSection,
  LegalShell,
} from "@/components/LegalShell";

/*
 * Instrucciones de eliminación de datos que Meta pide a la app Blexi
 * (campo «URL de instrucciones de eliminación de datos» en Configuración
 * básica del panel de apps). Meta pide que esta URL lleve «instrucciones
 * explícitas» para que el usuario borre sus datos de la app:
 * https://developers.facebook.com/documentation/development/create-an-app/app-dashboard/basic-settings
 * https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback
 * Pasos para quitar la integración, tomados de la ayuda de Facebook:
 * https://www.facebook.com/help/405094243235242
 *
 * POR CONFIRMAR CON EL DUEÑO: la Política de Privacidad no fija un número de
 * días; aquí se repite su fórmula («plazos de la ley colombiana»). Si se
 * quiere un plazo concreto, debe ir también en /privacidad y
 * /tratamiento-de-datos para que no se contradigan.
 */

export const metadata: Metadata = {
  alternates: { canonical: "/eliminacion-de-datos" },
  openGraph: { url: "/eliminacion-de-datos", siteName: "BLEXI", locale: "es_CO", type: "website" },
  title: "Eliminación de Datos | BLEXI",
  description:
    "Cómo pedir la eliminación de los datos que BLEXI guarda cuando conectas tu cuenta de Meta (WhatsApp, Facebook o Instagram) y cómo quitarle el acceso a la app desde Facebook.",
};

const CORREO = "contacto@bluecodesolution.com";

const toc = [
  { id: "alcance", label: "1. A quién aplica" },
  { id: "datos", label: "2. Qué datos guardamos" },
  { id: "solicitud", label: "3. Cómo pedir la eliminación" },
  { id: "que-se-borra", label: "4. Qué se borra y qué no" },
  { id: "clientes-finales", label: "5. Datos de tus clientes" },
  { id: "quitar-acceso", label: "6. Quitar el acceso desde Facebook" },
  { id: "mas-informacion", label: "7. Más información" },
];

export default function EliminacionDeDatosPage() {
  return (
    <LegalShell
      title="Instrucciones para eliminar tus datos"
      subtitle="Cómo pedir que BLEXI borre los datos que guarda cuando conectas tu cuenta de Meta, y cómo quitarle el acceso a la app desde Facebook."
      lastUpdated="Última actualización: 14 de octubre de 2026"
      toc={toc}
    >
      <LP>
        <LB>BLEXI</LB> es un servicio de <LB>BLUE CODE SOLUTIONS S.A.S.</LB>{" "}
        (&quot;BlueCode&quot;, &quot;nosotros&quot;). Los negocios usan la app de
        BLEXI en Meta para conectar su número de WhatsApp Business y, cuando esté
        disponible, sus páginas de Facebook o cuentas de Instagram. Esta página
        explica, paso a paso, cómo pedirnos que eliminemos esos datos. Completa
        lo dicho en nuestra{" "}
        <LA href="/privacidad">Política de Privacidad</LA> y en{" "}
        <LA href="/tratamiento-de-datos">Tratamiento de datos</LA>, conforme a
        la <LB>Ley 1581 de 2012</LB>.
      </LP>

      <div className="my-10 h-px bg-brand-border" />

      <LegalSection id="alcance" number="1" title="A quién aplica">
        <LP>
          A la persona o negocio que conectó su cuenta de Meta (Facebook,
          WhatsApp Business o Instagram) con BLEXI. Si eres cliente de un
          negocio que usa BLEXI y le escribiste por WhatsApp, mira la sección{" "}
          <LA href="#clientes-finales">5</LA>.
        </LP>
      </LegalSection>

      <LegalSection
        id="datos"
        number="2"
        title="Qué datos guardamos de la integración con Meta"
      >
        <LP>Cuando conectas tu cuenta de Meta con BLEXI guardamos:</LP>
        <LUL>
          <LLI>
            El <LB>identificador de tu cuenta de WhatsApp Business</LB> y el{" "}
            <LB>identificador del número de teléfono</LB> que conectaste.
          </LLI>
          <LLI>
            El <LB>número de WhatsApp</LB> conectado, en formato internacional.
          </LLI>
          <LLI>
            El <LB>token de acceso</LB> que Meta entrega para que BLEXI pueda
            enviar y recibir mensajes en nombre de tu negocio. Lo guardamos
            cifrado y nunca pasa por tu navegador.
          </LLI>
          <LLI>
            Cuando conectes una página de Facebook o una cuenta de Instagram
            para publicar, guardaremos del mismo modo su identificador, su
            nombre o usuario y su token de acceso cifrado, y el registro de lo
            que publiques desde BLEXI (la fecha, la red y el enlace del post).
          </LLI>
        </LUL>
        <LP>
          Además, como parte del Servicio, guardamos los datos de tu cuenta de
          BLEXI (nombre del negocio, datos de contacto y de facturación) y las
          conversaciones y pedidos de tus clientes que entran por WhatsApp, tal
          como lo describe la{" "}
          <LA href="/privacidad#datos">Política de Privacidad</LA>.
        </LP>
      </LegalSection>

      <LegalSection
        id="solicitud"
        number="3"
        title="Cómo pedir la eliminación de tus datos"
      >
        <LUL>
          <LLI>
            <LB>Paso 1.</LB> Escríbenos a{" "}
            <LA href={`mailto:${CORREO}?subject=Eliminaci%C3%B3n%20de%20datos`}>
              {CORREO}
            </LA>{" "}
            con el asunto <LB>«Eliminación de datos»</LB>.
          </LLI>
          <LLI>
            <LB>Paso 2.</LB> Incluye el nombre de tu negocio, el número de
            WhatsApp conectado y el correo con el que entras a BLEXI. Si
            puedes, escribe desde ese mismo correo: nos ayuda a comprobar que la
            solicitud la hace el titular de la cuenta.
          </LLI>
          <LLI>
            <LB>Paso 3.</LB> Dinos qué quieres borrar: solo la conexión con
            Meta (identificadores y tokens) o todos los datos de tu cuenta.
          </LLI>
          <LLI>
            <LB>Paso 4.</LB> Atenderemos tu solicitud dentro de los plazos
            establecidos por la ley colombiana y te confirmaremos por correo
            cuando los datos se hayan eliminado o anonimizado.
          </LLI>
        </LUL>
        <LInfoBox>
          Pedir la eliminación es gratuito. Si borras la conexión con Meta, BLEXI
          deja de enviar y recibir mensajes por tu número de WhatsApp hasta que
          lo vuelvas a conectar.
        </LInfoBox>
      </LegalSection>

      <LegalSection id="que-se-borra" number="4" title="Qué se borra y qué no">
        <LP>
          Eliminamos o anonimizamos de forma segura los datos que pidas borrar.
          Solo conservamos lo que una obligación legal nos exija guardar (por
          ejemplo, la información de facturación), durante el tiempo que esa
          obligación lo exija, como lo indica la{" "}
          <LA href="/privacidad#conservacion">Política de Privacidad</LA>.
        </LP>
        <LP>
          Meta guarda sus propios datos sobre tu cuenta según sus políticas.
          Borrar tus datos en BLEXI no borra lo que guarda Meta, ni al revés.
        </LP>
      </LegalSection>

      <LegalSection
        id="clientes-finales"
        number="5"
        title="Datos de los clientes de tu negocio"
      >
        <LP>
          Los datos de las personas que escriben a tu negocio por WhatsApp
          (número, nombre de perfil, mensajes, pedidos) los trata BLEXI{" "}
          <LB>por cuenta de tu negocio</LB>. Tu negocio es el{" "}
          <LB>responsable</LB> de esos datos y BlueCode es el{" "}
          <LB>encargado</LB>.
        </LP>
        <LUL>
          <LLI>
            <LB>Si eres el negocio:</LB> puedes eliminar registros de tus
            clientes desde tu panel de BLEXI. Para lo que requiera nuestra
            ayuda, o para borrar todos los datos de tus clientes al terminar el
            servicio, escríbenos al correo de la sección 3.
          </LLI>
          <LLI>
            <LB>Si eres cliente de un negocio que usa BLEXI:</LB> pide la
            eliminación directamente a ese negocio, o escríbenos a{" "}
            <LA href={`mailto:${CORREO}`}>{CORREO}</LA> indicando el negocio y
            tu número, y canalizaremos tu solicitud hacia él.
          </LLI>
        </LUL>
      </LegalSection>

      <LegalSection
        id="quitar-acceso"
        number="6"
        title="Cómo quitarle el acceso a BLEXI desde Facebook"
      >
        <LP>
          Puedes quitarle a la app de BLEXI el acceso a tu cuenta en cualquier
          momento, desde tu perfil personal de Facebook (la persona que hizo la
          conexión):
        </LP>
        <LUL>
          <LLI>
            <LB>Paso 1.</LB> Haz clic en tu foto del perfil, en la parte
            superior derecha de Facebook.
          </LLI>
          <LLI>
            <LB>Paso 2.</LB> Entra a <LB>Configuración y privacidad</LB> y
            luego a <LB>Configuración</LB>.
          </LLI>
          <LLI>
            <LB>Paso 3.</LB> En el menú, abre{" "}
            <LB>Integraciones comerciales</LB>.
          </LLI>
          <LLI>
            <LB>Paso 4.</LB> Selecciona la integración de <LB>BLEXI</LB>, haz clic en{" "}
            <LB>Eliminar</LB> y confirma con <LB>Eliminar</LB>.
          </LLI>
        </LUL>
        <LInfoBox>
          Quitar el acceso impide que BLEXI siga usando tu cuenta de Meta, pero
          no borra los datos que ya guardamos. Para eso, sigue la{" "}
          <LA href="#solicitud">sección 3</LA>. Los pasos son los que publica la{" "}
          <LA href="https://www.facebook.com/help/405094243235242" external>
            ayuda de Facebook
          </LA>
          ; si Meta cambia los nombres de los menús, ahí estarán los vigentes.
        </LInfoBox>
      </LegalSection>

      <LegalSection id="mas-informacion" number="7" title="Más información" last>
        <LP>
          Para conocer todos tus derechos como titular (conocer, actualizar,
          rectificar, suprimir tus datos y revocar la autorización) y cómo
          ejercerlos, consulta la{" "}
          <LA href="/privacidad#derechos">Política de Privacidad</LA>. Si
          consideras que no atendimos bien tu solicitud, puedes presentar una
          queja ante la Superintendencia de Industria y Comercio (SIC).
        </LP>
      </LegalSection>
    </LegalShell>
  );
}
