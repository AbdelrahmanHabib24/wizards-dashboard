/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#051424",
          surface: "#0D1C2D",
          surfaceHover: "#13253a",
          border: "rgba(73, 68, 84, 0.25)",
          borderGlow: "rgba(208, 188, 255, 0.2)",
          primary: "#D0BCFF",
          primaryDeep: "#3C0091",
          gold: "#FFB95F",
          coral: "#FFB4AB",
          textPrimary: "#D4E4FA",
          textSecondary: "#CBC3D7",
          textMuted: "#6B7280",
          subtle: "rgba(208, 188, 255, 0.1)",
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"Liberation Mono"', 'monospace'],
      },
      boxShadow: {
        glow: "0px 0px 20px 0px rgba(208, 188, 255, 0.15)",
        card: "0px 4px 6px -4px rgba(0, 0, 0, 0.3), 0px 10px 15px -3px rgba(0, 0, 0, 0.3)",
        modal: "0px 25px 50px -12px rgba(0, 0, 0, 0.7)",
      }
    },
  },
  plugins: [],
}
