/**
 * Created by Angel on 7/4/17.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: ['react', 'react-dom', 'whatwg-fetch', 'babel-polyfill', 'react-router', 'react-router-bootstrap'],
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
      '/api/*': {
        target: 'http://localhost:3000',
      },
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

