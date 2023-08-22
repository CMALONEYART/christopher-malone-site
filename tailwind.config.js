/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       playfair: ['Playfair Display', 'serif'],
       lora: ['Lora', 'serif'],
       tiltprism: ['Tilt Prism', 'serif']
      },
    },
  }, 
  plugins: [],
}