/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0B0F1A',
          raised: '#111827',
          card: '#151c2c',
        },
        accent: {
          DEFAULT: '#38BDF8',
          dim: '#22D3EE',
        },
        body: {
          DEFAULT: '#CBD5E1',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(34, 211, 238, 0.08), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
