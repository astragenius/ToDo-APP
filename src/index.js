import { switchTheme } from "./theme-toggle";
import {dragDrop} from "./drag-and-drop";





(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', switchTheme);
    dragDrop;

})();



const listItems = document.querySelectorAll('.container_label > input');
const content = document.querySelectorAll('.toDolist__content');
const del = document.querySelectorAll('.delete__cross');
const del_btn = document.getElementById('delete__btn');

console.log(content.childNodes);





del.forEach(el => {

    el.addEventListener('click', function() {


        this.parentElement.remove();
        

       
    })
})

del_btn.addEventListener('click', function() {

    listItems.forEach(el => {

        if(el.disabled === false && el.checked === true) {

          
            el.parentElement.parentElement.parentElement.remove()
            
        }else {
            return
        }

    })
})




