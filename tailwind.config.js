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
        'main-image': "url('/images/bg-image@2x.png')",
        'about-me': "url('/images/About me (2).png')",
        'scroll': "url('/images/pngwing.com (1).png')",
      }),
      backgroundSize: {
        'size-contain': 'contain',
      },
      boxShadow: {
        'custom-dark': '0px 22px 36px 0px #06263908',
      },
      colors: {
        'magical-yellow': '#FFC70A',
      },
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        oswald: "Oswald",
        inter: "Inter",
        tinos: "Tinos",
        "fira-sans": "'Fira Sans'",
        'wonder-magic': ['Wonder Magic', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'times-new-roman': ['Times New Roman', 'sans-serif'],
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