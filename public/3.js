(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-calendar/dist/Calendar.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-calendar/dist/Calendar.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  box-sizing: border-box;\n}\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n.react-calendar__navigation {\n  height: 44px;\n  margin-bottom: 1em;\n}\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__navigation button[disabled] {\n  background-color: #f0f0f0;\n}\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n.react-calendar__month-view__weekNumbers {\n  font-weight: bold;\n}\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n.react-calendar__month-view__days__day--weekend {\n  color: #d10000;\n}\n.react-calendar__month-view__days__day--neighboringMonth {\n  color: #757575;\n}\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n.react-calendar__tile {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n}\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * react-circular-progressbar styles\n * All of the styles in this file are configurable!\n */\n\n.CircularProgressbar {\n  /*\n   * This fixes an issue where the CircularProgressbar svg has\n   * 0 width inside a \"display: flex\" container, and thus not visible.\n   */\n  width: 100%;\n  /*\n   * This fixes a centering issue with CircularProgressbarWithChildren:\n   * https://github.com/kevinsqi/react-circular-progressbar/issues/94\n   */\n  vertical-align: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-path {\n  stroke: #3e98c7;\n  stroke-linecap: round;\n  -webkit-transition: stroke-dashoffset 0.5s ease 0s;\n  transition: stroke-dashoffset 0.5s ease 0s;\n}\n\n.CircularProgressbar .CircularProgressbar-trail {\n  stroke: #d6d6d6;\n  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */\n  stroke-linecap: round;\n}\n\n.CircularProgressbar .CircularProgressbar-text {\n  fill: #3e98c7;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n.CircularProgressbar .CircularProgressbar-background {\n  fill: #d6d6d6;\n}\n\n/*\n * Sample background styles. Use these with e.g.:\n *\n *   <CircularProgressbar\n *     className=\"CircularProgressbar-inverted\"\n *     background\n *     percentage={50}\n *   />\n */\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {\n  fill: #3e98c7;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {\n  fill: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {\n  stroke: #fff;\n}\n\n.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {\n  stroke: transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: getUserLocales, getUserLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocales", function() { return getUserLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return getUserLocale; });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);


function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

function getUserLocalesInternal() {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
}

var getUserLocales = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

var getUserLocale = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocaleInternal);
/* harmony default export */ __webpack_exports__["default"] = (getUserLocale);

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./Calendar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-calendar/dist/Calendar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _Navigation = _interopRequireDefault(__webpack_require__(/*! ./Calendar/Navigation */ "./node_modules/react-calendar/dist/Calendar/Navigation.js"));

var _CenturyView = _interopRequireDefault(__webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/CenturyView.js"));

var _DecadeView = _interopRequireDefault(__webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/DecadeView.js"));

var _YearView = _interopRequireDefault(__webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/YearView.js"));

var _MonthView = _interopRequireDefault(__webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/MonthView.js"));

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var datesAreDifferent = function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
};
/**
 * Returns views array with disallowed values cut off.
 */


var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
};
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
};
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */


var getView = function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return getLimitedViews(minDetail, maxDetail).pop();
};
/**
 * Returns value type that can be returned with currently applied settings.
 */


var getValueType = function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
};

