const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.js');

const cwd = process.cwd();
const nodeModules = path.resolve(cwd, 'node_modules');

module.exports = merge(base, {
  name: 'client',
  target: 'web',
  entry: path.resolve(cwd, 'app/client.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/client'),
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
        use: ['style-loader', 'css-loader', 'sass-loader']
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
