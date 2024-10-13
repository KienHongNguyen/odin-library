const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Function to display books
function displayBooks() {
  const libraryDisplay = document.getElementById("libraryDisplay");
  libraryDisplay.innerHTML = ""; // Clear the display before showing updated library

  myLibrary.forEach((book, index) => {
    // Create a div for each book
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index);

    // Add book details
    bookCard.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
    `;

    // Append bookCard to libraryDisplay
    libraryDisplay.appendChild(bookCard);
  });

  // Add event listeners for remove and toggle read buttons
  document.querySelectorAll(".remove-book").forEach((button, index) => {
    button.addEventListener("click", () => removeBook(index));
  });

  document.querySelectorAll(".toggle-read").forEach((button, index) => {
    button.addEventListener("click", () => toggleReadStatus(index));
  });
}

// Function to remove a book
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(); // Re-display after removal
}

// Function to toggle read status
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks(); // Re-display after toggling
}

// Form handling
document
  .getElementById("newBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit action

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Clear the form and hide it after submission
    document.getElementById("newBookForm").reset();
    document.getElementById("bookForm").style.display = "none";
  });

// New Book Button: Show the form
document.getElementById("newBookBtn").addEventListener("click", function () {
  document.getElementById("bookForm").style.display = "block";
});
