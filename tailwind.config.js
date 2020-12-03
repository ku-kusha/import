module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lght-gray': '#e6ebf0',
        'md-pink': '#d3436f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
