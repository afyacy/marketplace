module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: {
        light: '#45DACE',
        DEFAULT: '#428B92',
        dark: '#405C6E',
      },
      pink: {
        light: '#FF6584',
        DEFAULT: '#9F516D',
        dark: '#65455F',
      },
      white: '#ffffff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
