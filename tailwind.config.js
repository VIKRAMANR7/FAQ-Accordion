/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "375px", max: "767px" },
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        pink: "hsl(281, 83%, 54%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        "Work-Sans": ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        bgdesktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        bgmobile: "url('/src/assets/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
