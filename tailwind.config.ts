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
        'neon-green': '#39ff14',
        'dark-bg': '#0a0f14',
        'dark-card': '#11171f',
        'dark-border': '#1e293b',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.25)',
      },
      fontFamily: {
        'cyber': ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
