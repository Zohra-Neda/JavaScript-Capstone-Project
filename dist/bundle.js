/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.div-logo {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nhtml body {\\r\\n  height: 100%;\\r\\n  background-color: #000;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  border: 4px solid hsl(0, 58%, 31%);\\r\\n  border-radius: 5%;\\r\\n  width: 10%;\\r\\n  height: 10%;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n#logo:hover {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  transform: scale(2);\\r\\n  transition: 0.5s;\\r\\n  -webkit-transform: scale(2);\\r\\n  -moz-transform: scale(2);\\r\\n  -ms-transform: scale(2);\\r\\n  -o-transform: scale(2);\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-right: 2rem;\\r\\n  padding-left: 2rem;\\r\\n  height: 100px;\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5rem;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  flex-wrap: nowrap;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\nli > a {\\r\\n  color: #fff;\\r\\n  list-style: none;\\r\\n  font-size: 24px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli > a:hover {\\r\\n  color: hsl(0, 100%, 30%);\\r\\n}\\r\\n\\r\\n.cards-display-section {\\r\\n  margin-bottom: 8rem;\\r\\n}\\r\\n\\r\\n.movie-item {\\r\\n  background-color: hsl(0, 100%, 30%);\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  margin: 5px 0;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  color: hsl(0, 100%, 30%);\\r\\n  border: none;\\r\\n  background-color: #000;\\r\\n  padding: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-right: 2rem;\\r\\n  padding-left: 2rem;\\r\\n  height: 100px;\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  padding: 5px;\\r\\n  font-weight: 700;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  #logo {\\r\\n    margin-right: 1.5rem;\\r\\n    width: 50%;\\r\\n    height: 50%;\\r\\n    margin-top: 1rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.closeBtd {\\r\\n  height: 30px;\\r\\n  width: 100%;\\r\\n  justify-content: end;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.closeBtd > img {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.imgDiv {\\r\\n  height: 295px;\\r\\n  width: 210px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.imgDiv > img {\\r\\n  height: 295px;\\r\\n  width: 210px;\\r\\n}\\r\\n\\r\\n.mainContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: #ffffff92;\\r\\n\\r\\n  /* overflow: scroll; */\\r\\n  z-index: 9999;\\r\\n}\\r\\n\\r\\n.mainContainer1 {\\r\\n  background: #fff;\\r\\n\\r\\n  /* margin-top: 20%; */\\r\\n  width: 80%;\\r\\n  top: 0;\\r\\n  border: 2px solid blue;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.liContainer {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.movieInfo {\\r\\n  flex-direction: row;\\r\\n  width: 100%;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.otherInfo {\\r\\n  flex-direction: column;\\r\\n  align-items: start;\\r\\n  margin: 10px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.otherInfo > span {\\r\\n  padding: 10px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.commentsDisplay {\\r\\n  flex-direction: column;\\r\\n  align-items: start;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.movieDetails {\\r\\n  flex-direction: column;\\r\\n  margin: 10px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.addComment {\\r\\n  flex-direction: column;\\r\\n  margin: 10px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.commentField {\\r\\n  flex-direction: column;\\r\\n  align-items: start;\\r\\n  margin: 10px;\\r\\n  justify-content: space-between;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.commentField > input {\\r\\n  width: 100%;\\r\\n  margin-bottom: 5px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.commentField > textarea {\\r\\n  width: 100%;\\r\\n  margin-bottom: 5px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/close_icon.png":
/*!***********************************!*\
  !*** ./src/images/close_icon.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/close_icon.png\");\n\n//# sourceURL=webpack://javascript-capstone-project/./src/images/close_icon.png?");

/***/ }),

