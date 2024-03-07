/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/heroBG1.jpg')",
        'hero-bg2' : "url('/src/assets/images/heroBg2.jpg')",
        'serviceCard-bg' : "url('/src/assets/images/integrio_home_2_layers_3_2.jpg')",
        'testiBg' : "url('/src/assets/images/testiBg.png')",
      },
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}