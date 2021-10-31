(()=>{"use strict";const e=document.getElementById("delete__btn"),t=document.getElementById("toDoInput"),n=document.getElementsByTagName("ul")[0],l=(()=>{const e=e=>{const t=document.querySelector(".item_num"),n=document.querySelector(".toDolist"),l=[...document.querySelectorAll(".checkbox")];let c=0,o=0;if(t.textContent=n.children.length,"all"==e&&(t.textContent=n.children.length),"done"==e){for(let e=0;e<l.length;e++)1==l[e].checked&&c++;t.textContent=c}if("open"==e){for(let e=0;e<l.length;e++)0==l[e].checked&&o++;t.textContent=o}},t=e=>{e.target.checked,e.target.parentElement.parentElement.nextElementSibling.classList.toggle("del")};return{addToDo:()=>{let e=document.getElementById("toDoInput");document.querySelector(".toDolist").insertAdjacentElement("afterbegin",(e=>{const n=document.createElement("div"),l=document.createElement("div"),c=document.createElement("label"),o=document.createElement("input"),s=document.createElement("span"),r=document.createElement("li"),a=document.createElement("input");return n.setAttribute("class","toDolist__content add-item"),n.setAttribute("draggable","true"),l.setAttribute("class","checkbox__container"),c.setAttribute("class","container_label"),o.setAttribute("type","checkbox"),o.setAttribute("class","checkbox"),o.addEventListener("click",t),s.setAttribute("class","checkmark"),r.textContent=e,a.setAttribute("class","delete__cross"),a.setAttribute("type","image"),a.setAttribute("src","images/icon-cross.svg"),c.appendChild(o),c.appendChild(s),l.appendChild(c),n.appendChild(l),n.appendChild(r),n.appendChild(a),(d=n).addEventListener("dragstart",(function(e){e.target.classList.add("dragging")})),d.addEventListener("dragover",(function(e){const t=document.querySelector(".toDolist");e.preventDefault();const n=document.querySelector(".dragging"),l=(c=t,o=e.clientY,[...c.querySelectorAll(".toDolist__content:not(.dragging)")].reduce(((e,t)=>{const n=t.getBoundingClientRect(),l=o-n.top-n.height/2;return l<0&&l>e.offset?{offset:l,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element);var c,o;null==l?t.appendChild(n):t.insertBefore(n,l)})),d.addEventListener("dragend",(function(e){e.target.classList.remove("dragging")})),n;var d})(e.value)),e.value=""},removeTodo:t=>{"delete__cross"===t.target.className&&t.target.parentElement.classList.contains("add-item")&&(t.target.parentElement.classList.remove("add-item"),t.target.parentElement.classList.add("removed-item"),setTimeout((function(){t.target.parentElement.remove(),e()}),600))},delComplete:()=>{document.querySelectorAll(".container_label > input").forEach((e=>{!0===e.checked&&e.parentElement.parentElement.parentElement.remove()}))},checkItems:e,completeToDo:()=>{const e=document.querySelectorAll(".checkbox"),t=document.querySelectorAll(".toDolist__content");for(let n=0;n<e.length;n++)!0===e[n].checked?t[n].style.display="flex":t[n].style.display="none"},activeToDo:()=>{const e=document.querySelectorAll(".checkbox"),t=document.querySelectorAll(".toDolist__content");for(let n=0;n<e.length;n++)!1===e[n].checked?t[n].style.display="flex":t[n].style.display="none"},showAll:()=>{const e=document.querySelectorAll(".toDolist__content");for(let t=0;t<e.length;t++)(e[t].style.display="none")&&(e[t].style.display="flex")}}})(),c=document.querySelectorAll(".filter_all"),o=document.querySelectorAll(".filter_active"),s=document.querySelectorAll(".filter_complete");document.getElementById("toggle").addEventListener("click",(function(){const e=document.getElementsByTagName("html")[0],t=document.getElementById("toggle"),n=document.getElementById("toggleContainer");"light"===e.className?(e.classList.remove("light"),e.classList.add("dark"),t.classList.remove("btn--light"),t.classList.add("btn--dark"),n.classList.remove("container--light"),n.classList.add("container--dark")):(e.classList.remove("dark"),e.classList.add("light"),t.classList.remove("btn--dark"),t.classList.add("btn--light"),n.classList.remove("container--dark"),n.classList.add("container--light"))})),l.checkItems("all"),s.forEach((e=>{e.addEventListener("click",(function(){l.completeToDo(),l.checkItems("done")}))})),o.forEach((e=>{e.addEventListener("click",(function(){l.activeToDo(),l.checkItems("open")}))})),c.forEach((e=>{e.addEventListener("click",(function(){l.showAll(),l.checkItems("all")}))})),t.addEventListener("change",(function(){l.addToDo(),l.checkItems()})),n.addEventListener("click",(function(e){l.removeTodo(e)})),e.addEventListener("click",(function(){l.delComplete(),l.checkItems()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLFdBQ3pCaEMsRUFBS3FFLGFBQ0xyRSxFQUFLQyxXQUFXLGNBUXhCdUUsRUFBUVQsU0FBUUMsSUFFWkEsRUFBR2hDLGlCQUFpQixTQUFTLFdBRXpCaEMsRUFBS3NFLFVBQ0x0RSxFQUFLQyxXQUFXLGFBVXhCSixFQUFVbUMsaUJBQWlCLFVBQVUsV0FFakNoQyxFQUFLc0IsVUFDTHRCLEVBQUtDLGdCQUlUSCxFQUFHa0MsaUJBQWlCLFNBQVMsU0FBU2hCLEdBQ2xDaEIsRUFBSzBELFdBQVcxQyxNQU1wQnRCLEVBQVFzQyxpQkFBaUIsU0FBUyxXQUU5QmhDLEVBQUs4RCxjQUNMOUQsRUFBS0MsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90aGVtZS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWRkLVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZHJhZy1hbmQtZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHN3aXRjaFRoZW1lID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlQ29udGFpbmVyJyk7XHJcblxyXG4gICBpZihodG1sLmNsYXNzTmFtZSA9PT0gJ2xpZ2h0Jykge1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Jyk7XHJcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xyXG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLS1kYXJrJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tbGlnaHQnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLS1kYXJrJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci0tbGlnaHQnKTtcclxuICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQge3N3aXRjaFRoZW1lfTsiLCJpbXBvcnQgeyBzd2l0Y2hUaGVtZSB9IGZyb20gXCIuL3RoZW1lLXRvZ2dsZVwiO1xyXG5pbXBvcnQge3RvRG9MaXN0fSBmcm9tIFwiLi9hZGQtVG9Eb1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZGVsX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVfX2J0bicpO1xyXG5jb25zdCB0b0RvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0Jyk7XHJcbmNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XHJcbmNvbnN0IHRvZG8gPSB0b0RvTGlzdCgpO1xyXG5cclxuY29uc3QgYWxsX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfYWxsJyk7XHJcbmNvbnN0IGFjdGl2ZV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX2FjdGl2ZScpO1xyXG5jb25zdCBjb21wbGV0ZV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX2NvbXBsZXRlJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRoZW1lKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygnYWxsJyk7XHJcbiAgICBcclxufSkoKTtcclxuXHJcblxyXG5cclxuY29tcGxldGVfYnRuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0b2RvLmNvbXBsZXRlVG9EbygpO1xyXG4gICAgICAgIHRvZG8uY2hlY2tJdGVtcygnZG9uZScpO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5hY3RpdmVfYnRuLmZvckVhY2goZWwgPT4ge1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9kby5hY3RpdmVUb0RvKCk7XHJcbiAgICAgICAgdG9kby5jaGVja0l0ZW1zKCdvcGVuJyk7XHJcbiAgICB9KVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbmFsbF9idG4uZm9yRWFjaChlbCA9PiB7XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdG9kby5zaG93QWxsKCk7XHJcbiAgICAgICAgdG9kby5jaGVja0l0ZW1zKCdhbGwnKTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnRvRG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0b2RvLmFkZFRvRG8oKTtcclxuICAgIHRvZG8uY2hlY2tJdGVtcygpO1xyXG5cclxufSk7XHJcblxyXG51bC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHRvZG8ucmVtb3ZlVG9kbyhlKTtcclxuICAgXHJcblxyXG59KVxyXG5cclxuXHJcbmRlbF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0b2RvLmRlbENvbXBsZXRlKCk7XHJcbiAgICB0b2RvLmNoZWNrSXRlbXMoKTtcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtkcmFnRHJvcH0gZnJvbSBcIi4vZHJhZy1hbmQtZHJvcFwiO1xyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZUh0bWwgPSAodmFsKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHJcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b0RvbGlzdF9fY29udGVudCBhZGQtaXRlbScpO1xyXG4gICAgICAgIHRvZG9Db250ZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94X19jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXJfbGFiZWwnKTtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94JylcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrZWRUb2RvKVxyXG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbWFyaycpO1xyXG5cclxuICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gdmFsO1xyXG5cclxuICAgICAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVfX2Nyb3NzJyk7XHJcbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZScpO1xyXG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZXMvaWNvbi1jcm9zcy5zdmcnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXJMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgY29udGFpbmVyTGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcclxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJMYWJlbCk7XHJcblxyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChkZWxCdG4pO1xyXG4gICAgICAgIGRyYWdEcm9wKHRvZG9Db250ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvZG9Db250ZW50O1xyXG4gICAgfVxyXG5cclxuICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgY29udGVudFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb2xpc3QnKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50VG9kby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBjcmVhdGVIdG1sKGlucHV0LnZhbHVlKSk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJkZWxldGVfX2Nyb3NzXCIpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWl0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFkZC1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZC1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSXRlbXMoKTtcclxuXHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxDb21wbGV0ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcl9sYWJlbCA+IGlucHV0Jyk7XHJcbiAgICAgICAgbGlzdEl0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbC5jaGVja2VkID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tJdGVtcyA9ICh2YWwpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fbnVtJyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gWy4uLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKV07XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGNvdW50MSA9IDA7IFxyXG4gICAgICAgIG51bS50ZXh0Q29udGVudCA9IGxpc3QuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGlmKHZhbCA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICBudW0udGV4dENvbnRlbnQgPSBsaXN0LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodmFsID09ICdkb25lJykge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dFtpXS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbnVtLnRleHRDb250ZW50ID0gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHZhbCA9PSAnb3Blbicpe1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dFtpXS5jaGVja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQxKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBudW0udGV4dENvbnRlbnQgPSBjb3VudDE7XHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZVRvRG8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgICAgICBjb25zdCB0b0RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICBpZihpbnB1dFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlVG9EbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnN0IHRvRG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvRG9saXN0X19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihpbnB1dFtpXS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9Eb2xpc3RfX2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvRG9Db250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZih0b0RvQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvRG9Db250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPVwiZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrZWRUb2RvID0gKGUpID0+IHsgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2RlbCcpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdkZWwnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge2FkZFRvRG8sIHJlbW92ZVRvZG8sIGRlbENvbXBsZXRlLCBjaGVja0l0ZW1zLCBjb21wbGV0ZVRvRG8sIGFjdGl2ZVRvRG8sIHNob3dBbGx9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHt0b0RvTGlzdH07IiwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRyYWdEcm9wID0gKGNvbnRlbnQpID0+IHtcclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydCAoZSkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQgKGUpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcclxuICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVEcmFnT3ZlciAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvbGlzdCcpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcclxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0RHJhZ0FmdGVyRWxlbWVudChjb250ZW50VG9kbywgZS5jbGllbnRZKVxyXG4gICAgICAgICAgICBpZihhZnRlckVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudFRvZG8uYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUb2RvLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFsuLi4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b0RvbGlzdF9fY29udGVudDpub3QoLmRyYWdnaW5nKScpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSB5IC0gYm94LnRvcCAtIGJveC5oZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge29mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2VzdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge29mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZfSkuZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XHJcbiAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWdPdmVyKTtcclxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIHJldHVybiBjb250ZW50ICAgICAgICAgICAgIFxyXG5cclxuICAgIFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7ZHJhZ0Ryb3B9O1xyXG5cclxuIl0sIm5hbWVzIjpbImRlbF9idG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9Eb0lucHV0IiwidWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRvZG8iLCJjaGVja0l0ZW1zIiwidmFsIiwibnVtIiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudCIsImNvdW50MSIsInRleHRDb250ZW50IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJpIiwiY2hlY2tlZCIsImNoZWNrZWRUb2RvIiwiZSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRUb0RvIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwidG9kb0NvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tCb3hDb250YWluZXIiLCJjb250YWluZXJMYWJlbCIsImNoZWNrYm94IiwiY2hlY2ttYXJrIiwiZGVsQnRuIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImFkZCIsImNvbnRlbnRUb2RvIiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2FibGUiLCJhZnRlckVsZW1lbnQiLCJjb250YWluZXIiLCJ5IiwiY2xpZW50WSIsInJlZHVjZSIsImNsb3Nlc3QiLCJjaGlsZCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImVsZW1lbnQiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsImNyZWF0ZUh0bWwiLCJ2YWx1ZSIsInJlbW92ZVRvZG8iLCJjbGFzc05hbWUiLCJjb250YWlucyIsInNldFRpbWVvdXQiLCJkZWxDb21wbGV0ZSIsImZvckVhY2giLCJlbCIsImNvbXBsZXRlVG9EbyIsInRvRG9Db250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWN0aXZlVG9EbyIsInNob3dBbGwiLCJ0b0RvTGlzdCIsImFsbF9idG4iLCJhY3RpdmVfYnRuIiwiY29tcGxldGVfYnRuIiwiaHRtbCIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=