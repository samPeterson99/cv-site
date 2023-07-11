/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "400px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "#75c9c4",
      },
    },
  },
  plugins: [],
};
