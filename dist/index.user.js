// ==UserScript==
// @name              WaniKani Vocab Beyond
// @author            Norman Sue
// @description       Shows WWWJDIC vocab with Forvo audio for each kanji in lessons, reviews, and kanji pages. A paid Forvo API key is required for audio.
// @version           0.4.0
// @update            2018-09-30 00:23:15
// @grant             GM_xmlhttpRequest
// @include           https://www.wanikani.com/*
// @run-at            document-start
// @namespace         https://greasyfork.org/en/users/56591-normful
// @connect           nihongo.monash.edu
// @connect           apifree.forvo.com
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

/***/ "./src/dom/domConstants.ts":
/*!*********************************!*\
  !*** ./src/dom/domConstants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.sectionHeaderID = \"wanikani_vocab_beyond_section_header\";\nexports.sectionID = \"wanikani_vocab_beyond_section\";\n\n\n//# sourceURL=webpack:///./src/dom/domConstants.ts?");

/***/ }),

/***/ "./src/dom/getKanji.ts":
/*!*****************************!*\
  !*** ./src/dom/getKanji.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar determinePageType_1 = __webpack_require__(/*! ../urlHelpers/determinePageType */ \"./src/urlHelpers/determinePageType.ts\");\nfunction getKanji(pageType) {\n    switch (pageType) {\n        case determinePageType_1.PageType.kanji:\n            return document.title[document.title.length - 1];\n        case determinePageType_1.PageType.reviews:\n            var curItem = $.jStorage.get(\"currentItem\");\n            if (\"kan\" in curItem) {\n                return curItem.kan.trim();\n            }\n            else {\n                return null;\n            }\n        case determinePageType_1.PageType.lessons:\n            var kanjiNode = $(\"#character\");\n            if (kanjiNode === undefined || kanjiNode === null) {\n                return null;\n            }\n            return kanjiNode.text().trim();\n    }\n    return null;\n}\nexports.getKanji = getKanji;\n\n\n//# sourceURL=webpack:///./src/dom/getKanji.ts?");

/***/ }),

/***/ "./src/dom/insertDOMElements.ts":
/*!**************************************!*\
  !*** ./src/dom/insertDOMElements.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logger_1 = __webpack_require__(/*! ../logger/logger */ \"./src/logger/logger.ts\");\nvar determinePageType_1 = __webpack_require__(/*! ./../urlHelpers/determinePageType */ \"./src/urlHelpers/determinePageType.ts\");\nvar domConstants_1 = __webpack_require__(/*! ./domConstants */ \"./src/dom/domConstants.ts\");\nvar queryWwwjdicThenInsertParsedResults_1 = __webpack_require__(/*! ./queryWwwjdicThenInsertParsedResults */ \"./src/dom/queryWwwjdicThenInsertParsedResults.ts\");\n// TODO: Rename this file to insertInitialDOMElements\nvar Log = new logger_1.Logger(false);\nfunction insertDOMElements(settings) {\n    Log.debug(\"insertDOMElements called\");\n    var pageType = determinePageType_1.determinePageType(document.URL);\n    if (pageType === determinePageType_1.PageType.kanji && !settings.show_vocab_beyond_at_top) {\n        insertPageListHeaderLink();\n    }\n    maybeLoadVocabDependingOnPage(pageType, settings);\n}\nexports.insertDOMElements = insertDOMElements;\nfunction insertPageListHeaderLink() {\n    Log.debug(\"insertPageListHeaderLink called\");\n    var header = $(\".page-list-header\");\n    var listItem = $(\"<li>\");\n    var link = $(\"<a href='#\" + domConstants_1.sectionHeaderID + \"''>Vocab Beyond</a>\");\n    listItem.append(link);\n    // Other scripts may have altered this list, so just insert this link at the end\n    listItem.insertAfter(header.siblings().last());\n}\nfunction maybeLoadVocabDependingOnPage(pageType, settings) {\n    if (pageType === determinePageType_1.PageType.other) {\n        return;\n    }\n    Log.debug(\"maybeLoadVocabDependingOnPage called\");\n    var optAttrs = { attributes: true };\n    var optChildList = { childList: true };\n    if (pageType === determinePageType_1.PageType.kanji) {\n        createSectionAndRunQuery(settings);\n    }\n    else if (pageType === determinePageType_1.PageType.reviews) {\n        var ob = new MutationObserver(function (mutationRecords) {\n            mutationRecords.forEach(checkReviewMut.bind(null, settings));\n        });\n        // Observe the element that is mutated after clicking the\n        // Item Info icon with the eye on it\n        ob.observe(document.getElementById(\"item-info-col2\"), optChildList);\n    }\n    else if (pageType === determinePageType_1.PageType.lessons) {\n        var obs = new MutationObserver(function (mutationRecords) {\n            if (isKanjiLesson()) {\n                createSectionAndRunQuery(settings);\n            }\n            else {\n                Log.debug(\"not doing anything because not kanji lesson\");\n            }\n        });\n        // Observe the 3 elements for the 3 lesson types, that are modified\n        // when switching to each new lesson item\n        obs.observe(document.getElementById(\"supplement-rad\"), optAttrs);\n        obs.observe(document.getElementById(\"supplement-kan\"), optAttrs);\n        obs.observe(document.getElementById(\"supplement-voc\"), optAttrs);\n    }\n}\nfunction createSectionAndRunQuery(settings) {\n    var emptySection = maybeInsertEmptyVocabSectionOnce(settings);\n    queryWwwjdicThenInsertParsedResults_1.queryWwwjdicThenInsertParsedResults(settings, emptySection);\n}\nfunction isKanjiLesson() {\n    var mainInfo = document.getElementById(\"main-info\");\n    return mainInfo && mainInfo.className === \"kanji\";\n}\nfunction checkReviewMut(settings, mutationRecord) {\n    // mutationRecord.addedNotes is a NodeList, not an Array\n    if (mutationRecord.addedNodes.length === 0) {\n        return;\n    }\n    var childIds = [];\n    for (var _i = 0, _a = mutationRecord.addedNodes.values(); _i < _a.length; _i++) {\n        var node = _a[_i];\n        childIds.push(node.id);\n    }\n    var isKanjiReview = JSON.stringify(childIds) ===\n        JSON.stringify([\n            \"item-info-meaning-mnemonic\",\n            \"note-meaning\",\n            \"item-info-reading-mnemonic\",\n            \"note-reading\"\n        ]);\n    if (isKanjiReview) {\n        createSectionAndRunQuery(settings);\n    }\n}\n// Creates a section for the vocab and returns a pointer to the jQuery object.\nfunction maybeInsertEmptyVocabSectionOnce(settings) {\n    var pageType = determinePageType_1.determinePageType(document.URL);\n    if ($(\"#\" + domConstants_1.sectionID).length === 0) {\n        var sectionHTML = \"<section>\" +\n            '<h2 id=\"' +\n            domConstants_1.sectionHeaderID +\n            '\">Vocab Beyond</h2>' +\n            '<div id=\"' +\n            domConstants_1.sectionID +\n            '\"></div>' +\n            \"</section>\";\n        if (pageType === determinePageType_1.PageType.kanji) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for kanji page\");\n            var informationSection = $(\"#information\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(sectionHTML).insertAfter(informationSection);\n            }\n            else {\n                var lastSection = informationSection.siblings().last();\n                $(sectionHTML).insertAfter(lastSection);\n            }\n        }\n        else if (pageType === determinePageType_1.PageType.reviews) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for reviews page\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(\"#item-info-col2\").prepend(sectionHTML);\n            }\n            else {\n                $(\"#item-info-col2\").append(sectionHTML);\n            }\n        }\n        else if (pageType === determinePageType_1.PageType.lessons) {\n            Log.debug(\"maybeInsertEmptyVocabSectionOnce inserting for lessons page\");\n            if (settings.show_vocab_beyond_at_top) {\n                $(\"#supplement-kan-breakdown .col1\").append(sectionHTML);\n            }\n            else {\n                $(\"#supplement-kan-related-vocabulary .col1\").append(sectionHTML);\n            }\n        }\n    }\n    return $(\"#\" + domConstants_1.sectionID);\n}\n\n\n//# sourceURL=webpack:///./src/dom/insertDOMElements.ts?");

