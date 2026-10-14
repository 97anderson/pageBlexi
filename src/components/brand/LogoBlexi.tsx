/**
 * El infinito de la marca tal como lo dibuja el diseño A: 46×24, trazo de
 * 4,5 con el degradado violeta → azul → cian.
 */
export function LogoBlexi({ id = "logo-blexi", ancho = 46, alto = 24 }: { id?: string; ancho?: number; alto?: number }) {
  return (
    <svg width={ancho} height={alto} viewBox="12 10 48 24" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9030F0" />
          <stop offset="0.5" stopColor="#4890F0" />
          <stop offset="1" stopColor="#00D8F0" />
        </linearGradient>
      </defs>
      <path
        d="M24.5,12 C19,12 14.5,16.5 14.5,22 C14.5,27.5 19,32 24.5,32 C30,32 33,27 36,22 C39,17 42,12 47.5,12 C53,12 57.5,16.5 57.5,22 C57.5,27.5 53,32 47.5,32 C42,32 39,27 36,22 C33,17 30,12 24.5,12 Z"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="4.5"
      />
    </svg>
  );
}
