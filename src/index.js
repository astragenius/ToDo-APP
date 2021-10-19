import { switchTheme } from "./theme-toggle";
import {dragDrop} from "./drag-and-drop";
import {toDoList} from "./add-ToDo";





(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', switchTheme);
    dragDrop;

})();



const content = document.querySelectorAll('.toDolist__content > li');
const checkbox = document.querySelectorAll('.checkbox');
const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const todo = toDoList();

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


