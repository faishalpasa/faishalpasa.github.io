/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typeCarret: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        typeCarret: 'typeCarret 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
