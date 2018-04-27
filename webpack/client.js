const path = require('path');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const cwd = process.cwd();

module.exports = {
  name: 'client',
  target: 'web',
  entry: path.resolve(cwd, 'app/client.js'),
  plugins: [
    new WebappWebpackPlugin({
      inject: true,
      logo: path.join(cwd, 'app/img/logos/seedom-dark.svg')
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/client'),
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
        use: ['style-loader', 'css-loader', 'sass-loader']
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
  }
};
