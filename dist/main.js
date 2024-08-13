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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! PlayfairDisplay-VariableFont_wght.woff */ "./src/PlayfairDisplay-VariableFont_wght.woff"), __webpack_require__.b);
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
    font-family: 'main-font',Georgia, 'Times New Roman', Times, serif;

}

.section1 {
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

}

.section1>h1 {
    font-size: 50px;
}

.section1>p {
    font-size: 30px;
    text-align: justify;
}
.section2, .section1{
    display: flex;
    margin: 60px;
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

.sec2element1 > h2{
    font-size: 50px;
}

.sec2element1 > p{
    font-size: 20px;
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
    max-width: 100%;
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


}
.veg-boxes {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
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
    flex-wrap: nowrap;
}

footer {
    background: rgb(197, 103, 8);
    color: white;
    font-size: 20px;
    text-align: center;
    padding: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAkD;AACtD;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,SAAS;IACT,uBAAuB;IACvB,iEAAiE;;AAErE;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,8CAA8C;IAC9C,uCAAuC;IACvC,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,YAAY;;AAEZ;IACI,aAAa;IACb,2CAA2C;IAC3C,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yDAAkD;AACtD;;;AAGA;IACI,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;;;AAG3B;AACA;IACI,aAAa;IACb,QAAQ;IACR,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;IAClB,0CAA0C;IAC1C,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB","sourcesContent":["@font-face {\n    font-family: 'main-font';\n    src: url('PlayfairDisplay-VariableFont_wght.woff');\n}\n\nbody{\n    margin: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    margin: 10px;\n    padding: 10px;\n    flex-wrap: wrap;\n}\nnav{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\nbutton {\n    background: rgb(197, 103, 8);\n    color: white;\n    border: none;\n    border-radius: 3px 10px;\n    height: 50px;\n    width: 130px;\n    font-size: 17px;\n    font-size: 20px;\n}\n\n/*homepage*/\n.homepage {\n    display: grid;\n    grid-template-rows: 2fr 3fr 1fr;\n    margin-bottom: 10px;\n    gap: 10px;\n    justify-content: center;\n    font-family: 'main-font',Georgia, 'Times New Roman', Times, serif;\n\n}\n\n.section1 {\n    text-align: center;\n    border-radius: 15px;\n    box-shadow: 5px 5px 5px 5px rgb(211, 204, 197);\n    background-color: rgb(197, 103, 8, 0.9);\n    margin: 50px;\n    margin-top: 0;\n    font-size: 20px;\n    position: relative;\n    z-index: 1;\n    color: white;\n    padding: 40px;\n    flex-direction: column;\n    padding-top: 0px;\n\n}\n\n.section1>h1 {\n    font-size: 50px;\n}\n\n.section1>p {\n    font-size: 30px;\n    text-align: justify;\n}\n.section2, .section1{\n    display: flex;\n    margin: 60px;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.section2 {\n    gap: 40px;\n}\n\n.sec2element1{\n    padding: 50px;\n    width: 700px\n}\n\n.sec2element1 > h2{\n    font-size: 50px;\n}\n\n.sec2element1 > p{\n    font-size: 20px;\n}\n\n.sec3content {\n    color: white;\n    background: rgb(197, 103, 8);\n    padding: 15px;\n    border-radius: 5px 10px;\n    font-size: 60px;\n    width: 400px;\n    text-align: center;\n}\n.main-img {\n    height: 700px;\n    width: 700px;\n}\n\n/*menu page*/\n\n.menu-page {\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr;\n    max-width: 100%;\n    margin-bottom: 10px;\n}\n\n.hero, .section3{\n    position: relative;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n \n.hero::before, .section3::before{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n    background-position: center;\n    opacity: 0.5;\n    z-index: -1; \n}\n\n.hero::before, .section3::before{\n    background-image: url('jollof-rice-recipe-23.jpg');\n}\n\n\n.hero-content {\n    color: white;\n    background: rgb(197, 103, 8);\n    padding: 15px;\n    border-radius: 5px 10px;\n    font-size: 100px;\n    padding: 20px;\n    width: 500px;\n    text-align: center;\n}\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 25px;\n    margin-bottom: 20px;\n}\n\n.sub-section > h1 {\n    font-weight: 700;\n    color: rgb(185, 93, 0);;\n}\n.rice-boxes{\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap;\n    justify-content: center;\n\n\n}\n.veg-boxes {\n    display: flex;\n    gap: 5px;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.box {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 5px 5px 5px rgb(194, 150, 106);\n    box-sizing: border-box;\n    background: white;\n    color: black;\n    padding: 20px;\n    border-radius: 15px;\n    font-size: 30px;\n    width: 400px;\n}\n\n.Lists {\n    display: flex;\n    justify-content: space-between;\n}\n\n.menu-img {\n    height: 150px;\n}\n\nul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n}\n\nfooter {\n    background: rgb(197, 103, 8);\n    color: white;\n    font-size: 20px;\n    text-align: center;\n    padding: 20px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/PlayfairDisplay-VariableFont_wght.woff":
/*!****************************************************!*\
  !*** ./src/PlayfairDisplay-VariableFont_wght.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "954c8a8c47a8828a1a45.woff";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkpBQXlEO0FBQ3JHLDRDQUE0QyxpSUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxh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VTs7QUFFckQ7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHNpdGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50c2l0ZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJQbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImpvbGxvZi1yaWNlLXJlY2lwZS0yMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbm5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTAzLCA4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLypob21lcGFnZSovXG4uaG9tZXBhZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgM2ZyIDFmcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCcsR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcblxufVxuXG4uc2VjdGlvbjEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCByZ2IoMjExLCAyMDQsIDE5Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTAzLCA4LCAwLjkpO1xuICAgIG1hcmdpbjogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG5cbn1cblxuLnNlY3Rpb24xPmgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5zZWN0aW9uMT5wIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zZWN0aW9uMiwgLnNlY3Rpb24xe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA2MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbjIge1xuICAgIGdhcDogNDBweDtcbn1cblxuLnNlYzJlbGVtZW50MXtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHdpZHRoOiA3MDBweFxufVxuXG4uc2VjMmVsZW1lbnQxID4gaDJ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uc2VjMmVsZW1lbnQxID4gcHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zZWMzY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWltZyB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICB3aWR0aDogNzAwcHg7XG59XG5cbi8qbWVudSBwYWdlKi9cblxuLm1lbnUtcGFnZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyIDJmciAyZnIgMmZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGVybywgLnNlY3Rpb24ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiBcbi5oZXJvOjpiZWZvcmUsIC5zZWN0aW9uMzo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgei1pbmRleDogLTE7IFxufVxuXG4uaGVybzo6YmVmb3JlLCAuc2VjdGlvbjM6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cblxuLmhlcm8tY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWItc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdWItc2VjdGlvbiA+IGgxIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiByZ2IoMTg1LCA5MywgMCk7O1xufVxuLnJpY2UtYm94ZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbn1cbi52ZWctYm94ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigxOTQsIDE1MCwgMTA2KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuLkxpc3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnUtaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTAzLCA4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHVCQUF1QjtJQUN2QixpRUFBaUU7O0FBRXJFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5REFBa0Q7QUFDdEQ7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZix1QkFBdUI7OztBQUczQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcbiAgICBzcmM6IHVybCgnUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LndvZmYnKTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxMDMsIDgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDEwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLypob21lcGFnZSovXFxuLmhvbWVwYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgM2ZyIDFmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnLEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuXFxufVxcblxcbi5zZWN0aW9uMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggNXB4IHJnYigyMTEsIDIwNCwgMTk3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTAzLCA4LCAwLjkpO1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxuXFxufVxcblxcbi5zZWN0aW9uMT5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnNlY3Rpb24xPnAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5zZWN0aW9uMiwgLnNlY3Rpb24xe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDYwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uMiB7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnNlYzJlbGVtZW50MXtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgd2lkdGg6IDcwMHB4XFxufVxcblxcbi5zZWMyZWxlbWVudDEgPiBoMntcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uc2VjMmVsZW1lbnQxID4gcHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2VjM2NvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDEwMywgOCk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1pbWcge1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxufVxcblxcbi8qbWVudSBwYWdlKi9cXG5cXG4ubWVudS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmciAyZnIgMmZyIDJmcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVybywgLnNlY3Rpb24ze1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4gXFxuLmhlcm86OmJlZm9yZSwgLnNlY3Rpb24zOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHotaW5kZXg6IC0xOyBcXG59XFxuXFxuLmhlcm86OmJlZm9yZSwgLnNlY3Rpb24zOjpiZWZvcmV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnam9sbG9mLXJpY2UtcmVjaXBlLTIzLmpwZycpO1xcbn1cXG5cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxMDMsIDgpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zdWItc2VjdGlvbiA+IGgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHJnYigxODUsIDkzLCAwKTs7XFxufVxcbi5yaWNlLWJveGVze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxufVxcbi52ZWctYm94ZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigxOTQsIDE1MCwgMTA2KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5MaXN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTAzLCA4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEpvbGxvZlJpY2UgZnJvbSAnLi9qb2xsb2YtcmljZS1yZWNpcGUtMjMuanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UnKTtcblxuICAgIGNvbnN0IHNlY3Rpb24xPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uMS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uMScpO1xuXG4gICAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc2VjdGlvbkhlYWRlci5pbm5lckhUTUw9ICdXZWxjb21lIHRvIE1pZGhhc3MgQ2F0ZXJpbmcgU2VydmljZXMnO1xuXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2VjdGlvbkNvbnRlbnQuaW5uZXJIVE1MPSBgXG4gICAgTWlkaGFzcyBDYXRlcmluZyBTZXJ2aWNlcyBvZmZlcnMgY29udmVuaWVudCBhbmQgZGVsaWNpb3VzIGhvbWUtY29va2VkIG1lYWxzLCBzcGVjaWFsaXppbmcgaW4gYXV0aGVudGljIE5pZ2VyaWFuIGN1aXNpbmUuXG4gICAgQXZhaWxhYmxlIGZvciBwaWNrdXAsIHdlIHByZXBhcmUgYSB2YXJpZXR5IG9mIHRyYWRpdGlvbmFsIE5pZ2VyaWFuIGRpc2hlcywgZW5zdXJpbmcgYSB0YXN0ZSBvZiBob21lIGluIGV2ZXJ5IGJpdGUuXG4gICAgV2hldGhlciB5b3UncmUgY3JhdmluZyBKb2xsb2YgcmljZSwgRWd1c2kgc291cCwgb3Igb3RoZXIgY2xhc3NpYyBOaWdlcmlhbiBtZWFscywgTWlkaGFzcyBwcm92aWRlcyBhIHJlbGlhYmxlIGFuZCB0YXN0eSBzb2x1dGlvbiBmb3IgeW91ciBkaW5pbmcgbmVlZHMuXG4gICAgRW5qb3kgdGhlIGNvbWZvcnQgb2YgaG9tZW1hZGUgTmlnZXJpYW4gZm9vZCB3aXRob3V0IHRoZSBoYXNzbGUgb2YgY29va2luZyFcbmA7XG4gICAgc2VjdGlvbjEuYXBwZW5kKHNlY3Rpb25IZWFkZXIsIHNlY3Rpb25Db250ZW50KTtcblxuLy9TZWN0aW9uIDJcbiAgICBjb25zdCBzZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24yJyk7XG5cbiAgICBjb25zdCBzZWMyZWxlbWVudDE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYzJlbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdzZWMyZWxlbWVudDEnKTtcblxuICAgIGNvbnN0IHNlYzJlbGVtZW50Mj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjMmVsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ3NlYzJlbGVtZW50MicpO1xuXG4gICAgY29uc3Qgc2VjdGlvbjJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNlY3Rpb24ySGVhZGVyLmlubmVySFRNTD0gJ1NpZ25hdHVyZSBEaXNoJ1xuXG4gICAgY29uc3Qgc2VjdGlvbjJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlY3Rpb24yQ29udGVudC5pbm5lckhUTUw9IGBOaWdlcmlhbiBKb2xsb2YgUmljZSBpcyBhIHBvcHVsYXIgV2VzdCBBZnJpY2FuIGRpc2gga25vd24gZm9yIGl0cyByaWNoLCBmbGF2b3JmdWwgdGFzdGUgYW5kIHZpYnJhbnQgcmVkIGNvbG9yLiBJdCBpcyBtYWRlIHByaW1hcmlseSBmcm9tIHJpY2UgY29va2VkIGluIGEgdG9tYXRvLWJhc2VkIHNhdWNlLCB3aGljaCBpbmNsdWRlcyBpbmdyZWRpZW50cyBsaWtlIHRvbWF0b2VzLCBvbmlvbnMsIGJlbGwgcGVwcGVycywgYW5kIGEgbWl4IG9mIHNwaWNlcyBzdWNoIGFzIHRoeW1lLCBiYXkgbGVhdmVzLCBhbmQgY2hpbGkgcGVwcGVycy4gVGhlIGRpc2ggb2Z0ZW4gaW5jb3Jwb3JhdGVzIGFkZGl0aW9uYWwgZmxhdm9yIGZyb20gc3RvY2sgb3IgYnJvdGgsIGFuZCBpdCBjYW4gYmUgZW5oYW5jZWQgd2l0aCB2ZWdldGFibGVzIGxpa2UgY2Fycm90cyBhbmQgcGVhcy4gXG4gICAgSm9sbG9mIHJpY2UgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCBmcmllZCBwbGFudGFpbnMsIGdyaWxsZWQgb3IgZnJpZWQgY2hpY2tlbiwgZmlzaCwgb3IgYmVlZi4gXG4gICAgSXQgaXMgYSBiZWxvdmVkIGRpc2ggaW4gTmlnZXJpYSBhbmQgYWNyb3NzIFdlc3QgQWZyaWNhLCBvZnRlbiBwcmVwYXJlZCBmb3Igc3BlY2lhbCBvY2Nhc2lvbnMgYW5kIGdhdGhlcmluZ3MuYFxuXG4gICAgY29uc3QgSlJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBKUkltZy5zcmMgPSBKb2xsb2ZSaWNlO1xuICAgIEpSSW1nLmNsYXNzTGlzdC5hZGQoJ21haW4taW1nJylcbiAgICBzZWMyZWxlbWVudDEuYXBwZW5kKHNlY3Rpb24ySGVhZGVyLCBzZWN0aW9uMkNvbnRlbnQpO1xuICAgIHNlYzJlbGVtZW50Mi5hcHBlbmRDaGlsZChKUkltZyk7XG5cbiAgICBzZWN0aW9uMi5hcHBlbmQoc2VjMmVsZW1lbnQxLCBzZWMyZWxlbWVudDIpO1xuXG4gICAgLy9TZWN0aW9uIDNcbiAgICBjb25zdCBzZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24zLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24zJyk7XG5cbiAgICBjb25zdCBzZWMzY29udGVudD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjM2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2VjM2NvbnRlbnQnKTtcbiAgICBzZWMzY29udGVudC5pbm5lckhUTUw9ICdPcmRlciBIZXJlJztcblxuICAgIHNlY3Rpb24zLmFwcGVuZChzZWMzY29udGVudCk7XG5cbiAgICBlbGVtZW50LmFwcGVuZChzZWN0aW9uMSwgc2VjdGlvbjIsIHNlY3Rpb24zKTtcblxuICAgIHJldHVybiBlbGVtZW50XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSAgZnJvbSAnLi9tZW51JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgXG4gICAgZnVuY3Rpb24gbG9hZFRhYih0YWIpIHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cbiAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkVGFiKGNyZWF0ZUhvbWUoKSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFRhYihjcmVhdGVNZW51KCkpKTtcbiAgXG4gICAgbG9hZFRhYihjcmVhdGVIb21lKCkpO1xuICB9KTsiLCJpbXBvcnQgSm9sbG9mUmljZSBmcm9tICcuL2pvbGxvZi1yaWNlLXJlY2lwZS0yMy5qcGcnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb3godGl0bGUsIGltYWdlU3JjLCBpdGVtcywgcHJpY2VzKXtcbiAgICBjb25zdCBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBCb3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gICAgY29uc3QgcmljZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIEltZy5zcmMgPSBpbWFnZVNyYztcbiAgICBJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWcnKVxuICAgIHJpY2VJbWcuYXBwZW5kKEltZylcblxuICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBUaXRsZS5pbm5lckhUTUw9IHRpdGxlO1xuXG4gICAgY29uc3QgUHJpY2VMaXN0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBQcmljZUxpc3QuY2xhc3NMaXN0LmFkZCgnTGlzdHMnKTtcblxuICAgIGNvbnN0IFRyYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgVHJheXMuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IFByaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJpY2VzLmZvckVhY2gocHJpY2UgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICAgIFByaWNlcy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9KTtcbiAgICBQcmljZUxpc3QuYXBwZW5kKFRyYXlzLCBQcmljZXMpO1xuXG4gICAgcHJpY2VFbGVtZW50LmFwcGVuZChUaXRsZSwgUHJpY2VMaXN0KTtcblxuICAgIEJveC5hcHBlbmQocmljZUltZywgcHJpY2VFbGVtZW50KTtcbiAgICByZXR1cm4gQm94O1xuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcblxuICAgIGNvbnN0IGl0ZW1zID0gWydRdWFydGVyIFRyYXknLCAnU21hbGwgVHJheScsICdNZWRpdW0gVHJheScsICdMYXJnZSBUcmF5JywgJ1NtYWxsIENvb2xlcicsICdMYXJnZSBDb29sZXInXTtcblxuICAgIGNvbnN0IGhlcm8gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIFxuXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlcm8tY29udGVudCcpO1xuICAgIGhlcm9UaXRsZS5pbm5lckhUTUw9ICdNZW51J1xuXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGl0bGUpXG4gICAgLy9SSUNFXG4gICAgY29uc3QgcmljZVNlY3Rpb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmljZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24nKTtcbiAgICBcbiAgICAvL1JpY2Ugc3Vic2VjdGlvblxuICAgIGNvbnN0IHJpY2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJpY2VIZWFkZXIuaW5uZXJIVE1MPSAnUklDRSdcblxuICAgIGNvbnN0IHJpY2VCb3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpY2VCb3hlcy5jbGFzc0xpc3QuYWRkKCdyaWNlLWJveGVzJyk7XG5cbiAgICAvL0pvbGxvZlxuICAgIGNvbnN0IGpvbGxvZlJpY2UgPSBjcmVhdGVCb3goJ0pvbGxvZiBSaWNlJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKTtcblxuICAgIC8vRnJpZWRpY2VcbiAgICBjb25zdCBmcmllZFJpY2UgPSBjcmVhdGVCb3goJ0ZyaWVkIFJpY2UnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApO1xuXG4gICAgLy9Db2NvbnV0UmljZVxuICAgIGNvbnN0IGNvY29udXRSaWNlID0gY3JlYXRlQm94KCdDb2NvbnV0IFJpY2UnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApXG5cbiAgICAvL1doaXRlUmljZVxuICAgIGNvbnN0IHdoaXRlUmljZSA9IGNyZWF0ZUJveCgnV2hpdGUgUmljZScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddIClcblxuICAgIC8vcmljZWJveGVzIGFwcGVuZFxuICAgIHJpY2VCb3hlcy5hcHBlbmQoam9sbG9mUmljZSwgZnJpZWRSaWNlLCBjb2NvbnV0UmljZSwgd2hpdGVSaWNlKTtcblxuICAgIC8vcmljZSBzZWN0aW9uIGFwcGVuZFxuICAgIHJpY2VTZWN0aW9uLmFwcGVuZChyaWNlSGVhZGVyLCByaWNlQm94ZXMpO1xuXG4gICAgXG4gICAgLy9WRUdFVEFCTEVcbiAgICBjb25zdCB2ZWdldGFibGVTZWN0aW9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlZ2V0YWJsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24nKTtcbiAgICAvL1RJVExFXG4gICAgY29uc3QgdmVnSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB2ZWdIZWFkZXIuaW5uZXJIVE1MPSAnVkVHRVRBQkxFUydcblxuICAgIGNvbnN0IHZlZ0JveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmVnQm94ZXMuY2xhc3NMaXN0LmFkZCgndmVnLWJveGVzJyk7XG5cbiAgICAvL0Vmb3Jpcm9cbiAgICBjb25zdCBlZm9yaXJvID0gY3JlYXRlQm94KCdFZm8gUmlybycsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddKVxuXG4gICAgLy9FZm8gRWd1c2lcbiAgICBjb25zdCBlZm9FZ3VzaSA9IGNyZWF0ZUJveCgnRWZvIEVndXNpJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10pXG5cbiAgICAvL1NhdXRlZWQgU3BpbmFjaFxuICAgIGNvbnN0IHNhdXRlZWRTcGluYWNoID0gY3JlYXRlQm94KCdTYXV0ZWVkIFNwaW5hY2gnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSlcblxuICAgIHZlZ0JveGVzLmFwcGVuZChlZm9yaXJvLCBlZm9FZ3VzaSwgc2F1dGVlZFNwaW5hY2gpO1xuICAgIHZlZ2V0YWJsZVNlY3Rpb24uYXBwZW5kKHZlZ0hlYWRlciwgdmVnQm94ZXMpXG5cblxuICAgIC8vU09VUFMgQU5EIFNURVdTXG4gICAgY29uc3Qgc291cHNhbmRzdGV3c1NlY3Rpb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cHNhbmRzdGV3c1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24nKTtcbiAgICAvL1RJVExFXG4gICAgY29uc3Qgc291cHNhbmRzdGV3c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc291cHNhbmRzdGV3c0hlYWRlci5pbm5lckhUTUw9ICdTT1VQUyBBTkQgU1RFV1MnXG4gICAgY29uc3Qgc291cHNCb3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvdXBzQm94ZXMuY2xhc3NMaXN0LmFkZCgndmVnLWJveGVzJyk7XG4gIC8vRWZvcmlyb1xuICAgIGNvbnN0IG9iZSA9IGNyZWF0ZUJveCgnRWZvIFJpcm8nLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSlcblxuICAgIC8vRWZvIEVndXNpXG4gICAgY29uc3QgRWd1c2kgPSBjcmVhdGVCb3goJ0VmbyBFZ3VzaScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddKVxuXG4gICAgLy9TYXV0ZWVkIFNwaW5hY2hcbiAgICBjb25zdCBTcGluYWNoID0gY3JlYXRlQm94KCdTYXV0ZWVkIFNwaW5hY2gnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSlcblxuICAgIHNvdXBzQm94ZXMuYXBwZW5kKG9iZSwgRWd1c2ksIFNwaW5hY2gpO1xuXG5cbiAgICBzb3Vwc2FuZHN0ZXdzU2VjdGlvbi5hcHBlbmQoc291cHNhbmRzdGV3c0hlYWRlcixzb3Vwc0JveGVzKTtcblxuICAgIC8vU1dBTExPV1NcbiAgICBjb25zdCBzd2FsbG93c1NlY3Rpb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3dhbGxvd3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3N1Yi1zZWN0aW9uJyk7XG4gICAgLy9USVRMRVxuICAgIGNvbnN0IHN3YWxsb3dzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBzd2FsbG93c0hlYWRlci5pbm5lckhUTUw9ICdTV0FMTE9XUydcblxuICAgIGNvbnN0IHN3YWxsb3dCb3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN3YWxsb3dCb3hlcy5jbGFzc0xpc3QuYWRkKCdyaWNlLWJveGVzJyk7XG4gICAgLy9Kb2xsb2ZcbiAgICBjb25zdCBlYmEgPSBjcmVhdGVCb3goJ0ViYScsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddICk7XG5cbiAgICAvL0ZyaWVkaWNlXG4gICAgY29uc3QgYW1hbGEgPSBjcmVhdGVCb3goJ0FtYWxhJywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKTtcblxuICAgIC8vQ29jb251dFJpY2VcbiAgICBjb25zdCBwb3VuZG8gPSBjcmVhdGVCb3goJ1BvdW5kbycsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddIClcblxuICAgIC8vV2hpdGVSaWNlXG4gICAgY29uc3Qgb2F0ZnVmdSA9IGNyZWF0ZUJveCgnT2F0IEZ1ZnUnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApXG5cbiAgICAvL3JpY2Vib3hlcyBhcHBlbmRcbiAgICBzd2FsbG93Qm94ZXMuYXBwZW5kKGViYSwgYW1hbGEsIHBvdW5kbywgb2F0ZnVmdSk7XG5cbiAgICBzd2FsbG93c1NlY3Rpb24uYXBwZW5kKHN3YWxsb3dzSGVhZGVyLCBzd2FsbG93Qm94ZXMpO1xuXG5cbiAgICBcbiAgICAvL1NJREVTXG4gICAgY29uc3Qgc2lkZXNTZWN0aW9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzdWItc2VjdGlvbicpO1xuICAgIC8vVElUTEVcbiAgICBjb25zdCBzaWRlc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc2lkZXNIZWFkZXIuaW5uZXJIVE1MPSAnU0lERVMnXG5cbiAgICBjb25zdCBzaWRlc0JveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZXNCb3hlcy5jbGFzc0xpc3QuYWRkKCdyaWNlLWJveGVzJyk7XG4gICAgLy9Kb2xsb2ZcbiAgICBjb25zdCBzZWJhID0gY3JlYXRlQm94KCdFYmEnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApO1xuXG4gICAgLy9GcmllZGljZVxuICAgIGNvbnN0IHNhbWFsYSA9IGNyZWF0ZUJveCgnQW1hbGEnLCBKb2xsb2ZSaWNlLCBpdGVtcywgWyckMTUnLCAnJDI1JywgJyQ0MCcsICckNjAnLCAnJDgwJywgJyQxNjAnXSApO1xuXG4gICAgLy9Db2NvbnV0UmljZVxuICAgIGNvbnN0IHNwb3VuZG8gPSBjcmVhdGVCb3goJ1BvdW5kbycsIEpvbGxvZlJpY2UsIGl0ZW1zLCBbJyQxNScsICckMjUnLCAnJDQwJywgJyQ2MCcsICckODAnLCAnJDE2MCddIClcblxuICAgIC8vV2hpdGVSaWNlXG4gICAgY29uc3Qgc29hdGZ1ZnUgPSBjcmVhdGVCb3goJ09hdCBGdWZ1JywgSm9sbG9mUmljZSwgaXRlbXMsIFsnJDE1JywgJyQyNScsICckNDAnLCAnJDYwJywgJyQ4MCcsICckMTYwJ10gKVxuXG4gICAgLy9yaWNlYm94ZXMgYXBwZW5kXG4gICAgc2lkZXNCb3hlcy5hcHBlbmQoc2ViYSwgc2FtYWxhLCBzcG91bmRvLCBzb2F0ZnVmdSk7XG5cbiAgICBzaWRlc1NlY3Rpb24uYXBwZW5kKHNpZGVzSGVhZGVyLCBzaWRlc0JveGVzKTtcblxuXG5cblxuICAgIGVsZW1lbnQuYXBwZW5kKGhlcm8sIHJpY2VTZWN0aW9uLCB2ZWdldGFibGVTZWN0aW9uLCBzb3Vwc2FuZHN0ZXdzU2VjdGlvbiwgc3dhbGxvd3NTZWN0aW9uLCBzaWRlc1NlY3Rpb24pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=