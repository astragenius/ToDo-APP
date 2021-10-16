/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragDrop": () => (/* binding */ dragDrop)
/* harmony export */ });



const dragDrop = (() => {

    const list = document.querySelectorAll('.toDolist__content');
    let dragSrcEl = null;

    function handleDragStart(e) {

        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    };

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
    }

    function handleDragEnter(e) {
        this.classList.add('hover');
    }

    function handleDragLeave(e) {
        this.classList.remove('hover');

    }

    function handleDrop(e) {
        if(e.stopPropagation) {
            e.stopPropagation();
        }
            if(dragSrcEl !== this) {
                dragSrcEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/html');
            }
        return false;
    }

    list.forEach(item => {

        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    })



})();



/***/ }),

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
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-and-drop */ "./src/drag-and-drop.js");







(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
    _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragDrop;

})();




/* let dragSrcEl = null;

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
}) */








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDSjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNEQUFXO0FBQzdDLElBQUksb0RBQVE7QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kcmFnLWFuZC1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RoZW1lLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmNvbnN0IGRyYWdEcm9wID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcbiAgICBsZXQgZHJhZ1NyY0VsID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xyXG5cclxuICAgICAgICBkcmFnU3JjRWwgPSB0aGlzO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgdGhpcy5pbm5lckhUTUwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGUpIHtcclxuXHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZSkge1xyXG4gICAgICAgIGlmKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnTGVhdmUoZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJvcChlKSB7XHJcbiAgICAgICAgaWYoZS5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRyYWdTcmNFbCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgZHJhZ1NyY0VsLmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L2h0bWwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlRHJhZ0VudGVyKTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGhhbmRsZURyYWdMZWF2ZSk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgaGFuZGxlRHJhZ0VuZCk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtkcmFnRHJvcH07IiwiXHJcblxyXG5jb25zdCBzd2l0Y2hUaGVtZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUNvbnRhaW5lcicpO1xyXG5cclxuICAgaWYoaHRtbC5jbGFzc05hbWUgPT09ICdsaWdodCcpIHtcclxuXHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWxpZ2h0Jyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tZGFyaycpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItLWxpZ2h0Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tZGFyaycpO1xyXG4gICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tZGFyaycpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWxpZ2h0Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0tZGFyaycpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWxpZ2h0Jyk7XHJcbiAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtzd2l0Y2hUaGVtZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3RoZW1lLXRvZ2dsZVwiO1xyXG5pbXBvcnQge2RyYWdEcm9wfSBmcm9tIFwiLi9kcmFnLWFuZC1kcm9wXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRoZW1lKTtcclxuICAgIGRyYWdEcm9wO1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbi8qIGxldCBkcmFnU3JjRWwgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcclxuICAgXHJcbiAgICBkcmFnU3JjRWwgPSB0aGlzO1xyXG4gICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIHRoaXMuaW5uZXJIVE1MKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChlKSB7XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgICB9KTtcclxuICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcihlKSB7XHJcblxyXG4gICAgaWYoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW50ZXIoZSkge1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZShlKSB7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcclxuICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICB9XHJcbiAgICBpZihkcmFnU3JjRWwgIT09IHRoaXMpIHtcclxuICAgICAgICBkcmFnU3JjRWwuaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L2h0bWwnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudCcpO1xyXG5cclxubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGhhbmRsZURyYWdMZWF2ZSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xyXG59KSAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9