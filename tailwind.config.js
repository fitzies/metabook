/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252737",
        secondary: "#2f3246",
        alt: "#444765",
        textcolor: "#C9C9C9",
      },
      fontFamily: {
        inter: "InterRegular",
        interbold: "InterBold",
      },
    },
  },
  plugins: [],
};
