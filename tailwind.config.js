/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream":        "var(--bg-cream)",
        "warm":         "var(--bg-warm)",
        "charcoal":     "var(--bg-charcoal)",
        "olive":        "var(--olive)",
        "olive-light":  "var(--olive-light)",
        "olive-dark":   "var(--olive-dark)",
        "beige":        "var(--beige)",
        "beige-light":  "var(--beige-light)",
        "beige-dark":   "var(--beige-dark)",
        "text-pri":     "var(--text-primary)",
        "text-sec":     "var(--text-secondary)",
        "text-muted":   "var(--text-muted)",
        "border-soft":  "var(--border-soft)",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Plus Jakarta Sans", "sans-serif"],
        mono:  ["Fira Code", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
};
