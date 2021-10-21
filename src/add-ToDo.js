

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



export {toDoList};