const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        resolve: {
          alias: {
            components: path.resolve(__dirname, "src/components/"),
            pages: path.resolve(__dirname, "src/pages/"),
            routes: path.resolve(__dirname, "src/routes")
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
