/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Manrope"']
    },
    colors: {
      LightCyan: '#0d90b4',
      NeonGreen: '#53FFA9',
      darkback:'#202632',
      cardcolor:'#313A49',
      White:'#ffffff',
      lightgrey:'#C3C3C3'
     
    },
    extend: {},
  },
  plugins: [],
}