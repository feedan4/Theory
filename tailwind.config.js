/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        mont: ['Montserrat', 'sans-serif']
      },
      screens: {
        "mq662":"662px",
        "mq700":"700px",
        "bmd": "800px",
        "400":"500px",
        "xs":"400px",
        "xl": "1000px",
        "xxl":"1380px"
      }
    },
  },
  plugins: [],
}

