<picker>
  <ul class={ selector }>
    <li
      class={ parent.loaded[name] }
      each={ opts.topics }
      onclick={ parent.onSelectTopic }>{ name }</li>
  </ul>

  <script>
    this.loaded = {}
    this.selector = opts.styles.picker

    var loadedStyle = opts.styles.loaded

    function scriptOnLoad (name) {
      return function () { console.info('Loaded', name) }
    }

    function mountTopic (topic) {
      var bundle = document.createElement('script')
      bundle.onload = scriptOnLoad(topic.name)
      bundle.src = topic.dir + '/' + topic.bundle
      document.body.appendChild(bundle)
    }

    this.onSelectTopic = function (e) {
      if (this.loaded[e.item.name])
        return console.warn('already loaded', e.item.name)

      this.loaded[e.item.name] = loadedStyle
      mountTopic(e.item)
    }
  </script>
</picker>