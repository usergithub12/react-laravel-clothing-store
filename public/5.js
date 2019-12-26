(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/UserProfile/UserProfile.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/UserProfile/UserProfile.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/components/UserProfile/UserProfile.css":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/UserProfile/UserProfile.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./UserProfile.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/UserProfile/UserProfile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/components/UserProfile/UserProfile.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/UserProfile/UserProfile.js ***!
  \****************************************************************/
/*! exports provided: UserProfile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/TextFieldGroup */ "./resources/js/src/components/common/TextFieldGroup.js");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/entry.js");
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_cropper_CropperModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/cropper/CropperModal */ "./resources/js/src/components/common/cropper/CropperModal.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UserProfile_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile.css */ "./resources/js/src/components/UserProfile/UserProfile.css");
/* harmony import */ var _UserProfile_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UserProfile_css__WEBPACK_IMPORTED_MODULE_8__);
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










var token = localStorage.token;
var UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserProfile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      fullname: "",
      email: "",
      password: "",
      dateOfBirth: "",
      image: "",
      phone: "",
      focus: false,
      errors: {}
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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (date) {
      return _this.setState({
        dateOfBirth: date,
        focus: false
      });
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
      return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, formData).then(function (response) {
        return console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setStateByErrors(e.target.name, e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log("--register submit--");
      var _this$state = _this.state,
          fullname = _this$state.fullname,
          email = _this$state.email,
          password = _this$state.password,
          dateOfBirth = _this$state.dateOfBirth,
          passwordConfirm = _this$state.passwordConfirm,
          image = _this$state.image,
          phone = _this$state.phone;
      var errors = {};
      if (fullname === "") errors.fullname = "Поле не може бути пустим!";
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
          fullname: fullname,
          email: email,
          password: password,
          dateOfBirth: dateOfBirth,
          image: image,
          phone: phone
        }; //Update model request

        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/api/update", model).then(function (resp) {
          _this.fileUpload(image);

          console.log("----server responce----", resp);
        }, function (error) {
          console.log("----server error----", error);
        }); //Uplaod Image
      } else {
        _this.setState({
          errors: errors
        });
      }
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

    return _this;
  }

  _createClass(UserProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log("token from profile", token);
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/user", // { Authorization: "Bearer " + token },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token //the token is a variable which holds the token

        }
      }).then(function (response) {
        //handle success
        _this2.setState({
          email: response.data.email,
          fullname: response.data.full_name,
          password: response.data.password,
          dateOfBirth: response.data.dateOfBirth,
          image: response.data.image,
          phone: response.data.phone
        });

        console.log("auth user form request", response);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("state", this.state);
      var _this$state2 = this.state,
          fullname = _this$state2.fullname,
          email = _this$state2.email,
          password = _this$state2.password,
          dateOfBirth = _this$state2.dateOfBirth,
          image = _this$state2.image,
          phone = _this$state2.phone,
          errors = _this$state2.errors;
      var imgPath = "/images/".concat(image);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "d-flex justify-content-center"
      }, "\u041F\u0440\u043E\u0444\u0456\u043B\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle",
        width: "200",
        src: imgPath
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "fullname",
        label: "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043C'\u044F",
        value: fullname,
        error: errors.fullname,
        onChange: this.handleChange // onBlur={this.checkUserExists}

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "email",
        label: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",
        value: email,
        error: errors.email,
        onChange: this.handleChange //onBlur={this.checkUserExists}

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "password",
        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
        value: password,
        error: errors.password,
        onChange: this.handleChange,
        type: "password"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "dateOfBirth",
        label: "\u0414\u0430\u0442\u0430 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
        value: dateOfBirth,
        error: errors.dateOfBirth,
        onChange: this.handleChange,
        onFocus: this.handleInputFocus
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary "
      }, "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438")))))));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

}]);