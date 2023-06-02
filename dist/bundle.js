/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo1.jpg */ \"./src/images/logo1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close_icon.png */ \"./src/images/close_icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #000;\\r\\n  font-family: Roboto, sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  top: 0;\\r\\n  position: fixed;\\r\\n  background-color: #000;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  height: 4.2rem;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.logoDiv {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  width: 60px;\\r\\n  height: 100%;\\r\\n  margin: 10%;\\r\\n}\\r\\n\\r\\n.logoDiv > img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#navbar {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#navbar span {\\r\\n  display: flex;\\r\\n  margin-right: 2rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n#navbar span a {\\r\\n  margin: 0;\\r\\n  padding-right: 5px;\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#counter {\\r\\n  color: hsl(0, 100%, 30%);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  margin-right: 2rem;\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-right: 2rem;\\r\\n  padding-left: 2rem;\\r\\n  height: 100px;\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  padding: 5px;\\r\\n  font-weight: 700;\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\n#movies-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 1rem;\\r\\n  margin: 3rem;\\r\\n  margin-top: 4rem;\\r\\n}\\r\\n\\r\\n.movie-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 1rem 0;\\r\\n  margin: 2rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  background-color: hsl(0, 100%, 30%);\\r\\n  width: 70%;\\r\\n  height: 40px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.movie-image {\\r\\n  width: 70%;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n.movie-name {\\r\\n  font-size: 1rem;\\r\\n  color: #000;\\r\\n  padding: 2px;\\r\\n  font-weight: 700;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.likes-counter {\\r\\n  margin-right: 10px;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.like-button > i {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: red;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  color: hsl(0, 100%, 30%);\\r\\n  background-color: #000;\\r\\n  border: none;\\r\\n  font-size: 1.2rem;\\r\\n  padding: 5px;\\r\\n  width: 90%;\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\n#popup-window {\\r\\n  background-color: gray;\\r\\n  position: absolute;\\r\\n  top: 3rem;\\r\\n  left: 16rem;\\r\\n  z-index: 999;\\r\\n  width: 50%;\\r\\n  margin: 3rem auto;\\r\\n  padding: 2rem;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#overlay {\\r\\n  position: fixed;\\r\\n  background-color: var(--light);\\r\\n  backdrop-filter: blur(5px);\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 998;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: cover;\\r\\n  position: absolute;\\r\\n  top: 5px;\\r\\n  right: 5px;\\r\\n  height: 2rem;\\r\\n  width: 2rem;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1.5fr 1fr;\\r\\n  grid-template-rows: auto auto;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.imageTitleDiv img {\\r\\n  width: 30%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n#form input {\\r\\n  height: 3rem;\\r\\n  width: 20rem;\\r\\n}\\r\\n\\r\\n.commentlist {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.commentli {\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  list-style: none;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.submitbtn {\\r\\n  height: 2rem;\\r\\n  color: #000;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMovies.js */ \"./src/modules/getMovies.js\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_postLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/postLike.js */ \"./src/modules/postLike.js\");\n/* harmony import */ var _modules_popupDisplay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupDisplay.js */ \"./src/modules/popupDisplay.js\");\n/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _modules_showComment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/showComment.js */ \"./src/modules/showComment.js\");\n/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/moviesCounter.js */ \"./src/modules/moviesCounter.js\");\n/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _modules_CommentCount_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/CommentCount.js */ \"./src/modules/CommentCount.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst appId = 'uHJS5mPPPDDpgRsHQqad';\n\nconst numberOfMovies = 15;\nconst movies = [];\n\nfor (let i = 1; i <= numberOfMovies; i += 1) {\n  // eslint-disable-next-line no-await-in-loop\n  const movie = await (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(i);\n  movies.push(movie);\n}\n\nconst updateLikes = async (appId) => {\n  let likes = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appId);\n\n  if (likes.length === 0) {\n    likes = [];\n  } else {\n    likes = JSON.parse(likes);\n  }\n\n  return likes;\n};\n\nconst likes = await updateLikes(appId);\n\nawait (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movies, likes, appId);\n\n// update count\nconst counter = document.getElementById('counter');\ncounter.innerHTML = await _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_8___default()();\n\nconst likeBtns = document.querySelectorAll('.like-button');\n\nconst update = async (likes, index, span) => {\n  const movieId = `${index + 1}`;\n  likes.forEach((item) => {\n    if (movieId === item.item_id) {\n      span.innerHTML = `${item.likes}`;\n    }\n  });\n};\n\nlikeBtns.forEach((item, index) => {\n  item.addEventListener('click', async (e) => {\n    const likesCount = e.currentTarget.parentNode.children[0];\n    await (0,_modules_postLike_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(appId, index + 1);\n    const likes = await updateLikes(appId);\n    const likesBox = await likesCount;\n    await update(likes, index, likesBox);\n  });\n});\n\n// SHOW & HIDE\nconst showhide = async () => {\n  document.getElementById('popup-window').classList.toggle('hide');\n  document.getElementById('popup-window').classList.toggle('show');\n  document.querySelector('#overlay').classList.toggle('hide');\n};\n\n// comment button\nconst commentbtns = document.querySelectorAll('.comments');\n\ncommentbtns.forEach((commentbtn, index) => {\n  commentbtn.addEventListener('click', async () => {\n    const resdata = await (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index + 1);\n    await showhide();\n    await (0,_modules_popupDisplay_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(resdata);\n    window.scrollTo(2, 2);\n    await (0,_modules_showComment_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(appId, index + 1);\n    await (0,_modules_CommentCount_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  });\n});\n\ndocument.addEventListener('click', async (event) => {\n  const { target } = event;\n\n  if (target.classList.contains('close-btn')) {\n    await showhide();\n  }\n});\n\n// add comment\n\ndocument.addEventListener('click', async (event) => {\n  const { target } = event;\n  if (target.classList.contains('submitbtn')) {\n    event.preventDefault();\n    const userName = document.getElementById('username').value;\n    const comment = document.getElementById('usercomment').value;\n    const movie = target.closest('#popup-window').index;\n    const userComment = { userName, comment };\n    await (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(appId, movie, userComment);\n    await (0,_modules_showComment_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(appId, movie);\n    await (0,_modules_CommentCount_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    document.getElementById('username').value = '';\n    document.getElementById('usercomment').value = '';\n  }\n});\n\n(0,_modules_CommentCount_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/CommentCount.js":
/*!*************************************!*\
  !*** ./src/modules/CommentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CommentCount = async () => {\n  const title = document.querySelector('.titlecomments');\n  const comments = document.querySelectorAll('.commentli');\n  const count = comments.length;\n  if (count > 0) {\n    title.innerText = `Comments (${count})`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentCount);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/CommentCount.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMovies = async (Movies, Likes) => {\n  const moviesContainer = document.getElementById('movies-container');\n  moviesContainer.innerHTML = '';\n  const movies = Movies;\n  const likes = Likes;\n\n  movies.forEach((movie, index) => {\n    const movieId = `${index + 1}`;\n    const div = document.createElement('div');\n    const movieBar = document.createElement('div');\n    const likeBox = document.createElement('div');\n    const span = document.createElement('span');\n    const button = document.createElement('button');\n    const comment = document.createElement('button');\n    div.className = 'movie-card';\n    div.index = `${index + 1}`;\n    movieBar.className = 'movie-description';\n    likeBox.className = 'likes';\n    span.className = 'likes-counter';\n    button.className = 'like-button';\n    comment.className = 'comments';\n    div.innerHTML = `\n    <img class=\"movie-image\" src=\"${movie.image.original}\">`;\n    movieBar.innerHTML = `<h2 class=\"movie-name\">${movie.name}</h2>`;\n    let likesCount = 0;\n    likes.forEach((item) => {\n      if (movieId === item.item_id) {\n        likesCount = item.likes;\n      }\n    });\n\n    span.innerHTML = `${likesCount}`;\n    button.innerHTML = '<i class=\"fas fa-heart\"></i>';\n    comment.innerHTML = 'Comment';\n    likeBox.appendChild(span);\n    likeBox.appendChild(button);\n    movieBar.appendChild(likeBox);\n    div.appendChild(movieBar);\n    div.appendChild(comment);\n    moviesContainer.appendChild(div);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async (appId) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n    options,\n  );\n\n  const data = await response.text();\n\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line consistent-return\nconst getMovie = async (Id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);\n\n  if (response.status === 200) {\n    const data = await response.json();\n    return data;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovie);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getMovies.js?");

/***/ }),

