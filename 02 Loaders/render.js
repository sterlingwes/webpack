var view = require('jade!./view.jade')

module.exports = function (cat, style) {
  var html = view({
    message: 'Hello Webpack',
    containerClass: style.topic,
    catJiff: cat
  })

  var body = document.body
  body.insertAdjacentHTML('beforeend', html)

  setTimeout(function () {
    var container = body.children[body.children.length - 1]
    var div = container.children[0]
    div.className += ' ' + style.fadeIn
  }, 100)
}
