module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0d1f48',
          950: '#06163a',
        },
        violet: {
          700: '#7535AD',
          800: '#5f2a8f',
        },
      },
    },
  },
  plugins: [],
};
