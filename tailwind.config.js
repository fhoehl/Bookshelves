const colors = require('tailwindcss/colors');

module.exports = {
  content: ["index.html", "_includes/**/*.njk"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.blue.700'),
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
