// ==UserScript==
// @name              WaniKani Vocab Beyond
// @author            Norman Sue
// @description       Shows WWWJDIC vocab with Forvo audio for each kanji in lessons, reviews, and kanji pages. A paid Forvo API key is required for audio.
// @version           0.4.0
// @update            2018-09-29 20:26:11
// @grant             GM_xmlhttpRequest
// @include           https://www.wanikani.com/*
// @run-at            document-start
// @namespace         https://greasyfork.org/en/users/56591-normful
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gm_http_1 = __webpack_require__(/*! gm-http */ \"./node_modules/gm-http/dist/index.js\");\nvar app_1 = __webpack_require__(/*! ./src/app */ \"./src/app.ts\");\nvar isDebug = \"development\" !== \"production\";\ngm_http_1.default.setConfig({ debug: isDebug });\nvar app = new app_1.App();\napp.init();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./node_modules/gm-http/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/gm-http/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(this, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\r\n/**\r\n * Created by axetroy on 17-6-23.\r\n */\r\n/// <reference path=\"./index.d.ts\" />\r\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction isFunction(func) {\r\n    return typeof func === 'function';\r\n}\r\nvar Http = (function () {\r\n    function Http(config) {\r\n        if (config === void 0) { config = {}; }\r\n        this.config = config;\r\n    }\r\n    Http.prototype.setConfig = function (config) {\r\n        if (config === void 0) { config = {}; }\r\n        this.config = __assign({}, this.config, config);\r\n    };\r\n    Http.prototype.create = function (config) {\r\n        return new Http(config);\r\n    };\r\n    Http.prototype.request = function (method, url, data, header, config) {\r\n        var _this = this;\r\n        if (data === void 0) { data = ''; }\r\n        if (header === void 0) { header = {}; }\r\n        if (config === void 0) { config = {}; }\r\n        return new Promise(function (resolve, reject) {\r\n            var commonRequestConfig = {\r\n                method: method,\r\n                url: url,\r\n                data: data,\r\n                header: header\r\n            };\r\n            var GM_xmlhttpRequestConfig = __assign({}, commonRequestConfig, config, _this.config);\r\n            var onreadystatechange = GM_xmlhttpRequestConfig.onreadystatechange, onerror = GM_xmlhttpRequestConfig.onerror, onabort = GM_xmlhttpRequestConfig.onabort, ontimeout = GM_xmlhttpRequestConfig.ontimeout;\r\n            GM_xmlhttpRequestConfig.synchronous = true; // async\r\n            GM_xmlhttpRequestConfig.onreadystatechange = function (response) {\r\n                try {\r\n                    isFunction(onreadystatechange) &&\r\n                        onreadystatechange.call(this, response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n                if (response.readyState !== 4)\r\n                    return;\r\n                response.status >= 200 && response.status < 400\r\n                    ? resolve(response)\r\n                    : reject(response);\r\n            };\r\n            GM_xmlhttpRequestConfig.onerror = function (response) {\r\n                try {\r\n                    isFunction(onerror) && onerror.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            GM_xmlhttpRequestConfig.onabort = function (response) {\r\n                try {\r\n                    isFunction(onabort) && onabort.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            GM_xmlhttpRequestConfig.ontimeout = function (response) {\r\n                try {\r\n                    isFunction(ontimeout) && ontimeout.call(this, response);\r\n                    reject(response);\r\n                }\r\n                catch (err) {\r\n                    reject(err);\r\n                }\r\n            };\r\n            if (_this.config.debug) {\r\n                console.log(\"%c[\" + commonRequestConfig.method.toUpperCase() + \"]%c: \" + commonRequestConfig.url, 'color: green', 'color: #000;text-style: under-line');\r\n            }\r\n            GM_xmlhttpRequest(__assign({}, GM_xmlhttpRequestConfig));\r\n        });\r\n    };\r\n    Http.prototype.get = function (url, data, header, config) {\r\n        return this.request('GET', url, data, header, config);\r\n    };\r\n    Http.prototype.post = function (url, data, header, config) {\r\n        return this.request('POST', url, data, header, config);\r\n    };\r\n    Http.prototype.put = function (url, data, header, config) {\r\n        return this.request('PUT', url, data, header, config);\r\n    };\r\n    Http.prototype['delete'] = function (url, data, header, config) {\r\n        return this.request('DELETE', url, data, header, config);\r\n    };\r\n    Http.prototype.head = function (url, data, header, config) {\r\n        return this.request('HEAD', url, data, header, config);\r\n    };\r\n    return Http;\r\n}());\r\nexports.Http = Http;\r\nvar timeout = 5000;\r\nexports.timeout = timeout;\r\nvar http = new Http({ timeout: timeout });\r\nexports.http = http;\r\nexports.default = http;\r\n\n\n/***/ })\n/******/ ]);\n});\n\n//# sourceURL=webpack:///./node_modules/gm-http/dist/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar runAllWkofDependentCode_1 = __webpack_require__(/*! ./wkof/runAllWkofDependentCode */ \"./src/wkof/runAllWkofDependentCode.ts\");\nvar App = /** @class */ (function () {\n    function App() {\n    }\n    App.prototype.init = function () {\n        addEventListener(\"DOMContentLoaded\", this.onDomContentLoaded.bind(this));\n    };\n    App.prototype.onDomContentLoaded = function () {\n        runAllWkofDependentCode_1.runAllWkofDependentCode();\n    };\n    return App;\n}());\nexports.App = App;\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/appConstants.ts":
/*!*****************************!*\
  !*** ./src/appConstants.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.prettyScriptName = \"WaniKani Vocab Beyond\";\n\n\n//# sourceURL=webpack:///./src/appConstants.ts?");

/***/ }),

