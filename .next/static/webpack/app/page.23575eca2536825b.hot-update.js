"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/Feedback.jsx":
/*!*******************************!*\
  !*** ./sections/Feedback.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst Feedback = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex lg:flex-row flex-col gap-6\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"tween\", 0.2, 1),\n                className: \"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inset-0 z-0 feedback-gradient\"\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Feedback.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Feedback.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Feedback.jsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Feedback.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = Feedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feedback);\nvar _c;\n$RefreshReg$(_c, \"Feedback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9GZWVkYmFjay5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUV1QztBQUNSO0FBQ29DO0FBRW5FLE1BQU1LLFdBQVcsa0JBQ2YsOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJOLHdEQUFlLEVBQUM7a0JBQ3JDLDRFQUFDRCxxREFBVTtZQUNUVSxVQUFVUiwyREFBZ0JBO1lBQzFCUyxTQUFRO1lBQ1JDLGFBQVk7WUFDWkMsVUFBVTtnQkFBRUMsTUFBTSxLQUFLO2dCQUFFQyxRQUFRO1lBQUs7WUFDdENSLFdBQVcsR0FBcUIsT0FBbEJOLDBEQUFpQixFQUFDO3NCQUVoQyw0RUFBQ0QscURBQVU7Z0JBQ1RVLFVBQVVQLHFEQUFNQSxDQUFDLFNBQVMsU0FBUyxLQUFLO2dCQUN4Q0ksV0FBVTswQkFFViw0RUFBQ0U7b0JBQUlGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWJqQkY7QUFtQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRmVlZGJhY2suanN4PzJiYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IHN0YWdnZXJDb250YWluZXIsIGZhZGVJbiwgem9vbUluIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgZ2FwLTZgfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oXCJyaWdodFwiLCBcInR3ZWVuXCIsIDAuMiwgMSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtWzAuNV0gbGc6bWF4LXctWzM3MHB4XSBmbGV4IGp1c3RpZnktZW5kIGZsZXgtY29sIGdyYWRpZW50LTA1IHNtOnAtOCBwLTQgcm91bmRlZC1bMzJweF0gYm9yZGVyLVsxcHhdIGJvcmRlci1bIzZhNmE2YV0gcmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2V0LTAgei0wIGZlZWRiYWNrLWdyYWRpZW50XCIgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsInN0YWdnZXJDb250YWluZXIiLCJmYWRlSW4iLCJ6b29tSW4iLCJGZWVkYmFjayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Feedback.jsx\n"));

/***/ })

});