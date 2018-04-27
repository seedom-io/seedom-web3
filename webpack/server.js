const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./base.js');

const cwd = process.cwd();
const nodeModules = path.resolve(cwd, 'node_modules');

module.exports = merge(base, {
  name: 'server',
  target: 'node',
  entry: path.resolve(cwd, 'app/server.js'),
  externals: [nodeExternals({
    whitelist: [
      'react-universal-component',
      'require-universal-module',
      'webpack-flush-chunks',
    ]
  })],
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/server'),
    libraryTarget: 'commonjs2',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: nodeModules,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: nodeModules,
        loader: 'css-loader/locals'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: nodeModules,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: nodeModules,
        loader: ['file-loader']
      }
    ],
  }
});