var getValueFrom = function getValueFrom(value) {
  if (!value) {
    return null;
  }

  var rawValueFrom = value instanceof Array && value.length === 2 ? value[0] : value;

  if (!rawValueFrom) {
    return null;
  }

  var valueFromDate = new Date(rawValueFrom);

  if (isNaN(valueFromDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueFromDate;
};

var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
  var valueFrom = getValueFrom(value);

  if (!valueFrom) {
    return null;
  }

  var detailValueFrom = (0, _dates.getBegin)(getValueType(maxDetail), valueFrom);
  return (0, _utils.between)(detailValueFrom, minDate, maxDate);
};

var getValueTo = function getValueTo(value) {
  if (!value) {
    return null;
  }

  var rawValueTo = value instanceof Array && value.length === 2 ? value[1] : value;

  if (!rawValueTo) {
    return null;
  }

  var valueToDate = new Date(rawValueTo);

  if (isNaN(valueToDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueToDate;
};

var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
  var valueTo = getValueTo(value);

  if (!valueTo) {
    return null;
  }

  var detailValueTo = (0, _dates.getEnd)(getValueType(maxDetail), valueTo);
  return (0, _utils.between)(detailValueTo, minDate, maxDate);
};

var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
};

var getActiveStartDate = function getActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom(value, minDate, maxDate, maxDetail) || activeStartDate || new Date();
  return (0, _dates.getBegin)(rangeType, valueFrom);
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "setActiveStartDate", function (activeStartDate) {
      var onActiveDateChange = _this.props.onActiveDateChange;

      _this.setState({
        activeStartDate: activeStartDate
      }, function () {
        var view = _this.state.view;
        (0, _utils.callIfDefined)(onActiveDateChange, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drillDown", function (activeStartDate) {
      if (!_this.drillDownAvailable) {
        return;
      }

      var _this$props = _this.props,
          maxDetail = _this$props.maxDetail,
          minDetail = _this$props.minDetail,
          onDrillDown = _this$props.onDrillDown;
      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) + 1];
        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var view = _this.state.view;
        (0, _utils.callIfDefined)(onDrillDown, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drillUp", function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _this$props2 = _this.props,
          maxDetail = _this$props2.maxDetail,
          minDetail = _this$props2.minDetail,
          onDrillUp = _this$props2.onDrillUp;
      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) - 1];
        var activeStartDate = (0, _dates.getBegin)(nextView, prevState.activeStartDate);
        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var _this$state = _this.state,
            activeStartDate = _this$state.activeStartDate,
            view = _this$state.view;
        (0, _utils.callIfDefined)(onDrillUp, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          selectRange = _this$props3.selectRange;
      var nextValue;
      var callback;

      if (selectRange) {
        var previousValue = _this.state.value; // Range selection turned on

        if (!previousValue || [].concat(previousValue).length !== 1 // 0 or 2 - either way we're starting a new array
        ) {
            // First value
            nextValue = (0, _dates.getBegin)(_this.valueType, value);
          } else {
          // Second value
          nextValue = (0, _dates.getValueRange)(_this.valueType, previousValue, value);

          callback = function callback() {
            return (0, _utils.callIfDefined)(onChange, nextValue);
          };
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);

        callback = function callback() {
          return (0, _utils.callIfDefined)(onChange, nextValue);
        };
      }

      _this.setState({
        value: nextValue
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (value) {
      _this.setState(function (prevState) {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        hover: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          maxDetail = _this$props4.maxDetail,
          returnValue = _this$props4.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction(value, minDate, maxDate, maxDetail);
    }
    /**
     * Called when the user uses navigation buttons.
     */

  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props5 = this.props,
          calendarType = _this$props5.calendarType,
          locale = _this$props5.locale,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate,
          renderChildren = _this$props5.renderChildren,
          selectRange = _this$props5.selectRange,
          tileClassName = _this$props5.tileClassName,
          tileContent = _this$props5.tileContent,
          tileDisabled = _this$props5.tileDisabled;
      var _this$state2 = this.state,
          activeStartDate = _this$state2.activeStartDate,
          hover = _this$state2.hover,
          value = _this$state2.value,
          view = _this$state2.view;
      var onMouseOver = this.onMouseOver,
          valueType = this.valueType;
      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent || renderChildren,
        // For backwards compatibility
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };
      var clickAction = this.drillDownAvailable ? this.drillDown : this.onChange;

      switch (view) {
        case 'century':
          {
            var onClickDecade = this.props.onClickDecade;
            return _react["default"].createElement(_CenturyView["default"], _extends({
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickDecade)
            }, commonProps));
          }

        case 'decade':
          {
            var onClickYear = this.props.onClickYear;
            return _react["default"].createElement(_DecadeView["default"], _extends({
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickYear)
            }, commonProps));
          }

        case 'year':
          {
            var _this$props6 = this.props,
                formatMonth = _this$props6.formatMonth,
                onClickMonth = _this$props6.onClickMonth;
            return _react["default"].createElement(_YearView["default"], _extends({
              formatMonth: formatMonth,
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickMonth)
            }, commonProps));
          }

        case 'month':
          {
            var _this$props7 = this.props,
                formatShortWeekday = _this$props7.formatShortWeekday,
                onClickDay = _this$props7.onClickDay,
                onClickWeekNumber = _this$props7.onClickWeekNumber,
                showFixedNumberOfWeeks = _this$props7.showFixedNumberOfWeeks,
                showNeighboringMonth = _this$props7.showNeighboringMonth,
                showWeekNumbers = _this$props7.showWeekNumbers;
            var onMouseLeave = this.onMouseLeave;
            return _react["default"].createElement(_MonthView["default"], _extends({
              calendarType: calendarType,
              formatShortWeekday: formatShortWeekday,
              onClick: (0, _utils.mergeFunctions)(clickAction, onClickDay),
              onClickWeekNumber: onClickWeekNumber,
              onMouseLeave: onMouseLeave,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;

      if (!showNavigation) {
        return null;
      }

      var _this$props8 = this.props,
          formatMonthYear = _this$props8.formatMonthYear,
          locale = _this$props8.locale,
          maxDate = _this$props8.maxDate,
          maxDetail = _this$props8.maxDetail,
          minDate = _this$props8.minDate,
          minDetail = _this$props8.minDetail,
          navigationAriaLabel = _this$props8.navigationAriaLabel,
          navigationLabel = _this$props8.navigationLabel,
          next2AriaLabel = _this$props8.next2AriaLabel,
          next2Label = _this$props8.next2Label,
          nextAriaLabel = _this$props8.nextAriaLabel,
          nextLabel = _this$props8.nextLabel,
          prev2AriaLabel = _this$props8.prev2AriaLabel,
          prev2Label = _this$props8.prev2Label,
          prevAriaLabel = _this$props8.prevAriaLabel,
          prevLabel = _this$props8.prevLabel;
      var _this$state3 = this.state,
          activeStartDate = _this$state3.activeStartDate,
          view = _this$state3.view;
      return _react["default"].createElement(_Navigation["default"], {
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        navigationAriaLabel: navigationAriaLabel,
        navigationLabel: navigationLabel,
        next2AriaLabel: next2AriaLabel,
        next2Label: next2Label,
        nextAriaLabel: nextAriaLabel,
        nextLabel: nextLabel,
        prev2AriaLabel: prev2AriaLabel,
        prev2Label: prev2Label,
        prevAriaLabel: prevAriaLabel,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        view: view,
        views: getLimitedViews(minDetail, maxDetail)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          className = _this$props9.className,
          selectRange = _this$props9.selectRange;
      var value = this.state.value;
      var onMouseLeave = this.onMouseLeave;
      var valueArray = [].concat(value);
      return _react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), className)
      }, this.renderNavigation(), _react["default"].createElement("div", {
        className: "".concat(baseClassName, "__viewContainer"),
        onBlur: selectRange ? onMouseLeave : null,
        onMouseLeave: selectRange ? onMouseLeave : null
      }, this.renderContent()));
    }
  }, {
    key: "drillDownAvailable",
    get: function get() {
      var _this$props10 = this.props,
          maxDetail = _this$props10.maxDetail,
          minDetail = _this$props10.minDetail;
      var view = this.state.view;
      var views = getLimitedViews(minDetail, maxDetail);
      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: "drillUpAvailable",
    get: function get() {
      var _this$props11 = this.props,
          maxDetail = _this$props11.maxDetail,
          minDetail = _this$props11.minDetail;
      var view = this.state.view;
      var views = getLimitedViews(minDetail, maxDetail);
      return views.indexOf(view) > 0;
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          minDetail = nextProps.minDetail,
          maxDetail = nextProps.maxDetail;
      var nextState = {};
      /**
       * If the next activeStartDate is different from the current one, update
       * activeStartDate (for display) and activeStartDateProps (for future comparisons)
       */

      var nextActiveStartDate = getActiveStartDate(nextProps);

      if (datesAreDifferent(nextActiveStartDate, prevState.activeStartDateProps)) {
        nextState.activeStartDate = nextActiveStartDate;
        nextState.activeStartDateProps = nextActiveStartDate;
      }
      /**
       * If the next view is different from the current one, and the previously set view is not
       * valid based on minDetail and maxDetail, get a new one.
       */


      var nextView = getView(nextProps.view, minDetail, maxDetail);

      if (nextView !== prevState.viewProps && !isViewAllowed(prevState.view, minDetail, maxDetail)) {
        nextState.view = nextView;
        nextState.viewProps = nextView;
      }
      /**
       * If the next value is different from the current one (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var values = [nextProps.value, prevState.valueProps];

      if (nextState.view // Allowed view changed
      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getValueFrom(value, minDate, maxDate, maxDetail);
      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getValueTo(value, minDate, maxDate, maxDetail);
      })))) {
        nextState.value = nextProps.value;
        nextState.valueProps = nextProps.value;
      }

      if (!nextProps.selectRange && prevState.hover) {
        nextState.hover = null;
      }

      return nextState;
    }
  }]);

  return Calendar;
}(_react.Component);

exports["default"] = Calendar;
Calendar.defaultProps = {
  maxDetail: 'month',
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true,
  view: 'month'
};
Calendar.propTypes = {
  activeStartDate: _propTypes["default"].instanceOf(Date),
  calendarType: _propTypes2.isCalendarType,
  className: _propTypes2.isClassName,
  formatMonth: _propTypes["default"].func,
  formatMonthYear: _propTypes["default"].func,
  formatShortWeekday: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: _propTypes2.isMinDate,
  minDetail: _propTypes["default"].oneOf(allViews),
  navigationAriaLabel: _propTypes["default"].string,
  navigationLabel: _propTypes["default"].func,
  next2AriaLabel: _propTypes["default"].string,
  next2Label: _propTypes["default"].node,
  nextAriaLabel: _propTypes["default"].string,
  nextLabel: _propTypes["default"].node,
  onActiveDateChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onClickDay: _propTypes["default"].func,
  onClickDecade: _propTypes["default"].func,
  onClickMonth: _propTypes["default"].func,
  onClickWeekNumber: _propTypes["default"].func,
  onClickYear: _propTypes["default"].func,
  onDrillDown: _propTypes["default"].func,
  onDrillUp: _propTypes["default"].func,
  prev2AriaLabel: _propTypes["default"].string,
  prev2Label: _propTypes["default"].node,
  prevAriaLabel: _propTypes["default"].string,
  prevLabel: _propTypes["default"].node,
  renderChildren: _propTypes["default"].func,
  // For backwards compatibility
  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  selectRange: _propTypes["default"].bool,
  showFixedNumberOfWeeks: _propTypes["default"].bool,
  showNavigation: _propTypes["default"].bool,
  showNeighboringMonth: _propTypes["default"].bool,
  showWeekNumbers: _propTypes["default"].bool,
  tileClassName: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes2.isClassName]),
  tileContent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),
  tileDisabled: _propTypes["default"].func,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes2.isValue]),
  view: _propTypes["default"].oneOf(allViews)
};
(0, _reactLifecyclesCompat.polyfill)(Calendar);

/***/ }),

/***/ "./node_modules/react-calendar/dist/Calendar/Navigation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/Calendar/Navigation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navigation;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var className = 'react-calendar__navigation';

function Navigation(_ref) {
  var date = _ref.activeStartDate,
      drillUp = _ref.drillUp,
      formatMonthYear = _ref.formatMonthYear,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      navigationAriaLabel = _ref.navigationAriaLabel,
      navigationLabel = _ref.navigationLabel,
      next2AriaLabel = _ref.next2AriaLabel,
      next2Label = _ref.next2Label,
      nextAriaLabel = _ref.nextAriaLabel,
      nextLabel = _ref.nextLabel,
      prev2AriaLabel = _ref.prev2AriaLabel,
      prev2Label = _ref.prev2Label,
      prevAriaLabel = _ref.prevAriaLabel,
      prevLabel = _ref.prevLabel,
      setActiveStartDate = _ref.setActiveStartDate,
      view = _ref.view,
      views = _ref.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = (0, _dates.getBeginPrevious)(view, date);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons && (0, _dates.getBeginPrevious2)(view, date);
  var nextActiveStartDate = (0, _dates.getBeginNext)(view, date);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons && (0, _dates.getBeginNext2)(view, date);

  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = (0, _dates.getEndPrevious)(view, date);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = (0, _dates.getEndPrevious2)(view, date);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  var label = function () {
    switch (view) {
      case 'century':
        return (0, _dates.getCenturyLabel)(date);

      case 'decade':
        return (0, _dates.getDecadeLabel)(date);

      case 'year':
        return (0, _dates.getYear)(date);

      case 'month':
        return formatMonthYear(locale, date);

      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }();

  return _react["default"].createElement("div", {
    className: className,
    style: {
      display: 'flex'
    }
  }, prev2Label !== null && shouldShowPrevNext2Buttons && _react["default"].createElement("button", {
    "aria-label": prev2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button"
  }, prev2Label), _react["default"].createElement("button", {
    "aria-label": prevAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button"
  }, prevLabel), _react["default"].createElement("button", {
    "aria-label": navigationAriaLabel,
    className: "react-calendar__navigation__label",
    disabled: !drillUpAvailable,
    onClick: drillUp,
    style: {
      flexGrow: 1
    },
    type: "button"
  }, navigationLabel ? navigationLabel({
    date: date,
    view: view,
    label: label
  }) : label), _react["default"].createElement("button", {
    "aria-label": nextAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button"
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && _react["default"].createElement("button", {
    "aria-label": next2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button"
  }, next2Label));
}

Navigation.defaultProps = {
  formatMonthYear: _dateFormatter.formatMonthYear,
  navigationAriaLabel: '',
  next2AriaLabel: '',
  next2Label: '»',
  nextAriaLabel: '',
  nextLabel: '›',
  prev2AriaLabel: '',
  prev2Label: '«',
  prevAriaLabel: '',
  prevLabel: '‹'
};
Navigation.propTypes = {
  activeStartDate: _propTypes["default"].instanceOf(Date).isRequired,
  drillUp: _propTypes["default"].func.isRequired,
  formatMonthYear: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxDate: _propTypes["default"].instanceOf(Date),
  minDate: _propTypes["default"].instanceOf(Date),
  navigationAriaLabel: _propTypes["default"].string,
  navigationLabel: _propTypes["default"].func,
  next2AriaLabel: _propTypes["default"].string,
  next2Label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  nextAriaLabel: _propTypes["default"].string,
  nextLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  prev2AriaLabel: _propTypes["default"].string,
  prev2Label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  prevAriaLabel: _propTypes["default"].string,
  prevLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  setActiveStartDate: _propTypes["default"].func.isRequired,
  view: _propTypes2.isView.isRequired,
  views: _propTypes2.isViews.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CenturyView;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Decades = _interopRequireDefault(__webpack_require__(/*! ./CenturyView/Decades */ "./node_modules/react-calendar/dist/CenturyView/Decades.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CenturyView(props) {
  function renderDecades() {
    return _react["default"].createElement(_Decades["default"], props);
  }

  return _react["default"].createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView/Decade.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView/Decade.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Decade;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__century-view__decades__decade';

function Decade(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

  return _react["default"].createElement(_Tile["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _dates.getEndOfDecade,
    minDateTransform: _dates.getBeginOfDecade,
    view: "century"
  }), (0, _dates.getDecadeLabel)(point));
}

Decade.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  point: _propTypes["default"].number.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/CenturyView/Decades.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/CenturyView/Decades.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Decades;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TileGroup = _interopRequireDefault(__webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js"));

var _Decade = _interopRequireDefault(__webpack_require__(/*! ./Decade */ "./node_modules/react-calendar/dist/CenturyView/Decade.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0, _dates.getBeginOfCenturyYear)(activeStartDate);
  var end = start + 99;
  return _react["default"].createElement(_TileGroup["default"], _extends({}, props, {
    className: "react-calendar__century-view__decades",
    dateTransform: _dates.getBeginOfDecade,
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: _Decade["default"]
  }));
}

Decades.propTypes = _objectSpread({}, _propTypes.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView.js":
/*!********************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DecadeView;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Years = _interopRequireDefault(__webpack_require__(/*! ./DecadeView/Years */ "./node_modules/react-calendar/dist/DecadeView/Years.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DecadeView(props) {
  function renderYears() {
    return _react["default"].createElement(_Years["default"], props);
  }

  return _react["default"].createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView/Year.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView/Year.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Year;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__decade-view__years__year';

function Year(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

  return _react["default"].createElement(_Tile["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _dates.getEndOfYear,
    minDateTransform: _dates.getBeginOfYear,
    view: "decade"
  }), point);
}

Year.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  point: _propTypes["default"].number.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/DecadeView/Years.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/DecadeView/Years.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Years;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TileGroup = _interopRequireDefault(__webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js"));

var _Year = _interopRequireDefault(__webpack_require__(/*! ./Year */ "./node_modules/react-calendar/dist/DecadeView/Year.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0, _dates.getBeginOfDecadeYear)(activeStartDate);
  var end = start + 9;
  return _react["default"].createElement(_TileGroup["default"], _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      return new Date(year, 0, 1);
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year["default"]
  }));
}

Years.propTypes = _objectSpread({}, _propTypes.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/Flex.js":
/*!**************************************************!*\
  !*** ./node_modules/react-calendar/dist/Flex.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Flex;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function toPercent(num) {
  return "".concat(num, "%");
}

function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  return _react["default"].createElement("div", _extends({
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap'
    }, style)
  }, otherProps), _react["default"].Children.map(children, function (child, index) {
    return _react["default"].cloneElement(child, _objectSpread({}, child.props, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}

Flex.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  count: _propTypes["default"].number.isRequired,
  direction: _propTypes["default"].string,
  offset: _propTypes["default"].number,
  style: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  wrap: _propTypes["default"].bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthView;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Days = _interopRequireDefault(__webpack_require__(/*! ./MonthView/Days */ "./node_modules/react-calendar/dist/MonthView/Days.js"));

var _Weekdays = _interopRequireDefault(__webpack_require__(/*! ./MonthView/Weekdays */ "./node_modules/react-calendar/dist/MonthView/Weekdays.js"));

var _WeekNumbers = _interopRequireDefault(__webpack_require__(/*! ./MonthView/WeekNumbers */ "./node_modules/react-calendar/dist/MonthView/WeekNumbers.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MonthView(props) {
  var activeStartDate = props.activeStartDate,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var calendarTypeProps = props.calendarType,
      formatShortWeekday = props.formatShortWeekday,
      onClickWeekNumber = props.onClickWeekNumber,
      showWeekNumbers = props.showWeekNumbers,
      childProps = _objectWithoutProperties(props, ["calendarType", "formatShortWeekday", "onClickWeekNumber", "showWeekNumbers"]);

  var calendarType = function () {
    if (calendarTypeProps) {
      return calendarTypeProps;
    }

    switch (locale) {
      case 'en-CA':
      case 'en-US':
      case 'es-AR':
      case 'es-BO':
      case 'es-CL':
      case 'es-CO':
      case 'es-CR':
      case 'es-DO':
      case 'es-EC':
      case 'es-GT':
      case 'es-HN':
      case 'es-MX':
      case 'es-NI':
      case 'es-PA':
      case 'es-PE':
      case 'es-PR':
      case 'es-SV':
      case 'es-VE':
      case 'pt-BR':
        return 'US';
      // ar-LB, ar-MA intentionally missing

      case 'ar':
      case 'ar-AE':
      case 'ar-BH':
      case 'ar-DZ':
      case 'ar-EG':
      case 'ar-IQ':
      case 'ar-JO':
      case 'ar-KW':
      case 'ar-LY':
      case 'ar-OM':
      case 'ar-QA':
      case 'ar-SA':
      case 'ar-SD':
      case 'ar-SY':
      case 'ar-YE':
      case 'dv':
      case 'dv-MV':
      case 'ps':
      case 'ps-AR':
        return 'Arabic';

      case 'he':
      case 'he-IL':
        return 'Hebrew';

      default:
        return 'ISO 8601';
    }
  }();

  function renderWeekdays() {
    return _react["default"].createElement(_Weekdays["default"], {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return _react["default"].createElement(_WeekNumbers["default"], {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }

  function renderDays() {
    return _react["default"].createElement(_Days["default"], _extends({
      calendarType: calendarType
    }, childProps));
  }

  var className = 'react-calendar__month-view';
  return _react["default"].createElement("div", {
    className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, renderWeekNumbers(), _react["default"].createElement("div", {
    style: {
      flexGrow: 1,
      width: '100%'
    }
  }, renderWeekdays(), renderDays())));
}

MonthView.propTypes = {
  activeStartDate: _propTypes["default"].instanceOf(Date).isRequired,
  calendarType: _propTypes2.isCalendarType,
  formatShortWeekday: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes["default"].func,
  onClickWeekNumber: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  setActiveRange: _propTypes["default"].func,
  showFixedNumberOfWeeks: _propTypes["default"].bool,
  showNeighboringMonth: _propTypes["default"].bool,
  showWeekNumbers: _propTypes["default"].bool,
  value: _propTypes2.isValue,
  valueType: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Day.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Day.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Day;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__month-view__days__day';

function Day(_ref) {
  var calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      date = _ref.date,
      otherProps = _objectWithoutProperties(_ref, ["calendarType", "classes", "currentMonthIndex", "date"]);

  return _react["default"].createElement(_Tile["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className, (0, _dates.isWeekend)(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    date: date,
    formatAbbr: _dateFormatter.formatLongDate,
    maxDateTransform: _dates.getEndOfDay,
    minDateTransform: _dates.getBeginOfDay,
    view: "month"
  }), (0, _dates.getDay)(date));
}

Day.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  currentMonthIndex: _propTypes["default"].number.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Days.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Days.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Days;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TileGroup = _interopRequireDefault(__webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js"));

var _Day = _interopRequireDefault(__webpack_require__(/*! ./Day */ "./node_modules/react-calendar/dist/MonthView/Day.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Days(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType;

  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
      showNeighboringMonth = props.showNeighboringMonth,
      otherProps = _objectWithoutProperties(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

  var year = (0, _dates.getYear)(activeStartDate);
  var monthIndex = (0, _dates.getMonthIndex)(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */

  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */

  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    var daysInMonth = (0, _dates.getDaysInMonth)(activeStartDate);

    if (showNeighboringMonth) {
      var activeEndDate = new Date(year, monthIndex, daysInMonth);
      return daysInMonth + (7 - (0, _dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
    }

    return daysInMonth;
  }();

  return _react["default"].createElement(_TileGroup["default"], _extends({}, otherProps, {
    className: "react-calendar__month-view__days",
    count: 7,
    currentMonthIndex: monthIndex,
    dateTransform: function dateTransform(day) {
      return new Date(year, monthIndex, day);
    },
    dateType: "day",
    end: end,
    offset: offset,
    start: start,
    tile: _Day["default"]
  }));
}

Days.propTypes = _objectSpread({
  calendarType: _propTypes2.isCalendarType.isRequired,
  showFixedNumberOfWeeks: _propTypes["default"].bool,
  showNeighboringMonth: _propTypes["default"].bool
}, _propTypes2.tileGroupProps);

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/WeekNumber.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/WeekNumber.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WeekNumber;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  return onClickWeekNumber ? _react["default"].createElement("button", {
    className: "react-calendar__tile",
    onClick: function onClick() {
      return onClickWeekNumber(weekNumber, date);
    },
    style: {
      flexGrow: 1
    },
    type: "button"
  }, _react["default"].createElement("span", null, weekNumber)) : _react["default"].createElement("div", {
    className: "react-calendar__tile",
    style: {
      flexGrow: 1
    }
  }, _react["default"].createElement("span", null, weekNumber));
}

WeekNumber.propTypes = {
  date: _propTypes["default"].instanceOf(Date).isRequired,
  onClickWeekNumber: _propTypes["default"].func,
  weekNumber: _propTypes["default"].number.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/WeekNumbers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/WeekNumbers.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WeekNumbers;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _WeekNumber = _interopRequireDefault(__webpack_require__(/*! ./WeekNumber */ "./node_modules/react-calendar/dist/MonthView/WeekNumber.js"));

var _Flex = _interopRequireDefault(__webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/Flex.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType,
      onClickWeekNumber = props.onClickWeekNumber,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    var numberOfDays = (0, _dates.getDaysInMonth)(activeStartDate);
    var startWeekday = (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();

  var dates = function () {
    var year = (0, _dates.getYear)(activeStartDate);
    var monthIndex = (0, _dates.getMonthIndex)(activeStartDate);
    var day = (0, _dates.getDay)(activeStartDate);
    var result = [];

    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push((0, _dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }();

  var weekNumbers = dates.map(function (date) {
    return (0, _dates.getWeekNumber)(date, calendarType);
  });
  return _react["default"].createElement(_Flex["default"], {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    return _react["default"].createElement(_WeekNumber["default"], {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}

WeekNumbers.propTypes = {
  activeStartDate: _propTypes["default"].instanceOf(Date).isRequired,
  calendarType: _propTypes2.isCalendarType.isRequired,
  onClickWeekNumber: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  showFixedNumberOfWeeks: _propTypes["default"].bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/MonthView/Weekdays.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/MonthView/Weekdays.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Weekdays;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Flex = _interopRequireDefault(__webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/Flex.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Weekdays(props) {
  var calendarType = props.calendarType,
      formatShortWeekday = props.formatShortWeekday,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = (0, _dates.getBeginOfMonth)(anyDate);
  var year = (0, _dates.getYear)(beginOfMonth);
  var monthIndex = (0, _dates.getMonthIndex)(beginOfMonth);
  var weekdays = [];

  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - (0, _dates.getDayOfWeek)(beginOfMonth, calendarType));
    var abbr = (0, _dateFormatter.formatWeekday)(locale, weekdayDate);
    weekdays.push(_react["default"].createElement("div", {
      key: weekday,
      className: "react-calendar__month-view__weekdays__weekday"
    }, _react["default"].createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return _react["default"].createElement(_Flex["default"], {
    className: "react-calendar__month-view__weekdays",
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}

Weekdays.defaultProps = {
  formatShortWeekday: _dateFormatter.formatShortWeekday
};
Weekdays.propTypes = {
  calendarType: _propTypes2.isCalendarType.isRequired,
  formatShortWeekday: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  onMouseLeave: _propTypes["default"].func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/Tile.js":
/*!**************************************************!*\
  !*** ./node_modules/react-calendar/dist/Tile.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile =
/*#__PURE__*/
function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeStartDate = _this$props.activeStartDate,
          children = _this$props.children,
          classes = _this$props.classes,
          date = _this$props.date,
          formatAbbr = _this$props.formatAbbr,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxDateTransform = _this$props.maxDateTransform,
          minDate = _this$props.minDate,
          minDateTransform = _this$props.minDateTransform,
          onClick = _this$props.onClick,
          onMouseOver = _this$props.onMouseOver,
          style = _this$props.style,
          tileDisabled = _this$props.tileDisabled,
          view = _this$props.view;
      var _this$state = this.state,
          tileClassName = _this$state.tileClassName,
          tileContent = _this$state.tileContent;
      return _react["default"].createElement("button", {
        className: (0, _mergeClassNames["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate: activeStartDate,
          date: date,
          view: view
        }),
        onClick: onClick && function () {
          return onClick(date);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        style: style,
        type: "button"
      }, formatAbbr ? _react["default"].createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
      }, children) : children, tileContent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var date = nextProps.date,
          tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent,
          view = nextProps.view;
      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = typeof tileClassName === 'function' ? tileClassName({
          date: date,
          view: view
        }) : tileClassName;
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = typeof tileContent === 'function' ? tileContent({
          date: date,
          view: view
        }) : tileContent;
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(_react.Component);

exports["default"] = Tile;
Tile.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  children: _propTypes["default"].node.isRequired,
  formatAbbr: _propTypes["default"].func,
  maxDateTransform: _propTypes["default"].func.isRequired,
  minDateTransform: _propTypes["default"].func.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/TileGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/TileGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TileGroup;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Flex = _interopRequireDefault(__webpack_require__(/*! ./Flex */ "./node_modules/react-calendar/dist/Flex.js"));

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/shared/utils.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TileGroup(_ref) {
  var className = _ref.className,
      count = _ref.count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      step = _ref.step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(_react["default"].createElement(Tile, _extends({
      key: date.getTime(),
      classes: (0, _utils.getTileClasses)({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }

  return _react["default"].createElement(_Flex["default"], {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}

TileGroup.propTypes = _objectSpread({}, _propTypes2.tileGroupProps, {
  activeStartDate: _propTypes["default"].instanceOf(Date),
  count: _propTypes["default"].number,
  dateTransform: _propTypes["default"].func.isRequired,
  offset: _propTypes["default"].number,
  step: _propTypes["default"].number,
  tile: _propTypes["default"].func.isRequired
});
TileGroup.defaultProps = {
  count: 3,
  step: 1
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = YearView;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Months = _interopRequireDefault(__webpack_require__(/*! ./YearView/Months */ "./node_modules/react-calendar/dist/YearView/Months.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function YearView(props) {
  function renderMonths() {
    return _react["default"].createElement(_Months["default"], props);
  }

  return _react["default"].createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView/Month.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView/Month.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Month;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/Tile.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _dateFormatter = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/shared/dateFormatter.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__year-view__months__month';

function Month(_ref) {
  var classes = _ref.classes,
      date = _ref.date,
      formatMonth = _ref.formatMonth,
      locale = _ref.locale,
      otherProps = _objectWithoutProperties(_ref, ["classes", "date", "formatMonth", "locale"]);

  return _react["default"].createElement(_Tile["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    date: date,
    formatAbbr: _dateFormatter.formatMonthYear,
    locale: locale,
    maxDateTransform: _dates.getEndOfMonth,
    minDateTransform: _dates.getBeginOfMonth,
    view: "year"
  }), formatMonth(locale, date));
}

Month.defaultProps = {
  formatMonth: _dateFormatter.formatMonth
};
Month.propTypes = _objectSpread({}, _propTypes2.tileProps, {
  formatMonth: _propTypes["default"].func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/YearView/Months.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/YearView/Months.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Months;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _TileGroup = _interopRequireDefault(__webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/TileGroup.js"));

var _Month = _interopRequireDefault(__webpack_require__(/*! ./Month */ "./node_modules/react-calendar/dist/YearView/Month.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = (0, _dates.getYear)(activeStartDate);
  return _react["default"].createElement(_TileGroup["default"], _extends({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      return new Date(year, monthIndex, 1);
    },
    dateType: "month",
    end: end,
    start: start,
    tile: _Month["default"]
  }));
}

Months.propTypes = _objectSpread({}, _propTypes2.tileGroupProps, {
  locale: _propTypes["default"].string
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/entry.js":
/*!***************************************************!*\
  !*** ./node_modules/react-calendar/dist/entry.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function get() {
    return _Calendar["default"];
  }
});
Object.defineProperty(exports, "CenturyView", {
  enumerable: true,
  get: function get() {
    return _CenturyView["default"];
  }
});
Object.defineProperty(exports, "DecadeView", {
  enumerable: true,
  get: function get() {
    return _DecadeView["default"];
  }
});
Object.defineProperty(exports, "YearView", {
  enumerable: true,
  get: function get() {
    return _YearView["default"];
  }
});
Object.defineProperty(exports, "MonthView", {
  enumerable: true,
  get: function get() {
    return _MonthView["default"];
  }
});
exports["default"] = void 0;

var _Calendar = _interopRequireDefault(__webpack_require__(/*! ./Calendar */ "./node_modules/react-calendar/dist/Calendar.js"));

var _CenturyView = _interopRequireDefault(__webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/CenturyView.js"));

var _DecadeView = _interopRequireDefault(__webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/DecadeView.js"));

var _YearView = _interopRequireDefault(__webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/YearView.js"));

var _MonthView = _interopRequireDefault(__webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/MonthView.js"));

__webpack_require__(/*! ./Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _Calendar["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/dateFormatter.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/dateFormatter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatShortWeekday = exports.formatWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatLongDate = exports.formatDate = void 0;

var _getUserLocale = _interopRequireDefault(__webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatDate = getSafeFormatter(formatDateOptions);
exports.formatDate = formatDate;
var formatLongDate = getSafeFormatter(formatLongDateOptions);
exports.formatLongDate = formatLongDate;
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
exports.formatMonthYear = formatMonthYear;
var formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
exports.formatWeekday = formatWeekday;
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
exports.formatShortWeekday = formatShortWeekday;

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/dates.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/dates.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYear = getYear;
exports.getMonth = getMonth;
exports.getMonthIndex = getMonthIndex;
exports.getDay = getDay;
exports.getDayOfWeek = getDayOfWeek;
exports.getBeginOfCenturyYear = getBeginOfCenturyYear;
exports.getBeginOfCentury = getBeginOfCentury;
exports.getEndOfCentury = getEndOfCentury;
exports.getCenturyRange = getCenturyRange;
exports.getBeginOfPreviousCentury = getBeginOfPreviousCentury;
exports.getEndOfPreviousCentury = getEndOfPreviousCentury;
exports.getBeginOfNextCentury = getBeginOfNextCentury;
exports.getBeginOfDecadeYear = getBeginOfDecadeYear;
exports.getBeginOfDecade = getBeginOfDecade;
exports.getEndOfDecade = getEndOfDecade;
exports.getDecadeRange = getDecadeRange;
exports.getBeginOfPreviousDecade = getBeginOfPreviousDecade;
exports.getEndOfPreviousDecade = getEndOfPreviousDecade;
exports.getBeginOfNextDecade = getBeginOfNextDecade;
exports.getBeginOfYear = getBeginOfYear;
exports.getEndOfYear = getEndOfYear;
exports.getYearRange = getYearRange;
exports.getBeginOfPreviousYear = getBeginOfPreviousYear;
exports.getEndOfPreviousYear = getEndOfPreviousYear;
exports.getBeginOfNextYear = getBeginOfNextYear;
exports.getBeginOfMonth = getBeginOfMonth;
exports.getEndOfMonth = getEndOfMonth;
exports.getBeginOfWeek = getBeginOfWeek;
exports.getMonthRange = getMonthRange;
exports.getBeginOfPreviousMonth = getBeginOfPreviousMonth;
exports.getEndOfPreviousMonth = getEndOfPreviousMonth;
exports.getBeginOfNextMonth = getBeginOfNextMonth;
exports.getBeginOfDay = getBeginOfDay;
exports.getEndOfDay = getEndOfDay;
exports.getDayRange = getDayRange;
exports.getWeekNumber = getWeekNumber;
exports.getBegin = getBegin;
exports.getBeginPrevious = getBeginPrevious;
exports.getBeginNext = getBeginNext;
exports.getEnd = getEnd;
exports.getEndPrevious = getEndPrevious;
exports.getRange = getRange;
exports.getValueRange = getValueRange;
exports.getDaysInMonth = getDaysInMonth;
exports.getCenturyLabel = getCenturyLabel;
exports.getDecadeLabel = getDecadeLabel;
exports.isWeekend = isWeekend;
exports.getISOLocalMonth = getISOLocalMonth;
exports.getISOLocalDate = getISOLocalDate;
exports.getEndPrevious2 = exports.getBeginNext2 = exports.getBeginPrevious2 = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _map = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
}),
    _map2 = _slicedToArray(_map, 7),
    // eslint-disable-next-line no-unused-vars
SUNDAY = _map2[0],
    MONDAY = _map2[1],
    TUESDAY = _map2[2],
    WEDNESDAY = _map2[3],
    THURSDAY = _map2[4],
    FRIDAY = _map2[5],
    SATURDAY = _map2[6];
/* Simple getters - getting a property of a given point in time */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}

function getMonth(date) {
  return date.getMonth() + 1;
}

function getMonthIndex(date) {
  return date.getMonth();
}

function getDay(date) {
  return date.getDate();
}

function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var weekday = date.getDay();

  switch (calendarType) {
    case 'ISO 8601':
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case 'Arabic':
      return (weekday + 1) % 7;

    case 'Hebrew':
    case 'US':
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/* Complex getters - getting a property somehow related to a given point in time */


function getBeginOfCenturyYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 100 + 1;
}

function getBeginOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear, 0, 1);
}

function getEndOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear + 100, 0, 1, 0, 0, 0, -1);
}

function getCenturyRange(date) {
  return [getBeginOfCentury(date), getEndOfCentury(date)];
}

function getBeginOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getBeginOfCentury(previousCenturyYear);
}

function getEndOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getEndOfCentury(previousCenturyYear);
}

function getBeginOfNextCentury(date) {
  var nextCenturyYear = getYear(date) + 100;
  return getBeginOfCentury(nextCenturyYear);
}

function getBeginOfDecadeYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 10 + 1;
}

function getBeginOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear, 0, 1);
}

function getEndOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear + 10, 0, 1, 0, 0, 0, -1);
}

function getDecadeRange(date) {
  return [getBeginOfDecade(date), getEndOfDecade(date)];
}

function getBeginOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getBeginOfDecade(previousDecadeYear);
}

function getEndOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getEndOfDecade(previousDecadeYear);
}

function getBeginOfNextDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var nextDecadeYear = getBeginOfDecadeYear(date) + offset;
  return getBeginOfDecade(nextDecadeYear);
}
/**
 * Returns the beginning of a given year.
 *
 * @param {Date} date Date.
 */


function getBeginOfYear(date) {
  var year = getYear(date);
  return new Date(year, 0, 1);
}
/**
 * Returns the end of a given year.
 *
 * @param {Date} date Date.
 */


function getEndOfYear(date) {
  var year = getYear(date);
  return new Date(year + 1, 0, 1, 0, 0, 0, -1);
}
/**
 * Returns an array with the beginning and the end of a given year.
 *
 * @param {Date} date Date.
 */


function getYearRange(date) {
  return [getBeginOfYear(date), getEndOfYear(date)];
}

function getBeginOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousYear = getYear(date) - offset;
  return getBeginOfYear(previousYear);
}

function getEndOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousYear = getYear(date) - offset;
  return getEndOfYear(previousYear);
}

function getBeginOfNextYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var nextYear = getYear(date) + offset;
  return getBeginOfYear(nextYear);
}
/**
 * Returns the beginning of a given month.
 *
 * @param {Date} date Date.
 */


function getBeginOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex, 1);
}
/**
 * Returns the end of a given month.
 *
 * @param {Date} date Date.
 */


function getEndOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 1, 0, 0, 0, -1);
}
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */


function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Returns an array with the beginning and the end of a given month.
 *
 * @param {Date} date Date.
 */


function getMonthRange(date) {
  return [getBeginOfMonth(date), getEndOfMonth(date)];
}

function getDifferentMonth(date, offset) {
  var year = getYear(date);
  var previousMonthIndex = getMonthIndex(date) + offset;
  return new Date(year, previousMonthIndex, 1);
}

function getBeginOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousMonth = getDifferentMonth(date, -offset);
  return getBeginOfMonth(previousMonth);
}

function getEndOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousMonth = getDifferentMonth(date, -offset);
  return getEndOfMonth(previousMonth);
}

function getBeginOfNextMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var nextMonth = getDifferentMonth(date, offset);
  return getBeginOfMonth(nextMonth);
}

function getBeginOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day);
}

function getEndOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day + 1, 0, 0, 0, -1);
}
/**
 * Returns an array with the beginning and the end of a given day.
 *
 * @param {Date} date Date.
 */


function getDayRange(date) {
  return [getBeginOfDay(date), getEndOfDay(date)];
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */


function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var calendarTypeForWeekNumber = calendarType === 'US' ? 'US' : 'ISO 8601';
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === 'ISO 8601' ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
}
/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfCentury(date);

    case 'decade':
      return getBeginOfDecade(date);

    case 'year':
      return getBeginOfYear(date);

    case 'month':
      return getBeginOfMonth(date);

    case 'day':
      return getBeginOfDay(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfPreviousCentury(date);

    case 'decade':
      return getBeginOfPreviousDecade(date);

    case 'year':
      return getBeginOfPreviousYear(date);

    case 'month':
      return getBeginOfPreviousMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfNextCentury(date);

    case 'decade':
      return getBeginOfNextDecade(date);

    case 'year':
      return getBeginOfNextYear(date);

    case 'month':
      return getBeginOfNextMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfPreviousDecade(date, 100);

    case 'year':
      return getBeginOfPreviousYear(date, 10);

    case 'month':
      return getBeginOfPreviousMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getBeginPrevious2 = getBeginPrevious2;

var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfNextDecade(date, 100);

    case 'year':
      return getBeginOfNextYear(date, 10);

    case 'month':
      return getBeginOfNextMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


exports.getBeginNext2 = getBeginNext2;

function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfCentury(date);

    case 'decade':
      return getEndOfDecade(date);

    case 'year':
      return getEndOfYear(date);

    case 'month':
      return getEndOfMonth(date);

    case 'day':
      return getEndOfDay(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfPreviousCentury(date);

    case 'decade':
      return getEndOfPreviousDecade(date);

    case 'year':
      return getEndOfPreviousYear(date);

    case 'month':
      return getEndOfPreviousMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getEndOfPreviousDecade(date, 100);

    case 'year':
      return getEndOfPreviousYear(date, 10);

    case 'month':
      return getEndOfPreviousMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


exports.getEndPrevious2 = getEndPrevious2;

function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);

    case 'decade':
      return getDecadeRange(date);

    case 'year':
      return getYearRange(date);

    case 'month':
      return getMonthRange(date);

    case 'day':
      return getDayRange(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */


function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */


function getDaysInMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 0).getDate();
}

function toYearLabel(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  return "".concat(getYear(start), " \u2013 ").concat(getYear(end));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


function getCenturyLabel(date) {
  return toYearLabel(getCenturyRange(date));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


function getDecadeLabel(date) {
  return toYearLabel(getDecadeRange(date));
}
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */


function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var weekday = date.getDay();

  switch (calendarType) {
    case 'Arabic':
    case 'Hebrew':
      return weekday === FRIDAY || weekday === SATURDAY;

    case 'ISO 8601':
    case 'US':
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */


function getISOLocalMonth(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  var year = getYear(date);
  var month = "0".concat(getMonth(date)).slice(-2);
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */


function getISOLocalDate(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  var year = getYear(date);
  var month = "0".concat(getMonth(date)).slice(-2);
  var day = "0".concat(getDay(date)).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/propTypes.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/propTypes.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tileProps = exports.tileGroupProps = exports.isView = exports.isClassName = exports.isViews = exports.isValue = exports.isMaxDate = exports.isMinDate = exports.isCalendarType = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var calendarTypes = ['ISO 8601', 'US', 'Arabic', 'Hebrew'];
var allViews = ['century', 'decade', 'year', 'month'];

var isCalendarType = _propTypes["default"].oneOf(calendarTypes);

exports.isCalendarType = isCalendarType;

var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (minDate) {
    if (!(minDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var maxDate = props.maxDate;

    if (maxDate && minDate > maxDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    }
  } // Everything is fine


  return null;
};

exports.isMinDate = isMinDate;

var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (maxDate) {
    if (!(maxDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var minDate = props.minDate;

    if (minDate && maxDate < minDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    }
  } // Everything is fine


  return null;
};

exports.isMaxDate = isMaxDate;

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(Date))]);

exports.isValue = isValue;

var isViews = _propTypes["default"].arrayOf(_propTypes["default"].oneOf(allViews));

exports.isViews = isViews;

var isClassName = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]);

exports.isClassName = isClassName;

var isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;
  var allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  } // Everything is fine


  return null;
};

exports.isView = isView;

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];

  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = {
  activeStartDate: _propTypes["default"].instanceOf(Date).isRequired,
  hover: _propTypes["default"].instanceOf(Date),
  locale: _propTypes["default"].string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  tileClassName: _propTypes["default"].oneOfType([_propTypes["default"].func, isClassName]),
  tileContent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),
  value: isValue,
  valueType: _propTypes["default"].string
};
exports.tileGroupProps = tileGroupProps;
var tileProps = {
  activeStartDate: _propTypes["default"].instanceOf(Date).isRequired,
  classes: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  date: _propTypes["default"].instanceOf(Date).isRequired,
  locale: _propTypes["default"].string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  style: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  tileClassName: _propTypes["default"].oneOfType([_propTypes["default"].func, isClassName]),
  tileContent: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),
  tileDisabled: _propTypes["default"].func
};
exports.tileProps = tileProps;

/***/ }),

/***/ "./node_modules/react-calendar/dist/shared/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/shared/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileClasses = exports.between = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.callIfDefined = exports.mergeFunctions = void 0;

var _dates = __webpack_require__(/*! ./dates */ "./node_modules/react-calendar/dist/shared/dates.js");

/**
 * Returns a function that, when called, calls all the functions
 * passed to it, applying its arguments to them.
 *
 * @param {Function[]} functions
 */
var mergeFunctions = function mergeFunctions() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return functions.filter(Boolean).forEach(function (f) {
      return f.apply(void 0, args);
    });
  };
};
/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */


exports.mergeFunctions = mergeFunctions;

var callIfDefined = function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    fn.apply(void 0, args);
  }
};

exports.callIfDefined = callIfDefined;

var isValueWithinRange = function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
};

exports.isValueWithinRange = isValueWithinRange;

var isRangeWithinRange = function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
};

exports.isRangeWithinRange = isRangeWithinRange;

var doRangesOverlap = function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
};
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */


exports.doRangesOverlap = doRangesOverlap;

var between = function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
};

exports.between = between;

var getTileClasses = function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!(date instanceof Array) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = date instanceof Array ? date : (0, _dates.getRange)(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }

  if (!value) {
    return classes;
  }

  if (!(value instanceof Array) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = value instanceof Array ? value : (0, _dates.getRange)(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  } else if (hover && ( // Date before value
  dateRange[1] < valueRange[0] && doRangesOverlap(dateRange, [hover, valueRange[0]]) || // Date after value
  dateRange[0] > valueRange[1] && doRangesOverlap(dateRange, [valueRange[1], hover]))) {
    classes.push("".concat(className, "--hover"));
  }

  var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
  var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

  if (isRangeStart) {
    classes.push("".concat(className, "--rangeStart"));
  }

  if (isRangeEnd) {
    classes.push("".concat(className, "--rangeEnd"));
  }

  if (isRangeStart && isRangeEnd) {
    classes.push("".concat(className, "--rangeBothEnds"));
  }

  return classes;
};

exports.getTileClasses = getTileClasses;

/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-circular-progressbar/dist/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : undefined;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : undefined : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : undefined : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : undefined;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ })

}]);