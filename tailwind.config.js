/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: { 
          DEFAULT: '#101419', 
          // 50: '#f7edda',    
          // 50: '#E0E2DB',  
          // 50: '#F2E5D7',
          // 50: '#EDD3C4',
          50: '#FFF8F0',
          // 50: '#E3E4DB',
          // 50: '#FDD2D9',
          // 50: '#F3DFED',
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
        },
        slideDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '500px', opacity: '1' },
        },
        slideUp: {
          '0%': { maxHeight: '500px', opacity: '1' },
          '100%': { maxHeight: '0', opacity: '0' },
        },
      },
      animation: {
        fadeInLeftToRight: 'fadeInLeftToRight 1s ease-in-out forwards',
        fadeInRightToLeft: 'fadeInRightToLeft 1s ease-in-out forwards',
        fadeInTopToBottom: 'fadeInTopToBottom 1s ease-in-out forwards',
        slideDown: 'slideDown 0.5s ease-in-out forwards',
        slideUp: 'slideUp 0.5s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['Abril Fatface', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif']
      },
    },
  },
  plugins: [],
};
