module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../seedom-assets/logo/full/seedom-full-white-transparent@4x.png":
/*!***********************************************************************!*\
  !*** ../seedom-assets/logo/full/seedom-full-white-transparent@4x.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25c2c8dd141c93f986a13359f7f6c721.png";

/***/ }),

/***/ "../seedom-assets/logo/o/seedom-o-white-transparent.svg":
/*!**************************************************************!*\
  !*** ../seedom-assets/logo/o/seedom-o-white-transparent.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b624dd33fb9366ac2ca93ef9c6c45bb.svg";

/***/ }),

/***/ "./app/actions/ethereum.js":
/*!*********************************!*\
  !*** ./app/actions/ethereum.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var call = function call(_ref) {
  var contractName = _ref.contractName,
      contractAddress = _ref.contractAddress,
      method = _ref.method,
      args = _ref.args;
  return {
    type: 'ETHEREUM_CALL',
    contractName: contractName,
    contractAddress: contractAddress,
    method: method,
    args: args
  };
};

var allCall = function allCall(_ref2) {
  var contractName = _ref2.contractName,
      method = _ref2.method,
      args = _ref2.args;
  return {
    type: 'ETHEREUM_ALLCALL',
    contractName: contractName,
    method: method,
    args: args
  };
};

var send = function send(_ref3) {
  var contractName = _ref3.contractName,
      contractAddress = _ref3.contractAddress,
      method = _ref3.method,
      args = _ref3.args,
      value = _ref3.value;
  return {
    type: 'ETHEREUM_SEND',
    contractName: contractName,
    contractAddress: contractAddress,
    method: method,
    args: args,
    value: value
  };
};

exports.call = call;
exports.allCall = allCall;
exports.send = send;

/***/ }),

/***/ "./app/components/about/index.js":
/*!***************************************!*\
  !*** ./app/components/about/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _sections = __webpack_require__(/*! ../sections */ "./app/components/sections/index.js");

var _sections2 = _interopRequireDefault(_sections);

var _collapse = __webpack_require__(/*! ../collapse */ "./app/components/collapse/index.js");

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Sections) {
  _inherits(About, _Sections);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _collapse2.default,
          {
            title: 'our mission',
            collapsed: !open.includes('our-mission')
          },
          _react2.default.createElement(
            'div',
            null,
            'HELLO!'
          )
        ),
        _react2.default.createElement(
          _collapse2.default,
          {
            title: 'about the team',
            collapsed: !open.includes('about-the-team')
          },
          _react2.default.createElement(
            'div',
            null,
            'HELLO!'
          )
        )
      );
    }
  }]);

  return About;
}(_sections2.default);

var mapStateToProps = function mapStateToProps(state) {
  return { router: state.router };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(About);

/***/ }),

/***/ "./app/components/causeLogo/index.js":
/*!*******************************************!*\
  !*** ./app/components/causeLogo/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _causes = __webpack_require__(/*! @seedom-io/seedom-resolver/causes */ "@seedom-io/seedom-resolver/causes");

var causesResolver = _interopRequireWildcard(_causes);

var _causeLogo = __webpack_require__(/*! ../../img/logos/cause-logo.png */ "./app/img/logos/cause-logo.png");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/causeLogo/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CauseLogo = function (_Component) {
  _inherits(CauseLogo, _Component);

  function CauseLogo() {
    _classCallCheck(this, CauseLogo);

    return _possibleConstructorReturn(this, (CauseLogo.__proto__ || Object.getPrototypeOf(CauseLogo)).apply(this, arguments));
  }

  _createClass(CauseLogo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          deployment = _props.deployment,
          size = _props.size;
      // make sure we have a deployment

      if (!deployment) {
        return null;
      }

      var imageUrl = causesResolver.getImageUrl(deployment.cause);
      var finalImageUrl =  false ? undefined : _causeLogo2.default;
      return _react2.default.createElement('div', { className: 'cause-logo ' + size, style: { backgroundImage: 'url(' + finalImageUrl + ')' } });
    }
  }]);

  return CauseLogo;
}(_react.Component);

CauseLogo.propTypes = {
  deployment: _propTypes2.default.shape(),
  size: _propTypes2.default.string
};
CauseLogo.defaultProps = {
  deployment: null,
  size: null
};
exports.default = CauseLogo;

/***/ }),

/***/ "./app/components/causeLogo/index.scss":
/*!*********************************************!*\
  !*** ./app/components/causeLogo/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/collapse/index.js":
/*!******************************************!*\
  !*** ./app/components/collapse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./app/components/collapse/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.toggle = function () {
      _this.setState(function (prevState) {
        return {
          collapsed: !prevState.collapsed
        };
      });
    };

    _this.state = {
      collapsed: props.collapsed
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.state.collapsed !== newProps.collapsed) {
        this.setState({ collapsed: newProps.collapsed });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          title = _props.title;
      var collapsed = this.state.collapsed;

      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _classnames2.default)('seedom-collapse', { collapsed: collapsed }) },
        _react2.default.createElement(
          'div',
          { className: 'header', onClick: this.toggle },
          _react2.default.createElement(
            'span',
            { className: 'toggle left' },
            _react2.default.createElement('i', { className: 'fas fa-plus' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: 'toggle right' },
            _react2.default.createElement('i', { className: 'fas fa-plus' })
          )
        ),
        !collapsed && _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.children
        )
      );
    }
  }]);

  return Collapse;
}(_react.Component);

Collapse.propTypes = {
  id: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  collapsed: _propTypes2.default.bool,
  children: _propTypes2.default.element
};
Collapse.defaultProps = {
  id: null,
  collapsed: true,
  children: null
};
exports.default = Collapse;

/***/ }),

/***/ "./app/components/collapse/index.scss":
/*!********************************************!*\
  !*** ./app/components/collapse/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/contact/index.js":
/*!*****************************************!*\
  !*** ./app/components/contact/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _sections = __webpack_require__(/*! ../sections */ "./app/components/sections/index.js");

var _sections2 = _interopRequireDefault(_sections);

__webpack_require__(/*! ./index.scss */ "./app/components/contact/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Sections) {
  _inherits(Contact, _Sections);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container seedom-contact' },
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column is-offset-2 has-text-white' },
            _react2.default.createElement(
              'h3',
              { className: 'title has-text-white' },
              'Are you leading a cause that needs funding?'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Want to learn more about accepting donations in cryptocurrencies?'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Then you are at the right place!'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'For press and media inquires, email us directly at ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:team@seedom.io' },
                'team@seedom.io'
              ),
              '.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column' },
            _react2.default.createElement('iframe', {
              src: 'https://landing.mailerlite.com/webforms/landing/t6i1i0',
              style: { border: 'none', width: '350px', height: '472px' }
            })
          )
        )
      );
    }
  }]);

  return Contact;
}(_sections2.default);

var mapStateToProps = function mapStateToProps(state) {
  return { router: state.router };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Contact);

/***/ }),

/***/ "./app/components/contact/index.scss":
/*!*******************************************!*\
  !*** ./app/components/contact/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/field/index.js":
/*!***************************************!*\
  !*** ./app/components/field/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./app/components/field/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputClass = function inputClass(isValid) {
  return (0, _classnames2.default)({
    input: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

var textareaClass = function textareaClass(isValid) {
  return (0, _classnames2.default)({
    textarea: true,
    'is-primary': isValid,
    'is-danger': !isValid
  });
};

var Field = function (_Component) {
  _inherits(Field, _Component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
      _this.input.focus();
    }, _this.handleChange = function (event) {
      _this.props.onChange(event.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          type = _props.type,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          value = _props.value,
          maxLength = _props.maxLength,
          children = _props.children,
          isValid = _props.isValid,
          min = _props.min,
          max = _props.max;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-field field' },
        _react2.default.createElement(
          'div',
          { className: 'control ' + format },
          {
            textbox: _react2.default.createElement('input', {
              className: inputClass(isValid),
              type: type,
              min: min,
              max: max,
              placeholder: placeholder.toUpperCase(),
              disabled: disabled,
              value: value,
              onChange: this.handleChange,
              ref: function ref(input) {
                _this2.input = input;
              }
            }),
            textblock: _react2.default.createElement('textarea', {
              rows: '2',
              className: textareaClass(isValid),
              type: type,
              placeholder: placeholder.toUpperCase(),
              disabled: disabled,
              value: value,
              maxLength: maxLength,
              onChange: this.handleChange,
              ref: function ref(input) {
                _this2.input = input;
              }
            }),
            addonbox: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('input', {
                className: inputClass(isValid),
                type: type,
                min: min,
                max: max,
                placeholder: placeholder.toUpperCase(),
                disabled: disabled,
                onChange: this.handleChange,
                ref: function ref(input) {
                  _this2.input = input;
                }
              }),
              _react2.default.createElement(
                'div',
                { className: 'addon' },
                children
              )
            )
          }[format]
        )
      );
    }
  }]);

  return Field;
}(_react.Component);

Field.propTypes = {
  format: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  min: _propTypes2.default.shape(),
  max: _propTypes2.default.shape(),
  placeholder: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  isValid: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.element
};
Field.defaultProps = {
  value: '',
  maxLength: 0,
  min: null,
  max: null,
  isValid: true,
  children: null
};
exports.default = Field;

/***/ }),

/***/ "./app/components/field/index.scss":
/*!*****************************************!*\
  !*** ./app/components/field/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/footer/index.js":
/*!****************************************!*\
  !*** ./app/components/footer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { className: "footer" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "content has-text-centered" },
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Seedom"
              ),
              " by the ",
              _react2.default.createElement(
                "a",
                { className: "is-green", href: "mailto:team@seedom.io" },
                "Seedom Team"
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ "./app/components/head/index.js":
/*!**************************************!*\
  !*** ./app/components/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _badges = __webpack_require__(/*! ../../utils/badges */ "./app/utils/badges.js");

var badges = _interopRequireWildcard(_badges);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var name = 'Seedom';
var author = 'Team Palm Tree';
var title = 'Seedom | Seeding the future of philanthropy';
var description = 'Raising awareness and Ether for altruistic causes while rewarding a single participant for their contribution and support. Seed the future of philanthropy!';
var image = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/share/seedom-share.png';
var imageWidth = 1200;
var imageHeight = 628;

var Head = function (_Component) {
  _inherits(Head, _Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'render',
    value: function render() {
      var router = this.props.router;


      var finalUrl = "http://localhost:8080";
      var finalImage = image;
      // check for badge
      if (router && router.location) {
        if (router.location.search !== '') {
          var query = _queryString2.default.parse(router.location.search.substr(1));
          var n = query.n,
              c = query.c,
              p = query.p;

          if (n && c && p) {
            finalUrl += router.location.search;
            finalImage = badges.getImageUrl({
              network: n,
              contract: c,
              participant: p
            });
          }
        }
      }

      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'author', content: author }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=0.7' }),
        _react2.default.createElement('meta', { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }),
        _react2.default.createElement('meta', { name: 'twitter:site', property: 'twitter:site', content: '@seedom_io' }),
        _react2.default.createElement('meta', { name: 'twitter:title', property: 'twitter:title', content: title }),
        _react2.default.createElement('meta', { name: 'twitter:description', property: 'twitter:description', content: description }),
        _react2.default.createElement('meta', { name: 'twitter:image', property: 'twitter:image', content: finalImage }),
        _react2.default.createElement('meta', { name: 'twitter:url', property: 'twitter:url', content: finalUrl }),
        _react2.default.createElement('meta', { name: 'og:type', property: 'og:type', content: 'website' }),
        _react2.default.createElement('meta', { name: 'og:site_name', property: 'og:site_name', content: name }),
        _react2.default.createElement('meta', { name: 'og:title', property: 'og:title', content: title }),
        _react2.default.createElement('meta', { name: 'og:description', property: 'og:description', content: description }),
        _react2.default.createElement('meta', { name: 'og:image', property: 'og:image', content: finalImage }),
        _react2.default.createElement('meta', { name: 'og:image:width', property: 'og:image:width', content: imageWidth }),
        _react2.default.createElement('meta', { name: 'og:image:height', property: 'og:image:height', content: imageHeight }),
        _react2.default.createElement('meta', { name: 'og:url', property: 'og:url', content: finalUrl }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css', integrity: 'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg', crossOrigin: 'anonymous' })
      );
    }
  }]);

  return Head;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { router: state.router };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Head);

/***/ }),

/***/ "./app/components/help/index.js":
/*!**************************************!*\
  !*** ./app/components/help/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _sections = __webpack_require__(/*! ../sections */ "./app/components/sections/index.js");

var _sections2 = _interopRequireDefault(_sections);

var _toggle = __webpack_require__(/*! ../toggle */ "./app/components/toggle/index.js");

var _toggle2 = _interopRequireDefault(_toggle);

__webpack_require__(/*! ./index.scss */ "./app/components/help/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_Sections) {
  _inherits(Help, _Sections);

  function Help() {
    _classCallCheck(this, Help);

    return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
  }

  _createClass(Help, [{
    key: 'render',
    value: function render() {
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-help' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'column is-three-fifths is-offset-one-fifth' },
            _react2.default.createElement(
              'h3',
              { className: 'title has-text-white' },
              'Accessing Seedom'
            ),
            _react2.default.createElement(
              _toggle2.default,
              {
                title: 'Accessing on mobile',
                collapsed: !open.includes('accessing-mobile')
              },
              'To use Seedom on mobile, we recommend the ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://www.cipherbrowser.com/' },
                'Cipher app'
              ),
              '. You will need to put Ether into your Cipher wallet in order to participate.'
            ),
            _react2.default.createElement(
              _toggle2.default,
              {
                title: 'Accessing on desktop',
                collapsed: !open.includes('accessing-desktop')
              },
              'To use Seedom on the desktop, you will need to install ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://metamask.io/' },
                'MetaMask'
              ),
              ' or use the ',
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://brave.com/' },
                'Brave browser'
              ),
              '. You will need to put Ether into your MetaMask wallet in order to participate.'
            )
          )
        )
      );
    }
  }]);

  return Help;
}(_sections2.default);

var mapStateToProps = function mapStateToProps(state) {
  return { router: state.router };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Help);

/***/ }),

/***/ "./app/components/help/index.scss":
/*!****************************************!*\
  !*** ./app/components/help/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/history/index.js":
/*!*****************************************!*\
  !*** ./app/components/history/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Component) {
  _inherits(History, _Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'History'
      );
    }
  }]);

  return History;
}(_react.Component);

exports.default = History;

/***/ }),

/***/ "./app/components/hype/index.js":
/*!**************************************!*\
  !*** ./app/components/hype/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _circles = __webpack_require__(/*! ../participate/components/puck/components/circles */ "./app/components/participate/components/puck/components/circles/index.js");

var _circles2 = _interopRequireDefault(_circles);

