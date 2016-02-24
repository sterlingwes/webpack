var h1

var modules = {
  foobar: require('./foobar'),
  math: require('./math')
}

function render (printVal) {
  h1.innerHTML = printVal || modules.math.get()
}

/*
 * when a button gets clicked perform the action defined in ./buttons.js
 *
 * - btn (object) with module and action keys
 */
function getClickHandler (btn) {
  return function () {
    var printVal = modules[btn.module][btn.action]()
    render(printVal)
  }
}

/*
 * our module's "exposed API"
 *
 * kicks off our rendering & sets up button event listeners
 */
module.exports = function () {
  var div = document.createElement('div')
  div.id = 'topic01'
  div.className = 'topic'

  h1 = document.createElement('h1')
  h1.id = 'theNumber'
  div.appendChild(h1)

  var buttons = require('./buttons')

  Object.keys(buttons).forEach(function (label) {
    var btnDef = buttons[label]
    var button = document.createElement('button')
    button.onclick = getClickHandler(btnDef)
    button.style.marginRight = '10px'
    button.style.padding = '5px 10px'
    button.innerHTML = label
    div.appendChild(button)
  })

  document.body.appendChild(div)

  render()
}

if (module.hot) {
  module.hot.accept('./foobar', function () {
    modules.foobar = require('./foobar')
  })
}