/***/ "./src/images/logo1.jpg":
/*!******************************!*\
  !*** ./src/images/logo1.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/logo1.jpg\");\n\n//# sourceURL=webpack://javascript-capstone-project/./src/images/logo1.jpg?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _images_logo1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo1.jpg */ \"./src/images/logo1.jpg\");\n/* harmony import */ var _images_close_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/close_icon.png */ \"./src/images/close_icon.png\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_showLikes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showLikes.js */ \"./src/modules/showLikes.js\");\n/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/addLikes.js */ \"./src/modules/addLikes.js\");\n/* harmony import */ var _modules_comments_display_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/comments_display.js */ \"./src/modules/comments_display.js\");\n/* harmony import */ var _modules_comnt_fetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/comnt_fetch.js */ \"./src/modules/comnt_fetch.js\");\n\n\n\n\n\n\n\n\n\n\nconst addEvents = () => {\n  const likeIcons = document.querySelectorAll('.fa-heart');\n  likeIcons.forEach((likeIcon) => {\n    likeIcon.addEventListener('click', () => {\n      if (likeIcon.classList.contains('fa-solid', 'fa-heart-half')) {\n        return;\n      }\n      (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(likeIcon.dataset.id);\n      likeIcon.classList.add('fa-sharp', 'fa-solid', 'fa-heart-half');\n    });\n  });\n};\n\nconst displayAllMovies = async () => {\n  const display = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(display);\n  addEvents();\n  (0,_modules_showLikes_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\n};\n\nwindow.addEventListener('load', displayAllMovies);\n\n// COMMENT POPUP\nconst shows = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst arr = Array.from(shows);\n\nconst parentElem = document.getElementById('liContainer');\nparentElem.addEventListener('click', (event) => {\n  const matcher = event.target.matches('.btn');\n  const eventElem = event.target;\n  const eventId = eventElem.id - 1;\n\n  if (matcher) {\n    const newDiv = document.createElement('div');\n    newDiv.className = 'mainContainer';\n    newDiv.innerHTML = `\n    <div class=\"mainContainer1\">\n\n    \n    <div class=\"movieDetails flex\">\n    <div class=\"closeBtd flex\">\n        <img id=\"closeImg\" src=\"./images/close_icon.png\" alt=\"main image\">\n    </div>\n        <div class=\"imgDiv\">\n           <img src=\"${arr[eventId].image.medium}\">\n        </div>\n        <h2>${arr[eventId].name}</h2>\n        <div class=\"movieInfo flex\">\n            <div class=\"otherInfo flex\">\n                <span>Language: ${arr[eventId].language}</span>\n                <span>Genres : ${arr[eventId].genres}</span>\n            </div>\n            <div class=\"otherInfo flex\">\n                <span>Episode Length : ${arr[eventId].averageRuntime}</span>\n                <span>Rating : ${arr[eventId].rating.average}</span>\n            </div>\n        </div>\n        <div class=\"comments flex\">\n            <h3>Comments</h3>\n            <div id=\"commentsDisplay\" class=\"commentsDisplay flex\">\n            </div>\n        </div>\n        <div class=\"addComment flex\">\n            <h3>Add a comment</h3>\n            <div class=\"commentField flex\">\n                <input type=\"text\" id='nArea${eventId + 1}' class=\"name\" placeholder=\"Your name\">\n                <textarea name=\"\" id='mArea${eventId + 1}' cols=\"30\" rows=\"5\" placeholder=\"Your insights\"></textarea>\n                <button id=${eventId + 1} class=\"comntBtn\">Comment</button>\n            </div>\n        </div>\n    </div>\n</div>\n    `;\n    document.body.appendChild(newDiv);\n  }\n  (0,_modules_comments_display_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(eventId + 1);\n});\n\nconst bodyHtml = document.getElementById('liContainer');\nconst parent = bodyHtml.parentElement.parentElement;\n\nparent.addEventListener('click', (event) => {\n  if (event.target.matches('#closeImg')) {\n    const lastCh = parent.lastChild;\n    if (lastCh) {\n      document.body.removeChild(lastCh);\n    }\n  }\n});\n\nparent.addEventListener('click', (event) => {\n  if (event.target.matches('.comntBtn')) {\n    const lastCh = parent.lastChild;\n    const targetElem = event.target;\n    const id = targetElem.getAttribute('id');\n\n    if (lastCh) {\n      const comntField = event.target.previousElementSibling;\n      const nameField = comntField.previousElementSibling;\n      const comntFieldValue = comntField.value;\n      const nameFieldValue = nameField.value;\n      (0,_modules_comnt_fetch_js__WEBPACK_IMPORTED_MODULE_8__.saveComments)(id, nameFieldValue, comntFieldValue);\n      comntField.value = '';\n      nameField.value = '';\n      (0,_modules_comments_display_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(id);\n    }\n  }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showLikes.js */ \"./src/modules/showLikes.js\");\n\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/likes/';\n\nconst addLike = async (id) => {\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  (0,_showLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addLikes.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMovies = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const shows = await response.json();\n  return shows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comments_display.js":