__webpack_require__(/*! ./index.scss */ "./app/components/hype/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hype = function (_Component) {
  _inherits(Hype, _Component);

  function Hype() {
    _classCallCheck(this, Hype);

    return _possibleConstructorReturn(this, (Hype.__proto__ || Object.getPrototypeOf(Hype)).apply(this, arguments));
  }

  _createClass(Hype, [{
    key: 'render',
    value: function render() {
      var deployment = {
        deployTime: new Date(1524369600 * 1000),
        endTime: new Date(1525147200 * 1000)
      };

      return _react2.default.createElement(
        'div',
        { className: 'seedom-hype' },
        _react2.default.createElement(
          'div',
          { className: 'countdown' },
          _react2.default.createElement(_circles2.default, { starter: 'launches', isLoading: false, deployment: deployment }),
          _react2.default.createElement(
            'div',
            { className: 'seedom-content show' },
            _react2.default.createElement(
              'div',
              { className: 'seedom-overlay layout' },
              _react2.default.createElement(
                'div',
                { className: 'division text top large-pad narrow' },
                _react2.default.createElement(
                  'div',
                  { className: 'coming-soon' },
                  'Launches May 1'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'field' },
                  _react2.default.createElement(
                    'div',
                    { className: 'control' },
                    _react2.default.createElement(
                      'a',
                      { className: 'button is-success', type: 'submit', href: 'https://seedom-io.github.io/seedom-whitepaper/seedom-whitepaper.pdf' },
                      'READ THE WHITEPAPER'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'division text center' },
                _react2.default.createElement('div', { className: 'seedom-logo' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'division text bottom' },
                _react2.default.createElement(
                  'form',
                  { action: 'https://landing.mailerlite.com/webforms/submit/z2z8h3', method: 'POST', target: '_blank' },
                  _react2.default.createElement('input', { type: 'hidden', name: 'ml-submit', value: '1' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'field email' },
                    _react2.default.createElement(
                      'div',
                      { className: 'control textbox' },
                      _react2.default.createElement('input', { className: 'input is-primary', type: 'email', placeholder: 'email@example.com', name: 'fields[email]' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                      'div',
                      { className: 'control' },
                      _react2.default.createElement(
                        'button',
                        { className: 'button is-success', type: 'submit' },
                        'SEND ME A REMINDER'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Hype;
}(_react.Component);

exports.default = Hype;

/***/ }),

/***/ "./app/components/hype/index.scss":
/*!****************************************!*\
  !*** ./app/components/hype/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/navbar/index.js":
/*!****************************************!*\
  !*** ./app/components/navbar/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _seedomFullWhiteTransparent4x = __webpack_require__(/*! ../../../../seedom-assets/logo/full/seedom-full-white-transparent@4x.png */ "../seedom-assets/logo/full/seedom-full-white-transparent@4x.png");

var _seedomFullWhiteTransparent4x2 = _interopRequireDefault(_seedomFullWhiteTransparent4x);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.handleNavToggle = function () {
      _this.setState({
        isBurgerActive: !_this.state.isBurgerActive
      });
    };

    _this.handleNavLink = function () {
      _this.setState({
        isBurgerActive: false
      });
    };

    _this.state = {
      isBurgerActive: false
    };
    return _this;
  }

  _createClass(NavBar, [{
    key: 'render',


    // <NavLink className="navbar-item" activeClassName="is-active" to="/history" onClick={this.handleNavLink} exact>HISTORY</NavLink>
    value: function render() {
      var isBurgerActive = this.state.isBurgerActive;
      var isLoading = this.props.ethereum.isLoading;
      var pathname = this.props.router.location.pathname;


      return _react2.default.createElement(
        'nav',
        { className: 'navbar' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('navbar-brand', { 'is-loading': isLoading }) },
            _react2.default.createElement(
              'a',
              { className: 'navbar-item', href: '/' },
              _react2.default.createElement('img', { src: _seedomFullWhiteTransparent4x2.default, alt: 'Seedom - Seeding the future of philanthropy' })
            ),
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)('navbar-burger', 'burger', { 'is-active': isBurgerActive }), onClick: this.handleNavToggle },
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('navbar-menu', { 'is-active': isBurgerActive }) },
            pathname !== '/' && _react2.default.createElement(
              'div',
              { className: 'navbar-start' },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', activeClassName: 'is-active', to: '/participate', onClick: this.handleNavLink, exact: true },
                'PARTICIPATE'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', activeClassName: 'is-active', to: '/vote', onClick: this.handleNavLink, exact: true },
                'VOTE'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', activeClassName: 'is-active', to: '/help', onClick: this.handleNavLink, exact: true },
                'HELP'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', activeClassName: 'is-active', to: '/about', onClick: this.handleNavLink, exact: true },
                'ABOUT'
              ),
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', activeClassName: 'is-active', to: '/contact', onClick: this.handleNavLink, exact: true },
                'CONTACT'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-end' },
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://medium.com/@seedom.io' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-medium' })
                )
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://reddit.com/r/seedom_io' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-reddit' })
                )
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://github.com/seedom-io' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-github' })
                )
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://www.facebook.com/seedom.io' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-facebook' })
                )
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://twitter.com/seedom_io' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-twitter' })
                )
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'https://www.instagram.com/seedom.io/' },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fab fa-lg fa-instagram' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

NavBar.propTypes = {
  ethereum: _propTypes2.default.shape().isRequired,
  router: _propTypes2.default.shape().isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    router: state.router,
    ethereum: state.ethereum
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NavBar);

/***/ }),

/***/ "./app/components/participate/components/about/index.js":
/*!**************************************************************!*\
  !*** ./app/components/participate/components/about/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _collapse = __webpack_require__(/*! ../../../collapse */ "./app/components/collapse/index.js");

var _collapse2 = _interopRequireDefault(_collapse);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/about/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollToElement = __webpack_require__(/*! scroll-to-element */ "scroll-to-element");
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo() {
      this.scrollToElement('#seedom-participate-about', {
        offset: 0,
        ease: 'outCirc',
        duration: 3000
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isPlaying = _props.isPlaying,
          cause = _props.cause;

      if (!cause) {
        return null;
      }

      return _react2.default.createElement(
        _collapse2.default,
        { id: 'seedom-participate-about', collapsed: !isPlaying, title: 'about ' + cause.name },
        _react2.default.createElement(
          'div',
          { className: 'seedom-participate-about' },
          _react2.default.createElement(
            'div',
            { className: 'video' },
            _react2.default.createElement('iframe', {
              id: 'video',
              title: 'video',
              src: '//www.youtube.com/embed/' + cause.video + '?rel=0' + (isPlaying ? '&autoplay=1' : ''),
              frameBorder: '0',
              allowFullScreen: true
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-dark', href: 'https://' + cause.url, target: '_blank' },
                'learn more at ' + cause.url
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

About.propTypes = {
  isPlaying: _propTypes2.default.bool,
  cause: _propTypes2.default.shape()
};
About.defaultProps = {
  isPlaying: false,
  cause: null
};
exports.default = About;

/***/ }),

/***/ "./app/components/participate/components/about/index.scss":
/*!****************************************************************!*\
  !*** ./app/components/participate/components/about/index.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/feed/index.js":
/*!*************************************************************!*\
  !*** ./app/components/participate/components/feed/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bytes = __webpack_require__(/*! ../../../../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _numbers = __webpack_require__(/*! ../../../../utils/numbers */ "./app/utils/numbers.js");

var numbers = _interopRequireWildcard(_numbers);

var _etherscan = __webpack_require__(/*! ../../../../utils/etherscan */ "./app/utils/etherscan.js");

var etherscan = _interopRequireWildcard(_etherscan);

var _collapse = __webpack_require__(/*! ../../../collapse */ "./app/components/collapse/index.js");

var _collapse2 = _interopRequireDefault(_collapse);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/feed/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getAddress = function getAddress(item) {
  switch (item.type) {
    case 'FUNDRAISER_PARTICIPATION':
      return item.participation.participant;
    case 'FUNDRAISER_RAISE':
      return item.raise.participant;
    default:
      return null;
  }
};

var getEntries = function getEntries(item) {
  switch (item.type) {
    case 'FUNDRAISER_PARTICIPATION':
      return item.participation.entries;
    case 'FUNDRAISER_RAISE':
      return item.raise.entries;
    default:
      return null;
  }
};

var getMessage = function getMessage(item) {
  if (item.type === 'FUNDRAISER_PARTICIPATION') {
    return item.participation.message;
  }
  return null;
};

var Feed = function (_Component) {
  _inherits(Feed, _Component);

  function Feed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feed.__proto__ || Object.getPrototypeOf(Feed)).call.apply(_ref, [this].concat(args))), _this), _this.openTransaction = function (transactionHash) {
      var network = _this.props.network;

      var etherscanUrl = etherscan.getTransactionUrl(network.name, transactionHash);
      if (etherscanUrl) {
        window && window.open(etherscanUrl, '_blank');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feed, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var feed = this.props.feed;

      return _react2.default.createElement(
        _collapse2.default,
        { title: 'live activity feed', collapsed: false },
        _react2.default.createElement(
          'div',
          { className: 'seedom-feed' },
          _react2.default.createElement(
            'div',
            { className: 'list' },
            feed.map(function (item) {
              return _react2.default.createElement(
                'div',
                {
                  className: 'row',
                  key: item.transactionHash + '-' + item.transactionIndex,
                  onClick: function onClick() {
                    _this2.openTransaction(item.transactionHash);
                  }
                },
                _react2.default.createElement(
                  'div',
                  { className: 'icon' },
                  {
                    FUNDRAISER_PARTICIPATION: _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-right' }),
                    FUNDRAISER_RAISE: _react2.default.createElement('i', { className: 'far fa-arrow-alt-circle-up' })
                  }[item.type]
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'contents' },
                  _react2.default.createElement(
                    'div',
                    { className: 'side left' },
                    _react2.default.createElement(
                      'div',
                      { className: 'blocknum' },
                      _react2.default.createElement('i', { className: 'fas fa-cube' }),
                      ' ',
                      item.blockNumber
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'address' },
                      bytes.shorten(getAddress(item))
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'side right' },
                    _react2.default.createElement(
                      'div',
                      { className: 'entries' },
                      numbers.localeNumber(getEntries(item)),
                      ' entries'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'messages' },
                      getMessage(item)
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Feed;
}(_react.Component);

Feed.propTypes = {
  network: _propTypes2.default.shape(),
  feed: _propTypes2.default.arrayOf(_propTypes2.default.shape())
};
Feed.defaultProps = {
  network: null,
  feed: []
};
exports.default = Feed;

/***/ }),

/***/ "./app/components/participate/components/feed/index.scss":
/*!***************************************************************!*\
  !*** ./app/components/participate/components/feed/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/header/index.js":
/*!***************************************************************!*\
  !*** ./app/components/participate/components/header/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dates = __webpack_require__(/*! ../../../../utils/dates */ "./app/utils/dates.js");

var dates = _interopRequireWildcard(_dates);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/header/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          title = _props.title,
          value = _props.value;


      return _react2.default.createElement(
        'div',
        { className: 'item ' + type },
        _react2.default.createElement(
          'div',
          { className: 'item-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-value' },
          value
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  type: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string
};
Item.defaultProps = {
  value: null
};

var Header = function (_Component2) {
  _inherits(Header, _Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          deployment = _props2.deployment,
          network = _props2.network;


      var deployTime = void 0;
      var endTime = void 0;
      if (deployment) {
        deployTime = dates.localeDate(deployment.deployTime);
        endTime = dates.localeDate(deployment.endTime);
      }

      var networkName = void 0;
      if (network) {
        networkName = network.name;
      }

      return _react2.default.createElement(
        'div',
        { className: 'seedom-header' },
        _react2.default.createElement('div', { className: 'background' }),
        _react2.default.createElement(Item, { type: 'side', title: 'start date', value: deployTime }),
        _react2.default.createElement(Item, { type: 'center', title: 'network', value: networkName }),
        _react2.default.createElement(Item, { type: 'side', title: 'end date', value: endTime })
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  deployment: _propTypes2.default.shape(),
  network: _propTypes2.default.shape()
};
Header.defaultProps = {
  deployment: null,
  network: null
};
exports.default = Header;

/***/ }),

/***/ "./app/components/participate/components/header/index.scss":
/*!*****************************************************************!*\
  !*** ./app/components/participate/components/header/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/account/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/account/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/account/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Content) {
  _inherits(Account, _Content);

  function Account() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Account);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Account.__proto__ || Object.getPrototypeOf(Account)).call.apply(_ref, [this].concat(args))), _this), _this.openMetamask = function () {
      window && window.open(METAMASK_URL, '_blank');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Account, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var isShown = this.props.isShown;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content ethereum ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'error' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top medium-pad' },
            _react2.default.createElement('div', { className: 'ethereum-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center narrow' },
            _react2.default.createElement(
              'span',
              null,
              'account not available, please confirm'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom large-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-white is-outlined', to: '/help' },
                  'how to access seedom'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Account;
}(_content2.default);

Account.propTypes = {
  isShown: _propTypes2.default.bool
};
Account.defaultProps = {
  isShown: false
};
exports.default = Account;

/***/ }),

/***/ "./app/components/participate/components/puck/components/account/index.scss":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/account/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/badge/index.js":
/*!******************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/badge/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _badges = __webpack_require__(/*! ../../../../../../utils/badges */ "./app/utils/badges.js");

var badges = _interopRequireWildcard(_badges);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/badge/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSeedomShareUrl = function getSeedomShareUrl(_ref) {
  var network = _ref.network,
      contract = _ref.contract,
      participant = _ref.participant;

  return "http://localhost:8080" + '?n=' + network + '&c=' + contract + '&p=' + participant;
};

var getFacebookShareUrl = function getFacebookShareUrl(_ref2) {
  var network = _ref2.network,
      contract = _ref2.contract,
      participant = _ref2.participant;

  var seedomShareUrl = getSeedomShareUrl({ network: network, contract: contract, participant: participant });
  return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(seedomShareUrl);
};

var getTwitterShareUrl = function getTwitterShareUrl(_ref3) {
  var network = _ref3.network,
      contract = _ref3.contract,
      participant = _ref3.participant;

  var seedomShareUrl = getSeedomShareUrl({ network: network, contract: contract, participant: participant });
  return 'https://twitter.com/share?url=' + encodeURIComponent(seedomShareUrl);
};

var Badge = function (_Content) {
  _inherits(Badge, _Content);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          onBadgingOver = _props.onBadgingOver,
          primaryContractAddresses = _props.primaryContractAddresses,
          account = _props.account,
          participant = _props.participant,
          network = _props.network;


      if (!primaryContractAddresses || !account || !participant || !network) {
        return null;
      }

      // make sure user has participated (prevents early caching)
      if (participant.entries.isEqualTo(0)) {
        return null;
      }

      var params = {
        network: network.name,
        contract: primaryContractAddresses.fundraiser.substr(2),
        participant: account.substr(2)
      };

      // get badge url
      var badgeImageUrl = badges.getImageUrl(params);
      var facebookShareUrl = getFacebookShareUrl(params);
      var twitterShareUrl = getTwitterShareUrl(params);

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content badge ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'success' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top huge-pad narrow' },
            _react2.default.createElement(
              'div',
              { className: 'thank-you' },
              'thank you!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'here is your badge'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division center' },
            _react2.default.createElement('img', { className: 'seedom-badge', src: badgeImageUrl })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom small-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field is-grouped' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-dark', href: badgeImageUrl },
                  _react2.default.createElement('i', { className: 'fas fa-download' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button twitter', href: twitterShareUrl, target: '_blank' },
                  _react2.default.createElement(
                    'span',
                    null,
                    'share'
                  ),
                  _react2.default.createElement('i', { className: 'fab fa-twitter right' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button facebook', href: facebookShareUrl, target: '_blank' },
                  _react2.default.createElement(
                    'span',
                    null,
                    'share'
                  ),
                  _react2.default.createElement('i', { className: 'fab fa-facebook-f right' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-white is-outlined', onClick: onBadgingOver },
                  'continue'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Badge;
}(_content2.default);

Badge.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  onBadgingOver: _propTypes2.default.func.isRequired,
  primaryContractAddresses: _propTypes2.default.shape(),
  account: _propTypes2.default.string,
  participant: _propTypes2.default.shape(),
  network: _propTypes2.default.shape()
};
Badge.defaultProps = {
  primaryContractAddresses: null,
  account: null,
  participant: null,
  network: null
};
exports.default = Badge;

/***/ }),

/***/ "./app/components/participate/components/puck/components/badge/index.scss":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/badge/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/begin/index.js":
/*!******************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/begin/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Begin = function (_Content) {
  _inherits(Begin, _Content);

  function Begin() {
    _classCallCheck(this, Begin);

    return _possibleConstructorReturn(this, (Begin.__proto__ || Object.getPrototypeOf(Begin)).apply(this, arguments));
  }

  _createClass(Begin, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          deployment = _props.deployment;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content seed ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'waiting' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'please wait for'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'to begin their fundraiser'
            )
          )
        )
      );
    }
  }]);

  return Begin;
}(_content2.default);

Begin.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  deployment: _propTypes2.default.shape()
};
Begin.defaultProps = {
  deployment: null
};
exports.default = Begin;

/***/ }),

/***/ "./app/components/participate/components/puck/components/beginningFailed/index.js":
/*!****************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/beginningFailed/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeginningFailed = function (_Content) {
  _inherits(BeginningFailed, _Content);

  function BeginningFailed() {
    _classCallCheck(this, BeginningFailed);

    return _possibleConstructorReturn(this, (BeginningFailed.__proto__ || Object.getPrototypeOf(BeginningFailed)).apply(this, arguments));
  }

  _createClass(BeginningFailed, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          deployment = _props.deployment;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content seed-failed ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'error' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom giant-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'cause failed to begin their fundraiser'
            )
          )
        )
      );
    }
  }]);

  return BeginningFailed;
}(_content2.default);

BeginningFailed.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  deployment: _propTypes2.default.shape()
};
BeginningFailed.defaultProps = {
  deployment: null
};
exports.default = BeginningFailed;

/***/ }),

/***/ "./app/components/participate/components/puck/components/cancel/index.js":
/*!*******************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/cancel/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cancel = function (_Content) {
  _inherits(Cancel, _Content);

  function Cancel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cancel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cancel.__proto__ || Object.getPrototypeOf(Cancel)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function () {
      var onCancel = _this.props.onCancel;

      onCancel();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cancel, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isLoading = _props.isLoading,
          deployment = _props.deployment;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-content cancel ' + className },
        _react2.default.createElement(_indicator2.default, { type: 'cancel' }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top medium-pad' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center narrow' },
            'fundraiser expired, please cancel for the community'
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom huge-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-dark', disabled: isLoading, onClick: this.handleSubmit },
                  'cancel'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Cancel;
}(_content2.default);

Cancel.propTypes = {
  isLoading: _propTypes2.default.bool,
  onCancel: _propTypes2.default.func.isRequired,
  deployment: _propTypes2.default.shape()
};
Cancel.defaultProps = {
  isLoading: false,
  deployment: null
};
exports.default = Cancel;

/***/ }),

/***/ "./app/components/participate/components/puck/components/cancelled/index.js":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/cancelled/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cancelled = function (_Content) {
  _inherits(Cancelled, _Content);

  function Cancelled() {
    _classCallCheck(this, Cancelled);

    return _possibleConstructorReturn(this, (Cancelled.__proto__ || Object.getPrototypeOf(Cancelled)).apply(this, arguments));
  }

  _createClass(Cancelled, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var deployment = this.props.deployment;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content cancelled ' + className },
        _react2.default.createElement(_indicator2.default, { type: 'error' }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top medium-pad' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom medium-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'fundraiser cancelled, please check back later'
            )
          )
        )
      );
    }
  }]);

  return Cancelled;
}(_content2.default);

Cancelled.propTypes = {
  deployment: _propTypes2.default.shape()
};
Cancelled.defaultProps = {
  deployment: null
};
exports.default = Cancelled;

/***/ }),

/***/ "./app/components/participate/components/puck/components/circles/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/circles/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/circles/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_X = 1000;
var MAX_Y = 1000;
var FULL_RADIUS = 500;
var CENTER_X = 500;
var CENTER_Y = 500;
var LOADERS_STROKE_WIDTH = 30;
var PROGRESS_STROKE_WIDTH = 30;
var PHASE_STROKE_WIDTH = 50;
var BACKGROUND_PADDING = 50;
var LOADERS_PERCENTAGE = 20;
var LOADERS_TEXT = 'COMMUNICATING WITH ETHEREUM';

var getProgressPercentage = function getProgressPercentage(deployment, now) {
  var deployTime = deployment.deployTime,
      endTime = deployment.endTime;

  var deploymentTime = endTime - deployTime;
  var progressTime = now - deployTime;
  return progressTime > deploymentTime ? 100 : 100 * (progressTime / deploymentTime);
};

var getProgressText = function getProgressText(starter, deployment, now) {
  var endTime = deployment.endTime;

  var timeUntilEnd = endTime - now;

  if (timeUntilEnd <= 0) {
    return 'FINISHED';
  }

  timeUntilEnd /= 1000;
  // calculate (and subtract) whole days
  var days = Math.floor(timeUntilEnd / 86400);
  timeUntilEnd -= days * 86400;
  // calculate (and subtract) whole hours
  var hours = Math.floor(timeUntilEnd / 3600) % 24;
  timeUntilEnd -= hours * 3600;
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(timeUntilEnd / 60) % 60;
  timeUntilEnd -= minutes * 60;
  // what's left is seconds
  var seconds = Math.floor(timeUntilEnd % 60);

  return starter.toUpperCase() + ' IN - ' + days + 'D ' + hours + 'H ' + minutes + 'M ' + seconds + 'S';
};

var getProgressRadius = function getProgressRadius() {
  return FULL_RADIUS - PROGRESS_STROKE_WIDTH / 2 - BACKGROUND_PADDING;
};

var getLoadersRadius = function getLoadersRadius() {
  return FULL_RADIUS - LOADERS_STROKE_WIDTH / 2;
};

var getPathFlipped = function getPathFlipped(percentage) {
  return percentage > 30 && percentage < 70;
};

var getPathStyle = function getPathStyle(radius, percentage) {
  var diameter = Math.PI * 2 * radius;
  var dashoffset = (100 - percentage) / 100 * diameter;

  return {
    strokeDasharray: diameter + 'px ' + diameter + 'px',
    strokeDashoffset: dashoffset + 'px'
  };
};

var getTextOffset = function getTextOffset(flipped, percentage) {
  return flipped ? 101 - percentage : percentage - 1;
};

var getPathDescription = function getPathDescription(radius, flipped) {
  // Move to center of canvas
  // Relative move to top canvas
  // Relative arc to bottom of canvas
  // Relative arc to top of canvas
  return '\n      M ' + CENTER_X + ',' + CENTER_Y + '\n      m 0,-' + radius + '\n      a ' + radius + ',' + radius + ' 0 1 ' + (flipped ? 0 : 1) + ' 0,' + 2 * radius + '\n      a ' + radius + ',' + radius + ' 0 1 ' + (flipped ? 0 : 1) + ' 0,-' + 2 * radius + '\n  ';
};

var getProgressTextShown = function getProgressTextShown(percentage) {
  return percentage >= 15;
};

var Circles = function (_React$Component) {
  _inherits(Circles, _React$Component);

  function Circles(props) {
    _classCallCheck(this, Circles);

    var _this = _possibleConstructorReturn(this, (Circles.__proto__ || Object.getPrototypeOf(Circles)).call(this, props));

    _this.state = {
      now: new Date()
    };
    return _this;
  }

  _createClass(Circles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.setState({
          now: new Date()
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          starter = _props.starter,
          deployment = _props.deployment,
          isLoading = _props.isLoading;
      var now = this.state.now;


      var progressPercentage = void 0;
      var progressText = void 0;
      if (deployment) {
        progressPercentage = getProgressPercentage(deployment, now);
        progressText = getProgressText(starter, deployment, now);
      }

      var progressRadius = getProgressRadius();
      var loadersRadius = getLoadersRadius();

      var progressPathStyle = getPathStyle(progressRadius, progressPercentage);
      var participationPathStyle = getPathStyle(progressRadius, 100);
      var loadersPathStyle = getPathStyle(loadersRadius, LOADERS_PERCENTAGE);

      var progressPathFlipped = getPathFlipped(progressPercentage);

      var progressPathDescription = getPathDescription(progressRadius);
      var flippedProgressPathDescription = getPathDescription(progressRadius, true);
      var loadersPathDescription = getPathDescription(loadersRadius);

      var progressTextShown = getProgressTextShown(progressPercentage);

      var progressTextOffset = getTextOffset(progressPathFlipped, progressPercentage);

      return _react2.default.createElement(
        'svg',
        {
          className: 'seedom-circles',
          viewBox: '0 0 ' + MAX_X + ' ' + MAX_Y
        },
        _react2.default.createElement('circle', {
          className: 'background',
          cx: CENTER_X,
          cy: CENTER_Y,
          r: FULL_RADIUS,
          opacity: 0.9
        }),
        _react2.default.createElement(
          'g',
          { className: 'loaders-container ' + (isLoading ? 'show' : 'hide') },
          _react2.default.createElement('circle', {
            className: 'loaders-arc',
            cx: CENTER_X,
            cy: CENTER_Y,
            r: loadersRadius,
            strokeWidth: LOADERS_STROKE_WIDTH,
            fillOpacity: 0,
            style: loadersPathStyle
          }),
          _react2.default.createElement('circle', {
            className: 'loaders-arc bottom',
            cx: CENTER_X,
            cy: CENTER_Y,
            r: loadersRadius,
            strokeWidth: LOADERS_STROKE_WIDTH,
            fillOpacity: 0,
            style: loadersPathStyle
          }),
          _react2.default.createElement('path', {
            id: 'seedom-circles-loaders-path',
            className: 'loaders-path',
            d: loadersPathDescription,
            strokeWidth: 0,
            fillOpacity: 0
          }),
          _react2.default.createElement(
            'text',
            null,
            _react2.default.createElement(
              'textPath',
              { className: 'loaders-text', xlinkHref: '#seedom-circles-loaders-path', startOffset: LOADERS_PERCENTAGE / 2 + '%' },
              LOADERS_TEXT
            )
          ),
          _react2.default.createElement(
            'text',
            null,
            _react2.default.createElement(
              'textPath',
              { className: 'loaders-text', xlinkHref: '#seedom-circles-loaders-path', startOffset: LOADERS_PERCENTAGE / 2 + 50 + '%' },
              LOADERS_TEXT
            )
          )
        ),
        _react2.default.createElement(
          'g',
          { className: 'phase-container' },
          _react2.default.createElement('path', {
            id: 'seedom-circles-progress-path',
            className: 'phase-path',
            d: progressPathDescription,
            strokeWidth: 0,
            fillOpacity: 0
          }),
          _react2.default.createElement('path', {
            id: 'seedom-circles-progress-path-flipped',
            className: 'phase-path',
            d: flippedProgressPathDescription,
            strokeWidth: 0,
            fillOpacity: 0
          }),
          _react2.default.createElement(
            'g',
            { className: 'phase participation' },
            _react2.default.createElement('circle', {
              cx: CENTER_X,
              cy: CENTER_Y,
              r: progressRadius,
              strokeWidth: PHASE_STROKE_WIDTH,
              fillOpacity: 0,
              style: participationPathStyle
            })
          ),
          _react2.default.createElement(
            'g',
            { className: 'phase progress' },
            _react2.default.createElement('circle', {
              cx: CENTER_X,
              cy: CENTER_Y,
              r: progressRadius,
              strokeWidth: PROGRESS_STROKE_WIDTH,
              fillOpacity: 0,
              style: progressPathStyle
            }),
            progressTextShown && _react2.default.createElement(
              'text',
              null,
              _react2.default.createElement(
                'textPath',
                { className: 'phase-text ' + (progressPathFlipped ? "flipped" : null), xlinkHref: '' + (progressPathFlipped ? "#seedom-circles-progress-path-flipped" : "#seedom-circles-progress-path"), startOffset: progressTextOffset + '%' },
                progressText
              )
            )
          )
        )
      );
    }
  }]);

  return Circles;
}(_react2.default.Component);

