/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        defBg: colors.neutral[800],
      },
      fontFamily: {
        defFamily: "NovaMono_400Regular",
      },
    },
  },
  plugins: [],
};
