const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');

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
      'process.env.ETH_NODE': JSON.stringify('ws://localhost:8546'),
      'process.env.ETH_CONTRACT': JSON.stringify(require(path.join(cwd, '../seedom-solidity/build/abi/seedom.json'))),
      'process.env.ETH_DEPLOYMENTS': JSON.stringify(require(path.join(cwd, '../seedom-solidity/deployment/localhost.json')))
    })
  ]
});
