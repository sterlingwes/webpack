/* globals TOPICS */

var topics = Object.keys(TOPICS).map(function (dir) {
  var bundle = TOPICS[dir]
  return {
    name: dir.replace(/^[0-9][0-9]\s+/, ''),
    dir: dir,
    bundle: bundle
  }
})

var riot = require('riot')

require('./base.styl')

require('./picker.tag')
var pickerStyles = require('./picker.styl')

riot.mount('picker', { topics: topics, styles: pickerStyles })
