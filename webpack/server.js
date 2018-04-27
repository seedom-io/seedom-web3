const path = require('path');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const cwd = process.cwd();

module.exports = {
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
  plugins: [
    new WebappWebpackPlugin({
      inject: true,
      logo: path.join(cwd, 'app/img/logos/seedom-dark.svg')
    })
  ],
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
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'css-loader/locals'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: ['file-loader']
      }
    ],
  },
};
