var render = require('./render')
var style = require('style!css!stylus!./view.styl')
var cat = require('file!./catjiff.gif')

render(cat, style)