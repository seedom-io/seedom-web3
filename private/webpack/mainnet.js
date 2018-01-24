const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');

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
      'process.env.ETH_NODE': JSON.stringify('wss://manager2.seedom.io:8550'),
      'process.env.ETH_CONTRACT': JSON.stringify(require('/solidity/build/abi/seedom.json')),
      'process.env.ETH_DEPLOYMENTS': JSON.stringify(require('/solidity/deployment/mainnet.json')
    })
  ]
});
