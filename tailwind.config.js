/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-light': '#a78bfa',
        'dark-bg': '#0a0a1a',
        'dark-card': '#111128',
        'dark-card-hover': '#16163a',
        'dark-border': '#1e1e3a',
        'accent-blue': '#3b82f6',
        'accent-cyan': '#06b6d4',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
