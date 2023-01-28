/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,astro}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF5E5',
        'coffee': '#5E3A24',
        'biscuit': '#B58863'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
