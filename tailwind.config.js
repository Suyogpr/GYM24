/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#404040",  //home page color
        "gray-50": "#EFE6E6",  
        "gray-100": "#DFCCCC",
        "gray-500": "#91d320",  //neon green
        "primary-100": "#565656",   //dark gray
        "primary-300": "#6d6d6d",  //med gray
        "primary-500": "#888888",  //light gray
        "secondary-400": "#91d320", //yellow //navbar ko action button
        "secondary-500": "#91d320", //darker yellow
      },
      backgroundImage: (theme) => ({
        "gradient-greengray":
          "linear-gradient(90deg, #67ff61 0%, #979797 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      // backgroundImage: (theme) => ({
      //   "gradient-yellowred":
      //     "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home": "url('./assets/HomePageGraphic.png')",
      // }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        bruno: ['"Bruno Ace SC"', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // abs1: "url('./assets/abs1.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      cus: "2000px",
    },
  },
  plugins: [],
};