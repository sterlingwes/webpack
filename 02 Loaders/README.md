Here we demonstrate:

* Using loaders inline vs. pattern matched
* How loaders make Webpack a hybrid build / runtime tool
* Two implementations: webpack cli vs. webpack.config (& potential conflicts)
* Modular / localized CSS
* Inline styles vs. stylesheets
* Inline images
* How plugins are different

Build / Config Files:

* `build` - compile with inline CSS
* `webpack --config webpack.entry2.js` - compile with extracted CSS

App Files:

* `entry.js` - entry for build #1
* `entry2.js` - entry for build #2
* `render.js`