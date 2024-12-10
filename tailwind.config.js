/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white : "#FFFFFF",
        primary: "#063B7C",
        secondary: "#0D742F",
        black: "#000000",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        satoshi: ["Satoshi"]
      },
  

    },
  },
  plugins: [],
}

