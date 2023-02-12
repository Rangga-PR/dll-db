/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5755D8",
        secondary: "#974EF4",
      },
      fontFamily: {
        icon: ["Material Icons Outlined"],
      },
      aria: {
        current: "current=true",
        "current-page": "current=page",
      },
    },
  },
  plugins: [],
};
