/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}