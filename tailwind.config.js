/** @type {import('tailwindcss').Config} */
export default {
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
