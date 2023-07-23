/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundImage: theme => ({
        'main-image': "url('/images/main-image.png')",
        'top-hover': "url('/images/top-hover.png')",
      }),
      backgroundSize: {
        'size-contain': 'contain',
      },
      boxShadow: {
        'custom-dark': '0px 22px 36px 0px #06263908',
      },
      colors: {
        gray: {
          "100": "#2c2c2c",
          "200": "#062639",
          "300": "rgba(255, 255, 255, 0.35)",
          "400": "rgba(255, 255, 255, 0.63)",
          "500": "rgba(6, 38, 57, 0.35)",
          "600": "rgba(6, 38, 57, 0.25)",
          "700": "rgba(255, 255, 255, 0.75)",
        },
        coral: "#ea6934",
        aliceblue: "#e8f0f5",
        darkslateblue: "#3251a3",
        black: "#000",
        whitesmoke: "#f7fafc",
      },
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        oswald: "Oswald",
        inter: "Inter",
        tinos: "Tinos",
        "fira-sans": "'Fira Sans'",
        'wonder-magic': ['Wonder Magic', 'sans-serif'],
      },
      screens: {
        'xs': '478px',
        'sm': '767px',
        'md': '991px',
        'sc': '1134px',
        'lg': '1280px',
        'xl': '1440px',
        'hxl': '1580px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      fontSize: {
        "13xl": "2rem",
        "77xl": "6rem",
      },
    },
    variants: {
      extend: {
        backdropFilter: ['responsive'],
        display: ['group-hover'],
      },
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  },
};