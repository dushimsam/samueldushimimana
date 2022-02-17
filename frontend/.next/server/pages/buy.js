(function() {
var exports = {};
exports.id = "pages/buy";
exports.ids = ["pages/buy"];
exports.modules = {

/***/ "./components/buy/buy-form.js":
/*!************************************!*\
  !*** ./components/buy/buy-form.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Login.module.scss */ "./styles/Login.module.scss");
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\components\\buy\\buy-form.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Form() {
  const [form, setForm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    token: ""
  });

  const handleFormChange = property => event => {
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [property]: event.target.value
    }));
  };

  const request = () => {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: `${(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sectionOne)} container-fluid`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
              children: "ENTER THE BOUGHT TOKEN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: " 02145978 ",
                onChange: handleFormChange("token"),
                className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 34
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
              onClick: () => request(),
              children: "BUY NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./pages/buy.js":
/*!**********************!*\
  !*** ./pages/buy.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_buy_buy_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/buy/buy-form */ "./components/buy/buy-form.js");


var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\pages\\buy.js";


const BuyElectricity = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buy_buy_form__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (BuyElectricity);

/***/ }),

/***/ "./styles/Login.module.scss":
/*!**********************************!*\
  !*** ./styles/Login.module.scss ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"sectionOne": "Login_sectionOne__1ejbG",
	"formContainer": "Login_formContainer__AgnMJ",
	"title": "Login_title__2z7zT",
	"subtitle": "Login_subtitle__bjmvh",
	"content": "Login_content__1DDGq",
	"warn": "Login_warn__1gX2K",
	"input": "Login_input__3lw3T",
	"button": "Login_button__1Lhkh"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/buy.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vLi9jb21wb25lbnRzL2J1eS9idXktZm9ybS5qcyIsIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vLi9wYWdlcy9idXkuanMiLCJ3ZWJwYWNrOi8vbWNzLWFwcGxpY2F0aW9uLy4vc3R5bGVzL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL21jcy1hcHBsaWNhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWNzLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9ybSIsImZvcm0iLCJzZXRGb3JtIiwiUmVhY3QiLCJ0b2tlbiIsImhhbmRsZUZvcm1DaGFuZ2UiLCJwcm9wZXJ0eSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1ZXN0Iiwic3R5bGVzIiwiQnV5RWxlY3RyaWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLFNBQVNBLElBQVQsR0FBZ0I7QUFFbkIsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLHFEQUFBLENBQWU7QUFDbkNDLFNBQUssRUFBRTtBQUQ0QixHQUFmLENBQXhCOztBQUlBLFFBQU1DLGdCQUFnQixHQUFJQyxRQUFELElBQWVDLEtBQUQsSUFBVztBQUM5Q0wsV0FBTyxpQ0FBS0QsSUFBTDtBQUFXLE9BQUNLLFFBQUQsR0FBWUMsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXBDLE9BQVA7QUFDSCxHQUZEOztBQUtBLFFBQU1DLE9BQU8sR0FBRyxNQUFNLENBRXJCLENBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFTLGVBQVMsRUFBRyxHQUFFQyw2RUFBa0Isa0JBQXpDO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBRUEsd0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBS0k7QUFBQSxxQ0FBSztBQUFPLDJCQUFXLEVBQUMsWUFBbkI7QUFBZ0Msd0JBQVEsRUFBRU4sZ0JBQWdCLENBQUMsT0FBRCxDQUExRDtBQUNPLHlCQUFTLEVBQUVNLHdFQURsQjtBQUNnQyxvQkFBSSxFQUFDO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixlQVFJO0FBQVEsdUJBQVMsRUFBRUEseUVBQW5CO0FBQWtDLHFCQUFPLEVBQUUsTUFBTUQsT0FBTyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7QUFFRCwrREFBZVYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRUEsTUFBT1ksY0FBYyxHQUFDLE1BQUk7QUFDdkIsc0JBQ0k7QUFBQSwyQkFBRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUYsbUJBREo7QUFHRixDQUpEOztBQU1BLCtEQUFlQSxjQUFmLEU7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9idXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICB0b2tlbjogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChwcm9wZXJ0eSkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybSh7Li4uZm9ybSwgW3Byb3BlcnR5XTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uT25lfSBjb250YWluZXItZmx1aWRgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVOVEVSIFRIRSBCT1VHSFQgVE9LRU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCBwbGFjZWhvbGRlcj1cIiAwMjE0NTk3OCBcIiBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZShcInRva2VuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiByZXF1ZXN0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJVWSBOT1dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0iLCJpbXBvcnQgQnV5Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXkvYnV5LWZvcm1cIlxyXG5cclxuY29uc3QgIEJ1eUVsZWN0cmljaXR5PSgpPT57XHJcbiAgIHJldHVybihcclxuICAgICAgIDw+PEJ1eUZvcm0vPjwvPiAgICAgXHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV5RWxlY3RyaWNpdHk7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VjdGlvbk9uZVwiOiBcIkxvZ2luX3NlY3Rpb25PbmVfXzFlamJHXCIsXG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkxvZ2luX2Zvcm1Db250YWluZXJfX0Fnbk1KXCIsXG5cdFwidGl0bGVcIjogXCJMb2dpbl90aXRsZV9fMno3elRcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkxvZ2luX3N1YnRpdGxlX19iam12aFwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dpbl9jb250ZW50X18xRERHcVwiLFxuXHRcIndhcm5cIjogXCJMb2dpbl93YXJuX18xZ1gyS1wiLFxuXHRcImlucHV0XCI6IFwiTG9naW5faW5wdXRfXzNsdzNUXCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW5fYnV0dG9uX18xTGhraFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==