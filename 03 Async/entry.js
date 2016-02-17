/*
 * demonstrates code splitting!
 */
var styles = require('./cards.styl')
var container = require('./view.jade')
var cardTemplate = require('./cards.jade')
var helpers = require('./helpers')
var logger = helpers.logger

document.body.insertAdjacentHTML(
  'beforeend',
  container({ loadCards: loadCards })
)

var containerEl = document.getElementById('topic-03')
var magicBtn = document.getElementById('magicBtn')

magicBtn.onclick = function (e) {
  containerEl.insertAdjacentHTML('beforeend', '<div class="' + styles.loading + '">Loading...</div>')
  logger('info', 'loading cards')
  loadCards()
}

function loadCards () {
  require.ensure(['./magic.json'], function (require) {
    var cards = require('./magic.json')
    logger('log', Object.keys(cards).length, 'loaded')

    var cardHtml = cardTemplate({
      cards: helpers.subset(cards, 200),
      styles: styles,
      colorStyle: helpers.colorStyle
    })

    containerEl.insertAdjacentHTML('beforeend', cardHtml)
    document.querySelectorAll('.' + styles.loading)[0].remove()
    magicBtn.remove()
  })
}
