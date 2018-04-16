const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const h = require('./helper');

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
      ETH_NETWORKS: JSON.stringify(h.getNetworks(cwd)),
      ETH_DEPLOYMENTS: JSON.stringify(h.getDeployments(cwd))
    })
  ]
});
