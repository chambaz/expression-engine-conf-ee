const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompilerPlugin = require('compiler-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')
const child_process = require('child_process')
const config = require('./config')
const glob = require('glob')

module.exports = {
  entry: {
    bundle: './app.js',
    style: './app.css',
    tmpl: glob.sync('./components/**/index.html')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, config.paths.dist),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        proxy: process.env.SITE || 'http://0.0.0.0:8080',
        port: 3000,
        files: ['public_html/dist/*.css']
      },
      {
        reload: false
      }
    ),
    new CleanWebpackPlugin([path.join(__dirname, config.paths.dist)], {
      root: process.cwd()
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack'
    }),
    new CompilerPlugin('done', function() {
      child_process.exec(`bash ./copy-components-to-partials.sh`)
    })
  ]
}
