/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url(pattern-bg.png)",
      }),
    },
  },
  plugins: [],
};
