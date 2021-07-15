module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          800: "#23272a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
