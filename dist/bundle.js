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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascipt/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/files/i18n.js":
/*!***************************!*\
  !*** ./src/files/i18n.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar i18n = [{\n  code: \"en\",\n  name: \"English\"\n}, {\n  code: \"de\",\n  name: \"German\"\n}, {\n  code: \"pt\",\n  name: \"Portuguese\"\n}, {\n  code: \"es\",\n  name: \"Spanish\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18n);\n\n//# sourceURL=webpack:///./src/files/i18n.js?");

/***/ }),

/***/ "./src/files/keys.js":
/*!***************************!*\
  !*** ./src/files/keys.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar keysi18n = [{\n  English: \"About\",\n  German: \"Über\",\n  Portuguese: \"Sobre\",\n  Spanish: \"Acerca\"\n}, {\n  English: \"Careers\",\n  German: \"Karriere\",\n  Portuguese: \"Carreiras\",\n  Spanish: \"Carreras\"\n}, {\n  English: \"Media\",\n  German: \"Medien\",\n  Portuguese: \"Comunicação\",\n  Spanish: \"Medios\"\n}, {\n  English: \"Contact\",\n  German: \"Kontakt\",\n  Portuguese: \"Contato\",\n  Spanish: \"Contato\"\n}, {\n  English: \"Simulate Tasks\",\n  German: \"Aufgaben simulieren\",\n  Portuguese: \"Simular tarefas\",\n  Spanish: \"Simular tareas\"\n}, {\n  English: \"All rights reserved\",\n  German: \"Alle Rechte vorbehalten\",\n  Portuguese: \"Todos os direitos reservados\",\n  Spanish: \"Todos los derechos reservados\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (keysi18n);\n\n//# sourceURL=webpack:///./src/files/keys.js?");

/***/ }),

/***/ "./src/javascipt/index.js":
/*!********************************!*\
  !*** ./src/javascipt/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _files_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/i18n */ \"./src/files/i18n.js\");\n/* harmony import */ var _files_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/keys */ \"./src/files/keys.js\");\n\n\n\nvar mlr = function mlr() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$dropID = _ref.dropID,\n      dropID = _ref$dropID === void 0 ? \"langDrop\" : _ref$dropID,\n      _ref$stringAttribute = _ref.stringAttribute,\n      stringAttribute = _ref$stringAttribute === void 0 ? \"i18n-text\" : _ref$stringAttribute,\n      _ref$chosenLang = _ref.chosenLang,\n      chosenLang = _ref$chosenLang === void 0 ? \"English\" : _ref$chosenLang,\n      _ref$mLstrings = _ref.mLstrings,\n      mLstrings = _ref$mLstrings === void 0 ? _files_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _ref$mLstrings,\n      _ref$countryCodes = _ref.countryCodes,\n      countryCodes = _ref$countryCodes === void 0 ? false : _ref$countryCodes,\n      _ref$countryCodeData = _ref.countryCodeData,\n      countryCodeData = _ref$countryCodeData === void 0 ? [] : _ref$countryCodeData;\n\n  var root = document.documentElement;\n  var listOfLanguages = Object.keys(mLstrings[0]);\n  var mlrLangInUse;\n  mlrLangInUse = chosenLang;\n\n  (function createMLDrop() {\n    var langDrop = document.getElementById(dropID); // Reset the menu\n\n    langDrop.innerHTML = \"\"; // Now build the options\n\n    listOfLanguages.forEach(function (lang) {\n      var HTMLoption = document.createElement(\"option\");\n      HTMLoption.value = lang;\n      HTMLoption.textContent = lang;\n      langDrop.appendChild(HTMLoption);\n    });\n    langDrop.addEventListener(\"change\", function (e) {\n      mlrLangInUse = langDrop[langDrop.selectedIndex].value;\n      resolveAllMLStrings(); // Here we update the 2-digit lang attribute if required\n\n      if (countryCodes === true) {\n        if (!Array.isArray(countryCodeData) || !countryCodeData.length) {\n          console.warn(\"Cannot access strings for language codes\");\n          return;\n        }\n\n        root.setAttribute(\"lang\", updateCountryCodeOnHTML().code);\n      }\n    });\n  })();\n\n  var updateCountryCodeOnHTML = function updateCountryCodeOnHTML() {\n    return countryCodeData.find(function (this2Digit) {\n      return this2Digit.name === mlrLangInUse;\n    });\n  };\n\n  var resolveAllMLStrings = function resolveAllMLStrings() {\n    var stringsToBeResolved = document.querySelectorAll(\"[\".concat(stringAttribute, \"]\"));\n    stringsToBeResolved.forEach(function (stringToBeResolved) {\n      var originaltextContent = stringToBeResolved.textContent;\n      var resolvedText = resolveMLString(originaltextContent, mLstrings);\n      stringToBeResolved.textContent = resolvedText;\n    });\n  };\n\n  var resolveMLString = function resolveMLString(stringToBeResolved, mLstrings) {\n    var matchingStringIndex = mLstrings.find(function (stringObj) {\n      // Create an array of the objects values:\n      var stringValues = Object.values(stringObj); // Now return if we can find that string anywhere in there\n\n      return stringValues.includes(stringToBeResolved);\n    });\n\n    if (matchingStringIndex) {\n      return matchingStringIndex[mlrLangInUse];\n    } else {\n      // If we don't have a match in our language strings, return the original\n      return stringToBeResolved;\n    }\n  };\n};\n\nmlr({\n  dropID: \"langDrop\",\n  stringAttribute: \"i18n-text\",\n  chosenLang: \"English\",\n  mLstrings: _files_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  countryCodes: true,\n  countryCodeData: _files_i18n__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/javascipt/index.js?");

/***/ })

/******/ });