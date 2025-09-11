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
function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-id', book.id);

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        const title = document.createElement('div');
        title.textContent = book.title; 
        const author = document.createElement('div'); 
        author.textContent = `Author: ${book.author}`;
        const pages = document.createElement('div'); 
        pages.textContent = `Pages: ${book.pages}`;
        const date = document.createElement('div'); 
        date.textContent = `Release Date: ${book.date}`;
        bookInfo.append(title, author, pages, date);

        const bookButtons = document.createElement('div');
        bookButtons.classList.add('book-buttons');
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('toggle-read-btn');
        const deleteBtn = document.createElement('button');
        toggleReadBtn.textContent = book.read ? 'Read' : 'Not Read';
        toggleReadClass(toggleReadBtn, book.read)
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        bookButtons.append(toggleReadBtn, deleteBtn);

        bookCard.append(bookInfo, bookButtons);
        bookContainer.appendChild(bookCard);
    })
}
displayBooks();

// Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages, whether it’s been read and anything else you might want.

function toggleReadClass(target, isRead) {
    if (isRead) {
        target.classList.add('read');
        target.classList.remove('unread');
    } else {
        target.classList.add('unread');
        target.classList.remove('read');
    }
}

// Add a button on each book’s display to remove the book from the library.
// Add a button on each book’s display to change its read status.
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('toggle-read-btn')) {
        // get the id of the book that the card refers to
        const bookCard = e.target.closest('.book-card');
        const bookId = bookCard.getAttribute('data-id');

        // loop through the myLibrary Array and check if the id match with one of the elements
        myLibrary.forEach((book) => {
            if(book.id == bookId){
                // if a match is found, toggle the read
                book.read = !book.read
                // modify the styles of the button for UX
                toggleReadClass(e.target, book.read)
            }
        })
        displayBooks();
    }
})
