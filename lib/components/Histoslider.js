"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _d3Scale = require("d3-scale");

var _Histogram = _interopRequireDefault(require("./Histogram"));

var _Slider = _interopRequireDefault(require("./Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Histoslider = /*#__PURE__*/function (_Component) {
  _inherits(Histoslider, _Component);

  var _super = _createSuper(Histoslider);

  function Histoslider() {
    var _this;

    _classCallCheck(this, Histoslider);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "dragChange", function (dragging) {
      _this.setState({
        dragging: dragging
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (selection) {
      var _this$props = _this.props,
          data = _this$props.data,
          onChange = _this$props.onChange;
      var sortedData = data.sort(function (a, b) {
        return +a.x0 - +b.x0;
      });
      var extent = [(0, _d3Array.min)(sortedData, function (_ref) {
        var x0 = _ref.x0;
        return +x0;
      }), (0, _d3Array.max)(sortedData, function (_ref2) {
        var x = _ref2.x;
        return +x;
      })];
      onChange(selection.map(function (d) {
        return Math.max(extent[0], Math.min(extent[1], +d));
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.props.onChange(null);
    });

    _this.state = {
      dragging: false
    };
    return _this;
  }

  _createClass(Histoslider, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          data = _this$props2.data,
          width = _this$props2.width,
          height = _this$props2.height,
          padding = _this$props2.padding,
          sliderHeight = _this$props2.sliderHeight,
          disableHistogram = _this$props2.disableHistogram;
      var innerHeight = height - padding * 2;
      var innerWidth = width - padding * 2;
      var histogramHeight = innerHeight - sliderHeight;
      var sortedData = data.sort(function (a, b) {
        return +a.x0 - +b.x0;
      });
      var extent = [(0, _d3Array.min)(sortedData, function (_ref3) {
        var x0 = _ref3.x0;
        return +x0;
      }), (0, _d3Array.max)(sortedData, function (_ref4) {
        var x = _ref4.x;
        return +x;
      })];
      var maxValue = (0, _d3Array.max)(sortedData, function (_ref5) {
        var y = _ref5.y;
        return +y;
      });
      var scale = (0, _d3Scale.scaleLinear)().domain(extent).range([0, innerWidth]);
      scale.clamp(true);
      var selection = this.props.selection || extent;
      var overrides = {
        selection: selection,
        data: sortedData,
        scale: scale,
        max: maxValue,
        dragChange: this.dragChange,
        onChange: this.onChange,
        reset: this.reset,
        width: innerWidth,
        dragging: this.state.dragging
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: Object.assign({}, style, {
          width: width,
          padding: padding,
          boxSizing: "border-box",
          position: "relative"
        }),
        className: "Histoslider Histoslider--wrapper"
      }, !disableHistogram && /*#__PURE__*/_react["default"].createElement(_Histogram["default"], Object.assign({}, this.props, overrides, {
        height: histogramHeight
      })), /*#__PURE__*/_react["default"].createElement(_Slider["default"], Object.assign({}, this.props, overrides, {
        height: sliderHeight
      })));
    }
  }]);

  return Histoslider;
}(_react.Component);

Histoslider.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x0: _propTypes["default"].number,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  selectedColor: _propTypes["default"].string,
  unselectedColor: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  selection: _propTypes["default"].arrayOf(_propTypes["default"].number),
  barStyle: _propTypes["default"].object,
  barBorderRadius: _propTypes["default"].number,
  barPadding: _propTypes["default"].number,
  histogramStyle: _propTypes["default"].object,
  sliderStyle: _propTypes["default"].object,
  showOnDrag: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  handleLabelFormat: _propTypes["default"].string,
  formatLabelFunction: _propTypes["default"].func,
  disableHistogram: _propTypes["default"].bool,
  padding: _propTypes["default"].number,
  sliderHeight: _propTypes["default"].number
};
Histoslider.defaultProps = {
  selectedColor: "#0074D9",
  unselectedColor: "#DDDDDD",
  showOnDrag: false,
  width: 400,
  height: 200,
  barBorderRadius: 2,
  barPadding: 3,
  padding: 20,
  sliderHeight: 25,
  handleLabelFormat: "0.3P",
  formatLabelFunction: undefined
};
var _default = Histoslider;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=Histoslider.js.map