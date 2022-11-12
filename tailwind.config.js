module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        baseBlue: "#3a89b4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
