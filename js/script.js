let myLibrary = [];
const bookContainer = document.querySelector("#bookContainer");


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

myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push( new Book("The Alchemist", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push( new Book("The Alchemist", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));
myLibrary.push(new Book("the Great Gatsby", "unknown", "unknown", false));


function addBookToLibrary(){
    //
}
    
function render(){
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
render();



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
    modalContent.animate([
        {bottom: "0"},
        {bottom: "101vh"}
    ],
        300
    );
    setTimeout(() =>{modal.style.display = "none"},300);
   
}

window.onclick = function(event){
    if (event.target == modal){
        modalContent.animate([
            {bottom: "0"},
            {bottom: "101vh"}
        ],
            300
        );
        setTimeout( () =>{modal.style.display = "none"},300);
    }
}


//Add a drop shadow to the addButton
addButton.addEventListener("mouseover", ()=>{
    addButton.style.filter = "drop-shadow(0 0  5px #333)";
});
addButton.addEventListener("mouseleave", ()=>{
    addButton.style.filter = "";
});