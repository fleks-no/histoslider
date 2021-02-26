"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stressTestData = function stressTestData(n) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Array.from(Array(n)).map(function (d, i) {
    return {
      x0: (i + offset) * multiplier,
      x: (i + 1 + offset) * multiplier,
      y: (i % 5 + 1) * 10
    };
  });
};

var buckets = [{
  x0: 0,
  x: 1,
  y: 8
}, {
  x0: 1,
  x: 2,
  y: 2
}, {
  x0: 2,
  x: 3,
  y: 0
}, {
  x0: 3,
  x: 4,
  y: 2
}];
var dateTimeData = [{
  x0: new Date('2020-01-01').valueOf(),
  x: new Date('2020-01-30').valueOf(),
  y: 8
}, {
  x0: new Date('2020-02-01').valueOf(),
  x: new Date('2020-02-28').valueOf(),
  y: 2
}, {
  x0: new Date('2020-03-01').valueOf(),
  x: new Date('2020-03-30').valueOf(),
  y: 0
}, {
  x0: new Date('2020-04-01').valueOf(),
  x: new Date('2020-04-30').valueOf(),
  y: 2
}]; // Stateful container for testing interaction

var HistosliderContainer = /*#__PURE__*/function (_Component) {
  _inherits(HistosliderContainer, _Component);

  var _super = _createSuper(HistosliderContainer);

  function HistosliderContainer() {
    var _this;

    _classCallCheck(this, HistosliderContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selection: null
    });

    _defineProperty(_assertThisInitialized(_this), "setSelection", function (selection) {
      (0, _addonActions.action)("setSelection");

      _this.setState({
        selection: selection
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/_react["default"].createElement(_.Histoslider // An array of data to show on the slider
      , _extends({
        data: buckets // A function to handle a change in the selection
        ,
        selection: _this.state.selection,
        onChange: _this.setSelection
      }, _this.props));
    });

    return _this;
  }

  return HistosliderContainer;
}(_react.Component);

(0, _react2.storiesOf)("Histogram", module);
(0, _react2.storiesOf)("Slider", module);
(0, _react2.storiesOf)("Histoslider", module).add("Open", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, null);
}).add("Show on drag", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    showOnDrag: true
  });
}).add("Disable histogram", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    disableHistogram: true
  });
}).add("More data", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    data: stressTestData(50),
    width: 800
  });
}).add("Non zero start", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    data: stressTestData(200, 2000, 10),
    width: 800
  });
}).add("Stepping in lots of 100", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    keyboardStep: 100,
    data: stressTestData(20, 1, 10),
    width: 800
  });
}).add("No labels", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    showLabels: false
  });
}).add("Date time data", function () {
  return /*#__PURE__*/_react["default"].createElement(HistosliderContainer, {
    data: dateTimeData,
    formatLabelFunction: function formatLabelFunction(value) {
      var date = new Date(value);
      var dtf = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      });

      var _dtf$formatToParts = dtf.formatToParts(date),
          _dtf$formatToParts2 = _slicedToArray(_dtf$formatToParts, 5),
          mo = _dtf$formatToParts2[0].value,
          da = _dtf$formatToParts2[2].value,
          ye = _dtf$formatToParts2[4].value;

      return "".concat(da, "-").concat(mo, "-").concat(ye);
    }
  });
});
//# sourceMappingURL=index.js.map