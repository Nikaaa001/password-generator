/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'bg-blackOne': '#14131B',
        'bg-blackTwo': '#08070B',
        'title-grey': '#817D92',
        'div-bg': '#24232C',
        'pass-color': '#E6E5EA',
        'neon-green': '#A4FFAF',
        'slider-bg': '#18171F'
      },
      fontFamily: {
        jetbrain: "'JetBrains Mono', monospace"
      },
      fontSize: {
        pass: '24px',
        '16px': '16px',
        '18px': '18px',
        '32px': '32px',
      },
    },
  },
  plugins: [],
}

