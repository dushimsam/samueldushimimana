(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Login.module.scss */ "./styles/Login.module.scss");
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Form() {
  const [form, setForm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    amount: "",
    meter: ""
  });

  const handleFormChange = property => event => {
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [property]: event.target.value
    }));
  };

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const request = () => {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: `${(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionOne)} container-fluid`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().formContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
              onClick: () => router.push('/request'),
              children: "REQUEST NEW METERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
              onClick: () => router.push('/buy'),
              children: "BUY  ELECTRICITY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
              onClick: () => router.push('/account-status'),
              children: "VIEW ACCOUNT STATUS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vLi9zdHlsZXMvTG9naW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbWNzLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL21jcy1hcHBsaWNhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZvcm0iLCJmb3JtIiwic2V0Rm9ybSIsIlJlYWN0IiwiYW1vdW50IiwibWV0ZXIiLCJoYW5kbGVGb3JtQ2hhbmdlIiwicHJvcGVydHkiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVxdWVzdCIsInN0eWxlcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxJQUFULEdBQWdCO0FBRW5CLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyxxREFBQSxDQUFlO0FBQ25DQyxVQUFNLEVBQUUsRUFEMkI7QUFFbkNDLFNBQUssRUFBRTtBQUY0QixHQUFmLENBQXhCOztBQUtBLFFBQU1DLGdCQUFnQixHQUFJQyxRQUFELElBQWVDLEtBQUQsSUFBVztBQUM5Q04sV0FBTyxpQ0FBS0QsSUFBTDtBQUFXLE9BQUNNLFFBQUQsR0FBWUMsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXBDLE9BQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU0sQ0FFckIsQ0FGRDs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQVMsZUFBUyxFQUFHLEdBQUVDLDZFQUFrQixrQkFBekM7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRUEsZ0ZBQWhCO0FBQUEsb0NBRUk7QUFBUSx1QkFBUyxFQUFFQSx5RUFBbkI7QUFBa0MscUJBQU8sRUFBRSxNQUFNSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxVQUFaLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBTUk7QUFBUSx1QkFBUyxFQUFFRCx5RUFBbkI7QUFBa0MscUJBQU8sRUFBRSxNQUFNSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxNQUFaLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KLGVBVUk7QUFBUSx1QkFBUyxFQUFFRCx5RUFBbkI7QUFBa0MscUJBQU8sRUFBRSxNQUFNSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxpQkFBWixDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7QUFFRCwrREFBZWYsSUFBZixFOzs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTG9naW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgbWV0ZXI6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKHByb3BlcnR5KSA9PiAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRGb3JtKHsuLi5mb3JtLCBbcHJvcGVydHldOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25PbmV9IGNvbnRhaW5lci1mbHVpZGB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcmVxdWVzdCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRVFVRVNUIE5FVyBNRVRFUlNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2J1eScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCVVkgIEVMRUNUUklDSVRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9hY2NvdW50LXN0YXR1cycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWSUVXIEFDQ09VTlQgU1RBVFVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VjdGlvbk9uZVwiOiBcIkxvZ2luX3NlY3Rpb25PbmVfXzFlamJHXCIsXG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkxvZ2luX2Zvcm1Db250YWluZXJfX0Fnbk1KXCIsXG5cdFwidGl0bGVcIjogXCJMb2dpbl90aXRsZV9fMno3elRcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkxvZ2luX3N1YnRpdGxlX19iam12aFwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dpbl9jb250ZW50X18xRERHcVwiLFxuXHRcIndhcm5cIjogXCJMb2dpbl93YXJuX18xZ1gyS1wiLFxuXHRcImlucHV0XCI6IFwiTG9naW5faW5wdXRfXzNsdzNUXCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW5fYnV0dG9uX18xTGhraFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=