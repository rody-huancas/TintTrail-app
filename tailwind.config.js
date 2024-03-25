/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#80aaff",
          200: "#0057FF",
        },
        secondary: {
          100: "#1A1A25"
        }
      }
    },
  },
  plugins: [],
}

