/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/bolt.svg":
/*!*****************************!*\
  !*** ./src/images/bolt.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/5d99c7db393639b9e00bd725ff86d86f.svg");

/***/ }),

/***/ "./src/images/cold.svg":
/*!*****************************!*\
  !*** ./src/images/cold.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/dab9568215b619aaf5eb15bdcac50428.svg");

/***/ }),

/***/ "./src/images/normal.svg":
/*!*******************************!*\
  !*** ./src/images/normal.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/a3a1be073ac6fffa68d35c9392cf361c.svg");

/***/ }),

/***/ "./src/images/not-found.svg":
/*!**********************************!*\
  !*** ./src/images/not-found.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/67edaeb6ee50d0772c60a361fa5cc5f5.svg");

/***/ }),

/***/ "./src/images/rainy.svg":
/*!******************************!*\
  !*** ./src/images/rainy.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/39795b8c918740683acd5154a34f2ed0.svg");

/***/ }),

/***/ "./src/images/sunny.svg":
/*!******************************!*\
  !*** ./src/images/sunny.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/82771681b4d2996c5461f40716b0b4b4.svg");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _images_cold_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cold.svg */ "./src/images/cold.svg");
/* harmony import */ var _images_normal_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/normal.svg */ "./src/images/normal.svg");
/* harmony import */ var _images_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/rainy.svg */ "./src/images/rainy.svg");
/* harmony import */ var _images_sunny_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sunny.svg */ "./src/images/sunny.svg");





const weatherIcons = {
  rainy: _images_rainy_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  cold: _images_cold_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  normal: _images_normal_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  sunny: _images_sunny_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
};

const setCurrentTemperatureScale = ([c_temp, f_temp], currentTemperatureScale) => {
  if (currentTemperatureScale.celsius) {
    return `${c_temp}°C`;
  } else {
    return `${f_temp}°F`;
  }
};

function Content({ contentData, currentTemperatureScale }) {
  const date = new Date(contentData.localTime);
  
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const temperature = document.createElement("h2");
  temperature.classList.add("temperature");
  temperature.textContent = setCurrentTemperatureScale(
    [contentData.temp_celsius, contentData.temp_fahrenheit],
    currentTemperatureScale
  );

  const img = document.createElement("img");
  img.src = weatherIcons[contentData.weatherCategory];

  const localeName = document.createElement("h3");
  const localTime = document.createElement("p");

  localTime.textContent = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const city = contentData.city;
  const region = contentData?.region ?? "";

  localeName.textContent = `${city}${region ? `, ${region}` : ""}`;
  contentContainer.append(temperature);
  contentContainer.append(img, localeName, localTime);

  return contentContainer;
}


/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _images_bolt_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bolt.svg */ "./src/images/bolt.svg");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./src/components/logo.js");



function Form() {
  const form = document.createElement("form");
  form.classList.add("form");

  const logo = (0,_logo__WEBPACK_IMPORTED_MODULE_1__.Logo)();

  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.id = "locale-input";
  input.setAttribute("placeholder", "Enter city");
  input.autocomplete = "off";

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-btn");

  const img = document.createElement("img");
  img.src = _images_bolt_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  submitBtn.appendChild(img);

  form.append(input);
  form.append(submitBtn);

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.appendChild(logo);
  formContainer.appendChild(form);

  return formContainer;
}


/***/ }),

/***/ "./src/components/load.js":
/*!********************************!*\
  !*** ./src/components/load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Load: () => (/* binding */ Load)
/* harmony export */ });
function Load() {
  const loadContainer = document.createElement("div");
  const load = document.createElement("p");
  load.classList.add("load");
  load.textContent = "Loading...";
  loadContainer.appendChild(load);
  loadContainer.classList.add("load-container");
  return loadContainer
}


/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo)
/* harmony export */ });
function Logo() {
  const logo = document.createElement('h1');
  const span = document.createElement('span');
  span.textContent = 'Weather';
  logo.textContent = 'Asgard';
  logo.appendChild(span);
  logo.classList.add('logo');

  return logo
}

/***/ }),

/***/ "./src/components/not-found.js":
/*!*************************************!*\
  !*** ./src/components/not-found.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFound: () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _images_not_found_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/not-found.svg */ "./src/images/not-found.svg");


function NotFound() {
  const notFoundContainer = document.createElement("div");
  notFoundContainer.classList.add("not-found-container");

  const notFound = document.createElement("h2");
  notFound.textContent = "Oops, we didn't find anything!";

  const imgNotFound = document.createElement("img");
  imgNotFound.src = _images_not_found_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  imgNotFound.alt = "Not Found";

  notFoundContainer.appendChild(imgNotFound);
  notFoundContainer.appendChild(notFound);
  return notFoundContainer
}

/***/ }),

/***/ "./src/components/switch.js":
/*!**********************************!*\
  !*** ./src/components/switch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ Switch)
/* harmony export */ });
function Switch({ temperatureScale }) {
  const switchEl = createSwitchElement();
  const [celsiusBtn, fahrenheitBtn] = createTemperatureButtons(temperatureScale);

  celsiusBtn.addEventListener("click", () => {
    toggleTemperatureScale(celsiusBtn, fahrenheitBtn);
    temperatureScale.celsius = true;
    temperatureScale.fahrenheit = false;
    saveCurrentTempScale(temperatureScale)
  });
  fahrenheitBtn.addEventListener("click", () => {
    toggleTemperatureScale(fahrenheitBtn, celsiusBtn);
    temperatureScale.celsius = false;
    temperatureScale.fahrenheit = true;
    saveCurrentTempScale(temperatureScale)
  });

  switchEl.append(celsiusBtn, fahrenheitBtn);

  return switchEl;
}

