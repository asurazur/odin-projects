const myLibrary = [];

function Book(id, title, author, pages, read, date) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.date = date;
}

function addBookToLibrary(title, author, pages, read, date) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, read, date);
    myLibrary.push(book);
}
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true, "June 26, 1997");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false, "September 21, 1937");
addBookToLibrary("1984", "George Orwell", 328, true, "June 8, 1949");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false, "July 11, 1960");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true, "April 10, 1925");

// Loop through the array and display each book on the page

// Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read and anything else you might want.

// Add a button on each book’s display to remove the book from the library.

// Add a button on each book’s display to change its read status.