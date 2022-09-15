/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// slider initialization\r\nnew Swiper('.swiper-container', {\r\n  loop: true,\r\n  slidesPerView: 1.25,\r\n});\r\n\r\nconst swiperWrapper = document.querySelector('.swiper-wrapper');\r\nconst swiperSlides = document.querySelectorAll('.swiper-slide');\r\nconst sedBlocks = document.querySelectorAll('.sed__block');\r\nconst swiperSlideDuplicatePrev = document.querySelector('.swiper-slide-duplicate-prev');\r\nconst swiperSlideDuplicateNext = document.querySelector('.swiper-slide-duplicate-next');\r\nconst swiperSlideNext = document.querySelector('.swiper-slide-next');\r\n\r\nif (!swiperSlideNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {\r\n  swiperSlideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');\r\n}\r\n\r\n// при изменении swiperSlideNext\r\nconst observer = new MutationObserver(() => {\r\n  const swiperSlideActive = document.querySelector('.swiper-slide-active');\r\n  const swiperSlideNext = document.querySelector('.swiper-slide-next');\r\n\r\n  if (swiperSlideActive.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {\r\n    swiperSlideActive.childNodes[1].childNodes[3].classList.remove('sed__block--active');\r\n  }\r\n\r\n  if (!swiperSlideNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {\r\n    swiperSlideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');\r\n  }\r\n});\r\n\r\nobserver.observe(swiperSlideNext, {\r\n  subtree: true,\r\n  childList: true,\r\n  attributes: true,\r\n});\r\n\r\n// при изменении swiperSlideDuplicatePrev\r\nconst observerPrev = new MutationObserver(() => {\r\n  const swiperSlideDuplicatePrev = document.querySelector('.swiper-slide-duplicate-prev');\r\n\r\n  if (\r\n    swiperSlideDuplicatePrev.childNodes[1].childNodes[3].classList.contains('sed__block--active')\r\n  ) {\r\n    swiperSlideDuplicatePrev.childNodes[1].childNodes[3].classList.remove('sed__block--active');\r\n  }\r\n});\r\n\r\nobserverPrev.observe(swiperSlideDuplicatePrev, {\r\n  subtree: true,\r\n  childList: true,\r\n  attributes: true,\r\n});\r\n\r\n// при изменении swiperSlideDuplicatePrev\r\nconst observerNext = new MutationObserver(() => {\r\n  const swiperSlideDuplicateNext = document.querySelector('.swiper-slide-duplicate-next');\r\n\r\n  if (\r\n    swiperSlideDuplicateNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')\r\n  ) {\r\n    swiperSlideDuplicateNext.childNodes[1].childNodes[3].classList.remove('sed__block--active');\r\n  }\r\n});\r\n\r\nobserverNext.observe(swiperSlideDuplicateNext, {\r\n  subtree: true,\r\n  childList: true,\r\n  attributes: true,\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;