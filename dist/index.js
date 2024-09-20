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
    open = _ref.open;
  return open ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Modale"), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal show"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal-dialog"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    "class": "modal-title"
  }, "Modal title"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "class": "close",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal-body"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Employee Created!")), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    "class": "btn btn-secondary",
    onClick: onClose
  }, "Close")))))) : null;
}
var _default = exports["default"] = Modal;