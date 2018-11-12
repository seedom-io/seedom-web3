const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const loader = require('../../seedom-solidity/chronicle/loader');

module.exports = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      SEEDOM_URL: JSON.stringify('https://seedom.io'),
      BADGER_URL: JSON.stringify('https://seedom.io')
    }),
    new UglifyJSPlugin()
  ]
};
