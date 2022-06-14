/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1168px",
      },
    },
    extend: {
      colors: {
        "dark-blue-01": "#E2D4F0",
        "dark-blue-02": "#D0B7E6",
        "dark-blue-03": "#A06ECE",
        "dark-blue-04": "#7126B5",
        "dark-blue-05": "#4B1979",
        "lime-green-01": "#FFF8ED",
        "lime-green-02": "#FFF0DC",
        "lime-green-03": "#FFE9CA",
        "lime-green-04": "#D4C2A8",
        "lime-green-05": "#AA9B87",
        "neutral-02": "#AA9B87",
        "neutral-03": "#8A8A8A",
        "neutral-04": "#3C3C3C",
        "neutral-05": "#151515",
        success: "#73CA5C",
        warning: "#F9CC00",
        danger: "#FA2C5A",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".shadow-high": {
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        },
        ".shadow-low": {
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
