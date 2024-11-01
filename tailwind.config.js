/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'light-purple': 'hsl(254, 88%, 90%)',
        'dark-purple': 'hsl(256, 67%, 59%)',
        'light-yellow': 'hsl(31, 66%, 93%)',
        'dark-yellow': 'hsl(39, 100%, 71%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 7%)',
      },
      gridTemplateColumns: {
        'custom-layout': '250px 600px 300px',
        '4-fixed-15': 'repeat(4, 15rem)'
      },
      width: {
        '85': '21rem'
      }
    },
  },
  plugins: [],
}
