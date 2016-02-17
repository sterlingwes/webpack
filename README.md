# webpack
Various Webpack Experiments

### Start

`npm install`
`npm install -g webpack`

## Landscape

### Runtime-focused

AMD (Asynchronous Module Definition); still requires a combine step.

* [Require.js](http://requirejs.org)

### Build-focused

Concat, preprocess; doesn't solve app structure.

* [Grunt](http://gruntjs.com)
* [Gulp](http://gulpjs.com)
* [Broccoli](http://broccolijs.com/)

### Hybrid

Where the wild things are.

* [Browserify](http://browserify.org)
* [Webpack](http://webpack.github.io)
* [SystemJS](https://github.com/systemjs/systemjs)

## AMD vs. Common.js vs ES6

### AMD
```
define(['jquery'] , function ($) {
  return function () {}
})
```

### Common.js
exporter.js
```
exports.someMethod = function() {}
exports.another = {}
```
importer.js
```
var exporter = require('./exporter')
var someMethod = exporter.someMethod
someMethod()
typeof exporter.anoter === 'object'
```

### ES6
exporter.js
```
export function someMethod() {}
export var another = {}
```
importer.js
```
import { someMethod, another as newName } from './exporter'
someMethod()
typeof newName === 'object'
```