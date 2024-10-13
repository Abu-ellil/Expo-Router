/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}" // Add any other directories where you use Tailwind classes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}
