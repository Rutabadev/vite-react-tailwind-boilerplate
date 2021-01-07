const colors = require('tailwindcss/colors');

module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
   darkMode: false, // or 'media' or 'class'
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
