import {dragDrop} from "./drag-and-drop";

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
        dragDrop(todoContent);

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





export {toDoList};