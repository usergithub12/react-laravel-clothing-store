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
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.scss */ "./resources/js/src/components/common/cropper/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cropper */ "./node_modules/react-cropper/dist/react-cropper.js");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
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
      label: "",
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
      console.log("-----image------", this.state);
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
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("modal", {
          open: modal
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fluid-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cropper__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ })

}]);