/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '992px'},
      'md': {'max': '768px '},
      'sm': {'max': '640px'}
    },
    fontFamily: {
      // 'sans': ['Montserrat', 'system-ui'],
      // 'serif': ['Oswald', 'Georgia']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}