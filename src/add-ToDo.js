

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



export {toDoList};