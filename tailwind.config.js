/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '800px',
      lg: '1080px',
    },
    extend: {
      colors: {
        'beandip-pink': '#ff7f6b',
      },
    },
  },
  plugins: [],
};
