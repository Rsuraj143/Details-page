/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dia: {
          primary: "#D0A14F",
          secondary: "#07213A",
          
        },
      },
      boxShadow: {
        contact: " 0px 6px 25px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },

    },
    screens: {
      'xs': '475px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
       '4xl' : '1700px'
    },

  },
  plugins: [],
};