/***/ }),

/***/ "./src/dom/queryWwwjdicThenInsertParsedResults.ts":
/*!********************************************************!*\
  !*** ./src/dom/queryWwwjdicThenInsertParsedResults.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar gm_http_1 = __webpack_require__(/*! gm-http */ \"./node_modules/gm-http/dist/index.js\");\nvar logger_1 = __webpack_require__(/*! ../logger/logger */ \"./src/logger/logger.ts\");\nvar determinePageType_1 = __webpack_require__(/*! ./../urlHelpers/determinePageType */ \"./src/urlHelpers/determinePageType.ts\");\nvar getKanji_1 = __webpack_require__(/*! ./getKanji */ \"./src/dom/getKanji.ts\");\nvar makeWwwjdicUrl_1 = __webpack_require__(/*! ./../wwwjdic/makeWwwjdicUrl */ \"./src/wwwjdic/makeWwwjdicUrl.ts\");\nvar parsing_1 = __webpack_require__(/*! ./../wwwjdic/parsing */ \"./src/wwwjdic/parsing.ts\");\nvar Log = new logger_1.Logger(false);\nvar cachedSections = {};\n// TODO: Turn to false later and/or move to IWKOFSettings\nvar DISABLE_FORVO = true;\nvar forvoUserWhitelist = [\"\"];\nvar EMPTY_FORVO_USER_WHITELIST = JSON.stringify(forvoUserWhitelist);\nfunction queryWwwjdicThenInsertParsedResults(settings, \n// TODO: Fix this `any` workaround and replace it with the proper jQuery object type\nemptySection) {\n    Log.debug(\"queryWwwjdic\");\n    if (!emptySection.length) {\n        Log.debug(\"queryWwwjdic returning early because emptySection has no elements\");\n        return;\n    }\n    var pageType = determinePageType_1.determinePageType(document.URL);\n    var kanji = getKanji_1.getKanji(pageType);\n    if (!kanji) {\n        Log.error(\"could not get kanji\");\n        return;\n    }\n    if (cachedSections[kanji]) {\n        Log.debug(\"queryWwwjdic reusing cachedSection and returning early\");\n        emptySection.replaceWith(cachedSections[kanji]);\n        return;\n    }\n    var showMessage = function (message) {\n        emptySection.html(message);\n    };\n    showMessage(\"Loading...\");\n    Log.debug(\"querying WWWJDIC for \", kanji);\n    var wwwJdicUrl = makeWwwjdicUrl_1.makeWwwjdicUrl(kanji, settings);\n    gm_http_1.default\n        .get(wwwJdicUrl)\n        .then(function (res) {\n        onWwwJdicResponse(res.responseText, emptySection, showMessage, settings, kanji);\n    })\n        .catch(function (err) {\n        Log.error(\"WWWJDIC error: \", err);\n        showMessage(\"Error contacting WWWJDIC server\");\n    });\n}\nexports.queryWwwjdicThenInsertParsedResults = queryWwwjdicThenInsertParsedResults;\nfunction onWwwJdicResponse(res, \n// TODO: Replace this `any`\nsection, \n// TODO: Replace this `any`\nshowMessage, settings, kanji) {\n    Log.debug(\"raw res\", res);\n    var lines = parsing_1.extractLines(res);\n    if (lines.length === 0) {\n        showMessage(settings.show_all_wwwjdic_vocab\n            ? \"No vocabulary found.\"\n            : \"No common vocabulary found.\");\n        return;\n    }\n    // Clear loading text\n    showMessage(\"\");\n    if (typeof settings.forvo_username_whitelist_csv === \"string\") {\n        forvoUserWhitelist = settings.forvo_username_whitelist_csv\n            .trim()\n            .replace(/ /g, \"\")\n            .split(\",\");\n    }\n    var renderables = parsing_1.parseLines(lines);\n    var maybeOnlyCommonRenderables = renderables.filter(function (renderable) {\n        if (settings.show_all_wwwjdic_vocab) {\n            return true;\n        }\n        return renderable.cm;\n    });\n    Log.debug(\"WWWJDIC maybeOnlyCommonRenderables.length\", maybeOnlyCommonRenderables.length);\n    var sliceEnd = maybeOnlyCommonRenderables.length;\n    var limit = settings.max_wwwjdic_vocab_shown;\n    if (limit > 0) {\n        sliceEnd = limit;\n    }\n    var renderablesWithinLimit = maybeOnlyCommonRenderables.slice(0, sliceEnd);\n    Log.debug(\"WWWJDIC renderablesWithinLimit.length\", renderablesWithinLimit.length);\n    Log.debug(\"WWWJDIC renderablesWithinLimit\", renderablesWithinLimit);\n    var promises = renderablesWithinLimit.map(function (renderable) {\n        var jpText = renderable.jp;\n        var enPOSText = renderable.pos;\n        var isCommon = renderable.cm;\n        var definitions = renderable.en;\n        var vocabForQueryingForvo = renderable.q;\n        var listItem = $(\"<div>\");\n        listItem.css(\"margin-bottom\", \"35px\");\n        var jpEl = $(\"<h3>\");\n        var _loop_1 = function (codePoint) {\n            var span = $(\"<span>\");\n            span.text(codePoint);\n            var codePointInt = codePoint.codePointAt(0);\n            if (shouldRenderBig(codePointInt)) {\n                span.css(\"font-size\", \"45px\");\n            }\n            else {\n                span.css(\"font-size\", \"11px\");\n            }\n            if (isKanjiCodePoint(codePointInt)) {\n                span.on(\"click\", function () {\n                    window.open(\"https://www.wanikani.com/kanji/\" + encodeURIComponent(codePoint), \"_blank\");\n                });\n                span.hover(function () {\n                    $(this).css(\"cursor\", \"pointer\");\n                });\n            }\n            span.css(\"font-weight\", \"normal\");\n            span.css(\"line-height\", \"45px\");\n            jpEl.append(span);\n        };\n        // for...of iterates over Unicode code points\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator\n        for (var _i = 0, jpText_1 = jpText; _i < jpText_1.length; _i++) {\n            var codePoint = jpText_1[_i];\n            _loop_1(codePoint);\n        }\n        if (!isCommon && !settings.hide_uncommon_indicator) {\n            // uncommon vocab indicator\n            var uc = $(\"<span>\");\n            uc.text(\"希\");\n            uc.css(\"position\", \"absolute\");\n            uc.css(\"display\", \"block\");\n            uc.css(\"font-size\", \"12px\");\n            uc.css(\"height\", \"22px\");\n            uc.css(\"width\", \"22px\");\n            uc.css(\"top\", \"4px\");\n            uc.css(\"left\", \"-30px\");\n            uc.css(\"margin\", \"-0.6px\");\n            uc.css(\"box-sizing\", \"border-box\");\n            uc.css(\"border-radius\", \"50%\");\n            uc.css(\"text-align\", \"center\");\n            uc.css(\"vertical-align\", \"middle\");\n            uc.css(\"text-shadow\", \"0.7px 0.2px 4.1px #FFF9DE\");\n            uc.css(\"background-color\", \"#E38B32\");\n            uc.css(\"box-shadow\", \"0 -3.5px 0 rgba(0,0,0,0.2) inset, 0 0 10px rgba(255,255,255,0.5)\");\n            uc.css(\"color\", \"#F41300\");\n            uc.css(\"z-index\", \"999\");\n            jpEl.append(uc);\n        }\n        jpEl.css(\"position\", \"relative\");\n        jpEl.css(\"margin-top\", \"20px\");\n        jpEl.css(\"margin-right\", \"0\");\n        jpEl.css(\"margin-bottom\", \"15px\");\n        jpEl.css(\"margin-left\", \"0\");\n        jpEl.css(\"padding\", \"0\");\n        listItem.append(jpEl);\n        var enPOSEl = $(\"<h3>\");\n        enPOSEl.text(enPOSText);\n        enPOSEl.css(\"font-size\", \"20px\");\n        enPOSEl.css(\"font-weight\", \"normal\");\n        enPOSEl.css(\"line-height\", \"20px\");\n        enPOSEl.css(\"padding\", \"0\");\n        listItem.append(enPOSEl);\n        definitions.forEach(function (definition) {\n            var enDefnEl = $(\"<p>\");\n            enDefnEl.text(definition);\n            enDefnEl.css(\"margin\", \"0\");\n            enDefnEl.css(\"padding\", \"0\");\n            listItem.append(enDefnEl);\n        });\n        section.append(listItem);\n        // if (!DISABLE_FORVO) {\n        //   return addForvoAudioForThisWordAsync(vocabForQueryingForvo, listItem, settings);\n        // }\n        return Promise.resolve();\n    });\n    Promise.all(promises).then(function () {\n        if (!DISABLE_FORVO) {\n            var forvoAttribution = $('<p><a href=\"https://forvo.com/\" target=\"_blank\">Pronunciations by Forvo</a></p>');\n            section.append(forvoAttribution);\n        }\n        var sectionDeepClone = section.clone(true, true);\n        cachedSections[kanji] = sectionDeepClone;\n    });\n}\nfunction shouldRenderBig(codePointInt) {\n    // Determined from \"\\u3040\".codePointAt(0)\n    // All other hiragana, katakana, kanji have higher code points\n    var firstHiraganaCodePointInt = 12352;\n    if (codePointInt > firstHiraganaCodePointInt) {\n        return true;\n    }\n    var punctuationToRenderBig = [\n        11816,\n        11817,\n        12289,\n        12293 // repeater\n    ];\n    if (punctuationToRenderBig.includes(codePointInt)) {\n        return true;\n    }\n    return false;\n}\nexports.shouldRenderBig = shouldRenderBig;\nfunction isKanjiCodePoint(codePointInt) {\n    return codePointInt >= 19968 && codePointInt <= 40879;\n}\n\n\n//# sourceURL=webpack:///./src/dom/queryWwwjdicThenInsertParsedResults.ts?");

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
eval("\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar logger_1 = __webpack_require__(/*! ../logger/logger */ \"./src/logger/logger.ts\");\nvar appConstants_1 = __webpack_require__(/*! ../appConstants */ \"./src/appConstants.ts\");\nvar insertDOMElements_1 = __webpack_require__(/*! ./../dom/insertDOMElements */ \"./src/dom/insertDOMElements.ts\");\nvar waitForWkof_1 = __webpack_require__(/*! ./waitForWkof */ \"./src/wkof/waitForWkof.ts\");\nvar wkofConstants_1 = __webpack_require__(/*! ./wkofConstants */ \"./src/wkof/wkofConstants.ts\");\nvar Log = new logger_1.Logger(false);\nfunction runAllWkofDependentCode() {\n    waitForWkof_1.waitForWkof(appConstants_1.prettyScriptName, function (wkof) {\n        wkof.include(\"Menu,Settings\");\n        wkof.ready(\"Menu,Settings\").then(function () {\n            wkof.Menu.insert_script_link({\n                name: wkofConstants_1.MenuScriptLinkId,\n                submenu: \"Vocab Beyond\",\n                title: \"Settings\",\n                on_click: onSettingsMenuLinkClick.bind(null, wkof)\n            });\n            wkof.Settings.load(wkofConstants_1.SettingsScriptId).then(function (settings) {\n                insertDOMElements_1.insertDOMElements(settings);\n            });\n        });\n    });\n}\nexports.runAllWkofDependentCode = runAllWkofDependentCode;\nvar wkofSettingsMenuConfig = {\n    script_id: wkofConstants_1.SettingsScriptId,\n    title: \"WaniKani Vocab Beyond\",\n    autosave: true,\n    background: false,\n    content: {\n        forvo_page_id: {\n            type: \"page\",\n            label: \"Audio\",\n            hover_tip: \"Settings for Forvo.com audio pronunciations\",\n            content: {\n                forvo_instructions: {\n                    type: \"html\",\n                    html: \"<p><a href='https://forvo.com' target='_blank'>Forvo.com</a> has an audio collection of words pronounced by native Japanese speakers.</p>\" +\n                        \"<p>To enable Forvo pronunciations of vocabulary words:</p>\" +\n                        \"<p>1. <a href='https://forvo.com/signup/' target='_blank'>Sign up for a Forvo.com account</a></p>\" +\n                        \"<p>2. <a href='https://api.forvo.com/plans-and-pricing' target='_blank'>Purchase an API key here</a></p>\" +\n                        \"<p>3. Enter your key below</p>\"\n                },\n                forvo_api_key: {\n                    type: \"text\",\n                    label: \"Forvo API key\",\n                    full_width: true,\n                    hover_tip: \"Your API key from https://api.forvo.com/\"\n                },\n                forvo_caveat: {\n                    type: \"html\",\n                    html: \"<p>(WaniKani Vocab Beyond will work without a Forvo API key, but audio for vocabulary won't be shown.)</p>\"\n                },\n                forvo_divider_id: {\n                    type: \"divider\"\n                },\n                forvo_rating_instructions: {\n                    type: \"html\",\n                    html: \"<p>Forvo pronunciations are voted on by users. Limit displayed audio to at least this overall rating. Zero is the default and recommended value.</p>\"\n                },\n                forvo_min_rating: {\n                    type: \"number\",\n                    label: \"Minimum Forvo rating\",\n                    hover_tip: \"Only show Forvo pronunciations with at least this rating\",\n                    placeholder: \"0\",\n                    default: 0,\n                    full_width: false\n                },\n                forvo_divider_id_2: {\n                    type: \"divider\"\n                },\n                forvo_whitelist_instructions: {\n                    type: \"html\",\n                    html: \"<p>Comma-separated list of Forvo users whose pronunciations should be shown. If blank, pronunciations from all users are shown.</p>\"\n                },\n                forvo_username_whitelist_csv: {\n                    type: \"text\",\n                    label: \"Favorite Forvo users\",\n                    full_width: true,\n                    placeholder: \"Example: skent, usako_usagiclub, strawberrybrown\",\n                    default: \"\",\n                    hover_tip: \"A comma-separated list of Forvo usernames whose pronunciations should be shown\"\n                }\n            }\n        },\n        vocab_page_id: {\n            type: \"page\",\n            label: \"Vocab\",\n            hover_tip: \"Settings for WWWJDIC vocabulary words\",\n            content: {\n                vocab_instructions_1: {\n                    type: \"html\",\n                    html: \"<p>By default, only common words are retrieved and displayed from <a href='http://nihongo.monash.edu/cgi-bin/wwwjdic' target='_blank'>WWWJDIC</a>. You can also retrieve uncommon words and phrases by checking the box below.</p>\"\n                },\n                show_all_wwwjdic_vocab: {\n                    type: \"checkbox\",\n                    label: \"Show uncommon vocab\",\n                    hover_tip: \"Show both common and uncommon WWWJDIC vocab\",\n                    default: false,\n                    full_width: false\n                },\n                vocab_instructions_2: {\n                    type: \"html\",\n                    html: \"<p>Set the maximum number of WWWJDIC vocab to display per kanji below. 0 means unlimited. (Warning: showing WWWJDIC unlimited results may quickly exhaust your Forvo API key's daily request limits.)</p>\"\n                },\n                max_wwwjdic_vocab_shown: {\n                    type: \"number\",\n                    label: \"Maximum number of WWWJDIC vocab to display per kanji\",\n                    hover_tip: \"Maximum number of WWWJDIC vocabulary to display per kanji\",\n                    full_width: true,\n                    placeholder: \"15\",\n                    default: 15,\n                    min: 0\n                }\n            }\n        },\n        appearance_page_id: {\n            type: \"page\",\n            label: \"Appearance\",\n            hover_tip: \"Appearance settings\",\n            content: {\n                appearance_instructions_1: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to display the Vocab Beyond section at the top of the page, instead of the bottom.</p>\"\n                },\n                show_vocab_beyond_at_top: {\n                    type: \"checkbox\",\n                    label: \"Show Vocab Beyond at top\",\n                    hover_tip: \"Show the Vocab Beyond section at the top of lessons, reviews, and kanji pages\",\n                    default: false,\n                    full_width: false\n                },\n                appearance_instructions_2: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to show Forvo usernames above audio clips.</p>\"\n                },\n                show_forvo_usernames: {\n                    type: \"checkbox\",\n                    label: \"Show Forvo usernames\",\n                    hover_tip: \"Show Forvo usernames above each audio clip\",\n                    default: false,\n                    full_width: false\n                },\n                appearance_instructions_3: {\n                    type: \"html\",\n                    html: \"<p>Check the box below to hide the icon beside uncommon vocab.</p>\"\n                },\n                hide_uncommon_indicator: {\n                    type: \"checkbox\",\n                    label: \"Hide uncommon icon\",\n                    hover_tip: \"Hide uncommon vocabulary icon\",\n                    default: false,\n                    full_width: false\n                }\n            }\n        }\n    }\n};\nfunction onSettingsMenuLinkClick(wkof) {\n    var dialog = new wkof.Settings(__assign({}, wkofSettingsMenuConfig, { on_save: onSettingsSave.bind(null, wkof) }));\n    dialog.open();\n}\nfunction onSettingsSave(wkof) {\n    var updatedSettings = wkof.settings[wkofConstants_1.SettingsScriptId];\n    Log.debug(\"onSettingsSave NYI\");\n}\n\n\n//# sourceURL=webpack:///./src/wkof/runAllWkofDependentCode.ts?");

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

