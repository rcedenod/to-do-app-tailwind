export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4f46e5",
        "primary-hover": "#4338ca",
        "background": "#f3f4f6",
        "card": "#ffffff",
        "text-main": "#111827",
        "text-muted": "#6b7280"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}