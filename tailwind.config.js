/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'card': ["Outfit", "ui-sans-serif"]
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