/***/ }),

/***/ "./src/wwwjdic/dict_codes.ts":
/*!***********************************!*\
  !*** ./src/wwwjdic/dict_codes.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DICT_CODES = {\n    abbr: \"abbreviation\",\n    \"adj-f\": \"noun or verb acting prenominally\",\n    \"adj-i\": \"i-adjective\",\n    \"adj-kari\": \"'kari' adjective (archaic)\",\n    \"adj-ku\": \"'ku' adjective (archaic)\",\n    \"adj-na\": \"na-adjective\",\n    \"adj-nari\": \"archaic/formal form of na-adjective\",\n    \"adj-no\": \"no-adjective\",\n    \"adj-pn\": \"pre-noun adjectival (rentaishi)\",\n    \"adj-s\": \"special adjective\",\n    \"adj-shiku\": \"'shiku' adjective (archaic)\",\n    \"adj-t\": \"'taru' adjective\",\n    adv: \"adverb\",\n    \"adv-n\": \"adverbial noun\",\n    \"adv-to\": \"adverb taking the と particle\",\n    an: \"adjectival noun (keiyoudoushi)\",\n    anat: \"anatomical term\",\n    arch: \"archaism\",\n    archit: \"architecture term\",\n    astron: \"astronomy term\",\n    ateji: \"ateji reading\",\n    aux: \"auxiliary\",\n    \"aux-adj\": \"auxiliary adjective\",\n    \"aux-v\": \"auxiliary verb\",\n    baseb: \"baseball term\",\n    biol: \"biology term\",\n    bot: \"botany term\",\n    Buddh: \"Buddhist term\",\n    bus: \"business term\",\n    c: \"company name\",\n    chem: \"chemistry term\",\n    chn: \"children's language\",\n    col: \"colloquialism\",\n    comp: \"computer terminology\",\n    conj: \"conjunction\",\n    ctr: \"counter\",\n    derog: \"derogatory word or expression\",\n    econ: \"economics term\",\n    eK: \"exclusively written in kanji\",\n    engr: \"engineering term\",\n    exp: \"expression\",\n    f: \"female given name\",\n    fam: \"familiar language\",\n    fem: \"female term or language\",\n    finc: \"finance term\",\n    food: \"food term\",\n    g: \"given name, as-yet not classified by sex\",\n    geol: \"geology term\",\n    geom: \"geometry term\",\n    gikun: \"gikun (meaning) reading\",\n    gram: \"grammatical term\",\n    h: \"full (family plus given) name of a person\",\n    hob: \"Hokkaido-ben\",\n    hon: \"honorific language (sonkeigo)\",\n    hum: \"humble language (kenjougo)\",\n    id: \"idiomatic expression\",\n    ik: \"irregular kana\",\n    iK: \"irregular kanji\",\n    int: \"interjection\",\n    io: \"irregular okurigana\",\n    iv: \"irregular verb\",\n    joc: \"jocular, humorous term\",\n    ksb: \"Kansai-ben\",\n    ktb: \"Kantou-ben\",\n    kyb: \"Kyoto-ben\",\n    kyu: \"Kyuushuu-ben\",\n    law: \"law term\",\n    ling: \"linguistics terminology\",\n    m: \"male given name\",\n    \"m-sl\": \"manga slang\",\n    MA: \"martial arts term\",\n    male: \"male term or language\",\n    \"male-sl\": \"male slang\",\n    math: \"mathematics\",\n    med: \"medical term\",\n    mil: \"military\",\n    music: \"music term\",\n    n: \"noun\",\n    \"n-adv\": \"adverbial noun\",\n    \"n-pr\": \"proper noun\",\n    \"n-pref\": \"prefix noun\",\n    \"n-suf\": \"suffix noun\",\n    \"n-t\": \"temporal noun\",\n    nab: \"Nagano-ben\",\n    neg: \"negative (in a negative sentence, or with negative verb)\",\n    \"neg-v\": \"negative verb (when used with)\",\n    num: \"numeral\",\n    o: \"organization name\",\n    obs: \"obsolete term\",\n    obsc: \"obscure term\",\n    ok: \"outdated kana\",\n    oK: \"outdated kanji\",\n    \"on-mim\": \"onomatopoeic or mimetic word\",\n    osb: \"Osaka-ben\",\n    p: \"place-name\",\n    physics: \"physics terminology\",\n    pn: \"pronoun\",\n    poet: \"poetical term\",\n    pol: \"polite language\",\n    pr: \"product name\",\n    pref: \"prefix\",\n    proverb: \"proverb\",\n    prt: \"particle\",\n    qv: \"quod vide (see another entry)\",\n    rare: \"rare\",\n    rkb: \"Ryukyuan language\",\n    s: \"surname\",\n    sens: \"sensitive\",\n    Shinto: \"Shinto term\",\n    sl: \"slang\",\n    sports: \"sports term\",\n    st: \"station name\",\n    suf: \"suffix\",\n    sumo: \"sumo term\",\n    thb: \"Touhoku-ben\",\n    tsb: \"Tosa-ben\",\n    tsug: \"Tsugaru-ben\",\n    u: \"unclassified name\",\n    uk: \"usually written using kana alone\",\n    uK: \"usually written using kanji alone\",\n    \"v-unspec\": \"verb unspecified\",\n    v1: \"ichidan verb\",\n    \"v2a-s\": \"nidan verb (archaic)\",\n    \"v2b-k\": \"nidan verb (archaic)\",\n    \"v2b-s\": \"nidan verb (archaic)\",\n    \"v2d-k\": \"nidan verb (archaic)\",\n    \"v2d-s\": \"nidan verb (archaic)\",\n    \"v2g-k\": \"nidan verb (archaic)\",\n    \"v2g-s\": \"nidan verb (archaic)\",\n    \"v2h-k\": \"nidan verb (archaic)\",\n    \"v2h-s\": \"nidan verb (archaic)\",\n    \"v2k-k\": \"nidan verb (archaic)\",\n    \"v2k-s\": \"nidan verb (archaic)\",\n    \"v2m-k\": \"nidan verb (archaic)\",\n    \"v2m-s\": \"nidan verb (archaic)\",\n    \"v2n-s\": \"nidan verb (archaic)\",\n    \"v2r-k\": \"nidan verb (archaic)\",\n    \"v2r-s\": \"nidan verb (archaic)\",\n    \"v2s-s\": \"nidan verb (archaic)\",\n    \"v2t-k\": \"nidan verb (archaic)\",\n    \"v2t-s\": \"nidan verb (archaic)\",\n    \"v2w-s\": \"nidan verb (archaic)\",\n    \"v2y-k\": \"nidan verb (archaic)\",\n    \"v2y-s\": \"nidan verb (archaic)\",\n    \"v2z-s\": \"nidan verb (archaic)\",\n    v4b: \"yodan verb (archaic)\",\n    v4g: \"yodan verb (archaic)\",\n    v4h: \"yondan verb (archaic)\",\n    v4k: \"yodan verb (archaic)\",\n    v4m: \"yodan verb (archaic)\",\n    v4n: \"yodan verb (archaic)\",\n    v4r: \"yondan verb (archaic)\",\n    v4s: \"yodan verb (archaic)\",\n    v4t: \"yodan verb (archaic)\",\n    v5aru: \"godan verb\",\n    v5b: \"godan verb\",\n    v5g: \"godan verb\",\n    v5k: \"godan verb\",\n    \"v5k-s\": \"godan verb\",\n    v5m: \"godan verb\",\n    v5n: \"godan verb\",\n    v5r: \"godan verb\",\n    \"v5r-i\": \"godan verb\",\n    v5s: \"godan verb\",\n    v5t: \"godan verb\",\n    v5u: \"godan verb\",\n    \"v5u-s\": \"godan verb\",\n    v5uru: \"godan verb\",\n    v5z: \"godan verb\",\n    vi: \"intransitive verb\",\n    vk: \"kuru verb\",\n    vn: \"irregular nu verb\",\n    vr: \"irregular ru verb, plain form ends with -ri\",\n    vs: \"suru verb\",\n    \"vs-c\": \"su verb - precursor to the modern suru\",\n    \"vs-i\": \"suru verb - irregular\",\n    \"vs-s\": \"suru verb - special class\",\n    vt: \"transitive verb\",\n    vulg: \"vulgar expression or word\",\n    vz: \"ichidan verb - -zuru special class (alternative form of -jiru verbs)\",\n    X: \"rude or X-rated term\",\n    zool: \"zoology term\"\n};\n\n\n//# sourceURL=webpack:///./src/wwwjdic/dict_codes.ts?");

/***/ }),

