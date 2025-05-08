/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "mobile": "375px",
      "desktop": "1440px"
    },
    container: {
      center: true,
      padding: "1,25rem",
    },
    extend: {
      fontFamily: {
        "readex-pro": ["Readex Pro", "sans-serif"],
      },
      colors: {
        // Primary colors
        "green-1": "#2EB873",
        "green-2": "#47D18C",
        "green-3": "#B1DFC9",
        "blue-1": "#0075EB",
        "blue-2": "#FACCB9",
        "blue-3": "#FCDDD1",
        "orange-1": "#F59A74",
        "orange-2": "#FACCB9",
        "orange-3": "#FCDDD1",
        // Secondary colors
        "yellow": "#FEE5A4",
        "yellow-green": "#EAEDB6",
        "light-blue": "#A4D8FE",
        "purple": "#ABA4FE",
        "pink": "#FEA4E5",
        // seBlack
        "seBlack-1": "#252A3F",
        "seBlack-2": "#2A2F46",
        "seBlack-3": "#30364F",
        // Black
        "black-1": "#1B2124",
        "black-2": "#8D9092",
        "black-3": "#C6C7C8",
        // Neutrals
        "grey-1": "#7F879E",
        "grey-2": "#AAAFBE",
        "grey-3": "#D4D7DF",
        "L-gray-1": "#F3F3F3",
        "L-gray-2": "#F6F8F9",
        "L-gray-3": "#F9F9F9",
        "white": "#FFFFFF",
        "beige": "#FAFAFA",
        // Alter Color
        "red-1": "#E60019",
        "red-2": "#AAAFBE",
        "red-3": "#D4D7DF",
        "Al-green-1": "#3D5BF6",
        "Al-green-2": "#78C58C",
        "Al-green-3": "#BBE2C6",


        // Other needs 
        "user-color": "#A3A93B",
        "smart-color": "#47D18C",
        "zoom-color": "#3860E2",
        "wifi-color": "#E1A814",
      }
    },
  },
  plugins: [],
}

