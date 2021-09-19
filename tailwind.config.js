/* eslint-disable */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'btn-primary': '#0e79fe',
        'grey-light': '#1e2a48',
        'grey-dark': '#131d30',
      },
      outline: ['hover', 'active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
