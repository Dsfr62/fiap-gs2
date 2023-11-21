/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-default": "#ec6e0a",
        "secondary-default": "#00a9b3",
        "gray-default": "#f3f2f2",
        "gray-dark": "#eeeded",
      },
    },
  },
  plugins: [],
};
