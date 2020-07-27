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

new Book("the Great Gatsby", "unknown", "unknown", false);
