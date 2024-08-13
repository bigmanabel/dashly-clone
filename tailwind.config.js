import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        '2.5': '2.5',
        '9.5': '9.5'
      }
    },
  },
  plugins: [tailwindScrollbar],
}