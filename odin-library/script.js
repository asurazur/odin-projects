const myLibrary = [];

function Book(id, title, author, pages, read, date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.releaseDate = date;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read, date) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, read, date);
    myLibrary.push(book);
}

// Loop through the array and display each book on the page

// Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// Add a button on each book’s display to change its read status.