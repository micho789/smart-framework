/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        main: "#1ABC9C",
        secondary: "#2C3E50",
        
      },
      container:{
        center: true,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

