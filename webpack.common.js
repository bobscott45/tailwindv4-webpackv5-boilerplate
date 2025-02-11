const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, ".", "js", "index"),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[name]-[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
      },
    ]
  }
};
