const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const loader = require('../../../seedom-solidity/chronicle/loader');

const cwd = process.cwd();

module.exports = merge(base, {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({
      ETH_PATH: JSON.stringify('/'),
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      BADGER_URL: JSON.stringify('http://localhost:3000')
    })
  ]
});
