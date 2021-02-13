const p = require("path");
module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: "bundle.js",
    path: p.resolve(__dirname, "public")
  }
};
