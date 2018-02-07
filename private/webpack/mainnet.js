const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');

const cwd = process.cwd();

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/mainnet')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
      'process.env.ETH_URL': JSON.stringify('wss://manager2.seedom.io:8550')
    })
  ]
});
