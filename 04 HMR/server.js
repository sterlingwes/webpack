var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var PORT = 8081

var config = require('./webpack.config.js')
config.entry.unshift('webpack/hot/dev-server')
config.entry.unshift('webpack-dev-server/client?http://localhost:' + PORT)
config.plugins.push(new webpack.HotModuleReplacementPlugin())

console.log('===== webpack config')
console.log(config)
console.log('=====')

var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
})

server.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('--> Server listening on localhost:' + PORT)
})
