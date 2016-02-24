var fs = require('fs')

/*
 * finds the bundle.js file in a given directory
 * - dir (string) the topic dir ie. '01 CommonJS'
 * - path (string, optional) sub directory to go into ie. 'dist'
 *
 * returns the bundle name, prepended with the optional sub path (no preceding /)
 */
function findBundle (dir, path) {
  if (!path) path = ''
  var files
  try {
    files = fs.readdirSync('./' + dir + (path ? '/' + path : ''))
    var bundle = files.filter(function (file) {
      return /^bundle/.test(file)
    })
    if (!bundle.length) return
    return path + '/' + bundle[0]
//
  } catch (e) { /* ha! don't care! */ }
}

/*
 * returns an object with:
 * - keys = topic name (minus 00 number)
 * - values = relative path to bundle.js
 *
 * .. for lazy-loading into our main demo app
 */
module.exports = function () {
  var project = fs.readdirSync('./')
  return project
    .filter(function (item) {
      var stats = fs.statSync(item)
      return stats.isDirectory() && /^[0-9][0-9]/.test(item)
    })
    .reduce(function (hash, dir) {
      var bundle = findBundle('./' + dir)
      if (!bundle) bundle = findBundle('./' + dir, 'dist')
      if (bundle) hash[dir] = bundle
      return hash
    }, {})
}
