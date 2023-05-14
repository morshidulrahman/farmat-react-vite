/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAB528",
        color: "#999999",
        title: "#222222",
        footercolor: "#555",
        orange: "#FA582C",
        green: "#669900",
      },
    },
  },
  plugins: [],
};
