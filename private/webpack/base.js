const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const fs = require('fs');

const cwd = process.cwd();

const getOutput = () => {
  const hashFile = path.resolve(cwd, '../seedom-solidity/hash/seedom.hash');
  const hash = fs.readFileSync(hashFile);
  const outputFile = path.resolve(cwd, `../seedom-solidity/output/${hash}.json`);
  return fs.readFileSync(outputFile);
};

module.exports = {
  entry: path.resolve(process.cwd(), 'app/index.js'),
  plugins: [
    new FaviconsWebpackPlugin(path.join(process.cwd(), 'app/img/logos/seedom-dark.svg')),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.ETH_OUTPUT': JSON.stringify(getOutput())
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
