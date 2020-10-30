/*
1.DOM selection
2.Event Listner
3.Basic validation
4.Creting element
5.Append
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click',function(e){
    e.preventDefault();

    if(title.value =='' && author.value =='' && year.value ==''){
        alert('bahi kico akta den!')
    }
    else{
        const newRow = document.createElement('tr');
        
        //creting new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);



          //creting new title
          const newAuthor = document.createElement('th');
          newAuthor.innerHTML = author.value;
          newRow.appendChild(newAuthor);


            //creting new title
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        bookList.appendChild(newRow);


    }

});

