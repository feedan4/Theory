/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'trade-gothic': ['"Trade Gothic"', 'sans-serif'],
      },
      screens: {
        "mq662":"662px",
        "mq700":"700px",
        "400":"500px"
      }
    },
  },
  plugins: [],
}

