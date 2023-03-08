/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{html,js,ts, jsx, tsx}",
      "./components/**/*.{js,ts, jsx, tsx}"
  ],
  theme: {
    extend: {
        colors: {
            'my-green': '#209020',
            'my-purple': '#a060b0',
            'my-nav-bar': '#dedefe',
            'my-bg': 'lavender',
        },
    },
  },
  plugins: [],
}