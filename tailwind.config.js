/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "Grayscale/10": "#F4F4F4",
      "Grayscale/20": "#C6C6C6",
      "Grayscale/30": "#AEAEB2",
      "Grayscale/40": "#475467",
      "Grayscale/50": "#636366",
      "Grayscale/60": "#48484A",
      "Greenlight/10": "#20c997",
      black: "#000000",
      white: "#ffffff",
      "bg-color": "var(--bg-color)",
      "text-color": "var(--text-color)",
      "tag-bg": "var(--tag-bg)",
      "input-text": "var(--input-text)",
      excerpt: "var(--excerpt)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
