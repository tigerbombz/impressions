var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var compression = require('compression')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
       loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};


