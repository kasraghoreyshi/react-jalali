const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`, "../../packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
