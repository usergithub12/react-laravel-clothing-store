(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-circular-progressbar/dist/index.esm.js ***!
  \*******************************************************************/
/*! exports provided: CircularProgressbar, CircularProgressbarWithChildren, buildStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgressbar", function() { return CircularProgressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgressbarWithChildren", function() { return CircularProgressbarWithChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return buildStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var VIEWBOX_WIDTH = 100;
var VIEWBOX_HEIGHT = 100;
var VIEWBOX_HEIGHT_HALF = 50;
var VIEWBOX_CENTER_X = 50;
var VIEWBOX_CENTER_Y = 50;

function Path(_a) {
    var className = _a.className, counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius, strokeWidth = _a.strokeWidth, style = _a.style;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { className: className, style: Object.assign({}, style, getDashStyle({ pathRadius: pathRadius, dashRatio: dashRatio, counterClockwise: counterClockwise })), d: getPathDescription({
            pathRadius: pathRadius,
            counterClockwise: counterClockwise,
        }), strokeWidth: strokeWidth, fillOpacity: 0 }));
}
function getPathDescription(_a) {
    var pathRadius = _a.pathRadius, counterClockwise = _a.counterClockwise;
    var radius = pathRadius;
    var rotation = counterClockwise ? 1 : 0;
    return "\n      M " + VIEWBOX_CENTER_X + "," + VIEWBOX_CENTER_Y + "\n      m 0,-" + radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0," + 2 * radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0,-" + 2 * radius + "\n    ";
}
function getDashStyle(_a) {
    var counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius;
    var diameter = Math.PI * 2 * pathRadius;
    var gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        var _a = this.props, value = _a.value, minValue = _a.minValue, maxValue = _a.maxValue;
        var boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        var _a = this.props, circleRatio = _a.circleRatio, className = _a.className, classes = _a.classes, counterClockwise = _a.counterClockwise, styles = _a.styles, strokeWidth = _a.strokeWidth, text = _a.text;
        var pathRadius = this.getPathRadius();
        var pathRatio = this.getPathRatio();
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { className: classes.root + " " + className, style: styles.root, viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT, "data-test-id": "CircularProgressbar" },
            this.props.background ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { className: classes.background, style: styles.background, cx: VIEWBOX_CENTER_X, cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF })) : null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, { className: classes.trail, counterClockwise: counterClockwise, dashRatio: circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.trail }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, { className: classes.path, counterClockwise: counterClockwise, dashRatio: pathRatio * circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.path }),
            text ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", { className: classes.text, style: styles.text, x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }, text)) : null));
    };
    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            path: 'CircularProgressbar-path',
            text: 'CircularProgressbar-text',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function CircularProgressbarWithChildren(props) {
    var children = props.children, circularProgressbarProps = __rest(props, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { "data-test-id": "CircularProgressbarWithChildren" },
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: { position: 'relative', width: '100%', height: '100%' } },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CircularProgressbar, __assign({}, circularProgressbarProps)),
            props.children ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { "data-test-id": "CircularProgressbarWithChildren__children", style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    marginTop: '-100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                } }, props.children)) : null)));
}

function buildStyles(_a) {
    var rotation = _a.rotation, strokeLinecap = _a.strokeLinecap, textColor = _a.textColor, textSize = _a.textSize, pathColor = _a.pathColor, pathTransition = _a.pathTransition, pathTransitionDuration = _a.pathTransitionDuration, trailColor = _a.trailColor, backgroundColor = _a.backgroundColor;
    var rotationTransform = rotation == null ? undefined : "rotate(" + rotation + "turn)";
    var rotationTransformOrigin = rotation == null ? undefined : 'center center';
    return {
        root: {},
        path: removeUndefinedValues({
            stroke: pathColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
            transition: pathTransition,
            transitionDuration: pathTransitionDuration == null ? undefined : pathTransitionDuration + "s",
        }),
        trail: removeUndefinedValues({
            stroke: trailColor,
            strokeLinecap: strokeLinecap,
            transform: rotationTransform,
            transformOrigin: rotationTransformOrigin,
        }),
        text: removeUndefinedValues({
            fill: textColor,
            fontSize: textSize,
        }),
        background: removeUndefinedValues({
            fill: backgroundColor,
        }),
    };
}
function removeUndefinedValues(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] == null) {
            delete obj[key];
        }
    });
    return obj;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react-image/umd/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-image/umd/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(a,b){ true?module.exports=b(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"),__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"),__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"),__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")):undefined})(this,function(a,b,c,d,e,f,g,h,i,j){'use strict';function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){h(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c=c&&c.hasOwnProperty("default")?c["default"]:c,d=d&&d.hasOwnProperty("default")?d["default"]:d,e=e&&e.hasOwnProperty("default")?e["default"]:e,f=f&&f.hasOwnProperty("default")?f["default"]:f,g=g&&g.hasOwnProperty("default")?g["default"]:g,h=h&&h.hasOwnProperty("default")?h["default"]:h;var m="default"in i?i["default"]:i,n={},o={loader:j.node,unloader:j.node,decode:j.bool,crossorigin:j.string,src:j.oneOfType([j.string,j.array]),container:j.func,loaderContainer:j.func,unloaderContainer:j.func},p=function(i){function j(a){var c;b(this,j),c=d(this,e(j).call(this,a)),h(f(c),"srcToArray",function(a){return(Array.isArray(a)?a:[a]).filter(function(a){return a})}),h(f(c),"onLoad",function(){n[c.sourceList[c.state.currentIndex]]=!0,c.i&&c.setState({isLoaded:!0})}),h(f(c),"onError",function(){if(n[c.sourceList[c.state.currentIndex]]=!1,!c.i)return!1;for(var a,b=c.state.currentIndex+1;b<c.sourceList.length;b++){if(a=c.sourceList[b],!(a in n)){c.setState({currentIndex:b});break}if(!0===n[a])return c.setState({currentIndex:b,isLoading:!1,isLoaded:!0}),!0;!1===n[a]}return b===c.sourceList.length?c.setState({isLoading:!1}):void c.loadImg()}),h(f(c),"loadImg",function(){c.i=new Image,c.i.src=c.sourceList[c.state.currentIndex],c.props.crossorigin&&(c.i.crossOrigin=c.props.crossorigin),c.props.decode&&c.i.decode?c.i.decode().then(c.onLoad)["catch"](c.onError):(c.i.onload=c.onLoad,c.i.onerror=c.onError)}),h(f(c),"unloadImg",function(){c.i.onerror=null,c.i.onload=null,c.i.src="";try{delete c.i.src}catch(a){}delete c.i}),c.loaderContainer=a.loaderContainer||a.container,c.unloaderContainer=a.unloaderContainer||a.container,c.sourceList=c.srcToArray(c.props.src);for(var g=0;g<c.sourceList.length&&!!(c.sourceList[g]in n);g++)if(!0===n[c.sourceList[g]])return c.state={currentIndex:g,isLoading:!1,isLoaded:!0},d(c);return c.state=c.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},c}return g(j,i),c(j,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var b=this;this.loaderContainer=a.loaderContainer||a.container,this.unloaderContainer=a.unloaderContainer||a.container;var c=this.srcToArray(a.src),d=c.filter(function(a){return-1===b.sourceList.indexOf(a)}),e=this.sourceList.filter(function(a){return-1===c.indexOf(a)});if(d.length||e.length){if(this.sourceList=c,!c.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var b=this.props,c=b.container,d=b.loader,e=b.unloader,f=b.src,g=b.decode,h=b.loaderContainer,i=b.unloaderContainer,j=b.mockImage,k=a(b,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]);if(this.state.isLoaded){var n=l({},{src:this.sourceList[this.state.currentIndex]},{},k);return c(m.createElement("img",n))}return!this.state.isLoaded&&this.state.isLoading?d?this.loaderContainer(d):null:this.state.isLoaded||this.state.isLoading?void 0:e?this.unloaderContainer(e):null}}]),j}(i.Component);return h(p,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(a){return a}}),p.propTypes={},p});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-numeric-captcha/dist/captcha.js":
/*!************************************************************!*\
  !*** ./node_modules/react-numeric-captcha/dist/captcha.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=__webpack_require__(/*! react */ "./node_modules/react/index.js"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e;var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var i=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(c[s]=n[s]);if(r){i=r(n);for(var l=0;l<i.length;l++)o.call(n,i[l])&&(c[i[l]]=n[i[l]])}}return c},c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",u=function(){};if(true){var s=c,l={};u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}var p=function(e,t,n,r,a){if(true)for(var o in e)if(e.hasOwnProperty(o)){var i;try{if("function"!=typeof e[o]){var c=Error((r||"React class")+": "+n+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.");throw c.name="Invariant Violation",c}i=e[o](t,o,r,n,null,s)}catch(e){i=e}if(!i||i instanceof Error||u((r||"React class")+": type specification of "+n+" `"+o+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in l)){l[i.message]=!0;var p=a?a():"";u("Failed "+n+" type: "+i.message+(null!=p?p:""))}}},f=function(){};function d(){return null} true&&(f=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var y=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var a="<<anonymous>>",o={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:l(d),arrayOf:function(e){return l(function(t,n,r,a,o){if("function"!=typeof e)return new s("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){var u=v(i);return new s("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<i.length;l++){var p=e(i,l,r,a,o+"["+l+"]",c);if(p instanceof Error)return p}return null})},element:function(){return l(function(t,n,r,a,o){var i=t[n];if(!e(i)){var c=v(i);return new s("Invalid "+a+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return l(function(t,n,r,o,i){if(!(t[n]instanceof e)){var c=e.name||a,u=function(e){if(!e.constructor||!e.constructor.name)return a;return e.constructor.name}(t[n]);return new s("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected instance of `"+c+"`.")}return null})},node:function(){return l(function(e,t,n,r,a){if(!h(e[t]))return new s("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return l(function(t,n,r,a,o){if("function"!=typeof e)return new s("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=v(i);if("object"!==u)return new s("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var p=e(i,l,r,a,o+"."+l,c);if(p instanceof Error)return p}return null})},oneOf:function(e){if(!Array.isArray(e))return true&&f("Invalid argument supplied to oneOf, expected an instance of array."),d;return l(function(t,n,r,a,o){for(var i=t[n],c=0;c<e.length;c++)if(u(i,e[c]))return null;var l=JSON.stringify(e);return new s("Invalid "+a+" `"+o+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+l+".")})},oneOfType:function(e){if(!Array.isArray(e))return true&&f("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return f("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+b(n)+" at index "+t+"."),d}return l(function(t,n,r,a,o){for(var i=0;i<e.length;i++){var u=e[i];if(null==u(t,n,r,a,o,c))return null}return new s("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")})},shape:function(e){return l(function(t,n,r,a,o){var i=t[n],u=v(i);if("object"!==u)return new s("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var p=e[l];if(p){var f=p(i,l,r,a,o+"."+l,c);if(f)return f}}return null})},exact:function(e){return l(function(t,n,r,a,o){var u=t[n],l=v(u);if("object"!==l)return new s("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var p=i({},t[n],e);for(var f in p){var d=e[f];if(!d)return new s("Invalid "+a+" `"+o+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,f,r,a,o+"."+f,c);if(y)return y}return null})}};function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function s(e){this.message=e,this.stack=""}function l(e){if(true)var n={},r=0;function o(o,i,u,l,p,d,y){if(l=l||a,d=d||u,y!==c){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if( true&&"undefined"!=typeof console){var v=l+":"+u;!n[v]&&r<3&&(f("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null==i[u]?o?new s(null===i[u]?"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,u,l,p,d)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function y(e){return l(function(t,n,r,a,o,i){var c=t[n];return v(c)!==e?new s("Invalid "+a+" `"+o+"` of type `"+m(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var a=function(e){var t=e&&(n&&e[n]||e[r]);if("function"==typeof t)return t}(t);if(!a)return!1;var o,i=a.call(t);if(a!==t.entries){for(;!(o=i.next()).done;)if(!h(o.value))return!1}else for(;!(o=i.next()).done;){var c=o.value;if(c&&!h(c[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function m(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return s.prototype=Error.prototype,o.checkPropTypes=p,o.PropTypes=o,o};function h(){}var v=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){if(true){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=y(function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},!0)}else {}});function m(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),this.state={solution:m(111111,999999),input:""},this.componentDidMount=function(){t.drawCaptcha()},this.drawCaptcha=function(){var e=t.state.solution,n=t.canvas,r=n.width,a=n.height,o=t.canvas.getContext("2d");o.clearRect(0,0,r,a),o.font="40px serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,r/2,a/2+3),o.strokeStyle="#000000",o.beginPath(),o.moveTo(m(5,20),m(5,20)),o.lineTo(r-m(5,20),a-m(5,20)),o.stroke(),o.moveTo(m(5,20),a-m(5,20)),o.lineTo(r-m(5,20),m(5,20)),o.stroke(),o.closePath()},this.refresh=function(){t.setState({solution:m(111111,999999),input:""},t.drawCaptcha)},this.playAudio=function(){var e=new SpeechSynthesisUtterance(t.state.solution.toString().split("").join(" "));e.rate=.25,window.speechSynthesis.speak(e)},this.handleChange=function(e){var n=t.props.onChange,r=t.state.solution;t.setState({input:e.target.value}),n(e.target.value===r.toString())}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.render=function(){var e=this,t=this.props.placeholder,r=this.state.input;return n.createElement("div",{className:"rnc"},n.createElement("div",{className:"rnc-row"},n.createElement("canvas",{ref:function(t){return e.canvas=t},width:200,height:50,className:"rnc-canvas","data-testid":"captcha-canvas"}),n.createElement("div",{className:"rnc-column"},n.createElement("button",{type:"button","aria-label":"get new captcha",onClick:this.refresh,className:"rnc-button","data-testid":"captcha-refresh"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.createElement("g",{"data-name":"Layer 2"},n.createElement("g",{"data-name":"refresh"},n.createElement("rect",{width:"24",height:"24",opacity:"0"}),n.createElement("path",{d:"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"}))))),n.createElement("button",{type:"button","aria-label":"play audio",onClick:this.playAudio,className:"rnc-button","data-testid":"captcha-audio"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.createElement("g",{"data-name":"Layer 2"},n.createElement("g",{"data-name":"volume-up"},n.createElement("rect",{width:"24",height:"24",opacity:"0"}),n.createElement("path",{d:"M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"}),n.createElement("path",{d:"M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"}),n.createElement("path",{d:"M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"}))))))),n.createElement("input",{type:"number",value:r,onChange:this.handleChange,placeholder:t,className:"rnc-input","data-testid":"captcha-input"}))},t}(t.Component);b.defaultProps={placeholder:"Insert captcha"},b.propTypes={onChange:v.func.isRequired,placeholder:v.string},module.exports=b;
//# sourceMappingURL=captcha.js.map


/***/ })

}]);