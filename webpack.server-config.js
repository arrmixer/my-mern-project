const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  entry: ['./server/index.js', './node_modules/webpack/hot/poll?1000'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
  externals: [/^[a-z]/],
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
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015-node'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
