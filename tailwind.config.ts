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
        // Marca Blexi (sale del logo y del CRM). El degradado violeta→azul→cian
        // es la firma; «noche» es la paleta oscura Noche Cobalto del CRM.
        // El verde de WhatsApp es SOLO para el botón de acción.
        blx: {
          violeta: "#9030F0",
          azul: "#4890F0",
          cobalto: "#3060F0",
          cian: "#00D8F0",
          violetaTexto: "#7C22D9",
          azulTexto: "#1F5FD6",
          cianTexto: "#0A7E99",
          noche: "#161D32",
          tarjeta: "#222C48",
          elevada: "#2E3B5D",
          borde: "#404F73",
          bordeFuerte: "#56678F",
          textoNoche: "#C9D8FF",
          apagadoNoche: "#A0AFC7",
          claro: "#F8FAFC",
          tinta: "#0F172A",
          apagado: "#475569",
          linea: "#E2E8F0",
          wa: "#25D366",
          waHover: "#1EBE5B",
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
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
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
        "blexi": "linear-gradient(135deg, #9030F0 0%, #4890F0 50%, #00D8F0 100%)",
        // Para texto sobre fondo claro: los mismos tonos oscurecidos para que
        // el titular en degradado pase AA de texto grande (≥ 3:1).
        "blexi-texto": "linear-gradient(135deg, #7C22D9 0%, #1F5FD6 55%, #0A7E99 100%)",
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
