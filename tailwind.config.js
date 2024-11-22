/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mq662":"662px",
        "mq700":"700px"
      }
    },
  },
  plugins: [],
}

