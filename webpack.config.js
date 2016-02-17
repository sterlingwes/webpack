var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var browserSyncOptions = {
  open: false,
  host: 'localhost',
  port: 8080,
  server: {
    baseDir: './'
  }
}

module.exports = {
  entry: {
    app: ['./demo/entry.js']
  },
  output: {
    path: __dirname + '/demo',
    filename: 'demo.js'
  },
  module: {
    loaders: [
      { test: /\.tag$/, loader: 'tag' },
      { test: /\.styl$/, loader: 'style!css!stylus' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      TOPICS: JSON.stringify(require('./topics')())
    }),
    new BrowserSyncPlugin(browserSyncOptions)
  ]
}
