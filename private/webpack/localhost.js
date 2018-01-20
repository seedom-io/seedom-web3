const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.js');

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    port: 1234
  },
});
