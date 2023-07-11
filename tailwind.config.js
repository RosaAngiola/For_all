/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body: "rgb(250, 235, 215)",
        primary: "rgb(255, 153, 0)",
        secondary: "rgb(255, 200, 0)", 
        box: "rgba(255, 200, 0, 0.25)",
        disable: "rgb(237, 237, 233)",
      }
    },
  },
  plugins: [],
}

