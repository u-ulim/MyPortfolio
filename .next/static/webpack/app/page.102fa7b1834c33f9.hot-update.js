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

/***/ "./components/StarrySky.jsx":
/*!**********************************!*\
  !*** ./components/StarrySky.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StarrySky_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StarrySky.css */ \"./components/StarrySky.css\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n\nvar _s = $RefreshSig$();\n\n // 스타일을 위한 CSS 파일을 임포트합니다.\n\nconst StarrySky = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        init();\n    }, []);\n    function init() {\n        // 별 스타일\n        const style = [\n            \"style1\",\n            \"style2\",\n            \"style3\",\n            \"style4\"\n        ];\n        const tam = [\n            \"tam1\",\n            \"tam1\",\n            \"tam1\",\n            \"tam2\",\n            \"tam3\"\n        ];\n        const opacity = [\n            \"opacity1\",\n            \"opacity1\",\n            \"opacity1\",\n            \"opacity2\",\n            \"opacity2\",\n            \"opacity3\"\n        ];\n        function getRandomArbitrary(min, max) {\n            return Math.floor(Math.random() * (max - min)) + min;\n        }\n        let estrela = \"\";\n        const qtdeEstrelas = 250;\n        const noite = document.querySelector(\".constelacao\");\n        const widthWindow = window.innerWidth;\n        const heightWindow = window.innerHeight;\n        for(let i = 0; i < qtdeEstrelas; i++){\n            estrela += \"<span class='estrela \" + style[getRandomArbitrary(0, 4)] + \" \" + opacity[getRandomArbitrary(0, 6)] + \" \" + tam[getRandomArbitrary(0, 5)] + \"' style='animation-delay: .\" + getRandomArbitrary(0, 9) + \"s; left: \" + getRandomArbitrary(0, widthWindow) + \"px; top: \" + getRandomArbitrary(0, heightWindow) + \"px;'></span>\";\n        }\n        noite.innerHTML = estrela;\n        // 유성\n        let numeroAleatorio = 5000;\n        setTimeout(function() {\n            carregarMeteoro();\n        }, numeroAleatorio);\n        function carregarMeteoro() {\n            setTimeout(carregarMeteoro, numeroAleatorio);\n            numeroAleatorio = getRandomArbitrary(5000, 10000);\n            const meteoro = \"<div class='meteoro \" + style[getRandomArbitrary(0, 4)] + \"'></div>\";\n            document.getElementsByClassName(\"chuvaMeteoro\")[0].innerHTML = meteoro;\n            setTimeout(function() {\n                document.getElementsByClassName(\"chuvaMeteoro\")[0].innerHTML = \"\";\n            }, 1000);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].noiteBg)\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"constelacao\"\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lua\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"textura\"\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chuvaMeteoro\"\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"floresta\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://raw.githubusercontent.com/interaminense/starry-sky/master/src/img/bgTree.png\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dk/Desktop/desk-projects/myportfolio/MyPortfolio/components/StarrySky.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StarrySky, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = StarrySky;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarrySky);\nvar _c;\n$RefreshReg$(_c, \"StarrySky\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXJyeVNreS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2hCLENBQUMsMEJBQTBCO0FBQ3JCO0FBQy9CLE1BQU1HLFlBQVksSUFBTTs7SUFDdEJGLGdEQUFTQSxDQUFDLElBQU07UUFDZEc7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTQSxPQUFPO1FBQ2QsUUFBUTtRQUNSLE1BQU1DLFFBQVE7WUFBQztZQUFVO1lBQVU7WUFBVTtTQUFTO1FBQ3RELE1BQU1DLE1BQU07WUFBQztZQUFRO1lBQVE7WUFBUTtZQUFRO1NBQU87UUFDcEQsTUFBTUMsVUFBVTtZQUNkO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBRUQsU0FBU0MsbUJBQW1CQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtZQUNwQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTUgsQ0FBQUEsTUFBTUQsR0FBRSxLQUFNQTtRQUNuRDtRQUVBLElBQUlLLFVBQVU7UUFDZCxNQUFNQyxlQUFlO1FBQ3JCLE1BQU1DLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUNyQyxNQUFNQyxjQUFjQyxPQUFPQyxVQUFVO1FBQ3JDLE1BQU1DLGVBQWVGLE9BQU9HLFdBQVc7UUFFdkMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlULGNBQWNTLElBQUs7WUFDckNWLFdBQ0UsMEJBQ0FULEtBQUssQ0FBQ0csbUJBQW1CLEdBQUcsR0FBRyxHQUMvQixNQUNBRCxPQUFPLENBQUNDLG1CQUFtQixHQUFHLEdBQUcsR0FDakMsTUFDQUYsR0FBRyxDQUFDRSxtQkFBbUIsR0FBRyxHQUFHLEdBQzdCLGdDQUNBQSxtQkFBbUIsR0FBRyxLQUN0QixjQUNBQSxtQkFBbUIsR0FBR1csZUFDdEIsY0FDQVgsbUJBQW1CLEdBQUdjLGdCQUN0QjtRQUNKO1FBRUFOLE1BQU1TLFNBQVMsR0FBR1g7UUFFbEIsS0FBSztRQUNMLElBQUlZLGtCQUFrQjtRQUV0QkMsV0FBVyxXQUFZO1lBQ3JCQztRQUNGLEdBQUdGO1FBRUgsU0FBU0Usa0JBQWtCO1lBQ3pCRCxXQUFXQyxpQkFBaUJGO1lBQzVCQSxrQkFBa0JsQixtQkFBbUIsTUFBTTtZQUMzQyxNQUFNcUIsVUFDSix5QkFBeUJ4QixLQUFLLENBQUNHLG1CQUFtQixHQUFHLEdBQUcsR0FBRztZQUM3RFMsU0FBU2Esc0JBQXNCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHSTtZQUMvREYsV0FBVyxXQUFZO2dCQUNyQlYsU0FBU2Esc0JBQXNCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQ0wsU0FBUyxHQUFHO1lBQ2pFLEdBQUc7UUFDTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVcsR0FBa0IsT0FBZjlCLHVEQUFjOzs7Ozs7MEJBQ2pDLDhEQUFDNkI7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7OzswQkFFakIsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRTtvQkFDQ0MsS0FBSTtvQkFDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtHQWxGTWpDO0tBQUFBO0FBb0ZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RhcnJ5U2t5LmpzeD9jNzZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vU3RhcnJ5U2t5LmNzc1wiOyAvLyDsiqTtg4DsnbzsnYQg7JyE7ZWcIENTUyDtjIzsnbzsnYQg7J6E7Y+s7Yq47ZWp64uI64ukLlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzXCI7XG5jb25zdCBTdGFycnlTa3kgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyDrs4Qg7Iqk7YOA7J28XG4gICAgY29uc3Qgc3R5bGUgPSBbXCJzdHlsZTFcIiwgXCJzdHlsZTJcIiwgXCJzdHlsZTNcIiwgXCJzdHlsZTRcIl07XG4gICAgY29uc3QgdGFtID0gW1widGFtMVwiLCBcInRhbTFcIiwgXCJ0YW0xXCIsIFwidGFtMlwiLCBcInRhbTNcIl07XG4gICAgY29uc3Qgb3BhY2l0eSA9IFtcbiAgICAgIFwib3BhY2l0eTFcIixcbiAgICAgIFwib3BhY2l0eTFcIixcbiAgICAgIFwib3BhY2l0eTFcIixcbiAgICAgIFwib3BhY2l0eTJcIixcbiAgICAgIFwib3BhY2l0eTJcIixcbiAgICAgIFwib3BhY2l0eTNcIixcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cblxuICAgIGxldCBlc3RyZWxhID0gXCJcIjtcbiAgICBjb25zdCBxdGRlRXN0cmVsYXMgPSAyNTA7XG4gICAgY29uc3Qgbm9pdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN0ZWxhY2FvXCIpO1xuICAgIGNvbnN0IHdpZHRoV2luZG93ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0V2luZG93ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdGRlRXN0cmVsYXM7IGkrKykge1xuICAgICAgZXN0cmVsYSArPVxuICAgICAgICBcIjxzcGFuIGNsYXNzPSdlc3RyZWxhIFwiICtcbiAgICAgICAgc3R5bGVbZ2V0UmFuZG9tQXJiaXRyYXJ5KDAsIDQpXSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgb3BhY2l0eVtnZXRSYW5kb21BcmJpdHJhcnkoMCwgNildICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICB0YW1bZ2V0UmFuZG9tQXJiaXRyYXJ5KDAsIDUpXSArXG4gICAgICAgIFwiJyBzdHlsZT0nYW5pbWF0aW9uLWRlbGF5OiAuXCIgK1xuICAgICAgICBnZXRSYW5kb21BcmJpdHJhcnkoMCwgOSkgK1xuICAgICAgICBcInM7IGxlZnQ6IFwiICtcbiAgICAgICAgZ2V0UmFuZG9tQXJiaXRyYXJ5KDAsIHdpZHRoV2luZG93KSArXG4gICAgICAgIFwicHg7IHRvcDogXCIgK1xuICAgICAgICBnZXRSYW5kb21BcmJpdHJhcnkoMCwgaGVpZ2h0V2luZG93KSArXG4gICAgICAgIFwicHg7Jz48L3NwYW4+XCI7XG4gICAgfVxuXG4gICAgbm9pdGUuaW5uZXJIVE1MID0gZXN0cmVsYTtcblxuICAgIC8vIOycoOyEsVxuICAgIGxldCBudW1lcm9BbGVhdG9yaW8gPSA1MDAwO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYXJyZWdhck1ldGVvcm8oKTtcbiAgICB9LCBudW1lcm9BbGVhdG9yaW8pO1xuXG4gICAgZnVuY3Rpb24gY2FycmVnYXJNZXRlb3JvKCkge1xuICAgICAgc2V0VGltZW91dChjYXJyZWdhck1ldGVvcm8sIG51bWVyb0FsZWF0b3Jpbyk7XG4gICAgICBudW1lcm9BbGVhdG9yaW8gPSBnZXRSYW5kb21BcmJpdHJhcnkoNTAwMCwgMTAwMDApO1xuICAgICAgY29uc3QgbWV0ZW9ybyA9XG4gICAgICAgIFwiPGRpdiBjbGFzcz0nbWV0ZW9ybyBcIiArIHN0eWxlW2dldFJhbmRvbUFyYml0cmFyeSgwLCA0KV0gKyBcIic+PC9kaXY+XCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2h1dmFNZXRlb3JvXCIpWzBdLmlubmVySFRNTCA9IG1ldGVvcm87XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNodXZhTWV0ZW9yb1wiKVswXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ub2l0ZUJnfWB9PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdGVsYWNhb1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdWFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0dXJhXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1dmFNZXRlb3JvXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb3Jlc3RhXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaW50ZXJhbWluZW5zZS9zdGFycnktc2t5L21hc3Rlci9zcmMvaW1nL2JnVHJlZS5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJyeVNreTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlN0YXJyeVNreSIsImluaXQiLCJzdHlsZSIsInRhbSIsIm9wYWNpdHkiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlc3RyZWxhIiwicXRkZUVzdHJlbGFzIiwibm9pdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aFdpbmRvdyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHRXaW5kb3ciLCJpbm5lckhlaWdodCIsImkiLCJpbm5lckhUTUwiLCJudW1lcm9BbGVhdG9yaW8iLCJzZXRUaW1lb3V0IiwiY2FycmVnYXJNZXRlb3JvIiwibWV0ZW9ybyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJub2l0ZUJnIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StarrySky.jsx\n"));

/***/ })

});