/*!*****************************************!*\
  !*** ./src/modules/comments_display.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comnt_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comnt_fetch.js */ \"./src/modules/comnt_fetch.js\");\n\n\nasync function displayComments(id) {\n  const allComments = await (0,_comnt_fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(id).then((0,_comnt_fetch_js__WEBPACK_IMPORTED_MODULE_0__.saveComments)(id));\n  const targetElem = document.getElementById('commentsDisplay');\n  targetElem.innerHTML = '';\n  allComments.forEach((comment) => {\n    const newDiv = document.createElement('div');\n    const span1 = document.createElement('span');\n    const span2 = document.createElement('span');\n    const span3 = document.createElement('span');\n    span1.innerText = `${comment.creation_date} : `;\n    span2.innerText = `${comment.username} : `;\n    span3.innerText = comment.comment;\n    newDiv.appendChild(span1);\n    newDiv.appendChild(span2);\n    newDiv.appendChild(span3);\n    targetElem.appendChild(newDiv);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comments_display.js?");

/***/ }),

/***/ "./src/modules/comnt_fetch.js":
/*!************************************!*\
  !*** ./src/modules/comnt_fetch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments),\n/* harmony export */   saveComments: () => (/* binding */ saveComments)\n/* harmony export */ });\nconst fetchComments = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/comments?item_id=item${id}`);\n    const data = await response.json();\n    const dataArr = Array.from(data);\n    return dataArr;\n  } catch (error) {\n    console.error('Error fetching scores:', error);\n    return [];\n  }\n};\nconst saveComments = async (id, userName, userComment) => {\n  const comntUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/comments';\n  try {\n    await fetch(comntUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: `item${id}`,\n        username: userName,\n        comment: userComment,\n      }),\n    });\n\n    console.log('Score saved successfully!');\n  } catch (error) {\n    console.error('Error saving the score:', error);\n  }\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comnt_fetch.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsContainer = document.querySelector('.cards-display-section');\n\nconst displayMovies = async (shows) => {\n  for (let i = 0; i < 16 && i < shows.length; i += 1) {\n    const show = shows[i];\n\n    cardsContainer.innerHTML += `\n        <li id=\"movie-${show.id}\" class=\"movie-item\">\n          <img src=${show.image.medium} alt=\"movie-image\" class=\"movie-image\" />\n          <div class=\"likes-container\">\n            <h4 class=\"movie-title\">${show.name}</h4>\n            <div class=\"icon\">\n            <i class=\"fa-sharp fa-regular fa-heart\" data-id=${show.id}></i>\n            <p data-id=\"${show.id}\"><span class=\"like-rates\"></span></p>\n            </div>\n          </div>\n          <div>\n            <button class=\"btn\" id=\"${show.id}\">Comments</button>\n          </div>\n        </li>\n      `;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/showLikes.js":
/*!**********************************!*\
  !*** ./src/modules/showLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   showLikes: () => (/* binding */ showLikes),\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nasync function showLikes(likes) {\n  likes.forEach((like) => {\n    const elementId = `movie-${like.item_id}`;\n    const displayLike = document.getElementById(elementId);\n    if (displayLike) {\n      const likeRates = displayLike.querySelector('.like-rates');\n      likeRates.textContent = like.likes.toString();\n    }\n  });\n}\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uHJS5mPPPDDpgRsHQqad/likes/';\nconst getLikes = async () => {\n  const response = await fetch(url);\n  let likes = [];\n  likes = await response.json();\n  showLikes(likes);\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/showLikes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;