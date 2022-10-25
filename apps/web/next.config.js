const withTM = require("next-transpile-modules")(["@react-jalali/calendar"]);

module.exports = withTM({
  reactStrictMode: true,
});