Circles.propTypes = {
  starter: _propTypes2.default.string,
  deployment: _propTypes2.default.shape(),
  isLoading: _propTypes2.default.bool
};
Circles.defaultProps = {
  starter: 'ends',
  deployment: null,
  isLoading: false
};
exports.default = Circles;

/***/ }),

/***/ "./app/components/participate/components/puck/components/circles/index.scss":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/circles/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/content/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/content/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/content/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this.state = {
      className: null
    };
    return _this;
  }

  _createClass(Content, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isShown) {
        this.show();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.isShown === newProps.isShown) {
        return;
      }

      if (!newProps.isShown) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          className: 'show'
        });
      }, 0);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          className: null
        });
      }, 0);
    }
  }]);

  return Content;
}(_react.Component);

Content.propTypes = {
  isShown: _propTypes2.default.bool.isRequired
};
exports.default = Content;

/***/ }),

/***/ "./app/components/participate/components/puck/components/content/index.scss":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/content/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/end/index.js":
/*!****************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/end/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var End = function (_Content) {
  _inherits(End, _Content);

  function End() {
    _classCallCheck(this, End);

    return _possibleConstructorReturn(this, (End.__proto__ || Object.getPrototypeOf(End)).apply(this, arguments));
  }

  _createClass(End, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var isShown = this.props.isShown;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-content end ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'waiting' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'please wait for'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center' },
            _react2.default.createElement('div', { className: 'seedom-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'to end the fundraiser'
            )
          )
        )
      );
    }
  }]);

  return End;
}(_content2.default);

End.propTypes = {
  isShown: _propTypes2.default.bool.isRequired
};
exports.default = End;

/***/ }),

/***/ "./app/components/participate/components/puck/components/entries/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/entries/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = __webpack_require__(/*! ../../../../../field */ "./app/components/field/index.js");

var _field2 = _interopRequireDefault(_field);

var _numbers = __webpack_require__(/*! ../../../../../../utils/numbers */ "./app/utils/numbers.js");

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entries = function (_Component) {
  _inherits(Entries, _Component);

  function Entries(props) {
    _classCallCheck(this, Entries);

    var _this = _possibleConstructorReturn(this, (Entries.__proto__ || Object.getPrototypeOf(Entries)).call(this, props));

    _this.focus = function () {
      _this.field.focus();
    };

    _this.validate = function () {
      var value = _this.state.value;

      var isValid = value.isGreaterThanOrEqualTo(1) && value.decimalPlaces() === 0;
      _this.setState({ isValid: isValid });
      return isValid;
    };

    _this.value = function () {
      return _this.state.value;
    };

    _this.handleChange = function (value) {
      var parsedValue = void 0;

      try {
        parsedValue = new _bignumber.BigNumber(value);
      } catch (error) {
        parsedValue = (0, _numbers.zero)();
      }

      _this.setState({ value: parsedValue });
    };

    _this.state = {
      value: (0, _numbers.zero)(),
      isValid: true
    };
    return _this;
  }

  _createClass(Entries, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          deployment = _props.deployment,
          disabled = _props.disabled;
      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid;


      var etherForEntries = void 0;
      if (deployment) {
        var weiForEntries = value.times(deployment.valuePerEntry);
        etherForEntries = (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(weiForEntries));
      }

      return _react2.default.createElement(
        _field2.default,
        {
          format: 'addonbox',
          type: 'number',
          min: new _bignumber.BigNumber(1),
          placeholder: 'entries',
          value: value.toString(),
          disabled: disabled,
          isValid: isValid,
          onChange: this.handleChange,
          ref: function ref(component) {
            _this2.field = component;
          }
        },
        _react2.default.createElement(
          'span',
          null,
          '' + etherForEntries,
          _react2.default.createElement(
            'span',
            { className: 'ether is-dark' },
            _react2.default.createElement('i', { className: 'fas fa-bars' })
          )
        )
      );
    }
  }]);

  return Entries;
}(_react.Component);

Entries.propTypes = {
  deployment: _propTypes2.default.shape(),
  disabled: _propTypes2.default.bool
};
Entries.defaultProps = {
  deployment: null,
  disabled: false
};
exports.default = Entries;

/***/ }),

/***/ "./app/components/participate/components/puck/components/ethereum/index.js":
/*!*********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/ethereum/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/ethereum/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ethereum = function (_Content) {
  _inherits(Ethereum, _Content);

  function Ethereum() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ethereum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ethereum.__proto__ || Object.getPrototypeOf(Ethereum)).call.apply(_ref, [this].concat(args))), _this), _this.openMetamask = function () {
      window && window.open(METAMASK_URL, '_blank');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ethereum, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var isShown = this.props.isShown;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content ethereum ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'error' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top medium-pad' },
            _react2.default.createElement('div', { className: 'ethereum-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center narrow' },
            _react2.default.createElement(
              'span',
              null,
              'plugin or browser not detected'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom large-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-white is-outlined', to: '/help' },
                  'how to access seedom'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Ethereum;
}(_content2.default);

Ethereum.propTypes = {
  isShown: _propTypes2.default.bool.isRequired
};
exports.default = Ethereum;

/***/ }),

/***/ "./app/components/participate/components/puck/components/ethereum/index.scss":
/*!***********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/ethereum/index.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/indicator/index.js":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/indicator/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/indicator/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indicator = function (_Component) {
  _inherits(Indicator, _Component);

  function Indicator() {
    _classCallCheck(this, Indicator);

    return _possibleConstructorReturn(this, (Indicator.__proto__ || Object.getPrototypeOf(Indicator)).apply(this, arguments));
  }

  _createClass(Indicator, [{
    key: 'render',
    value: function render() {
      var type = this.props.type;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-overlay' },
        _react2.default.createElement(
          'svg',
          { className: 'indicator ' + (type ? 'show' : null), xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 52 52' },
          _react2.default.createElement('circle', { className: 'circle ' + type, cx: '26', cy: '26', r: '25' })
        )
      );
    }
  }]);

  return Indicator;
}(_react.Component);

Indicator.propTypes = {
  type: _propTypes2.default.string
};
Indicator.defaultProps = {
  type: null
};
exports.default = Indicator;

/***/ }),

/***/ "./app/components/participate/components/puck/components/indicator/index.scss":
/*!************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/indicator/index.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/message/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/message/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = __webpack_require__(/*! ../../../../../field */ "./app/components/field/index.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_LENGTH = 32;

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

    _this.focus = function () {
      _this.message.focus();
    };

    _this.validate = function () {
      var value = _this.state.value;

      var isValid = value.length > 0 && value.length <= MAX_LENGTH;
      _this.setState({ isValid: isValid });
      return isValid;
    };

    _this.value = function () {
      return _this.state.value;
    };

    _this.handleChange = function (value) {
      _this.setState({ value: value });
    };

    _this.state = {
      value: '',
      isValid: true
    };
    return _this;
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var disabled = this.props.disabled;
      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid;


      return _react2.default.createElement(_field2.default, {
        format: 'textblock',
        type: 'text',
        placeholder: 'your message\nto the world',
        value: value,
        maxLength: MAX_LENGTH,
        disabled: disabled,
        isValid: isValid,
        onChange: this.handleChange,
        ref: function ref(component) {
          _this2.message = component;
        }
      });
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  disabled: _propTypes2.default.bool.isRequired
};
exports.default = Message;

/***/ }),

/***/ "./app/components/participate/components/puck/components/network/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/network/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/network/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Network = function (_Content) {
  _inherits(Network, _Content);

  function Network() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Network);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Network.__proto__ || Object.getPrototypeOf(Network)).call.apply(_ref, [this].concat(args))), _this), _this.openMetamask = function () {
      window && window.open(METAMASK_URL, '_blank');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Network, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var isShown = this.props.isShown;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content ethereum ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'error' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top medium-pad' },
            _react2.default.createElement('div', { className: 'ethereum-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center narrow' },
            _react2.default.createElement(
              'span',
              null,
              'current network not supported, please change'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom large-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-white is-outlined', to: '/help' },
                  'how to access seedom'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Network;
}(_content2.default);

Network.propTypes = {
  isShown: _propTypes2.default.bool.isRequired
};
exports.default = Network;

/***/ }),

/***/ "./app/components/participate/components/puck/components/network/index.scss":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/network/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/participate/index.js":
/*!************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/participate/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _entries = __webpack_require__(/*! ../entries */ "./app/components/participate/components/puck/components/entries/index.js");

var _entries2 = _interopRequireDefault(_entries);

var _message = __webpack_require__(/*! ../message */ "./app/components/participate/components/puck/components/message/index.js");

var _message2 = _interopRequireDefault(_message);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/participate/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Participate = function (_Content) {
  _inherits(Participate, _Content);

  function Participate(props) {
    _classCallCheck(this, Participate);

    var _this = _possibleConstructorReturn(this, (Participate.__proto__ || Object.getPrototypeOf(Participate)).call(this, props));

    _this.validateForm = function (done) {
      var isEntriesValid = _this.entries.validate();
      var isMessageValid = _this.message.validate();
      _this.setState({
        isFormValid: isEntriesValid && isMessageValid
      }, done);
    };

    _this.handleSubmit = function () {
      _this.validateForm(function () {
        if (_this.state.isFormValid) {
          var entries = _this.entries.value();
          var message = _this.message.value();
          _this.props.onParticipate({ message: message, entries: entries });
        } else {
          _reactReduxToastr.toastr.warning('PARTICIPATE', 'form invalid');
        }
      });
    };

    _this.state = {
      isFormValid: true
    };
    return _this;
  }

  _createClass(Participate, [{
    key: 'show',
    value: function show() {
      _get(Participate.prototype.__proto__ || Object.getPrototypeOf(Participate.prototype), 'show', this).call(this);
      this.entries.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          deployment = _props.deployment,
          isLoading = _props.isLoading;
      var className = this.state.className;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content participate ' + className },
        _react2.default.createElement(_indicator2.default, { type: isLoading ? 'waiting' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay' },
          _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' }),
          _react2.default.createElement(_entries2.default, {
            deployment: deployment,
            disabled: isLoading,
            ref: function ref(component) {
              _this2.entries = component;
            }
          }),
          _react2.default.createElement(_message2.default, {
            disabled: isLoading,
            ref: function ref(component) {
              _this2.message = component;
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-dark', disabled: isLoading, onClick: this.handleSubmit },
                'PARTICIPATE'
              )
            )
          )
        )
      );
    }
  }]);

  return Participate;
}(_content2.default);

Participate.propTypes = {
  isLoading: _propTypes2.default.bool,
  deployment: _propTypes2.default.shape()
};
Participate.defaultProps = {
  deployment: null,
  isLoading: false
};
exports.default = Participate;

/***/ }),

/***/ "./app/components/participate/components/puck/components/participate/index.scss":
/*!**************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/participate/index.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/participation/index.js":
/*!**************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/participation/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _numbers = __webpack_require__(/*! ../../../../../../utils/numbers */ "./app/utils/numbers.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/participation/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Participation = function (_Content) {
  _inherits(Participation, _Content);

  function Participation() {
    _classCallCheck(this, Participation);

    return _possibleConstructorReturn(this, (Participation.__proto__ || Object.getPrototypeOf(Participation)).apply(this, arguments));
  }

  _createClass(Participation, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          participant = _props.participant,
          onRaising = _props.onRaising,
          onBadging = _props.onBadging,
          deployment = _props.deployment;

      var entries = participant ? participant.entries : (0, _numbers.zero)();
      var localeEntries = (0, _numbers.localeNumber)(entries);

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content participated ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'success' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay' },
          _react2.default.createElement(
            'div',
            { className: 'text entries' },
            localeEntries
          ),
          _react2.default.createElement(
            'div',
            { className: 'text obtained' },
            Number(localeEntries) === 1 ? 'entry' : 'entries',
            ' obtained'
          ),
          _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' }),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-dark', onClick: onRaising },
                'get more entries'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'button is-white is-outlined', to: '/vote' },
                'vote on next cause'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-white is-outlined', onClick: onBadging },
                'view badge'
              )
            )
          )
        )
      );
    }
  }]);

  return Participation;
}(_content2.default);

Participation.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  participant: _propTypes2.default.shape(),
  onRaising: _propTypes2.default.func.isRequired,
  onBadging: _propTypes2.default.func.isRequired,
  deployment: _propTypes2.default.shape()
};
Participation.defaultProps = {
  participant: null,
  deployment: null
};
exports.default = Participation;

/***/ }),

/***/ "./app/components/participate/components/puck/components/participation/index.scss":
/*!****************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/participation/index.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/participationFailed/index.js":
/*!********************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/participationFailed/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParticipationFailed = function (_Content) {
  _inherits(ParticipationFailed, _Content);

  function ParticipationFailed() {
    _classCallCheck(this, ParticipationFailed);

    return _possibleConstructorReturn(this, (ParticipationFailed.__proto__ || Object.getPrototypeOf(ParticipationFailed)).apply(this, arguments));
  }

  _createClass(ParticipationFailed, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          deployment = _props.deployment;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content seed-failed ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'error' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division top' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom giant-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'participation closed, stay tuned for selection'
            )
          )
        )
      );
    }
  }]);

  return ParticipationFailed;
}(_content2.default);

ParticipationFailed.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  deployment: _propTypes2.default.shape()
};
ParticipationFailed.defaultProps = {
  deployment: null
};
exports.default = ParticipationFailed;

/***/ }),

/***/ "./app/components/participate/components/puck/components/raise/index.js":
/*!******************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/raise/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

var _numbers = __webpack_require__(/*! ../../../../../../utils/numbers */ "./app/utils/numbers.js");

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _entries = __webpack_require__(/*! ../entries */ "./app/components/participate/components/puck/components/entries/index.js");

var _entries2 = _interopRequireDefault(_entries);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/raise/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Raise = function (_Content) {
  _inherits(Raise, _Content);

  function Raise(props) {
    _classCallCheck(this, Raise);

    var _this = _possibleConstructorReturn(this, (Raise.__proto__ || Object.getPrototypeOf(Raise)).call(this, props));

    _this.validateForm = function (done) {
      var isFormValid = _this.entries.validate();
      _this.setState({ isFormValid: isFormValid }, done);
    };

    _this.handleSubmit = function () {
      _this.validateForm(function () {
        if (_this.state.isFormValid) {
          var entries = _this.entries.value();
          _this.props.onRaise(entries);
        } else {
          _reactReduxToastr.toastr.warning('RAISE', 'form invalid');
        }
      });
    };

    _this.state = {
      isFormValid: true
    };
    return _this;
  }

  _createClass(Raise, [{
    key: 'show',
    value: function show() {
      _get(Raise.prototype.__proto__ || Object.getPrototypeOf(Raise.prototype), 'show', this).call(this);
      this.entries.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.state.className;
      var _props = this.props,
          deployment = _props.deployment,
          isLoading = _props.isLoading,
          onRaisingCancelled = _props.onRaisingCancelled;


      var etherPerEntry = void 0;
      if (deployment) {
        etherPerEntry = (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(deployment.valuePerEntry));
      }

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content raise ' + className },
        _react2.default.createElement(_indicator2.default, { type: isLoading ? 'waiting' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay' },
          _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' }),
          _react2.default.createElement(
            'div',
            { className: 'text' },
            '1 entry = ',
            etherPerEntry,
            _react2.default.createElement(
              'span',
              { className: 'ether' },
              _react2.default.createElement('i', { className: 'fas fa-bars' })
            )
          ),
          _react2.default.createElement(_entries2.default, {
            deployment: deployment,
            disabled: isLoading,
            ref: function ref(component) {
              _this2.entries = component;
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-dark', disabled: isLoading, onClick: this.handleSubmit },
                'get more entries'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                { className: 'button is-white is-outlined', onClick: onRaisingCancelled },
                'cancel'
              )
            )
          )
        )
      );
    }
  }]);

  return Raise;
}(_content2.default);

Raise.propTypes = {
  deployment: _propTypes2.default.shape(),
  isLoading: _propTypes2.default.bool,
  onRaisingCancelled: _propTypes2.default.func.isRequired
};
Raise.defaultProps = {
  deployment: null,
  isLoading: false
};
exports.default = Raise;

/***/ }),

/***/ "./app/components/participate/components/puck/components/raise/index.scss":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/raise/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/reveal/index.js":
/*!*******************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/reveal/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reveal = function (_Content) {
  _inherits(Reveal, _Content);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          deployment = _props.deployment;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content end ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'waiting' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'please wait for'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom small-pad narrow' },
            _react2.default.createElement(
              'span',
              null,
              'to reveal their message'
            )
          )
        )
      );
    }
  }]);

  return Reveal;
}(_content2.default);

Reveal.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  deployment: _propTypes2.default.shape()
};
Reveal.defaultProps = {
  deployment: null
};
exports.default = Reveal;

/***/ }),

/***/ "./app/components/participate/components/puck/components/selection/index.js":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/selection/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _etherscan = __webpack_require__(/*! ../../../../../../utils/etherscan */ "./app/utils/etherscan.js");

var etherscan = _interopRequireWildcard(_etherscan);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/selection/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selection = function (_Content) {
  _inherits(Selection, _Content);

  function Selection() {
    _classCallCheck(this, Selection);

    return _possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).apply(this, arguments));
  }

  _createClass(Selection, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          state = _props.state,
          network = _props.network,
          deployment = _props.deployment;


      var causeMessage = void 0;
      var ownerMessage = void 0;
      var participantMessage = void 0;
      if (state) {
        causeMessage = state.causeMessage;
        ownerMessage = state.ownerMessage;
        participantMessage = state.participantMessage;
      }

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content selection ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'selection' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top small-pad' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment, size: 'small' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text center narrow' },
            _react2.default.createElement(
              'div',
              { className: 'left' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                'cause message'
              ),
              _react2.default.createElement(
                'div',
                { className: 'value' },
                causeMessage
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'right' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                'owner message'
              ),
              _react2.default.createElement(
                'div',
                { className: 'value' },
                ownerMessage
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division text bottom large-pad slim' },
            _react2.default.createElement(
              'div',
              { className: 'header' },
              'participant message'
            ),
            _react2.default.createElement(
              'div',
              { className: 'value' },
              participantMessage
            )
          )
        )
      );
    }
  }]);

  return Selection;
}(_content2.default);

Selection.propTypes = {
  isShown: _propTypes2.default.bool.isRequired,
  state: _propTypes2.default.shape(),
  network: _propTypes2.default.shape(),
  deployment: _propTypes2.default.shape()
};
Selection.defaultProps = {
  state: null,
  network: null,
  deployment: null
};
exports.default = Selection;

/***/ }),

/***/ "./app/components/participate/components/puck/components/selection/index.scss":
/*!************************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/selection/index.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/welcome/index.js":
/*!********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/welcome/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _numbers = __webpack_require__(/*! ../../../../../../utils/numbers */ "./app/utils/numbers.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _causeLogo = __webpack_require__(/*! ../../../../../causeLogo */ "./app/components/causeLogo/index.js");

var _causeLogo2 = _interopRequireDefault(_causeLogo);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/welcome/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Welcome = function (_Content) {
  _inherits(Welcome, _Content);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {
      var className = this.state.className;
      var _props = this.props,
          deployment = _props.deployment,
          onCountMeIn = _props.onCountMeIn;


      var etherPerEntry = void 0;
      if (deployment) {
        etherPerEntry = (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(deployment.valuePerEntry));
      }

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content welcome ' + className },
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                '1 entry = ',
                etherPerEntry
              ),
              _react2.default.createElement(
                'span',
                { className: 'ether' },
                _react2.default.createElement('i', { className: 'fas fa-bars' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'supporting' },
              'now seeding'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division center' },
            _react2.default.createElement(_causeLogo2.default, { deployment: deployment })
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-white is-outlined', to: '/help' },
                  'how does this work?'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-dark', onClick: onCountMeIn },
                  'count me in!'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Welcome;
}(_content2.default);

Welcome.propTypes = {
  deployment: _propTypes2.default.shape(),
  onCountMeIn: _propTypes2.default.func.isRequired
};
Welcome.defaultProps = {
  deployment: null
};
exports.default = Welcome;

/***/ }),

/***/ "./app/components/participate/components/puck/components/welcome/index.scss":
/*!**********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/welcome/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/components/withdraw/index.js":
/*!*********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/withdraw/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(/*! ../content */ "./app/components/participate/components/puck/components/content/index.js");

var _content2 = _interopRequireDefault(_content);

var _indicator = __webpack_require__(/*! ../indicator */ "./app/components/participate/components/puck/components/indicator/index.js");

var _indicator2 = _interopRequireDefault(_indicator);

var _numbers = __webpack_require__(/*! ../../../../../../utils/numbers */ "./app/utils/numbers.js");

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/components/withdraw/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getMaxBalance = function getMaxBalance(balances) {
  var maxBalance = (0, _numbers.zero)();
  var maxContractAddress = null;
  for (var contractAddress in balances) {
    var balance = balances[contractAddress];
    if (balance.isGreaterThan(maxBalance)) {
      maxBalance = balance;
      maxContractAddress = contractAddress;
    }
  }

  return {
    contractAddress: maxContractAddress,
    balance: maxBalance
  };
};

