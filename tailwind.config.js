/** @type {import('tailwindcss').Config} */

const { colors, spacing } = require('./src/styles/tokensExport.cjs');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      minHeight: {
        touch: `${spacing.touchTarget}px`,
      },
      height: {
        touch: `${spacing.touchTarget}px`,
      },
    },
  },
  plugins: [],
};
