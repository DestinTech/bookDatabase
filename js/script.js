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