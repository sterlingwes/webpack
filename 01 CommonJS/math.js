var theNumber = 0

module.exports = {
  add: function () { theNumber++ },
  sub: function () { theNumber-- },
  get: function () { return theNumber }
}
