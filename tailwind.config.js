/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ff8906",
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
