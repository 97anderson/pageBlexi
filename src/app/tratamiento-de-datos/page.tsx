import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamiento de datos | BLEXI",
  description: "Información sobre tratamiento de datos para BLEXI.",
};

export default function TratamientoDeDatosPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-grotesk text-4xl font-extrabold tracking-tight text-brand-textDark">
        Tratamiento de datos
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-textMuted">
        Última actualización: {new Date().toLocaleDateString("es-CO")}
      </p>

      <section className="prose prose-slate mt-10 max-w-3xl">
        <p>
          Cuando usas BLEXI puedes proporcionar datos personales de tus clientes
          (por ejemplo, nombre, teléfono, pedidos o conversaciones). Esta
          sección resume lineamientos mínimos para un tratamiento responsable.
        </p>

        <h2>1. Roles</h2>
        <ul>
          <li>
            Tú (la Pyme) normalmente actúas como responsable del tratamiento de
            los datos de tus clientes.
          </li>
          <li>
            BLEXI actúa como encargado, tratando la información siguiendo tus
            instrucciones para prestar el Servicio.
          </li>
        </ul>

        <h2>2. Finalidad</h2>
        <p>
          Usamos los datos para atención al cliente, seguimiento comercial,
          registro en CRM, soporte y mejora del Servicio.
        </p>

        <h2>3. Seguridad</h2>
        <ul>
          <li>
            Implementamos medidas razonables para proteger la información (por
            ejemplo, controles de acceso y monitoreo).
          </li>
          <li>
            Te recomendamos limitar accesos internos y evitar compartir datos
            sensibles innecesarios por chat.
          </li>
        </ul>

        <h2>4. Solicitudes de titulares</h2>
        <p>
          Si un titular solicita conocer, actualizar o eliminar su información,
          puedes escribirnos para soporte operativo, y gestionaremos la solicitud
          conforme a lo que aplique y a tus instrucciones.
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
