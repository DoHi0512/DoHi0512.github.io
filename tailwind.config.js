/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        Fly: {
          "0%": { transform: "rotate(0)" },
          "25%": {
            transform: "rotate(-3deg) translateX(1rem) translateY(.3rem)",
          },
          "75%": { transform: "rotate(5deg) translateY(-.4rem)" },
          "100%": { transform: "rotate(0deg) " },
        },
      },
      animation: {
        fly: "Fly 3.5s ease-in-out infinite",
      },
    },
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
      "bg-color2": "var(--bg-color2)",
      "input-text": "var(--input-text)",
      excerpt: "var(--excerpt)",
      "post-bg": "var(--post-bg)",
      "prism-default-text": "var(--prism-default-text)",
      "bg-inline": "var(--bg-inline)",
    },
  },
  plugins: [],
}