var Withdraw = function (_Content) {
  _inherits(Withdraw, _Content);

  function Withdraw() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Withdraw);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Withdraw.__proto__ || Object.getPrototypeOf(Withdraw)).call.apply(_ref, [this].concat(args))), _this), _this.handleWithdraw = function (contractAddress) {
      var onWithdraw = _this.props.onWithdraw;

      onWithdraw(contractAddress);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Withdraw, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var balances = this.props.balances;

      if (!balances) {
        return null;
      }

      var className = this.state.className;
      var _props = this.props,
          isShown = _props.isShown,
          onWithdrawSkipped = _props.onWithdrawSkipped,
          isLoading = _props.isLoading;

      var maxBalance = getMaxBalance(balances);

      return _react2.default.createElement(
        'div',
        { className: 'seedom-content withdraw ' + className },
        _react2.default.createElement(_indicator2.default, { type: isShown ? 'success' : null }),
        _react2.default.createElement(
          'div',
          { className: 'seedom-overlay layout' },
          _react2.default.createElement(
            'div',
            { className: 'division text top medium-pad' },
            _react2.default.createElement(
              'div',
              null,
              'you have'
            ),
            _react2.default.createElement(
              'div',
              { className: 'balance' },
              (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(maxBalance.balance)),
              _react2.default.createElement(
                'span',
                { className: 'ether is-dark' },
                _react2.default.createElement('i', { className: 'fas fa-bars' })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'to withdraw!'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'division bottom large-pad' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-dark', disabled: isLoading, onClick: function onClick() {
                      return _this2.handleWithdraw(maxBalance.contractAddress);
                    } },
                  'withdraw ether'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-white is-outlined', disabled: isLoading, onClick: onWithdrawSkipped },
                  'skip for now'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Withdraw;
}(_content2.default);

Withdraw.propTypes = {
  balances: _propTypes2.default.shape(),
  isShown: _propTypes2.default.bool.isRequired,
  isLoading: _propTypes2.default.bool,
  onWithdrawSkipped: _propTypes2.default.func.isRequired,
  onWithdraw: _propTypes2.default.func.isRequired
};
Withdraw.defaultProps = {
  balances: null,
  isLoading: false
};
exports.default = Withdraw;

/***/ }),

/***/ "./app/components/participate/components/puck/components/withdraw/index.scss":
/*!***********************************************************************************!*\
  !*** ./app/components/participate/components/puck/components/withdraw/index.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/puck/index.js":
/*!*************************************************************!*\
  !*** ./app/components/participate/components/puck/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bytes = __webpack_require__(/*! ../../../../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _circles = __webpack_require__(/*! ./components/circles */ "./app/components/participate/components/puck/components/circles/index.js");

var _circles2 = _interopRequireDefault(_circles);

var _begin = __webpack_require__(/*! ./components/begin */ "./app/components/participate/components/puck/components/begin/index.js");

var _begin2 = _interopRequireDefault(_begin);

var _beginningFailed = __webpack_require__(/*! ./components/beginningFailed */ "./app/components/participate/components/puck/components/beginningFailed/index.js");

var _beginningFailed2 = _interopRequireDefault(_beginningFailed);

var _welcome = __webpack_require__(/*! ./components/welcome */ "./app/components/participate/components/puck/components/welcome/index.js");

var _welcome2 = _interopRequireDefault(_welcome);

var _participate = __webpack_require__(/*! ./components/participate */ "./app/components/participate/components/puck/components/participate/index.js");

var _participate2 = _interopRequireDefault(_participate);

var _participation = __webpack_require__(/*! ./components/participation */ "./app/components/participate/components/puck/components/participation/index.js");

var _participation2 = _interopRequireDefault(_participation);

var _raise = __webpack_require__(/*! ./components/raise */ "./app/components/participate/components/puck/components/raise/index.js");

var _raise2 = _interopRequireDefault(_raise);

var _reveal = __webpack_require__(/*! ./components/reveal */ "./app/components/participate/components/puck/components/reveal/index.js");

var _reveal2 = _interopRequireDefault(_reveal);

var _end = __webpack_require__(/*! ./components/end */ "./app/components/participate/components/puck/components/end/index.js");

var _end2 = _interopRequireDefault(_end);

var _selection = __webpack_require__(/*! ./components/selection */ "./app/components/participate/components/puck/components/selection/index.js");

var _selection2 = _interopRequireDefault(_selection);

var _withdraw = __webpack_require__(/*! ./components/withdraw */ "./app/components/participate/components/puck/components/withdraw/index.js");

var _withdraw2 = _interopRequireDefault(_withdraw);

var _cancel = __webpack_require__(/*! ./components/cancel */ "./app/components/participate/components/puck/components/cancel/index.js");

var _cancel2 = _interopRequireDefault(_cancel);

var _cancelled = __webpack_require__(/*! ./components/cancelled */ "./app/components/participate/components/puck/components/cancelled/index.js");

var _cancelled2 = _interopRequireDefault(_cancelled);

var _ethereum = __webpack_require__(/*! ./components/ethereum */ "./app/components/participate/components/puck/components/ethereum/index.js");

var _ethereum2 = _interopRequireDefault(_ethereum);

var _network = __webpack_require__(/*! ./components/network */ "./app/components/participate/components/puck/components/network/index.js");

var _network2 = _interopRequireDefault(_network);

var _account = __webpack_require__(/*! ./components/account */ "./app/components/participate/components/puck/components/account/index.js");

var _account2 = _interopRequireDefault(_account);

var _participationFailed = __webpack_require__(/*! ./components/participationFailed */ "./app/components/participate/components/puck/components/participationFailed/index.js");

var _participationFailed2 = _interopRequireDefault(_participationFailed);

var _badge = __webpack_require__(/*! ./components/badge */ "./app/components/participate/components/puck/components/badge/index.js");

var _badge2 = _interopRequireDefault(_badge);

var _seedomOWhiteTransparent = __webpack_require__(/*! ../../../../../../seedom-assets/logo/o/seedom-o-white-transparent.svg */ "../seedom-assets/logo/o/seedom-o-white-transparent.svg");

var _seedomOWhiteTransparent2 = _interopRequireDefault(_seedomOWhiteTransparent);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/puck/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PHASE_REFRESH = 1000;

var getPhase = function getPhase(deployment) {
  if (!deployment) {
    return null;
  }

  var now = Date.now();
  // participation phase
  if (now < deployment.endTime) {
    return 'participation';
  }

  // end phase
  if (now >= deployment.endTime && now < deployment.expireTime) {
    return 'end';
  }

  // expiration phase
  if (now >= deployment.expireTime && now < deployment.destructTime) {
    return 'expiration';
  }

  // destruction phase
  return 'destruction';
};

var getComponent = function getComponent(_ref) {
  var network = _ref.network,
      account = _ref.account,
      phase = _ref.phase,
      state = _ref.state,
      participant = _ref.participant,
      balances = _ref.balances,
      isLoading = _ref.isLoading,
      isParticipating = _ref.isParticipating,
      isBadging = _ref.isBadging,
      isRaising = _ref.isRaising,
      isWithdrawing = _ref.isWithdrawing;

  // ethereum check
  if (!network) {
    return 'ethereum';
  }

  // network check
  if (!network.supported || !network.deployed) {
    return 'network';
  }

  // account check
  if (!account) {
    return 'account';
  }

  // balances?
  if (balances && Object.keys(balances).length > 0 && isWithdrawing) {
    return 'withdraw';
  }

  // wait for state
  if (!state) {
    return null;
  }

  // selection?
  if (!bytes.isZero20(state.participant)) {
    return 'selection';
  }

  // cancelled?
  if (state.cancelled) {
    return 'cancelled';
  }

  // wait for a participant
  if (!participant) {
    return null;
  }

  // switch on phase
  switch (phase) {
    case 'participation':
      if (bytes.isZero32(state.causeSecret)) {
        return 'begin';
      }

      if (participant.message === '') {
        if (!isParticipating) {
          return 'welcome';
        }
        return 'participate';
      }

      if (isBadging) {
        return 'badge';
      }

      if (!isRaising && !isLoading) {
        return 'participation';
      }

      return 'raise';

    case 'end':
      if (bytes.isZero32(state.causeSecret)) {
        return 'beginningFailed';
      }

      if (participant.message === '') {
        return 'participationFailed';
      }

      if (state.causeMessage === '') {
        return 'reveal';
      }

      return 'end';

    case 'expiration':
      return 'cancel';

    default:
      return null;
  }
};

var Puck = function (_Component) {
  _inherits(Puck, _Component);

  function Puck(props) {
    _classCallCheck(this, Puck);

    var _this = _possibleConstructorReturn(this, (Puck.__proto__ || Object.getPrototypeOf(Puck)).call(this, props));

    _this.handleCountMeIn = function () {
      _this.setState({ isParticipating: true });
    };

    _this.handleParticipate = function (_ref2) {
      var message = _ref2.message,
          entries = _ref2.entries;

      _this.setState({ isBadging: true }, function () {
        _this.props.onParticipate({ message: message, entries: entries });
      });
    };

    _this.handleBadging = function () {
      _this.setState({ isBadging: true });
    };

    _this.handleBadgingOver = function () {
      _this.setState({ isBadging: false });
    };

    _this.handleRaising = function () {
      _this.setState({ isRaising: true });
    };

    _this.handleRaisingCancelled = function () {
      _this.setState({ isRaising: false });
    };

    _this.handleRaise = function (entries) {
      _this.setState({ isRaising: false }, function () {
        _this.props.onRaise(entries);
      });
    };

    _this.handleWithdraw = function (contractAddress) {
      _this.props.onWithdraw(contractAddress);
    };

    _this.handleWithdrawSkipped = function () {
      _this.setState({ isWithdrawing: false });
    };

    _this.handleCancel = function () {
      _this.props.onCancel();
    };

    _this.state = {
      phase: null,
      isParticipating: false,
      isBadging: false,
      isRaising: false,
      isWithdrawing: true
    };
    return _this;
  }

  _createClass(Puck, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var newPhase = getPhase(_this2.props.deployment);
        // if the phase changed, update state
        if (newPhase !== _this2.state.phase) {
          _this2.setState({ phase: newPhase });
        }
      }, PHASE_REFRESH);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          phase = _state.phase,
          isParticipating = _state.isParticipating,
          isBadging = _state.isBadging,
          isRaising = _state.isRaising,
          isWithdrawing = _state.isWithdrawing;
      var _props = this.props,
          network = _props.network,
          account = _props.account,
          deployment = _props.deployment,
          state = _props.state,
          participant = _props.participant,
          balances = _props.balances,
          isLoading = _props.isLoading,
          primaryContractAddresses = _props.primaryContractAddresses;


      var component = getComponent({
        network: network,
        account: account,
        phase: phase,
        deployment: deployment,
        state: state,
        participant: participant,
        balances: balances,
        isLoading: isLoading,
        isParticipating: isParticipating,
        isBadging: isBadging,
        isRaising: isRaising,
        isWithdrawing: isWithdrawing
      });

      return _react2.default.createElement(
        'div',
        { className: 'seedom-puck' },
        _react2.default.createElement(
          'div',
          { className: 'intro' },
          _react2.default.createElement('img', { alt: 'seedom', src: _seedomOWhiteTransparent2.default })
        ),
        _react2.default.createElement(
          'div',
          { className: 'interface' },
          _react2.default.createElement(_circles2.default, { isLoading: isLoading, deployment: deployment }),
          _react2.default.createElement(_ethereum2.default, { isShown: component === 'ethereum' }),
          _react2.default.createElement(_network2.default, { isShown: component === 'network' }),
          _react2.default.createElement(_account2.default, { isShown: component === 'account' }),
          _react2.default.createElement(_welcome2.default, { isShown: component === 'welcome', deployment: deployment, onCountMeIn: this.handleCountMeIn }),
          _react2.default.createElement(_begin2.default, { isShown: component === 'begin', deployment: deployment }),
          _react2.default.createElement(_beginningFailed2.default, { isShown: component === 'beginningFailed', deployment: deployment }),
          _react2.default.createElement(_participate2.default, { isShown: component === 'participate', deployment: deployment, isLoading: isLoading, onParticipate: this.handleParticipate }),
          _react2.default.createElement(_badge2.default, { isShown: component === 'badge', primaryContractAddresses: primaryContractAddresses, network: network, account: account, participant: participant, onBadgingOver: this.handleBadgingOver }),
          _react2.default.createElement(_participation2.default, { isShown: component === 'participation', participant: participant, deployment: deployment, onRaising: this.handleRaising, onBadging: this.handleBadging }),
          _react2.default.createElement(_participationFailed2.default, { isShown: component === 'participationFailed', deployment: deployment }),
          _react2.default.createElement(_raise2.default, { isShown: component === 'raise', deployment: deployment, isLoading: isLoading, onRaise: this.handleRaise, onRaisingCancelled: this.handleRaisingCancelled }),
          _react2.default.createElement(_reveal2.default, { isShown: component === 'reveal', deployment: deployment }),
          _react2.default.createElement(_end2.default, { isShown: component === 'end' }),
          _react2.default.createElement(_selection2.default, { isShown: component === 'selection', state: state, network: network, deployment: deployment }),
          _react2.default.createElement(_withdraw2.default, { isShown: component === 'withdraw', balances: balances, isLoading: isLoading, onWithdraw: this.handleWithdraw, onWithdrawSkipped: this.handleWithdrawSkipped }),
          _react2.default.createElement(_cancel2.default, { isShown: component === 'cancel', isLoading: isLoading, deployment: deployment, onCancel: this.handleCancel }),
          _react2.default.createElement(_cancelled2.default, { isShown: component === 'cancelled', deployment: deployment })
        )
      );
    }
  }]);

  return Puck;
}(_react.Component);

Puck.propTypes = {
  network: _propTypes2.default.shape(),
  account: _propTypes2.default.string,
  deployment: _propTypes2.default.shape(),
  state: _propTypes2.default.shape(),
  participant: _propTypes2.default.shape(),
  balances: _propTypes2.default.shape(),
  isLoading: _propTypes2.default.bool,
  primaryContractAddresses: _propTypes2.default.shape(),
  onParticipate: _propTypes2.default.func.isRequired,
  onRaise: _propTypes2.default.func.isRequired,
  onWithdraw: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
};
Puck.defaultProps = {
  network: null,
  account: null,
  deployment: null,
  state: null,
  participant: null,
  balances: null,
  isLoading: false,
  primaryContractAddresses: null
};
exports.default = Puck;

/***/ }),

/***/ "./app/components/participate/components/puck/index.scss":
/*!***************************************************************!*\
  !*** ./app/components/participate/components/puck/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/components/stats/index.js":
/*!**************************************************************!*\
  !*** ./app/components/participate/components/stats/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _numbers = __webpack_require__(/*! ../../../../utils/numbers */ "./app/utils/numbers.js");

__webpack_require__(/*! ./index.scss */ "./app/components/participate/components/stats/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stat = function (_Component) {
  _inherits(Stat, _Component);

  function Stat() {
    _classCallCheck(this, Stat);

    return _possibleConstructorReturn(this, (Stat.__proto__ || Object.getPrototypeOf(Stat)).apply(this, arguments));
  }

  _createClass(Stat, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          value = _props.value,
          ether = _props.ether;

      return _react2.default.createElement(
        'div',
        { className: 'stat' },
        _react2.default.createElement(
          'div',
          { className: 'stat-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'stat-value' },
          value,
          ether && _react2.default.createElement(
            'span',
            { className: 'ether' },
            _react2.default.createElement('i', { className: 'fas fa-bars' })
          )
        )
      );
    }
  }]);

  return Stat;
}(_react.Component);

Stat.propTypes = {
  title: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string,
  ether: _propTypes2.default.bool
};
Stat.defaultProps = {
  value: null,
  ether: false
};

var Stats = function (_Component2) {
  _inherits(Stats, _Component2);

  function Stats() {
    _classCallCheck(this, Stats);

    return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
  }

  _createClass(Stats, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          side = _props2.side,
          deployment = _props2.deployment,
          state = _props2.state;


      var causeReward = void 0;
      var participantReward = void 0;
      var participants = void 0;
      var entries = void 0;
      if (deployment && state) {
        var received = state.entries.times(deployment.valuePerEntry);
        causeReward = (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(received.times(deployment.causeSplit).dividedBy(1000)));
        participantReward = (0, _numbers.localeDecimal)((0, _numbers.getEtherFromWei)(received.times(deployment.participantSplit).dividedBy(1000)));
        participants = (0, _numbers.localeNumber)(state.participants);
        entries = (0, _numbers.localeNumber)(state.entries);
      }

      return _react2.default.createElement(
        'div',
        { className: 'seedom-stats ' + side },
        (side === 'top' || side === 'left') && _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement('div', { className: 'background' }),
          _react2.default.createElement(Stat, { title: 'cause reward', value: causeReward, ether: true }),
          _react2.default.createElement(Stat, { title: 'winner reward', value: participantReward, ether: true })
        ),
        (side === 'top' || side === 'right') && _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement('div', { className: 'background' }),
          _react2.default.createElement(Stat, { title: 'participants', value: participants }),
          _react2.default.createElement(Stat, { title: 'entries', value: entries })
        )
      );
    }
  }]);

  return Stats;
}(_react.Component);

Stats.propTypes = {
  side: _propTypes2.default.string.isRequired,
  deployment: _propTypes2.default.shape(),
  state: _propTypes2.default.shape()
};
Stats.defaultProps = {
  deployment: null,
  state: null
};
exports.default = Stats;

/***/ }),

/***/ "./app/components/participate/components/stats/index.scss":
/*!****************************************************************!*\
  !*** ./app/components/participate/components/stats/index.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/participate/index.js":
/*!*********************************************!*\
  !*** ./app/components/participate/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = __webpack_require__(/*! ./components/header */ "./app/components/participate/components/header/index.js");

var _header2 = _interopRequireDefault(_header);

var _puck = __webpack_require__(/*! ./components/puck */ "./app/components/participate/components/puck/index.js");

var _puck2 = _interopRequireDefault(_puck);

var _stats = __webpack_require__(/*! ./components/stats */ "./app/components/participate/components/stats/index.js");

var _stats2 = _interopRequireDefault(_stats);

var _feed = __webpack_require__(/*! ./components/feed */ "./app/components/participate/components/feed/index.js");

var _feed2 = _interopRequireDefault(_feed);

var _about = __webpack_require__(/*! ./components/about */ "./app/components/participate/components/about/index.js");

var _about2 = _interopRequireDefault(_about);

var _bytes = __webpack_require__(/*! ../../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _messages = __webpack_require__(/*! @seedom-io/seedom-crypter/messages */ "@seedom-io/seedom-crypter/messages");

var messages = _interopRequireWildcard(_messages);

var _etherscan = __webpack_require__(/*! ../../utils/etherscan */ "./app/utils/etherscan.js");

var etherscan = _interopRequireWildcard(_etherscan);

var _ethereum = __webpack_require__(/*! ../../actions/ethereum */ "./app/actions/ethereum.js");

var ethereumActions = _interopRequireWildcard(_ethereum);

__webpack_require__(/*! ./index.scss */ "./app/components/participate/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Participate = function (_Component) {
  _inherits(Participate, _Component);

  function Participate(props) {
    _classCallCheck(this, Participate);

    var _this = _possibleConstructorReturn(this, (Participate.__proto__ || Object.getPrototypeOf(Participate)).call(this, props));

    _this.handleParticipate = function (_ref) {
      var message = _ref.message,
          entries = _ref.entries;
      var deployment = _this.props.ethereum.deployment;

      var messageHex = messages.hex(message);
      var value = entries.times(deployment.valuePerEntry);
      _this.props.dispatch(ethereumActions.send({
        contractName: 'fundraiser', method: 'participate', args: [messageHex], value: value
      }));
      _this.setState({ isPlaying: true }, function () {
        _this.about.scrollTo();
      });
    };

    _this.handleRaise = function (entries) {
      var deployment = _this.props.ethereum.deployment;

      var value = entries.times(deployment.valuePerEntry);
      _this.props.dispatch(ethereumActions.send({
        contractName: 'fundraiser', value: value
      }));
    };

    _this.handleWithdraw = function (contractAddress) {
      _this.props.dispatch(ethereumActions.send({
        contractName: 'fundraiser', contractAddress: contractAddress, method: 'withdraw'
      }));
    };

    _this.handleCancel = function () {
      _this.props.dispatch(ethereumActions.send({
        contractName: 'fundraiser', method: 'cancel'
      }));
    };

    _this.state = {
      isPlaying: false
    };
    return _this;
  }

  _createClass(Participate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$ethereum = this.props.ethereum,
          network = _props$ethereum.network,
          account = _props$ethereum.account,
          deployment = _props$ethereum.deployment,
          state = _props$ethereum.state,
          participant = _props$ethereum.participant,
          balances = _props$ethereum.balances,
          feed = _props$ethereum.feed,
          isLoading = _props$ethereum.isLoading,
          primaryContractAddresses = _props$ethereum.primaryContractAddresses,
          cause = _props$ethereum.cause;
      var isPlaying = this.state.isPlaying;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-seed' },
        _react2.default.createElement(
          'div',
          { className: 'background' },
          _react2.default.createElement(_header2.default, { deployment: deployment, network: network }),
          _react2.default.createElement(
            'div',
            { className: 'central' },
            _react2.default.createElement(_stats2.default, {
              side: 'left',
              deployment: deployment,
              state: state
            }),
            _react2.default.createElement(_puck2.default, {
              network: network,
              account: account,
              deployment: deployment,
              state: state,
              participant: participant,
              balances: balances,
              isLoading: isLoading,
              primaryContractAddresses: primaryContractAddresses,
              onParticipate: this.handleParticipate,
              onRaise: this.handleRaise,
              onWithdraw: this.handleWithdraw,
              onCancel: this.handleCancel
            }),
            _react2.default.createElement(_stats2.default, {
              side: 'right',
              deployment: deployment,
              state: state
            })
          )
        ),
        _react2.default.createElement(_about2.default, {
          isPlaying: isPlaying,
          cause: cause,
          ref: function ref(component) {
            _this2.about = component;
          }
        }),
        _react2.default.createElement(_feed2.default, { feed: feed, network: network })
      );
    }
  }]);

  return Participate;
}(_react.Component);

