/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fcolor: "#bf854c",
      },
    },
    fontFamily: {
      sans: [
        "Josefin Sans",
        "Helvetica",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
    },
  },
  plugins: [],
};
