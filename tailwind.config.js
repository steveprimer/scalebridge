/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This remains correct
        heading: ["Montserrat", "sans-serif"],

        // Changed to Lato to match index.html
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
