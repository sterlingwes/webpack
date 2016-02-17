var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '03 Async/dist/',
    filename: 'bundle-03-magic.js'
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(!!process.env.DEBUG)
    })
  ]
}
