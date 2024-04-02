/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        poppins: ["Poppins", " sans-serif"],
        dm: ["DM Sans", " sans-serif"],
      },
      colors: {
        ligthGray: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
