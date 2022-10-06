const status_btn = document.querySelector('.statusBtn');
const status_span = document.querySelector('.statusSpan')

const book_form = document.getElementById('bookName');
const author_form = document.getElementById('authorName');
const length_form = document.getElementById('lengthBook');
const status_form = document.getElementById('statusBook');

const form_btn = document.getElementById('formBtn');


// change status of card
status_btn.addEventListener('click', function() {
    if (status_span.textContent === ' read') {
        status_span.textContent = ' not read yet';
        status_span.style.color = '#F06363';
    } else {
        status_span.textContent = ' read';
        status_span.style.color = '#31A531';
    }
});


let myLibrary = [

];

function addBookToLibrary() {
    let bookName = book_form.value;
    let bookAuthor = author_form.value;
    let bookLength = length_form.value;
    let bookStatus = status_form.value;

    const userBook = new Book(bookName, bookAuthor, bookLength, bookStatus);
    myLibrary.push(userBook);
    console.table(myLibrary);
}

function Book(book, author, length, status) {
    this.book = book
    this.author = author
    this.length = length
    this.status = status
}

Book.prototype.info = function() {
    return `${this.book} by ${this.author}, ${this.length}, ${this.status}`
}