/*
<div className="accessory">
          <div className="content has-text-centered">
            <p>
              View more live <strong>Seedom</strong> data on&nbsp;
              <a className="is-green" target="_blank" href={etherscan.getAddressUrl(network, primaryContractAddresses.fundraiser)}>Etherscan</a>.
            </p>
          </div>
        </div>
<div className="accessory">
          <div className="content has-text-centered">
            <Feed feed={feed} network={network} />
          </div>
        </div>
        */

Participate.propTypes = {
  ethereum: _propTypes2.default.shape().isRequired,
  dispatch: _propTypes2.default.func.isRequired
};
var mapStateToProps = function mapStateToProps(state) {
  return { ethereum: state.ethereum };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Participate);

/***/ }),

/***/ "./app/components/participate/index.scss":
/*!***********************************************!*\
  !*** ./app/components/participate/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/press-release/index.js":
/*!***********************************************!*\
  !*** ./app/components/press-release/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _sections = __webpack_require__(/*! ../sections */ "./app/components/sections/index.js");

var _sections2 = _interopRequireDefault(_sections);

__webpack_require__(/*! ./index.scss */ "./app/components/press-release/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PressRelease = function (_Sections) {
  _inherits(PressRelease, _Sections);

  function PressRelease() {
    _classCallCheck(this, PressRelease);

    return _possibleConstructorReturn(this, (PressRelease.__proto__ || Object.getPrototypeOf(PressRelease)).apply(this, arguments));
  }

  _createClass(PressRelease, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container press-release has-text-white' },
        _react2.default.createElement(
          'p',
          { className: 'has-text-right' },
          'FOR IMMEDIATE RELEASE: (April 27th, 2018)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Kyle Graden, Seedom, team@seedom.io'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Kris Decoodt, Giveth, kris@giveth.io'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'has-text-centered' },
          'Seedom Announces Giveth as Beta Launch Partner For Fundraise DApp'
        ),
        _react2.default.createElement(
          'p',
          { className: 'has-text-centered' },
          _react2.default.createElement(
            'i',
            null,
            'Raising Awareness & Ether for Decentralized Altruistic Communities Together'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Earth:'
          ),
          ' Seedom is launching an official beta test, a first of its kind, fundraising Ethereum decentralized application (DApp) raising awareness and ether for altruistic causes while rewarding a single participant for their contribution and support. ',
          _react2.default.createElement(
            'a',
            { target: '_blank', rel: 'noopener noreferrer', href: 'https://giveth.io/' },
            'Giveth'
          ),
          ' has been selected to be the first cause to benefit from the Seedom DApp.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Giveth was chosen because its platform is a r\u039Evolution in the world of charitable donation, building and empowering communities and enabling new ways for people to make a difference. Giveth meets all Seedom requirements, including:'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Decentralizing'
            ),
            ' - believes in the decentralization of power in all forms'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Legitimate'
            ),
            ' - has a capable team with a clear and effective plan of action'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Active'
            ),
            ' - is actively working on solving an urgent need'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'The fundraising round will run from May 1st to May 14th of this year. During this beta test, anyone can visit ',
          _react2.default.createElement(
            'a',
            { href: 'http://seedom.io' },
            'www.seedom.io'
          ),
          ' and contribute ether to be entered to win 35% of the total amount raised for Giveth.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'i',
            null,
            '"We are honored to be picked by Seedom for their first test run of their awesome DApp. We are always looking to support projects focused on using #blockchain4good, it\u2019s sooooo cool to have a project support us!!! Seedom is experimenting with a very cool method to raise funds for charity, aligning incentives between all the participants in a fun way! Our social coding team dove into some of the code and it looks really nice. It has been a pleasure to work with the Seedom team!"'
          ),
          ' - Griff Green, co-founder Giveth'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'This marks the start of a new era of incentivized routine giving on the blockchain and the Ethereum network.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'About Giveth:'
          ),
          ' Giveth is re-engineering charitable giving, by creating an entirely free, open-source platform, built on the Ethereum Blockchain. Our system cuts out bureaucracy and enables nonprofits to create a high level of transparency and accountability towards Givers. Through the Giveth DApp (Donation Application) you will be able to see how the project is laid out and how much money is required for each part. By reducing the costs and decentralizing the giving process we are putting the power back into the hands of the people.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'About Seedom:'
          ),
          ' Seedom takes the efficiency, security, and transparency of the traditional single-room raffle and re-invents it with trustlessness and crowd-sourced selection into an entirely new type of fundraiser that scales to the entire world.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'Visit ',
          _react2.default.createElement(
            'a',
            { href: 'http://seedom.io/' },
            'www.seedom.io'
          ),
          ' to participate and sign up for email reminders.'
        )
      );
    }
  }]);

  return PressRelease;
}(_sections2.default);

var mapStateToProps = function mapStateToProps(state) {
  return { router: state.router };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PressRelease);

/***/ }),

/***/ "./app/components/press-release/index.scss":
/*!*************************************************!*\
  !*** ./app/components/press-release/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/sections/index.js":
/*!******************************************!*\
  !*** ./app/components/sections/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sections = function (_Component) {
  _inherits(Sections, _Component);

  function Sections(props) {
    var opened = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Sections);

    var _this = _possibleConstructorReturn(this, (Sections.__proto__ || Object.getPrototypeOf(Sections)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      open: [].concat(_toConsumableArray(opened))
    };
    // handle #toggles
    _this.handleHash(props);
    return _this;
  }

  _createClass(Sections, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.handleHash(newProps);
    }
  }]);

  return Sections;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleHash = function (props) {
    var hash = props.router.location.hash;

    if (hash !== '') {
      _this2.state.open = [hash.substring(1)];
    }
  };
};

exports.default = Sections;

/***/ }),

/***/ "./app/components/toggle/index.js":
/*!****************************************!*\
  !*** ./app/components/toggle/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./app/components/toggle/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.toggle = function () {
      _this.setState(function (prevState) {
        return {
          collapsed: !prevState.collapsed
        };
      });
    };

    _this.state = {
      collapsed: props.collapsed
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var collapsed = this.state.collapsed;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('seedom-toggle', { collapsed: collapsed }),
          onClick: this.toggle
        },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'span',
            { className: 'toggle left' },
            _react2.default.createElement('i', { className: 'fas fa-plus' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'text' },
            title
          )
        ),
        !collapsed && _react2.default.createElement(
          'div',
          { className: 'content has-text-white' },
          this.props.children
        )
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  title: _propTypes2.default.string.isRequired,
  collapsed: _propTypes2.default.bool,
  children: _propTypes2.default.element
};
Toggle.defaultProps = {
  collapsed: true,
  children: null
};
exports.default = Toggle;

/***/ }),

/***/ "./app/components/toggle/index.scss":
/*!******************************************!*\
  !*** ./app/components/toggle/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/vote/components/caster/index.js":
/*!********************************************************!*\
  !*** ./app/components/vote/components/caster/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _spinner = __webpack_require__(/*! ../../../../img/spinner.svg */ "./app/img/spinner.svg");

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStatus = function getStatus(_ref) {
  var voteCount = _ref.voteCount,
      maxVoteCount = _ref.maxVoteCount,
      ended = _ref.ended;

  if (ended) {
    return 'ended';
  } else if (maxVoteCount.isEqualTo(0)) {
    return 'participate';
  } else if (voteCount.isLessThan(maxVoteCount)) {
    return 'decide';
  }
  return 'thanks';
};

var Caster = function (_Component) {
  _inherits(Caster, _Component);

  function Caster() {
    _classCallCheck(this, Caster);

    return _possibleConstructorReturn(this, (Caster.__proto__ || Object.getPrototypeOf(Caster)).apply(this, arguments));
  }

  _createClass(Caster, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          voteCount = _props.voteCount,
          maxVoteCount = _props.maxVoteCount,
          ended = _props.ended,
          isLoading = _props.isLoading;

      var status = getStatus({ voteCount: voteCount, maxVoteCount: maxVoteCount, ended: ended });

      return _react2.default.createElement(
        'div',
        { className: 'row caster' },
        {
          ended: _react2.default.createElement(
            'div',
            { className: 'bit begin stretch' },
            'fundraiser ended'
          ),
          participate: _react2.default.createElement(
            'div',
            { className: 'bit begin stretch' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'button is-white is-outlined', to: '/participate' },
                  _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-left left' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'participate first'
                  )
                )
              )
            )
          ),
          decide: _react2.default.createElement(
            'div',
            { className: 'bit begin stretch' },
            'help us decide our future!'
          ),
          thanks: _react2.default.createElement(
            'div',
            { className: 'bit begin stretch' },
            'thank you for voting!'
          )
        }[status],
        isLoading && _react2.default.createElement(
          'div',
          { className: 'bit' },
          _react2.default.createElement(
            'object',
            { data: _spinner2.default, type: 'image/svg+xml' },
            _react2.default.createElement('img', { src: _spinner2.default, alt: 'loading' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'bit header' },
          _react2.default.createElement(
            'span',
            { className: 'header' },
            'votes cast'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'bit' },
          voteCount.toString(),
          ' / ',
          maxVoteCount.toString()
        )
      );
    }
  }]);

  return Caster;
}(_react.Component);

Caster.propTypes = {
  isLoading: _propTypes2.default.bool,
  voteCount: _propTypes2.default.shape().isRequired,
  maxVoteCount: _propTypes2.default.shape().isRequired,
  ended: _propTypes2.default.bool.isRequired
};
Caster.defaultProps = {
  isLoading: false
};
exports.default = Caster;

/***/ }),

/***/ "./app/components/vote/components/count/index.js":
/*!*******************************************************!*\
  !*** ./app/components/vote/components/count/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = __webpack_require__(/*! ../../../field */ "./app/components/field/index.js");

var _field2 = _interopRequireDefault(_field);

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var _numbers = __webpack_require__(/*! ../../../../utils/numbers */ "./app/utils/numbers.js");

__webpack_require__(/*! ./index.scss */ "./app/components/vote/components/count/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Count = function (_Component) {
  _inherits(Count, _Component);

  function Count(props) {
    _classCallCheck(this, Count);

    var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

    _this.focus = function () {
      _this.count.focus();
    };

    _this.validate = function () {
      var value = _this.state.value;

      var isValid = value.isGreaterThanOrEqualTo(1) && value.isLessThanOrEqualTo(_this.props.remainingVoteCount);
      _this.setState({ isValid: isValid });
      return isValid;
    };

    _this.value = function () {
      return _this.state.value;
    };

    _this.handleChange = function (value) {
      var parsedValue = void 0;

      try {
        parsedValue = new _bignumber.BigNumber(value);
      } catch (error) {
        parsedValue = (0, _numbers.zero)();
      }

      _this.setState({ value: parsedValue });
    };

    _this.state = {
      value: props.value ? props.value : props.remainingVoteCount,
      isValid: true
    };
    return _this;
  }

  _createClass(Count, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value && this.props.value && !this.props.value.isEqualTo(nextProps.value)) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          remainingVoteCount = _props.remainingVoteCount;
      var _state = this.state,
          value = _state.value,
          isValid = _state.isValid;


      return _react2.default.createElement(
        'div',
        { className: 'seedom-count' },
        _react2.default.createElement(_field2.default, {
          format: 'textbox',
          type: 'number',
          min: new _bignumber.BigNumber(1),
          max: remainingVoteCount,
          value: value.toString(),
          maxLength: remainingVoteCount.toString().length,
          placeholder: '',
          disabled: disabled,
          isValid: isValid,
          onChange: this.handleChange,
          ref: function ref(component) {
            _this2.count = component;
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'divider' },
          '/'
        ),
        _react2.default.createElement(
          'div',
          { className: 'remainingVoteCount' },
          remainingVoteCount.toString()
        )
      );
    }
  }]);

  return Count;
}(_react.Component);

Count.propTypes = {
  value: _propTypes2.default.shape(),
  disabled: _propTypes2.default.bool.isRequired,
  remainingVoteCount: _propTypes2.default.shape().isRequired
};
Count.defaultProps = {
  value: null
};
exports.default = Count;

/***/ }),

/***/ "./app/components/vote/components/count/index.scss":
/*!*********************************************************!*\
  !*** ./app/components/vote/components/count/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/vote/components/index/index.js":
/*!*******************************************************!*\
  !*** ./app/components/vote/components/index/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

var _count = __webpack_require__(/*! ../count */ "./app/components/vote/components/count/index.js");

var _count2 = _interopRequireDefault(_count);

var _heatmap = __webpack_require__(/*! ../../../../utils/heatmap */ "./app/utils/heatmap.js");

var heatmap = _interopRequireWildcard(_heatmap);

var _numbers = __webpack_require__(/*! ../../../../utils/numbers */ "./app/utils/numbers.js");

var _classnames = __webpack_require__(/*! classnames */ "classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowClass = function rowClass(available) {
  return (0, _classnames2.default)({
    row: true,
    index: true,
    static: !available
  });
};

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.validateForm = function (done) {
      var isFormValid = _this.count.validate();
      _this.setState({ isFormValid: isFormValid }, done);
    };

    _this.handleEdit = function () {
      _this.setState({ editing: true });
    };

    _this.handleCancel = function () {
      _this.setState({ editing: false });
    };

    _this.handleSubmit = function () {
      _this.validateForm(function () {
        if (_this.state.isFormValid) {
          var _this$props = _this.props,
              cause = _this$props.cause,
              onVoteIndex = _this$props.onVoteIndex;

          var count = _this.count.value();
          onVoteIndex({ index: cause.index, count: count });
        } else {
          _reactReduxToastr.toastr.warning('VOTE', 'score update form invalid');
        }
      });
    };

    _this.getHeatmapColor = function (causeVoteCount, causesVoteCount) {
      return heatmap.color(causeVoteCount.div(causesVoteCount));
    };

    _this.state = {
      editing: false,
      isFormValid: true
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          voteCount = _props.voteCount,
          maxVoteCount = _props.maxVoteCount,
          causesVoteCount = _props.causesVoteCount,
          ended = _props.ended,
          cause = _props.cause,
          vote = _props.vote,
          isLoading = _props.isLoading;
      var editing = this.state.editing;


      var available = !ended && voteCount.isLessThan(maxVoteCount);

      var heatmapColor = this.getHeatmapColor(cause.voteCount, causesVoteCount);

      return _react2.default.createElement(
        'div',
        { className: rowClass(available), style: { backgroundColor: heatmapColor } },
        _react2.default.createElement(
          'div',
          { className: 'bit begin header-normal stretch shadow' },
          cause.name
        ),
        vote && _react2.default.createElement(
          'div',
          { className: 'bit header shadow' },
          'voted!'
        ),
        (!available || !editing) && _react2.default.createElement(
          'div',
          { className: 'bit shadow' },
          _react2.default.createElement(
            'div',
            { className: 'bit header' },
            'votes'
          ),
          _react2.default.createElement(
            'div',
            { className: 'bit' },
            cause.voteCount.toString()
          )
        ),
        available && _react2.default.createElement(
          'div',
          { className: 'bit' },
          editing && _react2.default.createElement(
            'div',
            { className: 'bit shadow' },
            _react2.default.createElement(
              'div',
              { className: 'bit' },
              _react2.default.createElement(_count2.default, {
                remainingVoteCount: maxVoteCount.minus(voteCount),
                disabled: isLoading,
                ref: function ref(component) {
                  _this2.count = component;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'bit' },
              _react2.default.createElement(
                'div',
                { className: 'field' },
                _react2.default.createElement(
                  'div',
                  { className: 'control' },
                  _react2.default.createElement(
                    'a',
                    { className: 'button is-white', disabled: isLoading, onClick: this.handleSubmit },
                    'vote'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bit' },
              _react2.default.createElement(
                'div',
                { className: 'field' },
                _react2.default.createElement(
                  'div',
                  { className: 'control' },
                  _react2.default.createElement(
                    'a',
                    { className: 'button is-white', disabled: isLoading, onClick: this.handleCancel },
                    'cancel'
                  )
                )
              )
            )
          ),
          !editing && _react2.default.createElement(
            'div',
            { className: 'bit shadow' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-white', disabled: isLoading, onClick: this.handleEdit },
                  'vote'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  voteCount: _propTypes2.default.shape().isRequired,
  maxVoteCount: _propTypes2.default.shape().isRequired,
  causesVoteCount: _propTypes2.default.shape().isRequired,
  ended: _propTypes2.default.bool.isRequired,
  cause: _propTypes2.default.shape().isRequired,
  vote: _propTypes2.default.shape(),
  isLoading: _propTypes2.default.bool,
  onVoteIndex: _propTypes2.default.func.isRequired
};
Index.defaultProps = {
  isLoading: false,
  vote: null
};
exports.default = Index;

/***/ }),

/***/ "./app/components/vote/components/name/index.js":
/*!******************************************************!*\
  !*** ./app/components/vote/components/name/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

var _count = __webpack_require__(/*! ../count */ "./app/components/vote/components/count/index.js");

var _count2 = _interopRequireDefault(_count);

var _field = __webpack_require__(/*! ../../../field */ "./app/components/field/index.js");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_NAME_LENGTH = 32;

var Name = function (_Component) {
  _inherits(Name, _Component);

  function Name(props) {
    _classCallCheck(this, Name);

    var _this = _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));

    _this.validateForm = function (done) {
      var name = _this.state.name;

      var isNameValid = name.length > 1 && name.length <= MAX_NAME_LENGTH;
      var isCountValid = _this.count.validate();
      _this.setState({
        isNameValid: isNameValid,
        isFormValid: isNameValid && isCountValid
      }, done);
    };

    _this.handleNameChange = function (name) {
      _this.setState({ name: name });
    };

    _this.handleSubmit = function () {
      _this.validateForm(function () {
        var _this$state = _this.state,
            isFormValid = _this$state.isFormValid,
            name = _this$state.name;

        if (isFormValid) {
          var count = _this.count.value();
          _this.props.onVoteName({ name: name, count: count });
        } else {
          _reactReduxToastr.toastr.warning('VOTE', 'new cause form invalid');
        }
      });
    };

    _this.state = {
      name: '',
      isNameValid: true,
      isFormValid: true
    };
    return _this;
  }

  _createClass(Name, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          voteCount = _props.voteCount,
          maxVoteCount = _props.maxVoteCount,
          ended = _props.ended,
          isLoading = _props.isLoading;
      var _state = this.state,
          name = _state.name,
          isNameValid = _state.isNameValid;


      if (ended || voteCount.isEqualTo(maxVoteCount)) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'row name' },
        _react2.default.createElement(
          'div',
          { className: 'bit begin stretch' },
          _react2.default.createElement(_field2.default, {
            format: 'textbox',
            type: 'text',
            placeholder: 'enter new cause or vote below',
            value: name.toString(),
            maxLength: 10,
            disabled: isLoading,
            isValid: isNameValid,
            onChange: this.handleNameChange,
            ref: function ref(component) {
              _this2.name = component;
            }
          })
        ),
        name.length > 0 && _react2.default.createElement(
          'div',
          { className: 'bit' },
          _react2.default.createElement(
            'div',
            { className: 'bit header' },
            'votes'
          ),
          _react2.default.createElement(
            'div',
            { className: 'bit' },
            _react2.default.createElement(_count2.default, {
              remainingVoteCount: maxVoteCount.minus(voteCount),
              disabled: isLoading,
              ref: function ref(component) {
                _this2.count = component;
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'bit' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'div',
                { className: 'control' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-white', disabled: isLoading, onClick: this.handleSubmit },
                  _react2.default.createElement('i', { className: 'fas fa-plus-circle' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Name;
}(_react.Component);

Name.propTypes = {
  voteCount: _propTypes2.default.shape().isRequired,
  maxVoteCount: _propTypes2.default.shape().isRequired,
  ended: _propTypes2.default.bool.isRequired,
  isLoading: _propTypes2.default.bool,
  onVoteName: _propTypes2.default.func.isRequired
};
Name.defaultProps = {
  isLoading: false
};
exports.default = Name;

/***/ }),

/***/ "./app/components/vote/index.js":
/*!**************************************!*\
  !*** ./app/components/vote/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bytes = __webpack_require__(/*! ../../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _messages = __webpack_require__(/*! @seedom-io/seedom-crypter/messages */ "@seedom-io/seedom-crypter/messages");

var messages = _interopRequireWildcard(_messages);

var _ethereum = __webpack_require__(/*! ../../actions/ethereum */ "./app/actions/ethereum.js");

var ethereumActions = _interopRequireWildcard(_ethereum);

var _caster = __webpack_require__(/*! ./components/caster */ "./app/components/vote/components/caster/index.js");

var _caster2 = _interopRequireDefault(_caster);

var _name = __webpack_require__(/*! ./components/name */ "./app/components/vote/components/name/index.js");

var _name2 = _interopRequireDefault(_name);

var _index = __webpack_require__(/*! ./components/index */ "./app/components/vote/components/index/index.js");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.scss */ "./app/components/vote/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vote = function (_Component) {
  _inherits(Vote, _Component);

  function Vote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Vote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vote.__proto__ || Object.getPrototypeOf(Vote)).call.apply(_ref, [this].concat(args))), _this), _this.handleVoteName = function (_ref2) {
      var name = _ref2.name,
          count = _ref2.count;

      var nameHex = messages.hex(name);
      _this.props.dispatch(ethereumActions.send({
        contractName: 'polling', method: 'voteName', args: [nameHex, count]
      }));
    }, _this.handleVoteIndex = function (_ref3) {
      var index = _ref3.index,
          count = _ref3.count;

      _this.props.dispatch(ethereumActions.send({
        contractName: 'polling', method: 'voteIndex', args: [index, count]
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Vote, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$ethereum = this.props.ethereum,
          maxVoteCount = _props$ethereum.maxVoteCount,
          causes = _props$ethereum.causes,
          causesVoteCount = _props$ethereum.causesVoteCount,
          votes = _props$ethereum.votes,
          voteCount = _props$ethereum.voteCount,
          deployment = _props$ethereum.deployment,
          account = _props$ethereum.account,
          isLoading = _props$ethereum.isLoading;


      if (!maxVoteCount || !causes || !votes || !deployment) {
        return null;
      }

      // sort causes by vote count
      var sortedCauses = [].concat(_toConsumableArray(causes)).sort(function (a, b) {
        return b.voteCount.comparedTo(a.voteCount);
      });

      var ended = new Date() >= deployment.endTime;

      return _react2.default.createElement(
        'div',
        { className: 'seedom-vote' },
        _react2.default.createElement(
          'div',
          { className: 'list' },
          _react2.default.createElement(_caster2.default, {
            isLoading: isLoading,
            voteCount: voteCount,
            maxVoteCount: maxVoteCount,
            ended: ended
          }),
          _react2.default.createElement(_name2.default, {
            voteCount: voteCount,
            maxVoteCount: maxVoteCount,
            ended: ended,
            isLoading: isLoading,
            onVoteName: this.handleVoteName
          }),
          sortedCauses.map(function (cause) {
            return _react2.default.createElement(_index2.default, {
              key: cause.index,
              isLoading: isLoading,
              voteCount: voteCount,
              maxVoteCount: maxVoteCount,
              causesVoteCount: causesVoteCount,
              ended: ended,
              cause: cause,
              vote: votes[cause.index],
              account: account,
              onVoteIndex: _this2.handleVoteIndex
            });
          })
        )
      );
    }
  }]);

  return Vote;
}(_react.Component);

Vote.propTypes = {
  ethereum: _propTypes2.default.shape().isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return { ethereum: state.ethereum };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Vote);

/***/ }),

/***/ "./app/components/vote/index.scss":
/*!****************************************!*\
  !*** ./app/components/vote/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/img/logos/cause-logo.png":
/*!**************************************!*\
  !*** ./app/img/logos/cause-logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f0e79c237eba7629393f31a151ac7ca0.png";

/***/ }),

/***/ "./app/img/spinner.svg":
/*!*****************************!*\
  !*** ./app/img/spinner.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a98583bd825d0cb2dddabef564c356e3.svg";

/***/ }),

