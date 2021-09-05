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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// /pages/api/users.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n    const {\n      cname,\n      fname,\n      email,\n      password\n    } = req.body;\n    const result = await prisma.User.create({\n      data: {\n        companyId: 1,\n        name: fname,\n        email: email,\n        password: password\n      }\n    });\n  } else {\n    // Handle any other HTTP method\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n} // export default async function users (req, res) {\n//   if (req.method !== 'POST'){\n//     return res.status(405).json({message: 'Method not allowed'});\n//   }\n//   try {\n//     const { user } = req.body;\n//     //const user: Prisma.UserCreateInput = JSON.parse(req.body);\n//     const saveUser = await prisma.user.create({\n//       data: user\n//     });\n//     res.status(200).json({saveUser})\n//   } catch (error) {\n//     res.status(400).json({message: 'Something went wrong'})\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCO0FBRUUsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBLEtBQVQ7QUFBZ0JDLE1BQUFBLEtBQWhCO0FBQXVCQyxNQUFBQTtBQUF2QixRQUFvQ04sR0FBRyxDQUFDTyxJQUE5QztBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUN0Q0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFNBQVMsRUFBRSxDQURQO0FBRUpDLFFBQUFBLElBQUksRUFBRVQsS0FGRjtBQUdKQyxRQUFBQSxLQUFLLEVBQUVBLEtBSEg7QUFJSkMsUUFBQUEsUUFBUSxFQUFFQTtBQUpOO0FBRGdDLEtBQW5CLENBQXJCO0FBU0gsR0FkRCxNQWNPO0FBQ0w7QUFDQSxXQUFPTCxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxNQUFBQSxPQUFPLEVBQUU7QUFBVixLQUFyQixDQUFQO0FBQ0Q7QUFDRixFQUdEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldHBsYWNlLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzPzE1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL3BhZ2VzL2FwaS91c2Vycy5qc1xuaW1wb3J0IHsgUHJpc21hLCBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgLy8gUHJvY2VzcyBhIFBPU1QgcmVxdWVzdFxuXG4gICAgICBjb25zdCB7IGNuYW1lLCBmbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLlVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbXBhbnlJZDogMSxcbiAgICAgICAgICBuYW1lOiBmbmFtZSxcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgfSk7ICAgICAgXG4gICAgXG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCd9KTtcbiAgfVxufVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVzZXJzIChyZXEsIHJlcykge1xuLy8gICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKXtcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XG4vLyAgIH1cblxuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHsgdXNlciB9ID0gcmVxLmJvZHk7XG4vLyAgICAgLy9jb25zdCB1c2VyOiBQcmlzbWEuVXNlckNyZWF0ZUlucHV0ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4vLyAgICAgY29uc3Qgc2F2ZVVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuLy8gICAgICAgZGF0YTogdXNlclxuLy8gICAgIH0pO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzYXZlVXNlcn0pXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyd9KVxuLy8gICB9XG4vLyB9Il0sIm5hbWVzIjpbIlByaXNtYSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjbmFtZSIsImZuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXN1bHQiLCJVc2VyIiwiY3JlYXRlIiwiZGF0YSIsImNvbXBhbnlJZCIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/register.js"));
module.exports = __webpack_exports__;

})();