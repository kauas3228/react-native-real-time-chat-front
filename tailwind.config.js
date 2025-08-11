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
        ubuntuBold: ['Ubuntu_700Bold', 'sans-serif'],
        LeckerliOne: ['LeckerliOne', 'sans-serif']
      },
      colors: {
        primary: '#5B8DEF',
        secondary: '#7D5EF4',
        sentMessage: '#D1FADF',
        receivedMessage: '#F2F2F2',
        lightBackground: '#FFFFFF',
        darkBackground: '#1E1E1E',
        textPrimary: '#222222',
        textSecondary: '#6B7280',
        error: '#F87171',
      }
    },
  },
  plugins: [],
};
