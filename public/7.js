(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/ShopList.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/shopList/ShopList.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-nav li a:hover {\r\n    cursor: pointer;\r\n    color: lightblue;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/SingleItem/Modal.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/shopList/SingleItem/Modal.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    padding: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/shopItem/ShopItem.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/components/shopList/shopItem/ShopItem.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    width: 18rem;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/src/components/common/FilterFieldGroup.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/common/FilterFieldGroup.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var FilterFieldGroup = function FilterFieldGroup(_ref) {
  var field = _ref.field,
      value = _ref.value,
      label = _ref.label,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: field,
    name: field,
    value: value,
    onChange: onChange,
    className: "form-check-input"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: field
  }, label));
};

FilterFieldGroup.propTypes = {
  field: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
FilterFieldGroup.defaultProps = {
  type: "checkbox"
};
/* harmony default export */ __webpack_exports__["default"] = (FilterFieldGroup);

/***/ }),

/***/ "./resources/js/src/components/shopList/ShopList.css":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/shopList/ShopList.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./ShopList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/ShopList.css");

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

/***/ "./resources/js/src/components/shopList/ShopList.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/shopList/ShopList.js ***!
  \**********************************************************/
/*! exports provided: ShopList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopList", function() { return ShopList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopItem_ShopItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopItem/ShopItem */ "./resources/js/src/components/shopList/shopItem/ShopItem.js");
/* harmony import */ var _common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/FilterFieldGroup */ "./resources/js/src/components/common/FilterFieldGroup.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShopList_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopList.css */ "./resources/js/src/components/shopList/ShopList.css");
/* harmony import */ var _ShopList_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ShopList_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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


 // import ProductModal from "./SingleItem/ProductModal";





