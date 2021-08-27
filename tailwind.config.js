const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          caribbean: '#3ECFAF',
          jungle: '#012D26',
        },
        gray: {
          green: '#5B6866',
        },
        blue: {
          sky: '#3948FF',
          md: '#EBEDFF',
        },
      },
      fontFamily: {
        silka: ['silkaregular'],
        silkaitalic: ['silkaregular_italic'],
      },
      width: {
        card: '18.25rem',
        minicard: '9.375rem',
      },
      height: {
        card: '12.25rem',
      },
      inset: {
        '1/5': '20%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
