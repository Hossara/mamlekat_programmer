/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontWeight: {
      hairline: '10',
      thin: '100',
      ultraLight: '200',
      medium: '500',
      demiBold: '600',
      extraBold: '800',
      black: '900',
      extraBlack: '930',
      heavy: '960',
      fat: '990',
      bold: '800',
      normal: 'normal'
    },
    extend: {
      fontFamily: {
        dana: ["Dana", "sans-serif"]
      }
    },
  },
  plugins: [],
}