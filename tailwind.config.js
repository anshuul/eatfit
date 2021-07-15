module.exports = {
  jit: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#73D98B",
        secondary: "#FF5F7F",
        accent: "#FAF9F9",
        secondaryHover: "#FFD6DE"
      },
      fontFamily: {
        title: ["Atma"],
        body: ["Poppins"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
