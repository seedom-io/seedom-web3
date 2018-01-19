const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), 'app/index.js'),
  output: {
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new FaviconsWebpackPlugin(path.join(process.cwd(), 'app/img/logos/seedom-dark.svg')),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
