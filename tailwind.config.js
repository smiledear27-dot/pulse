/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0a0a0a',
          card: '#121212',
          raised: '#181818',
        },
        primary: {
          DEFAULT: '#00f0ff',
          50: '#e6feff',
          100: '#ccfdff',
          200: '#99fbff',
          300: '#66f9ff',
          400: '#33f7ff',
          500: '#00f0ff',
          600: '#00c7d4',
          700: '#009ea8',
          800: '#00757c',
          900: '#004c50',
        },
        secondary: {
          DEFAULT: '#ff006e',
          50: '#ffe6f0',
          100: '#ffcce0',
          200: '#ff99c2',
          300: '#ff66a3',
          400: '#ff3385',
          500: '#ff006e',
          600: '#cc0058',
          700: '#990042',
          800: '#66002c',
          900: '#330016',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slower': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'spin-slower': 'spin-slower 26s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
};
