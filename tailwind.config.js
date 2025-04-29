/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#1E3A8A',
        },
        teal: {
          500: '#14B8A6',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 0 5px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};