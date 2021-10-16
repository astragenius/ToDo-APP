import { switchTheme } from "./theme-toggle";





(function() {

    const btn = document.getElementById('toggle');
    btn.addEventListener('click', switchTheme);
})();


let dragSrcEl = null;

function handleDragStart(e) {
   
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {

    list.forEach(function(el) {

        el.classList.remove('hover');
    });
   
};

function handleDragOver(e) {

    if(e.preventDefault) {
        e.preventDefault();
    }

    return false;
};

function handleDragEnter(e) {

    this.classList.add('hover');
};

function handleDragLeave(e) {

    this.classList.remove('hover');
}

function handleDrop(e) {
   if (e.stopPropagation) {
       e.stopPropagation();
   }
    if(dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}




const list = document.querySelectorAll('.toDolist__content');

list.forEach(item => {

    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
})