/***/ "./src/dom/domIDs.ts":
/*!***************************!*\
  !*** ./src/dom/domIDs.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.sectionHeaderID = \"wanikani_vocab_beyond_section_header\";\nexports.sectionID = \"wanikani_vocab_beyond_section\";\n\n\n//# sourceURL=webpack:///./src/dom/domIDs.ts?");

/***/ }),

/***/ "./src/dom/insertDOMElements.ts":
/*!**************************************!*\
  !*** ./src/dom/insertDOMElements.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar determinePageType_1 = __webpack_require__(/*! ./../urlHelpers/determinePageType */ \"./src/urlHelpers/determinePageType.ts\");\nvar domIDs_1 = __webpack_require__(/*! ./domIDs */ \"./src/dom/domIDs.ts\");\nvar logger_1 = __webpack_require__(/*! ../logger/logger */ \"./src/logger/logger.ts\");\nvar Log = new logger_1.Logger(false);\nvar queryWwwjdic = function (settings) {\n    Log.debug(\"queryWwwjdic called\");\n};\nfunction insertDOMElements(settings) {\n    Log.debug(\"insertDOMElements called\");\n    var pageType = determinePageType_1.determinePageType(document.URL);\n    if (pageType === determinePageType_1.PageType.kanji && !settings.show_vocab_beyond_at_top) {\n        insertPageListHeaderLink();\n    }\n    maybeLoadVocabDependingOnPage(pageType, settings);\n}\nexports.insertDOMElements = insertDOMElements;\nfunction insertPageListHeaderLink() {\n    Log.debug(\"insertPageListHeaderLink called\");\n    var header = $(\".page-list-header\");\n    var listItem = $(\"<li>\");\n    var link = $(\"<a href='#\" + domIDs_1.sectionHeaderID + \"''>Vocab Beyond</a>\");\n    listItem.append(link);\n    // Other scripts may have altered this list, so just insert this link at the end\n    listItem.insertAfter(header.siblings().last());\n}\nfunction maybeLoadVocabDependingOnPage(pageType, settings) {\n    if (pageType === determinePageType_1.PageType.other) {\n        return;\n    }\n    Log.debug(\"maybeLoadVocabDependingOnPage called\");\n    var optAttrs = { attributes: true };\n    var optChildList = { childList: true };\n    var section;\n    if (pageType === determinePageType_1.PageType.kanji) {\n        section = createSectionAndRunQuery(settings);\n    }\n    else if (pageType === determinePageType_1.PageType.reviews) {\n        var ob = new MutationObserver(function (mutationRecords) {\n            mutationRecords.forEach(checkReviewMut.bind(null, settings));\n        });\n        // Observe the element that is mutated after clicking the\n        // Item Info icon with the eye on it\n        ob.observe(document.getElementById(\"item-info-col2\"), optChildList);\n    }\n    else if (pageType === determinePageType_1.PageType.lessons) {\n        var obs = new MutationObserver(function (mutationRecords) {\n            if (isKanjiLesson()) {\n                section = createSectionAndRunQuery(settings);\n            }\n            else {\n                Log.debug(\"not doing anything because not kanji lesson\");\n            }\n        });\n        // Observe the 3 elements for the 3 lesson types, that are modified\n        // when switching to each new lesson item\n        obs.observe(document.getElementById(\"supplement-rad\"), optAttrs);\n        obs.observe(document.getElementById(\"supplement-kan\"), optAttrs);\n        obs.observe(document.getElementById(\"supplement-voc\"), optAttrs);\n    }\n}\nfunction createSectionAndRunQuery(settings) {\n    var emptySection = maybeInsertEmptyVocabSectionOnce(settings);\n    queryWwwjdic(settings);\n    return emptySection;\n}\nfunction isKanjiLesson() {\n    var mainInfo = document.getElementById(\"main-info\");\n    return mainInfo && mainInfo.className === \"kanji\";\n}\nfunction checkReviewMut(settings, mutationRecord) {\n    // mutationRecord.addedNotes is a NodeList, not an Array\n    if (mutationRecord.addedNodes.length === 0) {\n        return;\n    }\n    var childIds = [];\n    for (var _i = 0, _a = mutationRecord.addedNodes.values(); _i < _a.length; _i++) {\n        var node = _a[_i];\n        childIds.push(node.id);\n    }\n    var isKanjiReview = JSON.stringify(childIds) ===\n        JSON.stringify([\n            \"item-info-meaning-mnemonic\",\n            \"note-meaning\",\n            \"item-info-reading-mnemonic\",\n            \"note-reading\"\n        ]);\n    if (isKanjiReview) {\n        var section = createSectionAndRunQuery(settings);\n    }\n}\n// Creates a section for the vocab and returns a pointer to the jQuery object.\nfunction maybeInsertEmptyVocabSectionOnce(settings) {\n    var pageType = determinePageType_1.determinePageType(document.URL);\n    if ($(\"#\" + domIDs_1.sectionID).length === 0) {\n        var sectionHTML = \"<section>\" +\n            '<h2 id=\"' +\n            domIDs_1.sectionHeaderID +\n            '\">Vocab Beyond</h2>' +\n            '<div id=\"' +\n            domIDs_1.sectionID +\n            '\"></div>' +\n            \"</section>\";\n        if (pageType === determinePageType_1.PageType.kanji) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for kanji page\");\n            var informationSection = $(\"#information\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(sectionHTML).insertAfter(informationSection);\n            }\n            else {\n                var lastSection = informationSection.siblings().last();\n                $(sectionHTML).insertAfter(lastSection);\n            }\n        }\n        else if (pageType === determinePageType_1.PageType.reviews) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for reviews page\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(\"#item-info-col2\").prepend(sectionHTML);\n            }\n            else {\n                $(\"#item-info-col2\").append(sectionHTML);\n            }\n        }\n        else if (pageType === determinePageType_1.PageType.lessons) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for lessons page\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(\"#supplement-kan-breakdown .col1\").append(sectionHTML);\n            }\n            else {\n                $(\"#supplement-kan-related-vocabulary .col1\").append(sectionHTML);\n            }\n        }\n    }\n    return $(\"#\" + domIDs_1.sectionID);\n}\n\n\n//# sourceURL=webpack:///./src/dom/insertDOMElements.ts?");

