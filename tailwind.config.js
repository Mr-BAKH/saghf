/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs:'0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3rem',
    },
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1' },
        },
      },
      animation: {
        income: 'wiggle 0.1s linear alternate',
      }
    },
  },
  plugins: [],
}
