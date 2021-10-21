import { switchTheme } from "./theme-toggle";
import {dragDrop} from "./drag-and-drop";
import {toDoList} from "./add-ToDo";



const checkbox = document.querySelectorAll('.checkbox');
const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const ul = document.getElementsByTagName('ul')[0];
const todo = toDoList();
const all_btn = document.getElementById('all');
const active_btn = document.getElementById('active');
const complete_btn = document.getElementById('complete');
const input = document.querySelectorAll('.checkbox');






(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', switchTheme);
    dragDrop;
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


