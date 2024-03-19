/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pulic/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter: ['Inter','sans-serif'],
      },
      colors: {
        'simple':'#1F2937'
      },
    },
  },
  plugins: [],
}

