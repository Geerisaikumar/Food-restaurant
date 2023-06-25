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
      xl: "1200px",
    },

    extend: {
      colors: {
        lightgreen: "#22c55e",
        darkgreen: "#008000",
        orange: "#f97316",
        liteorange: "#ea580c",
        red: "rgb(233,55,55)",
        lightgray: "#d1d5db",
      },
    },
  },
  plugins: [],
};
