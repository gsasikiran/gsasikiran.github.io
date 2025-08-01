/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};