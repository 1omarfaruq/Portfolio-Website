/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./assets/js/**/*.{html,js}",
    "index.html"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
      colors: {
        sectionColor : "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#ddd",
        secondaryColor: "red",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        md: '30px',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Londrina: ["Londrina Outline", "sans-serif"],
    }
  },
  plugins: [],
}

