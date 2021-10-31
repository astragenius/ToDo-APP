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
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-and-drop */ "./src/drag-and-drop.js");


const toDoList = () => {
    
    const createHtml = (val) => {

        const todoContent = document.createElement('div');
        const checkBoxContainer = document.createElement('div');
        const containerLabel = document.createElement('label');
        const checkbox = document.createElement('input');
        const checkmark = document.createElement('span');
        const list = document.createElement('li');
        const delBtn = document.createElement('input');


        todoContent.setAttribute('class', 'toDolist__content add-item');
        todoContent.setAttribute('draggable', 'true');
        checkBoxContainer.setAttribute('class', 'checkbox__container');

        containerLabel.setAttribute('class', 'container_label');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'checkbox')
        checkbox.addEventListener('click', checkedTodo)
        checkmark.setAttribute('class', 'checkmark');

        list.textContent = val;

        delBtn.setAttribute('class', 'delete__cross');
        delBtn.setAttribute('type', 'image');
        delBtn.setAttribute('src', '/images/icon-cross.svg');
        
        containerLabel.appendChild(checkbox);
        containerLabel.appendChild(checkmark);
        checkBoxContainer.appendChild(containerLabel);

        todoContent.appendChild(checkBoxContainer);
        todoContent.appendChild(list);
        todoContent.appendChild(delBtn);
        (0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_0__.dragDrop)(todoContent);

        return todoContent;
    }

  
    

    const addToDo = () => {
       
        let input = document.getElementById('toDoInput');
        const contentTodo = document.querySelector('.toDolist');
        
        
        contentTodo.insertAdjacentElement('afterbegin', createHtml(input.value));
        input.value = '';
          
    }

    const removeTodo = (e) => {
        if(e.target.className === "delete__cross"){
           
            if(e.target.parentElement.classList.contains('add-item')) {
               
                e.target.parentElement.classList.remove("add-item");
                e.target.parentElement.classList.add("removed-item");
                setTimeout(function() {
                    e.target.parentElement.remove();
                    checkItems();

            }, 600);
            };
            
           
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

    const checkItems = (val) => {

        const num = document.querySelector('.item_num');
        const list = document.querySelector('.toDolist');
        const input = [... document.querySelectorAll('.checkbox')];
        

        let count = 0;
        let count1 = 0; 
        num.textContent = list.children.length;
        if(val == 'all') {
            num.textContent = list.children.length;
        }
        if(val == 'done') {
            for(let i = 0; i < input.length; i++) {

                if(input[i].checked == true) {
            
                    count++
                  
                }   
            }
            
            num.textContent = count;
        }
        if(val == 'open'){

            for(let i = 0; i < input.length; i++) {
                if(input[i].checked == false) {
                    count1++
                }
            }
            num.textContent = count1;
        }   

    }

    const completeToDo = () => {
        const input = document.querySelectorAll('.checkbox');
        const toDoContent = document.querySelectorAll('.toDolist__content');
        
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
        const toDoContent = document.querySelectorAll('.toDolist__content');

        
        for(let i = 0; i < input.length; i++) {
            if(input[i].checked === false) {
                toDoContent[i].style.display = "flex";

            } else {
                toDoContent[i].style.display = "none";
            }
        }
    }

    const showAll = () => {
       
        const toDoContent = document.querySelectorAll('.toDolist__content');

        for(let i = 0; i < toDoContent.length; i++) {

            if(toDoContent[i].style.display = "none") {
                toDoContent[i].style.display ="flex";
            }
        }
    }

    const checkedTodo = (e) => {    
                

               
    
                if(e.target.checked == true) {
                    
                    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('del')
                }else {
                    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('del')
                }
            
        

    }



    return {addToDo, removeTodo, delComplete, checkItems, completeToDo, activeToDo, showAll}
};







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







const dragDrop = (content) => {


    
    

         function handleDragStart (e) {

            
            e.target.classList.add('dragging');
        };
    
        function handleDragEnd (e) {
            e.target.classList.remove('dragging');
    
           
        };
    
        function handleDragOver (e) {
            const contentTodo = document.querySelector('.toDolist');

            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            const afterElement = getDragAfterElement(contentTodo, e.clientY)
            if(afterElement == null) {
                contentTodo.appendChild(draggable);

            }else {
                contentTodo.insertBefore(draggable, afterElement);
            }
        }
    
        
    

        function getDragAfterElement(container, y) {
            
           const draggableElements = [... container.querySelectorAll('.toDolist__content:not(.dragging)')];
            return draggableElements.reduce((closest, child) => {

                    const box = child.getBoundingClientRect()
                    const offset = y - box.top - box.height / 2
                    
                    if(offset < 0 && offset > closest.offset) {
                        return {offset: offset, element: child}
                        
                    }else {
                        return closest
                    }
            }, {offset: Number.NEGATIVE_INFINITY}).element
        }
        
            

           

        content.addEventListener('dragstart', handleDragStart);
        content.addEventListener('dragover', handleDragOver);
        content.addEventListener('dragend', handleDragEnd);
        
                

    return content             

    
};









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
/* harmony import */ var _add_ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-ToDo */ "./src/add-ToDo.js");






