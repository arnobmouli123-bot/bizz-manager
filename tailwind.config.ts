import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "Arial", "sans-serif"] },
      colors: {
        navy: { 950: "#101126", 900: "#171832", 800: "#242543" },
        brand: { 50: "#f4f2ff", 100: "#ebe7ff", 500: "#7663e9", 600: "#654fd8", 700: "#5440bb" },
      },
      boxShadow: {
        card: "0 12px 40px rgba(27, 24, 66, 0.07)",
        glow: "0 10px 40px rgba(118, 99, 233, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
