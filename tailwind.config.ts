// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Habilita o modo escuro baseado na classe 'dark' no HTML
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Um roxo/azul vibrante
        secondary: "#8b5cf6", // Um roxo um pouco diferente
        background: "#0d1117", // Fundo escuro
        textLight: "#f8fafc", // Texto claro
        textDark: "#1f2937", // Texto escuro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Exemplo de fonte
      },
    },
  },
  plugins: [],
};
export default config;