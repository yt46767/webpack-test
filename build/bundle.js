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

	'use strict';

	__webpack_require__(1);

	var _sub = __webpack_require__(6);

	var _sub2 = _interopRequireDefault(_sub);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  //我们这里使用CommonJS的风格
	  require('../css/main.css');
	  var sub = require('./sub');

	  var app  = document.createElement('div');
	  app.innerHTML = '<h1>Hello World</h1>';
	  document.body.appendChild(app);

	  app.appendChild(sub());
	*/

	//我们这里使用ES6的风格


	var app = document.createElement('div');
	app.innerHTML = '<h1>Hello World</h1>';
	document.body.appendChild(app);

	app.appendChild((0, _sub2.default)());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "h1 {\r\n    color: red;\r\n}\r\nh2 {\r\n  background: url(" + __webpack_require__(4) + ");\r\n}\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var element = document.createElement('h2');
	  element.innerHTML = "Hello h2 world";
	  return element;
	};

/***/ }
/******/ ]);