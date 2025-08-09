/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './*.{js,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter_400Regular', 'sans-serif'],
        interBold: ['Inter_700Bold', 'sans-serif'],
        ubuntu: ['Ubuntu_400Regular', 'sans-serif'],
        ubuntuBold: ['Ubuntu_700Bold', 'sans-serif']
      }
    },
  },
  plugins: [],
};
