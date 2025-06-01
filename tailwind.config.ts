import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'serif': ['Cinzel', 'serif'],
      },
      colors: {
        forest: {
          50: '#f0f9f3',
          100: '#dcf2e1',
          200: '#bbe5c6',
          300: '#8bd3a0',
          400: '#55b874',
          500: '#2d9d54',
          600: '#1f7d40',
          700: '#1a6335',
          800: '#17502c',
          900: '#154226',
        },
        mystical: {
          50: '#f0f0ff',
          100: '#e5e5ff',
          200: '#d1d1ff',
          300: '#b8b8ff',
          400: '#9f9fff',
          500: '#8686ff',
          600: '#6d6dff',
          700: '#5454ff',
          800: '#4a4aff',
          900: '#4040ff',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config
