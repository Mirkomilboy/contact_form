const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': colors.teal,
        'cyan': colors.cyan
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [],
}
