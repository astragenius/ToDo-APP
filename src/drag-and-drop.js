


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





export {dragDrop};

