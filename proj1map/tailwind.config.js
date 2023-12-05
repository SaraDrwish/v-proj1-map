/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      // ../assets/pattern-bg.png
      // dist
      // backgroundImage: {
      // "hero-pattern": 'url("./src/assets/img/pattern-bg.png")',
      // },
    },
  },
  plugins: [],
};
