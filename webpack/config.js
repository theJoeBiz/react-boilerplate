var path = require('path');

var autoprefixer = require('autoprefixer');

var loaders = require('./loaders');
var plugins = require('./plugins');
var env = require('./env');
var pkg = require('../package.json');

var host = pkg.config.devHost;
var port = pkg.config.devPort;
var buildDir = pkg.config.buildDir;

var entry = ['../src/index.js'];

if (env.DEBUG) {
  entry.push(`webpack-dev-server/client?http://${host}:${port}`);
}

var config = {
  context: path.join(__dirname, '../src'),
  cache: env.DEBUG,
  debug: env.DEBUG,
  target: 'web',
  devtool: !env.PROD ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(buildDir),
    publicPath: '/',
    filename: path.join('assets', 'js', '[name].js'),
    pathinfo: false
  },
  module: {
    loaders: loaders,
    noParse: /\.min\.js/
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devServer: {
    contentBase: path.resolve(buildDir),
    noInfo: false,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  }
};

module.exports = config;