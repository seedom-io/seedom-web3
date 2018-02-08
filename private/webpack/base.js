const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const h = require('./helper');

const cwd = process.cwd();

module.exports = {
  entry: path.resolve(process.cwd(), 'app/index.js'),
  plugins: [
    new FaviconsWebpackPlugin(path.join(process.cwd(), 'app/img/logos/seedom-dark.svg')),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      ETH_CONTRACT_ABI: JSON.stringify(h.getContractAbi(cwd))
    })
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
