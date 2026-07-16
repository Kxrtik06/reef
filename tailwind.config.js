/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reef: {
          darkest: '#050D0E',
          dark: '#0A1719',
          base: '#12262A',
          coral: '#FF5E3A',
          coralHover: '#FF8A6B',
          bleached: '#F2EFE9',
          textPrimary: '#C9C4BA',
          textSecondary: '#8A867F',
          recovery: '#2DD4A7',
        }
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
      },
      lineHeight: {
        'tight': '0.95',
        'relaxed': '1.7',
      }
    },
  },
  plugins: [],
}
