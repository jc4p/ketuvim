/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        ocean: '#BFD5EB',
        cherry: '#F7CFE1',
        orchid: '#D198C5',
        pink: '#F0A1BF',
        'military-blue': '#274374',
        'military-green': '#545A3E',
        'pale-nude': '#F8D8C9',
        'pale-green': '#E0E6D6',
        'pale-blue': '#E2EAEB',
        'royal-red': '#A21441',
        'wine-red': '#64242E'
      },
      fontFamily: {
        sans: ['proxima-nova', 'ui-sans-serif', 'sans-serif'],
        gothic: ['gothic-open-shaded', 'ui-sans-serif', 'sans-serif']
      },
    },
  },
  plugins: [],
}
