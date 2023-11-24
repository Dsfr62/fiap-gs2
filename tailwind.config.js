/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/styles/core/*.css"],
  theme: {
    extend: {
      colors: {
        "primary-default": "#ec6e0a",
        "primary-dark": "#C0651D",
        "secondary-default": "#00a9b3",
        "secondary-deep": "#0b3547",
        "secondary-dark": "#00746d",
        "secondary-light": "#476788",
        "gray-default": "#f3f2f2",
        "gray-dark": "#eeeded",
      },
      fontFamily: {
        sans: ["Gilroy"],
      },
      screens: {
        average: "800px",
      },
    },
  },
  plugins: [{ "postcss-import": {} }],
};
