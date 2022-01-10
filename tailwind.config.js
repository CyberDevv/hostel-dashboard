module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Lightest: '#E8FFF6',
          Light: '#03E391',
          Hover: '#03CC82',
          Dark: '#03A86B',
          Default: '#03B575',
        },
        Neutral: {
          Lightest: '#F6F8FB',
          Divider: '#E8E8E8',
          Lighter: '#DBDDE0',
          light: '#CACCCF',
          gray: '#A0A4A8',
          Dark: '#52575C',
          black : '#25282B',
        },
        Red: {
          default: '#FF6760',
          Dark: '#E74F48',
          light : '#FF7E77',
        },
        yellow: {
          default: '#FAC032', 
          Dark: '#EFAD0A',
          light : '#FCDF98',
        },
      },
    },
  },
  plugins: [],
}
