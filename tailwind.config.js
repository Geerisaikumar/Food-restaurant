/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      ss: "500px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },

    extend: {},
  },
  plugins: [],
};