/***/ "./app/middleware/cause.js":
/*!*********************************!*\
  !*** ./app/middleware/cause.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _causes = __webpack_require__(/*! @seedom-io/seedom-resolver/causes */ "@seedom-io/seedom-resolver/causes");

var causesResolver = _interopRequireWildcard(_causes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sampleCause = {
  name: 'Seedom',
  url: 'seedom.io',
  video: 'nj2QNP9gEKA',
  tagline: 'seeding the future of philanthropy'
};

var causeMiddleware = function causeMiddleware(store) {
  var handleFundraiserDeployment = function handleFundraiserDeployment(next, action) {
    if (false) {} else {
      store.dispatch({ type: 'CAUSE_CAUSE', cause: sampleCause });
    }
    return next(action);
  };

  return function (next) {
    return function (action) {
      var type = action.type;

      switch (type) {
        case 'FUNDRAISER_DEPLOYMENT':
          return handleFundraiserDeployment(next, action);
        default:
          return next(action);
      }
    };
  };
};

exports.default = causeMiddleware;

/***/ }),

/***/ "./app/middleware/ethereum.js":
/*!************************************!*\
  !*** ./app/middleware/ethereum.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _web = __webpack_require__(/*! web3 */ "web3");

var _web2 = _interopRequireDefault(_web);

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAST_BLOCKS_BACK = 10000;
var MAX_LAST_BLOCK_AGE = 60 * 1000; // 60 seconds
var GAS = 200000;
var GAS_PRICE = 4000000000;

var getNetworkName = function getNetworkName(id) {
  switch (id) {
    case 1:
      return 'mainnet';
    case 2:
      return 'morden';
    case 3:
      return 'ropsten';
    case 4:
      return 'rinkeby';
    case 42:
      return 'kovan';
    default:
      return 'localhost';
  }
};

var getRpcWeb3 = function getRpcWeb3() {
  // setup rpc web3
  if (typeof window !== 'undefined') {
    // set MetaMask web3 at v1.0
    if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
      return new _web2.default(window.web3.currentProvider);
    }
  }
  return null;
};

var ethereumMiddleware = function ethereumMiddleware(store) {
  // client web3 is source of truth
  var clientWeb3 = getRpcWeb3();
  // middleware state
  var serverWeb3 = void 0;
  var account = void 0;
  var network = void 0;
  var contracts = {};
  var primaryContractAddresses = {};

  var getContract = function getContract(name) {
    return contracts[name];
  };

  var getClientMethod = function getClientMethod(release, method, args) {
    return release.client.methods[method].apply(null, args);
  };

  var getServerMethod = function getServerMethod(release, method, args) {
    return release.server.methods[method].apply(null, args);
  };

  var handleCallError = function handleCallError(error, action) {
    console.error(error.message);
    store.dispatch(_extends({}, action, { type: 'ETHEREUM_CALL_ERROR', error: error }));
  };

  var handleCall = function handleCall(next, action) {
    var contractName = action.contractName,
        contractAddress = action.contractAddress,
        method = action.method,
        args = action.args;

    var contract = getContract(contractName);
    if (contract) {
      var release = contract[contractAddress || primaryContractAddresses[contractName]];
      if (release) {
        var serverMethod = getServerMethod(release, method, args);
        serverMethod.call({ from: account }).then(function (data) {
          store.dispatch(_extends({}, action, { type: 'ETHEREUM_CALL_DATA', data: data }));
        }, function (error) {
          handleCallError(error, action);
        });
      }
    }

    return next(action);
  };

  var handleAllCall = function handleAllCall(next, action) {
    var contractName = action.contractName,
        method = action.method,
        args = action.args;

    var promises = [];
    var contract = getContract(contractName);
    if (contract) {
      // get contract addresses (an order)
      var contractAddresses = Object.keys(contracts[contractName]);
      // loop over last 6 contracts to execute call
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = contractAddresses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var contractAddress = _step.value;

          var release = contract[contractAddress || primaryContractAddresses[contractName]];
          if (release) {
            var serverMethod = getServerMethod(release, method, args);
            promises.push(serverMethod.call({ from: account }));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      Promise.all(promises).then(function (datas) {
        var data = {};
        for (var i = 0; i < datas.length; i += 1) {
          data[contractAddresses[i]] = datas[i];
        }
        store.dispatch(_extends({}, action, { type: 'ETHEREUM_ALLCALL_DATA', data: data }));
      });
    }

    return next(action);
  };

  var handleSendError = function handleSendError(error, action) {
    var finalMessage = void 0;
    var message = error.message;

    if (message.includes('User denied')) {
      finalMessage = 'USER CANCELLED TRANSACTION';
    } else if (message.includes('Insufficient funds')) {
      finalMessage = 'INSUFFICIENT FUNDS';
    } else {
      finalMessage = 'UNKNOWN ERROR';
    }

    // send out send error & toastr notification
    store.dispatch(_extends({}, action, { type: 'ETHEREUM_SEND_ERROR', error: finalMessage }));
    _reactReduxToastr.toastr.error('ETHEREUM ERROR', finalMessage);
  };

  var handleSendSuccess = function handleSendSuccess(action) {
    store.dispatch(_extends({}, action, { type: 'ETHEREUM_SEND_SUCCESS' }));
  };

  var handleSendCall = function handleSendCall(options, release, next, action) {
    return function (callError) {
      if (callError) {
        handleSendError(callError, action);
        return;
      }

      var transaction = void 0;
      var method = action.method;

      if (!method) {
        transaction = clientWeb3.eth.sendTransaction(options);
      } else {
        var args = action.args;

        var clientMethod = getClientMethod(release, method, args);
        transaction = clientMethod.send(options);
      }

      transaction.on('error', function (sendError) {
        handleSendError(sendError, action);
      }).on('confirmation', function (confirmationNumber) {
        if (confirmationNumber === 0) {
          handleSendSuccess(action);
        }
      });
    };
  };

  var handleSend = function handleSend(next, action) {
    var contractName = action.contractName,
        contractAddress = action.contractAddress,
        method = action.method,
        args = action.args,
        value = action.value;

    var options = {
      value: value,
      from: account,
      gas: GAS,
      gasPrice: GAS_PRICE
    };

    var contract = getContract(contractName);
    if (contract) {
      var release = contract[contractAddress || primaryContractAddresses[contractName]];
      if (release) {
        options.to = release.address;
        var handler = handleSendCall(options, release, next, action);
        if (!method) {
          clientWeb3.eth.call(options, handler);
        } else {
          var serverMethod = getServerMethod(release, method, args);
          serverMethod.call(options, handler);
        }
      }
    }

    return next(action);
  };

  var destroyCurrentNetwork = function destroyCurrentNetwork() {
    for (var contractName in contracts) {
      var releases = contracts[contractName];
      for (var contractAddress in releases) {
        var release = releases[contractAddress];
        release.server.currentProvider.connection.close();
      }
      delete contracts[contractName];
      delete primaryContractAddresses[contractName];
    }
  };

  var setupServerWeb3 = function setupServerWeb3(networkName) {
    var ethNetwork = {"localhost":{"rpcUrl":"http://localhost:8545","wsUrl":"ws://localhost:8546"},"mainnet":{"rpcUrl":"https://manager1.seedom.io:8549","wsUrl":"wss://manager1.seedom.io:8550"},"ropsten":{"rpcUrl":"https://manager1.seedom.io:8547","wsUrl":"wss://manager1.seedom.io:8548"}}[networkName];
    if (ethNetwork) {
      // use websocket url
      serverWeb3 = new _web2.default(ethNetwork.wsUrl);
      return true;
    }

    serverWeb3 = null;
    return false;
  };

  var setupContracts = function setupContracts(networkName) {
    var ethDeployments = {"localhost":{"fundraiser":[{"address":"0xA6C690836ADA4C134de6b937713809A1829FE193","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x8dDf60E00DB1db7f9370d0b88420A04C95642c26","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0xd442431d26adB8a2E8e200835E086a50508Bc117","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x591aD1f36Bb5578Ea02bF05510bF79D24624026f","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x32cD14A3709C18058DdC3984aAdDDcD5926c36ae","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x4faCe5aE5c82Ca12d1A8aDDB9dC0341440A5e871","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeWallet","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerWallet","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]}],"polling":[{"address":"0x6b3406FF342966a450E77D477aea4AB46C826d10","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x9547E29Fe6b10806Db1C51528A9B67AEfDa6A437","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x53228F279acf5c2484E8619501Dd4c2b18911518","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x7E703F90D8E70AbA8443FA897ec117D6b8882cD2","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0xeD92D6f5e32110ee2C4A185D6D28B212c927426b","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x8C96ab371f945EbF570B036Ee8f132551858f393","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"name":"_voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_count","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"_participants","outputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVoteCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_voteCounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_counts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_voteCount","type":"uint256"}],"name":"CastIndex","type":"event"}]}]},"mainnet":{"seedom":[{"address":"0xa7bc8Cd45eEDe68e8AD6d282E522f2B9e7d57942","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_charityRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_winner","type":"address"},{"indexed":false,"name":"_winnerRandom","type":"bytes32"},{"indexed":false,"name":"_charityRandom","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x2F8c8FCB351520A3B28971a017E1231Baa6bAf01","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_charityRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_winner","type":"address"},{"indexed":false,"name":"_winnerRandom","type":"bytes32"},{"indexed":false,"name":"_charityRandom","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]}]},"ropsten":{"seedom":[{"address":"0x4C70C9c44213c54C8b590Fa3A63a56DF40348ca6","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_entries","type":"uint256"},{"name":"_message","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participantAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"select","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_selectedSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charitySecret","type":"bytes32"},{"name":"_charityMessage","type":"bytes32"},{"name":"_charityWithdrawn","type":"bool"},{"name":"_selected","type":"address"},{"name":"_selectedMessage","type":"bytes32"},{"name":"_selectedWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_selectedSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charitySecret","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_selected","type":"address"},{"indexed":false,"name":"_selectedMessage","type":"bytes32"},{"indexed":false,"name":"_charityMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x0D74c068a1141e8aC60a30e6b6e5dF5A518c4210","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_entries","type":"uint256"},{"name":"_message","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participantAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"select","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_selectedSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charitySecret","type":"bytes32"},{"name":"_charityMessage","type":"bytes32"},{"name":"_charityWithdrawn","type":"bool"},{"name":"_selected","type":"address"},{"name":"_selectedMessage","type":"bytes32"},{"name":"_selectedWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_selectedSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charitySecret","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_selected","type":"address"},{"indexed":false,"name":"_selectedMessage","type":"bytes32"},{"indexed":false,"name":"_charityMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0xBD18f290D6cC51dBEE083A2a4b493e7278AC2B38","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_charityRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_winner","type":"address"},{"indexed":false,"name":"_winnerRandom","type":"bytes32"},{"indexed":false,"name":"_charityRandom","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0xae6504caFc09bFbDbF751C4292371D114d2b459e","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_charityRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_winner","type":"address"},{"indexed":false,"name":"_winnerRandom","type":"bytes32"},{"indexed":false,"name":"_charityRandom","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x7542eA016832c2B30395a93E7e2c4EbA4284d734","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_charityRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_winner","type":"address"},{"indexed":false,"name":"_winnerRandom","type":"bytes32"},{"indexed":false,"name":"_charityRandom","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0xBC8AE73A0D0b7158dd0C3B2dFCd6ae908271929b","abi":[{"constant":false,"inputs":[{"name":"_hashedRandom","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityHashedRandom","type":"bytes32"}],"name":"seed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityRandom","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_random","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"revealers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiser","outputs":[{"name":"_owner","type":"address"},{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_charityHashedRandom","type":"bytes32"},{"name":"_winner","type":"address"},{"name":"_winnerRandom","type":"bytes32"},{"name":"_cancelled","type":"bool"},{"name":"_totalParticipants","type":"uint256"},{"name":"_totalEntries","type":"uint256"},{"name":"_totalRevealers","type":"uint256"},{"name":"_totalRevealed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsMapping","outputs":[{"name":"_entries","type":"uint256"},{"name":"_hashedRandom","type":"bytes32"},{"name":"_random","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_charity","type":"address"},{"name":"_charitySplit","type":"uint256"},{"name":"_winnerSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_revealTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_maxParticipants","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_charityHashedRandom","type":"bytes32"}],"name":"Seed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_hashedRandom","type":"bytes32"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_random","type":"bytes32"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]}],"suggest":[{"address":"0x8B54B2118CB2D695977B007Aa76337a06038c0e9","abi":[{"constant":true,"inputs":[],"name":"getVotes","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"destructTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCharities","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_forCharityIndex","type":"uint256"},{"name":"_forCharityName","type":"bytes32"}],"name":"hasRight","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_charityIndex","type":"uint256"},{"name":"_score","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityName","type":"bytes32"},{"name":"_score","type":"uint256"}],"name":"addCharity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_seedomAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"address"},{"indexed":true,"name":"_charityIndex","type":"uint256"},{"indexed":false,"name":"_score","type":"uint256"}],"name":"Vote","type":"event"}]}],"polling":[{"address":"0x45deF51afcEF10Be10BEfcfCF170a231C5971be4","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_score","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_score","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"caster","outputs":[{"name":"_maxScore","type":"uint256"},{"name":"_maxVotes","type":"uint256"},{"name":"_votes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_scores","type":"uint256[]"},{"name":"_votes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_scores","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_maxScore","type":"uint256"},{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":false,"name":"_votes","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeScores","type":"uint256"},{"indexed":false,"name":"_causeVotes","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x78c57792d19feB45509CB9C014d03727aa742685","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_score","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_score","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"caster","outputs":[{"name":"_maxScore","type":"uint256"},{"name":"_maxVotes","type":"uint256"},{"name":"_votes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_scores","type":"uint256[]"},{"name":"_votes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_scores","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_maxScore","type":"uint256"},{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":false,"name":"_votes","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeScores","type":"uint256"},{"indexed":false,"name":"_causeVotes","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0x527304AF146C3920b91cd25e02EDCa2D5535BF72","abi":[{"constant":false,"inputs":[{"name":"_causeIndex","type":"uint256"},{"name":"_score","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_causeName","type":"bytes32"},{"name":"_score","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"caster","outputs":[{"name":"_maxScore","type":"uint256"},{"name":"_maxVotes","type":"uint256"},{"name":"_votes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"causes","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_scores","type":"uint256[]"},{"name":"_votes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_causeIndexes","type":"uint256[]"},{"name":"_scores","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_maxScore","type":"uint256"},{"name":"_fundraiser","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeName","type":"bytes32"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":false,"name":"_votes","type":"uint256"},{"indexed":true,"name":"_causeIndex","type":"uint256"},{"indexed":false,"name":"_causeScores","type":"uint256"},{"indexed":false,"name":"_causeVotes","type":"uint256"}],"name":"CastIndex","type":"event"}]},{"address":"0xc73be3eE43EcD67971f8C0b9190E1240b3A104C6","abi":[{"constant":false,"inputs":[{"name":"_charityIndex","type":"uint256"},{"name":"_score","type":"uint256"}],"name":"voteIndex","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_charityName","type":"bytes32"},{"name":"_score","type":"uint256"}],"name":"voteName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"charities","outputs":[{"name":"_names","type":"bytes32[]"},{"name":"_casters","type":"address[]"},{"name":"_totalScores","type":"uint256[]"},{"name":"_totalVotes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"caster","outputs":[{"name":"_maxScore","type":"uint256"},{"name":"_maxVotes","type":"uint256"},{"name":"_totalVotes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votes","outputs":[{"name":"_charityIndexes","type":"uint256[]"},{"name":"_scores","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_maxScore","type":"uint256"},{"name":"_seedomAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":true,"name":"_charityIndex","type":"uint256"},{"indexed":false,"name":"_charityName","type":"bytes32"}],"name":"CastName","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_caster","type":"address"},{"indexed":false,"name":"_score","type":"uint256"},{"indexed":false,"name":"_totalVotes","type":"uint256"},{"indexed":true,"name":"_charityIndex","type":"uint256"},{"indexed":false,"name":"_charityTotalScores","type":"uint256"},{"indexed":false,"name":"_charityTotalVotes","type":"uint256"}],"name":"CastIndex","type":"event"}]}],"fundraiser":[{"address":"0xF2C1a608104427EC3399ff74381E87ed9E7c8144","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x41bA433632168bBf6F176D3c7cF3E260c5A2aE3b","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]},{"address":"0x154Dd4fA554E09C6C421Fe0ae54eF6569A4a20Bf","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"_message","type":"bytes32"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"participate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recover","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deployment","outputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_deployTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"end","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_message","type":"bytes32"}],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_secret","type":"bytes32"}],"name":"begin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"_causeSecret","type":"bytes32"},{"name":"_causeMessage","type":"bytes32"},{"name":"_causeWithdrawn","type":"bool"},{"name":"_participant","type":"address"},{"name":"_participantMessage","type":"bytes32"},{"name":"_participantWithdrawn","type":"bool"},{"name":"_ownerMessage","type":"bytes32"},{"name":"_ownerWithdrawn","type":"bool"},{"name":"_cancelled","type":"bool"},{"name":"_participants","type":"uint256"},{"name":"_entries","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_cause","type":"address"},{"name":"_causeSplit","type":"uint256"},{"name":"_participantSplit","type":"uint256"},{"name":"_ownerSplit","type":"uint256"},{"name":"_ownerSecret","type":"bytes32"},{"name":"_valuePerEntry","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_expireTime","type":"uint256"},{"name":"_destructTime","type":"uint256"},{"name":"_entropy","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeSecret","type":"bytes32"}],"name":"Beginning","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_message","type":"bytes32"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Participation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_entries","type":"uint256"},{"indexed":false,"name":"_refund","type":"uint256"}],"name":"Raise","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_causeMessage","type":"bytes32"}],"name":"Revelation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_participant","type":"address"},{"indexed":false,"name":"_participantMessage","type":"bytes32"},{"indexed":false,"name":"_causeMessage","type":"bytes32"},{"indexed":false,"name":"_ownerMessage","type":"bytes32"}],"name":"Selection","type":"event"},{"anonymous":false,"inputs":[],"name":"Cancellation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"}],"name":"Withdrawal","type":"event"}]}]}}[networkName];
    if (!ethDeployments) {
      return false;
    }

    // set all contracts (last six)
    for (var contractName in ethDeployments) {
      var releases = ethDeployments[contractName];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = releases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var release = _step2.value;

          // save first address (primary contract)
          if (!(contractName in primaryContractAddresses)) {
            primaryContractAddresses[contractName] = release.address;
          }

          if (!(contractName in contracts)) {
            contracts[contractName] = {};
          }

          // add to map of contracts
          contracts[contractName][release.address] = {
            name: contractName,
            address: release.address,
            server: new serverWeb3.eth.Contract(release.abi, release.address),
            client: new clientWeb3.eth.Contract(release.abi, release.address)
          };
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    // dispatch primary contract addresses
    store.dispatch({
      type: 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES',
      primaryContractAddresses: primaryContractAddresses
    });

    return true;
  };

  var setupContractEventHandler = function setupContractEventHandler(contractName, release, fromBlockNumber, startingBlockNumber) {
    release.server.events.allEvents({
      fromBlock: fromBlockNumber
    }, function (error, result) {
      store.dispatch({
        type: 'ETHEREUM_EVENT',
        eventName: result.event.toUpperCase(),
        contractName: contractName,
        values: result.returnValues,
        contractAddress: result.address,
        blockNumber: result.blockNumber,
        transactionHash: result.transactionHash,
        transactionIndex: result.transactionIndex,
        old: result.blockNumber <= startingBlockNumber
      });
    });
  };

  var setupContractEventHandlers = function setupContractEventHandlers() {
    // get starting block and setup event handlers
    serverWeb3.eth.getBlockNumber(function (error, startingBlockNumber) {
      // get the feed block number (what block to start at for feed)
      var pastBlockNumber = startingBlockNumber - PAST_BLOCKS_BACK;
      if (pastBlockNumber < 0) {
        pastBlockNumber = 0;
      }

      // set up event handlers for each contract
      for (var contractName in contracts) {
        var releases = contracts[contractName];
        var primaryContractAddress = primaryContractAddresses[contractName];
        for (var contractAddress in releases) {
          var release = releases[contractAddress];
          var fromBlockNumber = release.address === primaryContractAddress ? pastBlockNumber : startingBlockNumber;
          setupContractEventHandler(contractName, release, fromBlockNumber, startingBlockNumber);
        }
      }
    });
  };

  var setupNetwork = function setupNetwork(id) {
    // destroy old network
    destroyCurrentNetwork();
    // setup server web3
    var name = getNetworkName(id);
    var supported = setupServerWeb3(name);

    var deployed = false;
    // continue if supported
    if (supported) {
      // setup contracts
      deployed = setupContracts(name);
      // setup event handlers
      setupContractEventHandlers();
    }

    // save network object
    network = {
      id: id,
      name: name,
      supported: supported,
      deployed: deployed
    };

    // dispatch new network
    store.dispatch({
      type: 'ETHEREUM_NETWORK',
      network: network
    });
  };

  var ready = function ready() {
    return network && network.supported && network.deployed && account;
  };

  var checkUser = function checkUser() {
    if (!ready()) {
      return;
    }

    store.dispatch({
      type: 'ETHEREUM_USER',
      network: network,
      account: account
    });
  };

  var checkNetwork = function checkNetwork() {
    clientWeb3.eth.net.getId(function (error, id) {
      if (!network || id !== network.id) {
        setupNetwork(id);
        // see if user established
        checkUser();
      }
    });
  };

  var checkAccount = function checkAccount() {
    clientWeb3.eth.getAccounts(function (error, newAccounts) {
      var _newAccounts = _slicedToArray(newAccounts, 1),
          newAccount = _newAccounts[0];

      if (newAccount !== account) {
        account = newAccount;
        store.dispatch({
          type: 'ETHEREUM_ACCOUNT',
          account: account
        });
        // see if user established
        checkUser();
      }
    });
  };

  var checkRefresh = function checkRefresh() {
    if (!ready()) {
      return;
    }

    var now = new Date().getTime();
    var contractAddresses = [];

    for (var contractName in contracts) {
      var releases = contracts[contractName];
      for (var contractAddress in releases) {
        var release = releases[contractAddress];
        if (!release.lastBlockTime || now - release.lastBlockTime.getTime() > MAX_LAST_BLOCK_AGE) {
          // last block time to now
          release.lastBlockTime = new Date();
          contractAddresses.push(release.address);
        }
      }
    }

    if (contractAddresses.length > 0) {
      store.dispatch({ type: 'ETHEREUM_REFRESH', contractAddresses: contractAddresses });
    }
  };

  // set up client web3 change detection polling
  if (clientWeb3) {
    setInterval(function () {
      checkNetwork();
      checkAccount();
      checkRefresh();
    }, 1000);
  }

  return function (next) {
    return function (action) {
      var type = action.type;

      switch (type) {
        case 'ETHEREUM_CALL':
          return handleCall(next, action);
        case 'ETHEREUM_SEND':
          return handleSend(next, action);
        case 'ETHEREUM_ALLCALL':
          return handleAllCall(next, action);
        default:
          return next(action);
      }
    };
  };
};

