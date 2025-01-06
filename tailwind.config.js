/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#fea928",
        primary2: "#f8f7f4",
        secondary: "#ed8900",
        secondary2: "#ffda79",
        tertiary: "#f9f6f1",
        btnColor: "#0d0c22",
        statsPart: "#143942",

        LightBlack: "#222",
        OffWhite: "#f3f3f3",
        WhiteBg: "#ebebeb",
        Orange: "#d6a3e5",
        lightblack: '#141414',
        TextWhite: "#f3efef",
      },

      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },

      fontFamily:{
         mona: ["Mona Sans", "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
         serif: ["Source Serif", 'Georgia, serif']
      }
    },
  },
  plugins: [],
}