/***/ "./src/wwwjdic/formatting/definition_line.ts":
/*!***************************************************!*\
  !*** ./src/wwwjdic/formatting/definition_line.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dict_codes_1 = __webpack_require__(/*! ../dict_codes */ \"./src/wwwjdic/dict_codes.ts\");\nfunction formatDefinitionLine(line) {\n    return replaceAbbreviations(replaceDictCodesAtEnd(replaceDictCodesAtStart(line)));\n}\nexports.formatDefinitionLine = formatDefinitionLine;\nfunction replaceDictCodesAtStart(text) {\n    // Both regexes account for an optional numbered list prefix (e.g. \"1. \")\n    var dictCodeInParens = /^([0-9]\\.\\s)?\\(([a-z,A-Z,-,0-9]+)\\)(.*)/;\n    var dictCodeInBraces = /^([0-9]\\.\\s)?\\{([a-z,A-Z,-,0-9]+)\\}(.*)/;\n    var parenMatches = text.match(dictCodeInParens);\n    var braceMatches = text.match(dictCodeInBraces);\n    if (parenMatches) {\n        var listPrefix = parenMatches[1] ? parenMatches[1] : \"\";\n        return listPrefix + replaceDictCode(parenMatches[2]) + parenMatches[3];\n    }\n    if (braceMatches) {\n        var listPrefix = braceMatches[1] ? braceMatches[1] : \"\";\n        return listPrefix + replaceDictCode(braceMatches[2]) + braceMatches[3];\n    }\n    return text;\n}\nfunction replaceDictCode(maybeDictCode) {\n    var longForm = dict_codes_1.DICT_CODES[maybeDictCode];\n    if (!longForm) {\n        return \"(\" + maybeDictCode + \")\";\n    }\n    return \"[\" + longForm + \"]\";\n}\nfunction replaceDictCodesAtEnd(text) {\n    var dictCodesInParens = /(.*)\\(([a-z,A-Z,0-9\\,\\-]+)\\)$/;\n    var m = text.match(dictCodesInParens);\n    if (!m) {\n        return text;\n    }\n    var longFormCodes = m[2]\n        .split(\",\")\n        .map(function (maybeDictCode) {\n        var longForm = dict_codes_1.DICT_CODES[maybeDictCode];\n        return longForm ? longForm : maybeDictCode;\n    })\n        .join(\", \");\n    return m[1] + \"(\" + longFormCodes + \")\";\n}\nfunction replaceAbbreviations(text) {\n    return text.replace(/usu\\./g, \"usually\").replace(/esp\\./g, \"especially\");\n}\n\n\n//# sourceURL=webpack:///./src/wwwjdic/formatting/definition_line.ts?");

