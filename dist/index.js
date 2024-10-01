"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var onClose = _ref.onClose,
    open = _ref.open,
    title = _ref.title,
    textContent = _ref.textContent;
  return open ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "custom-modal-title"
  }, title, " "), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "custom-close",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-modal-body"
  }, /*#__PURE__*/_react["default"].createElement("p", null, textContent)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "custom-btn custom-btn-secondary",
    onClick: onClose
  }, "Close")))) : null;
}
var _default = exports["default"] = Modal;