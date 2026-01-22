/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          primary: '#354740',
          gold: '#C5A059',
          light: '#FAFAFA',
          accent: '#E5E7EB',
          dark: '#1A2421'
        }
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-chivo)', 'Chivo', 'sans-serif'],
        sans: ['var(--font-chivo)', 'Chivo', 'sans-serif']
      },
      letterSpacing: {
        'luxury': '0.1em',
        'ultra': '0.15em'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out'
      }
    }
  },
  plugins: [],
}