/***/ }),

/***/ "./src/wwwjdic/formatting/part_of_speech.ts":
/*!**************************************************!*\
  !*** ./src/wwwjdic/formatting/part_of_speech.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dict_codes_1 = __webpack_require__(/*! ../dict_codes */ \"./src/wwwjdic/dict_codes.ts\");\nfunction capitalize(text) {\n    return text.charAt(0).toUpperCase() + text.slice(1);\n}\nfunction formatPartOfSpeech(commaDelimitedPos) {\n    if (!commaDelimitedPos) {\n        return \"\";\n    }\n    return (commaDelimitedPos.split(\",\") || [])\n        .map(function (part) {\n        var expandedPos = dict_codes_1.DICT_CODES[part];\n        return expandedPos ? capitalize(expandedPos) : capitalize(part);\n    })\n        .join(\", \");\n}\nexports.formatPartOfSpeech = formatPartOfSpeech;\n\n\n//# sourceURL=webpack:///./src/wwwjdic/formatting/part_of_speech.ts?");

/***/ }),

/***/ "./src/wwwjdic/formatting/pronunciation.ts":
/*!*************************************************!*\
  !*** ./src/wwwjdic/formatting/pronunciation.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dict_codes_1 = __webpack_require__(/*! ../dict_codes */ \"./src/wwwjdic/dict_codes.ts\");\n// 3040-309F: hiragana\n// 30A0-30FF: katakana\n// 4E00-9FAF: common and uncommon kanji\nvar kanjiAndCodeSplitter = /^(.*)\\(([\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF]+)\\)\\(([a-z,A-Z-,0-9]+)\\)$/;\nvar codeSplitter = /^(.*)\\(([a-z,A-Z-,0-9]+)\\)$/;\nvar kanjiSplitter = /^(.*)\\(([\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FAF]+)\\)$/;\nfunction formatPronunciation(pronunciation) {\n    var parts = pronunciation.split(\";\");\n    var mapped = parts\n        .map(function (part) {\n        var kcm = part.match(kanjiAndCodeSplitter);\n        if (kcm) {\n            return (kcm[1] +\n                \"⸨\" +\n                kcm[2] +\n                \"⸩\" +\n                \"(\" +\n                (dict_codes_1.DICT_CODES[kcm[3]] || kcm[3]) +\n                \")\");\n        }\n        var cm = part.match(codeSplitter);\n        if (cm) {\n            return cm[1] + \"(\" + (dict_codes_1.DICT_CODES[cm[2]] || cm[2]) + \")\";\n        }\n        var km = part.match(kanjiSplitter);\n        if (km) {\n            return km[1] + \"⸨\" + km[2] + \"⸩\";\n        }\n        return part;\n    })\n        .join(\"、\");\n    return \"（\" + mapped + \"）\";\n}\nexports.formatPronunciation = formatPronunciation;\n\n\n//# sourceURL=webpack:///./src/wwwjdic/formatting/pronunciation.ts?");

