const status_btn = document.querySelector('.statusBtn');
const status_btn2 = document.querySelector('.statusBtn2');

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
    card_div.style.border = '3px solid green';
});

status_btn2.addEventListener('click', function() {
    card_div.style.border = '3px solid red';
})

remove_btn.addEventListener('click', function() {
    card_div.parentNode.removeChild(card_div);
})


let myLibrary = [];


function addBookToLibrary() {
    let bookName = book_form.value;
    let bookAuthor = author_form.value;
    let bookLength = length_form.value;
    let bookStatus = status_form.value;

    const userBook = new Book(bookName, bookAuthor, bookLength, bookStatus);
    myLibrary.push(userBook);
    createCard();

    // close modal when submitting form
    document.getElementById('myModal').style.display = "none";
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

    if (status_form.value === 'Read') {
        card.style.border = '3px solid green';
    } else {
        card.style.border = '3px solid red';
    }

    createParagraph(card, 'Book: ', myLibrary[myLibrary.length - 1].book);
    createParagraph(card, 'Author: ', myLibrary[myLibrary.length - 1].author);
    createParagraph(card, 'Length: ', `${myLibrary[myLibrary.length - 1].length} pages`);
    // createParagraph(card, 'Status: ', myLibrary[myLibrary.length - 1].status);

    
    let removeButton = document.createElement('button');
    removeButton.classList.add('removeBtn');
    removeButton.textContent = 'Remove';
    card.appendChild(removeButton);
    
    let statusButton = document.createElement('button');
    statusButton.classList.add('statusBtn');
    statusButton.textContent = 'Read';
    statusButton.style.margin = '5px';
    statusButton.style.backgroundColor = '#31A531';
    card.appendChild(statusButton);

    let statusButton2 = document.createElement('button');
    statusButton2.classList.add('statusBtn2');
    statusButton2.textContent = 'Unread';
    statusButton2.style.backgroundColor = '#EC9C29';
    card.appendChild(statusButton2);
    
    removeButton.addEventListener('click', function(e) {
        card.parentNode.removeChild(card);
        // myLibrary.splice(myLibrary.length - 1, 1);
    })
    
    statusButton.addEventListener('click', function(e) {
        card.style.border = '3px solid green';
    })

    statusButton2.addEventListener('click', () => {
        card.style.border = '3px solid red';
    })
}

function createParagraph(div, text, value) {

    if (text != 'Status: ') {
        let paragraph = document.createElement('p');
        div.appendChild(paragraph);
    
        let span = document.createElement('span');
        span.textContent = text + value; 
        paragraph.appendChild(span);
    } else {
        let paragraph = document.createElement('p');
        div.appendChild(paragraph);
    
        let span = document.createElement('span');
        span.classList.add('coloredSpan');
        span.textContent = text + value; 
        paragraph.appendChild(span);
    }
}

// Book.prototype.changeStatus = function() {
    // if (myLibrary[myLibrary.length - 1].status === 'Read') {


    // span.textContent = text + value; 
        // } else {
        // myLibrary[myLibrary.length - 1].status = 'Read';
        // span.textContent = text + value; 

    // }
//}
