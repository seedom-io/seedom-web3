const webpack = require('webpack');
const loader = require('../../seedom-solidity/chronicle/loader');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      SEEDOM_URL: JSON.stringify('http://localhost:8080'),
      BADGER_URL: JSON.stringify('http://localhost:3001')
    })
  ]
};
