/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // For the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // For the components directory
    "./app/**/*.{js,ts,jsx,tsx}", // For the app directory in Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
