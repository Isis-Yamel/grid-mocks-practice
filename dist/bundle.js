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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascipt/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/polar.jpg":
/*!******************************!*\
  !*** ./src/assets/polar.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6b16efb313beef04fd8a83b20421f89e.jpg");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/files/assets.js":
/*!*****************************!*\
  !*** ./src/files/assets.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_polar_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/polar.jpg */ "./src/assets/polar.jpg");


var mainAsset = function mainAsset() {
  var polarImage = document.getElementById('polarAsset');
  var image = document.createElement("img");
  image.alt = 'polar bear';
  image.src = _assets_polar_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
  polarImage.appendChild(image);
};

/* harmony default export */ __webpack_exports__["default"] = (mainAsset);

/***/ }),

/***/ "./src/files/i18n.js":
/*!***************************!*\
  !*** ./src/files/i18n.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var i18n = [{
  code: "en",
  name: "English"
}, {
  code: "de",
  name: "German"
}, {
  code: "pt",
  name: "Portuguese"
}, {
  code: "es",
  name: "Spanish"
}];
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./src/files/keys.js":
/*!***************************!*\
  !*** ./src/files/keys.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var keysi18n = [{
  English: "About",
  German: "Über",
  Portuguese: "Sobre",
  Spanish: "Acerca"
}, {
  English: "Careers",
  German: "Karriere",
  Portuguese: "Carreiras",
  Spanish: "Carreras"
}, {
  English: "Media",
  German: "Medien",
  Portuguese: "Comunicação",
  Spanish: "Medios"
}, {
  English: "Contact",
  German: "Kontakt",
  Portuguese: "Contato",
  Spanish: "Contacto"
}, {
  English: "Simulate Tasks",
  German: "Aufgaben simulieren",
  Portuguese: "Simular tarefas",
  Spanish: "Simular tareas"
}, {
  English: "All rights reserved",
  German: "Alle Rechte vorbehalten",
  Portuguese: "Todos os direitos reservados",
  Spanish: "Todos los derechos reservados"
}];
/* harmony default export */ __webpack_exports__["default"] = (keysi18n);

/***/ }),

/***/ "./src/javascipt/index.js":
/*!********************************!*\
  !*** ./src/javascipt/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/i18n */ "./src/files/i18n.js");
/* harmony import */ var _files_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/keys */ "./src/files/keys.js");
/* harmony import */ var _files_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/assets */ "./src/files/assets.js");




__webpack_require__(/*! ../css/normalize.css */ "./src/css/normalize.css");

__webpack_require__(/*! ../css/index.css */ "./src/css/index.css");

