"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Table(_ref) {
  let {
    children,
    style,
    widths,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, rest, {
    style: style
  }), _react.default.Children.map(children, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      widths: widths !== null && widths !== void 0 && widths.length ? widths : []
    });
  }));
}
var _default = Table;
exports.default = _default;
//# sourceMappingURL=table.js.map