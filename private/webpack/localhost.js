const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.js');
const h = require('./helper');

const cwd = process.cwd();

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/localhost')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
      ETH_PATH: JSON.stringify('/internal'),
      ETH_NETWORKS: JSON.stringify(h.getNetworks(cwd)),
      ETH_DEPLOYMENTS: JSON.stringify(h.getDeployments(cwd))
    })
  ]
});
