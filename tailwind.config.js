/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hover-bg': "url('./src/assets/favicon.jpg')",
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      boxShadow: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [],
}

