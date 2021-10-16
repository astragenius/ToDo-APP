/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/theme-toggle.js":
/*!*****************************!*\
  !*** ./src/theme-toggle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchTheme": () => (/* binding */ switchTheme)
/* harmony export */ });


const switchTheme = function() {

    const html = document.getElementsByTagName('html')[0];
    const btn = document.getElementById('toggle');
    const container = document.getElementById('toggleContainer');

   if(html.className === 'light') {

        html.classList.remove('light');
        html.classList.add('dark');
        btn.classList.remove('btn--light');
        btn.classList.add('btn--dark');
        container.classList.remove('container--light');
        container.classList.add('container--dark');
   } else {

        html.classList.remove('dark');
        html.classList.add('light');
        btn.classList.remove('btn--dark');
        btn.classList.add('btn--light');
        container.classList.remove('container--dark');
        container.classList.add('container--light');
   }

};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-toggle */ "./src/theme-toggle.js");






(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
})();


let dragSrcEl = null;

function handleDragStart(e) {
   
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {

    list.forEach(function(el) {

        el.classList.remove('hover');
    });
   
};

function handleDragOver(e) {

    if(e.preventDefault) {
        e.preventDefault();
    }

    return false;
};

function handleDragEnter(e) {

    this.classList.add('hover');
};

function handleDragLeave(e) {

    this.classList.remove('hover');
}

function handleDrop(e) {
   if (e.stopPropagation) {
       e.stopPropagation();
   }
    if(dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}




const list = document.querySelectorAll('.toDolist__content');

list.forEach(item => {

    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
})








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQVc7QUFDN0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBzd2l0Y2hUaGVtZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUNvbnRhaW5lcicpO1xyXG5cclxuICAgaWYoaHRtbC5jbGFzc05hbWUgPT09ICdsaWdodCcpIHtcclxuXHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWxpZ2h0Jyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGFyaycpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItLWxpZ2h0Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tZGFyaycpO1xyXG4gICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tZGFyaycpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWxpZ2h0Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0tZGFyaycpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWxpZ2h0Jyk7XHJcbiAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtzd2l0Y2hUaGVtZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3RoZW1lLXRvZ2dsZVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUaGVtZSk7XHJcbn0pKCk7XHJcblxyXG5cclxubGV0IGRyYWdTcmNFbCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xyXG4gICBcclxuICAgIGRyYWdTcmNFbCA9IHRoaXM7XHJcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgdGhpcy5pbm5lckhUTUwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGUpIHtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuXHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICAgIH0pO1xyXG4gICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURyYWdPdmVyKGUpIHtcclxuXHJcbiAgICBpZihlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRHJhZ0xlYXZlKGUpIHtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xyXG4gICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIH1cclxuICAgIGlmKGRyYWdTcmNFbCAhPT0gdGhpcykge1xyXG4gICAgICAgIGRyYWdTcmNFbC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvaHRtbCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcblxyXG5saXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWdPdmVyKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlRHJhZ0VudGVyKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ0xlYXZlKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGhhbmRsZURyYWdFbmQpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=