exports.default = ethereumMiddleware;

/***/ }),

/***/ "./app/middleware/fundraiser.js":
/*!**************************************!*\
  !*** ./app/middleware/fundraiser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ethereum = __webpack_require__(/*! ../actions/ethereum */ "./app/actions/ethereum.js");

var ethereumActions = _interopRequireWildcard(_ethereum);

var _fundraiser = __webpack_require__(/*! ../parsers/fundraiser */ "./app/parsers/fundraiser.js");

var fundraiserParser = _interopRequireWildcard(_fundraiser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fundraiserMiddleware = function fundraiserMiddleware(store) {
  var handleDeployment = function handleDeployment(next, action) {
    return next({
      type: 'FUNDRAISER_DEPLOYMENT',
      deployment: fundraiserParser.parseDeployment(action.data)
    });
  };

  var handleState = function handleState(next, action) {
    return next({
      type: 'FUNDRAISER_STATE',
      state: fundraiserParser.parseState(action.data)
    });
  };

  var handleParticipant = function handleParticipant(next, action) {
    return next({
      type: 'FUNDRAISER_PARTICIPANT',
      participant: fundraiserParser.parseParticipant(action.data)
    });
  };

  var handleEthereumCallData = function handleEthereumCallData(next, action) {
    var contractName = action.contractName;
    // only check for fundraiser data

    if (contractName !== 'fundraiser') {
      return next(action);
    }

    var method = action.method;

    switch (method) {
      case 'deployment':
        return handleDeployment(next, action);
      case 'state':
        return handleState(next, action);
      case 'participants':
        return handleParticipant(next, action);
      default:
        return next(action);
    }
  };

  var handleBalances = function handleBalances(next, action) {
    return next({
      type: 'FUNDRAISER_BALANCES',
      balances: fundraiserParser.parseBalances(action.data)
    });
  };

  var handleEthereumAllCallData = function handleEthereumAllCallData(next, action) {
    var contractName = action.contractName;
    // only check for fundraiser data

    if (contractName !== 'fundraiser') {
      return next(action);
    }

    var method = action.method;

    switch (method) {
      case 'balance':
        return handleBalances(next, action);
      default:
        return next(action);
    }
  };

  var handleEthereumUser = function handleEthereumUser(next, action) {
    var account = action.account;

    store.dispatch(ethereumActions.call({ contractName: 'fundraiser', method: 'participants', args: [account] }));
    store.dispatch(ethereumActions.allCall({ contractName: 'fundraiser', method: 'balance' }));
    return next(action);
  };

  var handleEthereumRefresh = function handleEthereumRefresh(next, action) {
    var state = store.getState();
    var primaryContractAddresses = state.ethereum.primaryContractAddresses;
    var contractAddresses = action.contractAddresses;

    if (contractAddresses.indexOf(primaryContractAddresses.fundraiser) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'fundraiser', method: 'deployment' }));
      store.dispatch(ethereumActions.call({ contractName: 'fundraiser', method: 'state' }));
    }
    return next(action);
  };

  var handleEthereumEvent = function handleEthereumEvent(next, action) {
    var contractName = action.contractName;
    // only check for fundraiser data

    if (contractName !== 'fundraiser') {
      return next(action);
    }

    var eventName = action.eventName;

    var type = 'FUNDRAISER_' + eventName;
    switch (eventName) {
      case 'BEGINNING':
        return next(_extends({}, action, { type: type, beginning: fundraiserParser.parseBeginning(action.values) }));
      case 'PARTICIPATION':
        return next(_extends({}, action, { type: type, participation: fundraiserParser.parseParticipation(action.values) }));
      case 'RAISE':
        return next(_extends({}, action, { type: type, raise: fundraiserParser.parseRaise(action.values) }));
      case 'REVELATION':
        return next(_extends({}, action, { type: type, revelation: fundraiserParser.parseRevelation(action.values) }));
      case 'SELECTION':
        return next(_extends({}, action, { type: type, selection: fundraiserParser.parseSelection(action.values) }));
      case 'WITHDRAWAL':
        return next(_extends({}, action, { type: type, withdrawal: fundraiserParser.parseWithdrawal(action.values) }));
      case 'CANCELLATION':
        return next(_extends({}, action, { type: type }));
      default:
        return next(action);
    }
  };

  return function (next) {
    return function (action) {
      var type = action.type;

      switch (type) {
        case 'ETHEREUM_EVENT':
          return handleEthereumEvent(next, action);
        case 'ETHEREUM_CALL_DATA':
          return handleEthereumCallData(next, action);
        case 'ETHEREUM_ALLCALL_DATA':
          return handleEthereumAllCallData(next, action);
        case 'ETHEREUM_USER':
          return handleEthereumUser(next, action);
        case 'ETHEREUM_REFRESH':
          return handleEthereumRefresh(next, action);
        default:
          return next(action);
      }
    };
  };
};

exports.default = fundraiserMiddleware;

/***/ }),

/***/ "./app/middleware/polling.js":
/*!***********************************!*\
  !*** ./app/middleware/polling.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ethereum = __webpack_require__(/*! ../actions/ethereum */ "./app/actions/ethereum.js");

var ethereumActions = _interopRequireWildcard(_ethereum);

var _polling = __webpack_require__(/*! ../parsers/polling */ "./app/parsers/polling.js");

var pollingParser = _interopRequireWildcard(_polling);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pollingMiddleware = function pollingMiddleware(store) {
  var handleMaxVoteCount = function handleMaxVoteCount(next, action) {
    return next({
      type: 'POLLING_MAX_VOTE_COUNT',
      maxVoteCount: pollingParser.parseMaxVoteCount(action.data)
    });
  };

  var handleCauses = function handleCauses(next, action) {
    var _pollingParser$parseC = pollingParser.parseCauses(action.data),
        causes = _pollingParser$parseC.causes,
        causesVoteCount = _pollingParser$parseC.causesVoteCount;

    return next({
      type: 'POLLING_CAUSES',
      causes: causes,
      causesVoteCount: causesVoteCount
    });
  };

  var handleVotes = function handleVotes(next, action) {
    var _pollingParser$parseV = pollingParser.parseVotes(action.data),
        votes = _pollingParser$parseV.votes,
        voteCount = _pollingParser$parseV.voteCount;

    return next({
      type: 'POLLING_VOTES',
      votes: votes,
      voteCount: voteCount
    });
  };

  var handleEthereumCallData = function handleEthereumCallData(next, action) {
    var contractName = action.contractName;
    // only check for polling data

    if (contractName !== 'polling') {
      return next(action);
    }

    var method = action.method;

    switch (method) {
      case 'maxVoteCount':
        return handleMaxVoteCount(next, action);
      case 'causes':
        return handleCauses(next, action);
      case 'votes':
        return handleVotes(next, action);
      default:
        return next(action);
    }
  };

  var handleEthereumUser = function handleEthereumUser(next, action) {
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'maxVoteCount' }));
    store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'votes' }));
    return next(action);
  };

  var handleEthereumRefresh = function handleEthereumRefresh(next, action) {
    var state = store.getState();
    var primaryContractAddresses = state.ethereum.primaryContractAddresses;
    var contractAddresses = action.contractAddresses;

    if (contractAddresses.indexOf(primaryContractAddresses.polling) > -1) {
      store.dispatch(ethereumActions.call({ contractName: 'polling', method: 'causes' }));
    }
    return next(action);
  };

  var handleEthereumEvent = function handleEthereumEvent(next, action) {
    var contractName = action.contractName;
    // only check for polling data

    if (contractName !== 'polling') {
      return next(action);
    }

    var eventName = action.eventName;

    var type = 'POLLING_' + eventName;
    switch (eventName) {
      case 'CASTINDEX':
        return next(_extends({}, action, { type: type, castIndex: pollingParser.parseCastIndex(action.values) }));
      case 'CASTNAME':
        return next(_extends({}, action, { type: type, castName: pollingParser.parseCastName(action.values) }));
      default:
        return next(action);
    }
  };

  return function (next) {
    return function (action) {
      var type = action.type;

      switch (type) {
        case 'ETHEREUM_EVENT':
          return handleEthereumEvent(next, action);
        case 'ETHEREUM_CALL_DATA':
          return handleEthereumCallData(next, action);
        case 'ETHEREUM_REFRESH':
          return handleEthereumRefresh(next, action);
        case 'ETHEREUM_USER':
          return handleEthereumUser(next, action);
        default:
          return next(action);
      }
    };
  };
};

exports.default = pollingMiddleware;

/***/ }),

/***/ "./app/parsers/fundraiser.js":
/*!***********************************!*\
  !*** ./app/parsers/fundraiser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBalances = exports.parseWithdrawal = exports.parseSelection = exports.parseRevelation = exports.parseRaise = exports.parseParticipation = exports.parseParticipant = exports.parseBeginning = exports.parseState = exports.parseDeployment = undefined;

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var _bytes = __webpack_require__(/*! ../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _messages = __webpack_require__(/*! @seedom-io/seedom-crypter/messages */ "@seedom-io/seedom-crypter/messages");

var messages = _interopRequireWildcard(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var epochToDate = function epochToDate(seconds) {
  return new Date(seconds * 1000);
};

var parseDeployment = function parseDeployment(deployment) {
  return {
    cause: String(deployment._cause),
    causeWallet: String(deployment._causeWallet),
    causeSplit: new _bignumber.BigNumber(deployment._causeSplit),
    participantSplit: new _bignumber.BigNumber(deployment._participantSplit),
    owner: String(deployment._owner),
    ownerWallet: String(deployment._ownerWallet),
    ownerSplit: new _bignumber.BigNumber(deployment._ownerSplit),
    ownerSecret: String(deployment._ownerSecret),
    valuePerEntry: new _bignumber.BigNumber(deployment._valuePerEntry),
    deployTime: epochToDate(deployment._deployTime),
    endTime: epochToDate(deployment._endTime),
    expireTime: epochToDate(deployment._expireTime),
    destructTime: epochToDate(deployment._destructTime)
  };
};

var parseState = function parseState(state) {
  return {
    causeSecret: String(state._causeSecret),
    causeMessage: String(messages.message(state._causeMessage)),
    causeWithdrawn: Boolean(state._causeWithdrawn),
    participant: String(state._participant),
    participantMessage: String(messages.message(state._participantMessage)),
    participantWithdrawn: Boolean(state._participantWithdrawn),
    ownerMessage: String(messages.message(state._ownerMessage)),
    ownerWithdrawn: Boolean(state._participantWithdrawn),
    cancelled: Boolean(state._cancelled),
    participants: new _bignumber.BigNumber(state._participants),
    entries: new _bignumber.BigNumber(state._entries)
  };
};

var parseBeginning = function parseBeginning(beginning) {
  return {
    causeSecret: String(beginning._causeSecret)
  };
};

var parseParticipant = function parseParticipant(participant) {
  return {
    entries: new _bignumber.BigNumber(participant._entries),
    message: String(messages.message(participant._message))
  };
};

var parseParticipation = function parseParticipation(participation) {
  return {
    participant: String(participation._participant),
    message: String(messages.message(participation._message)),
    entries: new _bignumber.BigNumber(participation._entries),
    refund: new _bignumber.BigNumber(participation._refund)
  };
};

var parseRaise = function parseRaise(raise) {
  return {
    participant: String(raise._participant),
    entries: new _bignumber.BigNumber(raise._entries),
    refund: new _bignumber.BigNumber(raise._refund)
  };
};

var parseRevelation = function parseRevelation(revelation) {
  return {
    causeMessage: String(messages.message(revelation._causeMessage))
  };
};

var parseSelection = function parseSelection(selection) {
  return {
    participant: String(selection._participant),
    participantMessage: String(messages.message(selection._participantMessage)),
    causeMessage: String(messages.message(selection._causeMessage)),
    ownerMessage: String(messages.message(selection._ownerMessage))
  };
};

var parseWithdrawal = function parseWithdrawal(withdrawal) {
  return {
    address: String(withdrawal._address)
  };
};

var parseBalances = function parseBalances(balances) {
  var finalBalances = {};
  for (var contractAddress in balances) {
    var balance = balances[contractAddress];
    // add balance entries of non-zero
    if (balance !== '0') {
      finalBalances[contractAddress] = new _bignumber.BigNumber(balance);
    }
  }
  return finalBalances;
};

exports.parseDeployment = parseDeployment;
exports.parseState = parseState;
exports.parseBeginning = parseBeginning;
exports.parseParticipant = parseParticipant;
exports.parseParticipation = parseParticipation;
exports.parseRaise = parseRaise;
exports.parseRevelation = parseRevelation;
exports.parseSelection = parseSelection;
exports.parseWithdrawal = parseWithdrawal;
exports.parseBalances = parseBalances;

/***/ }),

/***/ "./app/parsers/polling.js":
/*!********************************!*\
  !*** ./app/parsers/polling.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCastIndex = exports.parseCastName = exports.parseVotes = exports.parseCauses = exports.parseMaxVoteCount = undefined;

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var _bytes = __webpack_require__(/*! ../utils/bytes */ "./app/utils/bytes.js");

var bytes = _interopRequireWildcard(_bytes);

var _numbers = __webpack_require__(/*! ../utils/numbers */ "./app/utils/numbers.js");

var _messages = __webpack_require__(/*! @seedom-io/seedom-crypter/messages */ "@seedom-io/seedom-crypter/messages");

var messages = _interopRequireWildcard(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var parseMaxVoteCount = function parseMaxVoteCount(maxVoteCount) {
  return new _bignumber.BigNumber(maxVoteCount);
};

var parseCauses = function parseCauses(causes) {
  var causesVoteCount = (0, _numbers.zero)();
  var parsedCauses = [];
  for (var causeIndex = 0; causeIndex < causes._names.length; causeIndex += 1) {
    var voteCount = new _bignumber.BigNumber(causes._voteCounts[causeIndex]);
    var parsedCause = {
      index: causeIndex,
      name: String(messages.message(causes._names[causeIndex])),
      caster: String(causes._casters[causeIndex]),
      voteCount: voteCount
    };
    causesVoteCount = causesVoteCount.plus(voteCount);
    parsedCauses[causeIndex] = parsedCause;
  }
  return {
    causes: parsedCauses,
    causesVoteCount: causesVoteCount
  };
};

var parseVotes = function parseVotes(votes) {
  var voteCount = (0, _numbers.zero)();
  var parsedVotes = {};
  for (var voteIndex = 0; voteIndex < votes._causeIndexes.length; voteIndex += 1) {
    var causeIndex = votes._causeIndexes[voteIndex];
    var count = votes._counts[voteIndex];
    voteCount = voteCount.plus(count);
    if (causeIndex in parsedVotes) {
      parsedVotes[causeIndex] = parsedVotes[causeIndex].plus(count);
    } else {
      parsedVotes[causeIndex] = new _bignumber.BigNumber(count);
    }
  }
  return {
    votes: parsedVotes,
    voteCount: voteCount
  };
};

var parseCastName = function parseCastName(castName) {
  return {
    caster: String(castName._caster),
    causeIndex: new _bignumber.BigNumber(castName._causeIndex),
    causeName: String(messages.message(castName._causeName)),
    voteCount: new _bignumber.BigNumber(castName._voteCount)
  };
};

var parseCastIndex = function parseCastIndex(castIndex) {
  return {
    caster: String(castIndex._caster),
    causeIndex: new _bignumber.BigNumber(castIndex._causeIndex),
    voteCount: new _bignumber.BigNumber(castIndex._voteCount)
  };
};

exports.parseMaxVoteCount = parseMaxVoteCount;
exports.parseCauses = parseCauses;
exports.parseVotes = parseVotes;
exports.parseCastName = parseCastName;
exports.parseCastIndex = parseCastIndex;

/***/ }),

/***/ "./app/reducers/cause.js":
/*!*******************************!*\
  !*** ./app/reducers/cause.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getNewState = function getNewState(prevState) {
  return _extends({}, prevState);
};

var handleCause = function handleCause(prevState, action) {
  var newState = getNewState(prevState);
  newState.cause = action.cause;
  return newState;
};

var causeReducer = function causeReducer() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'CAUSE_CAUSE':
      return handleCause(prevState, action);
    default:
      return prevState;
  }
};

exports.default = causeReducer;

/***/ }),

