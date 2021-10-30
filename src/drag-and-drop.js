






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





export {dragDrop};