const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const ul = document.getElementsByTagName('ul')[0];
const todo = (0,_add_ToDo__WEBPACK_IMPORTED_MODULE_1__.toDoList)();

const all_btn = document.querySelectorAll('.filter_all');
const active_btn = document.querySelectorAll('.filter_active');
const complete_btn = document.querySelectorAll('.filter_complete');









(function() {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
    todo.checkItems('all');
    
})();



complete_btn.forEach(el => {
    
    el.addEventListener('click', function() {

        todo.completeToDo();
        todo.checkItems('done');
        
    })
})


active_btn.forEach(el => {

    el.addEventListener('click', function() {
        todo.activeToDo();
        todo.checkItems('open');
    })

})




all_btn.forEach(el => {

    el.addEventListener('click', function() {

        todo.showAll();
        todo.checkItems('all');
        
    })
})






toDoInput.addEventListener('change', function() {

    todo.addToDo();
    todo.checkItems();

});

ul.addEventListener('click', function(e) {
    todo.removeTodo(e);
   

})


del_btn.addEventListener('click', function() {

    todo.delComplete();
    todo.checkItems();

})






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLEdBQUcsaUNBQWlDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQUNUO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQVc7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hZGQtVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kcmFnLWFuZC1kcm9wLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RoZW1lLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZHJhZ0Ryb3B9IGZyb20gXCIuL2RyYWctYW5kLWRyb3BcIjtcclxuXHJcbmNvbnN0IHRvRG9MaXN0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjcmVhdGVIdG1sID0gKHZhbCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblxyXG4gICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9Eb2xpc3RfX2NvbnRlbnQgYWRkLWl0ZW0nKTtcclxuICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveF9fY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyX2xhYmVsJyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja2VkVG9kbylcclxuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja21hcmsnKTtcclxuXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IHZhbDtcclxuXHJcbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlX19jcm9zcycpO1xyXG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2UnKTtcclxuICAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnL2ltYWdlcy9pY29uLWNyb3NzLnN2ZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lckxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICBjb250YWluZXJMYWJlbC5hcHBlbmRDaGlsZChjaGVja21hcmspO1xyXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxhYmVsKTtcclxuXHJcbiAgICAgICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGRlbEJ0bik7XHJcbiAgICAgICAgZHJhZ0Ryb3AodG9kb0NvbnRlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0NvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgYWRkVG9EbyA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvbGlzdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnRUb2RvLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGNyZWF0ZUh0bWwoaW5wdXQudmFsdWUpKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbGV0ZV9fY3Jvc3NcIil7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJdGVtcygpO1xyXG5cclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbENvbXBsZXRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyX2xhYmVsID4gaW5wdXQnKTtcclxuICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsLmNoZWNrZWQgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0l0ZW1zID0gKHZhbCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9udW0nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpXTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgY291bnQxID0gMDsgXHJcbiAgICAgICAgbnVtLnRleHRDb250ZW50ID0gbGlzdC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgaWYodmFsID09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IGxpc3QuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih2YWwgPT0gJ2RvbmUnKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBudW0udGV4dENvbnRlbnQgPSBjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodmFsID09ICdvcGVuJyl7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDErK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IGNvdW50MTtcclxuICAgICAgICB9ICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlVG9EbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmVUb0RvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb2xpc3RfX2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCB0b0RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudCcpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9Eb0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmKHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9XCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tlZFRvZG8gPSAoZSkgPT4geyAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnZGVsJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2RlbCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7YWRkVG9EbywgcmVtb3ZlVG9kbywgZGVsQ29tcGxldGUsIGNoZWNrSXRlbXMsIGNvbXBsZXRlVG9EbywgYWN0aXZlVG9Ebywgc2hvd0FsbH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge3RvRG9MaXN0fTsiLCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZHJhZ0Ryb3AgPSAoY29udGVudCkgPT4ge1xyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgICAgICAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0IChlKSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZCAoZSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdPdmVyIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9saXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xyXG4gICAgICAgICAgICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRlbnRUb2RvLCBlLmNsaWVudFkpXHJcbiAgICAgICAgICAgIGlmKGFmdGVyRWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VG9kby5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGVudFRvZG8uaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldERyYWdBZnRlckVsZW1lbnQoY29udGFpbmVyLCB5KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gWy4uLiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Om5vdCguZHJhZ2dpbmcpJyldO1xyXG4gICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlRWxlbWVudHMucmVkdWNlKChjbG9zZXN0LCBjaGlsZCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7b2Zmc2V0OiBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7b2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFl9KS5lbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcclxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xyXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGhhbmRsZURyYWdFbmQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQgICAgICAgICAgICAgXHJcblxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtkcmFnRHJvcH07XHJcblxyXG4iLCJcclxuXHJcbmNvbnN0IHN3aXRjaFRoZW1lID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlQ29udGFpbmVyJyk7XHJcblxyXG4gICBpZihodG1sLmNsYXNzTmFtZSA9PT0gJ2xpZ2h0Jykge1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQge3N3aXRjaFRoZW1lfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN3aXRjaFRoZW1lIH0gZnJvbSBcIi4vdGhlbWUtdG9nZ2xlXCI7XHJcbmltcG9ydCB7dG9Eb0xpc3R9IGZyb20gXCIuL2FkZC1Ub0RvXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWxfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZV9fYnRuJyk7XHJcbmNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXQnKTtcclxuY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuY29uc3QgdG9kbyA9IHRvRG9MaXN0KCk7XHJcblxyXG5jb25zdCBhbGxfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9hbGwnKTtcclxuY29uc3QgYWN0aXZlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfYWN0aXZlJyk7XHJcbmNvbnN0IGNvbXBsZXRlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfY29tcGxldGUnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZScpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGhlbWUpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCdhbGwnKTtcclxuICAgIFxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5jb21wbGV0ZV9idG4uZm9yRWFjaChlbCA9PiB7XHJcbiAgICBcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHRvZG8uY29tcGxldGVUb0RvKCk7XHJcbiAgICAgICAgdG9kby5jaGVja0l0ZW1zKCdkb25lJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbmFjdGl2ZV9idG4uZm9yRWFjaChlbCA9PiB7XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b2RvLmFjdGl2ZVRvRG8oKTtcclxuICAgICAgICB0b2RvLmNoZWNrSXRlbXMoJ29wZW4nKTtcclxuICAgIH0pXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuYWxsX2J0bi5mb3JFYWNoKGVsID0+IHtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0b2RvLnNob3dBbGwoKTtcclxuICAgICAgICB0b2RvLmNoZWNrSXRlbXMoJ2FsbCcpO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudG9Eb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uYWRkVG9EbygpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcblxyXG59KTtcclxuXHJcbnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdG9kby5yZW1vdmVUb2RvKGUpO1xyXG4gICBcclxuXHJcbn0pXHJcblxyXG5cclxuZGVsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uZGVsQ29tcGxldGUoKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=