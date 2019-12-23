(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/components/common/cropper/Modal.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/src/components/common/cropper/Modal.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  background-color: #0e0f0fd8;\n  display: none;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.modal.open {\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/auth/Register/captcha.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/auth/Register/captcha.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rnc {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    max-width: 255px;\r\n    background-color: #eee;\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.rnc-row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.rnc-column {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    margin: 0 0 0 10px;\r\n}\r\n\r\n.rnc-canvas {\r\n    box-sizing: border-box;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n}\r\n\r\n.rnc-button {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-size: 16px;\r\n    background: #fff;\r\n    color: inherit;\r\n    border: none;\r\n    padding: 0;\r\n    width: 25px;\r\n    height: 20px;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n\r\n.rnc-button svg {\r\n    width: 1em;\r\n    height: 1em;\r\n    fill: currentColor;\r\n}\r\n\r\n.rnc-input {\r\n    border: none;\r\n    padding: 10px 6px;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/components/auth/Register/RegisterPage.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/auth/Register/RegisterPage.js ***!
  \*******************************************************************/
/*! exports provided: RegisterPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/TextFieldGroup */ "./resources/js/src/components/common/TextFieldGroup.js");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/entry.js");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_numeric_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-numeric-captcha */ "./node_modules/react-numeric-captcha/dist/captcha.js");
/* harmony import */ var react_numeric_captcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_numeric_captcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _captcha_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./captcha.css */ "./resources/js/src/components/auth/Register/captcha.css");
/* harmony import */ var _captcha_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_captcha_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_cropper_CropperModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/cropper/CropperModal */ "./resources/js/src/components/common/cropper/CropperModal.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var _common_img_loader_ChangingProgressProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/img-loader/ChangingProgressProvider */ "./resources/js/src/components/common/img-loader/ChangingProgressProvider.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_12__);
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














