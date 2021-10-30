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

        return todoContent;
    }
    

    const addToDo = () => {
       
        let input = document.getElementById('toDoInput');
        const contentTodo = document.querySelector('.toDolist');
        console.log(input.value);
        const content = createHtml(input.value);
        console.log(content);
        contentTodo.insertAdjacentElement('afterbegin', content);
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
                    console.log(count)
                }   
            }
            console.log('hallo');
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
                

                console.log('Hallo');
                console.log(e.target);
    
                if(e.target.checked == true) {
                    
                    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('del')
                }else {
                    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('del')
                }
            
        

    }



    return {addToDo, removeTodo, delComplete, checkItems, completeToDo, activeToDo, showAll, checkedTodo}
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



const list = document.querySelectorAll('.toDolist__content');



const dragDrop = (() => {


        let dragSrcEl = null;


         function handleDragStart (e) {

            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        };
    
        function handleDragEnd (e) {
    
            list.forEach(function(el) {
                el.classList.remove('hover');
            });        
        };
    
        function handleDragOver (e) {
            if(e.preventDefault) {
                e.preventDefault();
    
            }
    
            return false;
        }
    
        function handleDragEnter (e) {
            this.classList.add('hover');
        }
    
        function handleDragLeave (e) {
            this.classList.remove('hover');
    
        }
    
        function handleDrop (e) {
            if(e.stopPropagation) {
                e.stopPropagation();
            }
                if(dragSrcEl !== this) {
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = e.dataTransfer.getData('text/html');
                }
            return false;
        }


        
            

            for(let i = 0; i < list.length; i++) {

                list[i].addEventListener('dragstart', handleDragStart);
                list[i].addEventListener('dragover', handleDragOver);
                list[i].addEventListener('dragenter', handleDragEnter);
                list[i].addEventListener('dragleave', handleDragLeave);
                list[i].addEventListener('dragend', handleDragEnd);
                list[i].addEventListener('drop', handleDrop);
                

            }

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







const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const ul = document.getElementsByTagName('ul')[0];
const todo = (0,_add_ToDo__WEBPACK_IMPORTED_MODULE_2__.toDoList)();
const all_btn = document.getElementById('all');
const active_btn = document.getElementById('active');
const complete_btn = document.getElementById('complete');
const input = [... document.querySelectorAll('.checkbox')];








(function() {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', _theme_toggle__WEBPACK_IMPORTED_MODULE_0__.switchTheme);
    todo.checkItems('all');
    
})();

_drag_and_drop__WEBPACK_IMPORTED_MODULE_1__.dragDrop;


complete_btn.addEventListener('click', function() {

    todo.completeToDo();
    todo.checkItems('done');
    
})


active_btn.addEventListener('click', function() {
    todo.activeToDo();
    todo.checkItems('open');
})


all_btn.addEventListener('click', function() {

    todo.showAll();
    todo.checkItems('all');
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QztBQUNKO0FBQ0w7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQVc7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9EQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FkZC1Ub0RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RyYWctYW5kLWRyb3AuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkcmFnRHJvcH0gZnJvbSBcIi4vZHJhZy1hbmQtZHJvcFwiO1xyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZUh0bWwgPSAodmFsKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHJcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b0RvbGlzdF9fY29udGVudCBhZGQtaXRlbScpO1xyXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hfX2NvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb250YWluZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhaW5lcl9sYWJlbCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3gnKVxyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tlZFRvZG8pXHJcbiAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2ttYXJrJyk7XHJcblxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSB2YWw7XHJcblxyXG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZV9fY3Jvc3MnKTtcclxuICAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlJyk7XHJcbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9pbWFnZXMvaWNvbi1jcm9zcy5zdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXJMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgY29udGFpbmVyTGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcclxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJMYWJlbCk7XHJcblxyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChkZWxCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0NvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhZGRUb0RvID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9JbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9saXN0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVIdG1sKGlucHV0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAgICAgICBjb250ZW50VG9kby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBjb250ZW50KTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbGV0ZV9fY3Jvc3NcIil7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkLWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJdGVtcygpO1xyXG5cclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbENvbXBsZXRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyX2xhYmVsID4gaW5wdXQnKTtcclxuICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsLmNoZWNrZWQgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0l0ZW1zID0gKHZhbCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9udW0nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpXTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgY291bnQxID0gMDsgXHJcbiAgICAgICAgbnVtLnRleHRDb250ZW50ID0gbGlzdC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgaWYodmFsID09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IGxpc3QuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih2YWwgPT0gJ2RvbmUnKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlucHV0W2ldLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY291bnQpXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbGxvJyk7XHJcbiAgICAgICAgICAgIG51bS50ZXh0Q29udGVudCA9IGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih2YWwgPT0gJ29wZW4nKXtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5wdXRbaV0uY2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50MSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnVtLnRleHRDb250ZW50ID0gY291bnQxO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVUb0RvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb2xpc3RfX2NvbnRlbnQnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgaWYoaW5wdXRbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZVRvRG8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgICAgICBjb25zdCB0b0RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudCcpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoaW5wdXRbaV0uY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvRG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b0RvQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYodG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID1cImZsZXhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja2VkVG9kbyA9IChlKSA9PiB7ICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhbGxvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnZGVsJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2RlbCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7YWRkVG9EbywgcmVtb3ZlVG9kbywgZGVsQ29tcGxldGUsIGNoZWNrSXRlbXMsIGNvbXBsZXRlVG9EbywgYWN0aXZlVG9Ebywgc2hvd0FsbCwgY2hlY2tlZFRvZG99XHJcbn07XHJcblxyXG4vKiBjb25zdCB0byA9IHRvRG9MaXN0KCk7ICovXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7dG9Eb0xpc3R9OyIsIlxyXG5cclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb2xpc3RfX2NvbnRlbnQnKTtcclxuXHJcblxyXG5cclxuY29uc3QgZHJhZ0Ryb3AgPSAoKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGRyYWdTcmNFbCA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0IChlKSB7XHJcblxyXG4gICAgICAgICAgICBkcmFnU3JjRWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCB0aGlzLmlubmVySFRNTCk7XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQgKGUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdPdmVyIChlKSB7XHJcbiAgICAgICAgICAgIGlmKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlciAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRHJhZ0xlYXZlIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyb3AgKGUpIHtcclxuICAgICAgICAgICAgaWYoZS5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRyYWdTcmNFbCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdTcmNFbC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xyXG4gICAgICAgICAgICAgICAgbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBoYW5kbGVEcmFnRW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xyXG4gICAgICAgICAgICAgICAgbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgaGFuZGxlRHJhZ0VuZCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2RyYWdEcm9wfTtcclxuXHJcbiIsIlxyXG5cclxuY29uc3Qgc3dpdGNoVGhlbWUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVDb250YWluZXInKTtcclxuXHJcbiAgIGlmKGh0bWwuY2xhc3NOYW1lID09PSAnbGlnaHQnKSB7XHJcblxyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKTtcclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1saWdodCcpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tLWRhcmsnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLS1saWdodCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItLWRhcmsnKTtcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWRhcmsnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1saWdodCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWluZXItLWRhcmsnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1saWdodCcpO1xyXG4gICB9XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7c3dpdGNoVGhlbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3dpdGNoVGhlbWUgfSBmcm9tIFwiLi90aGVtZS10b2dnbGVcIjtcclxuaW1wb3J0IHtkcmFnRHJvcH0gZnJvbSBcIi4vZHJhZy1hbmQtZHJvcFwiO1xyXG5pbXBvcnQge3RvRG9MaXN0fSBmcm9tIFwiLi9hZGQtVG9Eb1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVfX2J0bicpO1xyXG5jb25zdCB0b0RvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0Jyk7XHJcbmNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XHJcbmNvbnN0IHRvZG8gPSB0b0RvTGlzdCgpO1xyXG5jb25zdCBhbGxfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbCcpO1xyXG5jb25zdCBhY3RpdmVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZScpO1xyXG5jb25zdCBjb21wbGV0ZV9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGUnKTtcclxuY29uc3QgaW5wdXQgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUaGVtZSk7XHJcbiAgICB0b2RvLmNoZWNrSXRlbXMoJ2FsbCcpO1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5kcmFnRHJvcDtcclxuXHJcblxyXG5jb21wbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0b2RvLmNvbXBsZXRlVG9EbygpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCdkb25lJyk7XHJcbiAgICBcclxufSlcclxuXHJcblxyXG5hY3RpdmVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0b2RvLmFjdGl2ZVRvRG8oKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygnb3BlbicpO1xyXG59KVxyXG5cclxuXHJcbmFsbF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0b2RvLnNob3dBbGwoKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygnYWxsJyk7XHJcbiAgICBcclxufSlcclxuXHJcblxyXG5cclxudG9Eb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uYWRkVG9EbygpO1xyXG4gICAgdG9kby5jaGVja0l0ZW1zKCk7XHJcblxyXG59KTtcclxuXHJcbnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdG9kby5yZW1vdmVUb2RvKGUpO1xyXG4gICBcclxuXHJcbn0pXHJcblxyXG5cclxuZGVsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRvZG8uZGVsQ29tcGxldGUoKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9