/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(230,17%,14%)',
        'second-darkblue': 'rgb(0, 29, 43)',
        'second-darkblue-opc-70': 'rgba(0, 29, 43, 0.7)',
        'input': '#add8e6',
        'red': 'hsl(0,100%,50%)',
        'dark-gray': 'hsl(0,0%,24%)',
        'light-gray': 'hsl(0,0%,50%',
        'red-hover': 'hsla(0,100%,50%, 0.6)',
      },
      boxShadow: {
        'login': '0px 10px 10px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}