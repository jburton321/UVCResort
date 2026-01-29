module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'content': '1230px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#7535AD',
        'primary-dark': '#5f2a8f',
        accent: '#E29A28',
        'accent-dark': '#815612',
        gold: {
          50: '#fffdfc',
          100: '#fdf9f2',
          200: '#fbf1e1',
          300: '#f8e6c9',
          400: '#f4d8ab',
          500: '#eec686',
          600: '#e9b25a',
          700: '#e29a28',
          800: '#815612',
          900: '#422c09',
          950: '#2d1e06',
        },
        brand: {
          50: '#fbfcfc',
          100: '#f0f3f4',
          200: '#dde3e7',
          300: '#c3cdd5',
          400: '#a2b2bd',
          500: '#7990a0',
          600: '#526674',
          700: '#2a343c',
          800: '#1f262b',
          900: '#181d21',
          950: '#151a1e',
        },
        navy: {
          900: '#0d1f48',
          950: '#06163a',
        },
      },
    },
  },
  plugins: [],
};
