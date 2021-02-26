"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMotion = require("@serprex/react-motion");

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

var Histogram = /*#__PURE__*/function (_Component) {
  _inherits(Histogram, _Component);

  var _super = _createSuper(Histogram);

  function Histogram() {
    _classCallCheck(this, Histogram);

    return _super.apply(this, arguments);
  }

  _createClass(Histogram, [{
    key: "selectBucket",
    value: function selectBucket(bucket) {
      this.props.onChange([bucket.x0, bucket.x]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          height = _this$props.height,
          data = _this$props.data,
          histogramStyle = _this$props.histogramStyle,
          showOnDrag = _this$props.showOnDrag,
          selection = _this$props.selection,
          reset = _this$props.reset,
          selectedColor = _this$props.selectedColor,
          unselectedColor = _this$props.unselectedColor,
          scale = _this$props.scale,
          barBorderRadius = _this$props.barBorderRadius,
          barStyle = _this$props.barStyle,
          padding = _this$props.padding,
          barPadding = _this$props.barPadding,
          width = _this$props.width,
          max = _this$props.max,
          dragging = _this$props.dragging;
      var selectionSorted = Array.from(selection).sort(function (a, b) {
        return +a - +b;
      });
      var showHistogramPredicate = showOnDrag ? dragging ? true : false : true;
      var h = showHistogramPredicate ? height : 0;
      var o = showHistogramPredicate ? 1 : 0;
      return /*#__PURE__*/_react["default"].createElement(_reactMotion.Motion, {
        style: {
          height: (0, _reactMotion.spring)(h),
          opacity: (0, _reactMotion.spring)(o)
        }
      }, function (s) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: Object.assign({}, s, {
            zIndex: 0,
            overflow: "hidden",
            position: showOnDrag && "absolute",
            bottom: showOnDrag && "calc(100% - ".concat(padding, "px)")
          })
        }, /*#__PURE__*/_react["default"].createElement("svg", {
          style: Object.assign({
            display: "block",
            backgroundColor: "white"
          }, histogramStyle),
          width: width,
          height: height
        }, /*#__PURE__*/_react["default"].createElement("g", {
          transform: "translate(0, ".concat(height, ")")
        }, /*#__PURE__*/_react["default"].createElement("g", {
          transform: "scale(1,-1)"
        }, data.map(function (bucket, i) {
          var opacity = 0;

          if (selectionSorted[0] > bucket.x || selectionSorted[1] < bucket.x0) {
            opacity = 0;
          } else if (selectionSorted[0] <= bucket.x0 && selectionSorted[1] >= bucket.x) {
            // Entire block is covered
            opacity = 1;
          } else if (selectionSorted[0] > bucket.x0 && selectionSorted[1] > bucket.x) {
            opacity = 1 - (selectionSorted[0] - bucket.x0) / (bucket.x - bucket.x0); // Some of left block is covered
          } else if (selectionSorted[1] < bucket.x && selectionSorted[0] < bucket.x0) {
            // Some of right block is covered
            opacity = (selectionSorted[1] - bucket.x0) / (bucket.x - bucket.x0);
          } else {
            // Parital match
            opacity = (selectionSorted[1] - selectionSorted[0]) / (bucket.x - bucket.x0);
          }

          return /*#__PURE__*/_react["default"].createElement("g", {
            key: i,
            transform: "translate(".concat(scale(bucket.x0) + barPadding / 2, " 0)")
          }, /*#__PURE__*/_react["default"].createElement("rect", {
            fill: unselectedColor,
            width: Math.max(1, scale(bucket.x) - scale(bucket.x0) - barPadding),
            height: bucket.y / max * height,
            rx: barBorderRadius,
            ry: barBorderRadius,
            x: 0
          }), /*#__PURE__*/_react["default"].createElement("rect", {
            fill: selectedColor,
            onClick: _this.selectBucket.bind(_this, bucket),
            onDoubleClick: reset.bind(_this),
            style: Object.assign({
              opacity: opacity,
              cursor: "pointer"
            }, barStyle),
            width: Math.max(1, scale(bucket.x) - scale(bucket.x0) - barPadding),
            height: bucket.y / max * height,
            rx: barBorderRadius,
            ry: barBorderRadius,
            x: 0
          }));
        })))));
      });
    }
  }]);

  return Histogram;
}(_react.Component);

Histogram.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x0: _propTypes["default"].number,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  })).isRequired,
  selection: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  barBorderRadius: _propTypes["default"].number,
  bucketSize: _propTypes["default"].number,
  width: _propTypes["default"].number,
  innerWidth: _propTypes["default"].number,
  height: _propTypes["default"].number,
  showOnDrag: _propTypes["default"].bool,
  reset: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  histogramStyle: _propTypes["default"].object,
  selectedColor: _propTypes["default"].string,
  unselectedColor: _propTypes["default"].string,
  scale: _propTypes["default"].func,
  barStyle: _propTypes["default"].object,
  padding: _propTypes["default"].number,
  barPadding: _propTypes["default"].number,
  max: _propTypes["default"].number,
  dragging: _propTypes["default"].bool
};
Histogram.defaultProps = {
  histogramPadding: 1
};
var _default = Histogram;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=Histogram.js.map