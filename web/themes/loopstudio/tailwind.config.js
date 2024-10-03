/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    extend: {
      colors:{
        "loopDarkGrey" : "hsl(0, 0%, 55%)",
        "loopVeryDarkGray" : "hsl(0, 0%, 41%)"
      },
      backgroundImage:{
          'hero-bg' : "url('/src/img/mobile/image-hero.jpg')",
          'hero-bg-desktop' : "url('/src/img/desktop/image-hero.jpg')",
      }
    },
    fontFamily:{
      'Alata' : ["Alata"],
      "JosefinSans": ["Josefin Sans"],
    }
  },
  plugins: [],
}