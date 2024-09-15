/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" }, // Используем max-width вместо min-width
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        // Добавьте другие breakpoints, если нужно
      },
    },
  },
  plugins: [],
};
