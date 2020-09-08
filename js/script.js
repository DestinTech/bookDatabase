let myLibrary = [];
const bookContainer = document.querySelector("#bookContainer");
/*

TODO:
make a modal class so you can create new modals, instead of having spaghetti.


make a bookContainer class
add a bookContainer.render
add book function to it also and anytjing related.
set up a method for anything else that is needed for diplay control/
flow control

refactor to use classes instead of object constuctors

*/

// object constructor for book library
function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

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
//Creates book cards 
function render(){
    bookContainer.innerHTML = "";
    let i =0;
    //loop through the books in the array and print to screen
    for (let book of myLibrary){
        let bookDiv = document.createElement("div");
        bookDiv.id = book.id;
        bookDiv.className = "bookCard";
        i++;

        // we want to create a element for each property of the book 
        //create the title p element
        title = document.createElement("p");
        //add the text to the p element
        title.textContent = book.title;
        
        //append the p element to the bookDiv
        bookDiv.appendChild(title);

        //create a REMOVE button that removes the el
        let removeButton = document.createElement('button');
        removeButton.textContent = "X";
        removeButton.className = "removeButton";
        removeButton.id = bookDiv.id; // add an index number to the button
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

    }

    //create listener for book button (on book element)
    //Here we inplement the book "close button"
    let removeButtons = document.querySelectorAll('.removeButton');
    console.log(removeButtons);
    removeButtons.forEach((button) => {
        /*BUG: this method allows duplicate ID's to be created
        find higest ID in list, add 1
            
        */
        button.addEventListener('click', () => {
            let index = 0;
            //check for existance of the ID of the button, if it exists, mark the index of the entry in a variable.
            for (let book in myLibrary){
                console.log(myLibrary[book].id + " "+  button.id)
                if( myLibrary[book].id == button.id){
                    myLibrary.splice(book, 1);
                    render();
                }

            }
        });
    });
    
}

 const addBookModal = (()=>{
    let IDCounter = 0 ;
    //grab the objects from the DOM
    const addButton = document.querySelector("#addButton");
    const modal = document.querySelector("#myModal");
    const closeButton = document.querySelector("#closeModal");
    const modalContent = document.querySelector("#modalContent");
    
    //add an event listener  to close the modal box when background is clicked
    window.onclick = function(event){
        if (event.target == modal){
            closeModal();
        }
    }

    function addBook(form){ //we pass a form to javascript for processing 
    /*when addBookToLibrary button is clicked, we need to pull data from the inputs,
    set them to variables and then use the addBookToLibrary function with
    those parameters
    */
        let name = form.name.value;
        let author = form.author.value;
        let pages =form.pages.value; 
        let read = form.read.value;
        console.log("IDCounter = "+ IDCounter);

        let newBook = new Book(name, author, pages, read, IDCounter);
        IDCounter++;
        myLibrary.push(newBook);
        //TODO: set a response in the form to inform the user if the book was added successfully. 


        console.log(newBook);
        render();

    }      

    

     //function that fires to close modal box
    function closeModal(){
        //animate modal box to raise 1% of the viewport height off screen
        modalContent.animate([
            {bottom: "0"},
            {bottom: "101vh"}
        ],
            300
        );
        //sets modal as invisible once off screen 
        setTimeout( () =>{modal.style.display = "none"},300);
    }
    
    //Display the modal box
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
        

    //prevent leaving the page once the addBookButton is clicked  (default action is to send to a URL to process)  
    document.querySelector("#addBookButton").addEventListener("click", function(event){
        event.preventDefault();
    });
    return {addBook};
})();

//Add book button (main screen)
//Add a drop shadow to the addButton (+) on landing page
addButton.addEventListener("mouseover", ()=>{
    addButton.style.filter = "drop-shadow(0 0  5px white)";
});
addButton.addEventListener("mouseleave", ()=>{
    addButton.style.filter = "";
});




//main
render();