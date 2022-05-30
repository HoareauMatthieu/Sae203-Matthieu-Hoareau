module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        "Anton": "Anton",
        "Inter": "Inter"
      },
      backgroundImage: {
        'hero-pattern': "url('public/image/Bgimage.png')",
        'hero-pattern2': "url('public/image/bgimagefest.png')",
      }
    },

  },
  plugins: [],
}
