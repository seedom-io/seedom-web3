const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const cwd = process.cwd();

module.exports = {
  entry: path.resolve(cwd, 'app/index.js'),
  plugins: [
    new WebappWebpackPlugin({
      inject: true,
      logo: path.join(cwd, 'app/img/logos/seedom-dark.svg')
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: ['file-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
