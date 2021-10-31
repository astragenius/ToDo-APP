import { switchTheme } from "./theme-toggle";
import {toDoList} from "./add-ToDo";




const del_btn = document.getElementById('delete__btn');
const toDoInput = document.getElementById('toDoInput');
const ul = document.getElementsByTagName('ul')[0];
const todo = toDoList();

const all_btn = document.querySelectorAll('.filter_all');
const active_btn = document.querySelectorAll('.filter_active');
const complete_btn = document.querySelectorAll('.filter_complete');









(function() {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', switchTheme);
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





