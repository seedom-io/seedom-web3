const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const loader = require('../../seedom-solidity/chronicle/loader');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      ETH_NETWORKS: JSON.stringify(loader.getNetworks()),
      ETH_DEPLOYMENTS: JSON.stringify(loader.getDeployments()),
      SEEDOM_URL: JSON.stringify('https://seedom.io'),
      BADGER_URL: JSON.stringify('https://seedom.io')
    })
  ]
};
