var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './entry2.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '02 Loaders/dist/',
    filename: 'bundle-02.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
