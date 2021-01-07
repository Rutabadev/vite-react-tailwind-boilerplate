const colors = require('tailwindcss/colors');

module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
   darkMode: 'class', // or 'media' or false
   theme: {
      extend: {
         colors: {
            brand: colors.amber,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
