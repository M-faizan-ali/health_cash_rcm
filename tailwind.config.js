/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],  
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        'body-color':'#f0f7fd',
        'custom-blue': '#8ed1fc',
        'g-blue':'#2e3482',
        'health-care-bg':'#0eceb9',
        'heading-color': '#031b4e',
        'p-color':'#666',
        'btn-color': '#3368c6',
        'special':'#01BBBE',
        'para-color':'#6e778c',
        'bg-color': '#5790AB',
        'bg-color': '#9CCDDB',
        'primary-heading-color':'#064469',
      },
      content: {
        'icon': '\\e92f',  
      },
    },
  },
  plugins: [],
}

