"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/FireBaseAuthState.js":
/*!*****************************************!*\
  !*** ./components/FireBaseAuthState.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FireBaseAuthState = (param)=>{\n    let { children  } = param;\n    _s();\n    const state = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, async (user)=>{\n            if (!user) {\n                state({\n                    type: \"LOGOUT\"\n                });\n            } else {\n                console.log(\"TOKEN\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(FireBaseAuthState, \"Aoi8HvyL58l/TH6/w/HCAkolOe0=\");\n_c = FireBaseAuthState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FireBaseAuthState);\nvar _c;\n$RefreshReg$(_c, \"FireBaseAuthState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmVCYXNlQXV0aFN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRTtBQUNoQjtBQUNGO0FBRW5DLE1BQU1NLG9CQUFvQixTQUFnQjtRQUFmLEVBQUNDLFNBQVEsRUFBQzs7SUFDbkMsTUFBTUMsUUFBUU4saURBQVVBLENBQUNFLDZDQUFPQTtJQUVoQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE9BQU9ILGlFQUFrQkEsQ0FBQ0ssMkNBQUlBLEVBQUUsT0FBT0ksT0FBUztZQUM5QyxJQUFJLENBQUNBLE1BQU07Z0JBQ1RELE1BQU07b0JBQ0pFLE1BQU07Z0JBQ1I7WUFDRixPQUFPO2dCQUNMQyxRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0g7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFBTztrQkFBR0w7O0FBQ1o7R0FmTUQ7S0FBQUE7QUFpQk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpcmVCYXNlQXV0aFN0YXRlLmpzP2E4NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5jb25zdCBGaXJlQmFzZUF1dGhTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICBzdGF0ZSh7XG4gICAgICAgICAgdHlwZTogXCJMT0dPVVRcIixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRPS0VOXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXJlQmFzZUF1dGhTdGF0ZTtcbiJdLCJuYW1lcyI6WyJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwiYXV0aCIsIkZpcmVCYXNlQXV0aFN0YXRlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZXIiLCJ0eXBlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FireBaseAuthState.js\n"));

/***/ })

});