var mlr = function mlr() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$dropID = _ref.dropID,
      dropID = _ref$dropID === void 0 ? "langDrop" : _ref$dropID,
      _ref$stringAttribute = _ref.stringAttribute,
      stringAttribute = _ref$stringAttribute === void 0 ? "i18n-text" : _ref$stringAttribute,
      _ref$chosenLang = _ref.chosenLang,
      chosenLang = _ref$chosenLang === void 0 ? "English" : _ref$chosenLang,
      _ref$mLstrings = _ref.mLstrings,
      mLstrings = _ref$mLstrings === void 0 ? _files_keys__WEBPACK_IMPORTED_MODULE_1__["default"] : _ref$mLstrings,
      _ref$countryCodes = _ref.countryCodes,
      countryCodes = _ref$countryCodes === void 0 ? false : _ref$countryCodes,
      _ref$countryCodeData = _ref.countryCodeData,
      countryCodeData = _ref$countryCodeData === void 0 ? [] : _ref$countryCodeData;

  var root = document.documentElement;
  var listOfLanguages = Object.keys(mLstrings[0]);
  var mlrLangInUse;
  mlrLangInUse = chosenLang;

  (function createMLDrop() {
    var langDrop = document.getElementById(dropID); // Reset the menu

    langDrop.innerHTML = ""; // Now build the options

    listOfLanguages.forEach(function (lang) {
      var HTMLoption = document.createElement("option");
      HTMLoption.value = lang;
      HTMLoption.textContent = lang;
      langDrop.appendChild(HTMLoption);
    });
    langDrop.addEventListener("change", function (e) {
      mlrLangInUse = langDrop[langDrop.selectedIndex].value;
      resolveAllMLStrings(); // Here we update the 2-digit lang attribute if required

      if (countryCodes === true) {
        if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
          console.warn("Cannot access strings for language codes");
          return;
        }

        root.setAttribute("lang", updateCountryCodeOnHTML().code);
      }
    });
  })();

  var updateCountryCodeOnHTML = function updateCountryCodeOnHTML() {
    return countryCodeData.find(function (this2Digit) {
      return this2Digit.name === mlrLangInUse;
    });
  };

  var resolveAllMLStrings = function resolveAllMLStrings() {
    var stringsToBeResolved = document.querySelectorAll("[".concat(stringAttribute, "]"));
    stringsToBeResolved.forEach(function (stringToBeResolved) {
      var originaltextContent = stringToBeResolved.textContent;
      var resolvedText = resolveMLString(originaltextContent, mLstrings);
      stringToBeResolved.textContent = resolvedText;
    });
  };

  var resolveMLString = function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function (stringObj) {
      // Create an array of the objects values:
      var stringValues = Object.values(stringObj); // Now return if we can find that string anywhere in there

      return stringValues.includes(stringToBeResolved);
    });

    if (matchingStringIndex) {
      return matchingStringIndex[mlrLangInUse];
    } else {
      // If we don't have a match in our language strings, return the original
      return stringToBeResolved;
    }
  };
};