var ShopList =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopList, _Component);

  function ShopList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShopList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShopList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      list: [],
      producers: [],
      types: [],
      materials: [],
      sizes: ["34", "35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45"],
      colors: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeColors", function (event) {
      var colors = _this.state.colors;
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      console.log("hendleinput change name", event.target.name);
      var id = 0;
      colors.forEach(function (item) {
        if (item.name == name) {
          id = item.id;
          console.log("id", id);
        }
      });

      if (target.checked) {
        axios.get("/api/productbycolor", {
          params: {
            id: id
          }
        }).then(function (response) {
          //handle success
          _this.setState({
            list: response.data
          });

          console.log("product from get request", response.data);
          console.log("target name", name);
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      } else {
        _this.getProducts();
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var producers = _this.state.producers;
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      console.log("hendleinput change name", event.target.name);
      var id = 0;
      producers.forEach(function (item) {
        if (item.name == name) {
          id = item.id;
          console.log("id", id);
        }
      });

      if (target.checked) {
        axios.get("/api/productbyproducer", {
          params: {
            id: id
          }
        }).then(function (response) {
          //handle success
          _this.setState({
            list: response.data
          });

          console.log("product from get request", response.data);
          console.log("target name", name);
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      } else {
        _this.getProducts();
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeType", function (event) {
      var types = _this.state.types;
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      console.log("hendleinput change name", event.target.name);
      var id = 0;
      types.forEach(function (item) {
        if (item.name == name) {
          id = item.id;
          console.log("id", id);
        }
      });

      if (target.checked) {
        axios.get("/api/productbytype", {
          params: {
            id: id
          }
        }).then(function (response) {
          //handle success
          _this.setState({
            list: response.data
          });

          console.log("product from get request", response.data);
          console.log("target name", name);
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      } else {
        _this.getProducts();
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeMaterial", function (event) {
      var materials = _this.state.materials;
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      console.log("hendleinput change name", event.target.name);
      var id = 0;
      materials.forEach(function (item) {
        if (item.name == name) {
          id = item.id;
          console.log("id", id);
        }
      });

      if (target.checked) {
        axios.get("/api/productbymaterial", {
          params: {
            id: id
          }
        }).then(function (response) {
          //handle success
          _this.setState({
            list: response.data
          });

          console.log("product from get request", response.data);
          console.log("target name", name);
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      } else {
        _this.getProducts();
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChangeSize", function (event) {
      var sizes = _this.state.sizes;
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      console.log("hendleinput change name", event.target.name); // let id = 0;
      // sizes.forEach(item => {
      //     if (item.name == name) {
      //         id = item.id;
      //         console.log("id", id);
      //     }
      // });

      if (target.checked) {
        axios.get("/api/productbysize", {
          params: {
            size: event.target.name
          }
        }).then(function (response) {
          //handle success
          _this.setState({
            list: response.data
          });

          console.log("product from get request", response.data);
          console.log("target name", name);
        })["catch"](function (response) {
          //handle error
          console.log(response);
        });
      } else {
        _this.getProducts();
      }

      _this.setState(_defineProperty({}, name, value));
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

    _defineProperty(_assertThisInitialized(_this), "getProductsByDesc", function () {
      // axios
      //     .get("/api/productbypricedesc")
      //     .then(response => {
      //         //handle success
      //         this.setState({
      //             list: response.data
      //         });
      //         console.log("product from get request", response.data);
      //     })
      //     .catch(response => {
      //         //handle error
      //         console.log(response);
      //     });
      _this.getData("productbypricedesc");
    });

    _defineProperty(_assertThisInitialized(_this), "getProductsByAsc", function () {
      _this.getData("productbypriceasc");
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

    _defineProperty(_assertThisInitialized(_this), "getProducts", function () {
      _this.getData("prod");
    });

    _defineProperty(_assertThisInitialized(_this), "getProductsByMen", function () {
      _this.getData("productbymen");
    });

    _defineProperty(_assertThisInitialized(_this), "getProductsByWomen", function () {
      _this.getData("productbywomen");
    });

    _defineProperty(_assertThisInitialized(_this), "getProductsByKids", function () {
      _this.getData("productbykids");
    });

    _defineProperty(_assertThisInitialized(_this), "getData", function (routeUrl) {
      axios.get("/api/".concat(routeUrl)).then(function (response) {
        //handle success
        _this.setState({
          list: response.data
        });

        console.log("product from get request", response.data);
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    });

    return _this;
  }

  _createClass(ShopList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProducts();
      this.getProducers();
      this.getTypes();
      this.getMaterials();
      this.getColors();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          list = _this$state.list,
          producers = _this$state.producers,
          types = _this$state.types,
          materials = _this$state.materials,
          sizes = _this$state.sizes,
          colors = _this$state.colors;
      console.log("state ==>", this.state);
      var newItem = list.map(function (item) {
        return (// <ProductModal
          //     key={item.id}
          //     name={item.name}
          //     price={item.price}
          //     size={item.size}
          //     rating={item.rating}
          //     main_image={item.main_image}
          //     type={item.product_data.type.name}
          // />
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopItem_ShopItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: item.id,
            key: item.id,
            name: item.name,
            price: item.price,
            size: item.size,
            rating: item.rating,
            main_image: item.main_image,
            type: item.product_data.type.name
          })
        );
      });
      var producerfilter = producers.map(function (producer) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onChange: _this2.handleInputChange // id={producer.id}
          ,
          key: producer.id,
          label: producer.name,
          field: producer.name
        }));
      });
      var typefilter = types.map(function (type) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onChange: _this2.handleInputChangeType // id={producer.id}
          ,
          key: type.id,
          label: type.name,
          field: type.name
        }));
      });
      var materialfilter = materials.map(function (material) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onChange: _this2.handleInputChangeMaterial // id={producer.id}
          ,
          key: material.id,
          label: material.name,
          field: material.name
        }));
      });
      var scrollStyle = {
        height: "150px"
      };
      var sizefilter = sizes.map(function (size) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onChange: _this2.handleInputChangeSize // id={producer.id}
          ,
          key: size,
          label: size,
          field: size
        }));
      });
      var colorfilter = colors.map(function (color) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FilterFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onChange: _this2.handleInputChangeColors // id={producer.id}
          ,
          key: color.id,
          label: color.name,
          field: color.name
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav col d-flex flex-row-reverse filter-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProductsByAsc
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-sort-amount-asc",
        "aria-hidden": "true"
      }), " ", "\u041D\u0430\u0439\u0434\u0435\u0448\u0435\u0432\u0448\u0456")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mr-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProductsByDesc
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-sort-amount-desc",
        "aria-hidden": "true"
      }), " ", "\u041D\u0430\u0439\u0434\u043E\u0440\u043E\u0436\u0447\u0456")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav col filter-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProducts
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-users",
        "aria-hidden": "true"
      }), " ", "\u0423\u0441\u0456")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProductsByMen
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-male",
        "aria-hidden": "true"
      }), " ", "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0456")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mr-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProductsByWomen
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-female",
        "aria-hidden": "true"
      }), " ", "\u0416\u0456\u043D\u043E\u0447\u0456")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mr-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.getProductsByKids
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-child",
        "aria-hidden": "true"
      }), " ", "\u0414\u0438\u0442\u044F\u0447\u0456")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "\u0411\u0440\u0435\u043D\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        style: scrollStyle
      }, producerfilter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "\u0422\u0438\u043F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        style: scrollStyle
      }, typefilter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "\u041C\u0430\u0442\u0435\u0440\u0456\u0430\u043B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        style: scrollStyle
      }, materialfilter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "\u0420\u043E\u0437\u043C\u0456\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        style: scrollStyle
      }, sizefilter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "\u041A\u043E\u043B\u0456\u0440"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        style: scrollStyle
      }, colorfilter)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-columns"
      }, newItem))));
    }
  }]);

  return ShopList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ }),