function createSwitchElement() {
  const switchEl = document.createElement("div");
  switchEl.classList.add("switch");
  return switchEl;
}

function createTemperatureButtons(temperatureScale) {
  const celsiusBtn = createButton("°C", temperatureScale.celsius);
  const fahrenheitBtn = createButton("°F", temperatureScale.fahrenheit);
  return [celsiusBtn, fahrenheitBtn];
}

function createButton(text, isSelected) {
  const button = document.createElement("button");
  button.classList.add("switch-btn");
  button.role = isSelected ? "selected" : "unselected";
  button.textContent = text;
  return button;
}

function toggleTemperatureScale(selectedButton, unselectedButton) {
  selectedButton.role = "selected";
  unselectedButton.role = "unselected";
}

function saveCurrentTempScale(temperatureScale) {
  window.localStorage.setItem(
    "@asgard-weather:temp-scale",
    JSON.stringify(temperatureScale)
  );
};


/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/**
 * @typedef {Object} Weather
 * @property {string} city
 * @property {string} region
 * @property {string} localTime
 * @property {string} country
 * @property {number} temp_celsius
 * @property {number} temp_fahrenheit
 * @property {string} condition
 * @property {string} icon
 * @property {number} humidity
 * @property {string} weatherCategory
 */

/**
 * Fetches the weather information for a given city.
 * 
 * @param {string} city - The city to fetch the weather for.
 * @returns {Promise<Weather | {}>} A promise that resolves to the weather information.
 */
const getWeather = async (city) => {
  try {
    const BASE_URL = "http://api.weatherapi.com/v1";
    const API_KEY = "e0902a33cee34fa39fe142014241306";

    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    const data = await response.json();

    const { location, current } = data;

    /** @type {Weather} */
    const contentData = {
      city: location.name,
      region: location.region,
      localTime: current.last_updated,
      country: location.country,
      temp_celsius: current.temp_c,
      temp_fahrenheit: current.temp_f,
      condition: current.condition.text,
      icon: current.condition.icon,
      humidity: current.humidity,
    };

    // Determine weather condition based on temperature and condition
    const weatherCategory = categorizeWeather(contentData.temp_celsius, contentData.condition);

    // Add the weather category to the content data
    contentData.weatherCategory = weatherCategory;

    return contentData;
  } catch (error) {
    // Return an empty object in case of error
    return {};
  }
};

/**
 * Categorizes the weather based on temperature and condition.
 * 
 * @param {number} tempCelsius - The temperature in Celsius.
 * @param {string} condition - The current weather condition.
 * @returns {string} The weather category.
 */
function categorizeWeather(tempCelsius, condition) {
  if (condition.toLowerCase().includes("rain")) {
    return "rainy";
  } else if (tempCelsius <= 10) {
    return "cold";
  } else if (tempCelsius > 10 && tempCelsius < 25) {
    return "normal";
  } else {
    return "sunny";
  }
}


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
/******/ 			// no module.id needed
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/content */ "./src/components/content.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/load */ "./src/components/load.js");
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found */ "./src/components/not-found.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/switch */ "./src/components/switch.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/services/index.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");








const renderContent = (app, contentData, currentTemperatureScale) => {
  const content = (0,_components_content__WEBPACK_IMPORTED_MODULE_0__.Content)({
    contentData,
    currentTemperatureScale,
  });

  app.appendChild(content);
};

const init = () => {
  const app = document.querySelector("#app");
  const currentTemperatureScale = localStorage.getItem(
    "@asgard-weather:temp-scale"
  );
 
  let temperatureScale = {
    celsius: true,
    fahrenheit: false,
  };

  if (currentTemperatureScale) {
    temperatureScale = JSON.parse(currentTemperatureScale);
  }

  const form = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.Form)();
  const switchEl = (0,_components_switch__WEBPACK_IMPORTED_MODULE_4__.Switch)({ temperatureScale });
  const load = (0,_components_load__WEBPACK_IMPORTED_MODULE_2__.Load)();
  const notFoundEl = (0,_components_not_found__WEBPACK_IMPORTED_MODULE_3__.NotFound)();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const localeValue = document.getElementById("locale-input").value;
    if (!localeValue.trim()) return alert("Please enter a city name");

    const existingContent = app.querySelector(".content-container");
    const existingNotFound = app.querySelector(".not-found-container");
    if (existingContent) app.removeChild(existingContent);
    if (existingNotFound) app.removeChild(existingNotFound);
    app.appendChild(load);
    try {
      const response = await (0,_services__WEBPACK_IMPORTED_MODULE_5__.getWeather)(localeValue);
      app.removeChild(load);

      if (response?.city) {
        renderContent(app, response, temperatureScale);
      } else {
        app.appendChild(notFoundEl);
      }
    } catch (error) {
      app.removeChild(load);
      alert("Failed to fetch weather data. Please try again.");
    }
  });

  app.appendChild(switchEl);
  app.appendChild(form);
};

window.addEventListener("DOMContentLoaded", init);

/******/ })()
;
//# sourceMappingURL=main.js.map