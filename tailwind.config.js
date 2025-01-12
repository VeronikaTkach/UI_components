/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_blue: '#091D71',
        main_light_blue: '#BBC6FF',
        gray_1: '#848EB8',
        gray_2: '#E0E0E0',
        gray_3: '#4F4F4F',
        gray_4: '#BDBDBD',
        white: '#FFFFFF',
        black: '#242424',
        red: '#FF0000',
        blue:'#4B82BD',
      }
    },
  },
  plugins: [],
}

