/*
 * demonstrates extracted css
 */
var render = require('./render')
var style = require('./view.styl')
var cat = require('file!./catjiff.gif')

var linkTag = document.createElement('link')
linkTag.type = 'text/css'
linkTag.rel = 'stylesheet'
linkTag.onload = render.bind(null, cat, style)
linkTag.href = '02 Loaders/dist/styles.css'

document.head.appendChild(linkTag)
