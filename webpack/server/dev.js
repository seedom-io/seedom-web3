const webpack = require('webpack');
const merge = require('webpack-merge');
const server = require('../server.js');
const loader = require('../../../seedom-solidity/chronicle/loader');

module.exports = merge(server, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development'),
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      SEEDOM_URL: JSON.stringify('http://localhost:8080'),
      BADGER_URL: JSON.stringify('http://localhost:3000')
    })
  ]
});
