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
    
    const toDoContent = document.querySelectorAll('.toDolist__content');



    const addToDo = () => {

        let input = document.getElementById('toDoInput');
        const contentTodo = document.querySelector('.toDolist');
        const content = `<div class="toDolist__content" draggable="true">

                            <div class="checkbox__container">
                                <label class="container_label">
                                <input type="checkbox" class="checkbox">
                                <span class="checkmark"></span>
                                </label>
                            </div>
                            <li>${input.value}</li>
                            <input class="delete__cross" type="image" src="/images/icon-cross.svg">

                        </div>`;
        

        contentTodo.insertAdjacentHTML('afterbegin', content);
        input.value = '';

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

    const checkItems = () => {

        const num = document.querySelector('.item_num');
        const list = document.querySelector('.toDolist');

        num.textContent = list.children.length;

    }

    const completeToDo = () => {
        const input = document.querySelectorAll('.checkbox');
        
        for(let i = 0; i < input.length; i++){

            if(input[i].checked === true) {
                toDoContent[i].style.display = "flex";

            }else {
                toDoContent[i].style.display = "none";
            }
        }
        
    }

    const activeToDo = () => {
        const input = document.querySelectorAll('.checkbox');
        console.log('Hallo ich bin active')
        for(let i = 0; i < input.length; i++) {
            if(input[i].checked === false) {
                toDoContent[i].style.display = "flex";

            } else {
                toDoContent[i].style.display = "none";
            }
        }
    }

    const showAll = () => {
       

        for(let i = 0; i < toDoContent.length; i++) {

            if(toDoContent[i].style.display = "none") {
                toDoContent[i].style.display ="flex";
            }
        }
    }



    return {addToDo, removeTodo, delComplete, checkItems, completeToDo, activeToDo, showAll}
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






const checkbox = document.querySelectorAll('.checkbox');
const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const ul = document.getElementsByTagName('ul')[0];
const todo = (0,_add_ToDo__WEBPACK_IMPORTED_MODULE_2__.toDoList)();
const all_btn = document.getElementById('all');
const active_btn = document.getElementById('active');
const complete_btn = document.getElementById('complete');
const input = document.querySelectorAll('.checkbox');






(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
    _drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragDrop;
    todo.checkItems();
    todo.showAll();



})();



console.log(active_btn);




complete_btn.addEventListener('click', function() {

    todo.completeToDo();
    todo.checkItems();
    
})


active_btn.addEventListener('click', function() {
    todo.activeToDo();
    todo.checkItems();
})


all_btn.addEventListener('click', function() {

    todo.showAll();
    todo.checkItems();
    
})



toDoInput.addEventListener('change', function() {

    todo.addToDo();
    todo.checkItems();

});

ul.addEventListener('click', function(e) {

    todo.removeTodo(e);
    todo.checkItems();

})


del_btn.addEventListener('click', function() {

    todo.delComplete();
    todo.checkItems();

})