/***/ }),

/***/ "./src/logger/logger.ts":
/*!******************************!*\
  !*** ./src/logger/logger.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* tslint:disable:no-console */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logPrefix = \"[WKVB] \";\nvar Logger = /** @class */ (function () {\n    function Logger(disableLogging) {\n        this.prefix = logPrefix;\n        this.disableLogging = disableLogging;\n    }\n    Logger.prototype.debug = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.debug.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.info = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.log.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.warn = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.warn.apply(console, [this.prefix + msg].concat(args));\n    };\n    Logger.prototype.error = function (msg) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (this.disableLogging) {\n            return;\n        }\n        console.error.apply(console, [this.prefix + msg].concat(args));\n    };\n    return Logger;\n}());\nexports.Logger = Logger;\n\n\n//# sourceURL=webpack:///./src/logger/logger.ts?");

/***/ }),

/***/ "./src/urlHelpers/determinePageType.ts":
/*!*********************************************!*\
  !*** ./src/urlHelpers/determinePageType.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PageType;\n(function (PageType) {\n    PageType[PageType[\"other\"] = 0] = \"other\";\n    PageType[PageType[\"radicals\"] = 1] = \"radicals\";\n    PageType[PageType[\"kanji\"] = 2] = \"kanji\";\n    PageType[PageType[\"vocabulary\"] = 3] = \"vocabulary\";\n    PageType[PageType[\"reviews\"] = 4] = \"reviews\";\n    PageType[PageType[\"reviewsSummary\"] = 5] = \"reviewsSummary\";\n    PageType[PageType[\"lessons\"] = 6] = \"lessons\";\n    PageType[PageType[\"lessonsReviews\"] = 7] = \"lessonsReviews\";\n})(PageType = exports.PageType || (exports.PageType = {}));\nfunction determinePageType(url) {\n    if (/\\/radicals\\/./.test(url)) {\n        return PageType.radicals;\n    }\n    else if (/com\\/kanji\\/./.test(url)) {\n        return PageType.kanji;\n    }\n    else if (/com\\/vocabulary\\/./.test(url)) {\n        return PageType.vocabulary;\n    }\n    else if (/com\\/review\\/session/.test(url)) {\n        return PageType.reviews;\n    }\n    else if (/com\\/review/.test(url)) {\n        return PageType.reviewsSummary;\n    }\n    else if (/com\\/lesson\\/./.test(url)) {\n        return PageType.lessons;\n    }\n    // TODO: Figure out what URL lessonsReviews is for\n    return PageType.other;\n}\nexports.determinePageType = determinePageType;\n\n\n//# sourceURL=webpack:///./src/urlHelpers/determinePageType.ts?");

/***/ }),

