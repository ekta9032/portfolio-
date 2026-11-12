/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f1418',
        foreground: '#f0f2f5',
        card: '#141a1f',
        surface: '#1a2329',
        border: '#242b32',
        muted: '#7a8491',
        highlight: '#f5a623',
        primary: {
          DEFAULT: '#20b2a6',
          50: '#edfcfb',
          100: '#d2f7f4',
          200: '#aaf0ea',
          300: '#73e2d9',
          400: '#3acbc1',
          500: '#20b2a6',
          600: '#178f86',
          700: '#17726d',
          800: '#175c58',
          900: '#174c49',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
