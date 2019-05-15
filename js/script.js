//Global variables
let n = 10;
const listItem = document.getElementsByClassName('student-list')[0].children;

// displays the list
function showPage(list, page) {
   const start = (page * n)-n ;
   const end = page * n; 
   
   for( let i = 0; i < list.length; i++){

      if (i >= start && i < end ){
       list[i].style.display = '';
       
      } else {
         list[i].style.display = 'none';

      }

   }

}
/*
create new elements
append the elements
creates the pagination
*/
const appendPageLinks = (list) => {
   
   const createDiv = document.createElement('div');
   const div = document.getElementsByClassName('page')[0];
   const ul = document.createElement('ul');
   
   createDiv.appendChild(ul);
   div.appendChild(createDiv);
   createDiv.className = 'pagination';

   let numbersa = Math.ceil(list.length / n);
   
   for(let i = 1; i <= numbersa; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.appendChild(a);
      ul.appendChild(li);
      
      a.textContent = i;
      a.setAttribute("href", "#");

      if(a.textContent === '1'){
         a.className = 'active';
         showPage(listItem, a.textContent);
         }

         ul.addEventListener('click', (e)=> {
            let ev = e.target;
             showPage(listItem, ev.textContent);
             for(let i = 1; i <= numbersa; i++){
                a.className = ''; 
            } 
             
                ev.className = 'active';
               
          });
      
   }
   
}

appendPageLinks(listItem);

