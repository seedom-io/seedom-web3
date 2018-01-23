const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');

module.exports = merge(base, {
  output: {
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ETH_NODE': JSON.stringify('wss://manager2.seedom.io:8550'),
      'process.env.ETH_DEPLOYMENTS': require(path.join(__dirname, '../../../seedom-solidity/deployment/mainnet.json'))
    })
  ]
});
