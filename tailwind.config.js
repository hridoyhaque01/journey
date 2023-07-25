/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#605bff",
      successColor: "#4BB543 ",
      infoColor: "#3498DB ",
      errorColor: "#ff3333",

      blueReg: "#3f5391",

      transparent: "transparent",
      "dark-50": "rgb(32 32 34 / 80%)",

      white: "#fff",
      whiteLow: "#f2f2f2",
      whiteLight: "#fafafa",

      green: "#6cbaa8",
      greenHigh: "#029664",
      greenLight: "#B8D6BF",

      mist: "#F5DBC4",

      fade: "#676767",
      fadeReg: "#839093",
      fadeLight: "#e8e8e8",
      fadeLow: "#030229",

      black: "#2F3D4C",

      slateLight: "#FAFAFB",
    },
    backgroundImage: {
      travel: "url('./assets/images/travel-bg.png')",
      gradientBg:
        "linear-gradient(270deg, #e2e1ff 0%, rgba(172, 169, 255, 0.15) 100%)",
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
  daisyui: {
    themes: [],
  },
};
