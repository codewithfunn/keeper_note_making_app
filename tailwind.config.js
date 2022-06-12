/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Orange-Custom' :'#f5ba13',
        'gray-Custom' :'#eee'
      }
    },
  },
  plugins: [],
}