mlr({
  dropID: "langDrop",
  stringAttribute: "i18n-text",
  chosenLang: "English",
  mLstrings: _files_keys__WEBPACK_IMPORTED_MODULE_1__["default"],
  countryCodes: true,
  countryCodeData: _files_i18n__WEBPACK_IMPORTED_MODULE_0__["default"]
}); // mainAsset();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xhci5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/NGMyMiIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NGM4YiIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsZXMvYXNzZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlcy9pMThuLmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlcy9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NpcHQvaW5kZXguanMiXSwibmFtZXMiOlsibWFpbkFzc2V0IiwicG9sYXJJbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJzcmMiLCJQb2xhciIsImFwcGVuZENoaWxkIiwiaTE4biIsImNvZGUiLCJuYW1lIiwia2V5c2kxOG4iLCJFbmdsaXNoIiwiR2VybWFuIiwiUG9ydHVndWVzZSIsIlNwYW5pc2giLCJyZXF1aXJlIiwibWxyIiwiZHJvcElEIiwic3RyaW5nQXR0cmlidXRlIiwiY2hvc2VuTGFuZyIsIm1Mc3RyaW5ncyIsImNvdW50cnlDb2RlcyIsImNvdW50cnlDb2RlRGF0YSIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJsaXN0T2ZMYW5ndWFnZXMiLCJPYmplY3QiLCJrZXlzIiwibWxyTGFuZ0luVXNlIiwiY3JlYXRlTUxEcm9wIiwibGFuZ0Ryb3AiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwibGFuZyIsIkhUTUxvcHRpb24iLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWxlY3RlZEluZGV4IiwicmVzb2x2ZUFsbE1MU3RyaW5ncyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwic2V0QXR0cmlidXRlIiwidXBkYXRlQ291bnRyeUNvZGVPbkhUTUwiLCJmaW5kIiwidGhpczJEaWdpdCIsInN0cmluZ3NUb0JlUmVzb2x2ZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RyaW5nVG9CZVJlc29sdmVkIiwib3JpZ2luYWx0ZXh0Q29udGVudCIsInJlc29sdmVkVGV4dCIsInJlc29sdmVNTFN0cmluZyIsIm1hdGNoaW5nU3RyaW5nSW5kZXgiLCJzdHJpbmdPYmoiLCJzdHJpbmdWYWx1ZXMiLCJ2YWx1ZXMiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBL0UsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlB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QmpDLGVBQTlCLE9BQTFCO0FBQ0FnQyx1QkFBbUIsQ0FBQ2xCLE9BQXBCLENBQTRCLFVBQUFvQixrQkFBa0IsRUFBSTtBQUM5QyxVQUFJQyxtQkFBbUIsR0FBR0Qsa0JBQWtCLENBQUNoQixXQUE3QztBQUNBLFVBQUlrQixZQUFZLEdBQUdDLGVBQWUsQ0FBQ0YsbUJBQUQsRUFBc0JqQyxTQUF0QixDQUFsQztBQUNBZ0Msd0JBQWtCLENBQUNoQixXQUFuQixHQUFpQ2tCLFlBQWpDO0FBQ0gsS0FKRDtBQUtILEdBUEQ7O0FBUUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSCxrQkFBRCxFQUFxQmhDLFNBQXJCLEVBQW1DO0FBQ3ZELFFBQUlvQyxtQkFBbUIsR0FBR3BDLFNBQVMsQ0FBQzRCLElBQVYsQ0FBZSxVQUFTUyxTQUFULEVBQW9CO0FBQ3pEO0FBQ0EsVUFBSUMsWUFBWSxHQUFHaEMsTUFBTSxDQUFDaUMsTUFBUCxDQUFjRixTQUFkLENBQW5CLENBRnlELENBR3pEOztBQUNBLGFBQU9DLFlBQVksQ0FBQ0UsUUFBYixDQUFzQlIsa0JBQXRCLENBQVA7QUFDSCxLQUx5QixDQUExQjs7QUFNQSxRQUFJSSxtQkFBSixFQUF5QjtBQUNyQixhQUFPQSxtQkFBbUIsQ0FBQzVCLFlBQUQsQ0FBMUI7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBLGFBQU93QixrQkFBUDtBQUNIO0FBQ0osR0FiRDtBQWNILENBakVEOztBQW9FQXBDLEdBQUcsQ0FBQztBQUNBQyxRQUFNLEVBQUUsVUFEUjtBQUVBQyxpQkFBZSxFQUFFLFdBRmpCO0FBR0FDLFlBQVUsRUFBRSxTQUhaO0FBSUFDLFdBQVMsRUFBRVYsbURBSlg7QUFLQVcsY0FBWSxFQUFFLElBTGQ7QUFNQUMsaUJBQWUsRUFBRWYsbURBQUlBO0FBTnJCLENBQUQsQ0FBSCxDLENBU0EsZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2phdmFzY2lwdC9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YjE2ZWZiMzEzYmVlZjA0ZmQ4YTgzYjIwNDIxZjg5ZS5qcGdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUG9sYXIgZnJvbSAnLi4vYXNzZXRzL3BvbGFyLmpwZyc7XG5cbmNvbnN0IG1haW5Bc3NldCA9ICgpID0+IHtcbiAgICBsZXQgcG9sYXJJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2xhckFzc2V0Jyk7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5hbHQgPSAncG9sYXIgYmVhcic7XG4gICAgaW1hZ2Uuc3JjID0gUG9sYXI7XG4gICAgcG9sYXJJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluQXNzZXQ7IiwibGV0IGkxOG4gPSBbXG4gICAge1xuICAgICAgY29kZTogXCJlblwiLFxuICAgICAgbmFtZTogXCJFbmdsaXNoXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGNvZGU6IFwiZGVcIixcbiAgICAgIG5hbWU6IFwiR2VybWFuXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGNvZGU6IFwicHRcIixcbiAgICAgIG5hbWU6IFwiUG9ydHVndWVzZVwiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBjb2RlOiBcImVzXCIsXG4gICAgICBuYW1lOiBcIlNwYW5pc2hcIixcbiAgICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuOyIsImxldCBrZXlzaTE4biA9IFtcbiAgICB7XG4gICAgICAgIEVuZ2xpc2g6IFwiQWJvdXRcIixcbiAgICAgICAgR2VybWFuOiBcIsOcYmVyXCIsXG4gICAgICAgIFBvcnR1Z3Vlc2U6IFwiU29icmVcIixcbiAgICAgICAgU3BhbmlzaDogXCJBY2VyY2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgRW5nbGlzaDogXCJDYXJlZXJzXCIsXG4gICAgICAgIEdlcm1hbjogXCJLYXJyaWVyZVwiLFxuICAgICAgICBQb3J0dWd1ZXNlOiBcIkNhcnJlaXJhc1wiLFxuICAgICAgICBTcGFuaXNoOiBcIkNhcnJlcmFzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEVuZ2xpc2g6IFwiTWVkaWFcIixcbiAgICAgICAgR2VybWFuOiBcIk1lZGllblwiLFxuICAgICAgICBQb3J0dWd1ZXNlOiBcIkNvbXVuaWNhw6fDo29cIixcbiAgICAgICAgU3BhbmlzaDogXCJNZWRpb3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgRW5nbGlzaDogXCJDb250YWN0XCIsXG4gICAgICAgIEdlcm1hbjogXCJLb250YWt0XCIsXG4gICAgICAgIFBvcnR1Z3Vlc2U6IFwiQ29udGF0b1wiLFxuICAgICAgICBTcGFuaXNoOiBcIkNvbnRhY3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIEVuZ2xpc2g6IFwiU2ltdWxhdGUgVGFza3NcIixcbiAgICAgICAgR2VybWFuOiBcIkF1ZmdhYmVuIHNpbXVsaWVyZW5cIixcbiAgICAgICAgUG9ydHVndWVzZTogXCJTaW11bGFyIHRhcmVmYXNcIixcbiAgICAgICAgU3BhbmlzaDogXCJTaW11bGFyIHRhcmVhc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBFbmdsaXNoOiBcIkFsbCByaWdodHMgcmVzZXJ2ZWRcIixcbiAgICAgICAgR2VybWFuOiBcIkFsbGUgUmVjaHRlIHZvcmJlaGFsdGVuXCIsXG4gICAgICAgIFBvcnR1Z3Vlc2U6IFwiVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvc1wiLFxuICAgICAgICBTcGFuaXNoOiBcIlRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zXCIsXG4gICAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQga2V5c2kxOG47IiwiaW1wb3J0IGkxOG4gZnJvbSBcIi4uL2ZpbGVzL2kxOG5cIjtcbmltcG9ydCBrZXlzaTE4biBmcm9tIFwiLi4vZmlsZXMva2V5c1wiO1xuaW1wb3J0IG1haW5Bc3NldCBmcm9tICcuLi9maWxlcy9hc3NldHMnO1xuXG5yZXF1aXJlKCcuLi9jc3Mvbm9ybWFsaXplLmNzcycpO1xucmVxdWlyZSgnLi4vY3NzL2luZGV4LmNzcycpO1xuXG5jb25zdCBtbHIgPSAoe1xuICAgIGRyb3BJRCA9IFwibGFuZ0Ryb3BcIixcbiAgICBzdHJpbmdBdHRyaWJ1dGUgPSBcImkxOG4tdGV4dFwiLFxuICAgIGNob3NlbkxhbmcgPSBcIkVuZ2xpc2hcIixcbiAgICBtTHN0cmluZ3MgPSBrZXlzaTE4bixcbiAgICBjb3VudHJ5Q29kZXMgPSBmYWxzZSxcbiAgICBjb3VudHJ5Q29kZURhdGEgPSBbXSxcbiAgICB9ID0ge30pID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgdmFyIGxpc3RPZkxhbmd1YWdlcyA9IE9iamVjdC5rZXlzKG1Mc3RyaW5nc1swXSk7XG4gICAgdmFyIG1sckxhbmdJblVzZTtcbiAgICBtbHJMYW5nSW5Vc2UgPSBjaG9zZW5MYW5nO1xuXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZU1MRHJvcCgpIHtcbiAgICAgICAgdmFyIGxhbmdEcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcElEKTtcbiAgICAgICAgLy8gUmVzZXQgdGhlIG1lbnVcbiAgICAgICAgbGFuZ0Ryb3AuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgLy8gTm93IGJ1aWxkIHRoZSBvcHRpb25zXG4gICAgICAgIGxpc3RPZkxhbmd1YWdlcy5mb3JFYWNoKGxhbmcgPT4ge1xuICAgICAgICAgICAgbGV0IEhUTUxvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgSFRNTG9wdGlvbi52YWx1ZSA9IGxhbmc7XG4gICAgICAgICAgICBIVE1Mb3B0aW9uLnRleHRDb250ZW50ID0gbGFuZztcbiAgICAgICAgICAgIGxhbmdEcm9wLmFwcGVuZENoaWxkKEhUTUxvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFuZ0Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBtbHJMYW5nSW5Vc2UgPSBsYW5nRHJvcFtsYW5nRHJvcC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIHJlc29sdmVBbGxNTFN0cmluZ3MoKTtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgdXBkYXRlIHRoZSAyLWRpZ2l0IGxhbmcgYXR0cmlidXRlIGlmIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY291bnRyeUNvZGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvdW50cnlDb2RlRGF0YSkgfHwgIWNvdW50cnlDb2RlRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGFjY2VzcyBzdHJpbmdzIGZvciBsYW5ndWFnZSBjb2Rlc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZShcImxhbmdcIiwgdXBkYXRlQ291bnRyeUNvZGVPbkhUTUwoKS5jb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHVwZGF0ZUNvdW50cnlDb2RlT25IVE1MID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY291bnRyeUNvZGVEYXRhLmZpbmQodGhpczJEaWdpdCA9PiB0aGlzMkRpZ2l0Lm5hbWUgPT09IG1sckxhbmdJblVzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb2x2ZUFsbE1MU3RyaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0cmluZ3NUb0JlUmVzb2x2ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtzdHJpbmdBdHRyaWJ1dGV9XWApO1xuICAgICAgICBzdHJpbmdzVG9CZVJlc29sdmVkLmZvckVhY2goc3RyaW5nVG9CZVJlc29sdmVkID0+IHtcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbHRleHRDb250ZW50ID0gc3RyaW5nVG9CZVJlc29sdmVkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IHJlc29sdmVkVGV4dCA9IHJlc29sdmVNTFN0cmluZyhvcmlnaW5hbHRleHRDb250ZW50LCBtTHN0cmluZ3MpO1xuICAgICAgICAgICAgc3RyaW5nVG9CZVJlc29sdmVkLnRleHRDb250ZW50ID0gcmVzb2x2ZWRUZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZU1MU3RyaW5nID0gKHN0cmluZ1RvQmVSZXNvbHZlZCwgbUxzdHJpbmdzKSA9PiB7XG4gICAgICAgIHZhciBtYXRjaGluZ1N0cmluZ0luZGV4ID0gbUxzdHJpbmdzLmZpbmQoZnVuY3Rpb24oc3RyaW5nT2JqKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgdGhlIG9iamVjdHMgdmFsdWVzOlxuICAgICAgICAgICAgbGV0IHN0cmluZ1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoc3RyaW5nT2JqKTtcbiAgICAgICAgICAgIC8vIE5vdyByZXR1cm4gaWYgd2UgY2FuIGZpbmQgdGhhdCBzdHJpbmcgYW55d2hlcmUgaW4gdGhlcmVcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdWYWx1ZXMuaW5jbHVkZXMoc3RyaW5nVG9CZVJlc29sdmVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaGluZ1N0cmluZ0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hpbmdTdHJpbmdJbmRleFttbHJMYW5nSW5Vc2VdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG1hdGNoIGluIG91ciBsYW5ndWFnZSBzdHJpbmdzLCByZXR1cm4gdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nVG9CZVJlc29sdmVkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5tbHIoe1xuICAgIGRyb3BJRDogXCJsYW5nRHJvcFwiLFxuICAgIHN0cmluZ0F0dHJpYnV0ZTogXCJpMThuLXRleHRcIixcbiAgICBjaG9zZW5MYW5nOiBcIkVuZ2xpc2hcIixcbiAgICBtTHN0cmluZ3M6IGtleXNpMThuLFxuICAgIGNvdW50cnlDb2RlczogdHJ1ZSxcbiAgICBjb3VudHJ5Q29kZURhdGE6IGkxOG4sXG59KTtcblxuLy8gbWFpbkFzc2V0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==