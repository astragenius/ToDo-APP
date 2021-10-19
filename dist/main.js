/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-ToDo.js":
/*!*************************!*\
  !*** ./src/add-ToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });


const toDoList = () => {

    const addToDo = () => {

        const input = document.getElementById('toDoInput').value;
        const contentTodo = document.querySelector('.toDolist');
        const content = `<div class="toDolist__content" draggable="true">

                            <div class="checkbox__container">
                                <label class="container_label">
                                <input type="checkbox" class="checkbox">
                                <span class="checkmark"></span>
                                </label>
                            </div>
                            <li>${input}</li>
                            <input class="delete__cross" type="image" src="/images/icon-cross.svg">

                        </div>`;
        

        contentTodo.insertAdjacentHTML('afterbegin', content);

    }

    const removeTodo = (e) => {
        if(e.target.className === "delete__cross"){
            e.target.parentElement.remove();
        }
    }

    const delComplete = () => {

        const listItems = document.querySelectorAll('.container_label > input');
        listItems.forEach(el => {
            if(el.checked === true) {

                el.parentElement.parentElement.parentElement.remove();
            }
        })
       
    }



    return {addToDo, removeTodo, delComplete}
};

/* const to = toDoList(); */





/***/ }),

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
/* harmony import */ var _add_ToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-ToDo */ "./src/add-ToDo.js");








(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
    _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragDrop;

})();



const content = document.querySelectorAll('.toDolist__content > li');
const checkbox = document.querySelectorAll('.checkbox');
const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const todo = (0,_add_ToDo__WEBPACK_IMPORTED_MODULE_2__.toDoList)();

const ul = document.getElementsByTagName('ul')[0];


toDoInput.addEventListener('change', function() {

    todo.addToDo();

});

ul.addEventListener('click', function(e) {

    todo.removeTodo(e);
})


del_btn.addEventListener('click', function() {

    todo.delComplete();
})





checkbox.forEach(box => {

    box.addEventListener('change', function() {

        if(this.checked === true) {

            console.log('ich bin gechecked')
        } else {

            console.log('ich bin nich gechecked')
        }
    })
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDSjtBQUNMO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQVc7QUFDN0MsSUFBSSxvREFBUTtBQUNaO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FkZC1Ub0RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RyYWctYW5kLWRyb3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB0b0RvTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBhZGRUb0RvID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb250ZW50VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgPGRpdiBjbGFzcz1cInRvRG9saXN0X19jb250ZW50XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyX2xhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHtpbnB1dH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZGVsZXRlX19jcm9zc1wiIHR5cGU9XCJpbWFnZVwiIHNyYz1cIi9pbWFnZXMvaWNvbi1jcm9zcy5zdmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnRlbnRUb2RvLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGNvbnRlbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlX19jcm9zc1wiKXtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsQ29tcGxldGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXJfbGFiZWwgPiBpbnB1dCcpO1xyXG4gICAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYoZWwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHthZGRUb0RvLCByZW1vdmVUb2RvLCBkZWxDb21wbGV0ZX1cclxufTtcclxuXHJcbi8qIGNvbnN0IHRvID0gdG9Eb0xpc3QoKTsgKi9cclxuXHJcblxyXG5cclxuZXhwb3J0IHt0b0RvTGlzdH07IiwiXHJcblxyXG5cclxuY29uc3QgZHJhZ0Ryb3AgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb2xpc3RfX2NvbnRlbnQnKTtcclxuICAgIGxldCBkcmFnU3JjRWwgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XHJcblxyXG4gICAgICAgIGRyYWdTcmNFbCA9IHRoaXM7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCB0aGlzLmlubmVySFRNTCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZSkge1xyXG5cclxuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcihlKSB7XHJcbiAgICAgICAgaWYoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZShlKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcclxuICAgICAgICBpZihlLnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZHJhZ1NyY0VsICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBkcmFnU3JjRWwuaW5uZXJIVE1MID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBoYW5kbGVEcmFnRW50ZXIpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgaGFuZGxlRHJhZ0xlYXZlKTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2RyYWdEcm9wfTsiLCJcclxuXHJcbmNvbnN0IHN3aXRjaFRoZW1lID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlQ29udGFpbmVyJyk7XHJcblxyXG4gICBpZihodG1sLmNsYXNzTmFtZSA9PT0gJ2xpZ2h0Jykge1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQge3N3aXRjaFRoZW1lfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN3aXRjaFRoZW1lIH0gZnJvbSBcIi4vdGhlbWUtdG9nZ2xlXCI7XHJcbmltcG9ydCB7ZHJhZ0Ryb3B9IGZyb20gXCIuL2RyYWctYW5kLWRyb3BcIjtcclxuaW1wb3J0IHt0b0RvTGlzdH0gZnJvbSBcIi4vYWRkLVRvRG9cIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGhlbWUpO1xyXG4gICAgZHJhZ0Ryb3A7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50ID4gbGknKTtcclxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuY29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVfX2J0bicpO1xyXG5jb25zdCB0b0RvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0Jyk7XHJcbmNvbnN0IHRvZG8gPSB0b0RvTGlzdCgpO1xyXG5cclxuY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuXHJcblxyXG50b0RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdG9kby5hZGRUb0RvKCk7XHJcblxyXG59KTtcclxuXHJcbnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIHRvZG8ucmVtb3ZlVG9kbyhlKTtcclxufSlcclxuXHJcblxyXG5kZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdG9kby5kZWxDb21wbGV0ZSgpO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNoZWNrYm94LmZvckVhY2goYm94ID0+IHtcclxuXHJcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaCBiaW4gZ2VjaGVja2VkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaCBiaW4gbmljaCBnZWNoZWNrZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9