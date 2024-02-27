/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  fonts: [
    {
      family: 'Nunito',
      variants: ['300', '400', '700', '900'],
    },
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          'dark': '#6B47ED',
          'light': '#D4CCF7',
        },
        black: '#000000',
        divider: '#D8D8D8',
        grey: '#343434',
        remark: '#979797',
        white: '#FFFFFF',
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'system-ui'],
    },
  },
  plugins: [],
};
