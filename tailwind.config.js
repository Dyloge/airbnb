module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', ' sans - serif'],
      },
      backgroundImage: {
        banner: "url('/img/banner2.jpg')",
        giftcard: "url('/img/giftcard.jpg')",
      },
    },
  },
  plugins: [],
};
