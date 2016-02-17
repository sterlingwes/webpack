/* globals DEBUG */

exports.colorStyle = function cardColor (colors) {
  if (!colors || !colors.length) return
  var colorStr = colors[0].toLowerCase()
  return 'background-color: ' + colorStr
}

exports.subset = function objectSubset (obj, amount) {
  var keys = Object.keys(obj).slice(0, amount)
  return keys.map(function (key) {
    return obj[key]
  })
}

/*
 * this becomes a no-op when DEBUG=true && webpack bundle is minified
 */
exports.logger = function (method, message) {
  if (!DEBUG) return
  console[method].call(console, message)
}
