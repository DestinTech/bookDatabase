let myLibrary = [];
const bookContainer = document.querySelector("#bookContainer");
/*make a modal class so you can create new modals, 
instead of having spaghetti.


make a bookContainer class
add a bookContainer.render
add book function to it also and anytjing related.
set up a method for anything else that is needed for diplay control/
flow control

refactor to use classes instead of object constuctors

*/

// object constructor for book library
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if (read == true){
            readText = "already read";
        }
        else{
            readText = "not read yet";
        }
        return `${title} by ${author}, ${pages} pages, ${readText}.`;
    }
}


function addBookToLibrary(form){ //we pass a form to javascript for processing 
   
    /*when addBookToLibrary button is clicked, we need to pull data from the inputs,
set them to variables and then use the addBookToLibrary function with
those parameters
*/
    
    let name = form.name.value;
    let author = form.author.value;
    let pages =form.pages.value; 
    let read = form.read.value;
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
    render();
  }
    
function render(){
    bookContainer.innerHTML = "";
    let i =0;
    //loop through the books in the array and print to screen
    for (let book of myLibrary){
        let bookDiv = document.createElement("div");
        bookDiv.id = i;
        bookDiv.className = "bookCard";
        i++;

        // we want to create a element for each property of the book 
        //create the title p element
        title = document.createElement("p");
        //add the text to the p element
        title.textContent = book.title;
        
        //append the p element to the bookDiv
        bookDiv.appendChild(title);
        //create a button that removes the el
        let removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.style.display = "inline";
        bookDiv.appendChild(removeButton);
        

        //create the author p element
        author = document.createElement("p");
        //add the text to the p element
        author.textContent = "Author: "+ book.author;
        //append the p element to the bookDiv
        bookDiv.appendChild(author);

        //create the pages p element
        pages = document.createElement("p");
        //add the text to the p element
        pages.textContent = "pages: "+ book.pages;
        //append the p element to the bookDiv
        bookDiv.appendChild(pages);


        read = document.createElement("p");
        read.textContent = "read: "+ book.read;
        bookDiv.appendChild(read);
        

        //add the bookDiv to the container
        bookContainer.appendChild(bookDiv);
        console.log("added "+book.title);

    }
}



function closeModal(){
    modalContent.animate([
        {bottom: "0"},
        {bottom: "101vh"}
    ],
        300
    );
    setTimeout( () =>{modal.style.display = "none"},300);
}



const addButton = document.querySelector("#addButton");
const modal = document.querySelector("#myModal");
const closeButton = document.querySelector("#closeModal");
const modalContent = document.querySelector("#modalContent");


//opens modal box
addButton.addEventListener("click" , () =>{
    //set the box off screen, and then animate the block on to the screen
    //then we use a timer to put the box on the screen in 300ms
    modal.style.display = "block";
    modalContent.animate([
        {bottom: "101vh"},
        {bottom: "0"}
    ],
        300
    );
});


//closes the modal box if the user clicks on the close span(x)
closeButton.onclick = function(){
    closeModal();
   
}

window.onclick = function(event){
    if (event.target == modal){
        closeModal();
    }
}

//Add a drop shadow to the addButton
addButton.addEventListener("mouseover", ()=>{
    addButton.style.filter = "drop-shadow(0 0  5px white)";
});
addButton.addEventListener("mouseleave", ()=>{
    addButton.style.filter = "";
});



document.querySelector("#addBookButton").addEventListener("click", function(event){
    event.preventDefault();
});


const removeButtons = document.querySelectorAll('removeButton');
console.log(removeButton);

//main
render();