/***/ }),

/***/ "./src/wwwjdic/formatting/vocab.ts":
/*!*****************************************!*\
  !*** ./src/wwwjdic/formatting/vocab.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dict_codes_1 = __webpack_require__(/*! ../dict_codes */ \"./src/wwwjdic/dict_codes.ts\");\nvar dictCodeSplitter = /(.*)\\(([a-z,A-Z-,0-9]+)\\)$/;\nfunction formatVocab(words) {\n    return words\n        .replace(/\\(P\\)/g, \"(common)\")\n        .split(\";\")\n        .map(function (word) {\n        var trimmed = word.trim();\n        var m = trimmed.trim().match(dictCodeSplitter);\n        if (!m) {\n            return trimmed;\n        }\n        return m[1] + \"(\" + (dict_codes_1.DICT_CODES[m[2]] || m[2]) + \")\";\n    })\n        .join(\"、\");\n}\nexports.formatVocab = formatVocab;\n\n\n//# sourceURL=webpack:///./src/wwwjdic/formatting/vocab.ts?");

/***/ }),

/***/ "./src/wwwjdic/formatting/vocab_header.ts":
/*!************************************************!*\
  !*** ./src/wwwjdic/formatting/vocab_header.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vocab_1 = __webpack_require__(/*! ./vocab */ \"./src/wwwjdic/formatting/vocab.ts\");\nvar pronunciation_1 = __webpack_require__(/*! ./pronunciation */ \"./src/wwwjdic/formatting/pronunciation.ts\");\nvar pronunciationSplitter = /(.*)\\[(.+)\\]$/;\nfunction formatVocabHeader(text) {\n    var m = text.match(pronunciationSplitter);\n    if (!m) {\n        return text;\n    }\n    return vocab_1.formatVocab(m[1].trim()) + pronunciation_1.formatPronunciation(m[2]);\n}\nexports.formatVocabHeader = formatVocabHeader;\n\n\n//# sourceURL=webpack:///./src/wwwjdic/formatting/vocab_header.ts?");

