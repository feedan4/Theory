/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', 'sans-serif'], // Font ailəsini əlavə edin
      },
      screens: {
        "mq662":"662px",
        "mq700":"700px",
        "400":"500px",
        "xxl":"1380px"
      }
    },
  },
  plugins: [],
}

