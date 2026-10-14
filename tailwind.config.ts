import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dirección A «Claridad» (diseño aprobado por el dueño, 14-oct-2026).
        // Valores copiados del diseño; no se interpretan.
        blx: {
          fondo: "#FBFBFD",
          tinta: "#0B1020",
          texto: "#4A5368",
          texto3: "#2A3247",
          apagado: "#6B7386",
          linea: "#E6E8EF",
          bordeBoton: "#D5D9E3",
          chip: "#EEF2FF",
          gris: "#F5F6FA",
          cobalto: "#3060F0",
          azul: "#4890F0",
          violeta: "#9030F0",
          violetaTexto: "#6A2FD6",
          cian: "#00D8F0",
          cianClaro: "#7FE6F5",
          verdeOk: "#7FE6A8",
          vitrina: "#161D32",
          vitrinaTarjeta: "#222C48",
          vitrinaBorde: "#2E3B5D",
          vitrinaPunto: "#404F73",
          vitrinaTexto: "#E8ECF7",
          vitrinaApagado: "#9AA6C4",
          oscuroTexto: "#B8C2DA",
          barra: "#E8ECF7",
          burbujaCliente: "#DCF8C6",
          burbujaBlexi: "#F2F4F8",
        },
        brand: {
          primary: "#06B6D4",
          primaryHover: "#0891B2",
          aiMagic: "#A855F7",
          aiMagicSoft: "#C084FC",
          whatsapp: "#25D366",
          bgMain: "#F8FAFC",
          surface: "#FFFFFF",
          textDark: "#0F172A",
          textMuted: "#475569",
          border: "#E2E8F0",
          dark: "#0F172A",
          darkSoft: "#1E293B",
          darkBorder: "#334155",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      fontFamily: {
        // Plus Jakarta Sans para todo el texto; Space Grotesk para títulos y cifras.
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Segoe UI", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "Segoe UI", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "Space Grotesk", "Segoe UI", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft-xl": "0 25px 50px -12px rgb(0 0 0 / 0.05)",
        glow: "0 0 60px -10px rgb(6 182 212 / 0.45)",
        "glow-lg": "0 30px 80px -20px rgb(6 182 212 / 0.45)",
      },
      backgroundImage: {
        "ai-grad": "linear-gradient(135deg, #06B6D4 0%, #A855F7 100%)",
        // Degradado del titular del diseño A y el del logo.
        "titular": "linear-gradient(120deg, #9030F0, #4890F0 55%, #0097B8)",
        "blexi": "linear-gradient(135deg, #9030F0, #4890F0, #00D8F0)",
        "recomendado": "linear-gradient(120deg, #9030F0, #4890F0)",
        "vitrina": "linear-gradient(180deg, #F1F3FA, #E9EDF8)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(20px,-10px,0) scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        aurora: "aurora-shift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
