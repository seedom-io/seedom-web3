const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    port: 1234
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ETH_NODE': JSON.stringify('ws://localhost:8546'),
      'process.env.ETH_DEPLOYMENTS': require(path.join(__dirname, '../../../seedom-solidity/deployment/local.json'))
    })
  ]
});
