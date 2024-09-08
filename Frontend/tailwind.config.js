/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      lora: ['Lora', 'serif'], // Adding 'Lora' as a custom font family
    },},
  },
  plugins: [],
}

