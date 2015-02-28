'use strict';

var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },
  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack/hot/only-dev-server',
    './src/scripts/main.js'
  ],
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': './src/styles',
      'components': './src/scripts/components'
    }
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader!jsx-loader?harmony'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
