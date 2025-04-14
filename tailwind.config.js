import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Cabin", "sans-serif"],
        serif: ["Space Grotesk", "sans-serif"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          lg: "2rem",
        }

      },
      keyframes:{
        "move-left": {
          '0%':{ 
            transform:'translateX(0)'
          },
          '100%':{ 
            transform:'translateX(-50%)'
          },
        },
      },
      animation: {
        'move-left': 'move-left 20s linear infinite',
      },
    },
  },
  plugins: [],
}