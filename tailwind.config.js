module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {MT:"'Montserrat', sans-serif"},
      
      colors:{
        blue:{
          400:"#0F27C0",
          450:"#0C2396",
          500:"#061449"},
        red: "#DC0613",
        grey:"#808080"
      }
    },
  },
  plugins: [],
}
