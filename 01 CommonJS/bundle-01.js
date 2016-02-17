/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var setup = __webpack_require__(1)
	var MathMachine = __webpack_require__(3)

	setup()


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var h1

	var modules = {
	  foobar: __webpack_require__(2),
	  math: __webpack_require__(3)
	}

	function render (printVal) {
	  h1.innerHTML = printVal || modules.math.get()
	}

	function getClickHandler (btn) {
	  return function () {
	    var printVal = modules[btn.module][btn.action]()
	    render(printVal)
	  }
	}

	module.exports = function () {
	  var div = document.createElement('div')
	  div.id = 'topic01'
	  div.className = 'topic'

	  h1 = document.createElement('h1')
	  h1.id = 'theNumber'
	  div.appendChild(h1)

	  var buttons = __webpack_require__(4)

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Math = __webpack_require__(3)

	exports.foo = function () {
	  return 'foo->' + Math.get()
	}

	exports.bar = function () {
	  return Math.get() + '<-bar'
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	var theNumber = 0

	module.exports = {
	  add: function () { theNumber++ },
	  sub: function () { theNumber-- },
	  get: function () { return theNumber }
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports =
	  {
	    "Add": {
	      "module": "math",
	      "action": "add",
	    },
	    "Subtract": {
	      "module": "math",
	      "action": "sub"
	    },
	    "Put a Foo on it!": {
	      "module": "foobar",
	      "action": "foo"
	    },
	    "Bar that!": {
	      "module": "foobar",
	      "action": "bar"
	    }
	  }


/***/ }
/******/ ]);