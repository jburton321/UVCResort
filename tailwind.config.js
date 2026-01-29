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
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
