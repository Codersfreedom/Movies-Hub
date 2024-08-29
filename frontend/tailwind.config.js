/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        'global-border': ' rgba(8, 8, 8, .1)',
        'primary-dark':'#222222',

      }
    },
  },
  plugins: [],
}