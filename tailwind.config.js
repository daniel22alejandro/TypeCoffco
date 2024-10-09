import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sena: "rgb(57, 169, 0)",
        hover: "rgb(249,249,250)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"] /* principal titulos */,
        calibri: ["Calibri", "Arial", "sans-serif"] /* secundaria  */,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