var RegisterPage =
/*#__PURE__*/
function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegisterPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegisterPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: "",
      password: "",
      passwordConfirm: "",
      dateOfBirth: new Date(),
      image: "",
      phone: "",
      focus: false,
      errors: {},
      captchaSuccess: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function () {
      _this.setState({
        focus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCroppedImage", function (img) {
      _this.setState({
        image: img
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function () {
      _this.setState({
        focus: false
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

    _defineProperty(_assertThisInitialized(_this), "onChangeFile", function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var file = files[0];

      _this.createImage(file);
    });

    _defineProperty(_assertThisInitialized(_this), "createImage", function (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        _this.setState({
          image: e.target.result
        });
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_this), "fileUpload", function (image) {
      var url = "api/fileupload";
      var formData = {
        file: image
      };
      return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, formData).then(function (response) {
        return console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkUserExists", function (e) {
      var email = _this.state.email;
      var errors = {};
      var bodyFormData = new FormData();
      bodyFormData.set("email", email);
      axios__WEBPACK_IMPORTED_MODULE_6___default()({
        method: "post",
        url: "/api/userexists",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        //handle success
        errors.email = "Користувач з такою поштою вже зареєстрований!";
        console.log("errors from check axios", errors);
        console.log(response);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });

      _this.setState({
        errors: errors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (date) {
      return _this.setState({
        dateOfBirth: date,
        focus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setStateByErrors(e.target.name, e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log("--register submit--");
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password,
          dateOfBirth = _this$state.dateOfBirth,
          passwordConfirm = _this$state.passwordConfirm,
          image = _this$state.image,
          phone = _this$state.phone;
      var errors = {};
      if (email === "") errors.email = "Поле не може бути пустим!";
      if (password === "") errors.password = "Поле не може бути пустим!";
      if (passwordConfirm === "") errors.passwordConfirm = "Поле не може бути пустим!";
      if (password != passwordConfirm) errors.passwordConfirm = "Паролі не співпадають!";
      if (dateOfBirth === "") errors.dateOfBirth = "Оберіть дату!";
      if (image === "") errors.image = "Фото не обрано!";
      if (phone === "") errors.phone = "Поле не може бути пустим!";
      var isValid = Object.keys(errors).length === 0;

      if (isValid) {
        console.log("Model is Valid"); //ajax axios post

        var model = {
          email: email,
          password: password,
          dateOfBirth: dateOfBirth,
          image: image,
          phone: phone
        };
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/register", model).then(function (resp) {
          console.log("----server responce----", resp);
        }, function (error) {
          console.log("----server error----", error);
        }); //Uplaod Image

        _this.fileUpload(image);
      } else {
        _this.setState({
          errors: errors
        });
      }
    });

    return _this;
  }

  _createClass(RegisterPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          dateOfBirth = _this$state2.dateOfBirth,
          passwordConfirm = _this$state2.passwordConfirm,
          image = _this$state2.image,
          phone = _this$state2.phone,
          errors = _this$state2.errors,
          focus = _this$state2.focus,
          captchaSuccess = _this$state2.captchaSuccess;
      console.log("Regiter page state", this.state);
      console.log("focus", focus);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "d-flex justify-content-center"
      }, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "email",
        label: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",
        value: email,
        error: errors.email,
        onChange: this.handleChange,
        onBlur: this.checkUserExists
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "password",
        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
        value: password,
        error: errors.password,
        onChange: this.handleChange,
        type: "password"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "passwordConfirm",
        label: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E",
        value: passwordConfirm,
        error: errors.passwordConfirm,
        onChange: this.handleChange,
        type: "password"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "dateOfBirth",
        label: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
        value: dateOfBirth.toLocaleDateString(),
        error: errors.dateOfBirth,
        onChange: this.handleChange,
        onFocus: this.handleInputFocus
      }), focus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_calendar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        value: dateOfBirth
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "rounded-circle",
        width: "100",
        src: image,
        loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_img_loader_ChangingProgressProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
          values: [0, 20, 40, 60, 80, 100]
        }, function (percentage) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_10__["CircularProgressbar"], {
            value: percentage,
            text: "".concat(percentage, "%")
          });
        }),
        unloader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          width: "100" // src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
          ,
          src: "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
        })
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_cropper_CropperModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        getCroppedImage: this.getCroppedImage
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "phone"
      }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "phone",
        name: "phone",
        value: phone,
        onChange: this.handleChange,
        mask: "+38 (099) 999-99-99",
        maskChar: " ",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("form-control", {
          "is-invalid": !!errors.phone
        })
      }), !!errors.phone && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback"
      }, errors.phone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group  d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_numeric_captcha__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onChange: function onChange(status) {
          return _this2.setState({
            captchaSuccess: status
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group  d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary ",
        disabled: !captchaSuccess
      }, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F"))));
    }
  }]);

  return RegisterPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ }),

/***/ "./resources/js/src/components/auth/Register/captcha.css":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/auth/Register/captcha.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./captcha.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/auth/Register/captcha.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/auth/Register/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/components/auth/Register/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage */ "./resources/js/src/components/auth/Register/RegisterPage.js");

/* harmony default export */ __webpack_exports__["default"] = (_RegisterPage__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/components/common/FileFieldGroup.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/common/FileFieldGroup.js ***!
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




var FileFieldGroup = function FileFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-file"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: onChange,
    onBlur: onBlur,
    value: value,
    type: type,
    id: field,
    name: field,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("custom-file-input", {
      "is-invalid": !!error
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-file-label",
    htmlFor: field
  }, label), !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, error));
};

FileFieldGroup.propTypes = {
  field: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
FileFieldGroup.defaultProps = {
  type: "file"
};
/* harmony default export */ __webpack_exports__["default"] = (FileFieldGroup);

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

/***/ }),

/***/ "./resources/js/src/components/common/cropper/CropperModal.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/common/cropper/CropperModal.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal.scss */ "./resources/js/src/components/common/cropper/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cropper */ "./node_modules/react-cropper/dist/react-cropper.js");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FileFieldGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FileFieldGroup */ "./resources/js/src/components/common/FileFieldGroup.js");
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










