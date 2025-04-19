/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         scrollbarTrack: '#040803', 
         scrollbarThumb: '#292C28',
          scrollbarBg: '#292C28', // Customize background color for scrollbar here
     },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}