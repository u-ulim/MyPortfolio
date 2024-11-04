/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        light: {
          bg: "#FFFFFF",
          text: "#1A1A1A",
          accent: "#2dd4bf",
        },
        dark: {
          bg: "#1A1A1A",
          text: "#FFFFFF",
          accent: "#2dd4bf",
        },
      },
    },
  },
  plugins: [],
};
