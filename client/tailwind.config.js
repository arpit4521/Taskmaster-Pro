/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#071952"
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }, 
  //this statement to prevent conflict between tailwind css and reactjs//
}