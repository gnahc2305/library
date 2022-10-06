const status_btn = document.querySelector('.statusBtn');
const status_span = document.querySelector('.statusSpan')

const remove_btn = document.querySelector('.removeBtn');
const card_div = document.querySelector('.card');

const book_form = document.getElementById('bookName');
const author_form = document.getElementById('authorName');
const length_form = document.getElementById('lengthBook');
const status_form = document.getElementById('statusBook');

const form_btn = document.getElementById('formBtn');
const container_div = document.querySelector('.container');


// change status of card
status_btn.addEventListener('click', function() {
    if (status_span.textContent === ' Read') {
        status_span.textContent = ' Unread';
        status_span.style.color = '#F06363';
    } else {
        status_span.textContent = ' Read';
        status_span.style.color = '#31A531';
    }
});

remove_btn.addEventListener('click', function() {
    card_div.parentNode.removeChild(card_div);
})


let myLibrary = [
    // {
    //     book: 'hola'
    // }
];

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i].book);
// }


function addBookToLibrary() {
    let bookName = book_form.value;
    let bookAuthor = author_form.value;
    let bookLength = length_form.value;
    let bookStatus = status_form.value;

    const userBook = new Book(bookName, bookAuthor, bookLength, bookStatus);
    myLibrary.push(userBook);
    createCard();

    // for (let i = 0; i < myLibrary.length; i++) {
    //     console.log(myLibrary[i].book);
    // }
    // console.log(myLibrary);
}

function Book(book, author, length, status) {
    this.book = book
    this.author = author
    this.length = length
    this.status = status
}

// Book.prototype.info = function() {
//     return `${this.book} by ${this.author}, ${this.length}, ${this.status}`
// }

function createCard() {
    let card = document.createElement('div');
    card.classList.add('card');
    container_div.appendChild(card);

    createParagraph(card, 'Book: ', myLibrary[myLibrary.length - 1].book);
    createParagraph(card, 'Author: ', myLibrary[myLibrary.length - 1].author);
    createParagraph(card, 'Length: ', myLibrary[myLibrary.length - 1].length);
    createParagraph(card, 'Status: ', myLibrary[myLibrary.length - 1].status);

    
    let removeButton = document.createElement('button');
    removeButton.classList.add('removeBtn');
    removeButton.textContent = 'Remove Book';
    card.appendChild(removeButton);
    
    let statusButton = document.createElement('button');
    statusButton.classList.add('statusBtn');
    statusButton.textContent = 'Change Read Status';
    card.appendChild(statusButton);
    
    removeButton.addEventListener('click', function(e) {
        card.parentNode.removeChild(card);
    })

    // console.table(myLibrary.length);
    // console.log(myLibrary[myLibrary.length - 1].book);

    
    // statusButton.addEventListener('click', function() {
    //     if (status_span.textContent === ' read') {
    //         status_span.textContent = ' not read yet';
    //         status_span.style.color = '#F06363';
    //     } else {
    //         status_span.textContent = ' read';
    //         status_span.style.color = '#31A531';
    //     } 
    // })
}

function createParagraph(div, text, value) {

    let paragraph = document.createElement('p');
    div.appendChild(paragraph);

    let span = document.createElement('span');
    span.textContent = text + value; 
    paragraph.appendChild(span);
}