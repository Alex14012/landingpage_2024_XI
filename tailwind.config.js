/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        PlusJakartaSans: ["PlusJakartaSans"],
        Roboto: ["Roboto"],
        CosmicIndustry: ["CosmicIndustry"]
      }
    },
    backgroundImage: {
      "Crossup": "url('/src/assets/img/article/crossup.jpg')",
      "KasaneTeto": "url('/src/assets/img/article/Kasane_Teto.jpg')",
      "CPU": "url('/src/assets/img/article/CPU.jpg')",
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "LightSeaGreen": "#179BAE",
      "Orange": "#FF8343",
      "Beige": "#F1DEC6",
      "white": "#FFFFFF",
      "zinc": "rgb(212 212 216)"
    },
  },
  plugins: [],
}

