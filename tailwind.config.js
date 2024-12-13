/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        customGreen: { 
          DEFAULT: '#101419', 
          50: '#DECBB7',      
          100: '#DECBB7',     
          200: '#DECBB7',     
          300: '#101419',     
          400: '#101419',     
          500: '#5F1A37',     
          600: '#4f162f',     
          700: '#3f1127',     
          800: '#2f0d1f',
          900: '#1f0817',
        },
      },
      keyframes: {
        fadeInLeftToRight: {
          '0%': { opacity: '0', transform: 'translateX(-200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRightToLeft: {
          '0%': { opacity: '0', transform: 'translateX(200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInTopToBottom: {
          '0%': { opacity: '0', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInLeftToRight: 'fadeInLeftToRight 1s ease-in-out forwards',
        fadeInRightToLeft: 'fadeInRightToLeft 1s ease-in-out forwards',
        fadeInTopToBottom: 'fadeInTopToBottom 1s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['Abril Fatface', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

