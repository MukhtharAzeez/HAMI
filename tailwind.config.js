/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        bitter: ['Bitter', 'sans-serif'],
        fontFamily: {
          comic: ['Comic Neue', 'sans-serif'],
        },
        letterSpacing: {
          custom: '0.6px',  // You can add custom letter spacing
        },
        wordSpacing: {
          custom: '5px',  // Custom word spacing if you use it in Tailwind
        },
      },
    },
  },
  plugins: [],
}