/***/ "./resources/js/src/components/shopList/SingleItem/Modal.css":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/shopList/SingleItem/Modal.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./Modal.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/SingleItem/Modal.css");

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

/***/ "./resources/js/src/components/shopList/SingleItem/ProductModal.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/components/shopList/SingleItem/ProductModal.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shopItem_ShopItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopItem/ShopItem */ "./resources/js/src/components/shopList/shopItem/ShopItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProductModal = function ProductModal(props) {
  var name = props.name,
      price = props.price,
      size = props.size,
      rating = props.rating,
      main_image = props.main_image,
      buttonLabel = props.buttonLabel,
      className = props.className,
      type = props.type;
  var imgPath = "/images/".concat(main_image);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onClick: toggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopItem_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: type,
    name: name,
    price: price,
    size: size,
    rating: rating,
    main_image: main_image
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle
  }, "Modal title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "text-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopItem_ShopItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    price: price,
    size: size,
    rating: rating,
    main_image: main_image
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: toggle
  }, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0448\u0438\u043A"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "secondary",
    onClick: toggle
  }, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductModal);

/***/ }),

/***/ "./resources/js/src/components/shopList/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/shopList/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopList */ "./resources/js/src/components/shopList/ShopList.js");

/* harmony default export */ __webpack_exports__["default"] = (_ShopList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/components/shopList/shopItem/ShopItem.css":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/shopList/shopItem/ShopItem.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./ShopItem.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/components/shopList/shopItem/ShopItem.css");

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

/***/ "./resources/js/src/components/shopList/shopItem/ShopItem.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/shopList/shopItem/ShopItem.js ***!
  \*******************************************************************/
/*! exports provided: ShopItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopItem", function() { return ShopItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ShopItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopItem.css */ "./resources/js/src/components/shopList/shopItem/ShopItem.css");
/* harmony import */ var _ShopItem_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ShopItem_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SingleItem_ProductModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SingleItem/ProductModal */ "./resources/js/src/components/shopList/SingleItem/ProductModal.js");
/* harmony import */ var _SingleItem_Modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleItem/Modal.css */ "./resources/js/src/components/shopList/SingleItem/Modal.css");
/* harmony import */ var _SingleItem_Modal_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SingleItem_Modal_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 //import { Button } from 'semantic-ui-react'




var ShopItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopItem, _Component);

  function ShopItem() {
    _classCallCheck(this, ShopItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShopItem).apply(this, arguments));
  }

  _createClass(ShopItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          price = _this$props.price,
          size = _this$props.size,
          rating = _this$props.rating,
          main_image = _this$props.main_image,
          type = _this$props.type;
      var imgPath = "/images/".concat(main_image);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card col text-dark bg-light "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid w-100",
        src: imgPath,
        alt: name
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title"
      }, type, " ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-danger"
      }, price, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-usd",
        "aria-hidden": "true"
      })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("s", null, price, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-usd",
        "aria-hidden": "true"
      }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/Shop/".concat(id),
        className: "btn btn-primary"
      }, "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438"))));
    }
  }]);

  return ShopItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ShopItem);

/***/ })

}]);