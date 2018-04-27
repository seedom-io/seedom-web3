const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const server = require('../server');
const loader = require('../../../seedom-solidity/chronicle/loader');

module.exports = merge(server, {
  plugins: [
    new webpack.DefinePlugin({
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      SEEDOM_URL: JSON.stringify('https://seedom.io'),
      BADGER_URL: JSON.stringify('https://seedom.io')
    })
  ]
});
