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
    const toggleBtn = e.target.closest('.toggle-read-btn');
    const deleteBtn = e.target.closest('.delete-btn');
    const addBtn = e.target.closest('#add-btn');
    const submitBtn = e.target.closest('#submit-btn');
    const cancelBtn = e.target.closest('#cancel-btn');

    if (toggleBtn) {
        const bookCard = toggleBtn.closest('.book-card');
        const bookId = bookCard.getAttribute('data-id');

        myLibrary.forEach((book) => {
            if (book.id == bookId) {
                book.read = !book.read;
                toggleReadClass(toggleBtn, book.read);
            }
        });
    }
    else if (deleteBtn) {
        const bookCard = deleteBtn.closest('.book-card');
        const bookId = bookCard.getAttribute('data-id');
        if (bookCard) {
            bookCard.remove();
            const bookIndex = myLibrary.findIndex(book => book.id === bookId);
            if (bookIndex !== -1) {
                myLibrary.splice(bookIndex, 1);
            }
        }
        console.log(myLibrary);
    }
    else if (addBtn) {
        const dialog = document.querySelector("dialog");
        dialog.showModal();
    }
    else if (submitBtn) {
        return
    }
    else if (cancelBtn) {
        const dialog = document.querySelector("dialog");
        dialog.close();
    }

    displayBooks();
});

// Add Form Event Listener
const dialog = document.querySelector("#book-dialog")
const form = document.querySelector('#add-book-form')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Collect Data
    const formData = new FormData(form);
    const title = formData.get("title")
    const author = formData.get("author")
    const pages = formData.get("pages")
    const read = formData.get("read")
    const date = new Date(formData.get("releaseDate")).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    addBookToLibrary(title, author, pages, read, date)
    displayBooks();
    form.reset();
    dialog.close();
})
