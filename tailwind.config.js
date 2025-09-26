export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#33A1E0", // primary brand light mode color
          dark: "#052f49", // deep brand shade for dark mode accents
          light: "#5ab6e9", // optional lighter tint
        },
      },
    },
  },
  plugins: [],
};