/***/ "./src/modules/getcomments.js":
/*!************************************!*\
  !*** ./src/modules/getcomments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (appId, itemId) => {\n  const options = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`,\n    options,\n  );\n\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getcomments.js?");

/***/ }),

/***/ "./src/modules/moviesCounter.js":
/*!**************************************!*\
  !*** ./src/modules/moviesCounter.js ***!
  \**************************************/
/***/ ((module) => {

eval("const updateCount = async () => {\n  const movieCount = await document.querySelectorAll('.movie-card');\n  return `(${movieCount.length})`;\n};\n\nmodule.exports = updateCount;\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/moviesCounter.js?");

/***/ }),

/***/ "./src/modules/popupDisplay.js":
/*!*************************************!*\
  !*** ./src/modules/popupDisplay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupDisplay = async (data) => {\n  const popupContainer = document.getElementById('popup-window');\n\n  while (popupContainer.firstChild) {\n    popupContainer.removeChild(popupContainer.firstChild);\n  }\n  popupContainer.index = data.id;\n  const cancelButton = document.createElement('img');\n  cancelButton.classList.add('close-btn');\n  cancelButton.src = './images/close_icon.png';\n  popupContainer.appendChild(cancelButton);\n\n  const imageTitleDiv = document.createElement('div');\n  imageTitleDiv.classList.add('imageTitleDiv');\n  popupContainer.appendChild(imageTitleDiv);\n\n  const image = document.createElement('img');\n  const title = document.createElement('h2');\n  image.alt = 'movie image';\n  image.src = data.image.original;\n  title.innerText = data.name;\n\n  imageTitleDiv.appendChild(image);\n  imageTitleDiv.appendChild(title);\n\n  const detailsDiv = document.createElement('div');\n  detailsDiv.classList.add('details');\n  popupContainer.appendChild(detailsDiv);\n\n  const language = document.createElement('p');\n  language.innerText = `Language :  ${data.language}`;\n  detailsDiv.appendChild(language);\n\n  const duration = document.createElement('p');\n  duration.innerText = `Episode length :   ${data.averageRuntime}`;\n  detailsDiv.appendChild(duration);\n\n  const genre = document.createElement('p');\n  genre.innerText = `Genres :  ${data.genres[0]}, ${data.genres[1]}`;\n  detailsDiv.appendChild(genre);\n\n  const status = document.createElement('p');\n  status.innerText = `Genres : ${data.status}`;\n  detailsDiv.appendChild(status);\n\n  const showComment = document.createElement('div');\n  showComment.classList.add('showcomment');\n  popupContainer.appendChild(showComment);\n\n  const commentstitle = document.createElement('h2');\n  commentstitle.classList.add('titlecomments');\n  showComment.appendChild(commentstitle);\n  commentstitle.innerText = 'Comments';\n\n  const commentlist = document.createElement('ol');\n  commentlist.classList.add('commentlist');\n  showComment.appendChild(commentlist);\n\n  const addComment = document.createElement('div');\n  addComment.classList.add('addcomment');\n  popupContainer.appendChild(addComment);\n\n  const addCommentTitle = document.createElement('h2');\n  addComment.appendChild(addCommentTitle);\n  addCommentTitle.innerText = 'Your Review';\n\n  const formEl = document.createElement('form');\n  formEl.id = 'form';\n  addComment.appendChild(formEl);\n\n  const inputName = document.createElement('input');\n  inputName.id = 'username';\n  inputName.type = 'text';\n  inputName.placeholder = 'your name';\n  inputName.required = true;\n  formEl.appendChild(inputName);\n\n  const inputComment = document.createElement('input');\n  inputComment.id = 'usercomment';\n  inputComment.type = 'text';\n  inputComment.placeholder = 'your comment';\n  inputComment.required = true;\n  formEl.appendChild(inputComment);\n\n  const submitbtn = document.createElement('button');\n  submitbtn.classList.add('submitbtn');\n  submitbtn.type = 'submit';\n  submitbtn.innerText = 'Submit';\n  formEl.appendChild(submitbtn);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupDisplay);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/popupDisplay.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addcomment = async (appId, movieId, userComment) => {\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: movieId,\n      username: userComment.userName,\n      comment: userComment.comment,\n    }),\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,\n    options,\n  );\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addcomment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst like = async (appId, movieId) => {\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `${movieId}`,\n    }),\n  };\n\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,\n    options,\n  );\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (like);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/modules/showComment.js":
/*!************************************!*\
  !*** ./src/modules/showComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getcomments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getcomments.js */ \"./src/modules/getcomments.js\");\n\n\nconst showComment = async (appId, index) => {\n  const comments = await (0,_getcomments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appId, index);\n  const list = document.querySelector('.commentlist');\n\n  if (comments.length > 0) {\n    list.innerHTML = '';\n    comments.forEach((comment) => {\n      const commentEl = document.createElement('li');\n      commentEl.classList.add('commentli');\n      commentEl.innerHTML = `${comment.creation_date} :: ${comment.username} : ${comment.comment} `;\n      list.appendChild(commentEl);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/showComment.js?");

/***/ }),

/***/ "./src/images/close_icon.png":
/*!***********************************!*\
  !*** ./src/images/close_icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d7b71e1554f9bb332aaa.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/images/close_icon.png?");

/***/ }),

/***/ "./src/images/logo1.jpg":
/*!******************************!*\
  !*** ./src/images/logo1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4e5338a7fa15d08a95ad.jpg\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/images/logo1.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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