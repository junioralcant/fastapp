/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#89490A',
      'primary-200': '#7A1818',
      purple: '#7e5bef',
      pink: '#FFB1B1',
      orange: '#ff7849',
      green: '#13ce66',
      'yellow-200': '#FFB84D',
      'gray-dark': '#273444',
      withe: '#FFFFFF',
      'withe-200': '#F0F0F5',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
