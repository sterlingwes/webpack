var fs = require('fs')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

function findBundle (dir, path) {
  if (!path) path = ''
  var files = fs.readdirSync('./' + dir + (path ? '/' + path : ''))
  var bundle = files.filter(function (file) {
    return /^bundle/.test(file)
  })
  if (!bundle.length) return
  return path + '/' + bundle[0]
}

var project = fs.readdirSync('./')
var demos =
  project
    .filter(function (item) {
      var stats = fs.statSync(item)
      return stats.isDirectory() && /^[0-9][0-9]/.test(item)
    })
    .reduce(function (hash, dir) {
      var bundle = findBundle('./' + dir)
      if (!bundle) bundle = findBundle('./' + dir, 'dist')
      hash[dir] = bundle
      return hash
    }, {})

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
      TOPICS: JSON.stringify(demos)
    }),
    new BrowserSyncPlugin(browserSyncOptions)
  ]
}
