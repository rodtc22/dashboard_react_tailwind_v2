/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#637ABA",
          300: "#3E4F7E",
          900: "#1D2B54",
        }
      }
    },
  },
  plugins: [],
}