var CropperModal =
/*#__PURE__*/
function (_Component) {
  _inherits(CropperModal, _Component);

  function CropperModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CropperModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CropperModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: "",
      label: '',
      modal: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      e.preventDefault(); //console.log("-------john hello---------", e.target.value);

      var files;

      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }

      if (files && files[0]) {
        //console.log('---files[0].type---', files[0].type);
        if (files[0].type.match(/^image\//)) {
          var file_name = files[0].name;
          var reader = new FileReader();

          reader.onload = function () {
            _this.toggle(e);

            _this.setState({
              src: reader.result,
              label: file_name
            });
          };

          reader.readAsDataURL(files[0]);
        } else {
          alert("Невірний тип файлу");
        }
      } else {
        alert("Будь ласка виберіть файл");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cropImage", function (e) {
      e.preventDefault();

      if (typeof _this.cropper.getCroppedCanvas() === "undefined") {
        return;
      }

      _this.setState({
        src: "",
        modal: false
      });

      _this.props.getCroppedImage(_this.cropper.getCroppedCanvas().toDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "optionCropImage", function (e, option, value) {
      e.preventDefault();

      if (typeof _this.cropper.getCroppedCanvas() === "undefined") {
        return;
      }

      switch (option) {
        case "rotate":
          _this.cropper.rotate(value);

          break;

        case "zoom":
          _this.cropper.zoom(value);

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (e) {
      //e.preventDefault();
      _this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    });

    return _this;
  }

  _createClass(CropperModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      //
      //console.log('----props cropper page---', this.props);
      console.log('-----image------', this.state);
      var _this$state = this.state,
          modal = _this$state.modal,
          label = _this$state.label;
      var error = this.props.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FileFieldGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
        field: "image",
        label: label,
        value: "",
        error: error,
        onChange: this.onChange,
        type: "file"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal", {
          open: modal
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fluid-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cropper__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          height: 400,
          width: "100%"
        },
        preview: ".img-preview",
        aspectRatio: 1 / 1,
        guides: false,
        viewMode: 1,
        dragMode: "move",
        src: this.state.src,
        ref: function ref(cropper) {
          _this2.cropper = cropper;
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.cropImage
      }, "\u041E\u0431\u0440\u0456\u0437\u0430\u0442\u0438 \u0444\u043E\u0442\u043E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: this.toggle
      }, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-last"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick(e) {
          return _this2.optionCropImage(e, "rotate", -90);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-rotate-left"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick(e) {
          return _this2.optionCropImage(e, "rotate", 90);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-rotate-right"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick(e) {
          return _this2.optionCropImage(e, "zoom", 0.1);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-search-plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-info",
        onClick: function onClick(e) {
          return _this2.optionCropImage(e, "zoom", -0.1);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-search-minus"
      })))))))))));
    }
  }]);

  return CropperModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var propTypes = {
  getCroppedImage: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
var defaultProps = {//isSmall: false
};
CropperModal.propTypes = propTypes;
CropperModal.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CropperModal);

/***/ }),

/***/ "./resources/js/src/components/common/cropper/Modal.scss":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/common/cropper/Modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./Modal.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/components/common/cropper/Modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/common/img-loader/ChangingProgressProvider.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/common/img-loader/ChangingProgressProvider.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var ChangingProgressProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChangingProgressProvider, _React$Component);

  function ChangingProgressProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChangingProgressProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChangingProgressProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      valuesIndex: 0
    });

    return _this;
  }

  _createClass(ChangingProgressProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          valuesIndex: (_this2.state.valuesIndex + 1) % _this2.props.values.length
        });
      }, this.props.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.props.values[this.state.valuesIndex]);
    }
  }]);

  return ChangingProgressProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ChangingProgressProvider, "defaultProps", {
  interval: 1000
});

/* harmony default export */ __webpack_exports__["default"] = (ChangingProgressProvider);

/***/ })

}]);