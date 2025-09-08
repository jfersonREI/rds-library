/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      borderRadius: {},
      fontFamily: {},
      spacing: {},
      fontSize: {},
    },
  },
  plugins: [require('tw-animate-css')],
};
