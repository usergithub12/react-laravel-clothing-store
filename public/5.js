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

/***/ "./node_modules/react-image/umd/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-image/umd/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(a,b){ true?module.exports=b(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"),__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"),__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"),__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")):undefined})(this,function(a,b,c,d,e,f,g,h,i,j){'use strict';function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){h(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c=c&&c.hasOwnProperty("default")?c["default"]:c,d=d&&d.hasOwnProperty("default")?d["default"]:d,e=e&&e.hasOwnProperty("default")?e["default"]:e,f=f&&f.hasOwnProperty("default")?f["default"]:f,g=g&&g.hasOwnProperty("default")?g["default"]:g,h=h&&h.hasOwnProperty("default")?h["default"]:h;var m="default"in i?i["default"]:i,n={},o={loader:j.node,unloader:j.node,decode:j.bool,crossorigin:j.string,src:j.oneOfType([j.string,j.array]),container:j.func,loaderContainer:j.func,unloaderContainer:j.func},p=function(i){function j(a){var c;b(this,j),c=d(this,e(j).call(this,a)),h(f(c),"srcToArray",function(a){return(Array.isArray(a)?a:[a]).filter(function(a){return a})}),h(f(c),"onLoad",function(){n[c.sourceList[c.state.currentIndex]]=!0,c.i&&c.setState({isLoaded:!0})}),h(f(c),"onError",function(){if(n[c.sourceList[c.state.currentIndex]]=!1,!c.i)return!1;for(var a,b=c.state.currentIndex+1;b<c.sourceList.length;b++){if(a=c.sourceList[b],!(a in n)){c.setState({currentIndex:b});break}if(!0===n[a])return c.setState({currentIndex:b,isLoading:!1,isLoaded:!0}),!0;!1===n[a]}return b===c.sourceList.length?c.setState({isLoading:!1}):void c.loadImg()}),h(f(c),"loadImg",function(){c.i=new Image,c.i.src=c.sourceList[c.state.currentIndex],c.props.crossorigin&&(c.i.crossOrigin=c.props.crossorigin),c.props.decode&&c.i.decode?c.i.decode().then(c.onLoad)["catch"](c.onError):(c.i.onload=c.onLoad,c.i.onerror=c.onError)}),h(f(c),"unloadImg",function(){c.i.onerror=null,c.i.onload=null,c.i.src="";try{delete c.i.src}catch(a){}delete c.i}),c.loaderContainer=a.loaderContainer||a.container,c.unloaderContainer=a.unloaderContainer||a.container,c.sourceList=c.srcToArray(c.props.src);for(var g=0;g<c.sourceList.length&&!!(c.sourceList[g]in n);g++)if(!0===n[c.sourceList[g]])return c.state={currentIndex:g,isLoading:!1,isLoaded:!0},d(c);return c.state=c.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},c}return g(j,i),c(j,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var b=this;this.loaderContainer=a.loaderContainer||a.container,this.unloaderContainer=a.unloaderContainer||a.container;var c=this.srcToArray(a.src),d=c.filter(function(a){return-1===b.sourceList.indexOf(a)}),e=this.sourceList.filter(function(a){return-1===c.indexOf(a)});if(d.length||e.length){if(this.sourceList=c,!c.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var b=this.props,c=b.container,d=b.loader,e=b.unloader,f=b.src,g=b.decode,h=b.loaderContainer,i=b.unloaderContainer,j=b.mockImage,k=a(b,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]);if(this.state.isLoaded){var n=l({},{src:this.sourceList[this.state.currentIndex]},{},k);return c(m.createElement("img",n))}return!this.state.isLoaded&&this.state.isLoading?d?this.loaderContainer(d):null:this.state.isLoaded||this.state.isLoading?void 0:e?this.unloaderContainer(e):null}}]),j}(i.Component);return h(p,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(a){return a}}),p.propTypes={},p});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./resources/js/src/components/auth/Admin/AddProduct/AddProduct.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/auth/Admin/AddProduct/AddProduct.js ***!
  \*************************************************************************/
/*! exports provided: AddProduct, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/TextFieldGroup */ "./resources/js/src/components/common/TextFieldGroup.js");
/* harmony import */ var _common_cropper_CropperModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/cropper/CropperModal */ "./resources/js/src/components/common/cropper/CropperModal.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/SelectFieldGroup */ "./resources/js/src/components/common/SelectFieldGroup.js");
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






var AddProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(AddProduct, _Component);

  function AddProduct() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddProduct)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      product: {
        name: "",
        size: "",
        image: "",
        price: "",
        rating: "",
        color: "",
        material: "",
        type: "",
        producer: "",
        country: ""
      },
      colors: [],
      materials: [],
      types: [],
      producers: [],
      genders: [],
      countries: [],
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "getColors", function () {
      axios.get("/api/colors").then(function (response) {
        //handle success
        _this.setState({
          colors: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMaterials", function () {
      axios.get("/api/materials").then(function (response) {
        //handle success
        _this.setState({
          materials: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTypes", function () {
      axios.get("/api/types").then(function (response) {
        //handle success
        _this.setState({
          types: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getProducers", function () {
      axios.get("/api/producers").then(function (response) {
        //handle success
        _this.setState({
          producers: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getGenders", function () {
      axios.get("/api/genders").then(function (response) {
        //handle success
        _this.setState({
          genders: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCountries", function () {
      axios.get("/api/countries").then(function (response) {
        //handle success
        _this.setState({
          countries: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
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
      return axios.post(url, formData).then(function (response) {
        return console.log(response);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setStateByErrors", function (name, value) {
      if (!!_this.state.errors[name]) {
        var _this$setState;

        var errors = Object.assign({}, _this.state.errors);
        delete errors[name];

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "errors", errors), _this$setState));
      } else {
        console.log("set value by NAME:", name);

        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setStateByErrors(e.target.name, e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleColorSelectChange", function (value) {
      _this.setState({
        color: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMaterialSelectChange", function (value) {
      _this.setState({
        material: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGenderSelectChange", function (value) {
      _this.setState({
        gender: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleProducerSelectChange", function (value) {
      _this.setState({
        producer: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCountrySelectChange", function (value) {
      _this.setState({
        country: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTypeSelectChange", function (value) {
      _this.setState({
        type: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      console.log("--register submit--");
      var _this$state = _this.state,
          name = _this$state.name,
          size = _this$state.size,
          price = _this$state.price,
          rating = _this$state.rating,
          color = _this$state.color,
          material = _this$state.material,
          type = _this$state.type,
          producer = _this$state.producer,
          country = _this$state.country,
          image = _this$state.image,
          gender = _this$state.gender;
      var errors = {};
      if (name === "") errors.name = "Поле не може бути пустим!";
      if (size === "") errors.size = "Поле не може бути пустим!";
      if (price === "") errors.price = "Поле не може бути пустим!";
      if (rating === "") errors.rating = "Поле не може бути пустим!";
      if (color === "") errors.color = "Поле не може бути пустим!";
      if (material === "") errors.material = "Поле не може бути пустим!";
      if (type === "") errors.type = "Поле не може бути пустим!";
      if (producer === "") errors.producer = "Поле не може бути пустим!";
      if (country === "") errors.country = "Поле не може бути пустим!";
      if (image === "") errors.image = "Поле не може бути пустим!";
      var isValid = Object.keys(errors).length === 0;

      if (isValid) {
        console.log("Model is Valid"); //ajax axios post

        var model = {
          name: name,
          size: size,
          price: price,
          rating: rating,
          color: color,
          material: material,
          type: type,
          producer: producer,
          country: country,
          image: image,
          gender: gender
        };
        axios.post("/api/addproduct", model).then(function (resp) {
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

    _defineProperty(_assertThisInitialized(_this), "getCroppedImage", function (img) {
      _this.setState({
        image: img
      });
    });

    return _this;
  }

  _createClass(AddProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getColors();
      this.getMaterials();
      this.getTypes();
      this.getProducers();
      this.getGenders();
      this.getCountries();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          size = _this$state2.size,
          price = _this$state2.price,
          rating = _this$state2.rating,
          errors = _this$state2.errors,
          image = _this$state2.image,
          colors = _this$state2.colors,
          materials = _this$state2.materials,
          types = _this$state2.types,
          producers = _this$state2.producers,
          genders = _this$state2.genders,
          countries = _this$state2.countries;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "rounded-circle",
        width: "100",
        src: image,
        unloader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          width: "100" // src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
          ,
          src: "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
        })
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_cropper_CropperModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        getCroppedImage: this.getCroppedImage
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "name",
        label: "\u041D\u0430\u0437\u0432\u0430",
        value: name,
        error: errors.name,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "size",
        label: "\u0420\u043E\u0437\u043C\u0456\u0440",
        value: size,
        error: errors.size,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "price",
        label: "\u0426\u0456\u043D\u0430",
        value: price,
        error: errors.price,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: "rating",
        label: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433",
        value: rating,
        error: errors.rating,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldname: "color",
        arrayOfData: colors,
        selected: "\u041A\u043E\u043B\u0456\u0440",
        onSelectChange: this.handleColorSelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldname: "material",
        arrayOfData: materials,
        selected: "\u041C\u0430\u0442\u0435\u0440\u0456\u0430\u043B",
        onSelectChange: this.handleMaterialSelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldname: "type",
        arrayOfData: types,
        selected: "\u0422\u0438\u043F",
        onSelectChange: this.handleTypeSelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        arrayOfData: producers,
        selected: "\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A",
        fieldname: "producer",
        onSelectChange: this.handleProducerSelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldname: "gender",
        arrayOfData: genders,
        selected: "\u0421\u0442\u0430\u0442\u044C",
        onSelectChange: this.handleGenderSelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_SelectFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldname: "country",
        arrayOfData: countries,
        selected: "\u041A\u0440\u0430\u0457\u043D\u0430",
        onSelectChange: this.handleCountrySelectChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group  d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary "
      }, "\u0414\u043E\u0434\u0430\u0442\u0438"))));
    }
  }]);

  return AddProduct;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ }),

/***/ "./resources/js/src/components/common/SelectFieldGroup.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/common/SelectFieldGroup.js ***!
  \****************************************************************/
/*! exports provided: SelectFieldGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFieldGroup", function() { return SelectFieldGroup; });
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


var SelectFieldGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectFieldGroup, _Component);

  function SelectFieldGroup(props) {
    var _this;

    _classCallCheck(this, SelectFieldGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectFieldGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var selectedValue = event.target.value;

      _this.props.onSelectChange(selectedValue);
    });

    return _this;
  }

  _createClass(SelectFieldGroup, [{
    key: "render",
    value: function render() {
      var fieldname = this.props.fieldname;
      var selected = this.props.selected;
      var arrayOfData = this.props.arrayOfData;
      var options = arrayOfData.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: data.id,
          value: data.id
        }, data.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, selected), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        id: fieldname,
        name: fieldname,
        className: "form-control",
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C ", selected), options));
    }
  }]);

  return SelectFieldGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (SelectFieldGroup);

/***/ })

}]);