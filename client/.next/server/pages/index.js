"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import\n\n\n// reducer\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// initial state\nconst intialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n// context provider\nconst Provider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, intialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/irtazafiaz/Documents/GitHub/login-nextjs/client/context/index.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVM7O0FBQ3lDO0FBRWxELFVBQVU7QUFDVixNQUFNRSxVQUFVLENBQUNDLE9BQU9DLFNBQVc7SUFDakMsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHRixLQUFLO2dCQUFFRyxNQUFNRixPQUFPRyxPQUFPO1lBQUM7UUFDMUMsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0osS0FBSztnQkFBRUcsTUFBTSxJQUFJO1lBQUM7UUFDaEM7WUFDRSxPQUFPSDtJQUNYO0FBQ0Y7QUFFQSxnQkFBZ0I7QUFDaEIsTUFBTUssY0FBYztJQUNsQkYsTUFBTSxJQUFJO0FBQ1o7QUFFQSxpQkFBaUI7QUFDakIsTUFBTUcsd0JBQVVULG9EQUFhQSxDQUFDLENBQUM7QUFFL0IsbUJBQW1CO0FBQ25CLE1BQU1VLFdBQVcsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUNqQyxNQUFNLENBQUNSLE9BQU9TLFNBQVMsR0FBR1gsaURBQVVBLENBQUNDLFNBQVNNO0lBQzlDLE1BQU1LLFFBQVE7UUFBRVY7UUFBT1M7SUFBUztJQUNoQyxxQkFBTyw4REFBQ0gsUUFBUUMsUUFBUTtRQUFDRyxPQUFPQTtrQkFBUUY7Ozs7OztBQUMxQztBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gcmVkdWNlclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBudWxsIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3QgaW50aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG4vLyBjcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG4vLyBjb250ZXh0IHByb3ZpZGVyXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGludGlhbFN0YXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCB7IENvbnRleHQsIFByb3ZpZGVyIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlciIsInBheWxvYWQiLCJpbnRpYWxTdGF0ZSIsIkNvbnRleHQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\nconst Home = ()=>{\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"/Users/irtazafiaz/Documents/GitHub/login-nextjs/client/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined),\n            JSON.stringify(state)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/irtazafiaz/Documents/GitHub/login-nextjs/client/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBQ0U7QUFFckMsTUFBTUUsT0FBTyxJQUFNO0lBQ2YsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsaURBQVVBLENBQUNDLDZDQUFPQTtJQUN0QyxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEMsS0FBS0MsU0FBUyxDQUFDTDs7Ozs7OztBQUd4QjtBQUVBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpOyBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+SG9tZSBQYWdlPC9oMj5cbiAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0YXRlKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkNvbnRleHQiLCJIb21lIiwic3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();