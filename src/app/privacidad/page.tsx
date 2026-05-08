import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | BLEXI",
  description: "Política de privacidad de BLEXI.",
};

export default function PrivacidadPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        Política de privacidad
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-textMuted">
        Última actualización: {new Date().toLocaleDateString("es-CO")}
      </p>

      <section className="prose prose-slate mt-10 max-w-3xl">
        <p>
          Esta política explica cómo tratamos información cuando visitas la
          landing o usas BLEXI.
        </p>

        <h2>1. Qué datos podemos recopilar</h2>
        <ul>
          <li>
            Datos de contacto que nos compartas (por ejemplo, nombre, teléfono o
            correo).
          </li>
          <li>
            Datos de uso básicos (por ejemplo, páginas visitadas) para mejorar
            experiencia y seguridad.
          </li>
          <li>
            Información necesaria para configurar el servicio (por ejemplo,
            catálogo o preguntas frecuentes).
          </li>
        </ul>

        <h2>2. Para qué usamos los datos</h2>
        <ul>
          <li>Responder solicitudes y brindar soporte.</li>
          <li>Configurar y mejorar el Servicio.</li>
          <li>Prevenir fraude y proteger la seguridad.</li>
        </ul>

        <h2>3. Compartición</h2>
        <p>
          No vendemos tus datos. Podemos compartirlos con proveedores que nos
          ayudan a operar (por ejemplo, hosting) bajo acuerdos de
          confidencialidad y solo en lo necesario para prestar el Servicio.
        </p>

        <h2>4. Conservación</h2>
        <p>
          Conservamos los datos el tiempo necesario para cumplir las finalidades
          descritas o requerimientos legales, y luego los eliminamos o
          anonimizamos.
        </p>

        <h2>5. Derechos</h2>
        <p>
          Puedes solicitar acceso, corrección, actualización o eliminación de
          tus datos, según aplique. Escríbenos por los canales de contacto
          publicados en la landing.
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