/* checkbox.forEach(box => {

    box.addEventListener('change', function() {

        if(this.checked === true) {

            console.log('ich bin gechecked')
        } else {

            console.log('ich bin nich gechecked')
        }
    })
}) */



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hZGQtVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kcmFnLWFuZC1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RoZW1lLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvRG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRUb0RvID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgY29udGVudFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb2xpc3QnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ0b0RvbGlzdF9fY29udGVudFwiIGRyYWdnYWJsZT1cInRydWVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lcl9sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiR7aW5wdXQudmFsdWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImRlbGV0ZV9fY3Jvc3NcIiB0eXBlPVwiaW1hZ2VcIiBzcmM9XCIvaW1hZ2VzL2ljb24tY3Jvc3Muc3ZnXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb250ZW50VG9kby5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjb250ZW50KTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlX19jcm9zc1wiKXtcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsQ29tcGxldGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXJfbGFiZWwgPiBpbnB1dCcpO1xyXG4gICAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYoZWwuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrSXRlbXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX251bScpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb2xpc3QnKTtcclxuXHJcbiAgICAgICAgbnVtLnRleHRDb250ZW50ID0gbGlzdC5jaGlsZHJlbi5sZW5ndGg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlVG9EbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICBpZihpbnB1dFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlVG9EbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYWxsbyBpY2ggYmluIGFjdGl2ZScpXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvRG9Db250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZih0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPVwiZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHthZGRUb0RvLCByZW1vdmVUb2RvLCBkZWxDb21wbGV0ZSwgY2hlY2tJdGVtcywgY29tcGxldGVUb0RvLCBhY3RpdmVUb0RvLCBzaG93QWxsfVxyXG59O1xyXG5cclxuLyogY29uc3QgdG8gPSB0b0RvTGlzdCgpOyAqL1xyXG5cclxuXHJcblxyXG5leHBvcnQge3RvRG9MaXN0fTsiLCJcclxuXHJcblxyXG5jb25zdCBkcmFnRHJvcCA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudCcpO1xyXG4gICAgbGV0IGRyYWdTcmNFbCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcclxuXHJcbiAgICAgICAgZHJhZ1NyY0VsID0gdGhpcztcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIHRoaXMuaW5uZXJIVE1MKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChlKSB7XHJcblxyXG4gICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdPdmVyKGUpIHtcclxuICAgICAgICBpZihlLnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0VudGVyKGUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0xlYXZlKGUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xyXG4gICAgICAgIGlmKGUuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkcmFnU3JjRWwgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGRyYWdTcmNFbC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWdPdmVyKTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGhhbmRsZURyYWdFbmQpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7ZHJhZ0Ryb3B9OyIsIlxyXG5cclxuY29uc3Qgc3dpdGNoVGhlbWUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVDb250YWluZXInKTtcclxuXHJcbiAgIGlmKGh0bWwuY2xhc3NOYW1lID09PSAnbGlnaHQnKSB7XHJcblxyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKTtcclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1saWdodCcpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWRhcmsnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLS1saWdodCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWRhcmsnKTtcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWRhcmsnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1saWdodCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItLWRhcmsnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1saWdodCcpO1xyXG4gICB9XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7c3dpdGNoVGhlbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3dpdGNoVGhlbWUgfSBmcm9tIFwiLi90aGVtZS10b2dnbGVcIjtcclxuaW1wb3J0IHtkcmFnRHJvcH0gZnJvbSBcIi4vZHJhZy1hbmQtZHJvcFwiO1xyXG5pbXBvcnQge3RvRG9MaXN0fSBmcm9tIFwiLi9hZGQtVG9Eb1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG5jb25zdCBkZWxfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZV9fYnRuJyk7XHJcbmNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXQnKTtcclxuY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuY29uc3QgdG9kbyA9IHRvRG9MaXN0KCk7XHJcbmNvbnN0IGFsbF9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsJyk7XHJcbmNvbnN0IGFjdGl2ZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlJyk7XHJcbmNvbnN0IGNvbXBsZXRlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGhlbWUpO1xyXG4gICAgZHJhZ0Ryb3A7XHJcbiAgICB0b2RvLmNoZWNrSXRlbXMoKTtcclxuICAgIHRvZG8uc2hvd0FsbCgpO1xyXG5cclxuXHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyhhY3RpdmVfYnRuKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbXBsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uY29tcGxldGVUb0RvKCk7XHJcbiAgICB0b2RvLmNoZWNrSXRlbXMoKTtcclxuICAgIFxyXG59KVxyXG5cclxuXHJcbmFjdGl2ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHRvZG8uYWN0aXZlVG9EbygpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcbn0pXHJcblxyXG5cclxuYWxsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uc2hvd0FsbCgpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcbiAgICBcclxufSlcclxuXHJcblxyXG5cclxudG9Eb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uYWRkVG9EbygpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcblxyXG59KTtcclxuXHJcbnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgIHRvZG8ucmVtb3ZlVG9kbyhlKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygpO1xyXG5cclxufSlcclxuXHJcblxyXG5kZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdG9kby5kZWxDb21wbGV0ZSgpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogY2hlY2tib3guZm9yRWFjaChib3ggPT4ge1xyXG5cclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jaGVja2VkID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWNoIGJpbiBnZWNoZWNrZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWNoIGJpbiBuaWNoIGdlY2hlY2tlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkgKi9cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=