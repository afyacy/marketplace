module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          light: '#45DACE',
          default: '#428B92',
          dark: '#405C6E'
        },
        green: {
          light: '#14a800',
          default: '#3B8224'
        }
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
