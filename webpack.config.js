const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./index.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: __dirname + "/public",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
