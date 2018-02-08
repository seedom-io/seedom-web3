const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const h = require('./helper');

const cwd = process.cwd();

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    port: 1234
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
      ETH_URL: JSON.stringify('ws://localhost:8546'),
      ETH_CONTRACTS: JSON.stringify(h.getContracts(cwd, 'localhost'))
    })
  ]
});
