/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url(../assets/HeroBg.jpg)",
        "stats": "url(../assets/stats-bg.jpg)"
      },
      colors: {
        "primary": "#F20C36",
        "secondary": "#2563EB",
        "terciary": "#1E1717",
        "paragraphs": "#404040",
        "section": "#E5E7EB"
      }
    },
  },
  plugins: [],
}

