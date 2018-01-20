const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');

module.exports = merge(base, {
  output: {
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
      'process.env.ETH_NODE': '165.227.126.255'
    })
  ]
});
