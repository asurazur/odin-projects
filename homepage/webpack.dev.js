// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    host: "0.0.0.0",
    port: 3000,
    open: true,
    hot: true,
    allowedHosts: "all",
  },
});
