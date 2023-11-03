/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      'yellow-900':'#713f12',
      'yellow-600':'#d8aa23',
      'yellow-500': '#eab308',
      'black':'#000000',
      'white':'#ffffff'
    },
    extend: {
      backgroundImage: {
        'gnc': "url('./assets/img/gnc.jpeg')",
      }
    },
  },
  plugins: [],
}

