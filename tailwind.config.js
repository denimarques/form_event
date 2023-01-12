/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      "Poppins": ['Poppins', 'sans-serif'],
      "Archivo": ['Archivo', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'icon-arrow': "url('/public/dist/img/chevron-down-arrow-svgrepo-com.svg')",
      }
    },
  },
  plugins: [],
}
