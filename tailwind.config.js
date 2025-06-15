/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'planora-primary': '#7C3AED',
        'planora-secondary': '#3B82F6',
      },
    },
  },
  plugins: [],
}