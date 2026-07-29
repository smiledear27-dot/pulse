/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#fafafa',
        navy: {
          DEFAULT: '#1a1a2e',
          50: '#f4f4f6',
          100: '#e8e8ec',
          200: '#c6c6d2',
          300: '#9a9aae',
          400: '#6a6a82',
          500: '#4a4a62',
          600: '#3a3a52',
          700: '#2a2a42',
          800: '#1f1f36',
          900: '#1a1a2e',
        },
        gold: {
          DEFAULT: '#c4a35a',
          50: '#fbf8ef',
          100: '#f5edd6',
          200: '#ecdcaa',
          300: '#dfc87e',
          400: '#d4b569',
          500: '#c4a35a',
          600: '#a8864a',
          700: '#85683a',
          800: '#5f4a29',
          900: '#3d311b',
        },
        crimson: {
          DEFAULT: '#e94560',
          50: '#fef0f3',
          100: '#fddce2',
          200: '#fbb8c5',
          300: '#f78da1',
          400: '#f26488',
          500: '#e94560',
          600: '#d11a3c',
          700: '#af1430',
          800: '#8d1227',
          900: '#711222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        nav: '0 1px 3px 0 rgba(0,0,0,0.05), 0 1px 2px -1px rgba(0,0,0,0.04)',
        card: '0 1px 3px 0 rgba(0,0,0,0.04), 0 8px 24px -8px rgba(26,26,46,0.08)',
        cardHover: '0 16px 40px -12px rgba(26,26,46,0.14), 0 4px 12px -4px rgba(0,0,0,0.06)',
        gold: '0 8px 24px -8px rgba(196,163,90,0.45)',
        lift: '0 20px 48px -12px rgba(26,26,46,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
