// create array for Library
const myLibrary = [];
    
// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.reportBook = function() {
        console.log(this.info());
        return this.info();
    }
}

// select library container
const container = document.getElementById('library')

// function to populate cards for each book
function displayBooks() {
    container.innerHTML = '';
    myLibrary.forEach((Book) => {
        const card = document.createElement("div")
        card.classList = "card"

        //construct content for card
        const content = 
            `<div class="card">
                <button class="dropdown-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg></button>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item" id="remove-book" data-identifier="${myLibrary.indexOf(Book)}">remove book</a>
                    <a href="#" class="dropdown-item" id="add-notes" data-identifier="${myLibrary.indexOf(Book)}">add notes</a>
                </div>
                <div class="card-content">
                    <h3>Title:</h3><p class="title">${Book.title}</p>
                    <h3>Author:</h3><p class="author">${Book.author}</p>
                    <h3>Pages:</h3><p class="pages">${Book.pages}</p>
                    <h3>Read?:</h3><p class="read">${(() => {if (Book.read === true) {return 'yes';} else {return 'no';};})()}</p>
                </div>
            </div>`
            ;
            //add card to container
            container.innerHTML += content;
    });
};

// function to add a new book to myLibrary array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

//select modal and buttons
const modal = document.getElementById('modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const addBookForm = document.getElementById('addBookForm');

//open & close Modal dialog
openModal.addEventListener('click', () => {
    addBookForm.reset();
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

//add book on submit click 
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");

    if (title.value == '' || author.value == '') {
        alert ('Please provide a title and author')
    } else {
        addBookToLibrary(title.value, author.value, pages.value, read.checked);
        modal.close();
    }
})

document.addEventListener("click", (e) => {
    if (e.target.matches("#remove-book")) {
        e.preventDefault(); //avoid anchor tag redirection
        const index = e.target.dataset.identifier; //find index of book
        myLibrary.splice(index, 1); //remove book from array
        displayBooks(); //refresh library display
    }
})