/***/ "./src/windowHelpers/windowHelpers.ts":
/*!********************************************!*\
  !*** ./src/windowHelpers/windowHelpers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getWindow() {\n    return global;\n}\nexports.getWindow = getWindow;\nfunction waitUntilWindowPropLoads(getWindowFunc, windowProp, pollingIntervalMs, maxWaitMs, onLoad, onTimeout) {\n    var startMs = new Date().getTime();\n    var intervalID = setInterval(function () {\n        if (getWindowFunc()[windowProp]) {\n            clearInterval(intervalID);\n            onLoad(getWindowFunc()[windowProp]);\n            return;\n        }\n        if (new Date().getTime() - startMs > maxWaitMs) {\n            clearInterval(intervalID);\n            onTimeout();\n        }\n    }, pollingIntervalMs);\n}\nexports.waitUntilWindowPropLoads = waitUntilWindowPropLoads;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/windowHelpers/windowHelpers.ts?");

/***/ }),

/***/ "./src/wkof/runAllWkofDependentCode.ts":
/*!*********************************************!*\
  !*** ./src/wkof/runAllWkofDependentCode.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar appConstants_1 = __webpack_require__(/*! ../appConstants */ \"./src/appConstants.ts\");\nvar insertDOMElements_1 = __webpack_require__(/*! ./../dom/insertDOMElements */ \"./src/dom/insertDOMElements.ts\");\nvar waitForWkof_1 = __webpack_require__(/*! ./waitForWkof */ \"./src/wkof/waitForWkof.ts\");\nvar wkofConstants_1 = __webpack_require__(/*! ./wkofConstants */ \"./src/wkof/wkofConstants.ts\");\nfunction runAllWkofDependentCode() {\n    waitForWkof_1.waitForWkof(appConstants_1.prettyScriptName, function (wkof) {\n        wkof.include(\"Menu,Settings\");\n        wkof.ready(\"Menu,Settings\").then(function () {\n            wkof.Menu.insert_script_link({\n                name: wkofConstants_1.MenuScriptLinkId,\n                submenu: \"Vocab Beyond\",\n                title: \"Settings\",\n                on_click: onSettingsMenuLinkClick.bind(null, wkof)\n            });\n            wkof.Settings.load(wkofConstants_1.SettingsScriptId).then(function (settings) {\n                insertDOMElements_1.insertDOMElements(settings);\n            });\n        });\n    });\n}\nexports.runAllWkofDependentCode = runAllWkofDependentCode;\nvar wkofSettingsMenuConfig = {\n    script_id: wkofConstants_1.SettingsScriptId,\n    title: \"WaniKani Vocab Beyond\",\n    autosave: true,\n    background: false,\n    content: {\n        forvo_page_id: {\n            type: \"page\",\n            label: \"Audio\",\n            hover_tip: \"Settings for Forvo.com audio pronunciations\",\n            content: {\n                forvo_instructions: {\n                    type: \"html\",\n                    html: \"<p><a href='https://forvo.com' target='_blank'>Forvo.com</a> has an audio collection of words pronounced by native Japanese speakers.</p>\" +\n                        \"<p>To enable Forvo pronunciations of vocabulary words:</p>\" +\n                        \"<p>1. <a href='https://forvo.com/signup/' target='_blank'>Sign up for a Forvo.com account</a></p>\" +\n                        \"<p>2. <a href='https://api.forvo.com/plans-and-pricing' target='_blank'>Purchase an API key here</a></p>\" +\n                        \"<p>3. Enter your key below</p>\"\n                },\n                forvo_api_key: {\n                    type: \"text\",\n                    label: \"Forvo API key\",\n                    full_width: true,\n                    hover_tip: \"Your API key from https://api.forvo.com/\"\n                },\n                forvo_caveat: {\n                    type: \"html\",\n                    html: \"<p>(WaniKani Vocab Beyond will work without a Forvo API key, but you won't be able to see audio controls for vocabulary.)</p>\"\n                },\n                forvo_divider_id: {\n                    type: \"divider\"\n                },\n                forvo_rating_instructions: {\n                    type: \"html\",\n                    html: \"<p>Forvo pronunciations are voted on by users. Change this to limit the displayed audio to those with at least this overall number of (upvotes - downvotes). Zero is the default and recommended value.</p>\"\n                },\n                forvo_min_rating: {\n                    type: \"number\",\n                    label: \"Minimum Forvo rating\",\n                    hover_tip: \"Only show Forvo pronunciations with at least this rating\",\n                    placeholder: 0,\n                    default: 0,\n                    full_width: false\n                },\n                forvo_divider_id_2: {\n                    type: \"divider\"\n                },\n                forvo_whitelist_instructions: {\n                    type: \"html\",\n                    html: \"<p>Comma-separated list of Forvo users whose pronunciations should be shown. If blank, pronunciations from all users are shown.</p>\"\n                },\n                forvo_username_whitelist_csv: {\n                    type: \"text\",\n                    label: \"Favorite Forvo users\",\n                    full_width: true,\n                    placeholder: \"Example: skent,usako_usagiclub,strawberrybrown\",\n                    default: \"\",\n                    hover_tip: \"A comma-separated list of Forvo usernames whose pronunciations should be shown\"\n                }\n            }\n        },\n        vocab_page_id: {\n            type: \"page\",\n            label: \"Vocab\",\n            hover_tip: \"Settings for WWWJDIC vocabulary words\",\n            content: {\n                vocab_instructions_1: {\n                    type: \"html\",\n                    html: \"<p>By default, only common words are retrieved and displayed from <a href='http://nihongo.monash.edu/cgi-bin/wwwjdic' target='_blank'>WWWJDIC</a>. You can also retrieve uncommon words and phrases by checking the box below. (Warning: this may quickly exhaust your Forvo API key's daily request limits).</p>\"\n                },\n                show_all_wwwjdic_vocab: {\n                    type: \"checkbox\",\n                    label: \"Show uncommon vocab\",\n                    hover_tip: \"Show both common and uncommon WWWJDIC vocab\",\n                    default: false,\n                    full_width: false\n                }\n            }\n        },\n        appearance_page_id: {\n            type: \"page\",\n            label: \"Appearance\",\n            hover_tip: \"Appearance settings\",\n            content: {\n                appearance_instructions_1: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to display the Vocab Beyond section at the top of the page, instead of the bottom.</p>\"\n                },\n                show_vocab_beyond_at_top: {\n                    type: \"checkbox\",\n                    label: \"Show Vocab Beyond at top\",\n                    hover_tip: \"Show the Vocab Beyond section at the top of lessons, reviews, and kanji pages\",\n                    default: false,\n                    full_width: false\n                },\n                appearance_instructions_2: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to reduce the legend to only a link to the full WWWJDIC abbreviations list.</p>\"\n                },\n                only_show_link_in_legend: {\n                    type: \"checkbox\",\n                    label: \"Only show link in legend\",\n                    hover_tip: \"Only show a link to the WWWJDIC abbreviations page in the legend.\",\n                    default: false,\n                    full_width: false\n                },\n                appearance_instructions_3: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to show Forvo usernames above audio clips.</p>\"\n                },\n                show_forvo_usernames: {\n                    type: \"checkbox\",\n                    label: \"Show Forvo usernames\",\n                    hover_tip: \"Show Forvo usernames above each audio clip\",\n                    default: false,\n                    full_width: false\n                }\n            }\n        }\n    }\n};\nfunction onSettingsMenuLinkClick(wkof) {\n    var dialog = new wkof.Settings(__assign({}, wkofSettingsMenuConfig, { on_save: onSettingsSave.bind(null, wkof) }));\n    dialog.open();\n}\nfunction onSettingsSave(wkof) {\n    var updatedSettings = wkof.settings[wkofConstants_1.SettingsScriptId];\n    loadVocab(updatedSettings);\n}\nvar loadVocab = function (wkof) {\n    // tslint:disable-next-line:no-console\n    console.log(\"loadVocab\");\n};\n\n\n//# sourceURL=webpack:///./src/wkof/runAllWkofDependentCode.ts?");