/***/ "./app/reducers/ethereum.js":
/*!**********************************!*\
  !*** ./app/reducers/ethereum.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getNewState = function getNewState(prevState) {
  return _extends({}, prevState);
};

var handleEthereumSend = function handleEthereumSend(prevState) {
  var newState = getNewState(prevState);
  newState.isLoading = true;
  return newState;
};

var handleEthereumSendError = function handleEthereumSendError(prevState) {
  var newState = getNewState(prevState);
  newState.isLoading = false;
  return newState;
};

var ethereumReducer = function ethereumReducer() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'ETHEREUM_NETWORK':
      return _extends({}, prevState, { network: action.network });
    case 'ETHEREUM_ACCOUNT':
      return _extends({}, prevState, { account: action.account });
    case 'ETHEREUM_PRIMARY_CONTRACT_ADDRESSES':
      return _extends({}, prevState, { primaryContractAddresses: action.primaryContractAddresses });
    case 'ETHEREUM_SEND':
      return handleEthereumSend(prevState, action);
    case 'ETHEREUM_SEND_ERROR':
      return handleEthereumSendError(prevState);
    default:
      return prevState;
  }
};

exports.default = ethereumReducer;

/***/ }),

/***/ "./app/reducers/fundraiser.js":
/*!************************************!*\
  !*** ./app/reducers/fundraiser.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MAX_FEED_ITEMS = 20;

var getNewState = function getNewState(prevState) {
  return _extends({}, prevState);
};

var updateFeed = function updateFeed(feed, action) {
  var newFeed = feed ? feed.slice(0, MAX_FEED_ITEMS) : [];
  newFeed.unshift(action);
  return newFeed;
};

var handleDeployment = function handleDeployment(prevState, action) {
  var newState = getNewState(prevState);
  newState.deployment = action.deployment;
  return newState;
};

var handleState = function handleState(prevState, action) {
  var newState = getNewState(prevState);
  newState.state = action.state;
  return newState;
};

var handleParticipant = function handleParticipant(prevState, action) {
  var newState = getNewState(prevState);
  newState.participant = action.participant;
  return newState;
};

var handleBalances = function handleBalances(prevState, action) {
  var newState = getNewState(prevState);
  newState.balances = action.balances;
  return newState;
};

var handleBeginning = function handleBeginning(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var newState = getNewState(prevState);
  newState.state.causeSecret = action.beginning.causeSecret;
  return newState;
};

var handleParticipation = function handleParticipation(prevState, action) {
  var newState = getNewState(prevState);
  if (action.old) {
    newState.feed = updateFeed(newState.feed, action);
  } else {
    newState.state.participants = newState.state.participants.plus(1);
    newState.state.entries = newState.state.entries.plus(action.participation.entries);
    newState.feed = updateFeed(newState.feed, action);

    if (action.participation.participant === newState.account) {
      newState.isLoading = false;
      newState.participant.entries = action.participation.entries;
      newState.participant.message = action.participation.message;
    }
  }

  return newState;
};

var handleRaise = function handleRaise(prevState, action) {
  var newState = getNewState(prevState);
  if (action.old) {
    newState.feed = updateFeed(newState.feed, action);
  } else {
    newState.state.entries = newState.state.entries.plus(action.raise.entries);
    newState.feed = updateFeed(newState.feed, action);

    if (action.raise.participant === newState.account) {
      newState.isLoading = false;
      newState.participant.entries = newState.participant.entries.plus(action.raise.entries);
    }
  }

  return newState;
};

var handleRevelation = function handleRevelation(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var newState = getNewState(prevState);
  newState.state.causeMessage = action.revelation.causeMessage;
  return newState;
};

var handleSelection = function handleSelection(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var newState = getNewState(prevState);
  newState.state.participant = action.selection.participant;
  newState.state.participantMessage = action.selection.participantMessage;
  newState.state.causeMessage = action.selection.causeMessage;
  newState.state.ownerMessage = action.selection.ownerMessage;

  // update participant balance
  if (action.selection.participant === newState.account) {
    var deployment = newState.deployment,
        state = newState.state,
        primaryContractAddresses = newState.primaryContractAddresses;

    newState.balances[primaryContractAddresses.fundraiser] = state.entries.times(deployment.participantSplit).dividedBy(1000).times(deployment.valuePerEntry);
  }

  return newState;
};

var handleCancellation = function handleCancellation(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var newState = getNewState(prevState);
  newState.isLoading = false;
  newState.state.cancelled = true;

  // update our cancellation balance
  var deployment = newState.deployment,
      participant = newState.participant,
      primaryContractAddresses = newState.primaryContractAddresses;

  newState.balances[primaryContractAddresses.fundraiser] = participant.entries.times(deployment.valuePerEntry);

  return newState;
};

var handleWithdrawal = function handleWithdrawal(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var newState = getNewState(prevState);
  // set our balance to zero if we withdrew
  if (action.withdrawal.address === newState.account) {
    newState.isLoading = false;
    delete newState.balances[action.contractAddress];
  }
  return newState;
};

var fundraiserReducer = function fundraiserReducer() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'FUNDRAISER_DEPLOYMENT':
      return handleDeployment(prevState, action);
    case 'FUNDRAISER_STATE':
      return handleState(prevState, action);
    case 'FUNDRAISER_PARTICIPANT':
      return handleParticipant(prevState, action);
    case 'FUNDRAISER_BALANCES':
      return handleBalances(prevState, action);
    case 'FUNDRAISER_BEGINNING':
      return handleBeginning(prevState, action);
    case 'FUNDRAISER_PARTICIPATION':
      return handleParticipation(prevState, action);
    case 'FUNDRAISER_RAISE':
      return handleRaise(prevState, action);
    case 'FUNDRAISER_REVELATION':
      return handleRevelation(prevState, action);
    case 'FUNDRAISER_SELECTION':
      return handleSelection(prevState, action);
    case 'FUNDRAISER_CANCELLATION':
      return handleCancellation(prevState);
    case 'FUNDRAISER_WITHDRAWAL':
      return handleWithdrawal(prevState, action);
    default:
      return prevState;
  }
};

exports.default = fundraiserReducer;

/***/ }),

/***/ "./app/reducers/polling.js":
/*!*********************************!*\
  !*** ./app/reducers/polling.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var getNewState = function getNewState(prevState) {
  return _extends({}, prevState);
};

var handleMaxVoteCount = function handleMaxVoteCount(prevState, action) {
  var newState = getNewState(prevState);
  newState.maxVoteCount = action.maxVoteCount;
  return newState;
};

var handleCauses = function handleCauses(prevState, action) {
  var newState = getNewState(prevState);
  newState.causes = action.causes;
  newState.causesVoteCount = action.causesVoteCount;
  return newState;
};

var handleVotes = function handleVotes(prevState, action) {
  var newState = getNewState(prevState);
  newState.votes = action.votes;
  newState.voteCount = action.voteCount;
  return newState;
};

var handleCastName = function handleCastName(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var _action$castName = action.castName,
      caster = _action$castName.caster,
      causeIndex = _action$castName.causeIndex,
      causeName = _action$castName.causeName,
      voteCount = _action$castName.voteCount;


  var newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update total votes across all causes
  newState.causesVoteCount = newState.causesVoteCount.plus(voteCount);
  // add new cause
  newState.causes[causeIndex] = {
    index: causeIndex,
    name: causeName,
    caster: caster,
    voteCount: voteCount
  };

  // add our votes to our votes
  if (caster === newState.account) {
    newState.voteCount = newState.voteCount.plus(voteCount);
    newState.votes[causeIndex] = voteCount;
  }

  return newState;
};

var handleCastIndex = function handleCastIndex(prevState, action) {
  if (action.old) {
    return prevState;
  }

  var _action$castIndex = action.castIndex,
      caster = _action$castIndex.caster,
      causeIndex = _action$castIndex.causeIndex,
      voteCount = _action$castIndex.voteCount;


  var newState = getNewState(prevState);
  // update is loading
  newState.isLoading = false;
  // update total votes across all causes
  newState.causesVoteCount = newState.causesVoteCount.plus(voteCount);
  // update cause
  var cause = newState.causes[causeIndex];
  cause.voteCount = cause.voteCount.plus(voteCount);
  // update our vote
  if (caster === newState.account) {
    newState.voteCount = newState.voteCount.plus(voteCount);
    if (causeIndex in newState.votes) {
      newState.votes[causeIndex] = newState.votes[causeIndex].plus(voteCount);
    } else {
      newState.votes[causeIndex] = voteCount;
    }
  }

  return newState;
};

var handleFundraiserParticipation = function handleFundraiserParticipation(prevState, action) {
  if (action.old || action.participation.participant !== prevState.account) {
    return prevState;
  }

  var newState = getNewState(prevState);
  newState.maxVoteCount = new _bignumber.BigNumber(1);
  return newState;
};

var pollingReducer = function pollingReducer() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'POLLING_MAX_VOTE_COUNT':
      return handleMaxVoteCount(prevState, action);
    case 'POLLING_CAUSES':
      return handleCauses(prevState, action);
    case 'POLLING_VOTES':
      return handleVotes(prevState, action);
    case 'POLLING_CASTINDEX':
      return handleCastIndex(prevState, action);
    case 'POLLING_CASTNAME':
      return handleCastName(prevState, action);
    case 'FUNDRAISER_PARTICIPATION':
      return handleFundraiserParticipation(prevState, action);
    default:
      return prevState;
  }
};

exports.default = pollingReducer;

/***/ }),

/***/ "./app/render.js":
/*!***********************!*\
  !*** ./app/render.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactReduxToastr = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");

var _reactReduxToastr2 = _interopRequireDefault(_reactReduxToastr);

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = __webpack_require__(/*! history/createMemoryHistory */ "history/createMemoryHistory");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reduceReducers = __webpack_require__(/*! ./utils/reduceReducers */ "./app/utils/reduceReducers.js");

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _polling = __webpack_require__(/*! ./reducers/polling */ "./app/reducers/polling.js");

var _polling2 = _interopRequireDefault(_polling);

var _fundraiser = __webpack_require__(/*! ./reducers/fundraiser */ "./app/reducers/fundraiser.js");

var _fundraiser2 = _interopRequireDefault(_fundraiser);

var _ethereum = __webpack_require__(/*! ./reducers/ethereum */ "./app/reducers/ethereum.js");

var _ethereum2 = _interopRequireDefault(_ethereum);

var _cause = __webpack_require__(/*! ./reducers/cause */ "./app/reducers/cause.js");

var _cause2 = _interopRequireDefault(_cause);

var _polling3 = __webpack_require__(/*! ./middleware/polling */ "./app/middleware/polling.js");

var _polling4 = _interopRequireDefault(_polling3);

var _fundraiser3 = __webpack_require__(/*! ./middleware/fundraiser */ "./app/middleware/fundraiser.js");

var _fundraiser4 = _interopRequireDefault(_fundraiser3);

var _ethereum3 = __webpack_require__(/*! ./middleware/ethereum */ "./app/middleware/ethereum.js");

var _ethereum4 = _interopRequireDefault(_ethereum3);

var _cause3 = __webpack_require__(/*! ./middleware/cause */ "./app/middleware/cause.js");

var _cause4 = _interopRequireDefault(_cause3);

__webpack_require__(/*! ./sass/bulma.scss */ "./app/sass/bulma.scss");

var _head = __webpack_require__(/*! ./components/head */ "./app/components/head/index.js");

var _head2 = _interopRequireDefault(_head);

var _navbar = __webpack_require__(/*! ./components/navbar */ "./app/components/navbar/index.js");

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = __webpack_require__(/*! ./components/footer */ "./app/components/footer/index.js");

var _footer2 = _interopRequireDefault(_footer);

var _hype = __webpack_require__(/*! ./components/hype */ "./app/components/hype/index.js");

var _hype2 = _interopRequireDefault(_hype);

var _participate = __webpack_require__(/*! ./components/participate */ "./app/components/participate/index.js");

var _participate2 = _interopRequireDefault(_participate);

var _vote = __webpack_require__(/*! ./components/vote */ "./app/components/vote/index.js");

var _vote2 = _interopRequireDefault(_vote);

var _history = __webpack_require__(/*! ./components/history */ "./app/components/history/index.js");

var _history2 = _interopRequireDefault(_history);

var _help = __webpack_require__(/*! ./components/help */ "./app/components/help/index.js");

var _help2 = _interopRequireDefault(_help);

var _about = __webpack_require__(/*! ./components/about */ "./app/components/about/index.js");

var _about2 = _interopRequireDefault(_about);

var _contact = __webpack_require__(/*! ./components/contact */ "./app/components/contact/index.js");

var _contact2 = _interopRequireDefault(_contact);

var _pressRelease = __webpack_require__(/*! ./components/press-release */ "./app/components/press-release/index.js");

var _pressRelease2 = _interopRequireDefault(_pressRelease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = function reducers() {
  return (0, _redux.combineReducers)({
    ethereum: (0, _reduceReducers2.default)(_ethereum2.default, _fundraiser2.default, _polling2.default, _cause2.default),
    toastr: _reactReduxToastr.reducer,
    router: _reactRouterRedux.routerReducer
  });
};

var middlewares = function middlewares(history) {
  var values = [_ethereum4.default, _fundraiser4.default, _polling4.default, _cause4.default];

  if (history) {
    values.push((0, _reactRouterRedux.routerMiddleware)(history));
  }

  return (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, values));
};

var Routes = function Routes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _hype2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/participate', component: _participate2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/vote', component: _vote2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/history', component: _history2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/help', component: _help2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _contact2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/announce-beta-giveth', component: _pressRelease2.default })
  );
};

var Body = function Body() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactReduxToastr2.default, {
      timeOut: 4000,
      newestOnTop: false,
      preventDuplicates: true,
      position: 'top-center',
      transitionIn: 'fadeIn',
      transitionOut: 'fadeOut',
      progressBar: true
    }),
    _react2.default.createElement(_navbar2.default, null),
    _react2.default.createElement(Routes, null),
    _react2.default.createElement(_footer2.default, null)
  );
};

var Client = function Client(store, history) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store, suppressHydrationWarning: true },
    _react2.default.createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: history },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_head2.default, null),
        _react2.default.createElement(Body, null)
      )
    )
  );
};

var Server = function Server(store, history) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: history },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_head2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _hype2.default })
      )
    )
  );
};

var render = function render(request, state) {
  var history = request ? (0, _createMemoryHistory2.default)({ initialEntries: [request.url] }) : (0, _createBrowserHistory2.default)();

  var store = state ? (0, _redux.createStore)(reducers(), state, middlewares(history)) : (0, _redux.createStore)(reducers(), middlewares());

  var component = state ? Client(store, history) : Server(store, history);

  return {
    component: component,
    store: store
  };
};

exports.default = render;

/***/ }),

/***/ "./app/sass/bulma.scss":
/*!*****************************!*\
  !*** ./app/sass/bulma.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _expressCacheController = __webpack_require__(/*! express-cache-controller */ "express-cache-controller");

var _expressCacheController2 = _interopRequireDefault(_expressCacheController);

var _client = __webpack_require__(/*! ../webpack/client */ "./webpack/client.js");

var _client2 = _interopRequireDefault(_client);

var _render = __webpack_require__(/*! ./render */ "./app/render.js");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _clientConfig$output = _client2.default.output,
    publicPath = _clientConfig$output.publicPath,
    path = _clientConfig$output.path;


var renderFullPage = function renderFullPage(helmet, state) {
  return '\n    <!doctype html>\n    <html ' + helmet.htmlAttributes.toString() + '>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n      </head>\n      <body ' + helmet.bodyAttributes.toString() + '>\n        <div id="root"></div>\n        <script>\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__STATE__ = ' + JSON.stringify(state).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="' + publicPath + 'index.js"></script>\n      </body>\n    </html>\n  ';
};

var handleRender = function handleRender(request, response) {
  var rendered = (0, _render2.default)(request, null);
  (0, _server.renderToString)(rendered.component);
  var helmet = _reactHelmet.Helmet.renderStatic();
  var state = rendered.store.getState();
  response.send(renderFullPage(helmet, state));
};

var app = (0, _express2.default)();
app.use((0, _expressCacheController2.default)({
  public: true,
  maxAge: 3600 // 1h
}));
app.use(publicPath, _express2.default.static(path));
app.use(handleRender);
app.listen(3000);

/***/ }),

/***/ "./app/utils/badges.js":
/*!*****************************!*\
  !*** ./app/utils/badges.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getImageUrl = function getImageUrl(_ref) {
  var network = _ref.network,
      contract = _ref.contract,
      participant = _ref.participant;
  return "http://localhost:3000" + "/badges/" + network + "/" + contract + "/" + participant + ".png";
};

exports.getImageUrl = getImageUrl;

/***/ }),

/***/ "./app/utils/bytes.js":
/*!****************************!*\
  !*** ./app/utils/bytes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var zero32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
var zero20 = '0x0000000000000000000000000000000000000000';

var isZero32 = function isZero32(bytes) {
  return bytes === zero32;
};
var isZero20 = function isZero20(bytes) {
  return bytes === zero20;
};

var shorten = function shorten(bytes) {
  return bytes.substring(0, 10) + '...' + bytes.substring(bytes.length - 4);
};

exports.zero32 = zero32;
exports.zero20 = zero20;
exports.isZero32 = isZero32;
exports.isZero20 = isZero20;
exports.shorten = shorten;

/***/ }),

/***/ "./app/utils/dates.js":
/*!****************************!*\
  !*** ./app/utils/dates.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeDate = function localeDate(date) {
  return date.toLocaleString(undefined, { timeZoneName: 'short', month: 'numeric', day: 'numeric', hour: 'numeric' });
};

var localeDateTime = function localeDateTime(date) {
  return date.toLocaleString(undefined, { timeZoneName: 'short', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
};

exports.localeDate = localeDate;
exports.localeDateTime = localeDateTime;

/***/ }),

/***/ "./app/utils/etherscan.js":
/*!********************************!*\
  !*** ./app/utils/etherscan.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSubdomain = function getSubdomain(network) {
  return network === 'mainnet' ? 'www' : network;
};

var getAddressUrl = function getAddressUrl(network, address) {
  if (network === 'localhost') {
    return '';
  }
  return 'https://' + getSubdomain(network) + '.etherscan.io/address/' + address;
};

var getTransactionUrl = function getTransactionUrl(network, transactionHash) {
  if (network === 'localhost') {
    return '';
  }
  return 'https://' + getSubdomain(network) + '.etherscan.io/tx/' + transactionHash;
};

exports.getAddressUrl = getAddressUrl;
exports.getTransactionUrl = getTransactionUrl;

/***/ }),

/***/ "./app/utils/heatmap.js":
/*!******************************!*\
  !*** ./app/utils/heatmap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = undefined;

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var color = function color(value) {
  var h = new _bignumber.BigNumber(1.0).minus(value).times(240);
  return 'hsl(' + h.toFixed(5) + ', 100%, 50%)';
};

exports.color = color;

/***/ }),

/***/ "./app/utils/numbers.js":
/*!******************************!*\
  !*** ./app/utils/numbers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.localeDecimal = exports.localeNumber = exports.getEtherFromWei = undefined;

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var weiInEther = new _bignumber.BigNumber(1000000000000000000);

var getEtherFromWei = function getEtherFromWei(bigNumber) {
  return bigNumber.dividedBy(weiInEther);
};

var localeDecimal = function localeDecimal(bigNumber) {
  return bigNumber.toFormat(3);
};

var localeNumber = function localeNumber(bigNumber) {
  return bigNumber.toFormat(0);
};

var zero = function zero() {
  return new _bignumber.BigNumber(0);
};

exports.getEtherFromWei = getEtherFromWei;
exports.localeNumber = localeNumber;
exports.localeDecimal = localeDecimal;
exports.zero = zero;

/***/ }),

/***/ "./app/utils/reduceReducers.js":
/*!*************************************!*\
  !*** ./app/utils/reduceReducers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceReducers;
function reduceReducers() {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

/***/ }),

/***/ "./webpack/base.js":
/*!*************************!*\
  !*** ./webpack/base.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.png', '.jpg', '.gif', '.svg', '.woff', '.woff2', '.eot', '.ttf', '.otf']
  }
};

/***/ }),

/***/ "./webpack/client.js":
/*!***************************!*\
  !*** ./webpack/client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "path");
var merge = __webpack_require__(/*! webpack-merge */ "webpack-merge");
var base = __webpack_require__(/*! ./base.js */ "./webpack/base.js");

var cwd = process.cwd();
var nodeModules = path.resolve(cwd, 'node_modules');

module.exports = merge(base, {
  name: 'client',
  target: 'web',
  entry: path.resolve(cwd, 'app/client.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(cwd, 'dist/client'),
    publicPath: '/static/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: nodeModules,
      use: ['babel-loader']
    }, {
      test: /\.scss$/,
      exclude: nodeModules,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: nodeModules,
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      exclude: nodeModules,
      loader: ['file-loader']
    }]
  }
});

/***/ }),

/***/ "@seedom-io/seedom-crypter/messages":
/*!*****************************************************!*\
  !*** external "@seedom-io/seedom-crypter/messages" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@seedom-io/seedom-crypter/messages");

/***/ }),

/***/ "@seedom-io/seedom-resolver/causes":
/*!****************************************************!*\
  !*** external "@seedom-io/seedom-resolver/causes" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@seedom-io/seedom-resolver/causes");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-cache-controller":
/*!*******************************************!*\
  !*** external "express-cache-controller" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-cache-controller");

/***/ }),

/***/ "history/createBrowserHistory":
/*!***********************************************!*\
  !*** external "history/createBrowserHistory" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),

/***/ "history/createMemoryHistory":
/*!**********************************************!*\
  !*** external "history/createMemoryHistory" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-toastr":
/*!*************************************!*\
  !*** external "react-redux-toastr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "scroll-to-element":
/*!************************************!*\
  !*** external "scroll-to-element" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scroll-to-element");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map