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

/***/ "./sections/Insights.jsx":
/*!*******************************!*\
  !*** ./sections/Insights.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _components_InsightCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InsightCard */ \"./components/InsightCard.jsx\");\n// \"use client\";\n// import { motion } from \"framer-motion\";\n// import { useState } from \"react\";\n// import styles from \"../styles\";\n// import { ExploreCard, TypingText, TitleText } from \"../components\";\n// import { fadeIn, staggerContainer } from \"../utils/motion\";\n// import { exploreWorlds } from \"../constants\";\n// import { insights } from \"../constants\";\n// import InsightCard from \"../components/InsightCard\";\n// import React from \"react\";\n// const Insights = () => {\n//   return (\n//     <section className={`${styles.paddings} mt-[200px] relative z-10`}>\n//       <motion.div\n//         variants={staggerContainer}\n//         initial=\"hidden\"\n//         whileInView=\"show\"\n//         viewport={{ once: false, amount: 0.25 }}\n//         className={`${styles.innerWidth} mx-auto flex flex-col`}\n//       >\n//         <TypingText title=\"Toy Project Introduction\" textStyles=\"text-center\" />\n//         <TitleText title={\"개인 토이 프로젝트\"} textStyles=\"\" />\n//         <div className=\"mt-[50px] flex flex-col gap-[30px] \">\n//           {insights.map((insights, index) => (\n//             <InsightCard key={`insight-${index}`} {...insights} index={index} />\n//           ))}\n//         </div>\n//       </motion.div>\n//     </section>\n//   );\n// };\n// export default Insights;\n// ... 기존 코드 ...\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Insights = ()=>{\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredInsights, setFilteredInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const filtered = _constants__WEBPACK_IMPORTED_MODULE_5__.insights.filter((insight)=>filter ? insight.category === filter : true);\n        setFilteredInsights(filtered);\n    }, [\n        filter,\n        _constants__WEBPACK_IMPORTED_MODULE_5__.insights\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings, \" mt-[200px] relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TypingText, {\n                    title: \"Toy Project Introduction\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.TitleText, {\n                    title: \"개인 토이 프로젝트\",\n                    textStyles: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center gap-4 mt-[60px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"검색...\",\n                            value: filter,\n                            onChange: (e)=>setFilter(e.target.value),\n                            className: \"mb-4 p-2 border rounded text-gray-800 dark:text-gray-200\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 mb-4\",\n                            children: [\n                                \"All\",\n                                \"React\",\n                                \"TS\",\n                                \"JS\",\n                                \"Next\",\n                                \"Node\"\n                            ].map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setFilter(category === \"All\" ? \"\" : category),\n                                    className: \"p-2 border rounded\",\n                                    children: category\n                                }, category, false, {\n                                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex flex-col gap-[30px] \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                        children: filteredInsights.map((insight, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                whileInView: \"show\",\n                                viewport: {\n                                    once: false,\n                                    amount: 0.25\n                                },\n                                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_4__.fadeIn)(\"up\", \"spring\", index * 0.3, 0.5),\n                                initial: \"hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InsightCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    ...insight,\n                                    index: index\n                                }, void 0, false, {\n                                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, insight.id, false, {\n                                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/sections/Insights.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Insights, \"Sp4CeCvl1k+GkjO7wGfT1isc8QA=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FBYy9CO0dBNURNaEM7S0FBQUE7QUE4RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvSW5zaWdodHMuanN4PzBhMTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXNcIjtcbi8vIGltcG9ydCB7IEV4cGxvcmVDYXJkLCBUeXBpbmdUZXh0LCBUaXRsZVRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuLy8gaW1wb3J0IHsgZmFkZUluLCBzdGFnZ2VyQ29udGFpbmVyIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuLy8gaW1wb3J0IHsgZXhwbG9yZVdvcmxkcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbi8vIGltcG9ydCB7IGluc2lnaHRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuLy8gaW1wb3J0IEluc2lnaHRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0luc2lnaHRDYXJkXCI7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGNvbnN0IEluc2lnaHRzID0gKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSBtdC1bMjAwcHhdIHJlbGF0aXZlIHotMTBgfT5cbi8vICAgICAgIDxtb3Rpb24uZGl2XG4vLyAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuLy8gICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbi8vICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbi8vICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogZmFsc2UsIGFtb3VudDogMC4yNSB9fVxuLy8gICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuLy8gICAgICAgPlxuLy8gICAgICAgICA8VHlwaW5nVGV4dCB0aXRsZT1cIlRveSBQcm9qZWN0IEludHJvZHVjdGlvblwiIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiIC8+XG4vLyAgICAgICAgIDxUaXRsZVRleHQgdGl0bGU9e1wi6rCc7J24IO2GoOydtCDtlITroZzsoJ3tirhcIn0gdGV4dFN0eWxlcz1cIlwiIC8+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzUwcHhdIGZsZXggZmxleC1jb2wgZ2FwLVszMHB4XSBcIj5cbi8vICAgICAgICAgICB7aW5zaWdodHMubWFwKChpbnNpZ2h0cywgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgIDxJbnNpZ2h0Q2FyZCBrZXk9e2BpbnNpZ2h0LSR7aW5kZXh9YH0gey4uLmluc2lnaHRzfSBpbmRleD17aW5kZXh9IC8+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9tb3Rpb24uZGl2PlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluc2lnaHRzO1xuXG4vLyAuLi4g6riw7KG0IOy9lOuTnCAuLi5cblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgRXhwbG9yZUNhcmQsIFR5cGluZ1RleHQsIFRpdGxlVGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIHN0YWdnZXJDb250YWluZXIgfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5pbXBvcnQgeyBleHBsb3JlV29ybGRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5zaWdodHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgSW5zaWdodENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5zaWdodENhcmRcIjtcblxuY29uc3QgSW5zaWdodHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbHRlcmVkSW5zaWdodHMsIHNldEZpbHRlcmVkSW5zaWdodHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBpbnNpZ2h0cy5maWx0ZXIoKGluc2lnaHQpID0+XG4gICAgICBmaWx0ZXIgPyBpbnNpZ2h0LmNhdGVnb3J5ID09PSBmaWx0ZXIgOiB0cnVlXG4gICAgKTtcbiAgICBzZXRGaWx0ZXJlZEluc2lnaHRzKGZpbHRlcmVkKTtcbiAgfSwgW2ZpbHRlciwgaW5zaWdodHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSBtdC1bMjAwcHhdIHJlbGF0aXZlIHotMTBgfT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogZmFsc2UsIGFtb3VudDogMC4yNSB9fVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuICAgICAgPlxuICAgICAgICA8VHlwaW5nVGV4dCB0aXRsZT1cIlRveSBQcm9qZWN0IEludHJvZHVjdGlvblwiIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiIC8+XG4gICAgICAgIDxUaXRsZVRleHQgdGl0bGU9e1wi6rCc7J24IO2GoOydtCDtlITroZzsoJ3tirhcIn0gdGV4dFN0eWxlcz1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgbXQtWzYwcHhdXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuqygOyDiS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgIHtbXCJBbGxcIiwgXCJSZWFjdFwiLCBcIlRTXCIsIFwiSlNcIiwgXCJOZXh0XCIsIFwiTm9kZVwiXS5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihjYXRlZ29yeSA9PT0gXCJBbGxcIiA/IFwiXCIgOiBjYXRlZ29yeSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzUwcHhdIGZsZXggZmxleC1jb2wgZ2FwLVszMHB4XSBcIj5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAge2ZpbHRlcmVkSW5zaWdodHMubWFwKChpbnNpZ2h0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5zaWdodC5pZH1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluKFwidXBcIiwgXCJzcHJpbmdcIiwgaW5kZXggKiAwLjMsIDAuNSl9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5zaWdodENhcmQgey4uLmluc2lnaHR9IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwic3R5bGVzIiwiRXhwbG9yZUNhcmQiLCJUeXBpbmdUZXh0IiwiVGl0bGVUZXh0IiwiZmFkZUluIiwic3RhZ2dlckNvbnRhaW5lciIsImV4cGxvcmVXb3JsZHMiLCJpbnNpZ2h0cyIsIkluc2lnaHRDYXJkIiwiSW5zaWdodHMiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJlZEluc2lnaHRzIiwic2V0RmlsdGVyZWRJbnNpZ2h0cyIsImZpbHRlcmVkIiwiaW5zaWdodCIsImNhdGVnb3J5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbmRleCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Insights.jsx\n"));

/***/ })

});