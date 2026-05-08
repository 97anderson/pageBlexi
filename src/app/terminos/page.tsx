import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones | BLEXI",
  description: "Términos y condiciones de uso de BLEXI.",
};

export default function TerminosPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        Términos y condiciones
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-textMuted">
        Última actualización: {new Date().toLocaleDateString("es-CO")}
      </p>

      <section className="prose prose-slate mt-10 max-w-3xl">
        <p>
          Estos términos regulan el acceso y uso de BLEXI (el “Servicio”).
          Al usar el Servicio aceptas estos términos. Si no estás de acuerdo, no
          lo uses.
        </p>

        <h2>1. Uso del servicio</h2>
        <ul>
          <li>Debes usar el Servicio de forma legal y responsable.</li>
          <li>
            No debes intentar vulnerar la seguridad, extraer datos sin
            autorización o interferir con el funcionamiento del Servicio.
          </li>
          <li>
            El Servicio puede cambiar, suspenderse o actualizarse para mejorar
            estabilidad, rendimiento o seguridad.
          </li>
        </ul>

        <h2>2. Contenido y datos</h2>
        <p>
          Eres responsable de la información que proporcionas (por ejemplo,
          catálogo, mensajes, precios, políticas). Recomendamos revisar el
          contenido antes de publicarlo o enviarlo a clientes.
        </p>

        <h2>3. Limitación de responsabilidad</h2>
        <p>
          BLEXI busca ayudar a automatizar atención y seguimiento, pero no
          garantiza resultados comerciales específicos. En la medida permitida
          por la ley, no seremos responsables por pérdidas indirectas, lucro
          cesante o daños derivados del uso o imposibilidad de uso del Servicio.
        </p>

        <h2>4. Soporte y contacto</h2>
        <p>
          Para soporte o solicitudes relacionadas con el Servicio puedes
          contactarnos por los canales publicados en la landing.
        </p>

        <h2>5. Cambios</h2>
        <p>
          Podemos actualizar estos términos. Si hay cambios relevantes,
          publicaremos la versión actualizada en esta página.
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
