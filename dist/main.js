"use strict";
(self["webpackChunkrestaurantsite"] = self["webpackChunkrestaurantsite"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Lora-Italic-VariableFont_wght.woff */ "./src/Lora-Italic-VariableFont_wght.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! jollof-rice-recipe-23.jpg */ "./src/jollof-rice-recipe-23.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'main-font';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body{
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;

}

.content {
    flex: 1; /* Allow content to grow and push footer down */
    max-width: 100%; /* Constrain content to viewport width */
    overflow-x: hidden; /* Prevent horizontal overflow */
}
*, :after, :before {
    box-sizing: border-box;
}
header {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    flex-wrap: wrap;
}
nav{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

button {
    background: rgb(197, 103, 8);
    color: white;
    border: none;
    border-radius: 3px 10px;
    height: 50px;
    width: 130px;
    font-size: 17px;
    font-size: 20px;
}

/*homepage*/
.homepage {
    display: grid;
    grid-template-rows: 2fr 3fr 1fr;
    margin-bottom: 10px;
    gap: 10px;
    justify-content: center;
    margin: 10px;
    max-width: 400%;
}

.section1 {
    display: flex;
    text-align: center;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 5px rgb(211, 204, 197);
    background-color: rgb(197, 103, 8, 0.9);
    margin: 50px;
    margin-top: 0;
    font-size: 20px;
    position: relative;
    z-index: 1;
    color: white;
    padding: 40px;
    flex-direction: column;
    padding-top: 0px;
    justify-content: center;
    flex-wrap: wrap;
}

.section1>h1, .sec2element1 > h2{
    font-size: 70px;
    font-family: 'main-font';
}

.section1>p, .sec2element1 > p {
    font-size: 30px;
    text-align: justify ;
}
.section2{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.section2 {
    gap: 40px;
}

.sec2element1{
    padding: 50px;
    width: 700px
}

.sec3content {
    color: white;
    background: rgb(197, 103, 8);
    padding: 15px;
    border-radius: 5px 10px;
    font-size: 60px;
    width: 400px;
    text-align: center;
}
.main-img {
    height: 700px;
    width: 700px;
}

/*menu page*/

.menu-page {
    display: grid;
    grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr;
    margin-bottom: 10px;
}

.hero, .section3{
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
 
.hero::before, .section3::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1; 
}

.hero::before, .section3::before{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}


.hero-content {
    color: white;
    background: rgb(197, 103, 8);
    padding: 15px;
    border-radius: 5px 10px;
    font-size: 100px;
    padding: 20px;
    width: 500px;
    text-align: center;
}
.sub-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-bottom: 20px;

    padding: 1rem;;
    
}

.sub-section > h1 {
    font-weight: 700;
    color: rgb(185, 93, 0);;
}
.rice-boxes{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;


}
.veg-boxes {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
}

.box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    box-shadow: 5px 5px 5px rgb(194, 150, 106);
    box-sizing: border-box;
    background: white;
    color: black;
    padding: 20px;
    border-radius: 15px;
    font-size: 30px;
    max-width: 100%;
    width: 400px;
}

.Lists {
    display: flex;
    justify-content: space-between;

}

.menu-img {
    height: 150px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;

}

footer {
    background: rgb(197, 103, 8);
    color: white;
    font-size: 20px;
    text-align: center;
    padding: 1rem;;
    display: block;
    box-sizing: border-box;
}

body > * {
    border: 3px solid red;
}

.sub-section {
    border: 3px solid blue;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'main-font';\n    src: url('Lora-Italic-VariableFont_wght.woff');\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.content {\n    flex: 1; /* Allow content to grow and push footer down */\n    max-width: 100%; /* Constrain content to viewport width */\n    overflow-x: hidden; /* Prevent horizontal overflow */\n}\n*, :after, :before {\n    box-sizing: border-box;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    margin: 10px;\n    padding: 10px;\n    flex-wrap: wrap;\n}\nnav{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\nbutton {\n    background: rgb(197, 103, 8);\n    color: white;\n    border: none;\n    border-radius: 3px 10px;\n    height: 50px;\n    width: 130px;\n    font-size: 17px;\n    font-size: 20px;\n}\n\n/*homepage*/\n.homepage {\n    display: grid;\n    grid-template-rows: 2fr 3fr 1fr;\n    margin-bottom: 10px;\n    gap: 10px;\n    justify-content: center;\n    margin: 10px;\n    max-width: 400%;\n}\n\n.section1 {\n    display: flex;\n    text-align: center;\n    border-radius: 15px;\n    box-shadow: 5px 5px 5px 5px rgb(211, 204, 197);\n    background-color: rgb(197, 103, 8, 0.9);\n    margin: 50px;\n    margin-top: 0;\n    font-size: 20px;\n    position: relative;\n    z-index: 1;\n    color: white;\n    padding: 40px;\n    flex-direction: column;\n    padding-top: 0px;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.section1>h1, .sec2element1 > h2{\n    font-size: 70px;\n    font-family: 'main-font';\n}\n\n.section1>p, .sec2element1 > p {\n    font-size: 30px;\n    text-align: justify ;\n}\n.section2{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.section2 {\n    gap: 40px;\n}\n\n.sec2element1{\n    padding: 50px;\n    width: 700px\n}\n\n.sec3content {\n    color: white;\n    background: rgb(197, 103, 8);\n    padding: 15px;\n    border-radius: 5px 10px;\n    font-size: 60px;\n    width: 400px;\n    text-align: center;\n}\n.main-img {\n    height: 700px;\n    width: 700px;\n}\n\n/*menu page*/\n\n.menu-page {\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr;\n    margin-bottom: 10px;\n}\n\n.hero, .section3{\n    position: relative;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n \n.hero::before, .section3::before{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n    background-position: center;\n    opacity: 0.5;\n    z-index: -1; \n}\n\n.hero::before, .section3::before{\n    background-image: url('jollof-rice-recipe-23.jpg');\n}\n\n\n.hero-content {\n    color: white;\n    background: rgb(197, 103, 8);\n    padding: 15px;\n    border-radius: 5px 10px;\n    font-size: 100px;\n    padding: 20px;\n    width: 500px;\n    text-align: center;\n}\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    margin-bottom: 20px;\n\n    padding: 1rem;;\n    \n}\n\n.sub-section > h1 {\n    font-weight: 700;\n    color: rgb(185, 93, 0);;\n}\n.rice-boxes{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 100%;\n\n\n}\n.veg-boxes {\n    display: flex;\n    gap: 5px;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 100%;\n}\n\n.box {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 5px 5px 5px rgb(194, 150, 106);\n    box-sizing: border-box;\n    background: white;\n    color: black;\n    padding: 20px;\n    border-radius: 15px;\n    font-size: 30px;\n    max-width: 100%;\n    width: 400px;\n}\n\n.Lists {\n    display: flex;\n    justify-content: space-between;\n\n}\n\n.menu-img {\n    height: 150px;\n}\n\nul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n\n}\n\nfooter {\n    background: rgb(197, 103, 8);\n    color: white;\n    font-size: 20px;\n    text-align: center;\n    padding: 1rem;;\n    display: block;\n    box-sizing: border-box;\n}\n\nbody > * {\n    border: 3px solid red;\n}\n\n.sub-section {\n    border: 3px solid blue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jollof-rice-recipe-23.jpg */ "./src/jollof-rice-recipe-23.jpg");


function createHome(){
    const element = document.createElement('div');
    element.classList.add('homepage');

    const section1= document.createElement('div');
    section1.classList.add('section1');

    const sectionHeader = document.createElement('h1');
    sectionHeader.innerHTML= 'Welcome to Midhass Catering Services';

    const sectionContent = document.createElement('p');
    sectionContent.innerHTML= `
    Midhass Catering Services offers convenient and delicious home-cooked meals, specializing in authentic Nigerian cuisine.
    Available for pickup, we prepare a variety of traditional Nigerian dishes, ensuring a taste of home in every bite.
    Whether you're craving Jollof rice, Egusi soup, or other classic Nigerian meals, Midhass provides a reliable and tasty solution for your dining needs.
    Enjoy the comfort of homemade Nigerian food without the hassle of cooking!
`;
    section1.append(sectionHeader, sectionContent);

//Section 2
    const section2 = document.createElement('div');
    section2.classList.add('section2');

    const sec2element1= document.createElement('div');
    sec2element1.classList.add('sec2element1');

    const sec2element2= document.createElement('div');
    sec2element2.classList.add('sec2element2');

    const section2Header = document.createElement('h2');
    section2Header.innerHTML= 'Signature Dish'

    const section2Content = document.createElement('p');
    section2Content.innerHTML= `Nigerian Jollof Rice is a popular West African dish known for its rich, flavorful taste and vibrant red color. It is made primarily from rice cooked in a tomato-based sauce, which includes ingredients like tomatoes, onions, bell peppers, and a mix of spices such as thyme, bay leaves, and chili peppers. The dish often incorporates additional flavor from stock or broth, and it can be enhanced with vegetables like carrots and peas. 
    Jollof rice is usually served with fried plantains, grilled or fried chicken, fish, or beef. 
    It is a beloved dish in Nigeria and across West Africa, often prepared for special occasions and gatherings.`

    const JRImg = new Image();
    JRImg.src = _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__;
    JRImg.classList.add('main-img')
    sec2element1.append(section2Header, section2Content);
    sec2element2.appendChild(JRImg);

    section2.append(sec2element1, sec2element2);

    //Section 3
    const section3 = document.createElement('div');
    section3.classList.add('section3');

    const sec3content= document.createElement('div');
    sec3content.classList.add('sec3content');
    sec3content.innerHTML= 'Order Here';

    section3.append(sec3content);

    element.append(section1, section2, section3);

    return element
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
  
    function loadTab(tab) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(tab);
    }
  
    document.getElementById('home-tab').addEventListener('click', () => loadTab((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()));
    document.getElementById('menu-tab').addEventListener('click', () => loadTab((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()));
  
    loadTab((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  });

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jollof-rice-recipe-23.jpg */ "./src/jollof-rice-recipe-23.jpg");


function createBox(title, imageSrc, items, prices){
    const Box = document.createElement('div');
    Box.classList.add('box');
    const riceImg = document.createElement('div');
    const Img = new Image();
    Img.src = imageSrc;
    Img.classList.add('menu-img')
    riceImg.append(Img)

    const priceElement = document.createElement('div');
    const Title = document.createElement('h3');
    Title.innerHTML= title;

    const PriceList= document.createElement('div');
    PriceList.classList.add('Lists');

    const Trays = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      Trays.appendChild(li);
    });
    
    const Prices = document.createElement('ul');
    prices.forEach(price => {
        const li = document.createElement('li');
        li.textContent = price;
        Prices.appendChild(li);
      });
    PriceList.append(Trays, Prices);

    priceElement.append(Title, PriceList);

    Box.append(riceImg, priceElement);
    return Box;
    
}


function createMenu(){
    const element = document.createElement('div');
    element.classList.add('menu-page');

    const items = ['Quarter Tray', 'Small Tray', 'Medium Tray', 'Large Tray', 'Small Cooler', 'Large Cooler'];

    const hero =document.createElement('div');
    hero.classList.add('hero');
    

    const heroTitle = document.createElement('div');
    heroTitle.classList.add('hero-content');
    heroTitle.innerHTML= 'Menu'

    hero.appendChild(heroTitle)
    //RICE
    const riceSection =  document.createElement('div');
    riceSection.classList.add('sub-section');
    
    //Rice subsection
    const riceHeader = document.createElement('h1');
    riceHeader.innerHTML= 'RICE'

    const riceBoxes = document.createElement('div');
    riceBoxes.classList.add('rice-boxes');

    //Jollof
    const jollofRice = createBox('Jollof Rice', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const friedRice = createBox('Fried Rice', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const coconutRice = createBox('Coconut Rice', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const whiteRice = createBox('White Rice', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    riceBoxes.append(jollofRice, friedRice, coconutRice, whiteRice);

    //rice section append
    riceSection.append(riceHeader, riceBoxes);

    
    //VEGETABLE
    const vegetableSection =  document.createElement('div');
    vegetableSection.classList.add('sub-section');
    //TITLE
    const vegHeader = document.createElement('h1');
    vegHeader.innerHTML= 'VEGETABLES'

    const vegBoxes = document.createElement('div');
    vegBoxes.classList.add('veg-boxes');

    //Eforiro
    const eforiro = createBox('Efo Riro', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Efo Egusi
    const efoEgusi = createBox('Efo Egusi', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Sauteed Spinach
    const sauteedSpinach = createBox('Sauteed Spinach', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    vegBoxes.append(eforiro, efoEgusi, sauteedSpinach);
    vegetableSection.append(vegHeader, vegBoxes)


    //SOUPS AND STEWS
    const soupsandstewsSection =  document.createElement('div');
    soupsandstewsSection.classList.add('sub-section');
    //TITLE
    const soupsandstewsHeader = document.createElement('h1');
    soupsandstewsHeader.innerHTML= 'SOUPS AND STEWS'
    const soupsBoxes = document.createElement('div');
    soupsBoxes.classList.add('veg-boxes');
  //Eforiro
    const obe = createBox('Efo Riro', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Efo Egusi
    const Egusi = createBox('Efo Egusi', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Sauteed Spinach
    const Spinach = createBox('Sauteed Spinach', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    soupsBoxes.append(obe, Egusi, Spinach);


    soupsandstewsSection.append(soupsandstewsHeader,soupsBoxes);

    //SWALLOWS
    const swallowsSection =  document.createElement('div');
    swallowsSection.classList.add('sub-section');
    //TITLE
    const swallowsHeader = document.createElement('h1');
    swallowsHeader.innerHTML= 'SWALLOWS'

    const swallowBoxes = document.createElement('div');
    swallowBoxes.classList.add('rice-boxes');
    //Jollof
    const eba = createBox('Eba', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const amala = createBox('Amala', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const poundo = createBox('Poundo', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const oatfufu = createBox('Oat Fufu', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    swallowBoxes.append(eba, amala, poundo, oatfufu);

    swallowsSection.append(swallowsHeader, swallowBoxes);


    
    //SIDES
    const sidesSection =  document.createElement('div');
    sidesSection.classList.add('sub-section');
    //TITLE
    const sidesHeader = document.createElement('h1');
    sidesHeader.innerHTML= 'SIDES'

    const sidesBoxes = document.createElement('div');
    sidesBoxes.classList.add('rice-boxes');
    //Jollof
    const seba = createBox('Eba', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const samala = createBox('Amala', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const spoundo = createBox('Poundo', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const soatfufu = createBox('Oat Fufu', _jollof_rice_recipe_23_jpg__WEBPACK_IMPORTED_MODULE_0__, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    sidesBoxes.append(seba, samala, spoundo, soatfufu);

    sidesSection.append(sidesHeader, sidesBoxes);




    element.append(hero, riceSection, vegetableSection, soupsandstewsSection, swallowsSection, sidesSection)
    return element;
}


/***/ }),

/***/ "./src/Lora-Italic-VariableFont_wght.woff":
/*!************************************************!*\
  !*** ./src/Lora-Italic-VariableFont_wght.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9024a6106ac7f68a41cc.woff";

/***/ }),

/***/ "./src/jollof-rice-recipe-23.jpg":
/*!***************************************!*\
  !*** ./src/jollof-rice-recipe-23.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10d6892baa37e4d2d0cf.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVoRDtBQUNBLHlDQUF5Qyx1REFBVTs7QUFFbkQ7QUFDQSxpREFBaUQsdURBQVU7O0FBRTNEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFVOztBQUUzQztBQUNBLHFDQUFxQyx1REFBVTs7QUFFL0M7QUFDQSx1Q0FBdUMsdURBQVU7O0FBRWpEO0FBQ0EsMENBQTBDLHVEQUFVOztBQUVwRDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdURBQVU7O0FBRTVDO0FBQ0Esc0NBQXNDLHVEQUFVOztBQUVoRDtBQUNBLHdDQUF3Qyx1REFBVTs7QUFFbEQ7QUFDQSwyQ0FBMkMsdURBQVU7O0FBRXJEO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTG9yYS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImpvbGxvZi1yaWNlLXJlY2lwZS0yMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4OiAxOyAvKiBBbGxvdyBjb250ZW50IHRvIGdyb3cgYW5kIHB1c2ggZm9vdGVyIGRvd24gKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIENvbnN0cmFpbiBjb250ZW50IHRvIHZpZXdwb3J0IHdpZHRoICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBQcmV2ZW50IGhvcml6b250YWwgb3ZlcmZsb3cgKi9cbn1cbiosIDphZnRlciwgOmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxubmF2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxMDMsIDgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKmhvbWVwYWdlKi9cbi5ob21lcGFnZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAzZnIgMWZyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXgtd2lkdGg6IDQwMCU7XG59XG5cbi5zZWN0aW9uMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggcmdiKDIxMSwgMjA0LCAxOTcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDEwMywgOCwgMC45KTtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNlY3Rpb24xPmgxLCAuc2VjMmVsZW1lbnQxID4gaDJ7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnbWFpbi1mb250Jztcbn1cblxuLnNlY3Rpb24xPnAsIC5zZWMyZWxlbWVudDEgPiBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSA7XG59XG4uc2VjdGlvbjJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24yIHtcbiAgICBnYXA6IDQwcHg7XG59XG5cbi5zZWMyZWxlbWVudDF7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB3aWR0aDogNzAwcHhcbn1cblxuLnNlYzNjb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTAzLCA4KTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4taW1nIHtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIHdpZHRoOiA3MDBweDtcbn1cblxuLyptZW51IHBhZ2UqL1xuXG4ubWVudS1wYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnIgMmZyIDJmciAyZnI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhlcm8sIC5zZWN0aW9uM3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gXG4uaGVybzo6YmVmb3JlLCAuc2VjdGlvbjM6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IC0xOyBcbn1cblxuLmhlcm86OmJlZm9yZSwgLnNlY3Rpb24zOjpiZWZvcmV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5cbi5oZXJvLWNvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxMDMsIDgpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3ViLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgcGFkZGluZzogMXJlbTs7XG4gICAgXG59XG5cbi5zdWItc2VjdGlvbiA+IGgxIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMTg1LCA5MywgMCk7O1xufVxuLnJpY2UtYm94ZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuXG59XG4udmVnLWJveGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiKDE5NCwgMTUwLCAxMDYpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuLkxpc3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4ubWVudS1pbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTs7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSA+ICoge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbn1cblxuLnN1Yi1zZWN0aW9uIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLE9BQU8sRUFBRSwrQ0FBK0M7SUFDeEQsZUFBZSxFQUFFLHdDQUF3QztJQUN6RCxrQkFBa0IsRUFBRSxnQ0FBZ0M7QUFDeEQ7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSxZQUFZOztBQUVaO0lBQ0ksYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQWtEO0FBQ3REOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlOzs7QUFHbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcbiAgICBzcmM6IHVybCgnTG9yYS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQud29mZicpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGZsZXg6IDE7IC8qIEFsbG93IGNvbnRlbnQgdG8gZ3JvdyBhbmQgcHVzaCBmb290ZXIgZG93biAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIENvbnN0cmFpbiBjb250ZW50IHRvIHZpZXdwb3J0IHdpZHRoICovXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogUHJldmVudCBob3Jpem9udGFsIG92ZXJmbG93ICovXFxufVxcbiosIDphZnRlciwgOmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKmhvbWVwYWdlKi9cXG4uaG9tZXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAzZnIgMWZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogNDAwJTtcXG59XFxuXFxuLnNlY3Rpb24xIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggcmdiKDIxMSwgMjA0LCAxOTcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxMDMsIDgsIDAuOSk7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNlY3Rpb24xPmgxLCAuc2VjMmVsZW1lbnQxID4gaDJ7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcbn1cXG5cXG4uc2VjdGlvbjE+cCwgLnNlYzJlbGVtZW50MSA+IHAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgO1xcbn1cXG4uc2VjdGlvbjJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uMiB7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnNlYzJlbGVtZW50MXtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgd2lkdGg6IDcwMHB4XFxufVxcblxcbi5zZWMzY29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTAzLCA4KTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWltZyB7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG59XFxuXFxuLyptZW51IHBhZ2UqL1xcblxcbi5tZW51LXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyIDJmciAyZnIgMmZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVybywgLnNlY3Rpb24ze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4gXFxuLmhlcm86OmJlZm9yZSwgLnNlY3Rpb24zOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHotaW5kZXg6IC0xOyBcXG59XFxuXFxuLmhlcm86OmJlZm9yZSwgLnNlY3Rpb24zOjpiZWZvcmV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnam9sbG9mLXJpY2UtcmVjaXBlLTIzLmpwZycpO1xcbn1cXG5cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxMDMsIDgpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDFyZW07O1xcbiAgICBcXG59XFxuXFxuLnN1Yi1zZWN0aW9uID4gaDEge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogcmdiKDE4NSwgOTMsIDApOztcXG59XFxuLnJpY2UtYm94ZXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcblxcblxcbn1cXG4udmVnLWJveGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigxOTQsIDE1MCwgMTA2KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLkxpc3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG4ubWVudS1pbWcge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBKb2xsb2ZSaWNlIGZyb20gJy4vam9sbG9mLXJpY2UtcmVjaXBlLTIzLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlJyk7XG5cbiAgICBjb25zdCBzZWN0aW9uMT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbjEnKTtcblxuICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNlY3Rpb25IZWFkZXIuaW5uZXJIVE1MPSAnV2VsY29tZSB0byBNaWRoYXNzIENhdGVyaW5nIFNlcnZpY2VzJztcblxuICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlY3Rpb25Db250ZW50LmlubmVySFRNTD0gYFxuICAgIE1pZGhhc3MgQ2F0ZXJpbmcgU2VydmljZXMgb2ZmZXJzIGNvbnZlbmllbnQgYW5kIGRlbGljaW91cyBob21lLWNvb2tlZCBtZWFscywgc3BlY2lhbGl6aW5nIGluIGF1dGhlbnRpYyBOaWdlcmlhbiBjdWlzaW5lLlxuICAgIEF2YWlsYWJsZSBmb3IgcGlja3VwLCB3ZSBwcmVwYXJlIGEgdmFyaWV0eSBvZiB0cmFkaXRpb25hbCBOaWdlcmlhbiBkaXNoZXMsIGVuc3VyaW5nIGEgdGFzdGUgb2YgaG9tZSBpbiBldmVyeSBiaXRlLlxuICAgIFdoZXRoZXIgeW91J3JlIGNyYXZpbmcgSm9sbG9mIHJpY2UsIEVndXNpIHNvdXAsIG9yIG90aGVyIGNsYXNzaWMgTmlnZXJpYW4gbWVhbHMsIE1pZGhhc3MgcHJvdmlkZXMgYSByZWxpYWJsZSBhbmQgdGFzdHkgc29sdXRpb24gZm9yIHlvdXIgZGluaW5nIG5lZWRzLlxuICAgIEVuam95IHRoZSBjb21mb3J0IG9mIGhvbWVtYWRlIE5pZ2VyaWFuIGZvb2Qgd2l0aG91dCB0aGUgaGFzc2xlIG9mIGNvb2tpbmchXG5gO1xuICAgIHNlY3Rpb24xLmFwcGVuZChzZWN0aW9uSGVhZGVyLCBzZWN0aW9uQ29udGVudCk7XG5cbi8vU2VjdGlvbiAyXG4gICAgY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uMicpO1xuXG4gICAgY29uc3Qgc2VjMmVsZW1lbnQxPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWMyZWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnc2VjMmVsZW1lbnQxJyk7XG5cbiAgICBjb25zdCBzZWMyZWxlbWVudDI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYzJlbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdzZWMyZWxlbWVudDInKTtcblxuICAgIGNvbnN0IHNlY3Rpb24ySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzZWN0aW9uMkhlYWRlci5pbm5lckhUTUw9ICdTaWduYXR1cmUgRGlzaCdcblxuICAgIGNvbnN0IHNlY3Rpb24yQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZWN0aW9uMkNvbnRlbnQuaW5uZXJIVE1MPSBgTmlnZXJpYW4gSm9sbG9mIFJpY2UgaXMgYSBwb3B1bGFyIFdlc3QgQWZyaWNhbiBkaXNoIGtub3duIGZvciBpdHMgcmljaCwgZmxhdm9yZnVsIHRhc3RlIGFuZCB2aWJyYW50IHJlZCBjb2xvci4gSXQgaXMgbWFkZSBwcmltYXJpbHkgZnJvbSByaWNlIGNvb2tlZCBpbiBhIHRvbWF0by1iYXNlZCBzYXVjZSwgd2hpY2ggaW5jbHVkZXMgaW5ncmVkaWVudHMgbGlrZSB0b21hdG9lcywgb25pb25zLCBiZWxsIHBlcHBlcnMsIGFuZCBhIG1peCBvZiBzcGljZXMgc3VjaCBhcyB0aHltZSwgYmF5IGxlYXZlcywgYW5kIGNoaWxpIHBlcHBlcnMuIFRoZSBkaXNoIG9mdGVuIGluY29ycG9yYXRlcyBhZGRpdGlvbmFsIGZsYXZvciBmcm9tIHN0b2NrIG9yIGJyb3RoLCBhbmQgaXQgY2FuIGJlIGVuaGFuY2VkIHdpdGggdmVnZXRhYmxlcyBsaWtlIGNhcnJvdHMgYW5kIHBlYXMuIFxuICAgIEpvbGxvZiByaWNlIGlzIHVzdWFsbHkgc2VydmVkIHdpdGggZnJpZWQgcGxhbnRhaW5zLCBncmlsbGVkIG9yIGZyaWVkIGNoaWNrZW4sIGZpc2gsIG9yIGJlZWYuIFxuICAgIEl0IGlzIGEgYmVsb3ZlZCBkaXNoIGluIE5pZ2VyaWEgYW5kIGFjcm9zcyBXZXN0IEFmcmljYSwgb2Z0ZW4gcHJlcGFyZWQgZm9yIHNwZWNpYWwgb2NjYXNpb25zIGFuZCBnYXRoZXJpbmdzLmBcblxuICAgIGNvbnN0IEpSSW1nID0gbmV3IEltYWdlKCk7XG4gICAgSlJJbWcuc3JjID0gSm9sbG9mUmljZTtcbiAgICBKUkltZy5jbGFzc0xpc3QuYWRkKCdtYWluLWltZycpXG4gICAgc2VjMmVsZW1lbnQxLmFwcGVuZChzZWN0aW9uMkhlYWRlciwgc2VjdGlvbjJDb250ZW50KTtcbiAgICBzZWMyZWxlbWVudDIuYXBwZW5kQ2hpbGQoSlJJbWcpO1xuXG4gICAgc2VjdGlvbjIuYXBwZW5kKHNlYzJlbGVtZW50MSwgc2VjMmVsZW1lbnQyKTtcblxuICAgIC8vU2VjdGlvbiAzXG4gICAgY29uc3Qgc2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uMy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uMycpO1xuXG4gICAgY29uc3Qgc2VjM2NvbnRlbnQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYzNjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlYzNjb250ZW50Jyk7XG4gICAgc2VjM2NvbnRlbnQuaW5uZXJIVE1MPSAnT3JkZXIgSGVyZSc7XG5cbiAgICBzZWN0aW9uMy5hcHBlbmQoc2VjM2NvbnRlbnQpO1xuXG4gICAgZWxlbWVudC5hcHBlbmQoc2VjdGlvbjEsIHNlY3Rpb24yLCBzZWN0aW9uMyk7XG5cbiAgICByZXR1cm4gZWxlbWVudFxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgIGZyb20gJy4vbWVudSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIFxuICAgIGZ1bmN0aW9uIGxvYWRUYWIodGFiKSB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9XG4gIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFRhYihjcmVhdGVIb21lKCkpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS10YWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRUYWIoY3JlYXRlTWVudSgpKSk7XG4gIFxuICAgIGxvYWRUYWIoY3JlYXRlSG9tZSgpKTtcbiAgfSk7IiwiaW1wb3J0IEpvbGxvZlJpY2UgZnJvbSAnLi9qb2xsb2YtcmljZS1yZWNpcGUtMjMuanBnJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm94KHRpdGxlLCBpbWFnZVNyYywgaXRlbXMsIHByaWNlcyl7XG4gICAgY29uc3QgQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIGNvbnN0IHJpY2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBJbWcuc3JjID0gaW1hZ2VTcmM7XG4gICAgSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJylcbiAgICByaWNlSW1nLmFwcGVuZChJbWcpXG5cbiAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgVGl0bGUuaW5uZXJIVE1MPSB0aXRsZTtcblxuICAgIGNvbnN0IFByaWNlTGlzdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgUHJpY2VMaXN0LmNsYXNzTGlzdC5hZGQoJ0xpc3RzJyk7XG5cbiAgICBjb25zdCBUcmF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgIFRyYXlzLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBQcmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByaWNlcy5mb3JFYWNoKHByaWNlID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgICAgICBQcmljZXMuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSk7XG4gICAgUHJpY2VMaXN0LmFwcGVuZChUcmF5cywgUHJpY2VzKTtcblxuICAgIHByaWNlRWxlbWVudC5hcHBlbmQoVGl0bGUsIFByaWNlTGlzdCk7XG5cbiAgICBCb3guYXBwZW5kKHJpY2VJbWcsIHByaWNlRWxlbWVudCk7XG4gICAgcmV0dXJuIEJveDtcbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG5cbiAgICBjb25zdCBpdGVtcyA9IFsnUXVhcnRlciBUcmF5JywgJ1NtYWxsIFRyYXknLCAnTWVkaXVtIFRyYXknLCAnTGFyZ2UgVHJheScsICdTbWFsbCBDb29sZXInLCAnTGFyZ2UgQ29vbGVyJ107XG5cbiAgICBjb25zdCBoZXJvID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBcblxuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdoZXJvLWNvbnRlbnQnKTtcbiAgICBoZXJvVGl0bGUuaW5uZXJIVE1MPSAnTWVudSdcblxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKVxuICAgIC8vUklDRVxuICAgIGNvbnN0IHJpY2VTZWN0aW9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpY2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1zZWN0aW9uJyk7XG4gICAgXG4gICAgLy9SaWNlIHN1YnNlY3Rpb25cbiAgICBjb25zdCByaWNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByaWNlSGVhZGVyLmlubmVySFRNTD0gJ1JJQ0UnXG5cbiAgICBjb25zdCByaWNlQm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWNlQm94ZXMuY2xhc3NMaXN0LmFkZCgncmljZS1ib3hlcycpO1xuXG4gICAgLy9Kb2xsb2ZcbiAgICBjb25zdCBqb2xsb2ZSaWNlID0gY3JlYXRlQm94KCdKb2xsb2YgUmljZScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddICk7XG5cbiAgICAvL0ZyaWVkaWNlXG4gICAgY29uc3QgZnJpZWRSaWNlID0gY3JlYXRlQm94KCdGcmllZCBSaWNlJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKTtcblxuICAgIC8vQ29jb251dFJpY2VcbiAgICBjb25zdCBjb2NvbnV0UmljZSA9IGNyZWF0ZUJveCgnQ29jb251dCBSaWNlJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKVxuXG4gICAgLy9XaGl0ZVJpY2VcbiAgICBjb25zdCB3aGl0ZVJpY2UgPSBjcmVhdGVCb3goJ1doaXRlIFJpY2UnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApXG5cbiAgICAvL3JpY2Vib3hlcyBhcHBlbmRcbiAgICByaWNlQm94ZXMuYXBwZW5kKGpvbGxvZlJpY2UsIGZyaWVkUmljZSwgY29jb251dFJpY2UsIHdoaXRlUmljZSk7XG5cbiAgICAvL3JpY2Ugc2VjdGlvbiBhcHBlbmRcbiAgICByaWNlU2VjdGlvbi5hcHBlbmQocmljZUhlYWRlciwgcmljZUJveGVzKTtcblxuICAgIFxuICAgIC8vVkVHRVRBQkxFXG4gICAgY29uc3QgdmVnZXRhYmxlU2VjdGlvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2ZWdldGFibGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1zZWN0aW9uJyk7XG4gICAgLy9USVRMRVxuICAgIGNvbnN0IHZlZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdmVnSGVhZGVyLmlubmVySFRNTD0gJ1ZFR0VUQUJMRVMnXG5cbiAgICBjb25zdCB2ZWdCb3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlZ0JveGVzLmNsYXNzTGlzdC5hZGQoJ3ZlZy1ib3hlcycpO1xuXG4gICAgLy9FZm9yaXJvXG4gICAgY29uc3QgZWZvcmlybyA9IGNyZWF0ZUJveCgnRWZvIFJpcm8nLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSlcblxuICAgIC8vRWZvIEVndXNpXG4gICAgY29uc3QgZWZvRWd1c2kgPSBjcmVhdGVCb3goJ0VmbyBFZ3VzaScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddKVxuXG4gICAgLy9TYXV0ZWVkIFNwaW5hY2hcbiAgICBjb25zdCBzYXV0ZWVkU3BpbmFjaCA9IGNyZWF0ZUJveCgnU2F1dGVlZCBTcGluYWNoJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10pXG5cbiAgICB2ZWdCb3hlcy5hcHBlbmQoZWZvcmlybywgZWZvRWd1c2ksIHNhdXRlZWRTcGluYWNoKTtcbiAgICB2ZWdldGFibGVTZWN0aW9uLmFwcGVuZCh2ZWdIZWFkZXIsIHZlZ0JveGVzKVxuXG5cbiAgICAvL1NPVVBTIEFORCBTVEVXU1xuICAgIGNvbnN0IHNvdXBzYW5kc3Rld3NTZWN0aW9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvdXBzYW5kc3Rld3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1zZWN0aW9uJyk7XG4gICAgLy9USVRMRVxuICAgIGNvbnN0IHNvdXBzYW5kc3Rld3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNvdXBzYW5kc3Rld3NIZWFkZXIuaW5uZXJIVE1MPSAnU09VUFMgQU5EIFNURVdTJ1xuICAgIGNvbnN0IHNvdXBzQm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3Vwc0JveGVzLmNsYXNzTGlzdC5hZGQoJ3ZlZy1ib3hlcycpO1xuICAvL0Vmb3Jpcm9cbiAgICBjb25zdCBvYmUgPSBjcmVhdGVCb3goJ0VmbyBSaXJvJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10pXG5cbiAgICAvL0VmbyBFZ3VzaVxuICAgIGNvbnN0IEVndXNpID0gY3JlYXRlQm94KCdFZm8gRWd1c2knLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSlcblxuICAgIC8vU2F1dGVlZCBTcGluYWNoXG4gICAgY29uc3QgU3BpbmFjaCA9IGNyZWF0ZUJveCgnU2F1dGVlZCBTcGluYWNoJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10pXG5cbiAgICBzb3Vwc0JveGVzLmFwcGVuZChvYmUsIEVndXNpLCBTcGluYWNoKTtcblxuXG4gICAgc291cHNhbmRzdGV3c1NlY3Rpb24uYXBwZW5kKHNvdXBzYW5kc3Rld3NIZWFkZXIsc291cHNCb3hlcyk7XG5cbiAgICAvL1NXQUxMT1dTXG4gICAgY29uc3Qgc3dhbGxvd3NTZWN0aW9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN3YWxsb3dzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzdWItc2VjdGlvbicpO1xuICAgIC8vVElUTEVcbiAgICBjb25zdCBzd2FsbG93c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc3dhbGxvd3NIZWFkZXIuaW5uZXJIVE1MPSAnU1dBTExPV1MnXG5cbiAgICBjb25zdCBzd2FsbG93Qm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzd2FsbG93Qm94ZXMuY2xhc3NMaXN0LmFkZCgncmljZS1ib3hlcycpO1xuICAgIC8vSm9sbG9mXG4gICAgY29uc3QgZWJhID0gY3JlYXRlQm94KCdFYmEnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApO1xuXG4gICAgLy9GcmllZGljZVxuICAgIGNvbnN0IGFtYWxhID0gY3JlYXRlQm94KCdBbWFsYScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddICk7XG5cbiAgICAvL0NvY29udXRSaWNlXG4gICAgY29uc3QgcG91bmRvID0gY3JlYXRlQm94KCdQb3VuZG8nLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApXG5cbiAgICAvL1doaXRlUmljZVxuICAgIGNvbnN0IG9hdGZ1ZnUgPSBjcmVhdGVCb3goJ09hdCBGdWZ1JywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKVxuXG4gICAgLy9yaWNlYm94ZXMgYXBwZW5kXG4gICAgc3dhbGxvd0JveGVzLmFwcGVuZChlYmEsIGFtYWxhLCBwb3VuZG8sIG9hdGZ1ZnUpO1xuXG4gICAgc3dhbGxvd3NTZWN0aW9uLmFwcGVuZChzd2FsbG93c0hlYWRlciwgc3dhbGxvd0JveGVzKTtcblxuXG4gICAgXG4gICAgLy9TSURFU1xuICAgIGNvbnN0IHNpZGVzU2VjdGlvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24nKTtcbiAgICAvL1RJVExFXG4gICAgY29uc3Qgc2lkZXNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNpZGVzSGVhZGVyLmlubmVySFRNTD0gJ1NJREVTJ1xuXG4gICAgY29uc3Qgc2lkZXNCb3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVzQm94ZXMuY2xhc3NMaXN0LmFkZCgncmljZS1ib3hlcycpO1xuICAgIC8vSm9sbG9mXG4gICAgY29uc3Qgc2ViYSA9IGNyZWF0ZUJveCgnRWJhJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKTtcblxuICAgIC8vRnJpZWRpY2VcbiAgICBjb25zdCBzYW1hbGEgPSBjcmVhdGVCb3goJ0FtYWxhJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKTtcblxuICAgIC8vQ29jb251dFJpY2VcbiAgICBjb25zdCBzcG91bmRvID0gY3JlYXRlQm94KCdQb3VuZG8nLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApXG5cbiAgICAvL1doaXRlUmljZVxuICAgIGNvbnN0IHNvYXRmdWZ1ID0gY3JlYXRlQm94KCdPYXQgRnVmdScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddIClcblxuICAgIC8vcmljZWJveGVzIGFwcGVuZFxuICAgIHNpZGVzQm94ZXMuYXBwZW5kKHNlYmEsIHNhbWFsYSwgc3BvdW5kbywgc29hdGZ1ZnUpO1xuXG4gICAgc2lkZXNTZWN0aW9uLmFwcGVuZChzaWRlc0hlYWRlciwgc2lkZXNCb3hlcyk7XG5cblxuXG5cbiAgICBlbGVtZW50LmFwcGVuZChoZXJvLCByaWNlU2VjdGlvbiwgdmVnZXRhYmxlU2VjdGlvbiwgc291cHNhbmRzdGV3c1NlY3Rpb24sIHN3YWxsb3dzU2VjdGlvbiwgc2lkZXNTZWN0aW9uKVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9