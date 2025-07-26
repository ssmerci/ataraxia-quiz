/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
      },
      cursor: {
        quill: 'url(/ataraxia-quiz/assets/quill-cursor.png), auto',
      },
    },
  },
  plugins: [],
};