/**
 * Created by Angel on 7/4/17.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './client/Client.jsx',
    vendor: ['react', 'react-dom', 'isomorphic-fetch', 'babel-polyfill', 'react-router', 'react-router-bootstrap', 'react-bootstrap'],
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor'],
      minChunks: Infinity,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '**': {
        target: 'http://localhost:3000',
      },
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

