/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: {
          DEFAULT: "#0A192F",
          light: "#F5F5F5",
        },
        textGreen: {
          DEFAULT: "#64ffda",
          light: "#10b981",
        },
        textLight: {
          DEFAULT: "#ccd6f6",
          light: "#1f2937",
        },
        textDark: {
          DEFAULT: "#8892b0",
          light: "#4b5563",
        },
        hoverColor: {
          DEFAULT: "rgba(100,255,218,0.1)",
          light: "rgba(16,185,129,0.1)",
        },
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
        navbarShadowLight: " 0 10px 30px -10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
