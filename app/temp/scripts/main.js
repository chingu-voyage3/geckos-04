/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Person__ = __webpack_require__(2);

//var Person = require('./modules/Person')
alert("webpack integrated")
var john = new __WEBPACK_IMPORTED_MODULE_0__modules_Person__["a" /* default */]("john doe", "bluegreen");
john.greet();
var jane = new __WEBPACK_IMPORTED_MODULE_0__modules_Person__["a" /* default */]("jane smith", "orange");
jane.greet();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Person(name, favColour) {
  this.name = name;
  this.favouriteColour = favColour;
  this.greet = function() {
    console.log("hello mi nombre este" + this.name + "and my favourite colour is " + this.favouriteColour);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Person);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_startTime__ = __webpack_require__(4);

//var time = require('./modules/time')  ;

function display_time() {
  document.getElementById('time').innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__modules_startTime__["a" /* default */])();
  var recursion = setTimeout(display_time, 500); //500 == 0.5s
}

var Time = new display_time();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function startTime() {
  var today = new Date(),
      hour  = today.getHours(),
      minute = today.getMinutes(),
      seconds = today.getSeconds();

      //$('#time').text(hour + ":" +minute);
  //console.log(hour+":"+minute+":"+seconds);
  hour = ('0' + hour).slice(-2);
  minute = ('0' + minute).slice(-2);
  var time = hour + ":" + minute; //+ ":" + seconds;
  //this.time = time;
  return time
}
/* harmony default export */ __webpack_exports__["a"] = (startTime);


/***/ })
/******/ ]);