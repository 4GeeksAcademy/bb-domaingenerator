"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Jumbotron.jsx":
/*!**************************************!*\
  !*** ./src/components/Jumbotron.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Jumbotron: function() { return /* binding */ Jumbotron; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n\n\nfunction Jumbotron(param) {\n    let { onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Here\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/nextjsreact-template/src/components/Jumbotron.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"My Own React Project\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/nextjsreact-template/src/components/Jumbotron.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"primary\",\n                    onClick: onClick,\n                    children: \"CTA\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/nextjsreact-template/src/components/Jumbotron.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/nextjsreact-template/src/components/Jumbotron.jsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/nextjsreact-template/src/components/Jumbotron.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Jumbotron;\nvar _c;\n$RefreshReg$(_c, \"Jumbotron\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9KdW1ib3Ryb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBRTVDLFNBQVNHLFVBQVUsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQ3hCLHFCQUNFLDhEQUFDRixzRkFBR0E7a0JBQ0YsNEVBQUNELHNGQUFHQTs7OEJBQ0YsOERBQUNJOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFFOzs7Ozs7OEJBR0gsOERBQUNOLHlGQUFNQTtvQkFBQ08sU0FBUTtvQkFBVUgsU0FBU0E7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0tBZGdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9KdW1ib3Ryb24uanN4P2ZlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEp1bWJvdHJvbih7IG9uQ2xpY2sgfSkge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sPlxuICAgICAgICA8aDE+SGVyZTwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE15IE93biBSZWFjdCBQcm9qZWN0XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIENUQVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb2wiLCJSb3ciLCJKdW1ib3Ryb24iLCJvbkNsaWNrIiwiaDEiLCJwIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Jumbotron.jsx\n"));

/***/ })

});