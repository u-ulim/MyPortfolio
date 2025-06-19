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
exports.id = "pages/api/notion-schema";
exports.ids = ["pages/api/notion-schema"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/notion-schema.js":
/*!************************************!*\
  !*** ./pages/api/notion-schema.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// Notion API 클라이언트 초기화\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_API_KEY\n});\nasync function handler(req, res) {\n    try {\n        // 데이터베이스 정보 가져오기\n        const database = await notion.databases.retrieve({\n            database_id: process.env.NOTION_DATABASE_ID\n        });\n        // 전체 데이터베이스 정보 반환\n        const properties = database.properties;\n        // 속성 정보를 더 읽기 쉬운 형태로 변환\n        const propertiesInfo = {};\n        for(const key in properties){\n            propertiesInfo[key] = {\n                name: properties[key].name,\n                type: properties[key].type,\n                id: properties[key].id\n            };\n        }\n        return res.status(200).json({\n            success: true,\n            databaseTitle: database.title[0]?.plain_text || \"제목 없음\",\n            properties: propertiesInfo,\n            // 전체 속성 정보도 함께 반환\n            fullProperties: properties\n        });\n    } catch (error) {\n        console.error(\"API 오류:\", error);\n        return res.status(500).json({\n            success: false,\n            message: \"데이터베이스 정보 조회 실패\",\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aW9uLXNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFFMUMsdUJBQXVCO0FBQ3ZCLE1BQU1DLFNBQVMsSUFBSUQsb0RBQU1BLENBQUM7SUFDeEJFLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNsQztBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUk7UUFDRixpQkFBaUI7UUFDakIsTUFBTUMsV0FBVyxNQUFNUixPQUFPUyxTQUFTLENBQUNDLFFBQVEsQ0FBQztZQUMvQ0MsYUFBYVQsUUFBUUMsR0FBRyxDQUFDUyxrQkFBa0I7UUFDN0M7UUFFQSxrQkFBa0I7UUFDbEIsTUFBTUMsYUFBYUwsU0FBU0ssVUFBVTtRQUV0Qyx3QkFBd0I7UUFDeEIsTUFBTUMsaUJBQWlCLENBQUM7UUFFeEIsSUFBSyxNQUFNQyxPQUFPRixXQUFZO1lBQzVCQyxjQUFjLENBQUNDLElBQUksR0FBRztnQkFDcEJDLE1BQU1ILFVBQVUsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJO2dCQUMxQkMsTUFBTUosVUFBVSxDQUFDRSxJQUFJLENBQUNFLElBQUk7Z0JBQzFCQyxJQUFJTCxVQUFVLENBQUNFLElBQUksQ0FBQ0csRUFBRTtZQUN4QjtRQUNGO1FBRUEsT0FBT1gsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUMxQkMsU0FBUyxJQUFJO1lBQ2JDLGVBQWVkLFNBQVNlLEtBQUssQ0FBQyxFQUFFLEVBQUVDLGNBQWM7WUFDaERYLFlBQVlDO1lBQ1osa0JBQWtCO1lBQ2xCVyxnQkFBZ0JaO1FBQ2xCO0lBQ0YsRUFBRSxPQUFPYSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxXQUFXQTtRQUN6QixPQUFPbkIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUMxQkMsU0FBUyxLQUFLO1lBQ2RPLFNBQVM7WUFDVEYsT0FBT0EsTUFBTUUsT0FBTztRQUN0QjtJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGF2ZXJzZTEzLy4vcGFnZXMvYXBpL25vdGlvbi1zY2hlbWEuanM/ZDAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5vdGlvbmhxL2NsaWVudFwiO1xuXG4vLyBOb3Rpb24gQVBJIO2BtOudvOydtOyWuO2KuCDstIjquLDtmZRcbmNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoe1xuICBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fQVBJX0tFWSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgLy8g642w7J207YSw67Kg7J207IqkIOygleuztCDqsIDsoLjsmKTquLBcbiAgICBjb25zdCBkYXRhYmFzZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucmV0cmlldmUoe1xuICAgICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9EQVRBQkFTRV9JRCxcbiAgICB9KTtcblxuICAgIC8vIOyghOyytCDrjbDsnbTthLDrsqDsnbTsiqQg7KCV67O0IOuwmO2ZmFxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBkYXRhYmFzZS5wcm9wZXJ0aWVzO1xuXG4gICAgLy8g7IaN7ISxIOygleuztOulvCDrjZQg7J296riwIOyJrOyatCDtmJXtg5zroZwg67OA7ZmYXG4gICAgY29uc3QgcHJvcGVydGllc0luZm8gPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHByb3BlcnRpZXNJbmZvW2tleV0gPSB7XG4gICAgICAgIG5hbWU6IHByb3BlcnRpZXNba2V5XS5uYW1lLFxuICAgICAgICB0eXBlOiBwcm9wZXJ0aWVzW2tleV0udHlwZSxcbiAgICAgICAgaWQ6IHByb3BlcnRpZXNba2V5XS5pZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhYmFzZVRpdGxlOiBkYXRhYmFzZS50aXRsZVswXT8ucGxhaW5fdGV4dCB8fCBcIuygnOuqqSDsl4bsnYxcIixcbiAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNJbmZvLFxuICAgICAgLy8g7KCE7LK0IOyGjeyEsSDsoJXrs7Trj4Qg7ZWo6ruYIOuwmO2ZmFxuICAgICAgZnVsbFByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFQSSDsmKTrpZg6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBcIuuNsOydtO2EsOuyoOydtOyKpCDsoJXrs7Qg7KGw7ZqMIOyLpO2MqFwiLFxuICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJub3Rpb24iLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGFiYXNlIiwiZGF0YWJhc2VzIiwicmV0cmlldmUiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9EQVRBQkFTRV9JRCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzSW5mbyIsImtleSIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGFiYXNlVGl0bGUiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJmdWxsUHJvcGVydGllcyIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/notion-schema.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notion-schema.js"));
module.exports = __webpack_exports__;

})();