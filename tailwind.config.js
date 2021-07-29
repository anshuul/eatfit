module.exports = {
  jit: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      "xs": "285px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
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
