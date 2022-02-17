(function() {
var exports = {};
exports.id = "pages/request";
exports.ids = ["pages/request"];
exports.modules = {

/***/ "./components/request/request-form.js":
/*!********************************************!*\
  !*** ./components/request/request-form.js ***!
  \********************************************/
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

var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\components\\request\\request-form.js";

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
              children: "First, enter your meter Number followed by electricity amount."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subtitle),
              children: "refer to that number written on your cash power."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "METER NUMBER eg: 005454",
                onChange: handleFormChange("meter"),
                className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 34
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "AMOUNT OF MONEY eg: 1000 RWF",
                onChange: handleFormChange("amount"),
                className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 34
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
              onClick: () => request(),
              children: "Request"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./pages/request.js":
/*!**************************!*\
  !*** ./pages/request.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_request_request_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/request/request-form */ "./components/request/request-form.js");


var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\pages\\request.js";


const BuyElectricity = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_request_request_form__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
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
var __webpack_exports__ = (__webpack_exec__("./pages/request.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY3MtYXBwbGljYXRpb24vLi9jb21wb25lbnRzL3JlcXVlc3QvcmVxdWVzdC1mb3JtLmpzIiwid2VicGFjazovL21jcy1hcHBsaWNhdGlvbi8uL3BhZ2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vbWNzLWFwcGxpY2F0aW9uLy4vc3R5bGVzL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL21jcy1hcHBsaWNhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWNzLWFwcGxpY2F0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9ybSIsImZvcm0iLCJzZXRGb3JtIiwiUmVhY3QiLCJhbW91bnQiLCJtZXRlciIsImhhbmRsZUZvcm1DaGFuZ2UiLCJwcm9wZXJ0eSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1ZXN0Iiwic3R5bGVzIiwiQnV5RWxlY3RyaWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLFNBQVNBLElBQVQsR0FBZ0I7QUFFbkIsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLHFEQUFBLENBQWU7QUFDbkNDLFVBQU0sRUFBRSxFQUQyQjtBQUVuQ0MsU0FBSyxFQUFFO0FBRjRCLEdBQWYsQ0FBeEI7O0FBS0EsUUFBTUMsZ0JBQWdCLEdBQUlDLFFBQUQsSUFBZUMsS0FBRCxJQUFXO0FBQzlDTixXQUFPLGlDQUFLRCxJQUFMO0FBQVcsT0FBQ00sUUFBRCxHQUFZQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUM7QUFBcEMsT0FBUDtBQUNILEdBRkQ7O0FBS0EsUUFBTUMsT0FBTyxHQUFHLE1BQU0sQ0FFckIsQ0FGRDs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQVMsZUFBUyxFQUFHLEdBQUVDLDZFQUFrQixrQkFBekM7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRUEsZ0ZBQWhCO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFFQSx3RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFLLHVCQUFTLEVBQUVBLDJFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQU9JO0FBQUEscUNBQUs7QUFBTywyQkFBVyxFQUFDLHlCQUFuQjtBQUE2Qyx3QkFBUSxFQUFFTixnQkFBZ0IsQ0FBQyxPQUFELENBQXZFO0FBQ08seUJBQVMsRUFBRU0sd0VBRGxCO0FBQ2dDLG9CQUFJLEVBQUM7QUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEosZUFTSTtBQUFBLHFDQUFLO0FBQU8sMkJBQVcsRUFBQyw4QkFBbkI7QUFBa0Qsd0JBQVEsRUFBRU4sZ0JBQWdCLENBQUMsUUFBRCxDQUE1RTtBQUNPLHlCQUFTLEVBQUVNLHdFQURsQjtBQUNnQyxvQkFBSSxFQUFDO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKLGVBYUk7QUFBUSx1QkFBUyxFQUFFQSx5RUFBbkI7QUFBa0MscUJBQU8sRUFBRSxNQUFNRCxPQUFPLEVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDtBQUVELCtEQUFlWCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTs7QUFFQSxNQUFPYSxjQUFjLEdBQUMsTUFBSTtBQUN2QixzQkFDSTtBQUFBLDJCQUFFLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBRixtQkFESjtBQUdGLENBSkQ7O0FBTUEsK0RBQWVBLGNBQWYsRTs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3JlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuc2NzcydcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgYW1vdW50OiBcIlwiLFxuICAgICAgICBtZXRlcjogXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAocHJvcGVydHkpID0+IChldmVudCkgPT4ge1xuICAgICAgICBzZXRGb3JtKHsuLi5mb3JtLCBbcHJvcGVydHldOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuXG4gICAgXG4gICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uT25lfSBjb250YWluZXItZmx1aWRgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QsIGVudGVyIHlvdXIgbWV0ZXIgTnVtYmVyIGZvbGxvd2VkIGJ5IGVsZWN0cmljaXR5IGFtb3VudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXIgdG8gdGhhdCBudW1iZXIgd3JpdHRlbiBvbiB5b3VyIGNhc2ggcG93ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgcGxhY2Vob2xkZXI9XCJNRVRFUiBOVU1CRVIgZWc6IDAwNTQ1NFwiIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlKFwibWV0ZXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJ0ZXh0XCIvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHBsYWNlaG9sZGVyPVwiQU1PVU5UIE9GIE1PTkVZIGVnOiAxMDAwIFJXRlwiIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlKFwiYW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiLz48L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHJlcXVlc3QoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm0iLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QtZm9ybVwiXHJcblxyXG5jb25zdCAgQnV5RWxlY3RyaWNpdHk9KCk9PntcclxuICAgcmV0dXJuKFxyXG4gICAgICAgPD48Rm9ybS8+PC8+ICAgICBcclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXlFbGVjdHJpY2l0eTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uT25lXCI6IFwiTG9naW5fc2VjdGlvbk9uZV9fMWVqYkdcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwiTG9naW5fZm9ybUNvbnRhaW5lcl9fQWduTUpcIixcblx0XCJ0aXRsZVwiOiBcIkxvZ2luX3RpdGxlX18yejd6VFwiLFxuXHRcInN1YnRpdGxlXCI6IFwiTG9naW5fc3VidGl0bGVfX2JqbXZoXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2luX2NvbnRlbnRfXzFEREdxXCIsXG5cdFwid2FyblwiOiBcIkxvZ2luX3dhcm5fXzFnWDJLXCIsXG5cdFwiaW5wdXRcIjogXCJMb2dpbl9pbnB1dF9fM2x3M1RcIixcblx0XCJidXR0b25cIjogXCJMb2dpbl9idXR0b25fXzFMaGtoXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9