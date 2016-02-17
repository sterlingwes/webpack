var Math = require('./math')

exports.foo = function () {
  return 'foo->' + Math.get()
}

exports.bar = function () {
  return Math.get() + '<-bar'
}