/***/ }),

/***/ "./src/wwwjdic/makeWwwjdicUrl.ts":
/*!***************************************!*\
  !*** ./src/wwwjdic/makeWwwjdicUrl.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// API Docs: http://www.edrdg.org/wwwjdic/wwwjdicinf.html#backdoor_tag\nfunction makeWwwjdicUrl(kanji, settings) {\n    var encodedKanji = encodeURIComponent(kanji);\n    var useEDICT = \"1\";\n    var useBackdoorEntryRawOutput = \"Z\";\n    var searchType;\n    var dictionaryLookupWithUTF8LookupText = \"U\";\n    searchType = dictionaryLookupWithUTF8LookupText;\n    var keyType;\n    var lookupKanjiInAnyPosition = \"L\";\n    keyType = lookupKanjiInAnyPosition;\n    var queryCode = useEDICT + useBackdoorEntryRawOutput + searchType + keyType;\n    return (\"http://nihongo.monash.edu/cgi-bin/wwwjdic?\" + queryCode + encodedKanji);\n}\nexports.makeWwwjdicUrl = makeWwwjdicUrl;\n\n\n//# sourceURL=webpack:///./src/wwwjdic/makeWwwjdicUrl.ts?");

/***/ }),

/***/ "./src/wwwjdic/parsing.ts":
/*!********************************!*\
  !*** ./src/wwwjdic/parsing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vocab_header_1 = __webpack_require__(/*! ./formatting/vocab_header */ \"./src/wwwjdic/formatting/vocab_header.ts\");\nvar part_of_speech_1 = __webpack_require__(/*! ./formatting/part_of_speech */ \"./src/wwwjdic/formatting/part_of_speech.ts\");\nvar definition_line_1 = __webpack_require__(/*! ./formatting/definition_line */ \"./src/wwwjdic/formatting/definition_line.ts\");\nfunction extractLines(rawResponseText) {\n    if (rawResponseText.indexOf(\"No matches were found for this key\") > -1) {\n        return [];\n    }\n    var noHeader = rawResponseText.slice(rawResponseText.indexOf(\"<pre>\") + 6);\n    var preBody = noHeader.slice(0, noHeader.indexOf(\"</pre>\") - 1);\n    return preBody.split(/\\r?\\n/);\n}\nexports.extractLines = extractLines;\nvar commonP = /(.*)\\/\\(P\\)$/;\nfunction parseLines(lines) {\n    return lines.map(function (untrimmed) {\n        var line = untrimmed.trim();\n        // Extract vocab header\n        var sepIdx = line.indexOf(\" /\");\n        var vocabHeader = line.substring(0, sepIdx);\n        var rest = line.substring(sepIdx + 2);\n        // Extract part of speech\n        var firstRightParen = rest.indexOf(\")\");\n        var partOfSpeech = rest.substring(1, firstRightParen);\n        var englishAndMaybeCommonP = rest.substring(firstRightParen + 2, rest.length - 1);\n        // Extract common indicator from end of line\n        var commonMatches = englishAndMaybeCommonP.match(commonP);\n        var isCommon;\n        var english;\n        if (commonMatches) {\n            isCommon = true;\n            english = commonMatches[1].replace(/\\//g, \"; \");\n        }\n        else {\n            isCommon = false;\n            english = englishAndMaybeCommonP.replace(/\\//g, \"; \");\n        }\n        var definitions = [];\n        var thisDefn;\n        if (english.indexOf(\"(1) \") === 0) {\n            var nextDefNum = 2;\n            var cur = 0; // index of start of current definition text\n            var next = 0; // index of start of next definition text\n            while (true) {\n                next = english.indexOf(\"(\" + nextDefNum + \")\", cur);\n                if (next > -1) {\n                    thisDefn = english.substring(cur, next - 1);\n                    definitions.push(definition_line_1.formatDefinitionLine(dottedListItem(thisDefn)));\n                    nextDefNum++;\n                    cur = next;\n                }\n                else {\n                    thisDefn = english.substring(cur);\n                    definitions.push(definition_line_1.formatDefinitionLine(dottedListItem(thisDefn)));\n                    break;\n                }\n            }\n        }\n        else {\n            definitions.push(definition_line_1.formatDefinitionLine(english));\n        }\n        return {\n            // Japanese text header, formatted, with WWWJDIC dictionary codes expanded\n            jp: vocab_header_1.formatVocabHeader(vocabHeader),\n            // Part of speech, fully expanded\n            pos: part_of_speech_1.formatPartOfSpeech(partOfSpeech),\n            // Boolean indicating whether it is a common entry or not\n            cm: isCommon,\n            // Array of English definition lines, with WWWJDIC dictionary codes expanded\n            en: definitions,\n            // The first-listed vocabulary to query Forvo with\n            q: extractVocab(vocabHeader)\n        };\n    });\n}\nexports.parseLines = parseLines;\nvar parenListItemRegExp = /\\((\\d+)\\)(.*)/;\nfunction dottedListItem(text) {\n    var matches = text.match(parenListItemRegExp);\n    if (!matches) {\n        return text;\n    }\n    return matches[1] + \".\" + matches[2].replace(/;$/, \"\");\n}\n// 3040-309F: hiragana\n// 30A0-30FF: katakana\n// 4E00-9FAF: common and uncommon kanji\nvar jpRegex = /([\\u3040-\\u309F]|[\\u30A0-\\u30FF]|[\\u4E00-\\u9FAF])+/;\nfunction extractVocab(jpText) {\n    var matches = jpText.match(jpRegex);\n    return matches ? matches[0] : jpText;\n}\n\n\n//# sourceURL=webpack:///./src/wwwjdic/parsing.ts?");

/***/ })

/******/ });