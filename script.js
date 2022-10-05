let myLibrary = [
    // {
    //     book: 'The Hobbit',
    //     author: 'J.R.R Tolkien',
    //     length: '295 pages',
    //     status: 'not read yet',
    // },
    // {

    // }
];

function addBookToLibrary() {
    bookName = prompt('Name of the book:');
    bookAuthor = prompt('Author of the book:');
    bookLength = prompt('Length of the book:');
    bookStatus = prompt('Have you read the book?');

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
  
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet' )


// myLibrary.push(theHobbit);

// console.table(myLibrary);

// console.log(theHobbit.info())