/***/ }),

/***/ "./src/wkof/waitForWkof.ts":
/*!*********************************!*\
  !*** ./src/wkof/waitForWkof.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar windowHelpers_1 = __webpack_require__(/*! ../windowHelpers/windowHelpers */ \"./src/windowHelpers/windowHelpers.ts\");\nvar WKOF_POLL_INTERVAL_MS = 10;\nvar WKOF_WAIT_TIMEOUT_MS = 10000;\nvar WKOF_INSTALL_PAGE = \"https://community.wanikani.com/t/instructions-installing-wanikani-open-framework/28549\";\nvar prompted = false;\nfunction promptInstall(scriptName, overridingGetWindowFunc) {\n    if (prompted) {\n        return;\n    }\n    var win = (overridingGetWindowFunc || windowHelpers_1.getWindow)();\n    prompted = true;\n    if (win.confirm(scriptName +\n        \" requires the Wanikani Open Framework.\\nDo you want to be forwarded to the installation instructions?\")) {\n        win.location.href = WKOF_INSTALL_PAGE;\n    }\n}\n// waitForWkof calls onLoad with the global wkof object after wkof is loaded\nfunction waitForWkof(scriptName, onLoad) {\n    windowHelpers_1.waitUntilWindowPropLoads(windowHelpers_1.getWindow, \"wkof\", WKOF_POLL_INTERVAL_MS, WKOF_WAIT_TIMEOUT_MS, onLoad, promptInstall.bind(null, scriptName));\n}\nexports.waitForWkof = waitForWkof;\n\n\n//# sourceURL=webpack:///./src/wkof/waitForWkof.ts?");

/***/ }),

/***/ "./src/wkof/wkofConstants.ts":
/*!***********************************!*\
  !*** ./src/wkof/wkofConstants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SettingsScriptId = \"wanikani_vocab_beyond_settings\";\nexports.MenuScriptLinkId = \"wanikani_vocab_beyond_settings_link\";\n\n\n//# sourceURL=webpack:///./src/wkof/wkofConstants.ts?");

/***/ })

/******/ });