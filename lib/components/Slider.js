"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.mapToKeyCode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Format = require("d3-format");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleStyle = {
  cursor: "move",
  userSekect: "none",
  MozUserSelect: "none",
  KhtmlUserSelect: "none",
  WebkitUserSelect: "none",
  OUserSelect: "none"
}; // Map keycodes to positive or negative values

var mapToKeyCode = function mapToKeyCode(code) {
  var codes = {
    37: -1,
    38: 1,
    39: 1,
    40: -1
  };
  return codes[code] || null;
};

exports.mapToKeyCode = mapToKeyCode;

var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "dragStart", function (index, e) {
      e.stopPropagation();

      if (!_this.state.dragging) {
        _this.setState({
          dragging: true,
          dragIndex: index,
          dragStartX: e.nativeEvent.offsetX
        }, function () {
          _this.props.dragChange(true);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnd", function (e) {
      e.stopPropagation();

      _this.setState({
        dragging: false,
        dragIndex: null,
        dragStartX: null
      }, function () {
        _this.props.dragChange(false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dragFromSVG", function (e) {
      if (!_this.state.dragging) {
        var selection = _toConsumableArray(_this.props.selection);

        var selected = _this.props.scale.invert(e.nativeEvent.offsetX);

        var dragIndex;

        if (Math.abs(selected - selection[0]) > Math.abs(selected - selection[1])) {
          selection[1] = selected;
          dragIndex = 0;
        } else {
          selection[0] = selected;
          dragIndex = 1;
        }

        _this.props.onChange(selection);

        _this.setState({
          dragging: true,
          dragIndex: dragIndex
        }, function () {
          _this.props.dragChange(true);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseMove", function (e) {
      if (_this.state.dragging) {
        var selection = _toConsumableArray(_this.props.selection);

        selection[_this.state.dragIndex] = _this.props.scale.invert(e.nativeEvent.offsetX);

        _this.props.onChange(selection);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keyDown", function (index, e) {
      var direction = mapToKeyCode(e.keyCode);
      var keyboardStep = _this.props.keyboardStep;

      var selection = _toConsumableArray(_this.props.selection);

      selection[index] = Math.round(selection[index] + direction * keyboardStep);

      _this.props.onChange(selection);
    });

    _this.state = {
      dragging: false,
      dragStartX: null
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("mouseup", this.dragEnd, false);
      window.addEventListener("touchend", this.dragEnd, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("mouseup", this.dragEnd, false);
      window.removeEventListener("touchend", this.dragEnd, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selection = _this$props.selection,
          scale = _this$props.scale,
          handleLabelFormat = _this$props.handleLabelFormat,
          formatLabelFunction = _this$props.formatLabelFunction,
          width = _this$props.width,
          height = _this$props.height,
          reset = _this$props.reset,
          selectedColor = _this$props.selectedColor,
          unselectedColor = _this$props.unselectedColor,
          sliderStyle = _this$props.sliderStyle,
          showLabels = _this$props.showLabels;
      var selectionWidth = Math.abs(scale(selection[1]) - scale(selection[0]));
      var selectionSorted = Array.from(selection).sort(function (a, b) {
        return +a - +b;
      });
      var defaultLabelFormatFunction = (0, _d3Format.format)(handleLabelFormat);
      var f = formatLabelFunction || defaultLabelFormatFunction;
      return /*#__PURE__*/_react["default"].createElement("svg", {
        style: _objectSpread(_objectSpread({}, sliderStyle), {}, {
          touchAction: "none"
        }),
        height: height,
        width: width,
        onDoubleClick: reset,
        onPointerMove: this.mouseMove
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        height: 4,
        fill: unselectedColor,
        x: 0,
        y: 10,
        width: width
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        height: 4,
        fill: selectedColor,
        x: scale(selectionSorted[0]),
        y: 10,
        width: selectionWidth
      }), selection.map(function (m, i) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          tabIndex: 0,
          onKeyDown: _this2.keyDown.bind(_this2, i),
          transform: "translate(".concat(_this2.props.scale(m), ", 0)"),
          key: "handle-".concat(i),
          style: {
            outline: "none"
          }
        }, /*#__PURE__*/_react["default"].createElement("circle", {
          style: handleStyle,
          r: 10,
          cx: 0,
          cy: 12.5,
          fill: "#ddd",
          strokeWidth: "1"
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          style: handleStyle,
          onPointerDown: _this2.dragStart.bind(_this2, i),
          r: 9,
          cx: 0,
          cy: 12,
          fill: "white",
          stroke: "#ccc",
          strokeWidth: "1"
        }), showLabels ? /*#__PURE__*/_react["default"].createElement("text", {
          style: handleStyle,
          textAnchor: "middle",
          x: 0,
          y: 36,
          fill: "#666",
          fontSize: 12
        }, f(m)) : null);
      }));
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x0: _propTypes["default"].number,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })).isRequired,
  selection: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,
  innerWidth: _propTypes["default"].number,
  padding: _propTypes["default"].number,
  bucketSize: _propTypes["default"].number,
  selectionColor: _propTypes["default"].string,
  histogramPadding: _propTypes["default"].number,
  scale: _propTypes["default"].func,
  reset: _propTypes["default"].func,
  keyboardStep: _propTypes["default"].number,
  dragChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  handleLabelFormat: _propTypes["default"].string,
  formatLabelFunction: _propTypes["default"].func,
  sliderStyle: _propTypes["default"].object,
  showLabels: _propTypes["default"].bool,
  labelStyle: _propTypes["default"].object,
  selectedColor: _propTypes["default"].string,
  unselectedColor: _propTypes["default"].string
};
Slider.defaultProps = {
  sliderStyle: {
    display: "block",
    paddingBottom: "8px",
    zIndex: 6,
    overflow: "visible"
  },
  keyboardStep: 1,
  showLabels: true
};
var _default = Slider;
exports["default"] = _default;
//# sourceMappingURL=Slider.js.map