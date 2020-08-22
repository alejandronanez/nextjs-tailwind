const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
