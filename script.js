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
    if (status_span.textContent === ' read') {
        status_span.textContent = ' not read yet';
        status_span.style.color = '#F06363';
    } else {
        status_span.textContent = ' read';
        status_span.style.color = '#31A531';
    }
});

remove_btn.addEventListener('click', function() {
    card_div.parentNode.removeChild(card_div);
})


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

    createCard();
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


    let paragraph1 = document.createElement('p');
    card.appendChild(paragraph1);
    let span1 = document.createElement('span');
    span1.textContent = 'Book: ';
    paragraph1.appendChild(span1);

    let paragraph2 = document.createElement('p');
    card.appendChild(paragraph2);
    let span2 = document.createElement('span');
    span2.textContent = 'Author: ';
    paragraph2.appendChild(span2);

    let paragraph3 = document.createElement('p');
    card.appendChild(paragraph3);
    let span3 = document.createElement('span');
    span3.textContent = 'Length: ';
    paragraph3.appendChild(span3);

    let paragraph4 = document.createElement('p');
    card.appendChild(paragraph4);
    let span4 = document.createElement('span');
    span4.textContent = 'Status: ';
    paragraph4.appendChild(span4);

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

// function createParagraph(text) {

//     let p = document.createElement('p');
//     card.appendChild(p);

//     let sp = document.createElement('span');
//     sp.textContent = text;
//     card.appendChild(sp);
// }