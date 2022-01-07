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
        card1: "url('/img/card1.jpg')",
        card2: "url('/img/card2.jpg')",
        card3: "url('/img/card3.jpg')",
        card4: "url('/img/card4.jpg')",
        dicover1: "url('/img/discover1.jpg')",
        discover2: "url('/img/discover2.jpg')",
        questionbanner: "url('/img/questionbanner.jpg')",
      },
      screens: {
        mobile: { raw: '(max-width: 767px)' },
      },
    },
  },
  plugins: [],
};
