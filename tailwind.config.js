/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
      },
      colors: {
        'highlight' : "#ffcc00",
        'paper-blue' : "#9ddcff",
        'paper-pink' : "#ffc9f0",
        'paper-yellow' :  "#ffcc00"
      },
      backgroundImage: {
        'flashcard' : "url('/src/images/Frame1.png')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'star-fall': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(500px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
  ],  
}

