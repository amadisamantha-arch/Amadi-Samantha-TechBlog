/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#132A23",
          surface: "#1B372E",
          border: "#2C4C41",
        },
        gold: {
          DEFAULT: "#C9A227",
          soft: "#DCBB4F",
          dim: "#8F7318",
        },
        parchment: {
          DEFAULT: "#EDE6D3",
          dim: "#B9B2A0",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
