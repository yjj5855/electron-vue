var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');


module.exports = {

  devtool: 'source-map',

  entry: {
    web_app:"./client/main",
    //公共库
    vendor : [
      'babel-polyfill',
      './env',
      'vue',
      'vue-router',
    ]
  },

  output: {
    path: __dirname + '/public/liveSearch',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[id].[chunkhash:8].js',
    publicPath: './'
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel' ,
        query: {
          cacheDirectory: true,
          presets: ['es2015','stage-3']
        }
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader") },
      { test: /\.png$/, loader: 'url' ,query: { mimetype: "image/png" } }
      
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
}
