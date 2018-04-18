const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "react-flexcanvas": ["./src"]
  },
  resolve: {
    modules: ["src", "node_modules"]
  },
  output: {
    path: path.resolve("lib"),
    library: "react-flexcanvas",
    libraryTarget: "umd",
    filename: "[name].js",
    sourceMapFilename: "[name].map.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};
