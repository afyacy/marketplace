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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// /pages/api/users.js\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n    try {\n      const {\n        cname,\n        fname,\n        email,\n        password\n      } = req.body;\n      const result = await prisma.User.create({\n        data: {\n          name: fname,\n          email: email,\n          password: password\n        }\n      });\n      res.status(200).json(result);\n    } catch (error) {\n      res.status(400).json({\n        message: 'Something went wrong'\n      });\n    }\n  } else {\n    // Handle any other HTTP method\n    return res.status(405).json({\n      message: 'Method not allowed'\n    });\n  }\n} // export default async function users (req, res) {\n//   if (req.method !== 'POST'){\n//     return res.status(405).json({message: 'Method not allowed'});\n//   }\n//   try {\n//     const { user } = req.body;\n//     //const user: Prisma.UserCreateInput = JSON.parse(req.body);\n//     const saveUser = await prisma.user.create({\n//       data: user\n//     });\n//     res.status(200).json({saveUser})\n//   } catch (error) {\n//     res.status(400).json({message: 'Something went wrong'})\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0EsUUFBSTtBQUNGLFlBQU07QUFBRUMsUUFBQUEsS0FBRjtBQUFTQyxRQUFBQSxLQUFUO0FBQWdCQyxRQUFBQSxLQUFoQjtBQUF1QkMsUUFBQUE7QUFBdkIsVUFBb0NOLEdBQUcsQ0FBQ08sSUFBOUM7QUFFQSxZQUFNQyxNQUFNLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxJQUFQLENBQVlDLE1BQVosQ0FBbUI7QUFDdENDLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxJQUFJLEVBQUVSLEtBREY7QUFFSkMsVUFBQUEsS0FBSyxFQUFFQSxLQUZIO0FBR0pDLFVBQUFBLFFBQVEsRUFBRUE7QUFITjtBQURnQyxPQUFuQixDQUFyQjtBQU9BTCxNQUFBQSxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sTUFBckI7QUFDRCxLQVhELENBV0UsT0FBT08sS0FBUCxFQUFjO0FBQ2RkLE1BQUFBLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNFLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQXJCO0FBQ0Q7QUFDRixHQWhCRCxNQWdCTztBQUNMO0FBQ0EsV0FBT2YsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0UsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FBckIsQ0FBUDtBQUNEO0FBQ0YsRUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXRwbGFjZS8uL3BhZ2VzL2FwaS9yZWdpc3Rlci5qcz8xNTliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9wYWdlcy9hcGkvdXNlcnMuanNcbmltcG9ydCB7IFByaXNtYSwgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBjbmFtZSwgZm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5Vc2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBmbmFtZSxcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgfSk7ICAgICAgXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCd9KTtcbiAgfVxufVxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVzZXJzIChyZXEsIHJlcykge1xuLy8gICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKXtcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XG4vLyAgIH1cblxuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHsgdXNlciB9ID0gcmVxLmJvZHk7XG4vLyAgICAgLy9jb25zdCB1c2VyOiBQcmlzbWEuVXNlckNyZWF0ZUlucHV0ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4vLyAgICAgY29uc3Qgc2F2ZVVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuLy8gICAgICAgZGF0YTogdXNlclxuLy8gICAgIH0pO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzYXZlVXNlcn0pXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyd9KVxuLy8gICB9XG4vLyB9Il0sIm5hbWVzIjpbIlByaXNtYSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjbmFtZSIsImZuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXN1bHQiLCJVc2VyIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

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