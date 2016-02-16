var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = require('./env');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

if (env.DEV) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (env.PROD) {
  plugins.push(
    new ExtractTextPlugin(path.join('assets', 'css', '[name].css'), { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') }}),
    new webpack.NoErrorsPlugin()
  );
}

plugins.push(new HtmlWebpackPlugin({
  template: 'index.html',
  hash: true,
  inject: false
}));

module.exports = plugins;