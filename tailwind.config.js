/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        "moxa-blue": "#e94d35", // Adjust this hex code to match the exact blue you prefer
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
