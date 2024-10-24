/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', "ui-sans-serif"],
      },
      colors: {
        background: "#fdf2e9",
        primary: "#555",
        secondary: "#333",
      },
    },
  },
  plugins: [],
};
