import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C41E3A',
          dark: '#99192d',
          soft: '#fff1f3',
        },
        ink: '#142033',
        sand: '#f6f1eb',
      },
      boxShadow: {
        card: '0 20px 45px -25px rgba(20, 32, 51, 0.35)',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(196, 30, 58, 0.18), transparent 45%)',
      },
    },
  },
  plugins: [],
};

export default config;
