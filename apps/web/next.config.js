const withTM = require("next-transpile-modules")(["@kasraghoreyshi/calendar"]);

module.exports = withTM({
  reactStrictMode: true,
});
