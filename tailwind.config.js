// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '5px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      full: '9999px',
    },
    extend: {
      colors: {
        main: '#a388ee',
        mainAccent: '#9e66ff',
        overlay: 'rgba(0,0,0,0.8)',
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
        // dark mode
        darkBg: '#272733',
        darkText: '#eeefe9',
        darkBorder: '#000',
        darkAccent: '#5a3ecb',
        secondaryBlack: '#212121',
        // New dark mode purple colors
        darkMain: '#8a6cd9',
        darkMainAccent: '#7c5ae0',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addBase }) {
      addBase({
        'input:focus, select:focus, textarea:focus': {
          borderColor: '#000',
          boxShadow: 'none',
          outline: 'none',
        },
        'input:hover, select:hover, textarea:hover': {
          borderColor: '#000',
        },
      });
    }
  ],
};