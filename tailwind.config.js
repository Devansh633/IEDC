/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'greeen' :'#16A34A',
        'graay':'#EAEEF5',
        'graay-2':'#ECF0F6',
        'bluee':'#1E293B'
      }
    },
  },
  plugins: [require("daisyui")],
}

