const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JostVariable", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        "blur-in": "400ms blur-in linear",
        orbit: "40s orbit linear infinite",
        "counter-orbit": "40s counter-orbit linear infinite",
        "slide-up": "1s slide-up ease-in-out",
      },
      keyframes: {
        "blur-in": {
          "0%": { filter: "blur(10px)" },
          "100%": { filter: "blur(0)" },
        },
        orbit: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "counter-orbit": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", filter: "blur(10px)" },
          "100%": { transform: "translateY(0)", filter: "blur(0)" },
        },
      },
    },
  },
};
