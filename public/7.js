(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./resources/js/src/components/auth/Admin/Admin.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/auth/Admin/Admin.js ***!
  \*********************************************************/
/*! exports provided: Admin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/TextFieldGroup */ "./resources/js/src/components/common/TextFieldGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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





var Admin =
/*#__PURE__*/
function (_Component) {
  _inherits(Admin, _Component);

  function Admin(props) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "checkUserExists", function () {
      var email = _this.state.email;
      var bodyFormData = new FormData();
      bodyFormData.set("email", email);
      axios__WEBPACK_IMPORTED_MODULE_2___default()({
        method: "post",
        url: "/api/userexists",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this.setState({
          isSignedUp: true
        });

        console.log(response);
      })["catch"](function (response) {
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setStateByErrors", function (name, value) {
      if (!!_this.state.errors[name]) {
        var _this$setState;

        var errors = Object.assign({}, _this.state.errors);
        delete errors[name];

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "errors", errors), _this$setState));
      } else {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setStateByErrors(e.target.name, e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log("--register submit--");
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      var errors = {};
      if (email === "") errors.email = "Поле не може бути пустим!";
      if (password === "") errors.password = "Поле не може бути пустим!";
      var isValid = Object.keys(errors).length === 0;

      if (isValid) {
        console.log("Model is Valid");
        var bodyFormData = new FormData();
        bodyFormData.set("email", email);
        bodyFormData.set("password", password);
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: "post",
          url: "/api/login",
          data: bodyFormData,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          _this.setState({
            isSignedUp: true
          });

          console.log(response);
        })["catch"](function (response) {
          console.log(response);
        });
      } else {
        _this.setState({
          errors: errors
        });
      }
    });

    _this.state = {
      email: "",
      password: "",
      errors: {},
      isSignedUp: false
    };
    return _this;
  }

  _createClass(Admin, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          errors = _this$state2.errors,
          isSignedUp = _this$state2.isSignedUp;

      if (isSignedUp) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
          to: {
            pathname: "/"
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card  bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u0412\u0445\u0456\u0434 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-end social_icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook-official",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-google-plus-official",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "email",
        label: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430:",
        value: email,
        error: errors.email,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "password",
        label: "\u041F\u0430\u0440\u043E\u043B\u044C:",
        value: password,
        error: errors.password,
        onChange: this.handleChange,
        type: "password"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary float-center login_btn"
      }, "\u0412\u0445\u0456\u0434")))))))));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./resources/js/src/components/auth/Admin/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/auth/Admin/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin */ "./resources/js/src/components/auth/Admin/Admin.js");

/* harmony default export */ __webpack_exports__["default"] = (_Admin__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/components/common/TextFieldGroup.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/common/TextFieldGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var TextFieldGroup = function TextFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      checkUserExists = _ref.checkUserExists;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: field
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    value: value,
    type: type,
    id: field,
    name: field,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control", {
      "is-invalid": !!error
    })
  }), !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, error));
};

TextFieldGroup.propTypes = {
  field: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  checkUserExists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
TextFieldGroup.defaultProps = {
  type: "text"
};
/* harmony default export */ __webpack_exports__["default"] = (TextFieldGroup);

/***/ })

}]);