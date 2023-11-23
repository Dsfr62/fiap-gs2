/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/styles/core/*.css"],
  theme: {
    extend: {
      colors: {
        "primary-default": "#ec6e0a",
        "secondary-default": "#00a9b3",
        "secondary-dark": "#0b3558",
        "secondary-light": "#476788",
        "gray-default": "#f3f2f2",
        "gray-dark": "#eeeded",
      },
    },
    fontFamily: {
      sans: ["Gilroy-Medium"],
    },
  },
  plugins: [{ "postcss-import": {} }],
};
