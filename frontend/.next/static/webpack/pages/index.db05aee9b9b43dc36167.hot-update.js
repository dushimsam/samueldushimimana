self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Samuel_Documents_all_software_testing_term_two_cat1_samueldushimimana_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Samuel_Documents_all_software_testing_term_two_cat1_samueldushimimana_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Login.module.scss */ "./styles/Login.module.scss");
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Samuel\\Documents\\all\\software-testing\\term -two\\cat1\\samueldushimimana\\frontend\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Samuel_Documents_all_software_testing_term_two_cat1_samueldushimimana_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Form() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    amount: "",
    meter: ""
  }),
      _React$useState2 = (0,C_Users_Samuel_Documents_all_software_testing_term_two_cat1_samueldushimimana_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      form = _React$useState2[0],
      setForm = _React$useState2[1];

  var handleFormChange = function handleFormChange(property) {
    return function (event) {
      setForm(_objectSpread(_objectSpread({}, form), {}, (0,C_Users_Samuel_Documents_all_software_testing_term_two_cat1_samueldushimimana_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, property, event.target.value)));
    };
  };

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var request = function request() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "".concat((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sectionOne), " container-fluid"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
              onClick: function onClick() {
                return router.push('/request');
              },
              children: "REQUEST NEW METERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
              onClick: function onClick() {
                return router.push('/buy');
              },
              children: "BUY  ELECTRICITY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
              onClick: function onClick() {
                return router.push('/account-status');
              },
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

_s(Form, "c/SxuYSHlZEHZvmF4euEIOcyWY8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRm9ybSIsIlJlYWN0IiwiYW1vdW50IiwibWV0ZXIiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJwcm9wZXJ0eSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZXF1ZXN0Iiwic3R5bGVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBRUtDLHFEQUFBLENBQWU7QUFDbkNDLFVBQU0sRUFBRSxFQUQyQjtBQUVuQ0MsU0FBSyxFQUFFO0FBRjRCLEdBQWYsQ0FGTDtBQUFBO0FBQUEsTUFFWkMsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBT25CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRDtBQUFBLFdBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQzlDSCxhQUFPLGlDQUFLRCxJQUFMLG1OQUFZRyxRQUFaLEVBQXVCQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBcEMsR0FBUDtBQUNILEtBRndCO0FBQUEsR0FBekI7O0FBSUEsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFHQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNLENBRXJCLENBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFTLGVBQVMsWUFBS0MsNkVBQUwscUJBQWxCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLG9DQUVJO0FBQVEsdUJBQVMsRUFBRUEseUVBQW5CO0FBQWtDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUgsTUFBTSxDQUFDSSxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsZUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFNSTtBQUFRLHVCQUFTLEVBQUVELHlFQUFuQjtBQUFrQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1ILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE1BQVosQ0FBTjtBQUFBLGVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KLGVBVUk7QUFBUSx1QkFBUyxFQUFFRCx5RUFBbkI7QUFBa0MscUJBQU8sRUFBRTtBQUFBLHVCQUFNSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxpQkFBWixDQUFOO0FBQUEsZUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOztHQTVDZWYsSTtVQVdHWSxrRDs7O0tBWEhaLEk7QUE4Q2hCLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiMDVhZWU5YjliNDNkYzM2MTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Mb2dpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcblxyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICBtZXRlcjogXCJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAocHJvcGVydHkpID0+IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZvcm0oey4uLmZvcm0sIFtwcm9wZXJ0eV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvbk9uZX0gY29udGFpbmVyLWZsdWlkYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9yZXF1ZXN0Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFUVVFU1QgTkVXIE1FVEVSU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYnV5Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJVWSAgRUxFQ1RSSUNJVFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2FjY291bnQtc3RhdHVzJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZJRVcgQUNDT1VOVCBTVEFUVVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0iXSwic291cmNlUm9vdCI6IiJ9