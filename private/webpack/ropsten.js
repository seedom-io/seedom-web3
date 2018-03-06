const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const base = require('./base');
const h = require('./helper');

const cwd = process.cwd();

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/ropsten')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      ETH_PATH: JSON.stringify('/internal'),
      ETH_NETWORKS: JSON.stringify(h.getNetworks(cwd)),
      ETH_DEPLOYMENTS: JSON.stringify(h.getDeployments(cwd))
    })
  ]
});
