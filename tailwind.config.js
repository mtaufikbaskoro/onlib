module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          light: '#EF233C',
          dark: '#D90429'
        },
        gray: {
          light: '#8D99AE',
          dark: '#2B2D42'
        },
        light: '#EDF2F4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
