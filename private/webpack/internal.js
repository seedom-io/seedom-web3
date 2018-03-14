const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const h = require('./helper');


const cwd = process.cwd();

module.exports = merge(base, {
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/internal')
  },
  plugins: [
    new webpack.DefinePlugin({
      ETH_PATH: JSON.stringify('/internal/'),
      ETH_NETWORKS: JSON.stringify(h.getNetworks(cwd)),
      ETH_DEPLOYMENTS: JSON.stringify(h.getDeployments(cwd))
    })
  ]
});
